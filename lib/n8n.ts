export interface N8NWebhookPayload {
  event: 'preorder_submitted' | 'preorder_confirmed'
  data: {
    name: string
    email: string
    product: 'BASE' | 'PRO' | 'BOTH'
    message?: string
    timestamp: string
    confirmed: boolean
  }
}

/**
 * Sendet einen Webhook an n8n (asynchron, blockiert nicht)
 * @param payload - Die Daten, die an n8n gesendet werden sollen
 * @param webhookUrl - Die n8n Webhook-URL (optional, aus Environment Variable)
 * @returns Promise mit Erfolgsstatus
 */
export async function sendN8NWebhook(
  payload: N8NWebhookPayload,
  webhookUrl?: string
): Promise<{ success: boolean; error?: string }> {
  const url = webhookUrl || process.env.N8N_WEBHOOK_URL

  // Wenn keine Webhook-URL konfiguriert ist, einfach erfolgreich zurückgeben
  if (!url) {
    return { success: true }
  }

  try {
    // Asynchroner Aufruf - blockiert nicht den Hauptprozess
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).catch((error) => {
      // Fehler werden geloggt, aber nicht weitergegeben
      console.error('n8n Webhook Error (non-blocking):', error)
    })

    // Sofort erfolgreich zurückgeben (fire-and-forget)
    return { success: true }
  } catch (error) {
    // Fehler werden geloggt, aber nicht weitergegeben
    console.error('n8n Webhook Error (non-blocking):', error)
    return { success: true } // Immer erfolgreich, damit Hauptprozess nicht blockiert wird
  }
}

/**
 * Sendet Webhook für neue Vorbestellung
 */
export async function notifyN8NPreOrderSubmitted(data: {
  name: string
  email: string
  product: 'BASE' | 'PRO' | 'BOTH'
  message?: string
  confirmed?: boolean
}) {
  return sendN8NWebhook(
    {
      event: 'preorder_submitted',
      data: {
        ...data,
        timestamp: new Date().toISOString(),
        confirmed: data.confirmed ?? false,
      },
    },
    process.env.N8N_WEBHOOK_URL
  )
}

/**
 * Sendet Webhook für bestätigte Vorbestellung
 */
export async function notifyN8NPreOrderConfirmed(data: {
  name: string
  email: string
  product: 'BASE' | 'PRO' | 'BOTH'
  message?: string
}) {
  return sendN8NWebhook(
    {
      event: 'preorder_confirmed',
      data: {
        ...data,
        timestamp: new Date().toISOString(),
        confirmed: true,
      },
    },
    process.env.N8N_WEBHOOK_CONFIRMED || process.env.N8N_WEBHOOK_URL
  )
}
