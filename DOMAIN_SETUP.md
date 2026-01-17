# Domain-Setup für QuickAlert

**Domain:** quickalert.eu

## Schritt 1: Domain bei Vercel hinzufügen

1. Gehe zu https://vercel.com/dashboard
2. Wähle dein Projekt "QuickAlert" aus
3. Gehe zu **Settings** → **Domains**
4. Klicke auf **Add Domain**
5. Gib deine Domain ein: `quickalert.eu` und `www.quickalert.eu`
6. Vercel zeigt dir die benötigten DNS-Einträge

## Schritt 2: DNS-Einstellungen bei deinem Domain-Provider

### Für Root-Domain (z. B. quickalert.de):
```
Typ: A
Name: @ (oder leer lassen)
Wert: 76.76.21.21
TTL: 3600 (oder automatisch)
```

### Für www-Subdomain (z. B. www.quickalert.de):
```
Typ: CNAME
Name: www
Wert: cname.vercel-dns.com
TTL: 3600 (oder automatisch)
```

**Wichtig:** Die genauen Werte können sich ändern - verwende die Werte, die Vercel dir anzeigt!

## Schritt 3: Warten auf DNS-Propagierung

- DNS-Änderungen können 24-48 Stunden dauern
- Meistens funktioniert es aber schon nach 1-2 Stunden
- Du kannst den Status in Vercel unter **Settings** → **Domains** prüfen

## Schritt 4: SSL-Zertifikat

- Vercel stellt automatisch ein kostenloses SSL-Zertifikat bereit
- Das Zertifikat wird automatisch installiert, sobald die DNS-Einträge korrekt sind
- Deine Website ist dann über HTTPS erreichbar

## Häufige Domain-Provider

### IONOS
1. Login bei IONOS
2. Domain-Verwaltung → DNS-Verwaltung
3. DNS-Einträge hinzufügen

### Strato
1. Login bei Strato
2. Domain-Verwaltung → DNS-Einstellungen
3. DNS-Einträge bearbeiten

### GoDaddy
1. Login bei GoDaddy
2. My Products → DNS
3. Records hinzufügen

## Troubleshooting

- **Domain zeigt noch nicht auf Vercel?** → Warte auf DNS-Propagierung (kann bis zu 48h dauern)
- **SSL-Zertifikat wird nicht erstellt?** → Prüfe, ob DNS-Einträge korrekt sind
- **www funktioniert nicht?** → Prüfe CNAME-Eintrag für www-Subdomain

## Support

Bei Problemen: Vercel Support oder dein Domain-Provider Support kontaktieren.
