---
sidebar_position: 6
---

# Vorschau, Bearbeiten und Drucken

Viele Dateien lassen sich direkt in edulution ansehen, ohne sie vorher herunterzuladen. Text-, Markdown- und Audio-Dateien, Bilder, Videos, PDFs, Draw.io-Diagramme und Office-Dokumente werden in einem Vorschaufenster geöffnet – Textdateien können Sie von dort aus auch direkt ausdrucken.

## Vorschau öffnen

Klicken Sie in der Dateiliste auf den **Dateinamen**. Die Vorschau öffnet sich als Fenster neben der Dateiliste.

- Die Trennlinie zwischen Dateiliste und Vorschau können Sie mit der Maus verschieben
- Über die Symbole in der Titelleiste des Vorschaufensters steuern Sie die Ansicht:

| Symbol | Funktion |
|---|---|
| ↗ **In neuem Tab öffnen** | Öffnet die Datei in einem eigenen Browser-Tab |
| 🖨 **Drucken** | Öffnet den Druckdialog (nur bei textbasierten Dateien) |
| ✏️ **Bearbeiten** / 👁 **Ansehen** | Wechselt zwischen Ansicht und Bearbeitung |
| 💾 **Speichern** | Speichert Ihre Änderungen (nur im Bearbeitungsmodus) |
| ⧉ **Andocken lösen** | Löst die Vorschau als frei bewegliches Fenster |

:::info[Auf Mobilgeräten]
Auf Smartphones und Tablets öffnet sich die Vorschau bildschirmfüllend statt neben der Dateiliste. Wenn Sie das Gerät drehen und dadurch zwischen Mobil- und Desktop-Ansicht gewechselt wird, schließt sich die Vorschau – öffnen Sie die Datei danach einfach erneut.
:::

## Unterstützte Dateitypen

| Dateityp | Formate | Anzeige in der Vorschau |
|---|---|---|
| **Markdown** | `.md`, `.markdown` | Formatiert dargestellt (Überschriften, Listen, Tabellen, Links) |
| **Text und Code** | `.txt`, `.log`, `.csv`, `.json`, `.xml`, `.yaml`, `.html`, `.css`, `.py`, `.sql`, `.sh` und viele weitere | Als Text dargestellt |
| **PDF** | `.pdf` | Im PDF-Betrachter des Browsers |
| **Bilder** | `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg` | Als Bild |
| **Video** | `.mp4`, `.mov`, `.webm` | Mit Abspieler |
| **Audio** | `.mp3`, `.aac`, `.m4a`, `.wav` | Mit Abspieler |
| **Office-Dokumente** | `.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods`, `.odp` | In OnlyOffice, Euro-Office bzw. Collabora (sofern eingerichtet) |
| **Diagramme** | `.drawio`, `.dio` | Im Draw.io-Betrachter ([Anleitung](./drawio.md)) |

Bei allen anderen Dateitypen wird durch einen Klick auf den Namen die Datei ausgewählt statt eine Vorschau geöffnet. Laden Sie diese Dateien herunter, um sie zu öffnen.

## Office-Dokumente

Office-Dokumente setzen voraus, dass Ihr Administrator einen Dokumenten-Editor eingerichtet hat – [OnlyOffice](./konfiguration/onlyoffice.md) beziehungsweise Euro-Office oder [Collabora](./konfiguration/collabora.md). Ist keiner konfiguriert, lässt sich ein Office-Dokument nicht öffnen; PDF-Dateien öffnen sich unabhängig davon.

### Office-Dokumente auf dem Smartphone

OnlyOffice und Euro-Office lassen sich auf einem Smartphone beziehungsweise in einem sehr schmalen Browserfenster nicht sinnvoll bedienen. Tippen Sie dort auf ein Office-Dokument, erscheint deshalb der Hinweis *„Office-Dokumente lassen sich auf dem Smartphone nicht öffnen. Bitte nutzen Sie ein Tablet oder einen Computer."*, und das Dokument bleibt geschlossen. Auf einem Tablet öffnet es sich normal.

Ist Collabora als Dokumenten-Editor eingerichtet, gilt diese Einschränkung nicht – dort öffnen sich Office-Dokumente auch auf dem Smartphone. PDF-Dateien, Bilder, Medien- und Textdateien sind ebenfalls nicht betroffen.

## Text- und Markdown-Dateien

Textbasierte Dateien werden direkt im Vorschaufenster angezeigt:

- **Markdown-Dateien** werden formatiert dargestellt – Überschriften, Listen, Tabellen, Zitate und Links erscheinen so, wie sie gemeint sind. Welche Formatierungen möglich sind, zeigt die [Markdown-Hilfe](../../direkt-einsatzbereit/markdown-hilfe.md)
- **Alle anderen Textdateien** – etwa Protokolle, CSV-Listen oder Quelltexte – werden als reiner Text angezeigt

### Bearbeiten

Über das Stift-Symbol **Bearbeiten** wechseln Sie in den Bearbeitungsmodus, über das Augen-Symbol **Ansehen** wieder zurück. Bei Markdown-Dateien steht im Bearbeitungsmodus zusätzlich eine Werkzeugleiste für die gängigen Formatierungen zur Verfügung.

- Änderungen sichern Sie über **Speichern**
- Wenn Sie das Fenster schließen, in die Ansicht zurückwechseln oder die Datei in einem neuen Tab öffnen, ohne gespeichert zu haben, werden Sie gefragt, ob Sie die Änderungen speichern oder verwerfen möchten
- Bei Dateien aus einem Freigabe-Link erscheint die Schaltfläche **Bearbeiten** nur, wenn die Freigabe Schreibrechte erlaubt

