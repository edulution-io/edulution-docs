# Kalender

Die **Kalender**-App zeigt und verwaltet Termine aus den CalDAV-Kalendern Ihrer Schule. Sie sehen Ihre eigenen und mit Ihnen geteilten Kalender in einer Monats- oder Wochenansicht, legen neue Termine an, verschieben sie per Drag & Drop und erstellen bei Bedarf eigene Kalender, die Sie für andere Benutzer und Gruppen freigeben.

## Übersicht

Über der Kalenderfläche finden Sie links die Navigation und rechts die Umschaltung zwischen den Ansichten. Solange Termine geladen werden, erscheint oben rechts eine kleine Ladeanzeige.

### Navigation

- **Zurück** / **Weiter** (Pfeil-Schaltflächen) – Blättern eine Woche bzw. einen Monat vor oder zurück, je nach aktiver Ansicht.
- **Heute** – Springt zum aktuellen Datum zurück.
- Daneben wird der angezeigte Zeitraum als Beschriftung dargestellt (z. B. der Monatsname mit Jahr in der Monatsansicht oder die Kalenderwoche in der Wochenansicht).

### Ansichten umschalten

Mit der Umschaltung wechseln Sie zwischen den beiden Hauptansichten:

- **Monat** – Zeigt den gesamten Monat als Raster mit den Wochentagen als Spalten.
- **Woche** – Zeigt die aktuelle Woche mit einer Stundenskala. Eine separate Zeile am oberen Rand fasst die **ganztägigen** Termine zusammen.

