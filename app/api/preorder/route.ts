import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendConfirmationEmail, sendNotificationEmail, PreOrderData } from '@/lib/email'
import { tokenStore, cleanupExpiredTokens } from '@/lib/tokenStore'
import { notifyN8NPreOrderSubmitted } from '@/lib/n8n'
import crypto from 'crypto'

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

function generateToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validierung
    const validationResult = preOrderSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Ungültige Eingaben', details: validationResult.error.issues },
        { status: 400 }
      )
    }

    const { name, email, product, message, privacyAccepted } = validationResult.data

    // Token generieren
    const confirmationToken = generateToken()
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000 // 24 Stunden

    const preOrderData: PreOrderData = {
      name,
      email,
      product,
      message,
      confirmationToken,
    }

    // Token speichern
    tokenStore.set(confirmationToken, {
      data: preOrderData,
      expiresAt,
    })

    // E-Mails senden
    const [confirmationResult, notificationResult] = await Promise.all([
      sendConfirmationEmail(preOrderData),
      sendNotificationEmail(preOrderData),
    ])

    if (!confirmationResult.success) {
      console.error('Failed to send confirmation email:', confirmationResult.error)
      // Token entfernen wenn E-Mail-Versand fehlschlägt
      tokenStore.delete(confirmationToken)
      return NextResponse.json(
        { error: 'Fehler beim Versenden der Bestätigungs-E-Mail. Bitte versuchen Sie es später erneut.' },
        { status: 500 }
      )
    }

    // Cleanup: Alte Tokens entfernen (älter als 24h)
    cleanupExpiredTokens()

    // n8n Webhook aufrufen (asynchron, blockiert nicht)
    notifyN8NPreOrderSubmitted(preOrderData).catch((error) => {
      console.error('n8n webhook error (non-blocking):', error)
    })

    return NextResponse.json({
      success: true,
      message: 'Vielen Dank! Bitte bestätigen Sie Ihre E-Mail-Adresse, um Ihre Vorbestellung abzuschließen.',
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
