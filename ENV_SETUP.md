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
- **Beschreibung**: E-Mail-Adresse für Benachrichtigungen über neue Vorbestellungen
- **Standard**: `felix-bredl@gmx.de`
- **Optional**: Kann weggelassen werden, dann wird der Standard verwendet

## Setup in Vercel

1. Gehen Sie zu Ihrem Vercel-Projekt
2. Navigieren Sie zu **Settings** → **Environment Variables**
3. Fügen Sie die Variablen hinzu:
   - `RESEND_API_KEY` = Ihr Resend API Key
   - `NEXT_PUBLIC_BASE_URL` = `https://quickalert.eu`
   - `ADMIN_EMAIL` = `felix-bredl@gmx.de` (optional)

## Lokale Entwicklung

Erstellen Sie eine `.env.local` Datei im Projekt-Root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000
ADMIN_EMAIL=felix-bredl@gmx.de
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
