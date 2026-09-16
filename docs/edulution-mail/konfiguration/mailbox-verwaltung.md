---
sidebar_custom_props:
  audience: admin
---

# Mailboxen und geteilte Postfächer

Mailboxen lassen sich direkt aus edulution Plattform heraus anlegen, bearbeiten und löschen – ein Wechsel in die Mailcow-Oberfläche ist dafür nicht mehr nötig. Zusätzlich verwaltet edulution hier geteilte Postfächer: Postfächer, auf die mehrere Benutzer zugreifen und in deren Namen sie E-Mails versenden dürfen.

:::caution[Nur für Administratoren]
Die Mailbox-Verwaltung steht ausschließlich Global-Administratoren sowie den Mitgliedern der festgelegten [Administratorengruppen](../../edulution-plattform/konfiguration/einstellungen.md#administratorengruppe-festlegen) offen. Alle Aktionen wirken unmittelbar auf dem Mailserver.
:::

Die Verwaltung finden Sie unter **Einstellungen → E-Mails → Mailbox-Verwaltung**. Voraussetzung ist ein gültiger Mailcow-API-Zugang, siehe [Mail-App konfigurieren](./mail-app-konfiguration.md#url-und-api-schlüssel).

:::info[Ohne Mailcow-Zugang bleibt die Tabelle leer]
Sind URL und API-Schlüssel nicht hinterlegt oder antwortet Mailcow nicht, bleibt die Tabelle leer und es erscheint die Meldung **„Mailcow-Mailboxen konnten nicht abgerufen werden“**.
:::

## Die Mailbox-Tabelle

Die Tabelle listet alle Mailboxen der angebundenen Mailcow-Instanz:

| Spalte | Bedeutung |
|---|---|
| **Benutzername** | Vollständige E-Mail-Adresse der Mailbox. Geteilte Postfächer tragen zusätzlich die Markierung **Shared** |
| **Name** | Anzeigename, z. B. `Max Mustermann` |
| **Domain** | Mail-Domain der Mailbox |
| **Quota** | Belegter und zugewiesener Speicherplatz, z. B. `2,1 GB / 3 GB` |
| **Aktiv** | Ob die Mailbox nutzbar ist |
| **Nachrichten** | Anzahl der gespeicherten Nachrichten |

Über das Suchfeld filtern Sie nach Benutzernamen; die Tabelle zeigt 10 Einträge je Seite. Der Filter **Nur Shared** blendet alles aus, was kein geteiltes Postfach ist. Auf schmalen Bildschirmen entfallen die Spalten Domain, Quota und Nachrichten, auf Tablets die Spalte Nachrichten.

:::note[Löschen führt nur über den Bearbeiten-Dialog]
Die Tabelle hat bewusst keine Auswahlkästchen und keinen Löschen-Button – mehrere Mailboxen auf einmal zu löschen ist nicht vorgesehen. Öffnen Sie stattdessen die Mailbox per Klick auf die Zeile und verwenden Sie dort **Löschen**.
:::

## Mailbox anlegen

Die Schaltfläche **Hinzufügen** unter der Tabelle öffnet den Dialog **Mailbox erstellen** mit folgenden Feldern:

| Feld | Bedeutung |
|---|---|
| **Lokaler Teil** | Teil der Adresse vor dem `@`, z. B. `max.mustermann` |
| **Domain** | Auswahlliste der in Mailcow angelegten Domains |
| **Name** | Anzeigename, erscheint als Absendername |
| **Quota (MB)** | Speicherplatz der Mailbox, voreingestellt 3072 MB (3 GB) |
| **Passwort** / **Passwort bestätigen** | Anmeldekennwort der Mailbox |

### Regeln für die Eingaben

- **Lokaler Teil:** Buchstaben, Ziffern, `_`, `+` und `-`, durch einzelne Punkte trennbar; höchstens 64 Zeichen. Die Eingabe wird beim Speichern in Kleinbuchstaben umgewandelt.
- **Domain:** auswählbar sind ausschließlich Domains, die Mailcow bereits kennt – eine freie Eingabe ist nicht möglich. Existiert genau eine Domain, ist sie vorausgewählt. Bleibt die Liste leer, konnten die Domains nicht geladen werden; prüfen Sie dann zuerst die Mailcow-Verbindung.
- **Quota:** mindestens 1 MB, höchstens 1.048.576 MB (1 TiB). Eine Quota von 0, die Mailcow als „unbegrenzt“ deutet, lässt sich über diese Oberfläche nicht eintragen.
- **Passwort:** mindestens 8 Zeichen und mindestens eine Ziffer sowie ein Sonderzeichen.

Adresse und Domain stehen nur beim Anlegen zur Verfügung. Beim Bearbeiten einer bestehenden Mailbox sind sie ausgeblendet, da Mailcow das Umbenennen einer Mailbox nicht unterstützt – legen Sie in diesem Fall eine neue Mailbox an.

:::caution[Die Protokoll-Schalter greifen erst beim Bearbeiten]
**SOGo Zugriff**, **IMAP Zugriff**, **POP3 Zugriff** und **SMTP Zugriff** werden im Dialog **Mailbox erstellen** zwar angezeigt, beim Anlegen aber nicht an Mailcow übertragen – eine neue Mailbox erhält immer die Mailcow-Standardwerte. Wollen Sie einzelne Protokolle sperren, öffnen Sie die Mailbox nach dem Anlegen erneut und speichern die Schalter dort.
:::

## Mailbox bearbeiten

Ein Klick auf eine Zeile öffnet den Dialog **Mailbox bearbeiten**. Neben Anzeigename, Quota und den Zugriffseinstellungen stehen hier zusätzlich die [Benutzer-ACL](#benutzer-acl) und die Felder für [geteilte Postfächer](#geteilte-postf%C3%A4cher) zur Verfügung.

Das Feld **Passwort** bleibt beim Bearbeiten leer und trägt den Platzhalter *Unverändert lassen*. Nur wenn Sie hier etwas eintragen, wird das Kennwort geändert.

:::note[Beim Speichern gibt es kein Zurückrollen]
Das Speichern einer bestehenden Mailbox löst nacheinander bis zu drei Anfragen aus: Mailbox-Daten, Benutzer-ACL und Berechtigungen des geteilten Postfachs. Schlägt eine der späteren fehl, bleiben die bereits übernommenen Änderungen bestehen. Der Dialog bleibt dann geöffnet und die Tabelle wird neu geladen, sodass Sie den tatsächlichen Stand sehen.
:::

Scheitert beim **Anlegen** lediglich die Freigabe, bleibt die neue Mailbox bestehen: Der Dialog schließt und Sie erhalten den Hinweis **„Mailbox erstellt, aber die Berechtigungen konnten nicht angewendet werden“**. Öffnen Sie die Mailbox anschließend erneut, um die Freigabe nachzuholen.

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
Der in edulution Plattform integrierte E-Mail-Client greift über IMAP und SMTP auf den Mailserver zu. Ist **IMAP Zugriff** oder **SMTP Zugriff** deaktiviert, kann der Benutzer die Mail-App nicht mehr verwenden – auch dann nicht, wenn die Webmail-Oberfläche weiterhin funktioniert.
:::

## Benutzer-ACL

Der Abschnitt **Benutzer-ACL** erscheint beim Bearbeiten einer Mailbox und legt fest, welche Einstellungen der Benutzer in der Webmail-Oberfläche selbst ändern darf: **Spam-Alias**, **TLS-Richtlinie**, **Spam-Score**, **Spam-Richtlinie**, **Trennzeichen-Aktion**, **Sync-Jobs**, **EAS-Reset**, **SOGo-Profil-Reset**, **Pushover**, **Quarantäne**, **Quarantäne-Anhänge**, **Quarantäne-Benachrichtigung**, **Quarantäne-Kategorie** und **App-Passwörter**. Sie hat nichts mit der Freigabe an andere Benutzer zu tun.

:::warning[Die Benutzer-ACL wird bei jedem Speichern neu vergeben]
Der Dialog liest den aktuellen Stand nicht aus Mailcow aus, sondern zeigt beim Öffnen immer alle 14 Optionen als aktiviert an. Mit dem Speichern werden sie dadurch auch alle wieder erteilt – auch solche, die Sie zuvor direkt in Mailcow abgeschaltet hatten. Sollen einzelne Optionen gesperrt bleiben, schalten Sie sie vor jedem Speichern erneut ab.
:::

:::note[Sync-Jobs brauchen das Recht]
Sollen Benutzer ihre E-Mails aus einem alten Postfach selbst importieren, muss **Sync-Jobs** aktiviert bleiben. Siehe [Benutzer: E-Mails migrieren](../migration.md).
:::

## Geteilte Postfächer

Ein geteiltes Postfach ist eine gewöhnliche Mailbox – etwa `sekretariat@ihre-schule.de` –, auf die mehrere Personen mit ihrem eigenen Konto zugreifen. Der Schalter **Shared Mailbox** im Mailbox-Dialog markiert eine Mailbox als geteilt und blendet die zugehörigen Felder ein.

### Berechtigte Benutzer

Unter **Berechtigte Benutzer** wählen Sie die Mailboxen aus, die Zugriff erhalten sollen – zur Auswahl stehen ausschließlich Adressen, die selbst eine Mailbox auf dem Mailserver besitzen. Beim Speichern nimmt edulution zwei Dinge vor:

1. Es setzt die IMAP-Zugriffsrechte auf den freigegebenen Ordnern des Postfachs.
2. Es trägt das geteilte Postfach als erlaubte Absenderadresse der berechtigten Benutzer ein. Diese können anschließend in der Mail-App im Namen des Postfachs schreiben.

Wird ein Benutzer aus der Liste entfernt, werden beide Rechte wieder entzogen.

:::caution[Den Schalter auszuschalten entzieht keine Rechte]
**Shared Mailbox** auszuschalten entfernt nur die Markierung – die bereits erteilten Zugriffsrechte und die Sendeberechtigung bleiben bestehen. Nehmen Sie eine Freigabe deshalb zurück, indem Sie die Liste **Berechtigte Benutzer** leeren und speichern; erst danach schalten Sie den Schalter aus.

Ist es dafür bereits zu spät, schalten Sie **Shared Mailbox** wieder ein: Die betroffenen Konten erscheinen dann unter **Berechtigungen ohne Eintrag** und lassen sich durch Speichern entziehen.
:::

### Geteilte Ordner

**Geteilte Ordner** steht beim Bearbeiten zur Verfügung und schränkt ein, auf welche Ordner sich die Berechtigung erstreckt. Ohne Auswahl ermittelt edulution beim ersten Speichern die vorhandenen Ordner des Postfachs und gibt diese frei.

Ordner, die der Mailserver nur als Zwischenebene für Unterordner führt, können keine Berechtigungen tragen. Sie werden gar nicht erst zur Auswahl angeboten und beim Speichern übersprungen, falls sie noch aus einer früheren Freigabe in der Liste stehen.

### Passwort des Postfachs

Um die Rechte auf den Ordnern setzen zu können, meldet sich edulution selbst am Postfach an. Solange **Shared Mailbox** aktiv ist und noch keine Zugangsdaten hinterlegt sind, ist **Passwort** deshalb ein Pflichtfeld: Es erscheint der Hinweis „Passwort ist erforderlich, um die Mailbox zu teilen“, und **Speichern** bleibt gesperrt. Das Passwort wird bereits im Browser verschlüsselt, verschlüsselt in der edulution-Datenbank hinterlegt und ausschließlich für die Rechtevergabe verwendet.

Ändern Sie das Passwort des Postfachs in Mailcow oder SOGo, tragen Sie es auch hier neu ein. Andernfalls scheitern das Laden der Ordnerliste und jede weitere Freigabe mit der Meldung **„IMAP-Anmeldung fehlgeschlagen: Zugangsdaten wurden abgelehnt“**.

### Hinweise beim Speichern

Weil die Rechte auf zwei Systemen liegen – in Mailcow und auf den IMAP-Ordnern – kann der Abgleich unvollständig bleiben. Beim Öffnen einer freigegebenen Mailbox vergleicht edulution die Liste **Berechtigte Benutzer** mit den Rechten, die auf dem Mailserver tatsächlich gesetzt sind, und weist im Dialog auf Abweichungen hin:

| Hinweis | Bedeutung |
|---|---|
| **Berechtigungen ohne Eintrag** | Diese Konten haben auf dem Mailserver Zugriff, stehen aber nicht in der Liste. Speichern entzieht ihnen den Zugriff |
| **Abgleich unvollständig** | Für die genannten Ordner ließen sich die Rechte auf dem Mailserver nicht lesen. Dort bestehende Zugriffe bleiben unangetastet und werden oben nicht angezeigt |

Solche Abweichungen entstehen, wenn Rechte außerhalb von edulution vergeben wurden – etwa direkt in Mailcow oder SOGo – oder wenn eine frühere Freigabe nur teilweise zurückgenommen werden konnte. Ein leeres Feld **Berechtigungen ohne Eintrag** bedeutet bei unvollständigem Abgleich also nicht, dass es keine gibt.

Nach dem Speichern benennt edulution, was nicht vollständig durchlief:

| Meldung | Bedeutung |
|---|---|
| „Berechtigungen gespeichert. Für diese Ordner konnten keine Rechte gesetzt werden: …“ | Die Freigabe ist gespeichert, auf den genannten Ordnern ließen sich die Rechte nicht setzen |
| „Für diese Konten konnte keine einzige Berechtigung gesetzt werden. Sie wurden nicht gespeichert: …“ | Für die genannten Konten ließ sich kein einziges Recht setzen, sie wurden deshalb nicht übernommen |
| „Der Entzug konnte nicht abgeschlossen werden. Diese Konten behalten Zugriff: …“ | Der Entzug lief nicht durch. Die Konten bleiben bewusst in **Berechtigte Benutzer** stehen, solange sie irgendwo noch Rechte besitzen |
| „Berechtigte gespeichert. Für diese Ordner konnten die Berechtigungen auf dem Mailserver nicht gelesen werden …“ | Der Abgleich blieb unvollständig; dort bestehende Zugriffe blieben unangetastet |

Speichern Sie erneut, sobald die Ursache behoben ist – der fehlgeschlagene Schritt wird dann wiederholt.

## Mailbox löschen

Im Dialog **Mailbox bearbeiten** entfernt die Schaltfläche **Löschen** die Mailbox samt Inhalt. edulution fragt vorher nach und nennt dabei die betroffene Adresse; eine Eingabe zur Bestätigung ist nicht erforderlich.

:::danger[Nicht umkehrbar]
Alle E-Mails und Daten der Mailbox werden unwiderruflich gelöscht. Ein Wiederherstellen ist nur aus einer Sicherung des Mailservers möglich.
:::

Beim Löschen räumt edulution zusätzlich auf: Die Mailbox wird als berechtigter Benutzer aus allen geteilten Postfächern entfernt, und die Einträge für erlaubte Absenderadressen werden bereinigt. War die gelöschte Mailbox selbst ein geteiltes Postfach, entfällt auch der zugehörige Eintrag mit dem gespeicherten Passwort. Die Empfängervorschläge der Mail-App werden ebenfalls aufgefrischt, sodass die Adresse dort nicht mehr vorgeschlagen wird.

## Häufige Fehlermeldungen

| Meldung | Ursache |
|---|---|
| **Eine Mailbox mit dieser Adresse existiert bereits** | Lokaler Teil und Domain sind bereits vergeben |
| **Das Passwort entspricht nicht der konfigurierten Komplexitätsrichtlinie** | Mailcows eigene Passwortrichtlinie ist strenger als die Prüfung im Dialog |
| **Die maximale Anzahl an Mailboxen für diese Domain ist erreicht** | Das in Mailcow gesetzte Mailbox-Limit der Domain ist ausgeschöpft |
| **Die gewünschte Quota überschreitet das verbleibende Domain-Kontingent** | Die Summe aller Quotas würde das Kontingent der Domain übersteigen |
| **Mailcow hat den Zugriff verweigert (API-Token prüfen)** | Der hinterlegte API-Schlüssel ist ungültig oder hat zu wenig Rechte |

Bei einem Fehler bleibt der Dialog geöffnet und die Tabelle wird neu geladen, sodass Sie sofort sehen, was tatsächlich übernommen wurde.

## Siehe auch

- [Mail-App konfigurieren](./mail-app-konfiguration.md) – Mailcow-API, IMAP, SMTP und externe Provider
- [Administration](./administration.md) – Mailcow-Oberfläche und Webmail
- [Verteilerlisten](./verteilerlisten.md) – projektbasierte E-Mail-Verteiler
