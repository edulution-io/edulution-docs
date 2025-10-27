---
sidebar_position: 2
---

# Server-Einstellungen

import MailServerConfig from '@site/src/components/MailServerConfig';
import ConfigPlaceholder from '@site/src/components/ConfigPlaceholder';

Server-Einstellungen für die Konfiguration Ihres E-Mail-Clients.

<MailServerConfig />

## Allgemeine Hinweise

- Benutzername ist immer die vollständige E-Mail-Adresse
- Die meisten Clients erkennen Einstellungen automatisch
- Verwenden Sie immer verschlüsselte Verbindungen (SSL/TLS)

## Manuelle Einstellungen

**E-Mail Empfang (IMAP):**
- Server: `mail.ihre-domain.de`
- Port: `993`
- Verschlüsselung: SSL/TLS

**E-Mail Versand (SMTP):**
- Server: `mail.ihre-domain.de`
- Port: `465`
- Verschlüsselung: SSL/TLS

**Kalender (CalDAV):**
- URL: `https://mail.ihre-domain.de/SOGo/dav`

**Kontakte (CardDAV):**
- URL: `https://mail.ihre-domain.de/SOGo/dav`

**ActiveSync:**
- URL: `https://mail.ihre-domain.de`
- Nur für Apple iOS/macOS
- Nicht für Outlook 2019+

## Webmail

Webmail-URL: <ConfigPlaceholder type="webmail" />

## Troubleshooting

**Verbindung fehlgeschlagen:**
- Internetverbindung prüfen
- Domain korrekt?
- Firewall-Ports offen? (443, 993, 465)

**Authentifizierung fehlgeschlagen:**
- Benutzername = vollständige E-Mail-Adresse
- Passwort Groß-/Kleinschreibung beachten
- Bei Bedarf: Passwort zurücksetzen

**Kalender/Kontakte synchronisieren nicht:**
- CalDAV/CardDAV URL komplett angegeben?
- Synchronisierung aktiviert?
- Bei iOS: Account-Einstellungen prüfen
