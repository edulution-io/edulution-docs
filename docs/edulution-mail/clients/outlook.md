---
sidebar_position: 5
---

# Outlook einrichten

import MailServerConfig from '@site/src/components/MailServerConfig';
import ConfigPlaceholder from '@site/src/components/ConfigPlaceholder';
import CompatIcon from '@site/src/components/CompatIcon';

Anleitung zur Einrichtung von Microsoft Outlook mit edulution Mail.

<div className="mail-table-wrapper">
  <table className="mail-compat-table">
    <thead>
      <tr>
        <th>Version</th>
        <th>E-Mail</th>
        <th>Kalender</th>
        <th>Kontakte</th>
        <th>ActiveSync</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Outlook 2019/2021/365</strong></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="warning" /></td>
        <td className="mail-compat-status"><CompatIcon type="warning" /></td>
        <td className="mail-compat-status"><CompatIcon type="cross" /></td>
      </tr>
      <tr>
        <td><strong>Outlook 2013/2016</strong></td>
        <td className="mail-compat-status"><CompatIcon type="check" /></td>
        <td className="mail-compat-status"><CompatIcon type="warning" /></td>
        <td className="mail-compat-status"><CompatIcon type="warning" /></td>
        <td className="mail-compat-status"><CompatIcon type="warning" /></td>
      </tr>
    </tbody>
  </table>
</div>

:::warning Eingeschränkte Kompatibilität
Outlook hat eingeschränkte Unterstützung. Wir empfehlen [Thunderbird](./thunderbird) oder [Apple Mail](./apple-mail).
[Vollständige Kompatibilitätsmatrix](./compatibility-matrix)
:::