Die **Stundenplan**-Ansicht ist eine dritte, eigenständige Darstellung. Sie erreichen Sie nicht über diese Umschaltung, sondern über die Seitenleiste (siehe [Stundenplan](#stundenplan)).

### Seitenleiste und Kalenderliste

In der Seitenleiste sind Ihre Kalender nach Gruppen geordnet:

- **Meine Kalender** – Kalender, die Ihnen gehören.
- **Abonnierte Kalender** – Kalender, die andere für Sie freigegeben haben.
- **Stundenplan** – Als Stundenplan markierte Kalender, die direkt zur [Stundenplan-Ansicht](#stundenplan) führen.
- **Kalender anlegen** – Öffnet den Dialog zum [Anlegen eines neuen Kalenders](#kalender-anlegen).

Vor jedem Kalendereintrag steht ein farbiges Quadrat. Diese Farbe kennzeichnet den Kalender in allen Ansichten und dient zugleich als Legende. Abonnierte (freigegebene) Kalender werden zusätzlich mit einem gestrichelten Rahmen gekennzeichnet.

### Kalender ein- und ausblenden

Ein Klick auf einen Kalendereintrag in den Gruppen **Meine Kalender** oder **Abonnierte Kalender** blendet die zugehörigen Termine ein oder aus. Ausgeblendete Kalender werden in der Liste abgeschwächt dargestellt. Neu abonnierte Kalender sind zunächst eingeblendet.

Ihre Auswahl wird benutzerbezogen auf dem Server gespeichert. Sie bleibt daher über das Neuladen der Seite, eine erneute Anmeldung und einen Gerätewechsel hinweg erhalten – ein einmal ausgeblendeter Kalender bleibt ausgeblendet, bis Sie ihn wieder einblenden.

## Ansichten

### Monat

Im Monatsraster wird jeder Tag als Zelle dargestellt. Der aktuelle Tag ist hervorgehoben, Tage außerhalb des angezeigten Monats sind abgeschwächt. Pro Tag werden die ersten Termine als farbige Einträge angezeigt; gibt es mehr Termine, erscheint ein Hinweis in der Form **+n weitere**. Ein Klick auf einen freien Bereich eines Tages öffnet den Dialog zum [Erstellen eines Termins](#termine-erstellen) mit dem passenden Datum.

### Woche

Die Wochenansicht zeigt die sieben Tage der Woche mit einer Stundenskala. Termine werden zeitlich passend platziert; überlappende Termine werden nebeneinander angeordnet. Ganztägige Termine erscheinen in einer eigenen Zeile oberhalb der Stundenskala. Ein Klick auf einen freien Zeitabschnitt öffnet den Dialog zum [Erstellen eines Termins](#termine-erstellen) mit der gewählten Anfangszeit.

### Stundenplan

Die Stundenplan-Ansicht ist eine auf den Schulalltag zugeschnittene Wochenansicht: Sie zeigt nur die Tage **Montag bis Freitag** und einen festen Zeitausschnitt am Tag in feiner Rasterung. Sie öffnen sie über einen als Stundenplan markierten Kalender in der Seitenleiste; über **Zurück** kehren Sie zur normalen Kalenderansicht zurück. In dieser Ansicht werden die Termine in ihrer jeweiligen **Farbe** dargestellt.

:::info[Wo die Terminfarbe sichtbar ist]
Die einem Termin zugewiesene Farbe wird ausschließlich in der Stundenplan-Ansicht angezeigt. In der Monats- und Wochenansicht richtet sich die Farbe der Termine nach dem zugehörigen Kalender.
:::

## Termine erstellen

Einen neuen Termin legen Sie auf mehreren Wegen an:

- über die Schaltfläche **Termin erstellen** unten rechts,
- mit einem Klick auf einen Tag (Monatsansicht) oder einen Zeitabschnitt (Wochenansicht).

Füllen Sie im Dialog die folgenden Felder aus:

1. **Kalender** – Der Kalender, in dem der Termin gespeichert wird. Zur Auswahl stehen nur Kalender, in die Sie schreiben dürfen.
2. **Titel** – Die Bezeichnung des Termins.
3. **Beschreibung** – Optionaler ausführlicher Text.
4. **Ort** – Optionale Ortsangabe.
5. **Ganztägig** – Schalten Sie diese Option ein, wenn der Termin keinen festen Zeitpunkt hat; die Uhrzeitfelder entfallen dann.
6. **Beginn** und **Ende** – Start- und Endzeitpunkt des Termins. Das Ende darf nicht vor dem Beginn liegen.
7. **Wiederholung** – Legt fest, ob der Termin als [Serientermin](#serientermine-und-wiederholungen) wiederkehrt.
8. **Sichtbarkeit** – **Öffentlich**, **Privat** oder **Vertraulich**.
9. **Zeit-Status** – Ob die Zeit als **Abwesend (gebucht)** oder **Verfügbar (frei)** gilt.
10. **Farbe** – Eine Farbe aus der Palette, eine eigene Farbe oder **Keine Farbe**. Die Farbe wirkt sich nur in der Stundenplan-Ansicht aus.
11. **Teilnehmer** – Weitere Benutzer, die zum Termin eingeladen werden.

Speichern Sie den Termin über **Speichern**. Steht kein beschreibbarer Kalender zur Verfügung, ist das Speichern nicht möglich.

## Termine bearbeiten und löschen

Ein Klick auf einen bestehenden Termin öffnet denselben Dialog wie beim Erstellen, sodass Sie alle Felder ändern können. Termine aus schreibgeschützten oder abonnierten Kalendern lassen sich nicht öffnen und nicht bearbeiten.

Zum Löschen verwenden Sie im Bearbeiten-Dialog die Lösch-Schaltfläche. Vor dem endgültigen Entfernen erscheint eine Sicherheitsabfrage. Handelt es sich um einen Serientermin, werden Sie zusätzlich gefragt, für welche Termine die Löschung gelten soll (siehe [Serientermine und Wiederholungen](#serientermine-und-wiederholungen)).

## Termin in einen anderen Kalender verschieben

Wenn Sie einen Termin bearbeiten, können Sie über das Feld **Kalender** einen anderen Zielkalender auswählen. Beim Speichern wird der Termin in den gewählten Kalender verschoben. Als Ziel stehen nur Kalender zur Verfügung, in die Sie schreiben dürfen.

Serientermine lassen sich nur als Ganzes in einen anderen Kalender verschieben: Wählen Sie in der anschließenden Abfrage **Alle Termine der Serie**, wird die gesamte Serie einschließlich ihrer Wiederholungsregel und Teilnehmer in den Zielkalender übernommen. Das Verschieben nur eines einzelnen Termins oder der folgenden Termine einer Serie in einen anderen Kalender ist nicht möglich und wird mit einer entsprechenden Meldung abgelehnt.

## Serientermine und Wiederholungen

Im Feld **Wiederholung** legen Sie fest, ob ein Termin wiederkehrt. Es stehen folgende Voreinstellungen zur Verfügung:

- **Keine Wiederholung**
- **Täglich**
- **Wöchentlich**
- **Monatlich**
- **Jährlich**
- **Benutzerdefiniert…**

### Benutzerdefinierte Wiederholung

Über **Benutzerdefiniert…** oder die Schaltfläche **Anpassen…** öffnen Sie den Dialog **Benutzerdefinierte Wiederholung** mit weiteren Einstellungen:

- **Alle** und **Einheit** – Das Intervall, z. B. alle 2 Wochen.
- **An folgenden Wochentagen** – Bei wöchentlicher Wiederholung wählen Sie hier die betroffenen Wochentage.
- **Monatliches Muster** – Bei monatlicher Wiederholung wählen Sie zwischen einem festen Tag im Monat (z. B. „Am 15. des Monats“) und einem Muster nach Wochentag (z. B. „Am zweiten Dienstag des Monats“).
- **Endet** – Wann die Serie endet: **Nie**, **Nach** einer Anzahl von Terminen oder **Am Datum**.

Unterhalb der Auswahl wird die aktuell eingestellte Wiederholung als Text zusammengefasst.

:::info[Wiederholungsregel bestehender Serien]
Das nachträgliche Ändern der Wiederholungsregel einer bereits bestehenden Serie wird derzeit nicht unterstützt. Beim Bearbeiten einer einzelnen Wiederholung wird die Regel daher nur als Text angezeigt.
:::

### Geltungsbereich beim Bearbeiten oder Löschen

Bearbeiten oder löschen Sie einen Termin, der Teil einer Serie ist – oder verschieben Sie ihn per Drag & Drop – werden Sie gefragt, für welche Termine die Änderung gelten soll:

- **Nur dieser Termin**
- **Dieser und alle folgenden Termine**
- **Alle Termine der Serie**

Wählen Sie **Alle Termine der Serie** und haben Sie dabei den Zeitpunkt geändert, wird die gesamte Serie um denselben Zeitversatz verschoben; alle übrigen Änderungen – etwa Titel oder Ort – gelten unverändert für sämtliche Termine der Serie.

## Termine per Drag & Drop verschieben

Termine lassen sich direkt mit der Maus verschieben:

- In der **Wochenansicht** ziehen Sie einen Termin auf einen anderen Zeitabschnitt.
- In der **Monatsansicht** ziehen Sie einen Termin auf einen anderen Tag.

Ziehen Sie einen Serientermin, erscheint anschließend dieselbe Abfrage nach dem [Geltungsbereich](#geltungsbereich-beim-bearbeiten-oder-löschen).

:::info[Schreibgeschützte Termine]
Termine aus schreibgeschützten oder abonnierten Kalendern können nicht per Drag & Drop verschoben werden. Auch einzelne Ausnahmen innerhalb einer Serie lassen sich nicht frei verschieben.
:::

## Kalender anlegen

Über **Kalender anlegen** in der Seitenleiste öffnen Sie den gleichnamigen Dialog. Dort legen Sie fest:

- **Name** – Der angezeigte Name des Kalenders.
- **Markierungen** – Optional die Markierung **Stundenplan**, mit der der Kalender als Stundenplan gekennzeichnet und in der entsprechenden Gruppe der Seitenleiste angezeigt wird.
- **Beschreibung** – Eine optionale Beschreibung.
- **Farbe** – Die Farbe, in der der Kalender und seine Termine dargestellt werden.

Speichern Sie den Kalender über **Speichern**; ohne Namen ist das Speichern nicht möglich.

## Kalender freigeben

Eigene Kalender geben Sie für andere Benutzer oder Gruppen frei: Öffnen Sie in der Seitenleiste unter **Meine Kalender** das Kontextmenü des gewünschten Kalenders und wählen Sie **Freigeben**. Im Freigabe-Dialog suchen Sie Benutzer oder Gruppen und legen für jede Freigabe eine Berechtigungsstufe fest:

| Berechtigung | Bedeutung |
|---|---|
| **Nur Frei/Belegt** | Es ist nur erkennbar, ob Zeiten belegt sind, ohne Termindetails. |
| **Ansehen** | Termine dürfen gelesen werden. |
| **Bearbeiten** | Termine dürfen gelesen, angelegt und geändert werden. |

Neu hinzugefügte Benutzer und Gruppen erhalten standardmäßig die Stufe **Ansehen**; über das Mülleimer-Symbol entziehen Sie eine Freigabe wieder. Sobald Sie einen Kalender freigeben, wird er den betreffenden Benutzern automatisch als abonnierter Kalender bereitgestellt.

:::info Backend-Voraussetzung

Das Freigeben und Abonnieren von Kalendern nutzt die proprietären ACL-Funktionen von **SoGo** und ist nur verfügbar, wenn als CalDAV-Server SoGo eingesetzt wird. Die reine Terminsynchronisierung funktioniert dagegen mit jedem standardkonformen CalDAV-Server. Welcher CalDAV-Server verwendet wird, legt die Administration in den App-Einstellungen des Kalenders fest.

:::

## Abonnierte und schreibgeschützte Kalender

Kalender, die andere für Sie freigegeben haben, erscheinen unter **Abonnierte Kalender** und sind mit einem Freigabe-Symbol sowie einem gestrichelten Rahmen gekennzeichnet. Ist ein solcher Kalender schreibgeschützt, können Sie seine Termine zwar einsehen, aber nicht öffnen, bearbeiten, löschen oder per Drag & Drop verschieben. Über das Kontextmenü eines abonnierten Kalenders entfernen Sie ihn mit **Abbestellen** wieder aus Ihrer Liste.

## Siehe auch

- [Dashboard](dashboard.md) – Schnellzugriff auf den Kalender
- [App-Store](app-store.md) – Kalender-App aktivieren
- [Weitere Features](weitere-features.md) – Übersicht zusätzlicher Funktionen
