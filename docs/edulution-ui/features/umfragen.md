# Umfragen

Die Umfragen-App basiert auf SurveyJS. Da SurveyJS sehr umfangreich ist, beschränken wir uns vorerst auf die Kernfunktionen, um dich nicht zu überfordern. Ergänzt wird die App um einige Sicherheitsmerkmale und nützliche Werkzeuge wie z. B. den [Backend-Limiter](#backend-limiters).

## Übersicht

### Bereiche

**Seitenleiste:**

- **Offene Umfragen** - Umfragen, an denen du noch teilnehmen könntest.
- **Schon beantwortet** - Umfragen, an denen du bereits teilgenommen hast.
- **Eigene Umfragen** - Umfragen, die du selbst erstellt hast.
- **Editor** - Editor zum Erstellen und Bearbeiten von Umfragen.

## Offene Umfragen

### Teilnahme

![Offene Umfragen - Teilnahme buttons](Screenshot_20260506_120801-1.png)

![Teilnahme an umfrage](Screenshot_20260506_121125.png)

#### Sichtbarkeit der Umfragen

Eine Umfrage kann beim [Speichern](#umfrage-speichern) als Öffentlich deklariert werden.

![Sichtbarkeit der Umfragen](Screenshot_20260506_121918.png)

#### Öffentliche Teilnahme {#oeffentliche-teilnahme}

![Umfrage Teilen Fenster](Screenshot_20260506_121229.png)

![Oeffentlicher login](Screenshot_20260506_121454.png)

Wenn die Antwort veränderbar ist oder eine erneute Teilnahme möglich ist, wird am Schluss eine öffentliche TeilnahmeId angelegt und ausgegeben, damit die Verknüpfung für kommende Änderungen funktioniert.
Ob eine frühere Antwort geändert werden kann oder der Nutzer mehrmals an der Umfrage teilnehmen darf, wird beim [Speichern der Umfrage](#umfrage-speichern) festgelegt.

![Oeffentlicher user login](Screenshot_20260506_122450.png)

## Schon beantwortet

![Beantwortete Umfragen](Screenshot_20260506_120916.png)

Hier kannst du das Ergebnis einer Umfrage einsehen.

#### Tabelle

![Ergebniseinsicht - Tabelle](Screenshot_20260506_112655.png)

#### Schaubild

![Ergebniseinsicht - Schaubild](Screenshot_20260506_120623.png)

## Eigene Umfragen

![Eigene Umfragen - floating buttons](Screenshot_20260506_121020.png)

Umfragen, die du selbst erstellt hast, kannst du im [Editor](#editor) anpassen oder auch wieder löschen.

## Editor {#editor}

### Erstellen

1. Klicke auf "Editor" in der Umfragen-App.
2. Wähle eine Vorlage oder erstelle eine "Neue Umfrage".
3. Füge Fragen hinzu und passe die Optionen der Fragen an deine Bedürfnisse an.
4. Klicke auf "Speichern".
5. Veröffentliche und teile die Umfrage.

### Vorlagen (Kachelansicht)

Wenn noch keine Umfrage zum Bearbeiten ausgewählt wurde, bekommst du als Landingpage die Kachelansicht der Umfrage-Vorlagen zu sehen.

Wir haben einige standardmäßige Vorlagen vordefiniert, an denen du dich orientieren kannst, zum Beispiel **Event-Planung** (Veranstaltungsorganisation).

#### User Ansicht

![Vorlagen - Kachel-Ansicht - User](Screenshot_20260506_113106.png)

Wenn du das Grid öffnest, kannst du eine der Vorlagen nutzen, um ein Grundgerüst zu haben, an dem du dich orientieren kannst.

#### Admin Ansicht

![Vorlagen - Kachel-Ansicht - User](Screenshot_20260506_113129.png)

Im Gegensatz zum Standard-Nutzer kann ein Admin die Vorlage aktivieren bzw. deaktivieren.

Der Admin kann auch Vorlagen bearbeiten. Dazu muss die Vorlage ausgewählt werden, und beim [Speichern der Umfrage](#umfrage-speichern) muss der Haken an der Checkbox "Als Vorlage speichern" gesetzt werden.

### Umfrage Bearbeiten

![Umfragen Editor](Screenshot_20260506_112841.png)

:::i Teste die Eingabe der Felder im Vorschau-Tab
Wenn du denkst, dass der Teilnehmer mehr Platz braucht, als das einzelne Feld hergibt, nutze stattdessen den Fragen-Typ **Kommentar**.
:::

### Umfrage Speichern {#umfrage-speichern}

#### User view

![Umfrage speichern - user view](Screenshot_20260506_143511.png)

- **Teilnehmer**: Hier können bestimmte Benutzer ausgewählt werden, die an der Umfrage teilnehmen sollen.
- **Gruppen**: Hier können ganze Benutzergruppen ausgewählt werden, deren Mitglieder an der Umfrage teilnehmen sollen.
- **Ablaufdatum**: Ab diesem Datum ist die Teilnahme an der Umfrage nicht mehr möglich.

- **Anonym**: Soll die Antwort der Teilnehmer anonymisiert werden? In diesem Fall ist keine Verknüpfung zwischen Antwort und Teilnehmer möglich.
- **Öffentlich**: Öffentliche Umfragen können mit und von allen geteilt werden, und die Teilnahme ist auch ohne Benutzerkonto möglich. Siehe [Öffentliche Teilnahme](#oeffentliche-teilnahme).
- **Mehrmals Antworten**: Dies ermöglicht demselben Nutzer die wiederholte Teilnahme an der Umfrage.
- **Editierbare Antworten**: Die vorherige Abgabe kann nachträglich verändert werden.

#### Admin view

![Umfrage speichern - admin view](Screenshot_20260506_143406.png)

Als Admin kannst du die Umfrage, die aktuell bearbeitet wird, auch als Vorlage speichern.

- **Name der Vorlage**: Unter diesem Namen wird die Vorlage in der Kachelansicht angezeigt.
- **Zugriffsgruppen**: Die Vorlage wird in der Kachelansicht nur den Benutzern angezeigt, die Mitglied in mindestens einer der ausgewählten Gruppen sind.

Auf diesem Weg kann der Admin auch Vorlagen bearbeiten. Dazu muss die entsprechende Vorlage ausgewählt werden. Beim [Speichern der Umfrage](#umfrage-speichern) muss der Admin dann den Haken an der Checkbox "Als Vorlage speichern" setzen.

## Spezielle Fragetypen

### Auswahlmöglichkeiten

:::t Fragen, bei denen gewählt werden muss
**Option** (RadioGroup), **Auswahl** (Checkbox), **Dropdown** (Aufklappmenü)
:::

Für diese Fragetypen haben wir die neue Funktionalität der Backend-Limiter erstellt.

#### Backend-Limiters {#backend-limiters}

![Open Fragen Menu](Screenshot_20260506_140821.png)

![Edit Backend-Limiters](Screenshot_20260506_140749.png)

Backend-Limiter werden serverseitig gespeichert.

Dabei wird den Auswahlmöglichkeiten ein Limit mitgegeben, **wie oft diese Option insgesamt auswählbar ist**.

Wenn eine Frage diese Limiter nutzt, wird eine Abfrage ans Backend geschickt, um die Limiter zu laden.

Wenn nun ein Nutzer an der Umfrage teilnehmen möchte und die Backend-Limiter für die Frage abgerufen werden, gibt das Backend nur diejenigen Auswahlmöglichkeiten zurück, die das Limit noch nicht erreicht haben.

:::i Beispiel
Eine Veranstaltung, bei der die Teilnehmerzahl limitiert ist.
Auf diese Weise ist es möglich, dass sich die Nutzer selbst einschreiben, bis das Limit erreicht ist (first-come-first-serve).
:::

:::w Was wenn das Backend nicht erreichbar ist?
Wenn sich die Backend-Limiter nicht laden lassen, werden die vordefinierten Auswahlmöglichkeiten geladen.

![backend limiters - backend not reachable](Screenshot_20260506_140251.png)

:::

### Bilder Typen

:::t Bilder Fragen
**Bild** (Image), **Bildauswahl** (ImagePicker)
:::

Bilder, die hochgeladen werden, werden serverseitig in das WebP-Format (.webp) konvertiert und komprimiert.

:::w Maximale Dateigröße
Um das Backend nicht zu stark zu belasten, werden keine Dateien größer als **50 MB** akzeptiert.
:::

## Export to PDF

:::w Darstellungsfehler

Es gibt einige Fragetypen, bei denen das PDF-Rendering nicht oder nur eingeschränkt funktioniert.
Zum Beispiel werden die Bilder der **Bildauswahl** nicht angezeigt.

:::

### Weiterführende Links

- [SurveyJS](https://surveyjs.io/)
