import { NextRequest, NextResponse } from 'next/server'
import { tokenStore } from '@/lib/tokenStore'
import { sendConfirmedEmail, sendNotificationEmail } from '@/lib/email'
import { notifyN8NPreOrderConfirmed } from '@/lib/n8n'

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

  if (Date.now() > tokenData.expiresAt) {
    tokenStore.delete(token)
    return NextResponse.redirect(new URL('/?error=expired_token', request.url))
  }

  const userMailResult = await sendConfirmedEmail(tokenData.data)
  if (!userMailResult.success) {
    return NextResponse.redirect(new URL('/?error=confirm_mail_failed', request.url))
  }

  const adminMailResult = await sendNotificationEmail(tokenData.data)
  if (!adminMailResult.success) {
    console.error('Admin notification mail failed:', adminMailResult.error)
  }

  notifyN8NPreOrderConfirmed({
    name: tokenData.data.name,
    email: tokenData.data.email,
    product: tokenData.data.product,
    message: tokenData.data.message,
  }).catch((error) => {
    console.error('n8n webhook error (non-blocking):', error)
  })

  tokenStore.delete(token)

  return NextResponse.redirect(new URL('/?confirmed=true', request.url))
}
