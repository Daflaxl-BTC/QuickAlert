# Environment Variables Setup

Für die Vorbestellungsliste müssen folgende Environment Variables in Vercel konfiguriert werden:

## Erforderliche Variablen

### RESEND_API_KEY
- **Beschreibung**: API Key für Resend (E-Mail-Versand)
- **Erstellen**: Account unter https://resend.com erstellen (kostenlos bis 3.000 E-Mails/Monat)
- **Beispiel**: `re_xxxxxxxxxxxxxxxxxxxxx`

### NEXT_PUBLIC_BASE_URL
- **Beschreibung**: Basis-URL der Website (für Bestätigungslinks in E-Mails)
- **Wert**: `https://quickalert.eu`
- **Hinweis**: Muss mit `NEXT_PUBLIC_` beginnen, damit es im Client verfügbar ist

### ADMIN_EMAIL
- **Beschreibung**: E-Mail-Adresse, an die Benachrichtigungen über neue Vorbestellungen geschickt werden (Ihre Geschäfts-E-Mail).
- **Umstellung auf neue E-Mail**: Einfach `ADMIN_EMAIL` in Vercel und in `.env.local` auf die neue Adresse setzen – kein Code-Change nötig.
- **Standard**, wenn nicht gesetzt: `felix-bredl@gmx.de`

### N8N_WEBHOOK_URL
- **Beschreibung**: n8n Webhook-URL für Automatisierungen (z.B. Google Sheets, Slack)
- **Erstellen**: n8n Workflow erstellen → Webhook Node → URL kopieren
- **Optional**: Wenn nicht gesetzt, werden keine n8n-Webhooks gesendet
- **Beispiel**: `https://your-n8n-instance.com/webhook/abc123`

### N8N_WEBHOOK_CONFIRMED
- **Beschreibung**: Separate n8n Webhook-URL für bestätigte Vorbestellungen
- **Optional**: Falls nicht gesetzt, wird `N8N_WEBHOOK_URL` verwendet
- **Beispiel**: `https://your-n8n-instance.com/webhook/xyz789`

## Setup in Vercel

1. Gehen Sie zu Ihrem Vercel-Projekt (z. B. **safewarn-munich**)
2. **Node.js-Version (Warnung „20.x 24.x“ entfernen):**  
   **Settings** → **General** (oder **Build & Development**) → **Node.js Version** → **20.x** auswählen (nicht 24.x). So stimmt die Einstellung mit `package.json` überein und die gelbe Warnung verschwindet.
3. **Settings** → **Environment Variables**
4. Fügen Sie die Variablen hinzu:
   - `RESEND_API_KEY` = Ihr Resend API Key
   - `NEXT_PUBLIC_BASE_URL` = `https://quickalert.eu`
   - `ADMIN_EMAIL` = `felix-bredl@gmx.de` (optional)
   - `N8N_WEBHOOK_URL` = Ihre n8n Webhook-URL (optional)
   - `N8N_WEBHOOK_CONFIRMED` = Separate n8n Webhook-URL für Bestätigungen (optional)

## Lokale Entwicklung

Kopieren Sie `.env.example` nach `.env.local` und tragen Sie Ihre Werte ein (insbesondere `RESEND_API_KEY` und `ADMIN_EMAIL` für Ihre Geschäfts-E-Mail). Oder erstellen Sie manuell eine `.env.local` im Projekt-Root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000
ADMIN_EMAIL=felix-bredl@gmx.de
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/abc123
N8N_WEBHOOK_CONFIRMED=https://your-n8n-instance.com/webhook/xyz789
```

**Wichtig**: Die `.env.local` Datei sollte nicht in Git committed werden (bereits in `.gitignore`).

## Resend Setup

1. Gehen Sie zu https://resend.com
2. Erstellen Sie einen kostenlosen Account
3. Erstellen Sie einen API Key unter **API Keys**
4. Kopieren Sie den API Key und fügen Sie ihn als `RESEND_API_KEY` in Vercel ein
5. Optional: Verifizieren Sie Ihre Domain für bessere Deliverability

## E-Mail-Domain

Standardmäßig werden E-Mails von `noreply@quickalert.eu` versendet. Für Produktion sollten Sie:
1. Ihre Domain in Resend verifizieren
2. Die Domain in `lib/email.ts` anpassen (falls nötig)

## n8n Integration

Für erweiterte Automatisierungen (Google Sheets, Slack, etc.) siehe `N8N_SETUP.md`.

**Schnellstart**:
1. n8n Account erstellen (https://n8n.io)
2. Workflow mit Webhook Node erstellen
3. Webhook-URL kopieren
4. Als `N8N_WEBHOOK_URL` in Vercel eintragen
5. Deployment neu starten
