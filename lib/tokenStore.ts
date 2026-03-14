import { PreOrderData } from './email'

export interface PendingPreOrderToken {
  data: PreOrderData
  createdAt: number
  expiresAt: number
  ipAddress?: string
  userAgent?: string
}

// In-memory storage fuer Tokens (in Produktion sollte eine Datenbank verwendet werden)
// Token wird nach 24 Stunden ungueltig
export const tokenStore = new Map<string, PendingPreOrderToken>()

// Cleanup-Funktion fuer abgelaufene Tokens
export function cleanupExpiredTokens() {
  const now = Date.now()
  for (const [token, value] of tokenStore.entries()) {
    if (value.expiresAt < now) {
      tokenStore.delete(token)
    }
  }
}

// Regelmaessige Bereinigung (alle 5 Minuten)
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredTokens, 5 * 60 * 1000)
}
