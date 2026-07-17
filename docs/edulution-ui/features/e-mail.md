# E-Mail

Die **E-Mail-App** ist der in edulution integrierte Mail-Client. Sie lesen, schreiben und verwalten darin Ihre Nachrichten, ohne die Plattform zu verlassen. Grundlage ist das edulution-Mailsystem (SOGo/mailcow); die App greift über die Standardprotokolle auf Ihr Postfach zu.

## Aufbau der Oberfläche

Die E-Mail-App ist in drei Bereiche gegliedert:

1. **Ordnerliste** (links) – Ihre Postfächer und deren Ordner.
2. **Nachrichtenliste** (Mitte) – die Nachrichten des gewählten Ordners.
3. **Leseansicht** (rechts) – die geöffnete Nachricht. Solange keine Nachricht ausgewählt ist, erscheint hier ein Hinweis **„Wähle eine Nachricht zum Lesen"**.

Die Trennlinie zwischen Nachrichtenliste und Leseansicht lässt sich mit der Maus verschieben. Über die Schaltfläche **Oben/Unten teilen** bzw. **Links/Rechts teilen** in der Aktionen-Leiste (siehe unten) wechseln Sie zwischen nebeneinander- und übereinander angeordneten Bereichen. Auf Mobilgeräten wird jeweils nur ein Bereich angezeigt.

## Aktionen-Leiste

Oben rechts finden Sie in der Aktionen-Leiste die wichtigsten Aktionen:

| Schaltfläche | Funktion |
|---|---|
| **Verfassen** | Öffnet das Fenster zum Schreiben einer neuen E-Mail |
| **Oben/Unten teilen** / **Links/Rechts teilen** | Schaltet die Anordnung von Nachrichtenliste und Leseansicht um |
| **In SOGo öffnen** | Öffnet das vollständige SOGo-Webmail in einem neuen Tab |
| **Aktualisieren** | Lädt den aktuellen Ordner neu |
| **E-Mail-Einstellungen** | Öffnet die Mail-Einstellungen (Signatur, automatische Antwort, Weiterleitung, Filter – siehe [Mein Profil](../benutzer/mein-profil.md)) |

## Ordner und Postfächer

In der Ordnerliste sehen Sie Ihr Postfach mit den Standardordnern **Posteingang**, **Entwürfe**, **Gesendet**, **Papierkorb**, **Spam** und **Archiv**. Eigene Unterordner werden eingerückt darunter dargestellt, und neben jedem Ordner wird die Zahl ungelesener Nachrichten angezeigt.

- Haben Sie Zugriff auf **freigegebene Postfächer** (z. B. ein Funktionspostfach wie `verwaltung@…`), erscheinen diese als zusätzliche Postfächer mit eigenen Ordnern in der Liste.
- Über das **Aktionen**-Menü an einem Ordner legen Sie **neue Ordner** an, **benennen** sie um oder **löschen** sie. Ordnernamen dürfen bestimmte Sonderzeichen nicht enthalten; das Löschen wird mit einer Sicherheitsabfrage bestätigt.

## Nachrichten lesen und verwalten

Über der Nachrichtenliste können Sie mit den Reitern **Alle** und **Ungelesen** filtern und über das Suchfeld **E-Mails durchsuchen**. Nachrichten sind nach Zeitraum gruppiert (z. B. **Heute**, **Gestern**, **Letzte Woche**).

Ungelesene Nachrichten sind in der Liste deutlich hervorgehoben: Absender und Betreff erscheinen in kräftiger Schrift, zusätzlich kennzeichnen ein farbiger Randstreifen am linken Rand und ein Punkt die ungelesene Nachricht. Bereits gelesene Nachrichten werden dezent abgeschwächt dargestellt, sodass Sie ungelesene E-Mails auf einen Blick erkennen. Die aktuell geöffnete Nachricht sowie über die Auswahlkästchen markierte Nachrichten werden zusätzlich farblich hinterlegt.

- Ein Klick auf eine Nachricht öffnet sie in der Leseansicht. In der Kopfzeile stehen **Antworten**, **Allen antworten**, **Weiterleiten** und **Drucken** zur Verfügung; weitere Aktionen wie als gelesen/ungelesen markieren, verschieben oder löschen erreichen Sie über das Aktionsmenü.
- **Anhänge** können Sie herunterladen oder direkt **in Dateien speichern**.
- Über die Auswahlkästchen markieren Sie mehrere Nachrichten gleichzeitig. Ist mindestens eine Nachricht ausgewählt, erscheint eine Aktionsleiste (**… ausgewählt**) mit **In den Papierkorb verschieben** und einem **Mehr**-Menü für weitere Sammelaktionen (z. B. als gelesen markieren, verschieben, endgültig löschen, als Spam markieren).

