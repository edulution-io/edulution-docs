# Umfragen

Die Umfragen-App basiert auf SurveyJS. Da SurveyJS sehr umfangreich ist, beschränken wir uns vorerst auf die Kernfunktionen, um Sie nicht zu überfordern. Ergänzt wird die App um einige Sicherheitsmerkmale und nützliche Werkzeuge wie z. B. den [Backend-Limiter](#backend-limiter).

## Übersicht

### Bereiche

**Seitenleiste:**

- **Offene Umfragen** - Umfragen, an denen Sie noch teilnehmen könnten.
- **Schon beantwortet** - Umfragen, an denen Sie bereits teilgenommen haben.
- **Eigene Umfragen** - Umfragen, die Sie selbst erstellt haben.
- **Editor** - Editor zum Erstellen und Bearbeiten von Umfragen.

## Offene Umfragen

In diesem Bereich sehen Sie alle Umfragen, an denen Sie teilnehmen können, aber noch nicht teilgenommen haben.

### Teilnahme

![Offene Umfragen - Teilnahme-Buttons](/img/umfragen/Screenshot_20260506_120801.png)

![Teilnahme an Umfrage](/img/umfragen/Screenshot_20260506_121125.png)

#### Öffentliche Teilnahme

Klicken Sie in der Aktionen-Leiste auf das Teilen-Symbol, um das Teilen-Fenster zu öffnen.

![Umfrage-Teilen-Fenster](/img/umfragen/Screenshot_20260506_121229.png)

![Öffentlicher Login](/img/umfragen/Screenshot_20260506_121454.png)

Wenn die Antwort veränderbar oder eine erneute Teilnahme möglich ist, wird am Schluss eine öffentliche Teilnahme-ID angelegt und ausgegeben, damit die Verknüpfung für kommende Änderungen funktioniert. Ob eine frühere Antwort geändert werden kann oder ob der Teilnehmer mehrmals an der Umfrage teilnehmen darf, wird beim [Speichern der Umfrage](#umfrage-speichern) festgelegt.

![Öffentlicher Benutzer-Login](/img/umfragen/Screenshot_20260506_122450.png)

## Schon beantwortet

![Beantwortete Umfragen](/img/umfragen/Screenshot_20260506_120916.png)

Hier können Sie das Ergebnis einer Umfrage einsehen.

### Tabelle

![Ergebniseinsicht - Tabelle](/img/umfragen/Screenshot_20260506_112655.png)

### Schaubild

![Ergebniseinsicht - Schaubild](/img/umfragen/Screenshot_20260506_120623.png)

## Eigene Umfragen

![Eigene Umfragen - Aktionen-Leiste](/img/umfragen/Screenshot_20260506_121020.png)

Umfragen, die Sie selbst erstellt haben, können Sie im [Editor](#editor) anpassen oder wieder löschen.

- **Erstellen** - Wechselt zum [Editor](#editor) (öffnet die Kachelansicht der Vorlagen).
- **Fortfahren** - Wechselt zum [Editor](#editor) (öffnet die zuletzt bearbeitete Umfrage).
- **Bearbeiten** - Wechselt zum [Editor](#editor) (öffnet die ausgewählte Umfrage).
- **Löschen** - Öffnet einen Bestätigungsdialog, ob Sie die ausgewählten Umfragen wirklich löschen möchten.
- **Antworten** - Öffnet einen Dialog, in dem die zuvor abgegebene Antwort angezeigt wird.
- **Tabelle** - Öffnet einen Dialog, in dem alle abgegebenen Antworten in einer [Tabellen-Ansicht](#tabelle) dargestellt werden.
- **Schaubild** - Öffnet einen Dialog, in dem alle abgegebenen Antworten als [Schaubild](#schaubild) dargestellt werden.
- **Teilnehmen** - Öffnet das [Teilnahme-Fenster](#teilnahme).

Je nachdem, ob Sie Umfragen erstellen dürfen und welche Umfrage ausgewählt ist, werden die Buttons angezeigt oder ausgeblendet.

## Erstellen

1. Klicken Sie auf **Editor** in der Umfragen-App.
2. Wählen Sie eine Vorlage oder erstellen Sie eine **Neue Umfrage**.
3. Fügen Sie Fragen hinzu und passen Sie deren Optionen an Ihre Bedürfnisse an.
4. Klicken Sie auf **Speichern** und legen Sie Teilnehmer, Sichtbarkeit und Ablaufdatum fest (siehe [Umfrage speichern](#umfrage-speichern)).
5. Veröffentlichen und teilen Sie die Umfrage.

## Editor

### Vorlagen (Kachelansicht)

Wenn noch keine Umfrage zum Bearbeiten ausgewählt wurde, bekommen Sie als Landingpage die Kachelansicht der Umfrage-Vorlagen angezeigt.

Wir haben einige standardmäßige Vorlagen vordefiniert, an denen Sie sich orientieren können, zum Beispiel **TeilnahmeVeranstaltungLimitiert** (Veranstaltungsorganisation).

#### Benutzer-Ansicht

![Vorlagen - Kachel-Ansicht - Benutzer](/img/umfragen/Screenshot_20260506_113106.png)

Wenn Sie die Kachelansicht öffnen, können Sie eine der Vorlagen nutzen, um ein Grundgerüst zu haben, an dem Sie sich orientieren können.

#### Administrator-Ansicht

![Vorlagen - Kachel-Ansicht - Administrator](/img/umfragen/Screenshot_20260506_113129.png)

Im Gegensatz zum Standard-Benutzer kann ein Administrator die Vorlage aktivieren bzw. deaktivieren.

Administratoren können Vorlagen auch bearbeiten. Dazu muss die Vorlage ausgewählt werden, und beim [Speichern der Umfrage](#umfrage-speichern) muss der Haken an der Checkbox "Als Vorlage speichern" gesetzt werden.

### Umfrage bearbeiten

![Umfragen-Editor](/img/umfragen/Screenshot_20260506_112841.png)

## Fragetypen und ihre Optionen

### Benutzereingabe

:::tip[Fragen zur direkten Benutzereingabe]
**Eingabefeld**; **Kommentar**; **Wahrheitswert**
:::

#### Eingabefelder

Fragen, bei denen nur eine sehr kurze/knappe Antwort erwartet wird.

:::tip[Für das Eingabefeld gibt es folgende Unterkategorien:]
  **Farbe**; **Datum**; **Datum und Uhrzeit**; **E-Mail**; **Monat**; **Zahl**; **Passwort**; **Bereich**; **Telefonnummer**; **Text**; **Zeit**; **Web-URL**; **Woche**
:::

![Eingabefeld > Textfeld](/img/umfragen/Screenshot_20260507_151914.png)

:::info[Testen Sie die Eingabe der Felder im Vorschau-Tab]
Wenn Sie denken, dass der Teilnehmer mehr Platz braucht, als das einzelne Feld hergibt, sollten Sie stattdessen den Fragen-Typ **Kommentar** nutzen.
:::

##### Eingabemasken

| Typ | Eingabemaske |
|-------------------|:---------------------------------:|
| **Farbe** | ![Eingabefeld > Farbe](/img/umfragen/Screenshot_20260507_151707_cropped.png) |
| **Datum** | ![Eingabefeld > Datum](/img/umfragen/Screenshot_20260507_151714_cropped.png) |
| **Datum und Uhrzeit** | ![Eingabefeld > Datum und Uhrzeit](/img/umfragen/Screenshot_20260507_151739_cropped.png) |
| **E-Mail** | ![Eingabefeld > E-Mail](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Monat** | ![Eingabefeld > Monat](/img/umfragen/Screenshot_20260507_151820_cropped.png) |
| **Zahl** | ![Eingabefeld > Zahl](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Passwort** | ![Eingabefeld > Passwort](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Bereich** | ![Eingabefeld > Bereich](/img/umfragen/Screenshot_20260507_151849_cropped.png) |
| **Telefonnummer** | ![Eingabefeld > Telefonnummer](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Text** | ![Eingabefeld > Text](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Zeit** | ![Eingabefeld > Zeit](/img/umfragen/Screenshot_20260507_151922_cropped.png) |
| **Web-URL** | ![Eingabefeld > Web-URL](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Woche** | ![Eingabefeld > Woche](/img/umfragen/Screenshot_20260507_151943_cropped.png) |

#### Kommentar

![Kommentar](/img/umfragen/Screenshot_20260507_152435.png)

#### Text (mehrzeilig)

![Text mehrzeilig](/img/umfragen/Screenshot_20260507_152456.png)

### Auswahlmöglichkeiten

:::tip[Fragen, bei denen gewählt werden muss]
**Option** (RadioGroup); **Auswahl** (Checkbox); **Dropdown** (Aufklappmenü)
:::

Für diese Fragetypen haben wir die neue Funktionalität der Backend-Limiter erstellt.

**Dropdown** (Aufklappmenü):

![Dropdown](/img/umfragen/Screenshot_20260507_151316.png)

- **Label**: Durch Klicken auf das Label wird dieses ausgewählt und kann angepasst werden.
- **Blaues Plus**: Fügt eine Option hinzu.
- **Rotes Minus**: Entfernt die Option.
- **Nichts trifft zu**: Erlaubt dem Teilnehmer anzugeben, dass keine der Optionen zutrifft.
- **Sonstiges (bitte angeben)**: Erlaubt dem Teilnehmer, eigene Optionen hinzuzufügen.

Analog dazu funktionieren **Option** und **Auswahl** — bei **Auswahl** können jedoch mehrere Optionen gleichzeitig gewählt werden.

| Option | Auswahl |
|:---------------------------------:|:---------------------------------:|
| ![Option](/img/umfragen/Screenshot_20260507_150908_croped_2.png) | ![Auswahl](/img/umfragen/Screenshot_20260507_150957_croped_2.png) |

#### Backend-Limiter

![Fragen - geöffnetes Kontextmenü](/img/umfragen/Screenshot_20260506_140821.png)

![Backend-Limiter bearbeiten](/img/umfragen/Screenshot_20260506_140749.png)

Backend-Limiter werden serverseitig gespeichert. Den Auswahlmöglichkeiten wird dabei ein Limit mitgegeben, **wie oft diese Option insgesamt auswählbar ist**.

Wenn eine Frage diese Limiter nutzt, wird beim Aufruf der Umfrage eine Abfrage an das Backend geschickt, um die aktuellen Limit-Stände zu laden. Das Backend liefert dann nur diejenigen Auswahlmöglichkeiten zurück, die das Limit noch nicht erreicht haben.

:::info[Beispiel]
Eine Veranstaltung, bei der die Teilnehmerzahl limitiert ist. Auf diese Weise können sich Teilnehmer selbst einschreiben, bis das Limit erreicht ist (first-come, first-served).
:::

:::warning[Was, wenn das Backend nicht erreichbar ist?]
Wenn sich die Backend-Limiter nicht laden lassen, fällt SurveyJS auf die im Editor definierten Auswahlmöglichkeiten zurück.

![Backend-Limiter - Backend ist nicht erreichbar](/img/umfragen/Screenshot_20260506_140251.png)
:::

![Backend-Limiter - Sonstiges](/img/umfragen/Screenshot_20260507_122812.png)

Wie bei den Auswahlmöglichkeiten ohne Backend-Limiter ist es auch hier möglich, dem Teilnehmer eigene Optionen hinzufügen zu lassen. Aktivieren Sie dazu im Kontextmenü des Editors die Checkbox **"Erlaube Teilnehmern eigene Optionen hinzuzufügen"**. In der Teilnahme-Ansicht rendert SurveyJS diese Option dann als **"Sonstiges (Bitte angeben)"**. Das Limit, wie oft die Option ausgewählt werden kann, ist standardmäßig auf 1 gesetzt.

:::info[Beispiel]
Für einen geselligen Abend wird jeder Teilnehmer gebeten, etwas mitzubringen und dies in der Umfrage einzutragen. Bei zehn Teilnehmern macht es vielleicht Sinn, jede Option zweimal zu erlauben — so könnte die Option "Kartoffelsalat" maximal zweimal gewählt werden, und es ist sichergestellt, dass nicht jeder Kartoffelsalat mitbringt. Falls einem Teilnehmer die verbleibenden Optionen nicht zusagen, kann er eigene Vorschläge ergänzen.
:::

:::warning[Problem]
Es lässt sich nicht ausschließen, dass ein Teilnehmer aus Spaß "Erdäpfelsalat" hinzufügt — ein synonymer Begriff für "Kartoffelsalat", der das Limit umgeht.
:::

### Meinung/Gewichtung

:::tip[Gewichtungsfragen]
**Bewertung**; **Reihenfolge**
:::

#### Bewertung

:::tip[Für die Bewertung gibt es folgende Unterkategorien:]
  **Beschriftung**; **Sterne**; **Smileys**
:::

![Bewertung > Beschriftung](/img/umfragen/Screenshot_20260507_151417.png)
![Bewertung > Sterne](/img/umfragen/Screenshot_20260507_151439.png)
![Bewertung > Smileys](/img/umfragen/Screenshot_20260507_151449.png)

#### Reihenfolge

![Reihenfolge](/img/umfragen/Screenshot_20260507_151606.png)

Vom Teilnehmer wird erwartet, dass er die Objekte anordnet. Ob nach Zeit, Vorlieben oder einem anderen Kriterium sortiert werden soll, muss aus der Fragestellung hervorgehen.

### Upload

:::tip[Fragen, bei denen Dateien oder Bilder hochgeladen werden]
**Datei** (File); **Bild** (Image); **Bildauswahl** (ImagePicker)
:::

:::warning[Maximale Dateigröße]
Um das Backend nicht zu stark zu belasten, werden keine Dateien größer als **50 MB** akzeptiert.
:::

**Datei**

![Datei](/img/umfragen/Screenshot_20260507_151539.png)

Es wird erwartet, dass der Teilnehmer eine Datei anheftet.

#### Bild-Typen

:::info[Speichern von Bildern im Backend]
Die Bilder werden serverseitig gespeichert.
Damit das Backend nicht zu sehr belastet wird, werden Bilder der Formate JPEG, PNG, WebP und GIF bereits im Browser in das WebP-Format (.webp) konvertiert und komprimiert, bevor sie ans Backend gesendet werden. Andere Formate werden unverändert hochgeladen.
:::

**Bild**

![Bild](/img/umfragen/Screenshot_20260507_152731.png)

Es wird erwartet, dass der Teilnehmer ein Bild anheftet.

**Bildauswahl**

![Bildauswahl](/img/umfragen/Screenshot_20260507_151551.png)

Die Bilder werden vom Ersteller der Umfrage angeheftet.

### Tabellen

:::tip[Tabellarisch angeordnete Fragen]
**Matrix (einfache Auswahl)**; **Matrix (mehrfache Auswahl)**
:::

![Matrix Kontextmenü](/img/umfragen/Screenshot_20260511_114648.png)

Die Größe der Tabelle kann im Kontextmenü festgelegt werden. Alternativ können Sie im Label der letzten Spalte **Enter** drücken, um eine neue Spalte hinzuzufügen. Analog wird beim Drücken von **Enter** im Label der letzten Reihe eine neue Reihe erzeugt.

#### Matrix (einfache Auswahl)

![Matrix einfache Auswahl](/img/umfragen/Screenshot_20260507_152701.png)

#### Matrix (mehrfache Auswahl)

![Matrix mehrfache Auswahl](/img/umfragen/Screenshot_20260507_152713.png)

### Strukturierend

:::tip[Erlaubt das Verschachteln von Fragen]
**Panel**; **Panel (dynamisch)**
:::

#### Panel

![Panel](/img/umfragen/Screenshot_20260507_152508.png)

Das Panel entspricht einer geschachtelten Frage. Der Ersteller muss die Elemente auswählen, die innerhalb des Panels angezeigt werden sollen.

#### Panel (dynamisch)

![Panel dynamisch](/img/umfragen/Screenshot_20260507_152635.png)

Ein dynamisches Panel entspricht nicht mehr nur einer einfach geschachtelten Frage, sondern einem erweiterbaren/ausklappbaren Feld. Die im Panel enthaltenen Elemente bilden hier eine Vorlage.

![Panel dynamisch Kontextmenü](/img/umfragen/Screenshot_20260511_113205.png)

Im Kontextmenü der Frage kann der Ersteller der Umfrage festlegen, wie oft das Panel minimal bzw. maximal aufgeklappt werden darf.

:::tip[Dynamisch verschachtelte Fragen]
Wird genutzt, um Fragen zu erstellen, bei denen der Teilnehmer mehrere Antworten geben können soll.
:::

##### Teilnahme

![Panel dynamisch - leer](/img/umfragen/Screenshot_20260507_152817.png)
![Panel dynamisch - hinzufügen](/img/umfragen/Screenshot_20260507_152839.png)

Das dynamische Panel erlaubt es den Teilnehmern, selbst zu entscheiden, wie oft der Inhalt angezeigt werden soll, indem sie weitere Panel-Vorlagen hinzufügen oder bereits bestehende entfernen.

:::info[Beispiel]
Der Teilnehmer soll eigene Vorschläge machen. Dann nutzt der Ersteller der Umfrage das dynamische Panel und fügt sowohl ein Textfeld als auch ein Kommentarfeld zur Panel-Vorlage hinzu. So kann der Teilnehmer für jeden Vorschlag eine weitere Panel-Instanz aufklappen und die enthaltenen Felder ausfüllen.
:::

### Sonstiges

#### Unterschrift

![Unterschrift](/img/umfragen/Screenshot_20260507_152744.png)

Das Unterschrift-Feld kann zur Authentifizierung der Teilnahme genutzt werden.

## Umfrage speichern

:::info[Der Vorschau-Reiter]
In der Vorschau können Sie die Umfrage einmal durchklicken und prüfen, ob alles passt.
:::

### Sichtbarkeit der Umfragen

Eine Umfrage kann beim Speichern als öffentlich deklariert werden.

![Sichtbarkeit der Umfragen](/img/umfragen/Screenshot_20260506_121918.png)

### Benutzer-Ansicht

![Umfrage speichern - Benutzer-Ansicht](/img/umfragen/Screenshot_20260506_143511.png)

- **Teilnehmer**: Hier können bestimmte Benutzer ausgewählt werden, die an der Umfrage teilnehmen sollen.
- **Gruppen**: Hier können ganze Benutzergruppen ausgewählt werden, deren Mitglieder an der Umfrage teilnehmen sollen.
- **Ablaufdatum**: Ab diesem Datum ist die Teilnahme an der Umfrage nicht mehr möglich.
- **Soll die Umfrage anonym sein?**: Anonymisiert die Antworten der Teilnehmer. In diesem Fall ist keine Verknüpfung zwischen Antwort und Teilnehmer möglich.
- **Soll die Umfrage öffentlich sein?**: Öffentliche Umfragen können von allen geteilt werden, und die Teilnahme ist auch ohne Benutzerkonto möglich. Siehe [Öffentliche Teilnahme](#öffentliche-teilnahme).
- **Soll ein Teilnehmer die Umfrage mehrmals beantworten können?**: Ermöglicht demselben Benutzer die wiederholte Teilnahme an der Umfrage.
- **Sollen Antworten nachträglich bearbeitbar sein?**: Die vorherige Abgabe kann nachträglich verändert werden.

### Administrator-Ansicht

![Umfrage speichern - Administrator-Ansicht](/img/umfragen/Screenshot_20260506_143406.png)

Als Administrator können Sie die aktuell bearbeitete Umfrage auch als Vorlage speichern.

- **Name der Vorlage**: Unter diesem Namen wird die Vorlage in der Kachelansicht angezeigt.
- **Zugriffsgruppen**: Die Vorlage wird in der Kachelansicht nur den Benutzern angezeigt, die Mitglied in mindestens einer der ausgewählten Gruppen sind.

Auf diesem Weg können Administratoren auch bestehende Vorlagen bearbeiten. Dazu muss die entsprechende Vorlage ausgewählt werden. Beim [Speichern der Umfrage](#umfrage-speichern) muss dann der Haken an der Checkbox "Als Vorlage speichern" gesetzt werden.

## Als PDF exportieren

Klicken Sie in der Aktionen-Leiste auf den Button **Als PDF exportieren**, um die Umfrage als PDF zu speichern.

:::warning[Darstellungsfehler]
Es gibt einige Fragetypen, bei denen das PDF-Rendering nicht oder nur eingeschränkt funktioniert. Zum Beispiel werden die Bilder der **Bildauswahl** nicht angezeigt.
:::

## Siehe auch

- [Dashboard](dashboard.md) - Offene Umfragen auf der Startseite
- [App-Store](app-store.md) - Umfragen-App aktivieren
- [SurveyJS](https://surveyjs.io/) - Die zugrundeliegende Bibliothek
