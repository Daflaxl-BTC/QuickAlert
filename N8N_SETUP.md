# n8n Setup für QuickAlert

Diese Anleitung zeigt Ihnen, wie Sie n8n mit dem QuickAlert Vorbestellungsformular integrieren.

## Was ist n8n?

n8n ist ein Open-Source-Workflow-Automatisierungstool (ähnlich wie Zapier), das Sie selbst hosten können. Es ermöglicht es, verschiedene Services zu verbinden und zu automatisieren.

## n8n Installation

### Option 1: n8n Cloud (Einfachste Methode)
1. Gehen Sie zu https://n8n.io
2. Erstellen Sie einen kostenlosen Account
3. Starten Sie mit dem Cloud-Service (kostenlos bis 2.000 Workflow-Executions/Monat)

### Option 2: Self-Hosted (Docker)
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Dann öffnen Sie: http://localhost:5678

### Option 3: Vercel/Netlify Deployment
n8n kann auch auf Vercel oder Netlify deployed werden (siehe n8n Dokumentation).

## Schritt 1: Webhook-URL in Vercel konfigurieren

1. Gehen Sie zu Ihrem n8n-Dashboard
2. Erstellen Sie einen neuen Workflow
3. Fügen Sie einen "Webhook" Node hinzu
4. Wählen Sie "Webhook" → "Receive a webhook"
5. Klicken Sie auf "Listen for test event"
6. Kopieren Sie die Webhook-URL (z.B. `https://your-n8n-instance.com/webhook/abc123`)

7. In Vercel → Settings → Environment Variables:
   - **Name**: `N8N_WEBHOOK_URL`
   - **Value**: Ihre n8n Webhook-URL
   - **Environments**: Production, Preview, Development

8. Optional: Separate Webhook für Bestätigungen:
   - **Name**: `N8N_WEBHOOK_CONFIRMED`
   - **Value**: Separate n8n Webhook-URL für bestätigte Vorbestellungen

9. Deployment neu starten

## Schritt 2: Webhook-Payload verstehen

Das Vorbestellungsformular sendet folgende Daten an n8n:

### Event: `preorder_submitted` (Neue Vorbestellung)
```json
{
  "event": "preorder_submitted",
  "data": {
    "name": "Max Mustermann",
    "email": "max@example.com",
    "product": "BASE",
    "message": "Optional message",
    "timestamp": "2026-02-01T12:00:00Z",
    "confirmationToken": "abc123...",
    "confirmed": false
  }
}
```

### Event: `preorder_confirmed` (Bestätigte Vorbestellung)
```json
{
  "event": "preorder_confirmed",
  "data": {
    "name": "Max Mustermann",
    "email": "max@example.com",
    "product": "BASE",
    "message": "Optional message",
    "timestamp": "2026-02-01T12:00:00Z",
    "confirmed": true
  }
}
```

## Schritt 3: Workflow-Beispiele

### Workflow 1: Google Sheets Integration

**Ziel**: Alle Vorbestellungen automatisch in Google Sheets speichern

1. **Webhook Node**: Empfängt Daten von QuickAlert
2. **Google Sheets Node**: "Append Row"
   - Authentifizierung: Google OAuth
   - Spreadsheet: Wählen Sie Ihr Google Sheet
   - Sheet: Wählen Sie das Tab
   - Columns: 
     - `A`: `{{ $json.data.timestamp }}`
     - `B`: `{{ $json.data.name }}`
     - `C`: `{{ $json.data.email }}`
     - `D`: `{{ $json.data.product }}`
     - `E`: `{{ $json.data.message }}`
     - `F`: `{{ $json.data.confirmed }}`

**Google Sheet Vorlage**:
```
| Datum | Name | E-Mail | Produkt | Nachricht | Bestätigt |
|-------|------|--------|--------|-----------|-----------|
```

### Workflow 2: Slack Benachrichtigungen

**Ziel**: Sofortige Benachrichtigung im Slack-Team-Channel

1. **Webhook Node**: Empfängt Daten
2. **Slack Node**: "Post Message"
   - Channel: `#quickalert-vorbestellungen`
   - Text: 
     ```
     🎉 Neue Vorbestellung!
     
     👤 Name: {{ $json.data.name }}
     📧 E-Mail: {{ $json.data.email }}
     📦 Produkt: {{ $json.data.product }}
     💬 Nachricht: {{ $json.data.message || 'Keine' }}
     ✅ Bestätigt: {{ $json.data.confirmed ? 'Ja' : 'Nein' }}
     ```

### Workflow 3: Telegram Bot Benachrichtigungen

