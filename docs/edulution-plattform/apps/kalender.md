# Kalender

Die **Kalender**-App zeigt und verwaltet Termine aus den CalDAV-Kalendern Ihrer Schule. Sie sehen Ihre eigenen und mit Ihnen geteilten Kalender wahlweise als Monat, Woche, Tag oder Agenda, legen neue Termine an, verschieben sie per Drag & Drop und erstellen bei Bedarf eigene Kalender, die Sie für andere Benutzer und Gruppen freigeben.

## Übersicht

Über der Kalenderfläche finden Sie links die Navigation und rechts die Umschaltung zwischen den Ansichten. Solange Termine geladen werden, erscheint oben rechts eine kleine Ladeanzeige.

### Navigation

- **Zurück** / **Weiter** (Pfeil-Schaltflächen) – Blättern vor oder zurück. Wie weit gesprungen wird, richtet sich nach der aktiven Ansicht: um einen Monat, eine Woche, einen Tag oder – in der Agenda – um den gesamten angezeigten Zeitraum von 30 Tagen.
- **Heute** – Springt zum aktuellen Datum zurück.
- Daneben wird der angezeigte Zeitraum als Beschriftung dargestellt – in der Monatsansicht der Monatsname mit Jahr, in der Wochenansicht der Datumsbereich der angezeigten Woche, in der Tagesansicht das vollständige Datum.
- In der Wochen- und der Stundenplan-Ansicht wird zusätzlich die **Kalenderwoche** der angezeigten Woche als **KW _n_** (nach ISO 8601) eingeblendet.

### Zu einem Datum springen

Neben den Navigations-Schaltflächen finden Sie die Schaltfläche **Datum wählen**. Sie öffnet einen kleinen Monatskalender, mit dem Sie gezielt zu einem beliebigen Datum springen, ohne sich Woche für Woche oder Monat für Monat vorarbeiten zu müssen.

- Über die Auswahllisten für **Monat** und **Jahr** am oberen Rand wechseln Sie direkt zu einem anderen Monat oder Jahr; mit den Pfeilen daneben blättern Sie monatsweise.
- Ein Klick auf einen Tag schließt den Mini-Kalender und stellt die Hauptansicht auf das gewählte Datum um; die Termine des betreffenden Zeitraums werden automatisch geladen.
- Der aktuell in der Hauptansicht sichtbare Zeitraum ist im Mini-Kalender hervorgehoben – in der Monatsansicht der gesamte Monat, in der Wochenansicht die aktuelle Woche. Der heutige Tag und das ausgewählte Datum sind zusätzlich gekennzeichnet.

### Ansichten umschalten

Mit der Umschaltung wechseln Sie zwischen den vier Hauptansichten:

- **Monat** – Zeigt den gesamten Monat als Raster mit den Wochentagen als Spalten.
- **Woche** – Zeigt die aktuelle Woche mit einer Stundenskala. Eine separate Zeile am oberen Rand fasst die **ganztägigen** Termine zusammen.
- **Tag** – Zeigt einen einzelnen Tag mit derselben Stundenskala wie die Wochenansicht.
- **Agenda** – Listet die kommenden Termine untereinander auf, statt sie in ein Raster einzuzeichnen.

