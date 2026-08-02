import { Resend } from 'resend'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error('RESEND_API_KEY ist nicht gesetzt.')
    return null
  }

  return new Resend(apiKey)
}

export interface PreOrderData {
  name: string
  email: string
  product: 'BASE' | 'PRO' | 'BOTH'
  message?: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendDoubleOptInEmail(data: PreOrderData, confirmationUrl: string) {
  const resend = getResendClient()
  if (!resend) {
    return { success: false, error: 'RESEND_API_KEY ist nicht konfiguriert' }
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'QuickAlert <noreply@quickalert.eu>',
      to: data.email,
      subject: 'Bitte bestätigen Sie Ihre E-Mail-Adresse (QuickAlert)',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #F97316; padding: 24px; border-radius: 12px 12px 0 0; text-align: center; color: #fff; }
            .content { background: #fff; border: 1px solid #e5e7eb; border-top: none; padding: 24px; }
            .button { display: inline-block; margin: 20px 0; padding: 12px 20px; background: #F97316; color: #fff !important; text-decoration: none; border-radius: 8px; font-weight: 700; }
            .hint { font-size: 12px; color: #6b7280; }
            .footer { background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 16px; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Bitte E-Mail bestätigen</h1>
            </div>
            <div class="content">
              <p>Hallo ${escapeHtml(data.name)},</p>
              <p>vielen Dank für Ihr Interesse an QuickAlert. Bitte bestätigen Sie Ihre E-Mail-Adresse, damit wir Ihren Eintrag in die Vorbestellliste aktivieren können.</p>
              <p><a class="button" href="${confirmationUrl}">E-Mail jetzt bestätigen</a></p>
              <p class="hint">Falls der Button nicht funktioniert, kopieren Sie diesen Link in Ihren Browser:<br>${confirmationUrl}</p>
              <p class="hint">Dieser Bestätigungslink ist 24 Stunden gültig.</p>
            </div>
            <div class="footer">
              QuickAlert | Felix Ventures, Felix Georg Bredl, c/o Autorenglück #43669, Albert-Einstein-Str. 47, 02977 Hoyerswerda |
              <a href="https://quickalert.eu/datenschutz" style="color: #F97316;">Datenschutz</a>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return { success: true }
  } catch (error: unknown) {
    console.error('Error sending DOI email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
    return { success: false, error: errorMessage }
  }
}

export async function sendNotificationEmail(data: PreOrderData) {
  const resend = getResendClient()
  if (!resend) {
    return { success: false, error: 'RESEND_API_KEY ist nicht konfiguriert' }
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'QuickAlert <noreply@quickalert.eu>',
      to: process.env.ADMIN_EMAIL || 'quickalert@outlook.de',
      subject: `Neue Vorbestellung: ${data.name} - ${data.product}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #F97316; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; color: white; }
            .content { background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; }
            .info-row { padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
            .label { font-weight: bold; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Neue Vorbestellung</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Name:</span> ${escapeHtml(data.name)}
              </div>
              <div class="info-row">
                <span class="label">E-Mail:</span> ${escapeHtml(data.email)}
              </div>
              <div class="info-row">
                <span class="label">Produkt:</span> ${data.product === 'BASE' ? 'QuickAlert BASE (29€)' : data.product === 'PRO' ? 'QuickAlert PRO (49€)' : 'Beide Modelle'}
              </div>
              ${data.message ? `
              <div class="info-row">
                <span class="label">Nachricht:</span> ${escapeHtml(data.message)}
              </div>
              ` : ''}
              <div class="info-row">
                <span class="label">Datum:</span> ${new Date().toLocaleString('de-DE')}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    
    return { success: true }
  } catch (error: unknown) {
    console.error('Error sending notification email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
    return { success: false, error: errorMessage }
  }
}

export async function sendConfirmedEmail(data: PreOrderData) {
  const resend = getResendClient()
  if (!resend) {
    return { success: false, error: 'RESEND_API_KEY ist nicht konfiguriert' }
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'QuickAlert <noreply@quickalert.eu>',
      to: data.email,
      subject: 'Ihre Vorbestellung wurde bestätigt - QuickAlert',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: 900; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✓ Bestätigt</h1>
            </div>
            <div class="content">
              <h2 style="color: #1f2937; margin-top: 0;">Vielen Dank für Ihre Bestätigung!</h2>
              <p>Hallo ${escapeHtml(data.name)},</p>
              <p>Ihre Vorbestellung wurde erfolgreich bestätigt. Sie sind jetzt auf unserer Vorbestellungsliste für:</p>
              <p style="background: #fef3c7; padding: 15px; border-radius: 8px; font-weight: bold;">
                ${data.product === 'BASE' ? 'QuickAlert BASE (29€)' : data.product === 'PRO' ? 'QuickAlert PRO (49€)' : 'Beide Modelle (BASE + PRO)'}
              </p>
              <p>Wir werden Sie informieren, sobald die Produkte verfügbar sind und der Verkauf startet.</p>
              <p style="margin-top: 30px; font-size: 12px; color: #6b7280;">
                Mit freundlichen Grüßen<br>
                Ihr QuickAlert Team
              </p>
            </div>
            <div class="footer">
              <p>Felix Ventures, Felix Georg Bredl (QuickAlert) | c/o Autorenglueck #43669, Albert-Einstein-Str. 47, 02977 Hoyerswerda | <a href="https://quickalert.eu/datenschutz" style="color: #F97316;">Datenschutz</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    
    return { success: true }
  } catch (error: unknown) {
    console.error('Error sending confirmed email:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
    return { success: false, error: errorMessage }
  }
}
