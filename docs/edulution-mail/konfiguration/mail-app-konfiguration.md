---
sidebar_custom_props:
  audience: admin
---

# Mail-App konfigurieren

Der in edulution Plattform integrierte E-Mail-Client greift nicht über die Mailcow-Oberfläche auf den Mailserver zu, sondern spricht IMAP, SMTP, ManageSieve und die Mailcow-API direkt an. Alle dafür nötigen Angaben werden in den **Einstellungen** der Mail-App gepflegt – die Konfiguration per Umgebungsvariable entfällt.

:::caution Nur Global-Admin
Die App-Einstellungen sind ausschließlich für Global-Administratoren sichtbar und änderbar.
:::

## Einstellungen aufrufen

1. **Einstellungen** (Zahnrad-Symbol) im Menü rechts unten öffnen
2. In der linken Seitenleiste die App **E-Mails** wählen

Die Seite ist in mehrere Abschnitte gegliedert:

| Abschnitt | Inhalt |
|---|---|
| **Allgemein** | Mailcow-API-Zugang, Theme der Webmail-Oberfläche |
| **Mailserver** | IMAP, SMTP, ManageSieve, DAV und Standard-Signatur des integrierten Clients |
| **Mailbox-Verwaltung** | Mailcow-Mailboxen anlegen, bearbeiten und löschen – siehe [Mailboxen und geteilte Postfächer](./mailbox-verwaltung.md) |
| **Externe Mail-Provider** | Vorlagen für die Sync-Jobs der Benutzer |
| **Container** | Zustand der zugehörigen Docker-Container |

Änderungen werden erst mit **Speichern** wirksam. Die API übernimmt sie anschließend ohne Neustart – Verbindungen zu IMAP, SMTP und ManageSieve werden mit den neuen Werten aufgebaut.

## Allgemein

**URL** und **API-Schlüssel** verweisen auf die Mailcow-API. Sie werden für alles benötigt, was nicht über IMAP läuft: Mailbox-Verwaltung, Domainliste, Sync-Jobs und Absenderrechte.

- **URL** – Basis-URL der Mailcow-Instanz, z. B. `https://mail.ihre-schule.de`
- **API-Schlüssel** – ein in Mailcow unter *Konfiguration → Zugriff → API* erzeugter Schlüssel mit Schreibrechten

Bleiben die Felder leer, greifen die Umgebungsvariablen `MAILCOW_API_URL` und `MAILCOW_API_TOKEN` des API-Containers als Rückfallebene.

**Theme** steuert das Erscheinungsbild der SOGo-Webmail-Oberfläche (hell oder dunkel). Das Theme gilt systemweit für alle Benutzer; ein Wechsel startet die zugehörigen Container neu. Die **Theme-Versionsprüfung** meldet, wenn für das gewählte Theme eine neuere Version vorliegt.

## Mailserver

Dieser Abschnitt beschreibt dem integrierten Client, wie er den Mailserver erreicht.

### IMAP und SMTP

| Feld | Bedeutung | Standard |
|---|---|---|
| **IMAP-Server** | FQDN des IMAP-Servers, z. B. `imap.ihre-schule.de` | – |
| **SMTP-Server** | FQDN des SMTP-Servers, z. B. `smtp.ihre-schule.de` | – |
| **IMAP Port** | Port des IMAP-Servers | `993` |
| **SMTP Port** | Port des SMTP-Servers | `587` |
| **Nicht zertifizierte Verbindungen ablehnen** | Zertifikatsprüfung für IMAP, SMTP und ManageSieve | aus |

IMAP- und SMTP-Server werden getrennt eingetragen. Das ist nötig, wenn die beiden Dienste nicht unter demselben Namen erreichbar sind – etwa weil ein vorgelagerter Reverse-Proxy nur einen der beiden Ports weiterreicht und Dovecot beziehungsweise Postfix direkt angesprochen werden müssen.

Ein vorangestelltes `http://` oder `https://` wird beim Speichern automatisch entfernt; es genügt der reine Hostname.

:::note[Die Verschlüsselung ergibt sich aus dem Port]
Der Client wählt die Transportverschlüsselung anhand der eingetragenen Portnummer:

| Dienst | Port | Verhalten |
|---|---|---|
| IMAP | `993` | Implizites TLS |
| IMAP | jeder andere Port | Klartext-Verbindung mit STARTTLS |
| SMTP | `465` | Implizites TLS |
| SMTP | `587` (oder anderer Port) | Klartext-Verbindung mit STARTTLS |

Ein eigener Schalter für die Verschlüsselung existiert deshalb nicht.
:::

**Nicht zertifizierte Verbindungen ablehnen** sollte in Produktivumgebungen mit gültigem Zertifikat aktiviert sein. Ausgeschaltet akzeptiert die API auch selbstsignierte Zertifikate – sinnvoll nur bei Testinstallationen.

