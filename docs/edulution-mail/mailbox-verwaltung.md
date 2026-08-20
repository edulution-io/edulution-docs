---
sidebar_position: 2
---

# Mailboxen und geteilte Postfächer

Mailboxen lassen sich direkt aus edulution UI heraus anlegen, bearbeiten und löschen – ein Wechsel in die Mailcow-Oberfläche ist dafür nicht mehr nötig. Zusätzlich verwaltet edulution hier geteilte Postfächer: Postfächer, auf die mehrere Benutzer zugreifen und in deren Namen sie E-Mails versenden dürfen.

:::caution Nur Global-Admin
Die Mailbox-Verwaltung ist ausschließlich für Global-Administratoren sichtbar. Alle Aktionen wirken unmittelbar auf dem Mailserver.
:::

Die Verwaltung finden Sie unter **Einstellungen → E-Mails → Mailbox-Verwaltung**. Voraussetzung ist ein gültiger Mailcow-API-Zugang, siehe [Mail-App konfigurieren](mail-app-konfiguration.md#allgemein).

## Die Mailbox-Tabelle

Die Tabelle listet alle Mailboxen der angebundenen Mailcow-Instanz:

| Spalte | Bedeutung |
|---|---|
| **Benutzername** | Vollständige E-Mail-Adresse der Mailbox |
| **Name** | Anzeigename, z. B. `Max Mustermann` |
| **Domain** | Mail-Domain der Mailbox |
| **Quota** | Zugewiesener Speicherplatz |
| **Aktiv** | Ob die Mailbox nutzbar ist |
| **Nachrichten** | Anzahl der gespeicherten Nachrichten |

Über das Suchfeld filtern Sie nach Benutzernamen. Der Filter **Nur Shared** blendet alles aus, was kein geteiltes Postfach ist.

## Mailbox anlegen

Die Schaltfläche **Hinzufügen** unter der Tabelle öffnet den Dialog **Mailbox erstellen** mit folgenden Feldern:

| Feld | Bedeutung |
|---|---|
| **Lokaler Teil** | Teil der Adresse vor dem `@`, z. B. `max.mustermann` |
| **Domain** | Auswahlliste der in Mailcow angelegten Domains |
| **Name** | Anzeigename, erscheint als Absendername |
| **Quota (MB)** | Speicherplatz der Mailbox |
| **Passwort** / **Passwort bestätigen** | Anmeldekennwort der Mailbox |

### Regeln für die Eingaben

- **Lokaler Teil:** Buchstaben, Ziffern, `_`, `+` und `-`, durch einzelne Punkte trennbar; höchstens 64 Zeichen. Die Eingabe wird beim Speichern in Kleinbuchstaben umgewandelt.
- **Quota:** mindestens 1 MB, höchstens 1.048.576 MB (1 TB).
- **Passwort:** mindestens 8 Zeichen und mindestens eine Ziffer sowie ein Sonderzeichen.

Adresse und Domain stehen nur beim Anlegen zur Verfügung. Beim Bearbeiten einer bestehenden Mailbox sind sie ausgeblendet, da Mailcow das Umbenennen einer Mailbox nicht unterstützt – legen Sie in diesem Fall eine neue Mailbox an.

## Mailbox bearbeiten

Ein Klick auf eine Zeile öffnet den Dialog **Mailbox bearbeiten**. Neben Anzeigename, Quota und den Zugriffseinstellungen stehen hier zusätzlich die [Benutzer-ACL](#benutzer-acl) und die Felder für [geteilte Postfächer](#geteilte-postf%C3%A4cher) zur Verfügung.

Das Feld **Passwort** bleibt beim Bearbeiten leer und trägt den Platzhalter *Unverändert lassen*. Nur wenn Sie hier etwas eintragen, wird das Kennwort geändert.

## Zugriffseinstellungen

Diese Schalter entsprechen den gleichnamigen Optionen in Mailcow und gelten für jede Mailbox:

| Schalter | Wirkung |
|---|---|
| **Aktiv** | Die Mailbox ist nutzbar. Ausgeschaltet bleiben die Daten erhalten, eine Anmeldung ist aber nicht möglich |
| **Passwortänderung erzwingen** | Der Benutzer muss das Kennwort bei der nächsten Anmeldung ändern |
| **SOGo Zugriff** | Zugang zur Webmail-Oberfläche |
| **IMAP Zugriff** | Zugang per IMAP – auch der integrierte Client von edulution benötigt dieses Recht |
| **POP3 Zugriff** | Zugang per POP3 |
| **SMTP Zugriff** | Versand über den Mailserver |

:::warning[IMAP nicht abschalten]
Der in edulution UI integrierte E-Mail-Client greift über IMAP und SMTP auf den Mailserver zu. Ist **IMAP Zugriff** oder **SMTP Zugriff** deaktiviert, kann der Benutzer die Mail-App nicht mehr verwenden – auch dann nicht, wenn die Webmail-Oberfläche weiterhin funktioniert.
:::

## Benutzer-ACL

Der Abschnitt **Benutzer-ACL** erscheint beim Bearbeiten einer Mailbox und legt fest, welche Einstellungen der Benutzer in der Webmail-Oberfläche selbst ändern darf: **Spam-Alias**, **TLS-Richtlinie**, **Spam-Score**, **Spam-Richtlinie**, **Trennzeichen-Aktion**, **Sync-Jobs**, **EAS-Reset**, **SOGo-Profil-Reset**, **Pushover**, **Quarantäne**, **Quarantäne-Anhänge**, **Quarantäne-Benachrichtigung**, **Quarantäne-Kategorie** und **App-Passwörter**.

:::note[Sync-Jobs brauchen das Recht]
Sollen Benutzer ihre E-Mails aus einem alten Postfach selbst importieren, muss **Sync-Jobs** aktiviert bleiben. Siehe [Benutzer: E-Mails migrieren](user_mail_migration.md).
:::

## Geteilte Postfächer

Ein geteiltes Postfach ist eine gewöhnliche Mailbox – etwa `sekretariat@ihre-schule.de` –, auf die mehrere Personen mit ihrem eigenen Konto zugreifen. Der Schalter **Shared Mailbox** im Mailbox-Dialog markiert eine Mailbox als geteilt und blendet die zugehörigen Felder ein.

### Berechtigte Benutzer

Unter **Berechtigte Benutzer** wählen Sie die Mailboxen aus, die Zugriff erhalten sollen. Beim Speichern nimmt edulution zwei Dinge vor:

1. Es setzt die IMAP-Zugriffsrechte auf den freigegebenen Ordnern des Postfachs.
2. Es trägt das geteilte Postfach als erlaubte Absenderadresse der berechtigten Benutzer ein. Diese können anschließend in der Mail-App im Namen des Postfachs schreiben.

Wird ein Benutzer aus der Liste entfernt, werden beide Rechte wieder entzogen.

### Geteilte Ordner

**Geteilte Ordner** steht beim Bearbeiten zur Verfügung und schränkt ein, auf welche Ordner sich die Berechtigung erstreckt. Ohne Auswahl ermittelt edulution beim ersten Speichern die vorhandenen Ordner des Postfachs und gibt diese frei.

### Passwort des Postfachs

Um die Rechte auf den Ordnern setzen zu können, meldet sich edulution selbst am Postfach an. Beim Aktivieren von **Shared Mailbox** ist deshalb die Eingabe des Mailbox-Passworts erforderlich. Es wird verschlüsselt in der edulution-Datenbank hinterlegt und ausschließlich für die Rechtevergabe verwendet.

Ändern Sie das Passwort des Postfachs in Mailcow, tragen Sie es auch hier neu ein – andernfalls meldet edulution beim nächsten Speichern, dass das gespeicherte Passwort nicht mehr verwendbar ist.

### Hinweise beim Speichern

Weil die Rechte auf zwei Systemen liegen – in Mailcow und auf den IMAP-Ordnern – kann der Abgleich unvollständig bleiben. Der Dialog weist darauf hin:

| Hinweis | Bedeutung |
|---|---|
| **Berechtigungen ohne Eintrag** | Diese Konten haben auf dem Mailserver Zugriff, stehen aber nicht in der Liste. Speichern entzieht ihnen den Zugriff |
| **Abgleich unvollständig** | Für die genannten Ordner ließen sich die Rechte auf dem Mailserver nicht lesen. Dort bestehende Zugriffe bleiben unangetastet und werden oben nicht angezeigt |

Schlägt das Setzen einzelner Rechte fehl, benennt die Meldung nach dem Speichern die betroffenen Konten beziehungsweise Ordner.

## Mailbox löschen

Im Dialog **Mailbox bearbeiten** entfernt die Schaltfläche **Löschen** die Mailbox samt Inhalt. edulution fragt vorher nach.

:::danger[Nicht umkehrbar]
Alle E-Mails und Daten der Mailbox werden unwiderruflich gelöscht. Ein Wiederherstellen ist nur aus einer Sicherung des Mailservers möglich.
:::

Beim Löschen räumt edulution zusätzlich auf: Die Mailbox wird als berechtigter Benutzer aus allen geteilten Postfächern entfernt, und die Einträge für erlaubte Absenderadressen werden bereinigt. War die gelöschte Mailbox selbst ein geteiltes Postfach, entfällt auch der zugehörige Eintrag mit dem gespeicherten Passwort.

## Siehe auch

- [Mail-App konfigurieren](mail-app-konfiguration.md) – Mailcow-API, IMAP, SMTP und externe Provider
- [Administration](administration.md) – Mailcow-Oberfläche und Webmail
- [Verteilerlisten](verteilerlisten.md) – projektbasierte E-Mail-Verteiler
