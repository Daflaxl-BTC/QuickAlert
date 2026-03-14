import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendDoubleOptInEmail, PreOrderData } from '@/lib/email'
import { notifyN8NPreOrderSubmitted } from '@/lib/n8n'
import { tokenStore } from '@/lib/tokenStore'

const preOrderSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  product: z.enum(['BASE', 'PRO', 'BOTH'], {
    message: 'Bitte wählen Sie ein Produkt aus',
  }),
  message: z.string().optional(),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen',
  }),
})

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim()
  }
  return request.headers.get('x-real-ip') || undefined
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validationResult = preOrderSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Ungültige Eingaben', details: validationResult.error.issues },
        { status: 400 }
      )
    }

    const { name, email, product, message } = validationResult.data

    const preOrderData: PreOrderData = {
      name,
      email,
      product,
      message,
    }

    const token = crypto.randomUUID()
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000
    const createdAt = Date.now()
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin
    const confirmationUrl = `${baseUrl}/api/preorder/confirm?token=${encodeURIComponent(token)}`

    tokenStore.set(token, {
      data: preOrderData,
      createdAt,
      expiresAt,
      ipAddress: getClientIp(request),
      userAgent: request.headers.get('user-agent') || undefined,
    })

    const doiResult = await sendDoubleOptInEmail(preOrderData, confirmationUrl)
    if (!doiResult.success) {
      tokenStore.delete(token)
      return NextResponse.json(
        { error: 'Bestätigungs-E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' },
        { status: 500 }
      )
    }

    // Eingang der Vorbestellung an n8n melden (noch unbestaetigt)
    notifyN8NPreOrderSubmitted({
      ...preOrderData,
      confirmed: false,
    }).catch((error) => {
      console.error('n8n webhook error (non-blocking):', error)
    })

    return NextResponse.json({
      success: true,
      message: 'Bitte bestätigen Sie Ihre E-Mail-Adresse über den Link in der Bestätigungs-E-Mail.',
    })
  } catch (error) {
    console.error('Error processing preorder:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
    return NextResponse.json(
      { 
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}