Die **Stundenplan**-Ansicht ist eine eigenständige Darstellung. Sie erreichen Sie nicht über diese Umschaltung, sondern über die Seitenleiste (siehe [Stundenplan](#stundenplan)).

### Ansicht aktualisieren

Oben rechts steht die Schaltfläche **Neu laden** zur Verfügung. Sie lädt die Termine des aktuell angezeigten Zeitraums und der aktiven Kalender erneut vom Server, ohne dass Sie die Seite neu laden oder wegblättern müssen – nützlich, um zwischenzeitlich an anderer Stelle geänderte Termine anzuzeigen. Während des Aktualisierens dreht sich das Symbol der Schaltfläche, sie ist vorübergehend deaktiviert und es erscheint die kleine Ladeanzeige.

### Seitenleiste und Kalenderliste

In der Seitenleiste sind Ihre Kalender nach Gruppen geordnet:

- **Meine Kalender** – Kalender, die Ihnen gehören.
- **Abonnierte Kalender** – Kalender, die andere für Sie freigegeben haben.
- **Stundenplan** – Als Stundenplan markierte Kalender, die direkt zur [Stundenplan-Ansicht](#stundenplan) führen.
- **Kalender anlegen** – Öffnet den Dialog zum [Anlegen eines neuen Kalenders](#kalender-anlegen).

Ein Klick auf einen der obersten Gruppeneinträge wechselt zugleich die angezeigte Ansicht: **Meine Kalender** und **Abonnierte Kalender** führen zur normalen Kalenderansicht (Monat bzw. Woche, je nach zuletzt gewählter Ansicht), **Stundenplan** öffnet die [Stundenplan-Ansicht](#stundenplan). So kehren Sie aus dem Stundenplan mit einem Klick auf **Meine Kalender** oder **Abonnierte Kalender** wieder in die gewohnte Kalenderansicht zurück.

Vor jedem Kalendereintrag steht ein farbiges Quadrat. Diese Farbe kennzeichnet den Kalender in allen Ansichten und dient zugleich als Legende. Abonnierte (freigegebene) Kalender werden zusätzlich mit einem gestrichelten Rahmen gekennzeichnet.

### Kalender ein- und ausblenden

Ein Klick auf einen Kalendereintrag in den Gruppen **Meine Kalender** oder **Abonnierte Kalender** blendet die zugehörigen Termine ein oder aus. Ausgeblendete Kalender werden in der Liste abgeschwächt dargestellt. Neu abonnierte Kalender sind zunächst eingeblendet.

Ihre Auswahl wird benutzerbezogen auf dem Server gespeichert. Sie bleibt daher über das Neuladen der Seite, eine erneute Anmeldung und einen Gerätewechsel hinweg erhalten – ein einmal ausgeblendeter Kalender bleibt ausgeblendet, bis Sie ihn wieder einblenden.

Gespeichert wird jeder Weg, die Sichtbarkeit zu ändern: der Klick auf den Kalendereintrag ebenso wie die Aktionen **Einblenden**, **Ausblenden**, **Nur diesen anzeigen** und **Alle anzeigen** im Kontextmenü eines Kalenders. **Nur diesen anzeigen** und **Alle anzeigen** wirken dabei auf mehrere Kalender gleichzeitig; auch diese Änderungen werden vollständig übernommen.

### Kalenderkontextmenü

Über das Kontextmenü (Drei-Punkte-Symbol) eines Kalendereintrags in der Seitenleiste erreichen Sie die kalenderbezogenen Aktionen. Welche Einträge erscheinen, hängt davon ab, ob es sich um einen eigenen, einen abonnierten oder einen als Stundenplan markierten Kalender handelt:

- **Einblenden** bzw. **Ausblenden** – Blendet die Termine des Kalenders ein oder aus, wie ein Klick auf den Eintrag.
- **Nur diesen anzeigen** – Blendet alle anderen Kalender aus und zeigt ausschließlich die Termine des gewählten Kalenders.
- **Alle anzeigen** – Blendet wieder sämtliche Kalender ein.
- **Einstellungen** – Öffnet die [Kalendereinstellungen](#kalender-bearbeiten-und-löschen), in denen Sie **Name**, **Typ**, **Beschreibung** und **Farbe** des Kalenders ändern; nur bei eigenen Kalendern verfügbar.
- **Als Stundenplan markieren** bzw. **Stundenplan-Markierung entfernen** – Verschiebt einen eigenen Kalender in die Gruppe **Stundenplan** oder zurück zu **Meine Kalender** (siehe [Stundenplan](#stundenplan)).
- **Als Standardkalender festlegen** bzw. **Als Standardkalender entfernen** – Bestimmt, welcher Kalender beim [Erstellen eines Termins](#termine-erstellen) vorausgewählt ist.
- **Freigeben** – Öffnet den [Freigabe-Dialog](#kalender-freigeben); nur bei eigenen Kalendern verfügbar.
- **Abbestellen** – Entfernt einen [abonnierten Kalender](#abonnierte-und-schreibgeschützte-kalender) aus Ihrer Liste; steht an derselben Stelle wie **Freigeben**.
- **Löschen** – Löscht den Kalender samt seiner Termine (siehe [Kalender bearbeiten und löschen](#kalender-bearbeiten-und-löschen)); steht als letzter Eintrag und ist nur bei eigenen Kalendern verfügbar.

Bei abonnierten oder schreibgeschützten Kalendern stehen nur die Anzeige-Aktionen sowie **Abbestellen** zur Verfügung. Das Markieren als Stundenplan, das Festlegen als Standardkalender sowie **Einstellungen**, **Freigeben** und **Löschen** bleiben eigenen, beschreibbaren Kalendern vorbehalten.

Bei einem als Stundenplan markierten Kalender führt der Eintrag in der Seitenleiste direkt in die [Stundenplan-Ansicht](#stundenplan); sein Kontextmenü enthält deshalb keine Anzeige-Aktionen, sondern **Stundenplan-Markierung entfernen**, **Einstellungen**, **Freigeben** und **Löschen**. Ein Stundenplan lässt sich nicht als Standardkalender festlegen.

Die Festlegung als Standardkalender wird in Ihrem Browser gespeichert: Sie bleibt über das Neuladen der Seite und die nächste Anmeldung hinaus erhalten, gilt aber nur auf diesem Gerät und in diesem Browser. An einem anderen Arbeitsplatz legen Sie den Standardkalender daher erneut fest.

Steht der festgelegte Kalender nicht mehr als eigener, beschreibbarer Kalender zur Verfügung – etwa weil Sie ihn gelöscht haben oder Ihnen die Schreibrechte daran entzogen wurden –, wird die Festlegung automatisch aufgehoben.

:::info[Standardkalender und Stundenplan-Markierung]
Markieren Sie ausgerechnet den Kalender als Stundenplan, der derzeit Ihr Standardkalender ist, wird die Festlegung als Standardkalender dabei automatisch aufgehoben. Beim [Erstellen eines Termins](#termine-erstellen) ist dann wieder der erste beschreibbare Kalender vorausgewählt, bis Sie einen neuen Standardkalender bestimmen.
:::

## Ansichten

### Monat

Im Monatsraster wird jeder Tag als Zelle dargestellt. Der aktuelle Tag ist hervorgehoben, Tage außerhalb des angezeigten Monats sind abgeschwächt. Am linken Rand jeder Wochenzeile steht in einer eigenen, mit **KW** überschriebenen Spalte die zugehörige **Kalenderwoche** nach ISO 8601. Pro Tag werden die ersten Termine als farbige Einträge angezeigt; passen nicht alle Termine in die Zelle, erscheint darunter die Schaltfläche **+n weitere**. Ein Klick darauf öffnet ein kleines Überblendfenster mit der Überschrift des vollständigen Datums, das alle Termine dieses Tages auflistet – auch die bereits in der Zelle sichtbaren. Die Einträge werden wie in der Zelle dargestellt, mit Uhrzeit beziehungsweise dem Zeichen ↳ bei einem Termin, der an einem früheren Tag beginnt. Ein Klick auf einen Eintrag schließt das Fenster und öffnet den Termin zum [Bearbeiten](#termine-bearbeiten-und-löschen) – oder, ohne Bearbeitungsrecht, in der [Detailansicht](#termine-ansehen-ohne-bearbeitungsrecht). Das Fenster schließt sich auch, wenn Sie einen anderen Tag anklicken; klicken Sie dabei auf die Schaltfläche **+n weitere** eines anderen Tages, wechselt die Anzeige unmittelbar zu dessen Terminen. Ein Klick auf einen freien Bereich eines Tages öffnet den Dialog zum [Erstellen eines Termins](#termine-erstellen) mit dem passenden Datum.

### Woche

Die Wochenansicht zeigt die sieben Tage der Woche mit einer Stundenskala. Termine werden zeitlich passend platziert; überlappende Termine werden nebeneinander angeordnet. Ganztägige Termine erscheinen in einer eigenen Zeile oberhalb der Stundenskala. Ein Klick auf einen freien Zeitabschnitt öffnet den Dialog zum [Erstellen eines Termins](#termine-erstellen) mit der gewählten Anfangszeit.

### Tag

Die Tagesansicht entspricht der Wochenansicht, beschränkt sie aber auf einen einzelnen Tag: Sie behalten die Stundenskala, die eigene Zeile für ganztägige Termine, das Anlegen eines Termins per Klick auf einen freien Zeitabschnitt und das Verschieben per Drag & Drop. Da nur ein Tag angezeigt wird, steht für die Termine die volle Breite zur Verfügung – hilfreich an Tagen mit vielen oder sich überschneidenden Terminen sowie auf schmalen Bildschirmen.

### Agenda

Die Agenda listet die Termine der **kommenden 30 Tage** ab dem gewählten Datum chronologisch untereinander auf, gruppiert nach Tag.

Beachten Sie dabei die folgenden Besonderheiten:

- **Tage ohne Termine werden übersprungen**.
- Innerhalb eines Tages stehen **ganztägige Termine** ganz oben, danach folgen die übrigen Termine nach Uhrzeit.
- Ein Termin, der sich über mehrere Tage erstreckt, erscheint unter **jedem** dieser Tage. An den Folgetagen steht anstelle der Uhrzeit das Zeichen ↳, da der Termin dort nicht beginnt.
- Ein Klick auf einen Eintrag öffnet den Termin zum [Bearbeiten](#termine-bearbeiten-und-löschen). Termine lassen sich in der Agenda **nicht per Drag & Drop verschieben**; wechseln Sie dafür in eine der Rasteransichten.
- Enthält der Zeitraum keine Termine, erscheint der Hinweis **Keine Termine in diesem Zeitraum.**

### Stundenplan

Die Stundenplan-Ansicht ist eine auf den Schulalltag zugeschnittene Wochenansicht: Sie zeigt nur die Tage **Montag bis Freitag** und einen festen Zeitausschnitt am Tag in feiner Rasterung. Sie öffnen sie über einen als Stundenplan markierten Kalender in der Seitenleiste; über **Zurück** kehren Sie zur normalen Kalenderansicht zurück. In dieser Ansicht werden die Termine in ihrer jeweiligen **Farbe** dargestellt.

Ein Klick auf einen Termin öffnet ihn – je nach Ihren Rechten am zugehörigen Kalender zum [Bearbeiten](#termine-bearbeiten-und-löschen) oder in der schreibgeschützten Detailansicht (siehe [Termine ansehen ohne Bearbeitungsrecht](#termine-ansehen-ohne-bearbeitungsrecht)). Wie in den übrigen Rasteransichten verschieben Sie einen Termin auch hier [per Drag & Drop](#termine-per-drag--drop-verschieben) auf einen anderen Zeitabschnitt. Über der Stundenskala liegt wie in der Wochenansicht eine eigene Zeile für **ganztägige** Termine.

Neue Termine legen Sie über die Schaltfläche **Termin erstellen** oben rechts an; ein Klick auf einen leeren Zeitabschnitt öffnet hier – anders als in der Wochen- und der Tagesansicht – keinen neuen Termin. Im Dialog ist der geöffnete Stundenplan bereits als Kalender vorausgewählt, auch wenn Sie an anderer Stelle einen [Standardkalender](#kalenderkontextmenü) festgelegt haben.

:::info[Termine außerhalb des angezeigten Zeitraums]
Der Stundenplan zeigt Montag bis Freitag und einen festen Zeitausschnitt am Tag. Ein Termin, der auf ein Wochenende oder außerhalb dieses Zeitausschnitts fällt, erscheint dort nicht – und da Stundenplan-Termine auch in **Monat**, **Woche**, **Tag** und **Agenda** ausgeblendet sind, ist er dann über die Oberfläche nicht erreichbar. Legen Sie solche Termine in einem gewöhnlichen Kalender an oder entfernen Sie die Stundenplan-Markierung vorübergehend über das [Kalenderkontextmenü](#kalenderkontextmenü).
:::

:::info[Stundenplan-Termine erscheinen nur in dieser Ansicht]
Die Termine eines als Stundenplan markierten Kalenders werden ausschließlich in der Stundenplan-Ansicht angezeigt – in **Monat**, **Woche**, **Tag** und **Agenda** erscheinen sie nicht. Vermissen Sie dort einen Termin, prüfen Sie, ob sein Kalender als Stundenplan markiert ist, und entfernen Sie die Markierung bei Bedarf über das [Kalenderkontextmenü](#kalenderkontextmenü).
:::

:::info[Wo die Terminfarbe sichtbar ist]
Die einem Termin zugewiesene Farbe wird ausschließlich in der Stundenplan-Ansicht angezeigt. In allen übrigen Ansichten – Monat, Woche, Tag und Agenda – richtet sich die Farbe der Termine nach dem zugehörigen Kalender.

Termine, die aus einem externen CalDAV-Programm stammen, übernehmen die dort gesetzte Farbe.
:::

## Termine erstellen

Einen neuen Termin legen Sie auf mehreren Wegen an:

- über die Schaltfläche **Termin erstellen** oben rechts,
- mit einem Klick auf einen Tag (Monatsansicht) oder einen Zeitabschnitt (Wochen- und Tagesansicht).

Füllen Sie im Dialog die folgenden Felder aus:

1. **Kalender** – Der Kalender, in dem der Termin gespeichert wird. Zur Auswahl stehen nur Kalender, in die Sie schreiben dürfen. Vorausgewählt ist der über das [Kalenderkontextmenü](#kalenderkontextmenü) als Standard festgelegte Kalender, andernfalls der erste beschreibbare Kalender.
2. **Titel** – Die Bezeichnung des Termins.
3. **Beschreibung** – Optionaler ausführlicher Text.
4. **Ort** – Optionale Ortsangabe.
5. **Ganztägig** – Schalten Sie diese Option ein, wenn der Termin keinen festen Zeitpunkt hat; die Uhrzeitfelder entfallen dann.
6. **Beginn** und **Ende** – Start- und Endzeitpunkt des Termins. Das Ende darf nicht vor dem Beginn liegen.
7. **Wiederholung** – Legt fest, ob der Termin als [Serientermin](#serientermine-und-wiederholungen) wiederkehrt.
8. **Sichtbarkeit** – **Öffentlich**, **Privat** oder **Vertraulich**.
9. **Zeit-Status** – Ob die Zeit als **Abwesend (gebucht)** oder **Verfügbar (frei)** gilt.
10. **Farbe** – Eine Farbe aus der Palette, eine eigene Farbe oder **Keine Farbe**. Die Auswahl beginnt links mit **Keine Farbe**, darauf folgen die vorgegebenen Farben; ganz rechts öffnet die Schaltfläche **Eigene Farbe** den Farbwähler für eine beliebige Farbe. Die Farbe wirkt sich nur in der Stundenplan-Ansicht aus. Die Beschriftung des Termins wird automatisch dunkel oder hell dargestellt, damit sie vor der gewählten Farbe lesbar bleibt (siehe [Farbwahl und Lesbarkeit](#farbwahl-und-lesbarkeit)).
11. **Teilnehmer** – Weitere Benutzer, die zum Termin eingeladen werden.

Speichern Sie den Termin über **Speichern**. Steht kein beschreibbarer Kalender zur Verfügung, ist das Speichern nicht möglich.

## Termine bearbeiten und löschen

Ein Klick auf einen bestehenden Termin öffnet denselben Dialog wie beim Erstellen, sodass Sie alle Felder ändern können. Das gilt für Termine, die Sie ändern dürfen — bei einem freigegebenen Kalender also abhängig von den Ihnen erteilten Rechten. Termine, die Sie nur ansehen dürfen, öffnen sich stattdessen in einer reinen Detailansicht (siehe [Termine ansehen ohne Bearbeitungsrecht](#termine-ansehen-ohne-bearbeitungsrecht)).

Zum Löschen verwenden Sie im Bearbeiten-Dialog die Lösch-Schaltfläche. Sie steht nur zur Verfügung, wenn Sie im betreffenden Kalender löschen dürfen. Vor dem endgültigen Entfernen erscheint eine Sicherheitsabfrage. Handelt es sich um einen Serientermin, werden Sie zusätzlich gefragt, für welche Termine die Löschung gelten soll (siehe [Serientermine und Wiederholungen](#serientermine-und-wiederholungen)).

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

Wählen Sie **Alle Termine der Serie** und haben Sie dabei den Zeitpunkt geändert, wird die gesamte Serie um denselben Zeitversatz verschoben. Dabei wird die Wiederholungsregel auf den neuen Zeitpunkt umgerechnet: Verschieben Sie eine wöchentliche Serie von Montag auf Dienstag, wiederholt sie sich anschließend dienstags. Bei einem monatlichen Muster nach Wochentag wird der Anker ebenfalls neu bestimmt – aus „Am zweiten Dienstag des Monats“ wird beim Verschieben um eine Woche „Am dritten Dienstag des Monats“. Zuvor gelöschte Einzeltermine der Serie bleiben gelöscht, und einzeln verschobene Termine behalten ihre Abweichung.

Ändern Sie die Dauer eines Termins und wählen **Alle Termine der Serie**, gilt die neue Dauer für sämtliche Termine der Serie. Alle übrigen Änderungen – etwa Titel oder Ort – gelten ebenfalls unverändert für die gesamte Serie.

Mit **Nur dieser Termin** lösen Sie den gewählten Termin als Ausnahme aus der Serie heraus; alle übrigen Termine bleiben unverändert. Der Termin bleibt Teil der Serie – verschieben Sie ihn erneut, verschieben Sie dieselbe Ausnahme.

**Dieser und alle folgenden Termine** teilt die Serie an dieser Stelle: Die Termine davor bleiben unverändert bestehen, ab dem gewählten Termin entsteht eine neue Serie mit der geänderten Zeit. Die Gesamtzahl der Termine bleibt dabei erhalten – aus einer Serie mit sechs Terminen werden zwei Serien mit zusammen sechs Terminen. Endet die Serie nach einer festen Anzahl von Terminen, verteilt sich diese Anzahl auf beide Teile.

:::info[Verschieben in die fünfte Woche des Monats]
Bei einem monatlichen Muster nach Wochentag richtet sich der Anker nach der Woche, in die Sie den Termin ziehen. Verschieben Sie eine Serie „Am vierten Mittwoch des Monats“ um eine Woche nach hinten, lautet die Regel anschließend „Am fünften Mittwoch des Monats“. Da nicht jeder Monat einen fünften Mittwoch hat, finden danach deutlich weniger Termine statt. Ist das nicht gewünscht, verschieben Sie die Serie um einen ganzen Monat statt um eine Woche.
:::

:::info[Nicht umrechenbare Wiederholungsregeln]
Manche Wiederholungsregeln lassen sich nicht auf einen neuen Zeitpunkt umrechnen – etwa „Am letzten Freitag des Monats“. Solche Regeln legen Sie in edulution nicht selbst an; sie entstehen in anderen Kalenderprogrammen, die denselben Kalender über CalDAV mitbenutzen. Wählen Sie bei einer solchen Serie **Alle Termine der Serie** oder **Dieser und alle folgenden Termine**, wird die Änderung mit einer Meldung abgelehnt, damit die Serie nicht mit einer unpassenden Regel gespeichert wird. Über **Nur dieser Termin** lassen sich einzelne Termine einer solchen Serie weiterhin verschieben.
:::

## Termine per Drag & Drop verschieben

Termine lassen sich direkt mit der Maus verschieben:

- In der **Wochen-**, der **Tages-** und der [**Stundenplan-Ansicht**](#stundenplan) ziehen Sie einen Termin auf einen anderen Zeitabschnitt.
- In der **Monatsansicht** ziehen Sie einen Termin auf einen anderen Tag.

In der **Agenda** ist das Verschieben per Drag & Drop nicht möglich, da sie die Termine als Liste und nicht als Zeitraster darstellt.

Ziehen Sie einen Serientermin, erscheint anschließend dieselbe Abfrage nach dem [Geltungsbereich](#geltungsbereich-beim-bearbeiten-oder-löschen).

:::info[Termine ohne Bearbeitungsrecht]
Verschieben lassen sich nur Termine, für die Sie das Recht zum **Ändern** besitzen. In einem freigegebenen Kalender kann das je Sichtbarkeit unterschiedlich sein (siehe [Abonnierte und schreibgeschützte Kalender](#abonnierte-und-schreibgeschützte-kalender)). Auch einzelne Ausnahmen innerhalb einer Serie lassen sich nicht frei verschieben.
:::

## Kalender anlegen

Über **Kalender anlegen** in der Seitenleiste öffnen Sie den gleichnamigen Dialog. Dort legen Sie fest:

- **Name** – Der angezeigte Name des Kalenders.
- **Typ** – Optional die Kennzeichnung **Stundenplan**, mit der der Kalender als Stundenplan gekennzeichnet und in der entsprechenden Gruppe der Seitenleiste angezeigt wird.
- **Beschreibung** – Eine optionale Beschreibung.
- **Farbe** – Die Farbe, in der der Kalender und seine Termine dargestellt werden. Wählen Sie eine der vorgegebenen Farben aus oder legen Sie über die Schaltfläche **+** eine beliebige eigene Farbe fest.

Speichern Sie den Kalender über **Speichern**; ohne Namen ist das Speichern nicht möglich.

### Farbwahl und Lesbarkeit

Die Beschriftung farbiger Termine wird automatisch dunkel oder hell dargestellt – je nachdem, welche Schriftfarbe sich vor der gewählten Farbe besser abhebt. Sie können daher auch sehr helle Farben wie ein blasses Gelb verwenden, ohne die Lesbarkeit selbst prüfen zu müssen. Dasselbe gilt für die Farbe eines einzelnen [Termins](#termine-erstellen).

:::info[Namenszusatz bei Stundenplänen]
Legen Sie einen Kalender mit dem Typ **Stundenplan** an, wird dem eingegebenen Namen beim Speichern automatisch das Wort „Stundenplan“ vorangestellt: Aus der Eingabe „10a“ entsteht der Kalender **Stundenplan 10a**. Der Zusatz wird nur beim **Anlegen** ergänzt – benennen Sie den Kalender später über die [Kalendereinstellungen](#kalender-bearbeiten-und-löschen) um, gilt genau der Name, den Sie dort eintragen.
:::

## Kalender bearbeiten und löschen

Bestehende eigene Kalender verwalten Sie über die Einträge **Einstellungen** und **Löschen** im [Kalenderkontextmenü](#kalenderkontextmenü) – sowohl unter **Meine Kalender** als auch bei eigenen **Stundenplan**-Kalendern:

- **Einstellungen** – Öffnet den Dialog **Kalendereinstellungen**, in dem Sie **Name**, **Typ**, **Beschreibung** und **Farbe** des Kalenders ändern. Übernehmen Sie die Änderungen mit **Speichern**. Der Dialog entspricht dem Dialog zum [Anlegen eines Kalenders](#kalender-anlegen) und ist mit den bestehenden Werten des Kalenders vorbelegt.
- **Löschen** – Entfernt den Kalender. Zuvor erscheint eine Sicherheitsabfrage mit dem Hinweis, dass der Kalender und alle darin enthaltenen Termine dauerhaft gelöscht werden; dieser Vorgang lässt sich nicht rückgängig machen.

Ändern Sie im Dialog **Kalendereinstellungen** den **Typ**, wechselt der Kalender die Gruppe in der Seitenleiste: Mit gesetzter Kennzeichnung **Stundenplan** erscheint er unter **Stundenplan**, ohne sie wieder unter **Meine Kalender**. Ein Kalender, dem bisher keine Farbe zugewiesen ist, bleibt ohne Farbe, solange Sie im Dialog keine auswählen – ein bloßes Umbenennen weist ihm also keine Farbe zu.

Löschen Sie einen Kalender, dessen [Stundenplan-Ansicht](#stundenplan) Sie gerade geöffnet haben, kehren Sie automatisch zur Kalenderübersicht zurück. Schlägt das Löschen fehl, bleibt die Sicherheitsabfrage geöffnet und es erscheint eine Fehlermeldung, sodass Sie den Vorgang erneut auslösen können.

Bei abonnierten oder schreibgeschützten Kalendern werden **Einstellungen** und **Löschen** nicht angeboten (siehe [Abonnierte und schreibgeschützte Kalender](#abonnierte-und-schreibgeschützte-kalender)). Der Server lässt Änderungen an fremden Kalendern auch dann nicht zu, wenn sie auf anderem Weg angefordert werden – Sie können ausschließlich eigene Kalender bearbeiten und löschen.

## Kalender freigeben

Eigene Kalender geben Sie für andere Benutzer oder Gruppen frei: Öffnen Sie in der Seitenleiste unter **Meine Kalender** das Kontextmenü des gewünschten Kalenders und wählen Sie **Freigeben**. Im Freigabe-Dialog suchen Sie über **Personen oder Gruppen hinzufügen** nach Benutzern oder Gruppen; unter **Freigegeben für** stehen anschließend alle bestehenden Freigaben.

Jede Freigabe ist eine aufklappbare Zeile. Zugeklappt sehen Sie Name, E-Mail-Adresse und rechts eine Zusammenfassung der vergebenen Rechte (**Kein Zugriff**, **Nur Frei/Belegt**, **Ansehen** oder **Bearbeiten**). Über das Pfeilsymbol am rechten Rand klappen Sie die Zeile auf und vergeben die Rechte im Einzelnen. Über das Mülleimer-Symbol entziehen Sie eine Freigabe wieder.

Ist ein Empfänger im Verzeichnis nicht mehr auffindbar — etwa weil sein Konto zwischenzeitlich gelöscht wurde —, erscheint seine Zeile mit der Rolle **Keine** für alle drei Sichtbarkeiten. Die übrigen Freigaben bleiben davon unberührt und bearbeitbar; die verwaiste Zeile entfernen Sie über das Mülleimer-Symbol.

### Rechte je Sichtbarkeit

Die Rechte werden nicht als eine einzelne Stufe vergeben, sondern **getrennt für jede der drei Sichtbarkeiten** eines Termins — **Öffentlich**, **Vertraulich** und **Privat**. Welche Sichtbarkeit ein Termin hat, legen Sie beim [Erstellen des Termins](#termine-erstellen) im Feld **Sichtbarkeit** fest. Für jede dieser drei Sichtbarkeiten wählen Sie eine Rolle:

| Rolle | Bedeutung |
|---|---|
| **Keine** | Termine dieser Sichtbarkeit sind für die Person nicht vorhanden. |
| **Datum & Uhrzeit sehen** | Es ist nur erkennbar, dass die Zeit belegt ist — ohne Titel, Ort, Beschreibung oder Teilnehmer. |
| **Alles sehen** | Der Termin wird mit allen Details angezeigt. |
| **Antworten** | Wie **Alles sehen**, zusätzlich darf auf Einladungen geantwortet werden. |
| **Ändern** | Der Termin darf bearbeitet werden. |

Dadurch lässt sich ein Kalender abgestuft freigeben: Ein Kollege sieht Ihre öffentlichen Termine vollständig, von den vertraulichen nur die belegte Zeit, und von den privaten nichts.

Unabhängig von diesen drei Rollen stehen zwei kalenderweite Optionen zur Verfügung:

- **Diese Person kann Objekte in meinen Kalender hinzufügen.** — erlaubt das Anlegen neuer Termine.
- **Diese Person kann Objekte in meinem Kalender löschen.** — erlaubt das Löschen von Terminen.

Beide sind vom Recht zum **Ändern** unabhängig: Wer Termine ändern darf, darf deshalb noch keine anlegen oder löschen.

### Änderungen werden sofort gespeichert

Jede Änderung an einer Rolle oder einem Häkchen wird unmittelbar gespeichert; solange der Vorgang läuft, erscheint in der betreffenden Zeile eine Ladeanzeige und weitere Änderungen sind währenddessen gesperrt. Schlägt das Speichern fehl, springt die Zeile auf den vorherigen Stand zurück und es erscheint eine Fehlermeldung.

Neu hinzugefügte Benutzer und Gruppen erhalten die Voreinstellung **Alles sehen** für öffentliche sowie **Datum & Uhrzeit sehen** für vertrauliche und private Termine, ohne die Rechte zum Hinzufügen und Löschen.

### Freigabe an einen Verteiler

Neben einzelnen Personen geben Sie einen Kalender auch für einen **Verteiler** frei. Angeboten werden ausschließlich Verteiler mit einer E-Mail-Adresse, die in Sophomorix als Maillist gekennzeichnet sind; eine Klasse ohne diese Kennzeichnung taucht in der Suche nicht auf.

Die Treffer der Suche unter **Personen oder Gruppen hinzufügen** werden nach Kategorie gruppiert und stehen unter der Überschrift **Personen**, **Eltern** bzw. **Gruppen**. Verteilen sie sich auf mehrere dieser Kategorien, erscheint darüber eine Reihe von Schaltflächen — **Alle** sowie je eine pro vorhandener Kategorie —, mit denen Sie die Anzeige auf eine einzelne Kategorie beschränken. Eine eigene Überschrift für Klassen oder Projekte gibt es dabei nicht: Beide stehen zusammen mit den übrigen Verteilern unter **Gruppen**.

Die Freigabe wird an **jedes einzelne Mitglied** des Verteilers vergeben. In der Liste **Freigegeben für** steht dafür dennoch nur eine Zeile für den Verteiler; sie nennt anstelle der E-Mail-Adresse die Anzahl der Mitglieder (etwa **Verteiler mit 12 Mitgliedern**), und die Mitglieder selbst erscheinen nicht als eigene Zeilen. Die Rechte vergeben Sie wie bei einer Person; sie gelten dann für alle Mitglieder gleichermaßen.

Entziehen Sie die Freigabe des Verteilers über das Mülleimer-Symbol, verlieren dessen Mitglieder den Zugriff. Zwei Fälle sind davon ausgenommen:

- Mitglieder, die den Kalender zusätzlich über einen **zweiten freigegebenen Verteiler** erhalten, behalten den Zugriff mit den Rechten dieses zweiten Verteilers.
- Personen, die bereits **vor** der Freigabe des Verteilers eine **eigene Freigabe** besaßen, behalten diese unverändert. Ihre Zeile bleibt in der Liste stehen, ihre Rechte werden nicht durch die des Verteilers ersetzt, und der Zugriff bleibt auch nach dem Entziehen der Verteiler-Freigabe bestehen.

#### Mitgliederänderungen werden beim Öffnen abgeglichen

Tritt jemand dem Verteiler bei oder verlässt ihn, wird der Zugriff **nicht sofort** angepasst. Der Abgleich läuft, sobald Sie den Freigabe-Dialog des betreffenden Kalenders das nächste Mal öffnen. Währenddessen sind die Bedienelemente des Dialogs gesperrt; hat sich etwas geändert, nennt anschließend ein Hinweis je Verteiler, wie viele Mitglieder hinzugefügt und wie viele entfernt wurden.

Daraus folgt: Wer den Verteiler verlässt, behält den Zugriff auf den Kalender so lange, bis Sie den Freigabe-Dialog erneut öffnen. Bei einem Kalender, der einmal freigegeben und danach nicht wieder angefasst wird, kann das beliebig lange dauern. Öffnen Sie den Dialog daher gezielt, wenn sich die Zusammensetzung eines Verteilers geändert hat.

### Für den Benutzer abonnieren

Eine Freigabe stellt den Kalender **nicht** automatisch in der Kalenderliste des Empfängers bereit. Dafür setzen Sie in der aufgeklappten Zeile zusätzlich das Häkchen **Für den Benutzer abonnieren**. Andernfalls hat die Person zwar Zugriff, muss den Kalender aber selbst einbinden.

Das Häkchen ist nicht auswählbar, solange die Person überhaupt keine Rechte besitzt, und ebenso, sobald der Kalender bereits abonniert ist — ein Abbestellen ist von hier aus nicht möglich, das entscheidet der Empfänger selbst.

Für einen [Verteiler](#freigabe-an-einen-verteiler) steht das Häkchen nicht zur Verfügung; dessen Mitglieder binden den freigegebenen Kalender selbst ein.

### Alle authentifizierten Benutzer und öffentlicher Zugang

Neben den einzelnen Personen und Gruppen enthält die Liste immer zwei feste Einträge. Beide lassen sich nicht löschen und nicht abonnieren; Sie entziehen ihnen den Zugriff, indem Sie ihre Rollen auf **Keine** setzen.

| Eintrag | Rollen | Hinzufügen / Löschen |
|---|---|---|
| **Alle authentifizierten Benutzer** | alle fünf | möglich |
| **Öffentlicher Zugang** | nur **Keine**, **Datum & Uhrzeit sehen**, **Alles sehen** | nicht möglich |

**Alle authentifizierten Benutzer** gilt für jeden angemeldeten Benutzer der Schule. **Öffentlicher Zugang** gilt dagegen für **nicht angemeldete** Zugriffe: Sobald Sie hier eine andere Rolle als **Keine** vergeben, ist der Kalender ohne Anmeldung über seine CalDAV-Adresse abrufbar. Vergeben Sie dieses Recht daher nur bewusst.

:::warning[Überzählige Rechte werden beim Öffnen zurückgenommen]
Der CalDAV-Server kann dem öffentlichen Zugang mehr Rechte speichern, als der Freigabe-Dialog darstellen kann — etwa wenn sie zuvor direkt in der Oberfläche des CalDAV-Servers vergeben wurden. Solche Rechte werden beim Öffnen des Dialogs automatisch auf das zulässige Maß zurückgenommen; ein Hinweis nennt die Anzahl der zurückgenommenen Rechte.

Schlägt diese Korrektur fehl, wird die betroffene Zeile mit **Überzählige Rechte weiterhin aktiv** gekennzeichnet und zeigt die tatsächlich gespeicherten Rechte an — nicht die zulässigen. Über die Schaltfläche **Überzählige Rechte zurücknehmen** in derselben Zeile lösen Sie die Korrektur erneut aus.
:::

Ändern sich die Freigaben eines Kalenders, werden die betroffenen Benutzer zusätzlich per E-Mail benachrichtigt. Diese Benachrichtigung erhalten sie automatisch in der Sprache, die sie in edulution verwenden — maßgeblich ist dabei die Sprache des jeweiligen **Empfängers**, die er unter [Mein Profil → Sprache](../erste-schritte/mein-profil.md#sprache) auswählt.

:::info[Backend-Voraussetzung]

Das Freigeben und Abonnieren von Kalendern nutzt die proprietären ACL-Funktionen von **SoGo** und ist nur verfügbar, wenn als CalDAV-Server SoGo eingesetzt wird. Die reine Terminsynchronisierung funktioniert dagegen mit jedem standardkonformen CalDAV-Server. Welcher CalDAV-Server verwendet wird, legt die Administration in den [Einstellungen der Kalender-App](../konfiguration/einstellungen.md#kalender-caldav) fest.

:::

## Abonnierte und schreibgeschützte Kalender

Kalender, die andere für Sie freigegeben haben, erscheinen unter **Abonnierte Kalender** und sind mit einem Freigabe-Symbol sowie einem gestrichelten Rahmen gekennzeichnet. Über das Kontextmenü eines abonnierten Kalenders entfernen Sie ihn mit **Abbestellen** wieder aus Ihrer Liste.

Ein abonnierter Kalender ist **nicht grundsätzlich schreibgeschützt**. Was Sie darin tun dürfen, richtet sich nach den Rechten, die die freigebende Person Ihnen erteilt hat (siehe [Kalender freigeben](#kalender-freigeben)):

- **Termine anlegen** können Sie, wenn Ihnen das Recht zum Hinzufügen erteilt wurde. Nur dann erscheint der Kalender im Feld **Kalender** des Dialogs zum [Erstellen eines Termins](#termine-erstellen).
- **Termine bearbeiten und verschieben** können Sie, wenn Sie für die Sichtbarkeit des jeweiligen Termins die Rolle **Ändern** besitzen.
- **Termine löschen** können Sie, wenn Ihnen das Recht zum Löschen erteilt wurde.

Da die Rechte je Sichtbarkeit vergeben werden, können sich die Termine **eines einzigen Kalenders** unterschiedlich verhalten: Ein öffentlicher Termin lässt sich bearbeiten, ein vertraulicher desselben Kalenders nur ansehen und ein privater gar nicht anzeigen.

### Termine ansehen ohne Bearbeitungsrecht

Termine, die Sie sehen, aber nicht bearbeiten dürfen, öffnen sich beim Anklicken in einer reinen **Detailansicht** statt im Bearbeiten-Dialog. Sie zeigt Zeitraum, Kalender, Ort, Beschreibung, Sichtbarkeit, Zeit-Status und Teilnehmer, bietet aber keine Eingabefelder.

Besitzen Sie für die Sichtbarkeit des Termins nur die Rolle **Datum & Uhrzeit sehen**, nennt die Detailansicht ausschließlich den Zeitraum und den Kalender und weist die Zeit als belegt aus — Titel, Ort, Beschreibung und Teilnehmer bleiben verborgen. Termine, für die Sie die Rolle **Keine** besitzen, erscheinen gar nicht erst im Kalender.

<Audience roles="user">

Die Verbindung zum Kalender-Server richtet die Administration Ihrer Schule ein. Davon hängt auch ab, ob sich Kalender [freigeben und abonnieren](#kalender-freigeben) lassen – fehlen Ihnen diese Möglichkeiten, unterstützt der eingerichtete Server sie nicht. Das reine Anlegen und Synchronisieren von Terminen funktioniert davon unabhängig.

</Audience>

<Audience roles="admin">

## Einrichtung (für Administratoren)

Die Anbindung der Kalender-App an den CalDAV-Server wird in den [Einstellungen](../konfiguration/einstellungen.md#kalender-caldav) als Global-Admin konfiguriert (CalDAV-URL, Authentifizierungsmodus und Zertifikatsprüfung). Das [Freigeben und Abonnieren von Kalendern](#kalender-freigeben) setzt dabei einen SoGo-Server voraus; die reine Terminsynchronisierung funktioniert mit jedem standardkonformen CalDAV-Server.

Diese Verbindung gilt ausschließlich für die Kalender-App. Die Kontakte- und die E-Mail-App verwenden jeweils ihre eigene; eine dort abgeschaltete Zertifikatsprüfung wirkt sich daher nicht auf die Kalender-Verbindung aus.

</Audience>

## Siehe auch

- [Dashboard](../erste-schritte/dashboard.md) – Schnellzugriff auf den Kalender
- [App-Store](./app-store.md) – Kalender-App aktivieren
- [Weitere Features](./weitere-features.md) – Übersicht zusätzlicher Funktionen
