import { PreOrderData } from './email'

// In-memory storage für Tokens (in Produktion sollte eine Datenbank verwendet werden)
// Token wird nach 24 Stunden ungültig
export const tokenStore = new Map<string, { data: PreOrderData; expiresAt: number }>()

// Cleanup-Funktion für abgelaufene Tokens
export function cleanupExpiredTokens() {
  const now = Date.now()
  for (const [token, value] of tokenStore.entries()) {
    if (value.expiresAt < now) {
      tokenStore.delete(token)
    }
  }
}

// Regelmäßige Bereinigung (alle 5 Minuten)
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupExpiredTokens, 5 * 60 * 1000)
}