**Ziel**: Benachrichtigungen per Telegram

1. **Webhook Node**: Empfängt Daten
2. **Telegram Node**: "Send Message"
   - Chat ID: Ihre Telegram Chat ID
   - Text: Formatierte Nachricht mit allen Details

**Telegram Bot erstellen**:
1. Suchen Sie nach `@BotFather` in Telegram
2. `/newbot` → Name vergeben
3. API Token kopieren
4. In n8n Telegram Node einfügen

### Workflow 4: Google Analytics Events

**Ziel**: Conversion-Tracking in Google Analytics

1. **Webhook Node**: Empfängt Daten
2. **HTTP Request Node**: "POST"
   - URL: `https://www.google-analytics.com/mp/collect`
   - Method: POST
   - Body:
     ```json
     {
       "client_id": "{{ $json.data.email }}",
       "events": [{
         "name": "{{ $json.event }}",
         "params": {
           "product": "{{ $json.data.product }}",
           "confirmed": "{{ $json.data.confirmed }}"
         }
       }]
     }
     ```

### Workflow 5: Airtable Integration

**Ziel**: CRM-Integration mit Airtable

1. **Webhook Node**: Empfängt Daten
2. **Airtable Node**: "Create Record"
   - Base: Wählen Sie Ihre Airtable Base
   - Table: "Vorbestellungen"
   - Fields:
     - `Name`: `{{ $json.data.name }}`
     - `E-Mail`: `{{ $json.data.email }}`
     - `Produkt`: `{{ $json.data.product }}`
     - `Status`: `{{ $json.data.confirmed ? 'Bestätigt' : 'Ausstehend' }}`

### Workflow 6: Mailchimp Newsletter-Anmeldung

**Ziel**: Automatische Newsletter-Anmeldung nach Bestätigung

1. **Webhook Node**: Empfängt Daten
2. **IF Node**: Prüft ob `event === 'preorder_confirmed'`
3. **Mailchimp Node**: "Add Member to List"
   - List: Wählen Sie Ihre Mailchimp-Liste
   - Email: `{{ $json.data.email }}`
   - Tags: `{{ $json.data.product }}` (für Segmentierung)

## Schritt 4: Workflow aktivieren

1. Klicken Sie auf "Save" im n8n Workflow
2. Klicken Sie auf "Active" Toggle (oben rechts)
3. Der Workflow ist jetzt aktiv und empfängt Webhooks

## Schritt 5: Testen

1. Gehen Sie zu https://quickalert.eu
2. Füllen Sie das Vorbestellungsformular aus
3. Prüfen Sie in n8n → Executions, ob der Workflow ausgeführt wurde
4. Prüfen Sie Ihr Ziel (Google Sheets, Slack, etc.)

## Tipps & Best Practices

### Fehlerbehandlung
- Fügen Sie einen "Error Trigger" Node hinzu
- Loggen Sie Fehler in ein Google Sheet oder senden Sie eine E-Mail

### Datenvalidierung
- Fügen Sie einen "IF" Node hinzu, um Daten zu validieren
- Prüfen Sie, ob alle erforderlichen Felder vorhanden sind

### Rate Limiting
- n8n hat Limits (Cloud: 2.000 Executions/Monat kostenlos)
- Für höhere Volumen: Self-hosted n8n verwenden

### Sicherheit
- Verwenden Sie n8n Webhook-Authentifizierung
- Setzen Sie einen Webhook-Secret in n8n
- Validieren Sie die Webhook-Signatur (optional)

## Troubleshooting

### Webhook wird nicht empfangen
- Prüfen Sie, ob der Workflow aktiv ist
- Prüfen Sie die Webhook-URL in Vercel Environment Variables
- Prüfen Sie n8n → Executions für Fehler

### Daten fehlen
- Prüfen Sie den Webhook-Payload in n8n → Executions
- Verwenden Sie `{{ $json.data.field }}` für Datenzugriff

### Workflow läuft nicht
- Prüfen Sie, ob alle Nodes korrekt konfiguriert sind
- Prüfen Sie die Authentifizierung (Google, Slack, etc.)
- Aktivieren Sie den Workflow (Toggle oben rechts)

## Weitere Ressourcen

- n8n Dokumentation: https://docs.n8n.io
- n8n Community: https://community.n8n.io
- n8n Templates: https://n8n.io/workflows

## Support

Bei Fragen zur n8n-Integration können Sie:
- Die n8n Community besuchen
- Die n8n Dokumentation durchsuchen
- Einen Issue im QuickAlert Repository erstellen
