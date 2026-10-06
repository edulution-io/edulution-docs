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
2. **Sitzung starten**, siehe [Stunde starten](#stunde-starten).
3. **Mitglieder hinzufügen**, siehe [Mitglieder hinzufügen](#mitglieder-hinzufügen).

## Unterricht

### Stunde starten

![Dialog Sitzung starten mit Klasse, Fach und Raum](/img/klassenraum/sitzplan-sitzung-starten.webp)

So starten Sie eine Stunde. Ist der [Sitzplan](#sitzplan) eingeschaltet, kommen die Schritte Fach und Raum hinzu.

1. Wählen Sie, womit Sie starten:
   - **Meine Klassen** – die Klassen, in die Sie [eingeschrieben](#einschreiben) sind
   - **Meine Projekte** – Ihre Projekte
   - **Mein Raum** – die Schüler in dem Raum, in dem Sie selbst gerade an einem Schulrechner angemeldet sind
   - **Meine Sitzungen** – Ihre gespeicherten Sitzungen
   - **Fächer** und **Räume** – nur mit Sitzplan
2. Wählen Sie die Klasse, das Projekt oder die Sitzung.
3. Wählen Sie das Fach oder **Ohne Fach**. Diesen Schritt gibt es nur, wenn die Schule Räume und [Fächer](../../konfiguration/einstellungen.md#unterrichtsverwaltung) hat.
4. Legen Sie Raum und Layout fest. **Ohne Raum starten** öffnet die Stunde in der Kachelansicht.
5. Wählen Sie **Starten**.

### Mitglieder hinzufügen

![Dialog Mitglieder hinzufügen mit Suche und Treffer](/img/klassenraum/mitglieder-hinzufuegen.webp)

Über **Mitglieder hinzufügen** nehmen Sie einzelne Schüler, ganze Klassen oder Projekte in die Stunde auf. Das geht auf der leeren Unterrichtsseite und während einer Stunde über das Personen-Symbol der Schülerliste.

1. Geben Sie einen Namen, eine Klasse oder ein Projekt ein.
2. Wählen Sie einen Treffer oder bestätigen Sie mit **Enter**.
3. Jede Auswahl wird sofort übernommen. Der Zähler zeigt, wie viele Einträge ausgewählt sind.

Haben Sie einer laufenden Klasse oder einem Projekt Personen hinzugefügt, fragt edulution beim Schließen, ob daraus eine Sitzung werden soll, und schlägt einen Namen vor, etwa „niclass_05-10“. Die Klasse oder das Projekt selbst bleibt dabei unverändert. Mit **Name ändern** wählen Sie einen anderen Namen, mit **Nicht jetzt** arbeiten Sie ohne gespeicherte Sitzung weiter. Gespeicherte Sitzungen finden Sie im Startdialog unter **Meine Sitzungen**. Eine geöffnete Sitzung ändern Sie über **Bearbeiten**.

Schüler aus Klassen, in die Sie nicht eingeschrieben sind, sehen Sie in der Stunde, können sie aber nicht steuern: Ihre Schalter sind ausgegraut. Über das Pfeil-Symbol in ihrer Zeile treten Sie der Klasse des Schülers bei.

### Arbeitsbereich

![Laufende Stunde in der Kachelansicht](/img/klassenraum/unterricht-kacheln.webp)

1. **Mitglieder hinzufügen**, siehe [Mitglieder hinzufügen](#mitglieder-hinzufügen).
2. **Alle auswählen**
3. Die Schülerliste mit Suchfeld und den [Schaltern je Schüler](#schalter-je-schüler).
4. Hier wechseln Sie zwischen **Alle Nutzer** (Kachelansicht) und **Raumplan**. Den Raumplan gibt es nur mit [Sitzplan](#sitzplan).
5. Jede Kachel zeigt einen Schüler mit seiner [Bildschirmvorschau](#bildschirmüberwachung-veyon).
6. **Neue Sitzung starten** öffnet wieder den Startdialog, **Stunde verlassen** kehrt zur leeren Unterrichtsseite zurück, **Neu laden** liest den Stand aller Schüler neu ein.

### Schalter je Schüler

![Schalter in einer Zeile der Schülerliste](/img/klassenraum/schueler-zeile.webp)

Grün bedeutet eingeschaltet, ein Klick schaltet um.

1. **Wifi**
2. **Web Filter**
3. **Internet**
4. **Intranet**
5. **Drucken**
6. **Klassenarbeitsmodus**
7. **Veyon** – öffnet die [Veyon-Aktionen](#bildschirmüberwachung-veyon). Ohne Verbindung zum Gerät ist das Symbol ausgegraut.
8. **Passwortoptionen**

### Aktionen für mehrere Schüler

![Ausgewählte Schüler und die Aktionsleiste](/img/klassenraum/aktionsleiste.webp)

Wählen Sie Schüler über ihre Häkchen (1) oder alle auf einmal (2) aus, zeigt die Aktionsleiste die Aktionen für diese Auswahl:

3. **Austeilen** und **Einsammeln** von Dateien sowie **Dateien anzeigen**
4. **Wifi**, **Web Filter**, **Internet**, **Intranet** und **Drucken**
5. **Klassenarbeitsmodus**

### Einzelansicht eines Schülers

![Einzelansicht eines Schülers mit großer Bildschirmvorschau](/img/klassenraum/einzelansicht.webp)

1. Klicken Sie in der Schülerliste auf einen Schüler.
2. Die Veyon-Aktionen **Bildschirm sperren**, **Eingabe sperren**, **System neu starten** und **System herunterfahren**.
3. Die große Bildschirmvorschau des Schülers.
4. Über **Alle Nutzer** kehren Sie zur Kachelansicht zurück.

### Ablauf einer Aktion

Solange eine Aktion läuft, ersetzt ein Ladekreis das Symbol der ausgelösten Funktion. Die übrigen Schalter desselben Schülers sind währenddessen gesperrt, behalten aber ihre Farbe, sodass Sie den Zustand des Schülers weiter ablesen können.

Nach Abschluss der Aktion lädt edulution den Stand des Schülers neu und zeigt den neuen Zustand. Schlägt die Aktion fehl, verschwindet der Ladekreis ebenfalls und die Schalter bleiben bedienbar.

Bei einer Massenaktion über die Aktionsleiste schließt sich der Dialog sofort nach der Bestätigung, und die Aktion läuft im Hintergrund weiter. Der Ladekreis erscheint dabei bei allen ausgewählten Schülern. Anschließend wird ihr Stand neu geladen.

### Bildschirmüberwachung (Veyon)

Ist ein Veyon-Proxy hinterlegt, zeigt jede Kachel automatisch eine kleine Live-Vorschau des Schülerbildschirms. Über das Symbol zum Vergrößern öffnen Sie die Vorschau in einem eigenen Fenster, das häufiger aktualisiert wird. Eine große Vorschau zeigt auch die [Einzelansicht](#einzelansicht-eines-schülers).

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

Mit dem Sitzplan bilden Sie ein Klassenzimmer samt Tischen, Tafel, Türen, Fenstern und weiteren Objekten auf einem Raster nach und setzen Ihre Schüler im Unterricht auf feste Plätze. Ein Administrator schaltet den Sitzplan in den [Einstellungen der Klassenraum-App](../../konfiguration/einstellungen.md#klassenraum-sitzplan) ein. Erst dann erscheint im Klassenraum der Menüpunkt **Räume**. Räume und Layouts legen Schuladministratoren und globale Administratoren an, Lehrkräfte sehen sie dort nur lesend. Den Raumplan im Unterricht gibt es nur, wenn edulution an Linuxmuster angebunden ist.

Eine Sitzordnung gehört immer zu einer Gruppe (Klasse, Projekt oder gespeicherte Sitzung), zu einem Layout eines Raums und, wenn Sie eines wählen, zu einem Fach. Dieselbe Klasse kann also in Mathematik anders sitzen als in Deutsch. Raum, Layout und Fach wählen Sie beim [Starten der Stunde](#stunde-starten). Für eine Sitzung gibt es erst dann einen Sitzplan, wenn Sie sie gespeichert haben.

<Audience roles="admin">

### Räume und Layouts anlegen

![Seite Räume mit Raumliste und einem Raum ohne Layout](/img/klassenraum/sitzplan-raeume.webp)

1. Öffnen Sie im Klassenraum **Räume**.
2. Legen Sie über **Raum anlegen** einen Raum an. Als globaler Administrator wählen Sie dabei auch die Schule.
3. Globale Administratoren sehen die Räume aller Schulen nach Schule gruppiert und können die Liste hier auf eine Schule einschränken.
4. Wählen Sie den Raum in der Liste aus.
5. Legen Sie über **Layout anlegen** das erste Layout des Raums an.
6. Über **Raum umbenennen** und **Raum löschen** bearbeiten Sie den ausgewählten Raum. Was beim Löschen mit verloren geht, steht unter [Was beim Löschen verloren geht](#was-beim-löschen-verloren-geht).

Ein Raum kann mehrere Layouts haben, zum Beispiel „Frontalunterricht“ und „Gruppentische“.

![Dialog Layout anlegen mit Name und Vorlage](/img/klassenraum/sitzplan-layout-anlegen.webp)

1. Geben Sie dem Layout einen **Namen**.
2. Wählen Sie eine **Vorlage**: **Leer beginnen**, eine der mitgelieferten Vorlagen (Frontalunterricht, Gruppentische, U-Form, Sitzkreis) oder eine Vorlage Ihrer Schule. Nur bei **Leer beginnen** wählen Sie zusätzlich die **Raumgröße**: Klein (12 × 8), Normal (20 × 12), Groß (28 × 16) oder **Eigene Größe** mit 4 bis 40 Spalten und Zeilen. Die erste Zahl ist jeweils die Zahl der Spalten. Eine Vorlage bringt ihre Größe mit.
3. Legen Sie das Layout mit **Erstellen** an.

#### Layout bearbeiten

![Layout-Editor mit Objektarten, Raster und Layouts des Raums](/img/klassenraum/sitzplan-editor.webp)

1. Wählen Sie eine Objektart und klicken Sie auf eine freie Zelle im Raster, um das Objekt dort zu setzen. Vorhandene Objekte ziehen Sie mit der Maus an eine andere Stelle.
2. Das Raster ist der Raum. Tische bringen ihre Sitzplätze mit, ein Doppeltisch zum Beispiel zwei.
3. Vergrößern oder verkleinern Sie die Ansicht.
4. An den Rändern des Rasters ziehen Sie den Raum breiter, schmaler, höher oder flacher. Ziehen Sie am linken oder oberen Rand, rücken die Objekte mit.
5. Unter **Layouts dieses Raums** legen Sie weitere Layouts an, bearbeiten oder löschen das ausgewählte.
6. **Als Vorlage speichern** macht aus dem Layout eine Vorlage, die danach in dieser Schule für jeden Raum zur Auswahl steht. Sobald Ihre Schule eigene Vorlagen hat, erscheint im Editor zusätzlich **Vorlagen**. Dort benennen Sie die Vorlagen um oder löschen sie.

edulution speichert jede Änderung im Editor sofort.

![Angeklicktes Objekt mit den Schaltflächen zum Drehen, Beschriften und Löschen](/img/klassenraum/sitzplan-editor-objekt.webp)

Klicken Sie ein Objekt an (1), erscheinen seine Schaltflächen:

2. Dreht das Objekt schrittweise weiter.
3. Gibt dem Objekt eine eigene Beschriftung, zum Beispiel „PC 1“.
4. Entfernt das Objekt aus dem Layout.
5. Am Eckgriff ziehen Sie das Objekt größer oder kleiner. Die Griffe an den Kanten ändern nur Breite oder Höhe.

:::warning[Belegte Plätze]
Löschen oder verkleinern Sie ein Objekt, auf dem schon Schüler sitzen, fragt edulution vorher nach. Die Schüler verlieren ihren Platz.
:::

</Audience>

### Schüler auf Plätze setzen

![Raumplan im Unterricht mit Schülerliste und belegten Plätzen](/img/klassenraum/sitzplan-unterricht.webp)

1. Wechseln Sie auf **Raumplan**.
2. Raum und Layout der Stunde.
3. Das Fach der Stunde.
4. Der Plan, siehe [Pläne und Varianten](#pläne-und-varianten).
5. **Zufällig platzieren** setzt alle Schüler ohne Platz auf zufällige freie Plätze. Wer schon sitzt, bleibt sitzen.
6. **Sitzordnung leeren** gibt nach einer Rückfrage alle Plätze frei. Das lässt sich nicht rückgängig machen.
7. Um einen Schüler zu setzen, klicken Sie ihn in der Liste an und danach einen freien Platz.
8. Belegte Plätze zeigen das Kürzel des Schülers. Den Namen sehen Sie, wenn Sie mit der Maus darauf zeigen.

![Ausgewählter Schüler im Raumplan mit freien Plätzen und seinen Schaltflächen](/img/klassenraum/sitzplan-platz.webp)

Ein Klick auf einen belegten Platz (1) wählt den Schüler aus, genau wie das Häkchen in der Liste. Die [Aktionen der Aktionsleiste](#aktionen-für-mehrere-schüler) gelten dann für ihn, und die freien Plätze sind markiert:

2. Klicken Sie auf einen freien Platz, um den Schüler dorthin umzusetzen.
3. **Öffnen** zeigt den Schüler in der [Einzelansicht](#einzelansicht-eines-schülers).
4. **Platz freigeben** nimmt ihn von seinem Platz.

### Pläne und Varianten

![Planauswahl mit Standardplan, neuer Variante und der Variante Klassenarbeit](/img/klassenraum/sitzplan-varianten.webp)

1. Jede Gruppe hat je Layout und Fach einen **Standardplan**. Der Balken zeigt, wie viele Plätze belegt sind.
2. Über **Neue Variante …** legen Sie weitere benannte Pläne an, etwa für Klassenarbeiten, bis zu 20 je Layout und Fach, den Standardplan nicht mitgezählt. Eine neue Variante beginnt leer.
3. Ihre Varianten stehen unter **In diesem Layout**.
4. Über **…** benennen Sie die ausgewählte Variante um oder löschen sie.

Hat die Gruppe in einem anderen Layout schon Varianten, bietet die Liste deren Namen unter **Aus anderen Layouts übernehmen** an. Ein Klick legt im aktuellen Layout eine leere Variante mit diesem Namen an, ohne die Sitzordnung zu übernehmen.

### Was beim Löschen verloren geht

Sitzordnungen hängen an Räumen, Layouts, Fächern und Gruppen. Löschen Sie eines davon, verschwinden die zugehörigen Sitzordnungen mit. Die Löschdialoge weisen vorher darauf hin.

| Sie löschen … | Damit werden auch gelöscht … |
|---|---|
| einen Raum | seine Layouts und alle Sitzordnungen darin |
| ein Layout | die Sitzordnungen aller Gruppen in diesem Layout |
| ein Fach | die Sitzpläne dieses Fachs, siehe [Unterrichtsverwaltung](../../konfiguration/einstellungen.md#unterrichtsverwaltung) |
| eine Sitzung oder ein Projekt | ihre Sitzpläne in allen Räumen und Fächern |

Löscht oder verkleinert ein Administrator im Layout ein Objekt, auf dem Schüler sitzen, verlieren diese ihren Platz. Beim nächsten Öffnen der Stunde zeigt edulution einen Hinweis, wer betroffen ist. Setzen Sie diese Schüler neu.

<Audience roles="admin">

## Einrichtung (für Administratoren)

Die Bildschirmüberwachung setzt einen konfigurierten Veyon-WebAPI-Proxy voraus. Die Proxy-Adresse wird in den Einstellungen der Klassenraum-App hinterlegt und muss `https` verwenden (Ausnahmen für lokale Proxys siehe dort): [Einstellungen → Klassenraum (Veyon-Proxy)](../../konfiguration/einstellungen.md#klassenraum-veyon-proxy).

</Audience>

## Einschreiben

![Seite Einschreiben mit Klassen, Druckern und Projekten](/img/klassenraum/einschreiben.webp)

Hier schreiben Sie sich in Klassen, Druckergruppen und Projekte ein. Aktivieren Sie das Häkchen auf einer Karte, sind Sie sofort eingeschrieben. Deaktivieren Sie es, sind Sie wieder ausgeschrieben.

1. Das Suchfeld filtert alle Karten.
2. **Klassen**
3. **Drucker** – die Druckergruppen der Schule, sofern es welche gibt.
4. **Projekte** – private Projekte tragen ein Schloss-Symbol.
5. Über die Unterpunkte in der Seitenleiste springen Sie direkt zu einem der drei Bereiche.

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
3. Haben Sie Klassen ausgewählt, laden **PDF** und **CSV** in der Kopfzeile der Seite die Listen aller ausgewählten Klassen auf einmal herunter.

## Meine Projekte

![Seite Meine Projekte](/img/klassenraum/projekte.webp)

Hier sehen Sie alle Projekte, in denen Sie Admin sind.

1. Das Suchfeld filtert die Projekte.
2. Ein Klick auf ein Projekt öffnet **Projekt bearbeiten**. Dort löschen Sie das Projekt auch. Ist der Sitzplan eingeschaltet, verschwinden dabei seine [Sitzpläne](#was-beim-löschen-verloren-geht) mit.
3. **Projekt erstellen** legt ein neues Projekt an.

## Passwörter drucken

![Seite Passwörter drucken mit Download als PDF oder CSV](/img/klassenraum/passwoerter.webp)

Hier erzeugen Sie Dateien mit den Zugangsdaten einer Klasse zum Ausdrucken.

1. Mit dem Häkchen wählen Sie eine Klasse aus.
2. **PDF** oder **CSV** neben einer Klasse erzeugt die Datei für diese eine Klasse.
3. Haben Sie Klassen ausgewählt, erzeugen **PDF** und **CSV** in der Kopfzeile der Seite eine Datei für alle ausgewählten Klassen zusammen.

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

- [Dashboard](../../uebersicht/dashboard.md) – Klassenübersicht
- [Einstellungen → Klassenraum (Veyon-Proxy)](../../konfiguration/einstellungen.md#klassenraum-veyon-proxy) – Bildschirmüberwachung einrichten
- [Einstellungen → Klassenraum (Sitzplan)](../../konfiguration/einstellungen.md#klassenraum-sitzplan) – Sitzplan einschalten
- [Linuxmuster verbinden](../../../edulution-server/installation.md)