:::info
Microsoft Dokumentation: [Outlook Hilfe](https://support.microsoft.com/de-de/outlook)
:::

## Server-Einstellungen

<MailServerConfig />

## Outlook 2019/2021 & Microsoft 365

Diese Versionen erfordern OAuth2. Nur E-Mail (IMAP/SMTP) funktioniert.

### E-Mail einrichten

1. Öffnen Sie **Outlook**
2. Gehen Sie zu **Datei** → **Konto hinzufügen**
3. Geben Sie Ihre **E-Mail-Adresse** ein
4. Klicken Sie auf **Erweiterte Optionen** → **Ich möchte mein Konto manuell einrichten**
5. Wählen Sie **IMAP**
6. Geben Sie folgende Informationen ein:

#### Posteingang (IMAP)

- **IMAP-Server:** <ConfigPlaceholder type="server" />
- **Port:** `993`
- **Verschlüsselungsmethode:** SSL/TLS
- **Benutzername:** Ihre vollständige E-Mail-Adresse

#### Postausgang (SMTP)

- **SMTP-Server:** <ConfigPlaceholder type="server" />
- **Port:** `465`
- **Verschlüsselungsmethode:** SSL/TLS
- **Benutzername:** Ihre vollständige E-Mail-Adresse

7. Geben Sie Ihr **Passwort** ein
8. Klicken Sie auf **Weiter** und dann **Fertig**

:::warning Keine Kalender & Kontakte
Outlook 2019/2021/365 kann **nicht** mit CalDAV/CardDAV synchronisieren. Auch kostenpflichtige Plugins funktionieren oft nicht zuverlässig.

**Empfohlene Lösungen:**
- Verwenden Sie das **Webmail-Interface** für Kalender und Kontakte
- Wechseln Sie zu **Thunderbird** für volle Funktionalität
:::

## Outlook 2013 / 2016

:::caution Problematisch
ActiveSync funktioniert in diesen Versionen oft **instabil**. Für Kalender und Kontakte werden **kostenpflichtige Plugins** benötigt.
:::

### E-Mail mit ActiveSync (instabil)

1. **Datei** → **Konto hinzufügen**
2. Wählen Sie **Manuelle Konfiguration oder zusätzliche Servertypen**
3. Wählen Sie **Outlook.com oder Exchange ActiveSync**
4. Geben Sie folgende Informationen ein:
   - **Name:** Ihr Name
   - **E-Mail-Adresse:** Ihre E-Mail-Adresse
   - **Server:** <ConfigPlaceholder type="server" />
   - **Benutzername:** Ihre E-Mail-Adresse
   - **Passwort:** Ihr Passwort
5. Klicken Sie auf **Weiter**

:::warning ActiveSync-Probleme
Falls ActiveSync nicht funktioniert:
- Verwenden Sie **IMAP/SMTP** stattdessen (siehe Outlook 2019 Anleitung oben)
- ActiveSync ist in Outlook 2013/2016 bekanntermaßen problematisch mit Mailcow
:::

### Kalender & Kontakte mit Plugin

Für Kalender und Kontakte benötigen Sie ein **kostenpflichtiges Plugin**:

**Empfohlene Plugins:**
- **Outlook CalDav Synchronizer** (Open Source, kostenlos, aber komplex)
  - Download: [caldavsynchronizer.org](https://caldavsynchronizer.org/)
  - Unterstützt CalDAV und CardDAV
  - Konfiguration erfordert technisches Verständnis

:::tip Bessere Alternative
Statt ein Plugin zu kaufen, empfehlen wir den **kostenlosen Wechsel zu Thunderbird**, das native CalDAV/CardDAV Unterstützung hat.
:::

## Outlook 2007-2010

:::danger Veraltet
Diese Versionen sind **veraltet und unsicher**. Bitte aktualisieren Sie oder wechseln Sie zu einer modernen Alternative.

**Nur E-Mail (IMAP)** funktioniert, Kalender und Kontakte erfordern Plugins.
:::

Verwenden Sie die IMAP-Konfiguration wie bei Outlook 2019 beschrieben.

## Neues Outlook (Web-basiert)

:::danger Sicherheitsrisiko
Das neue Outlook (Web) überträgt Ihre **Zugangsdaten an Microsoft-Server**. Dies ist ein **erhebliches Datenschutz- und Sicherheitsrisiko**.

**NICHT EMPFOHLEN für sensible Schuldaten!**

**Alternativen:**
- Verwenden Sie das klassische Outlook (falls verfügbar)
- Wechseln Sie zu [Thunderbird](./thunderbird)
- Nutzen Sie das [Webmail-Interface](../administration#webmail-sogo) direkt
:::

## Troubleshooting

### "Verbindung zum Server kann nicht hergestellt werden"

**Lösung:**
1. Überprüfen Sie Server-Adressen und Ports
2. Stellen Sie sicher, dass Sie die vollständige E-Mail-Adresse als Benutzername verwenden
3. Deaktivieren Sie vorübergehend Ihre Firewall/Antivirus
4. Versuchen Sie alternative Ports (465 für SMTP)

### "Anmeldung fehlgeschlagen"

**Lösung:**
1. Überprüfen Sie Ihr Passwort (Groß-/Kleinschreibung beachten)
2. Verwenden Sie die **vollständige E-Mail-Adresse** als Benutzername
3. Kontaktieren Sie Ihren Administrator für Passwort-Reset

### Mails werden gesendet, aber nicht empfangen

**Lösung:**
1. Überprüfen Sie die IMAP-Einstellungen
2. Stellen Sie sicher, dass Port 993 nicht blockiert ist
3. Testen Sie die Verbindung mit Telnet: `telnet mail.ihre-domain.de 993`

### ActiveSync funktioniert nicht

**Lösung:**
1. **Outlook 2019/2021/365:** ActiveSync wird **nicht unterstützt**
2. **Outlook 2013/2016:** Verwenden Sie IMAP/SMTP stattdessen
3. ActiveSync ist mit neueren Outlook-Versionen und Mailcow **nicht kompatibel**

## Migration zu Thunderbird empfohlen

Aufgrund der massiven Einschränkungen von Outlook empfehlen wir dringend die Migration zu **Mozilla Thunderbird**:

### Vorteile von Thunderbird

✅ **Kostenlos & Open Source**
✅ **Native CalDAV/CardDAV Unterstützung** (keine Plugins nötig)
✅ **Funktioniert auf allen Plattformen** (Windows, macOS, Linux)
✅ **Bessere Datenschutz**-Standards
✅ **Stabiler und zuverlässiger** mit Mailcow
✅ **Regelmäßige Updates** und aktive Entwicklung

### Daten von Outlook zu Thunderbird übertragen

1. **E-Mails:** Werden automatisch vom IMAP-Server synchronisiert
2. **Kalender:** Exportieren Sie aus Outlook als `.ics` und importieren Sie in Thunderbird
3. **Kontakte:** Exportieren Sie aus Outlook als `.csv` und importieren Sie in Thunderbird

**Anleitung:** [Thunderbird einrichten](./thunderbird)

## Webmail als Alternative

Falls Sie bei Outlook bleiben müssen (z.B. aufgrund Firmenrichtlinien), nutzen Sie für Kalender und Kontakte das **Webmail-Interface**:

**Webmail-URL:** `https://mail.ihre-domain.de/SOGo`

Das Webmail-Interface (SOGo) bietet:
- ✅ Vollständige E-Mail-Funktionalität
- ✅ Kalender mit allen Features
- ✅ Kontaktverwaltung
- ✅ Zugriff von jedem Browser
- ✅ Mobile-optimierte Ansicht

:::tip Weitere Hilfe
Weitere Lösungen für häufige Probleme finden Sie auf unserer **[Troubleshooting-Seite](./troubleshooting)**.

Bei weiteren Problemen wenden Sie sich an Ihren Administrator oder die [edulution Community](https://ask.linuxmuster.net/c/edulution/63).
:::

## Zusammenfassung

⚠️ **Outlook hat eingeschränkte Kompatibilität mit edulution Mail**

**Was funktioniert:**
- ✅ E-Mail (IMAP/SMTP) in allen Versionen

**Was NICHT funktioniert:**
- ❌ ActiveSync (Outlook 2019/2021/Microsoft 365)
- ❌ Native Kalender & Kontakte Synchronisation (alle Versionen)
- ⚠️ ActiveSync instabil (Outlook 2013/2016)

**Empfohlene Lösungen:**
1. **Beste Option:** Migration zu [Thunderbird](./thunderbird) oder [Apple Mail](./apple-mail)
2. **Alternative:** Kombination aus Outlook (nur E-Mail) + [Webmail](../administration#webmail-sogo) (Kalender & Kontakte)
3. **Notlösung:** Kostenpflichtige Plugins (nicht empfohlen)
