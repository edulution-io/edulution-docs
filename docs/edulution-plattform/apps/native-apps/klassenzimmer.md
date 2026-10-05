---
sidebar_custom_props:
  audience: advanced
  audienceOrg: school public-administration
---

# Klassenraum

Der Klassenraum ist das zentrale Werkzeug für Lehrkräfte im Unterricht. Hier starten Sie eine Stunde mit einer Klasse, einem Projekt oder einer eigenen Sitzung, schalten Internet, Drucker und Klassenarbeitsmodus Ihrer Schüler, teilen Dateien aus und sammeln sie wieder ein.

:::info[Linuxmuster Integration]
Der Klassenraum nutzt die Linuxmuster-Funktionen für Klassenverwaltung und Projekte (Sophomorix). Mehr Informationen: [Linuxmuster Dokumentation](https://docs.linuxmuster.net/de/latest/systemadministration/schoolconsole/)
:::

## Übersicht

![Klassenraum ohne laufende Stunde mit Seitenleiste](/img/klassenraum/uebersicht.webp)

1. Über die Seitenleiste erreichen Sie die Bereiche des Klassenraums:
   - **Unterricht** – eine Stunde starten und durchführen
   - **Einschreiben** – sich in Klassen, Druckergruppen und Projekte einschreiben
   - **Passwörter drucken** – Zugangsdaten einer Klasse als PDF oder CSV
   - **Klassenlisten** – Schülerlisten einer Klasse als PDF oder CSV
   - **Meine Projekte** – die Projekte, in denen Sie Admin sind
   - **Räume** – Räume und Layouts für den [Sitzplan](#sitzplan), nur sichtbar bei eingeschaltetem Sitzplan
2. **Sitzung starten** öffnet den Startdialog, siehe [Stunde starten](#stunde-starten).
3. **Mitglieder hinzufügen** stellt eine Stunde aus einzelnen Schülern, Klassen oder Projekten zusammen, siehe [Mitglieder hinzufügen](#mitglieder-hinzufügen).

## Unterricht

### Stunde starten

![Dialog Sitzung starten mit Klasse, Fach und Raum](/img/klassenraum/sitzplan-sitzung-starten.webp)

**Sitzung starten** führt Sie in einem Dialog Schritt für Schritt zur Stunde:

1. Wählen Sie links, womit Sie starten:
   - **Meine Klassen** – die Klassen, in die Sie [eingeschrieben](#einschreiben) sind
   - **Meine Projekte** – Ihre Projekte
   - **Mein Raum** – die Schüler, die in dem Raum angemeldet sind, in dem Sie selbst gerade an einem Schulrechner sitzen
   - **Meine Sitzungen** – Ihre gespeicherten Sitzungen
   - **Fächer** und **Räume** – nur mit eingeschaltetem [Sitzplan](#sitzplan)
2. Klicken Sie die Klasse, das Projekt oder die Sitzung an.
3. Wählen Sie das Fach oder **Ohne Fach**. Diesen Schritt gibt es nur mit Sitzplan und nur, wenn die Schule Räume und [Fächer](../../konfiguration/einstellungen.md#unterrichtsverwaltung) hat.
4. Legen Sie Raum und Layout fest. **Ohne Raum starten** öffnet die Stunde in der Kachelansicht. Auch diesen Schritt gibt es nur mit Sitzplan.
5. Starten Sie die Stunde mit **Starten**.

### Mitglieder hinzufügen

![Dialog Mitglieder hinzufügen mit Suche und Treffer](/img/klassenraum/mitglieder-hinzufuegen.webp)

Über **Mitglieder hinzufügen** nehmen Sie einzelne Schüler, ganze Klassen oder Projekte in die Stunde auf – auf der leeren Unterrichtsseite ebenso wie während einer Stunde über das Personen-Symbol über der Schülerliste.

1. Tippen Sie einen Namen, eine Klasse oder ein Projekt ein.
2. Die Treffer stehen nach Art gruppiert darunter. Ein Klick oder **Enter** nimmt den Treffer auf.
3. Jede Auswahl wird sofort übernommen. Unten sehen Sie, wie viele Einträge ausgewählt sind.

Haben Sie einer laufenden Klasse oder einem Projekt Personen hinzugefügt, fragt edulution beim Schließen, ob daraus eine Sitzung werden soll, und schlägt einen Namen vor, etwa „niclass_05-10“. Die Klasse oder das Projekt selbst bleibt dabei unverändert. Mit **Name ändern** wählen Sie einen anderen Namen, mit **Nicht jetzt** arbeiten Sie ohne gespeicherte Sitzung weiter. Gespeicherte Sitzungen finden Sie im Startdialog unter **Meine Sitzungen**. Eine geöffnete Sitzung ändern Sie oben rechts über **Bearbeiten**.

Schüler aus Klassen, in die Sie nicht eingeschrieben sind, sehen Sie in der Stunde, können sie aber nicht steuern: Ihre Schalter sind ausgegraut. Über das Pfeil-Symbol in ihrer Zeile treten Sie der Klasse des Schülers bei.

### Arbeitsbereich

![Laufende Stunde in der Kachelansicht](/img/klassenraum/unterricht-kacheln.webp)

1. **Mitglieder hinzufügen** – siehe oben.
2. **Alle auswählen** wählt alle Schüler der Stunde aus.
3. Die Schülerliste mit Suchfeld. Unter jedem Namen stehen die [Schalter des Schülers](#schalter-je-schüler).
4. Hier wechseln Sie zwischen **Alle Nutzer** (Kachelansicht) und **Raumplan**. Den Raumplan gibt es nur mit [Sitzplan](#sitzplan).
5. Jede Kachel zeigt einen Schüler mit seiner [Bildschirmvorschau](#bildschirmüberwachung-veyon).
6. **Neue Sitzung starten** öffnet wieder den Startdialog, **Stunde verlassen** kehrt zur leeren Unterrichtsseite zurück, **Neu laden** liest den Stand aller Schüler neu ein.

### Schalter je Schüler

![Schalter in einer Zeile der Schülerliste](/img/klassenraum/schueler-zeile.webp)

Unter jedem Namen in der Schülerliste stehen die Schalter dieses Schülers. Grün bedeutet eingeschaltet, ein Klick schaltet um.

1. **Wifi**
2. **Web Filter**
3. **Internet**
4. **Intranet**
5. **Drucken**
6. **Klassenarbeitsmodus**
7. **Veyon** – öffnet die [Veyon-Aktionen](#bildschirmüberwachung-veyon). Ohne Verbindung zum Gerät ist das Symbol ausgegraut.
8. **Passwortoptionen**

### Aktionen für mehrere Schüler

![Ausgewählte Schüler und die Aktionsleiste oben](/img/klassenraum/aktionsleiste.webp)

Wählen Sie Schüler über ihre Häkchen (1) oder alle auf einmal (2) aus, zeigt die Leiste oben die Aktionen für diese Auswahl:

3. **Austeilen** und **Einsammeln** verteilen Dateien an die Schüler und holen sie wieder ab. **Dateien anzeigen** zeigt die Dateien der ausgewählten Schüler.
4. **Wifi**, **Web Filter**, **Internet**, **Intranet** und **Drucken** schalten Sie für alle Ausgewählten gemeinsam.
5. **Klassenarbeitsmodus** – ebenfalls für alle Ausgewählten.

### Einzelansicht eines Schülers

![Einzelansicht eines Schülers mit großer Bildschirmvorschau](/img/klassenraum/einzelansicht.webp)

1. Klicken Sie in der Schülerliste auf einen Schüler.
2. Oben stehen die Veyon-Aktionen **Bildschirm sperren**, **Eingabe sperren**, **System neu starten** und **System herunterfahren**.
3. Darunter sehen Sie die große Bildschirmvorschau des Schülers.
4. Über **Alle Nutzer** kehren Sie zur Kachelansicht zurück.

### Ablauf einer Aktion

Solange eine Aktion läuft, ersetzt ein Ladekreis das Symbol der ausgelösten Funktion. Die übrigen Schalter desselben Schülers sind währenddessen gesperrt, bleiben aber in ihrer Farbe lesbar, sodass Sie den aktuellen Zustand des Schülers weiterhin ablesen können.

Nach Abschluss der Aktion lädt edulution den Stand des Schülers neu und zeigt den neuen Zustand. Schlägt die Aktion fehl, verschwindet der Ladekreis ebenfalls und die Schalter bleiben bedienbar.

Bei einer Massenaktion über die Aktionsleiste schließt sich der Dialog sofort nach der Bestätigung, und die Aktion läuft im Hintergrund weiter. Der Ladekreis erscheint dabei bei allen ausgewählten Schülern. Anschließend wird ihr Stand neu geladen.

### Bildschirmüberwachung (Veyon)

Ist ein Veyon-Proxy hinterlegt, zeigt jede Kachel automatisch eine kleine Live-Vorschau des Schülerbildschirms – Sie müssen die Überwachung nicht eigens starten. Über das Symbol zum Vergrößern öffnen Sie die Vorschau in einem eigenen Fenster, das häufiger aktualisiert wird. Eine große Vorschau zeigt auch die [Einzelansicht](#einzelansicht-eines-schülers).

Die Veyon-Aktionen erreichen Sie über das Augen-Symbol in der Zeile des Schülers:

- **Bildschirm sperren** / **Bildschirm entsperren**
- **Eingabe sperren** / **Eingabe entsperren** – sperrt Tastatur und Maus; bei gesperrter Eingabe erscheint ein rotes Tastatursymbol auf der Vorschau
- **System neu starten**
- **System herunterfahren**
- **Webseite öffnen** – öffnet eine von Ihnen angegebene Adresse im Browser des Schülers
- **Nachricht senden** – zeigt einen von Ihnen verfassten Text auf dem Schülerbildschirm an
- **Anwendung starten** – startet ein von Ihnen benanntes Programm auf dem Schülergerät

Die Aktionen stehen erst zur Verfügung, sobald die Verbindung zum Gerät aufgebaut ist. Für **Webseite öffnen**, **Nachricht senden** und **Anwendung starten** fragt edulution die Adresse, den Text bzw. den Programmnamen zuerst in einem eigenen Dialog ab. Solange das Feld leer ist oder bei **Webseite öffnen** keine vollständige Adresse enthält, lässt sich der Dialog nicht bestätigen:

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| *Bitte einen Wert angeben* | Das Feld ist leer oder enthält nur Leerzeichen. | Adresse, Text oder Programmnamen eingeben. |
| *Bitte eine vollständige http- oder https-Adresse angeben* | Die Adresse hat kein `http://` bzw. `https://`, z. B. `beispiel.de`. | Adresse vollständig eingeben, z. B. `https://beispiel.de`. |

Über das Augen-Symbol in der Aktionsleiste stehen alle Veyon-Aktionen auch für mehrere ausgewählte Schüler gemeinsam zur Verfügung, sobald mindestens einer von ihnen verbunden ist. Die Aktion erreicht dann nur die Schüler, deren Gerät verbunden ist. Die übrigen werden übersprungen.

Bricht die Verbindung zum Gerät ab, während der Dialog offen ist (etwa weil das Gerät heruntergefahren wird), schließt edulution ihn und sendet die Aktion nicht. Dasselbe gilt in der Aktionsleiste, wenn Sie die Auswahl der Schüler ändern.

:::info[Anmeldung mit Ihrem Lehrer-Passwort]
Für die Verbindung zu einem Schüler-Gerät meldet sich edulution mit **Ihren eigenen Zugangsdaten** an der Veyon-WebAPI an. Sie sehen deshalb nur die Geräte der Schüler, für die Sie zuständig sind.
:::

Bleibt die Vorschau bei allen Schülern leer, ist in der Regel kein Veyon-Proxy konfiguriert – eine Kachel ohne Vorschau sieht genauso aus wie ein ausgeschaltetes Gerät. Wenden Sie sich in diesem Fall an Ihren Administrator.

Bleibt die Vorschau nur bei **einzelnen** Schülern leer, obwohl das Gerät läuft, ist dieser Schüler dort meist gar nicht mehr angemeldet: Linuxmuster merkt sich die letzte Anmeldung an einem Gerät, aber keine Abmeldung, sodass ein früherer Nutzer in der Geräteliste stehen bleibt. Die Vorschau erscheint dann nur bei dem Konto, das tatsächlich am Gerät angemeldet ist. Das ist kein Fehler der Bildschirmüberwachung.

### Eingesammelte Dateien öffnen

Nachdem Sie im Unterricht Dateien Ihrer Schüler eingesammelt haben, zeigt edulution die eingesammelten Dateien in einem Dialog an. Über die Schaltfläche im Dialog öffnen Sie den zugehörigen Ordner direkt in der [Dateiverwaltung](../../../edulution-fileproxy/dateien/index.md).

:::info[Zugriff auf die Dateien-App erforderlich]
Die Schaltfläche zum Öffnen der eingesammelten Dateien in der Dateiverwaltung erscheint nur, wenn Sie Zugriff auf die Dateien-App haben. Ohne diesen Zugriff werden die eingesammelten Dateien weiterhin im Dialog angezeigt, lassen sich aber nicht direkt in der Dateiverwaltung öffnen. Welche Benutzer Zugriff auf die App haben, legen Administratoren über die Zugriffsgruppen der Dateien-App fest.
:::

### Einsammeln bei knappem eigenem Speicherplatz

Eingesammelte Dateien werden in **Ihrem eigenen Benutzerverzeichnis** abgelegt. Ist Ihr Speicherplatz sehr gering (mindestens 95 % belegt und weniger als 5 GB frei), blendet edulution die Schaltfläche **Einsammeln** in der Aktionsleiste aus. **Austeilen** und die übrigen Aktionen bleiben verfügbar.

Maßgeblich ist dabei immer die Quota **Ihres eigenen Home-Verzeichnisses** – unabhängig davon, welchen Ordner oder welche Freigabe Sie zuletzt in der Dateiverwaltung geöffnet haben.

edulution liest die Quota nach jedem in edulution abgeschlossenen Datei-Vorgang neu, also nach dem Einsammeln ebenso wie nach dem Hochladen, Löschen, Verschieben oder Kopieren. Füllt sich Ihr Benutzerverzeichnis dadurch während einer laufenden Stunde, verschwindet die Schaltfläche **Einsammeln**, ohne dass Sie den Klassenraum verlassen oder die Seite neu laden müssen. Geben Sie in edulution Speicher frei, erscheint sie auf demselben Weg wieder. Speicher, den Sie außerhalb von edulution freigeben (etwa über WebDAV im Datei-Explorer), wird erst beim nächsten Abruf der Quota berücksichtigt, spätestens wenn Sie den Klassenraum erneut öffnen oder die Seite neu laden.

Im Klassenraum erscheint außerdem dieselbe [Warnung bei knappem Speicherplatz](../../../edulution-fileproxy/dateien/speicherplatz-und-quota.md#warnung-bei-knappem-speicherplatz) wie in der Dateien-App, bezogen auf Ihr eigenes Benutzerverzeichnis. Sie setzt bereits bei geringer Quota ein, während **Einsammeln** noch verfügbar ist.

Wie Sie Ihre Speichernutzung einsehen und Platz schaffen, steht unter [Speicherplatz und Quota](../../../edulution-fileproxy/dateien/speicherplatz-und-quota.md).

## Sitzplan

Mit dem Sitzplan bilden Sie ein Klassenzimmer samt Tischen, Tafel, Türen, Fenstern und weiteren Objekten auf einem Raster nach und setzen Ihre Schüler im Unterricht auf feste Plätze. Ein Administrator schaltet den Sitzplan in den [Einstellungen der Klassenraum-App](../../konfiguration/einstellungen.md#klassenraum-sitzplan) ein. Erst dann erscheint links der Menüpunkt **Räume**. Den Raumplan im Unterricht gibt es nur, wenn edulution an Linuxmuster angebunden ist.

Eine Sitzordnung gehört immer zu einer Gruppe (Klasse, Projekt oder gespeicherte Sitzung), zu einem Layout eines Raums und, wenn Sie eines wählen, zu einem Fach. Dieselbe Klasse kann also in Mathematik anders sitzen als in Deutsch. Raum, Layout und Fach wählen Sie beim [Starten der Stunde](#stunde-starten). Für eine Sitzung gibt es erst dann einen Sitzplan, wenn Sie sie gespeichert haben.

<Audience roles="admin">

### Räume und Layouts anlegen

Räume und ihre Layouts legen Schuladministratoren und globale Administratoren an. Lehrkräfte sehen die Seite **Räume** nur lesend.

![Seite Räume mit Raumliste und einem Raum ohne Layout](/img/klassenraum/sitzplan-raeume.webp)

1. Öffnen Sie im Klassenraum links **Räume**.
2. Legen Sie oben rechts über **Raum anlegen** einen Raum an. Als globaler Administrator wählen Sie dabei auch die Schule.
3. Globale Administratoren sehen die Räume aller Schulen nach Schule gruppiert und können die Liste hier auf eine Schule einschränken.
4. Wählen Sie den Raum in der Liste aus.
5. Legen Sie über **Layout anlegen** das erste Layout des Raums an.
6. Über **Raum umbenennen** und **Raum löschen** bearbeiten Sie den ausgewählten Raum.

Ein Raum kann mehrere Layouts haben, zum Beispiel „Frontalunterricht“ und „Gruppentische“.

![Dialog Layout anlegen mit Name und Vorlage](/img/klassenraum/sitzplan-layout-anlegen.webp)

1. Geben Sie dem Layout einen **Namen**.
2. Wählen Sie eine **Vorlage**: **Leer beginnen**, eine der mitgelieferten Vorlagen (Frontalunterricht, Gruppentische, U-Form, Sitzkreis) oder eine Vorlage Ihrer Schule. Nur bei **Leer beginnen** wählen Sie zusätzlich die **Raumgröße**: Klein (12 × 8), Normal (20 × 12), Groß (28 × 16) oder eine eigene Größe. Eine Vorlage bringt ihre Größe mit.
3. Legen Sie das Layout mit **Erstellen** an.

#### Layout bearbeiten

![Layout-Editor mit Objektarten, Raster und Layouts des Raums](/img/klassenraum/sitzplan-editor.webp)

1. Wählen Sie oben eine Objektart und klicken Sie auf eine freie Zelle im Raster, um das Objekt dort zu setzen. Vorhandene Objekte ziehen Sie mit der Maus an eine andere Stelle.
2. Das Raster ist der Raum. Tische bringen ihre Sitzplätze mit, ein Doppeltisch zum Beispiel zwei. Die Zahl der Sitzplätze steht über dem Raster.
3. Vergrößern oder verkleinern Sie die Ansicht.
4. An den Rändern des Rasters ziehen Sie den Raum breiter, schmaler, höher oder flacher. Ziehen Sie am linken oder oberen Rand, rücken die Objekte mit.
5. Unter **Layouts dieses Raums** legen Sie weitere Layouts an, bearbeiten oder löschen das ausgewählte.
6. **Als Vorlage speichern** macht aus dem Layout eine Vorlage, die danach in dieser Schule für jeden Raum zur Auswahl steht. Sobald Ihre Schule eigene Vorlagen hat, erscheint oben rechts zusätzlich **Vorlagen**. Dort benennen Sie die Vorlagen um oder löschen sie.

Änderungen im Editor speichert edulution sofort, einen eigenen Speichern-Knopf gibt es nicht.

![Angeklicktes Objekt mit den Schaltflächen zum Drehen, Beschriften und Löschen](/img/klassenraum/sitzplan-editor-objekt.webp)

Klicken Sie ein Objekt an (1), erscheinen oben rechts seine Schaltflächen:

2. **Drehen** dreht das Objekt schrittweise weiter.
3. **Beschriften** gibt ihm eine eigene Beschriftung, zum Beispiel „PC 1“.
4. **Löschen** entfernt es aus dem Layout.
5. Am Griff unten rechts ziehen Sie das Objekt größer oder kleiner. Die Griffe an den Kanten ändern nur Breite oder Höhe.

:::warning[Belegte Plätze]
Löschen oder verkleinern Sie ein Objekt, auf dem schon Schüler sitzen, fragt edulution vorher nach. Die Schüler verlieren ihren Platz. Beim nächsten Öffnen der Stunde sieht die Lehrkraft einen Hinweis, wer betroffen ist.
:::

</Audience>

### Schüler auf Plätze setzen

![Raumplan im Unterricht mit Schülerliste und belegten Plätzen](/img/klassenraum/sitzplan-unterricht.webp)

1. Hier wechseln Sie zwischen **Alle Nutzer** (Kachelansicht) und **Raumplan**.
2. Raum und Layout der Stunde.
3. Das Fach. Jedes Fach hat seine eigene Sitzordnung.
4. Der Plan, siehe [Pläne und Varianten](#pläne-und-varianten).
5. **Zufällig platzieren** setzt alle Schüler ohne Platz auf zufällige freie Plätze. Wer schon sitzt, bleibt sitzen.
6. **Sitzordnung leeren** gibt nach einer Rückfrage alle Plätze frei. Das lässt sich nicht rückgängig machen.
7. Um einen Schüler zu setzen, klicken Sie ihn in der Liste an und danach einen freien Platz.
8. Belegte Plätze zeigen das Kürzel des Schülers. Den Namen sehen Sie, wenn Sie mit der Maus darauf zeigen.

![Ausgewählter Schüler im Raumplan mit freien Plätzen und seinen Schaltflächen](/img/klassenraum/sitzplan-platz.webp)

Ein Klick auf einen belegten Platz (1) wählt den Schüler aus, genau wie das Häkchen in der Liste. Die Aktionen oben (Austeilen, Einsammeln, Internet …) gelten dann für ihn, und die freien Plätze sind markiert:

2. Klicken Sie auf einen freien Platz, um den Schüler dorthin umzusetzen.
3. **Öffnen** zeigt den Schüler in der [Einzelansicht](#einzelansicht-eines-schülers).
4. **Platz freigeben** nimmt ihn von seinem Platz.

### Pläne und Varianten

![Planauswahl mit Standardplan, neuer Variante und der Variante Klassenarbeit](/img/klassenraum/sitzplan-varianten.webp)

1. Jede Gruppe hat je Layout und Fach einen **Standardplan**. Der Balken zeigt, wie viele Plätze belegt sind.
2. Über **Neue Variante …** legen Sie weitere benannte Pläne an, etwa für Klassenarbeiten, bis zu 20 je Layout. Eine neue Variante beginnt leer.
3. Ihre Varianten stehen unter **In diesem Layout**.
4. Über **…** benennen Sie die ausgewählte Variante um oder löschen sie. Der Standardplan und die anderen Varianten bleiben dabei unverändert.

Hat die Gruppe in einem anderen Layout schon Varianten, bietet die Liste deren Namen unter **Aus anderen Layouts übernehmen** an. Ein Klick legt im aktuellen Layout eine leere Variante mit diesem Namen an, ohne die Sitzordnung zu übernehmen.

### Was beim Löschen verloren geht

Sitzordnungen hängen an Räumen, Layouts, Fächern und Gruppen. Löschen Sie eines davon, verschwinden die zugehörigen Sitzordnungen mit. Die Löschdialoge weisen vorher darauf hin.

| Sie löschen … | Damit werden auch gelöscht … |
|---|---|
| einen Raum | seine Layouts und alle Sitzordnungen darin |
| ein Layout | die Sitzordnungen aller Gruppen in diesem Layout |
| ein Fach | die Sitzpläne dieses Fachs, siehe [Unterrichtsverwaltung](../../konfiguration/einstellungen.md#unterrichtsverwaltung) |
| eine Sitzung oder ein Projekt | ihre Sitzpläne in allen Räumen und Fächern |

<Audience roles="admin">

## Einrichtung (für Administratoren)

Die Bildschirmüberwachung setzt einen konfigurierten Veyon-WebAPI-Proxy voraus. Die Proxy-Adresse wird in den Einstellungen der Klassenraum-App hinterlegt und muss `https` verwenden (Ausnahmen für lokale Proxys siehe dort): [Einstellungen → Klassenraum (Veyon-Proxy)](../../konfiguration/einstellungen.md#klassenraum-veyon-proxy).

Den Sitzplan schalten Sie ebenfalls in den Einstellungen der Klassenraum-App ein: [Einstellungen → Klassenraum (Sitzplan)](../../konfiguration/einstellungen.md#klassenraum-sitzplan).

</Audience>

## Einschreiben

![Seite Einschreiben mit Klassen, Druckern und Projekten](/img/klassenraum/einschreiben.webp)

Hier schreiben Sie sich in Klassen, Druckergruppen und Projekte ein. Ein Häkchen auf der Karte schreibt Sie sofort ein, ein Klick auf ein gesetztes Häkchen schreibt Sie wieder aus. Die Klassen, in die Sie eingeschrieben sind, erscheinen beim [Starten einer Stunde](#stunde-starten) unter **Meine Klassen**.

1. Das Suchfeld filtert alle Karten.
2. **Klassen** – jede Karte zeigt die Zahl der Benutzer und die Schule.
3. **Drucker** – die Druckergruppen der Schule, sofern es welche gibt.
4. **Projekte** – jede Karte zeigt die Zahl der Admins und der Benutzer. Private Projekte tragen ein Schloss-Symbol.
5. Über die Unterpunkte links springen Sie direkt zu einem der drei Bereiche.

:::tip[Projekte nutzen]
Projekte sind ideal für:
- Oberstufenkurse
- AGs und Arbeitsgruppen
- Spezielle Lerngruppen

[Sophomorix Projects Doku](https://wiki.linuxmuster.net/community/anwenderwiki:sophomorix:sophomorix-project)
:::

## Klassenlisten

![Seite Klassenlisten mit Download als PDF oder CSV](/img/klassenraum/klassenlisten.webp)

Hier laden Sie die Schülerlisten Ihrer Klassen herunter.

1. Mit dem Häkchen wählen Sie eine Klasse aus.
2. **PDF** oder **CSV** neben einer Klasse lädt die Liste dieser einen Klasse herunter.
3. Haben Sie Klassen ausgewählt, laden **PDF** und **CSV** oben rechts die Listen aller ausgewählten Klassen auf einmal herunter.

## Meine Projekte

![Seite Meine Projekte](/img/klassenraum/projekte.webp)

Hier sehen Sie alle Projekte, in denen Sie Admin sind.

1. Das Suchfeld filtert die Projekte.
2. Ein Klick auf ein Projekt öffnet **Projekt bearbeiten** mit Name, Eigenschaften, Gruppenadministratoren und Gruppenbenutzern. Dort löschen Sie das Projekt auch. Ist der Sitzplan eingeschaltet, verschwinden dabei seine [Sitzpläne](#was-beim-löschen-verloren-geht) mit.
3. **Projekt erstellen** legt ein neues Projekt an.

## Passwörter drucken

![Seite Passwörter drucken mit Download als PDF oder CSV](/img/klassenraum/passwoerter.webp)

Hier erzeugen Sie Dateien mit den Zugangsdaten einer Klasse zum Ausdrucken.

1. Mit dem Häkchen wählen Sie eine Klasse aus.
2. **PDF** oder **CSV** neben einer Klasse erzeugt die Datei für diese eine Klasse.
3. Haben Sie Klassen ausgewählt, erzeugen **PDF** und **CSV** oben rechts eine Datei für alle ausgewählten Klassen zusammen.

:::tip[Verwendung]
Nützlich für:
- Schuljahresbeginn (neue Schüler)
- Nach Passwort-Reset
:::

## Linuxmuster-Konzepte

### Klassen vs. Projekte

| | Klassen | Projekte |
|---|---------|----------|
| **Verwendung** | Schulklassen (5a, 10b) | Kurse, AGs |
| **Verwaltung** | Automatisch | Manuell |
| **Mitglieder** | Alle Schüler | Ausgewählt |

### Weiterführende Links

- [Linuxmuster Schulkonsole](https://docs.linuxmuster.net/de/latest/systemadministration/schoolconsole/)
- [Sophomorix Basics](https://wiki.linuxmuster.net/archiv/dokumentation:sophomorix:basics)

## Siehe auch

- [Dashboard](../../uebersicht/dashboard.md) - Klassenübersicht
- [Einstellungen → Klassenraum (Veyon-Proxy)](../../konfiguration/einstellungen.md#klassenraum-veyon-proxy) - Bildschirmüberwachung einrichten
- [Einstellungen → Klassenraum (Sitzplan)](../../konfiguration/einstellungen.md#klassenraum-sitzplan) - Sitzplan einschalten
- [Linuxmuster verbinden](../../../edulution-server/installation.md)
