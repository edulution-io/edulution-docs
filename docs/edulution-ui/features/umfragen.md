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

![Offene Umfragen - Teilnahme buttons](/img/umfragen/Screenshot_20260506_120801-1.png)

![Teilnahme an umfrage](/img/umfragen/Screenshot_20260506_121125.png)

#### Sichtbarkeit der Umfragen

Eine Umfrage kann beim [Speichern](#umfrage-speichern) als Öffentlich deklariert werden.

![Sichtbarkeit der Umfragen](/img/umfragen/Screenshot_20260506_121918.png)

#### Öffentliche Teilnahme {#oeffentliche-teilnahme}

![Umfrage Teilen Fenster](/img/umfragen/Screenshot_20260506_121229.png)

![Öffentlicher login](/img/umfragen/Screenshot_20260506_121454.png)

Wenn die Antwort veränderbar ist oder eine erneute Teilnahme möglich ist, wird am Schluss eine öffentliche TeilnahmeId angelegt und ausgegeben, damit die Verknüpfung für kommende Änderungen funktioniert.
Ob eine frühere Antwort geändert werden kann oder der Nutzer mehrmals an der Umfrage teilnehmen darf, wird beim [Speichern der Umfrage](#umfrage-speichern) festgelegt.

![Öffentlicher user login](/img/umfragen/Screenshot_20260506_122450.png)

## Schon beantwortet

![Beantwortete Umfragen](/img/umfragen/Screenshot_20260506_120916.png)

Hier kannst du das Ergebnis einer Umfrage einsehen.

#### Tabelle

![Ergebniseinsicht - Tabelle](/img/umfragen/Screenshot_20260506_112655.png)

#### Schaubild

![Ergebniseinsicht - Schaubild](/img/umfragen/Screenshot_20260506_120623.png)

## Eigene Umfragen

![Eigene Umfragen - floating buttons](/img/umfragen/Screenshot_20260506_121020.png)

Umfragen, die du selbst erstellt hast, kannst du im [Editor](#editor) anpassen oder auch wieder löschen.

## Erstellen

1. Klicke auf "Editor" in der Umfragen-App.
2. Wähle eine Vorlage oder erstelle eine "Neue Umfrage".
3. Füge Fragen hinzu und passe die Optionen der Fragen an deine Bedürfnisse an.
4. Klicke auf "Speichern".
5. Veröffentliche und teile die Umfrage.

## Editor {#editor}

### Vorlagen (Kachelansicht)

Wenn noch keine Umfrage zum Bearbeiten ausgewählt wurde, bekommst du als Landingpage die Kachelansicht der Umfrage-Vorlagen zu sehen.

Wir haben einige standardmäßige Vorlagen vordefiniert, an denen du dich orientieren kannst, zum Beispiel **Event-Planung** (Veranstaltungsorganisation).

#### User Ansicht

![Vorlagen - Kachel-Ansicht - User](/img/umfragen/Screenshot_20260506_113106.png)

Wenn du das Grid öffnest, kannst du eine der Vorlagen nutzen, um ein Grundgerüst zu haben, an dem du dich orientieren kannst.

#### Admin Ansicht

![Vorlagen - Kachel-Ansicht - User](/img/umfragen/Screenshot_20260506_113129.png)

Im Gegensatz zum Standard-Nutzer kann ein Admin die Vorlage aktivieren bzw. deaktivieren.

Der Admin kann auch Vorlagen bearbeiten. Dazu muss die Vorlage ausgewählt werden, und beim [Speichern der Umfrage](#umfrage-speichern) muss der Haken an der Checkbox "Als Vorlage speichern" gesetzt werden.

### Umfrage Bearbeiten

![Umfragen Editor](/img/umfragen/Screenshot_20260506_112841.png)

## Fragetypen und ihre Optionen

### Benutzereingabe

:::t Fragen bei denen es um Bilder geht
**Eingabefeld**; **Kommentar**; **Wahrheitswert**
:::

#### Eingabefelder

Fragen bei denen nur eine sehr kurze/knappe Antwort erwartet wird

:::t Für das Eingabefeld gibt es folgende Unterkategorien:
  **Farbe**; **Datum**; **Datum und Uhrzeit**; **E-Mail**; **Monat**; **Zahl**; **Passwort**; **Bereich**; **Telefonnummer**; **Text**; **Zeit**; **Web-URL**; **Woche**
:::

![alt text](/img/umfragen/Screenshot_20260507_151914.png)

:::i Teste die Eingabe der Felder im Vorschau-Tab
Wenn du denkst, dass der Teilnehmer mehr Platz braucht, als das einzelne Feld hergibt, nutze stattdessen den Fragen-Typ **Kommentar**.
:::

##### Eingabe Masken

| Typ | Eingabe Maske |
|-------------------|:---------------------------------:|
| **Farbe** | ![Eingabefeld > Farbe](/img/umfragen/Screenshot_20260507_151707_cropped.png) |
| **Datum** | ![Eingabefeld > Datum](/img/umfragen/Screenshot_20260507_151714_cropped.png) |
| **Datum und Uhrzeit** | ![alt text](/img/umfragen/Screenshot_20260507_151739_cropped.png) |
| **E-Mail** | ![alt text](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Monat** | ![alt text](/img/umfragen/Screenshot_20260507_151820_cropped.png) |
| **Zahl** | ![alt text](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Passwort** | ![alt text](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Bereich** | ![alt text](/img/umfragen/Screenshot_20260507_151849_cropped.png) |
| **Telefonnummer** | ![alt text](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Text** | ![alt text](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Zeit** | ![alt text](/img/umfragen/Screenshot_20260507_151922_cropped.png) |
| **Web-URL** | ![alt text](/img/umfragen/Screenshot_20260507_151753_cropped.png) |
| **Woche** | ![alt text](/img/umfragen/Screenshot_20260507_151943_cropped.png) |

#### Kommentar

![alt text](/img/umfragen/Screenshot_20260507_152435.png)

#### Text (mehrzeilig)

![alt text](/img/umfragen/Screenshot_20260507_152456.png)

### Auswahlmöglichkeiten

:::t Fragen, bei denen gewählt werden muss
**Option** (RadioGroup); **Auswahl** (Checkbox); **Dropdown** (Aufklappmenü)
:::

Für diese Fragetypen haben wir die neue Funktionalität der Backend-Limiter erstellt.

**Dropdown** (Aufklappmenü):

![Dropdown](/img/umfragen/Screenshot_20260507_151316.png)

- **Label**: Durch ein klicken auf das Label wird dieses ausgewählt und kann angepasst werden.
- **Blaues Plus**: Um die Option hinzuzufügen.
- **Rotes Minus**: Um die Option zu streichen.
- **Nichts trifft zu**: Damit der Teilnehmer sagen kann wenn nichts zutrifft.
- **Sonstiges (bitte Angeben)**: Damit der Teilnehmer eigene von ihm definierte Optionen hinzufügen kann

Similar **Option** und **Auswahl**
(nur dass hier auch mehr als eine Option ausgewählt werden können)

| Option | Auswahl |
|:---------------------------------:|:---------------------------------:|
| ![Option](/img/umfragen/Screenshot_20260507_150908_croped_2.png) | ![Auswahl](/img/umfragen/Screenshot_20260507_150957_croped_2.png) |

#### Backend-Limiters {#backend-limiters}

![Open Fragen Menu](/img/umfragen/Screenshot_20260506_140821.png)

![Edit Backend-Limiters](/img/umfragen/Screenshot_20260506_140749.png)

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

![backend limiters - backend not reachable](/img/umfragen/Screenshot_20260506_140251.png)

:::

![Backend-Limiter - Sonstiges](/img/umfragen/Screenshot_20260507_122812.png)

Wie bei den Auswahlmöglichkeiten ohne Backend Limiter ist es hier auch möglich dem Nutzer die Option "Sonstiges" anzubieten. Damit wird dem Nutzer erlaubt eigene Optionen hinzuzufügen. Das Limit ist hierbei Standartmäsig auf '1' gesetzt.

:::i Beispiel
Für einen vergnüglichen Abend wird jeder gebeten etwas mitzubringen und dies in der Umfrage einzutragen. Dann macht es bei einer Menge von 10 Leuten vielleicht Sinn alles zweimal zu erlauben. So könnte die Option "Kartoffelsalat" maximal zweimal ausgewählt werden und es wird sichergestellt, dass jeder einen Kartoffelsalat mitbringt. Und wenn nun ein Teilnehmer denkt dass die guten Optionen schon vergriffen sind, dann kann er eigene Vorschläge machen.
:::

:::w Problem

Wir können nicht ausschließen, dass sich ein Nutzer einen Spaß daraus macht den "Erdäpfelsalat" hinzuzufügen, was auch nur ein weniger geläufiges Wort für "Kartoffelsalat" ist.

:::

### Meinung/Gewichtung 

:::t Gewichtungs Fragen
**Bewertung**; **Reihenfolge**
:::

#### Bewertung

:::t Für die Bewertung gibt es folgende Unterkategorien:
  **Beschriftung**; **Sterne**; **Smileys**
:::

![Bewertung > Beschriftung](/img/umfragen/Screenshot_20260507_151417.png)
![Bewertung > Sterne](/img/umfragen/Screenshot_20260507_151439.png)
![Bewertung > Smileys](/img/umfragen/Screenshot_20260507_151449.png)

#### Reihenfolge

![Reihenfolge](/img/umfragen/Screenshot_20260507_151606.png)

Vom Teilnehmer wird erwartet, dass er die Objekte anordnet. Ob nach Zeit, Vorlieben oder einem anderen Kriterium muss aus der Fragestellung hervor gehen.

### Upload

:::t Fragen bei denen es um Bilder geht
**Datei** (File); **Bild** (Image); **Bildauswahl** (ImagePicker)
:::

:::w Maximale Dateigröße
Um das Backend nicht zu stark zu belasten, werden keine Dateien größer als **50 MB** akzeptiert.
:::

**Datei**

![alt text](/img/umfragen/Screenshot_20260507_151539.png)

Es wird erwartet, dass der Teilnehmer eine Datei anhäftet

#### Bilder Typen

:::i Speichern von Bildern im Backend
Bilder, die hochgeladen werden, werden serverseitig in das WebP-Format (.webp) konvertiert und komprimiert.
:::

**Bild**

![Bild](/img/umfragen/Screenshot_20260507_152731.png)

Es wird erwartet, dass der Teilnehmer ein Bild anhäftet

**Bildauswahl**

![Bildauswahl](/img/umfragen/Screenshot_20260507_151551.png)

Die Bilder werden vom Ersteller der Umfrage angehäftet.

### Tabellen

:::t Erlaubt das Verschachteln von Fragen
**Matrix (einfache Auswahl)**; **Matrix (mehrfache Auswahl)**
:::

![alt text](/img/umfragen/Screenshot_20260511_114648.png)

Die Größe der Tabelle kann im Kontext-menu festgelegt werden. Alternativ, wenn du im Label der letzten Spalte Enter- drückst wird eine neue Spalte hinzugefügt. Similar für die Reihe, wenn im Label der letzten Reihe Enter- gedrückt wird.

#### Matrix (einfache Auswahl)

![alt text](/img/umfragen/Screenshot_20260507_152701.png)

#### Matrix (mehrfache Auswahl)

![alt text](/img/umfragen/Screenshot_20260507_152713.png)

### Strukturierend

:::t Erlaubt das Verschachteln von Fragen
**Panel**; **Panel (dynamisch)**
:::

#### Panel

![alt text](/img/umfragen/Screenshot_20260507_152508.png)

Das Panel entspricht einer geschachtelten Frage. Der Ersteller muss die Elemente auswählen, die innerhalb des Panels angezeigt werden sollen.

#### Panel (dynamisch)

![alt text](/img/umfragen/Screenshot_20260507_152635.png)

Ein dynamischen Panel entspricht nicht mehr nur einer einfachen geschachtelten Frage sondern einem Erweiterbaren/Ausklappbaren Feld.
Die in dem Panel enthaltenen Elemente entsprechen hier einer Vorlage.

![alt text](/img/umfragen/Screenshot_20260511_113205.png)

In dem Kontextmenu der Frage kann der Ersteller der Umfrage festlegen, wie oft das Panel minimal/maximal ausgeklappt werden darf. 

:::t Dynamisch verschachtelte Fragen
Wird genutzt um Fragen zu erstellen, bei denen der Teilnehmer mehrere antworten geben können soll.
:::

##### Teilnahme

![alt text](/img/umfragen/Screenshot_20260507_152817.png)
![alt text](/img/umfragen/Screenshot_20260507_152839.png)

Das Dynamische Panel erlaubt es den Teilnehmern selbst zu entscheiden wie oft der Inhalt angezeigt werden soll, indem er weitere Panel-Vorlagen hinzufügt oder bereits bestehende entfernt.

:::i Beispiel
Der Teilnehmer soll eigene Vorschläge machen. Dann nutzt der Ersteller der Umfrage das Dynamische Panel und fügt sowohl ein Text feld als auch ein Kommentarfeld der Panel-Vorlagen hinzu. Dann kann der Teilnehmer für jeden Vorschlag eine Weitere Panel-Vorlage aufklappen, um die entsprechend enthaltenen Felder auszufüllen. 
:::

### Umfrage Speichern {#umfrage-speichern}

:::i Der Vorschau Reiter
In der Vorschau kannst du die Umfrage einmal durchklicken und schauen ob alles passt.
:::

#### User view

![Umfrage speichern - user view](/img/umfragen/Screenshot_20260506_143511.png)

- **Teilnehmer**: Hier können bestimmte Benutzer ausgewählt werden, die an der Umfrage teilnehmen sollen.
- **Gruppen**: Hier können ganze Benutzergruppen ausgewählt werden, deren Mitglieder an der Umfrage teilnehmen sollen.
- **Ablaufdatum**: Ab diesem Datum ist die Teilnahme an der Umfrage nicht mehr möglich.

- **Anonym**: Soll die Antwort der Teilnehmer anonymisiert werden? In diesem Fall ist keine Verknüpfung zwischen Antwort und Teilnehmer möglich.
- **Öffentlich**: Öffentliche Umfragen können mit und von allen geteilt werden, und die Teilnahme ist auch ohne Benutzerkonto möglich. Siehe [Öffentliche Teilnahme](#oeffentliche-teilnahme).
- **Mehrmals Antworten**: Dies ermöglicht demselben Nutzer die wiederholte Teilnahme an der Umfrage.
- **Editierbare Antworten**: Die vorherige Abgabe kann nachträglich verändert werden.

#### Admin view

![Umfrage speichern - admin view](/img/umfragen/Screenshot_20260506_143406.png)

Als Admin kannst du die Umfrage, die aktuell bearbeitet wird, auch als Vorlage speichern.

- **Name der Vorlage**: Unter diesem Namen wird die Vorlage in der Kachelansicht angezeigt.
- **Zugriffsgruppen**: Die Vorlage wird in der Kachelansicht nur den Benutzern angezeigt, die Mitglied in mindestens einer der ausgewählten Gruppen sind.

Auf diesem Weg kann der Admin auch Vorlagen bearbeiten. Dazu muss die entsprechende Vorlage ausgewählt werden. Beim [Speichern der Umfrage](#umfrage-speichern) muss der Admin dann den Haken an der Checkbox "Als Vorlage speichern" setzen.

## Export to PDF

:::w Darstellungsfehler

Es gibt einige Fragetypen, bei denen das PDF-Rendering nicht oder nur eingeschränkt funktioniert.
Zum Beispiel werden die Bilder der **Bildauswahl** nicht angezeigt.

:::

### Weiterführende Links

- [SurveyJS](https://surveyjs.io/)
