---
sidebar_position: 3
---

# Apple Mail einrichten

import MailServerConfig from '@site/src/components/MailServerConfig';
import ConfigPlaceholder from '@site/src/components/ConfigPlaceholder';
import CompatIcon from '@site/src/components/CompatIcon';

Anleitung zur Einrichtung von Apple Mail mit edulution Mail.

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
        <td><strong>Apple Mail</strong></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
      </tr>
    </tbody>
  </table>
</div>

:::info
Offizielle Apple Dokumentation: [Apple Mail Hilfe](https://support.apple.com/de-de/mail) | [E-Mail auf iPhone/iPad](https://support.apple.com/de-de/HT201320)
:::

## Voraussetzungen

- macOS 10.14 oder neuer / iOS 12 oder neuer
- E-Mail-Adresse und Passwort
- Server-Einstellungen (siehe unten)

## Empfohlene Methode: Konfigurationsprofil

Die einfachste Methode ist die Installation eines Konfigurationsprofils (.mobileconfig). Dieses konfiguriert automatisch E-Mail, Kalender und Kontakte.

### Schritt 1: Profil herunterladen

Geben Sie Ihre Daten ein und laden Sie das Profil herunter:

<MailServerConfig />

### Schritt 2: Profil installieren

**iPhone/iPad:**
1. Öffnen Sie die `.mobileconfig` Datei
2. Tippen Sie auf **Profil installieren**
3. Geben Sie Ihren Geräte-Code ein
4. Geben Sie Ihr E-Mail-Passwort ein (wird nicht in der Datei gespeichert)
5. Tippen Sie auf **Installieren**

**Mac:**
1. Doppelklicken Sie auf die `.mobileconfig` Datei
2. Gehen Sie zu **Systemeinstellungen** → **Profile**
3. Geben Sie Ihr E-Mail-Passwort ein
4. Klicken Sie auf **Installieren**

---

## Manuelle Konfiguration

### Account hinzufügen

1. **Systemeinstellungen** → **Internetaccounts** → **Account hinzufügen**
2. Wählen Sie **Anderer Mail-Account**
3. Geben Sie Name, E-Mail-Adresse und Passwort ein
4. Klicken Sie auf **Anmelden**

In den meisten Fällen erkennt Apple Mail die Einstellungen automatisch.

### Manuelle Einstellungen (falls erforderlich)

**IMAP (Empfang):**
- Server: <ConfigPlaceholder type="server" />
- Benutzername: <ConfigPlaceholder type="email" />
- Passwort: Ihr E-Mail-Passwort

**SMTP (Versand):**
- Server: <ConfigPlaceholder type="server" />
- Benutzername: <ConfigPlaceholder type="email" />
- Passwort: Ihr E-Mail-Passwort

### Kalender und Kontakte

1. **Systemeinstellungen** → **Internetaccounts**
2. Wählen Sie Ihren edulution Mail-Account
3. Aktivieren Sie **Mail**, **Kontakte** und **Kalender**

## Erweiterte Einstellungen

### SMTP-Port anpassen

Falls E-Mails nicht gesendet werden können:

1. **Mail** → **Einstellungen** → **Accounts** → **Servereinstellungen**
2. **SMTP-Serverliste bearbeiten**
3. **Erweitert**: Port `465`, Verschlüsselung **SSL/TLS**

### Signatur einrichten

1. **Mail** → **Einstellungen** → **Signaturen**
2. Klicken Sie auf **+** für eine neue Signatur
3. Geben Sie Ihre Signatur ein

## Troubleshooting

**IMAP-Befehl fehlgeschlagen:**
- Mail → Einstellungen → Accounts → Servereinstellungen
- Deaktivieren Sie "Automatisch IMAP-Ordner erkennen"

**Mails werden nicht synchronisiert:**
- Mail → Postfach → Alle Accounts synchronisieren
- Bei Bedarf Mail neu starten

**Kalender/Kontakte synchronisieren nicht:**
- Systemeinstellungen → Internetaccounts
- Account deaktivieren und wieder aktivieren
- Bei Bedarf Account neu hinzufügen

**SSL-Zertifikat-Warnung:**
- Domain und Systemdatum prüfen
- Bei anhaltenden Problemen: Administrator kontaktieren

:::tip Weitere Hilfe
Weitere Lösungen für häufige Probleme finden Sie auf unserer **[Troubleshooting-Seite](./troubleshooting)**.
:::
