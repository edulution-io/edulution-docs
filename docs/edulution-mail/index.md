---
title: edulution Mail
description: Der integrierte Mailserver auf Mailcow-Basis – Postfächer, Verteilerlisten und Mail-Clients
---

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
| **E-Mail-Einstellungen** | Öffnet die Mail-Einstellungen (Signatur, automatische Antwort, Weiterleitung, Filter – siehe [Mein Profil](../edulution-plattform/uebersicht/benutzereinstellungen/index.md)) |

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

### Links in Nachrichten

Links in einer Nachricht öffnen sich in einem neuen Browser-Tab. edulution bleibt dabei im bisherigen Tab geöffnet, sodass Sie weder Ihren Platz in der Nachrichtenliste noch einen begonnenen Entwurf verlieren. In der Leseansicht sind diese Links mit einem kleinen Pfeil (↗) gekennzeichnet, sodass Sie bereits vor dem Klick erkennen, dass ein neuer Tab geöffnet wird.

Nicht in einem neuen Tab geöffnet werden Sprungmarken innerhalb derselben Nachricht – sie führen wie gewohnt an die entsprechende Stelle im Text – sowie E-Mail- und Telefonlinks, die Ihr Mailprogramm bzw. Ihre Telefonanwendung öffnen.

### Darstellung von HTML-Nachrichten

Der Inhalt einer HTML-Nachricht wird vor der Anzeige bereinigt: Skripte und Formulare werden entfernt, damit fremder Code nicht innerhalb von edulution ausgeführt wird. Formatierungen bleiben erhalten – sowohl direkt am Element hinterlegte als auch eine vom Absender mitgelieferte Formatvorlage –, lediglich einzelne gefährliche Konstrukte darin (z. B. externe Importe) werden entfernt.

Ein in der Nachricht eingebettetes Formular – etwa ein Umfrage- oder Anmeldefeld eines Newsletters – lässt sich deshalb nicht innerhalb von edulution ausfüllen. Nutzen Sie in diesem Fall den in der Nachricht angebotenen Link zur Website des Absenders.

Bilder und andere extern nachgeladene Inhalte blendet edulution zum Schutz Ihrer Privatsphäre zunächst aus – unabhängig vom Absender und ohne eine Möglichkeit, einzelne Absender dauerhaft davon auszunehmen. Es erscheint der Hinweis „Um deine Privatsphäre zu schützen, wurde der automatische Download einiger Bilder in dieser Nachricht verhindert.“ mit dem Link **Bilder herunterladen**. Ein Klick lädt die Inhalte für diese Nachricht nach; die Freigabe gilt nur bis zum nächsten Neuladen der Seite. Deshalb können aufwendig gestaltete Newsletter zunächst schlichter aussehen als in anderen Mailprogrammen – auch in der Druckansicht, die denselben Freigabestatus übernimmt.

## E-Mail verfassen

Über **Verfassen** öffnen Sie das Schreibfenster:

