---
sidebar_position: 4
---

# Thunderbird einrichten

import MailServerConfig from '@site/src/components/MailServerConfig';
import ConfigPlaceholder from '@site/src/components/ConfigPlaceholder';
import CompatIcon from '@site/src/components/CompatIcon';

Anleitung zur Einrichtung von Mozilla Thunderbird mit edulution Mail.

<div className="mail-table-wrapper">
  <table className="mail-compat-table">
    <thead>
      <tr>
        <th>Client</th>
        <th>E-Mail</th>
        <th>Kalender</th>
        <th>Kontakte</th>
        <th>ActiveSync</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Thunderbird</strong></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="cross" /></td>
      </tr>
    </tbody>
  </table>
</div>

:::info
Download: [thunderbird.net](https://www.thunderbird.net/de/) (Windows, macOS, Linux) | Dokumentation: [support.mozilla.org](https://support.mozilla.org/de/products/thunderbird)
:::

## Voraussetzungen

- Thunderbird 115 oder neuer
- E-Mail-Adresse und Passwort

## Server-Einstellungen

<MailServerConfig />

## Automatische Konfiguration

Thunderbird erkennt die Server-Einstellungen automatisch. Sie benötigen nur E-Mail-Adresse und Passwort.

### Konto hinzufügen

1. **Menü** (☰) → **Neues Konto** → **Bestehendes E-Mail-Konto**
2. Geben Sie Name, E-Mail-Adresse und Passwort ein
3. Klicken Sie auf **Weiter**
4. Thunderbird erkennt die Einstellungen automatisch
5. Klicken Sie auf **Fertig**

---

## Manuelle Konfiguration

Falls die automatische Erkennung fehlschlägt, klicken Sie auf **Manuell bearbeiten**:

**IMAP (Empfang):**
- Server: <ConfigPlaceholder type="server" />
- Port: `993`
- Verschlüsselung: SSL/TLS
- Authentifizierung: Normales Passwort
- Benutzername: <ConfigPlaceholder type="email" />

**SMTP (Versand):**
- Server: <ConfigPlaceholder type="server" />
- Port: `465`
- Verschlüsselung: SSL/TLS
- Authentifizierung: Normales Passwort
- Benutzername: <ConfigPlaceholder type="email" />

Klicken Sie auf **Erneut testen** und dann auf **Fertig**.

## Kalender und Kontakte

Thunderbird 115+ unterstützt CalDAV/CardDAV nativ.

**Kalender hinzufügen:**
1. **Kalender**-Symbol → Rechtsklick → **Neuer Kalender**
2. Wählen Sie **Im Netzwerk**
3. URL: <ConfigPlaceholder type="caldav" />
4. Geben Sie Benutzername und Passwort ein
5. Wählen Sie die Kalender aus

**Adressbuch hinzufügen:**
1. **Adressbuch**-Symbol → **Extras** → **Neues Adressbuch** → **CardDAV**
2. URL: <ConfigPlaceholder type="carddav-base" />
3. Geben Sie Benutzername und Passwort ein
4. Wählen Sie die Adressbücher aus

## Erweiterte Einstellungen

**SMTP-Port überprüfen:**
- **Konten-Einstellungen** → **Postausgang-Server (SMTP)** → **Bearbeiten**
- Port: `465`, Verschlüsselung: SSL/TLS

**Signatur einrichten:**
- **Konten-Einstellungen** → **Signatur**
- Geben Sie Ihre Signatur ein

**IMAP-Ordner abonnieren:**
- Rechtsklick auf Konto → **Abonnieren**
- Aktivieren Sie die gewünschten Ordner

**Offline-Speicher:**
- **Konten-Einstellungen** → **Synchronisation & Speicherplatz**
- Aktivieren Sie "Nachrichten auf diesem Computer speichern"

## Troubleshooting

**Anmeldung fehlgeschlagen:**
- Benutzername muss vollständige E-Mail-Adresse sein
- Passwort und Domain überprüfen
- Authentifizierungsmethode: "Normales Passwort"

**Kalender/Kontakte synchronisieren nicht:**
- CalDAV/CardDAV URLs überprüfen
- Rechtsklick → Synchronisieren
- Bei Bedarf neu hinzufügen

**E-Mails können nicht gesendet werden:**
- SMTP-Einstellungen prüfen: Port 465, SSL/TLS
- SMTP-Authentifizierung aktiviert?
- Benutzername korrekt?

**SSL-Zertifikat-Warnung:**
- Domain überprüfen
- Bei berechtigtem Zertifikat: Ausnahme bestätigen
- Bei Unsicherheit: Administrator kontaktieren

:::tip Weitere Hilfe
Weitere Lösungen für häufige Probleme finden Sie auf unserer **[Troubleshooting-Seite](./troubleshooting)**.
:::
