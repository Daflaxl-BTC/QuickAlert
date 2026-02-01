import { NextRequest, NextResponse } from 'next/server'
import { tokenStore } from '@/lib/tokenStore'
import { sendConfirmedEmail } from '@/lib/email'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/?error=missing_token', request.url))
  }

  const tokenData = tokenStore.get(token)

  if (!tokenData) {
    return NextResponse.redirect(new URL('/?error=invalid_token', request.url))
  }

  // Prüfe ob Token abgelaufen ist
  if (Date.now() > tokenData.expiresAt) {
    tokenStore.delete(token)
    return NextResponse.redirect(new URL('/?error=expired_token', request.url))
  }

  // Bestätigungs-E-Mail senden
  await sendConfirmedEmail(tokenData.data)

  // Token entfernen (bereits bestätigt)
  tokenStore.delete(token)

  // Erfolgreiche Bestätigungsseite
  return NextResponse.redirect(new URL('/?confirmed=true', request.url))
}
