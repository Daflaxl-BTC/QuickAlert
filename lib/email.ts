import { Resend } from 'resend'

// Resend Client zur Runtime initialisieren (nicht zur Build-Zeit)
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  console.log('🔍 Prüfe RESEND_API_KEY:', {
    exists: !!apiKey,
    length: apiKey?.length || 0,
    startsWith: apiKey?.substring(0, 3) || 'N/A',
    allEnvVars: Object.keys(process.env).filter(key => key.includes('RESEND')).join(', ') || 'Keine RESEND Variablen gefunden'
  })
  
  if (!apiKey) {
    console.error('❌ RESEND_API_KEY ist nicht gesetzt! E-Mail-Versand wird nicht funktionieren.')
    console.error('📋 Verfügbare Environment Variables:', Object.keys(process.env).filter(key => key.includes('RESEND') || key.includes('EMAIL')))
    return null
  }
  
  console.log('✅ RESEND_API_KEY gefunden, erstelle Resend Client')
  return new Resend(apiKey)
}

export interface PreOrderData {
  name: string
  email: string
  product: 'BASE' | 'PRO' | 'BOTH'
  message?: string
  confirmationToken: string
}

export async function sendConfirmationEmail(data: PreOrderData) {
  const resend = getResendClient()
  if (!resend) {
    return { success: false, error: 'RESEND_API_KEY ist nicht konfiguriert' }
  }

  const confirmationUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://quickalert.eu'}/api/preorder/confirm?token=${data.confirmationToken}`
  
  try {
    console.log(`📧 Sende Bestätigungs-E-Mail an: ${data.email}`)
    
    // E-Mail-Adresse validieren
    if (!data.email || !data.email.includes('@')) {
      throw new Error(`Ungültige E-Mail-Adresse: ${data.email}`)
    }
    
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'QuickAlert <noreply@quickalert.eu>',
      to: data.email,
      subject: 'Bitte bestätigen Sie Ihre Vorbestellung bei QuickAlert',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #F97316 0%, #EA580C 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; font-weight: 900; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .button { display: inline-block; background: #F97316; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; font-size: 12px; color: #6b7280; }
            .info-box { background: #fef3c7; border-left: 4px solid #F97316; padding: 15px; margin: 20px 0; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>QuickAlert</h1>
            </div>
            <div class="content">
              <h2 style="color: #1f2937; margin-top: 0;">Vielen Dank für Ihr Interesse!</h2>
              <p>Hallo ${data.name},</p>
              <p>vielen Dank für Ihre Vorbestellung bei QuickAlert. Um Ihre Anmeldung abzuschließen, bitten wir Sie, Ihre E-Mail-Adresse zu bestätigen.</p>
              
              <div style="text-align: center;">
                <a href="${confirmationUrl}" class="button">E-Mail-Adresse bestätigen</a>
              </div>
              
              <div class="info-box">
                <strong>Wichtig:</strong> Dieser Bestätigungslink ist 24 Stunden gültig. Falls der Button nicht funktioniert, kopieren Sie bitte folgenden Link in Ihren Browser:<br>
                <a href="${confirmationUrl}" style="color: #F97316; word-break: break-all;">${confirmationUrl}</a>
              </div>
              
              <p><strong>Ihre Vorbestellung:</strong></p>
              <ul>
                <li>Produkt: ${data.product === 'BASE' ? 'QuickAlert BASE (29€)' : data.product === 'PRO' ? 'QuickAlert PRO (49€)' : 'Beide Modelle'}</li>
                ${data.message ? `<li>Nachricht: ${data.message}</li>` : ''}
              </ul>
              
              <p style="margin-top: 30px; font-size: 12px; color: #6b7280;">
                Mit freundlichen Grüßen<br>
                Ihr QuickAlert Team
              </p>
            </div>
            <div class="footer">
              <p>QuickAlert e.U. | Scharnhorststr. 46, 80992 München | <a href="https://quickalert.eu/datenschutz" style="color: #F97316;">Datenschutz</a></p>
              <p>Sie erhalten diese E-Mail, weil Sie sich für die Vorbestellungsliste angemeldet haben.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    
    console.log(`✅ Bestätigungs-E-Mail erfolgreich versendet an: ${data.email}`)
    console.log('📦 Resend Response:', JSON.stringify(result, null, 2))
    
    // Prüfen ob Resend einen Fehler zurückgibt
    if (result.error) {
      throw new Error(`Resend API Fehler: ${JSON.stringify(result.error)}`)
    }
    
    return { success: true, result }
  } catch (error: any) {
    console.error(`❌ Fehler beim Versenden der Bestätigungs-E-Mail an ${data.email}:`, error)
    console.error('❌ Fehler-Details:', {
      message: error?.message,
      stack: error?.stack,
      response: error?.response,
    })
    const errorMessage = error?.message || error?.toString() || 'Unbekannter Fehler'
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
      to: process.env.ADMIN_EMAIL || 'felix-bredl@gmx.de',
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
                <span class="label">Name:</span> ${data.name}
              </div>
              <div class="info-row">
                <span class="label">E-Mail:</span> ${data.email}
              </div>
              <div class="info-row">
                <span class="label">Produkt:</span> ${data.product === 'BASE' ? 'QuickAlert BASE (29€)' : data.product === 'PRO' ? 'QuickAlert PRO (49€)' : 'Beide Modelle'}
              </div>
              ${data.message ? `
              <div class="info-row">
                <span class="label">Nachricht:</span> ${data.message}
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
  } catch (error: any) {
    console.error('Error sending notification email:', error)
    const errorMessage = error?.message || error?.toString() || 'Unbekannter Fehler'
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
              <p>Hallo ${data.name},</p>
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
              <p>QuickAlert e.U. | Scharnhorststr. 46, 80992 München | <a href="https://quickalert.eu/datenschutz" style="color: #F97316;">Datenschutz</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    
    return { success: true }
  } catch (error: any) {
    console.error('Error sending confirmed email:', error)
    const errorMessage = error?.message || error?.toString() || 'Unbekannter Fehler'
    return { success: false, error: errorMessage }
  }
}