## E-Mail verfassen

Über **Verfassen** öffnen Sie das Schreibfenster:

- **Von**: Absenderadresse. Neben Ihrer eigenen Adresse können hier auch freigegebene Postfächer zur Auswahl stehen, für die Sie eine Sendeberechtigung besitzen.
- **An** sowie optional **CC/BCC** (über **CC/BCC hinzufügen** einblendbar).
- **Betreff** und der Nachrichtentext im Editor mit Formatierungsfunktionen (fett, kursiv, Listen, Links u. a.).
- **Anhänge** fügen Sie **vom Gerät** oder **aus Dateien** (Ihrem edulution-Dateibereich) hinzu. Für Text und Anhänge zusammen gilt eine maximale Gesamtgröße.
- Über **Signatur einfügen** ergänzen Sie Ihre Signatur (siehe [Mein Profil → Signatur](../benutzer/mein-profil.md#signatur)).

Entwürfe werden während des Schreibens automatisch gespeichert; zusätzlich können Sie **Als Entwurf speichern** wählen. **Senden** verschickt die Nachricht.

### Schreibfenster schließen

Enthält die Nachricht ungespeicherte Änderungen, fragt edulution beim Schließen, ob Sie sie **als Entwurf speichern**, **verwerfen** oder **weiter bearbeiten** möchten.

Beim Speichern landet die Nachricht im Ordner **Entwürfe**. Beim **Verwerfen** wird auch ein bereits automatisch gespeicherter Entwurf gelöscht. Ist die Nachricht zu groß, um als Entwurf gespeichert zu werden, entfällt **Als Entwurf speichern**; Sie können dann nur verwerfen oder weiter bearbeiten.

### HTML-Quelltext bearbeiten

Oben rechts im Editor finden Sie – neben **Signatur einfügen** – die **Editor-/Quelltext-Umschaltung**. Damit wechseln Sie zwischen der formatierten Ansicht und der direkten HTML-Bearbeitung, wie Sie es bereits von der [Signatur](../benutzer/mein-profil.md#signatur) kennen.

Die Quelltext-Ansicht benötigen Sie immer dann, wenn Sie fertiges HTML versenden möchten, etwa einen gestalteten Newsletter oder eine Einladung aus einer Vorlage:

1. Schalten Sie über das Symbol in die **Quelltext**-Ansicht um.
2. Fügen Sie den HTML-Quelltext in das Textfeld ein oder bearbeiten Sie ihn dort direkt.
3. Versenden Sie die Nachricht mit **Senden**. Der Quelltext wird unverändert als HTML verschickt und beim Empfänger formatiert dargestellt.

:::warning[Wechsel zurück in die formatierte Ansicht]
Der formatierte Editor unterstützt nicht alle HTML-Formatierungen. Schalten Sie mit gestaltetem HTML zurück in die **Editor**-Ansicht, gehen die nicht unterstützten Bestandteile verloren. Betroffen sind sowohl ganze Elemente – etwa Tabellen oder eigene Formatvorlagen – als auch einzelne Formatierungen wie Textausrichtung oder Schriftgröße.

Vor dem Wechsel erscheint deshalb ein Bestätigungsdialog, der genau auflistet, welche Elemente und Formatierungen entfernt würden. Mit **Abbrechen** bleiben Sie in der Quelltext-Ansicht und behalten das HTML unverändert; mit **Trotzdem wechseln** übernehmen Sie den Verlust bewusst. Bleiben Sie im Zweifel in der Quelltext-Ansicht, bis Sie die Nachricht versenden.
:::

:::tip[Hinweis]
Fügen Sie HTML-Quelltext direkt in die **formatierte** Ansicht ein, wird er als reiner Text übernommen und die Tags erscheinen sichtbar in der Nachricht. Verwenden Sie für diesen Fall die Quelltext-Ansicht.
:::

## Benachrichtigungen bei neuen E-Mails

Trifft eine neue E-Mail ein, werden Sie in edulution benachrichtigt – über die **Benachrichtigungen** der Plattform und, sofern auf Ihrem Gerät eingerichtet, zusätzlich als **Push-Benachrichtigung**.

Ein Klick bzw. Tipp auf eine solche Benachrichtigung bringt Sie direkt an die passende Stelle in der E-Mail-App:

- Bei einer neuen Nachricht im **Posteingang** wird die betreffende Nachricht unmittelbar in der Leseansicht geöffnet.
- Bei neuen Nachrichten in einem anderen Ordner oder in einem **freigegebenen Postfach** wird der jeweilige Ordner geöffnet.

Der aktuell geöffnete Ordner und die geöffnete Nachricht sind zudem in der Adresse (URL) der E-Mail-App enthalten. So können Sie einen Ordner oder eine Nachricht als Lesezeichen speichern oder einen Link darauf weitergeben – beim Aufruf wird direkt das entsprechende Ziel geöffnet.

### Empfängerprüfung beim Senden

Beim Senden prüft edulution, ob Empfänger mit einer Adresse Ihrer Organisation im Mailsystem bekannt sind. Dabei werden neben den primären Adressen auch **Alias-Adressen** (zusätzliche Adressformen einer Person oder Gruppe) und **Alias-Domänen** berücksichtigt. Externe Adressen werden nicht geprüft und immer versendet.

- Ist **kein** Empfänger im Mailsystem bekannt, wird die Nachricht nicht gesendet und Sie erhalten einen Hinweis mit den betroffenen Adressen.
- Sind nur **einzelne** Empfänger unbekannt, wird die Nachricht an die übrigen Empfänger gesendet; die übersprungenen Adressen werden Ihnen angezeigt.
- Ist das Mailsystem **vorübergehend nicht erreichbar**, wird die Prüfung für diesen Sendevorgang übersprungen, damit gültige Empfänger nicht fälschlich abgewiesen werden. Auch die Empfängervorschläge im Adressfeld funktionieren dann weiter, zeigen aber gegebenenfalls kurzzeitig keine Alias-Adressen an.

## Hinweis auf aktive automatische Antwort

Ist eine **automatische Antwort (Abwesenheitsnotiz)** aktiv, zeigt die E-Mail-App dies direkt im Kopfbereich unterhalb des Titels an. So erkennen Sie auf einen Blick, dass aktuell automatisch auf eingehende Nachrichten geantwortet wird, ohne erst die Einstellungen öffnen zu müssen.

- Für Ihr **persönliches Postfach** erscheint der Hinweis, sobald eine Ihrer Vorlagen aktiv ist – mit dem Namen der aktiven Vorlage.
- Haben Sie ein **freigegebenes Postfach** ausgewählt, das Sie verwalten dürfen, bezieht sich der Hinweis auf dieses Postfach und nennt zusätzlich dessen Adresse. Für freigegebene Postfächer, die Sie nicht verwalten, wird kein Hinweis angezeigt.
- Ist keine automatische Antwort aktiv, erscheint kein Hinweis.

Ein Klick auf den Hinweis bringt Sie direkt zu den **E-Mail-Einstellungen**, wo Sie die automatische Antwort anpassen oder deaktivieren können.

## Einstellungen

Signatur, automatische Antwort (Abwesenheitsnotiz), Weiterleitung und Filter verwalten Sie in den **E-Mail-Einstellungen**. Eine ausführliche Beschreibung finden Sie unter [Mein Profil](../benutzer/mein-profil.md).

Bei der automatischen Antwort können Sie zusätzlich festlegen, welche Absender überhaupt eine Antwort erhalten: alle Absender, nur Absender innerhalb der Domänen Ihrer Organisation (interne Absender) oder ausschließlich externe Absender. Die internen Domänen werden Ihnen dabei direkt angezeigt. Details dazu finden Sie unter [Mein Profil](../benutzer/mein-profil.md).

Sind Sie als Berechtigter für ein **freigegebenes Postfach** eingetragen, können Sie dort auch dessen **automatische Antwort** verwalten – siehe [Mein Profil → Automatische Antwort für freigegebene Postfächer](../benutzer/mein-profil.md#automatische-antwort-für-freigegebene-postfächer).

## Einrichtung (für Administratoren)

Welche Nutzergruppen die E-Mail-App überhaupt sehen, an welcher Stelle sie in der App-Liste erscheint und welches Theme der SOGo-Webmailer verwendet, legen Administratoren unter [Einstellungen → E-Mails](../administration/einstellungen.md#e-mails) fest.