:::tip[Sicherheit]
Der Inhalt von Text- und Markdown-Dateien wird vor der Anzeige bereinigt. Enthaltener HTML- oder Skriptcode wird nicht ausgeführt, sondern entfernt – so kann eine hochgeladene Datei im Browser keinen Schaden anrichten.
:::

## Drucken

Textbasierte Dateien können Sie direkt aus der Vorschau ausdrucken.

1. Öffnen Sie die Datei in der Vorschau
2. Achten Sie darauf, dass Sie sich in der **Ansicht** befinden (nicht im Bearbeitungsmodus) – nur dann wird das Drucker-Symbol angezeigt
3. Klicken Sie auf **Drucken** 🖨
4. Der Druckdialog Ihres Browsers öffnet sich

Gedruckt wird die formatierte Darstellung: Überschriften, Listen, Tabellen und Zitate behalten ihr Aussehen, Bedienelemente der Oberfläche werden nicht mitgedruckt. Als Dokumenttitel verwendet der Druckdialog den Dateinamen ohne Endung.

:::tip[Als PDF speichern]
Wählen Sie im Druckdialog als Ziel **Als PDF speichern**, um aus einer Markdown- oder Textdatei ein PDF zu erzeugen.
:::

Für andere Dateitypen gibt es kein Drucker-Symbol:

- **PDFs** drucken Sie über die Schaltflächen des PDF-Betrachters im Vorschaufenster
- **Office-Dokumente** drucken Sie über das Menü von OnlyOffice bzw. Collabora
- **Bilder und Medien** laden Sie zum Drucken herunter

## Bilder, Videos und Audiodateien

### Vorschaubilder in der Dateiliste

Bilddateien werden in der Dateiliste mit einem kleinen Vorschaubild statt eines allgemeinen Dateisymbols angezeigt – auf dem Smartphone genauso wie am Rechner. So finden Sie das gesuchte Bild, ohne jede Datei einzeln öffnen zu müssen.

- Die Vorschaubilder werden erst geladen, wenn Sie beim Scrollen in Sichtweite kommen
- Der Server erzeugt sie einmalig und legt sie zwischengespeichert ab, sodass ein erneuter Besuch des Ordners schneller ist
- Lässt sich für eine Datei kein Vorschaubild erzeugen, erscheint wieder das normale Dateisymbol

### Wiedergabe

Ein Klick auf den Dateinamen öffnet Bilder in voller Größe, Videos und Audiodateien mit einem Abspieler direkt im Vorschaufenster.

## PDF-Dateien

PDFs werden im PDF-Betrachter des Browsers geöffnet und nicht mehr an OnlyOffice übergeben. Damit gilt:

- Blättern, Zoomen, Suchen, Drucken und Herunterladen funktionieren wie in Ihrem Browser gewohnt
- Die Vorschau funktioniert auch dann, wenn OnlyOffice oder Collabora auf Ihrer Instanz **nicht** eingerichtet sind
- PDFs lassen sich auch auf Smartphones und Tablets ansehen

## Wenn die Vorschau fehlschlägt

Lässt sich der Inhalt einer Datei nicht laden, zeigt die Vorschau eine Fehlermeldung **Vorschau konnte nicht geladen werden** – anstatt dauerhaft eine Ladeanzeige zu drehen. Darunter stehen der Grund und der Name der betroffenen Datei, etwa *Zugriff verweigert*, wenn Ihnen die Berechtigung fehlt, oder *Nicht gefunden*, wenn die Datei inzwischen verschoben oder gelöscht wurde. Dieselbe Meldung erscheint, wenn Sie die Vorschau in einem eigenen Browser-Tab oder über einen Freigabe-Link geöffnet haben, und ebenso, wenn der Dokumenten-Editor ein Office-Dokument nicht öffnen konnte – das Vorschaufenster bleibt in diesem Fall nicht mehr leer.

## Häufige Fragen

**Ein Klick auf den Dateinamen wählt die Datei nur aus, statt eine Vorschau zu öffnen.**
Für diesen Dateityp gibt es keine Vorschau. Laden Sie die Datei herunter, um sie mit einem Programm auf Ihrem Gerät zu öffnen.

**Ein Office-Dokument lässt sich nicht öffnen.**
Für `.docx`, `.xlsx` und `.pptx` wird ein Dokumenten-Editor benötigt. Ist keiner eingerichtet, bleibt die Vorschau aus. Mit OnlyOffice oder Euro-Office öffnen sich Office-Dokumente zudem nicht auf dem Smartphone – auf einem Tablet dagegen schon, mit Collabora auch auf dem Smartphone. Siehe [Office-Dokumente](#office-dokumente).

**Das Drucker-Symbol fehlt.**
Es erscheint nur bei textbasierten Dateien und nur in der Ansicht. Wechseln Sie über das Augen-Symbol aus dem Bearbeitungsmodus zurück.

**Statt eines Vorschaubildes sehe ich das allgemeine Dateisymbol.**
Vorschaubilder werden nur für Bilddateien erzeugt. Bei sehr großen oder beschädigten Bildern kann die Erzeugung fehlschlagen – die Datei selbst bleibt davon unberührt.

## Siehe auch

- [Dateien](./index.md) – Übersicht über die Dateiverwaltung
- [Diagramme mit Draw.io](./drawio.md) – Diagramme ansehen und bearbeiten
- [Markdown-Hilfe](../../direkt-einsatzbereit/markdown-hilfe.md) – unterstützte Formatierungen
- [Browser Download-Einstellungen](./browser-download-einstellungen.md) – wenn Downloads blockiert werden