### ManageSieve

Über ManageSieve verwaltet die Mail-App serverseitige Filterregeln, Weiterleitungen und automatische Antworten.

| Feld | Bedeutung | Standard |
|---|---|---|
| **ManageSieve-Server** | FQDN des ManageSieve-Servers | identisch mit dem IMAP-Server |
| **ManageSieve-Port** | Port des ManageSieve-Servers | `4190` |

Bleibt das Feld **ManageSieve-Server** leer, verwendet die API den unter **IMAP-Server** eingetragenen Host. Die Zertifikatsprüfung folgt der Einstellung von IMAP und SMTP.

### DAV

Zwei Funktionen des Clients sprechen nicht IMAP, sondern die DAV-Schnittstelle von SOGo an: die Rechtevergabe für [Postfach-Freigaben](./mailbox-verwaltung.md#geteilte-postf%C3%A4cher) und die Synchronisation der Sprache in die Webmail-Oberfläche.

| Feld | Bedeutung | Standard |
|---|---|---|
| **DAV-URL** | Basis-URL des Groupware-DAV-Servers inklusive Pfad, muss auf `/dav` enden, z. B. `https://mail.ihre-schule.de/SOGo/dav/` | leer |
| **DAV: Nicht zertifizierte Verbindungen ablehnen** | Zertifikatsprüfung des DAV-Servers | ein |

Bleibt die **DAV-URL** leer, greift die API auf die DAV-Konfiguration der Kalender-App zurück – einschließlich deren Einstellung zur Zertifikatsprüfung. Der Schalter **DAV: Nicht zertifizierte Verbindungen ablehnen** wirkt also erst, wenn hier eine eigene URL hinterlegt ist. IMAP und SMTP sind davon nicht betroffen.

### Standard-Signatur

Die hier hinterlegte Signatur wird beim Verfassen einer neuen E-Mail automatisch angefügt. Der Editor übernimmt HTML, Links und Bilder unverändert.

:::tip[Bilder klein halten]
Eingebettete Bilder vergrößern jede gesendete E-Mail. Der Editor warnt ab einer Bildgröße, die spürbar ins Gewicht fällt – verwenden Sie nach Möglichkeit ein Logo unter 100 KB.
:::

## Externe Mail-Provider

Damit Benutzer E-Mails aus einem bestehenden Postfach abholen können, legt der Administrator hier die Provider an, die im Sync-Job zur Auswahl stehen. Benutzer tragen die Serverdaten also nicht selbst ein, sondern wählen nur noch einen Eintrag aus der Liste und ergänzen ihre Zugangsdaten – siehe [Benutzer: E-Mails migrieren](../migration.md).

### Provider anlegen

Die Schaltfläche **Hinzufügen** unter der Tabelle **Externe Mail-Provider** öffnet den Dialog **E-Mail-Provider anlegen**:

| Feld | Bedeutung |
|---|---|
| **Name** | Anzeigename in der Auswahlliste, z. B. `GMX` |
| **Hostname** | IMAP-Server des Anbieters, z. B. `imap.gmx.net` |
| **Port** | IMAP-Port, üblicherweise `993` |
| **Verschlüsselung** | `SSL`, `TLS` oder `PLAIN` |

Der **Name** darf die Zeichen `/ ( ) { } * % " \` nicht enthalten. Er dient zugleich als Name des Zielordners, in dem die importierten E-Mails im edulution-Postfach landen; Umlaute werden dabei ersetzt.

Ein Klick auf eine Zeile öffnet den Eintrag zum Bearbeiten (**E-Mail-Provider bearbeiten**). Zum Entfernen markieren Sie die Zeilen und wählen **Löschen**. Das Löschen eines Providers entfernt keine bereits angelegten Sync-Jobs – diese laufen mit den beim Anlegen übernommenen Serverdaten weiter.

:::info[Wer welche Daten sieht]
Host, Port und Verschlüsselung eines Providers sind ausschließlich für Global-Administratoren lesbar. Die Auswahlliste im Benutzerbereich enthält nur Kennung und Name des Providers; die Serverdaten setzt die API beim Anlegen des Sync-Jobs selbst ein. Die interne Struktur des Mailservers wird Benutzern damit nicht offengelegt.
:::

## Siehe auch

- [Mailboxen und geteilte Postfächer](./mailbox-verwaltung.md) – Mailboxen aus edulution Plattform heraus verwalten
- [Administration](./administration.md) – Mailcow-Oberfläche und Webmail
- [Server-Einstellungen](../clients/server-settings.md) – dieselben Daten für externe Mail-Clients
- [Admin: Migration einrichten](./migration-einrichten.md) – Sync-Jobs für die Migration