- **Von**: Absenderadresse. Neben Ihrer eigenen Adresse können hier auch freigegebene Postfächer zur Auswahl stehen, für die Sie eine Sendeberechtigung besitzen.
- **An** sowie optional **CC/BCC** (über **CC/BCC hinzufügen** einblendbar).
- **Betreff** und der Nachrichtentext im Editor mit Formatierungsfunktionen (fett, kursiv, Listen, Links u. a.).
- **Anhänge** fügen Sie **vom Gerät** oder **aus Dateien** (Ihrem edulution-Dateibereich) hinzu. Für Text und Anhänge zusammen gilt eine maximale Gesamtgröße.
- Über **Signatur einfügen** ergänzen Sie Ihre Signatur (siehe [Mein Profil → Signatur](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md#signatur)).

Entwürfe werden während des Schreibens automatisch gespeichert; zusätzlich können Sie **Als Entwurf speichern** wählen. **Senden** verschickt die Nachricht.

Ist in Ihren E-Mail-Einstellungen das **verzögerte Senden** aktiviert (siehe [Mein Profil → Senden rückgängig machen](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md#senden-rückgängig-machen)), wird die Nachricht nach dem Klick auf **Senden** nicht sofort verschickt: Für die eingestellte Dauer erscheint die Meldung **Nachricht wird gesendet …** mit der Schaltfläche **Rückgängig**. Ein Klick auf **Rückgängig** innerhalb dieses Zeitfensters bricht den Versand ab und öffnet die Nachricht mit allen Empfängern, dem Text und den Anhängen erneut zur Bearbeitung. Läuft das Zeitfenster ab, wird die Nachricht verschickt. Das Zurückhalten erfolgt serverseitig – der Versand wird also auch dann ausgeführt, wenn Sie das Fenster oder den Browser zwischenzeitlich schließen.

Die erneut geöffnete Nachricht bleibt mit ihrem automatisch gespeicherten Entwurf verknüpft; es entsteht also kein zweiter Entwurf. Beim Schließen werden Sie gefragt, ob der Entwurf behalten oder verworfen werden soll – auch dann, wenn Sie nichts weiter daran geändert haben.

Ob der Abbruch noch greift und ob der Versand gelingt, erfahren Sie nachträglich über eine Meldung:

| Meldung | Bedeutung |
|---------|-----------|
| **Zu spät – die Nachricht wurde bereits gesendet** | Beim Klick auf **Rückgängig** war das Zeitfenster bereits abgelaufen; die Nachricht ist unterwegs |
| **Das Senden konnte nicht abgebrochen werden – die Nachricht wird trotzdem gesendet** | Der Abbruch hat den Server nicht erreicht, etwa bei einer Netzwerkstörung; der Versand läuft weiter |
| **Verzögerte Nachricht konnte nicht gesendet werden** | Der Versand ist fehlgeschlagen; die Nachricht bleibt als Entwurf erhalten und geht nicht verloren |
| **Einige Empfänger sind im System nicht bekannt und wurden nicht beliefert: …** | Die Nachricht wurde zugestellt, die genannten Empfänger jedoch nicht erreicht |

Konnte keiner der Empfänger beliefert werden, bleibt die Nachricht ebenfalls als Entwurf erhalten.

### Empfängervorschläge im Adressfeld

Sobald Sie in **An**, **CC** oder **BCC** zu tippen beginnen, schlägt edulution passende Empfänger vor. Die Vorschläge stammen aus drei Quellen und erscheinen in dieser Reihenfolge:

1. **Zuletzt verwendete Empfänger** aus Ihren vorherigen Nachrichten.
2. **Kontakte** aus den Adressbüchern der [Kontakte-App](../edulution-plattform/apps/native-apps/kontakte.md) – nur, wenn die Kontakte-App eingerichtet ist und Ihre Eingabe mindestens zwei Zeichen umfasst. Durchsucht werden alle Adressbücher, auf die Sie Zugriff haben – Ihre eigenen, die für Sie freigegebenen und das globale Adressbuch –, und zwar alle gleichzeitig, anders als im Suchfeld der Kontakte-App. Am Vorschlag wird zusätzlich das Adressbuch genannt, aus dem er stammt; steht dieselbe Adresse in mehreren Adressbüchern, erscheint sie einmal und nennt alle.
3. **Empfänger aus dem Verzeichnis** Ihrer Schule: Verteiler, Alias-Adressen und freigegebene Postfächer.

Eine Adresse, die in mehreren Quellen vorkommt, erscheint nur einmal. Die Liste ist auf 50 Vorschläge begrenzt; die am besten passenden stehen oben – eine vollständige Übereinstimmung vor einem Treffer am Namensanfang und dieser vor einem Treffer irgendwo im Namen.

Auf die **Schreibweise von Umlauten und Sonderzeichen** kommt es dabei nicht an: `Müller`, `Mueller` und `Muller` führen zum selben Vorschlag, gleich welche Schreibweise im Verzeichnis oder im Kontakt hinterlegt ist. Dasselbe gilt für `ß` und `ss` sowie für Akzentzeichen. Wie in der [Kontaktsuche](../edulution-plattform/apps/native-apps/kontakte.md#suche) wird die Schreibweise bei sehr kurzen Eingaben nicht zusätzlich vereinfacht.

:::info[Einzelne Personen stammen aus Ihren Adressbüchern]
Personen schlägt edulution ausschließlich aus Ihren Adressbüchern vor; das Verzeichnis Ihrer Schule steuert nur Verteiler, Alias-Adressen und freigegebene Postfächer bei. Ist die Kontakte-App für Sie nicht eingerichtet, bleiben daher nur die zuletzt verwendeten Empfänger und diese Einträge übrig – ein Hinweis darauf erscheint nicht.

Eine Adresse, zu der Sie keinen Kontakt haben, tippen Sie wie gewohnt vollständig ein; sie wird als Empfänger übernommen. Personen, die Sie häufig anschreiben, legen Sie am besten als Kontakt in einem Ihrer Adressbücher an – siehe [Kontakte](../edulution-plattform/apps/native-apps/kontakte.md).
:::

:::info[Eltern über den Namen des Kindes finden]
Die Eltern eines Kindes erreichen Sie über den zugehörigen **Eltern-Verteiler**, den Sie auch durch Eingabe des Namens des Kindes finden. Der Vorschlag weist dann zusätzlich aus, über welches Kind er gefunden wurde – hilfreich, wenn mehrere Familien denselben Nachnamen tragen. Auch hier spielt die Schreibweise keine Rolle: `Öztürk`, `Oeztuerk` und `Ozturk` führen gleichermaßen zum Eltern-Verteiler des Kindes. Einzelne Elternteile werden nur vorgeschlagen, wenn sie in einem Ihrer Adressbücher stehen.
:::

### Verteiler als Empfänger

Wählen Sie einen **Verteiler** oder eine **Gruppe** aus den Vorschlägen, erscheint diese als ein Eintrag im Adressfeld – gekennzeichnet durch ein Gruppensymbol. edulution lädt daraufhin im Hintergrund die Mitglieder und zeigt deren **Anzahl** am Eintrag an; solange das läuft, erscheint dort ein Ladesymbol.

| Element am Eintrag | Bedeutung |
|---|---|
| **Gruppensymbol und Name** | Ein Klick darauf kopiert die Adresse des Verteilers in die Zwischenablage |
| **Zahl** | Anzahl der Mitglieder, die edulution für diesen Verteiler ermittelt hat |
| **Pluszeichen** (*… in Empfänger auflösen*) | Ersetzt den Verteiler durch seine einzelnen Mitglieder |
| **Warnsymbol** (*Mitglieder erneut laden*) | Die Mitglieder konnten nicht geladen werden – ein Klick versucht es erneut |

Über das **Pluszeichen** lösen Sie den Verteiler auf: Aus dem einen Eintrag werden so viele Einträge, wie der Verteiler Mitglieder hat. So entfernen Sie vor dem Versand **einzelne Personen**.

Lösen Sie den Verteiler **nicht** auf, wird die Nachricht an seine Adresse verschickt und vom Mailsystem an die Mitglieder verteilt. Beide Wege führen zur selben Zustellung; die Auflösung ändert nur, was Sie vor dem Senden noch bearbeiten können.

Auch beim **Antworten**, **Allen antworten** und **Weiterleiten** sowie beim erneuten Öffnen eines **Entwurfs** erkennt edulution enthaltene Verteiler und lädt deren Mitglieder nach, sodass Mitgliederzahl und Pluszeichen auch dort zur Verfügung stehen.

:::info[Nicht jeder Eintrag lässt sich auflösen]
Auflösen lassen sich nur Verteiler, die das Mailsystem als solche kennt. Lassen sich zu einem Verteiler keine Mitglieder ermitteln, bleibt er ohne Zahl und ohne Pluszeichen stehen – als einzelne Adresse ist er weiterhin verwendbar, und die Nachricht wird normal an ihn versendet.

Ohne Mitglieder bleiben auch Verteiler **einer anderen Schule** der Instanz sowie schulübergreifende Verteiler, die zu keiner einzelnen Schule gehören. Sie lassen sich wie jeder andere Verteiler auswählen und anschreiben, und die Nachricht wird zugestellt; ihre Mitglieder zeigt edulution jedoch nicht an. Ein Warnsymbol erscheint dafür nicht, da es sich nicht um einen Fehler handelt.
:::

### Schreibfenster schließen

Enthält die Nachricht ungespeicherte Änderungen, fragt edulution beim Schließen, ob Sie sie **als Entwurf speichern**, **verwerfen** oder **weiter bearbeiten** möchten.

Beim Speichern landet die Nachricht im Ordner **Entwürfe**. Beim **Verwerfen** wird auch ein bereits automatisch gespeicherter Entwurf gelöscht. Ist die Nachricht zu groß, um als Entwurf gespeichert zu werden, entfällt **Als Entwurf speichern**; Sie können dann nur verwerfen oder weiter bearbeiten.

### HTML-Quelltext bearbeiten

Oben rechts im Editor finden Sie – neben **Signatur einfügen** – die **Editor-/Quelltext-Umschaltung**. Damit wechseln Sie zwischen der formatierten Ansicht und der direkten HTML-Bearbeitung, wie Sie es bereits von der [Signatur](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md#signatur) kennen.

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

Signatur, verzögertes Senden (Senden rückgängig machen), automatische Antwort (Abwesenheitsnotiz), Weiterleitung und Filter verwalten Sie in den **E-Mail-Einstellungen**. Eine ausführliche Beschreibung finden Sie unter [Mein Profil](../edulution-plattform/uebersicht/benutzereinstellungen/index.md).

Bei der automatischen Antwort können Sie zusätzlich festlegen, welche Absender überhaupt eine Antwort erhalten: alle Absender, nur Absender innerhalb der Domänen Ihrer Organisation (interne Absender) oder ausschließlich externe Absender. Die internen Domänen werden Ihnen dabei direkt angezeigt. Details dazu finden Sie unter [Mein Profil](../edulution-plattform/uebersicht/benutzereinstellungen/index.md).

Sind Sie als Berechtigter für ein **freigegebenes Postfach** eingetragen, können Sie dort auch dessen **automatische Antwort** verwalten – siehe [Mein Profil → Automatische Antwort für freigegebene Postfächer](../edulution-plattform/uebersicht/benutzereinstellungen/e-mail.md#automatische-antwort-für-freigegebene-postfächer).

Die Sprache des über **In SOGo öffnen** erreichbaren Webmailers richtet sich nach der Sprache, die Sie unter [Mein Profil → Sprache](../edulution-plattform/uebersicht/benutzereinstellungen/benutzeroberflaeche.md#sprache) gewählt haben; dasselbe gilt für Benachrichtigungen, die das Mailsystem selbst verschickt. Das **Theme** des Webmailers legt dagegen die Administration fest.

<Audience roles="user">

Ob die E-Mail-App für Sie sichtbar ist, an welcher Stelle sie in der App-Liste erscheint und welches Theme der Webmailer verwendet, legt die Administration Ihrer Schule fest. Dasselbe gilt für den Zugriff auf **freigegebene Postfächer**: Fehlt Ihnen ein Postfach, für das Sie berechtigt sein sollten, kann nur die Administration das einrichten.

</Audience>

<Audience roles="admin">

## Einrichtung (für Administratoren)

Welche Nutzergruppen die E-Mail-App überhaupt sehen, an welcher Stelle sie in der App-Liste erscheint und welches Theme der SOGo-Webmailer verwendet, legen Administratoren unter [Einstellungen → E-Mails](../edulution-plattform/konfiguration/einstellungen.md#e-mails) fest.

Die Postfächer selbst — anlegen, Speicherplatz vergeben, löschen sowie ein Postfach als **freigegebenes Postfach** an weitere Benutzer freigeben — verwalten Administratoren unter [Mailboxen und geteilte Postfächer](./konfiguration/mailbox-verwaltung.md).

Einzelne Personen schlagen die Empfängerfelder ausschließlich aus den Adressbüchern der Kontakte-App vor. Ist die [Kontakte-App](../edulution-plattform/konfiguration/einstellungen.md#kontakte-carddav) nicht konfiguriert oder für eine Nutzergruppe nicht freigegeben, erhalten deren Mitglieder beim Verfassen keine Personenvorschläge — Verteiler, Alias-Adressen und freigegebene Postfächer stehen weiterhin zur Verfügung, und eine Fehlermeldung erscheint nicht. Welche Personen ein Benutzer findet, richtet sich damit nach seinen eigenen und den für ihn freigegebenen Adressbüchern sowie dem globalen Adressbuch des Mailservers.

Auf einer Mailcow-Installation stellt SOGo jedem Benutzer zusätzlich systemweite Adressbücher bereit: das globale Adressbuch der Mail-Domain und, je nach Konfiguration, das Adressbuch **Benutzer**. Beide enthalten die Postfächer **aller** Schulen der Instanz — über sie finden Benutzer beim Verfassen daher auch Personen anderer Schulen. Soll das nicht möglich sein, schalten Sie in der SOGo-Konfiguration für beide Benutzerquellen die Verwendung als Adressbuch ab (`isAddressBook`). Personenvorschläge stammen danach nur noch aus den eigenen und den freigegebenen Adressbüchern.

Postfach-Freigaben und die Übernahme der Profilsprache in den Webmailer laufen nicht über IMAP, sondern über die [DAV-Verbindung](../edulution-plattform/konfiguration/einstellungen.md#dav-verbindung) der E-Mail-App. Diese Verbindung gilt ausschließlich für die E-Mail-App: Die Kalender- und die Kontakte-App bringen jeweils eine eigene mit, und eine dort abgeschaltete Zertifikatsprüfung lockert die Prüfung der E-Mail-Verbindung nicht. Ist die DAV-URL fehlerhaft eingetragen, betrifft das nur diese Funktionen — Nachrichten lesen, verfassen, Ordner und Filter bleiben davon unberührt.

</Audience>
