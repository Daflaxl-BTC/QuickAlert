import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendNotificationEmail, PreOrderData } from '@/lib/email'
import { notifyN8NPreOrderSubmitted } from '@/lib/n8n'

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

    const { name, email, product, message } = validationResult.data

    const preOrderData: PreOrderData = {
      name,
      email,
      product,
      message,
    }

    // Benachrichtigungs-E-Mail senden (an Admin)
    console.log(`📧 Neue Vorbestellung von: ${preOrderData.email}`)
    const notificationResult = await sendNotificationEmail(preOrderData)

    if (!notificationResult.success) {
      console.error('❌ Failed to send notification email:', notificationResult.error)
      // Fehler wird nicht an den Nutzer weitergegeben, da die Anmeldung trotzdem erfolgreich ist
    }

    // n8n Webhook aufrufen (als bestätigt markiert, da kein Double Opt-In mehr)
    notifyN8NPreOrderSubmitted({
      ...preOrderData,
      confirmed: true, // Sofort als bestätigt markieren
    }).catch((error) => {
      console.error('n8n webhook error (non-blocking):', error)
    })

    return NextResponse.json({
      success: true,
      message: 'Vielen Dank! Sie sind jetzt auf unserer Vorbestellungsliste.',
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
