# Dateien

Die Dateiverwaltung funktioniert wie ein klassischer Datei-Explorer mit allen wichtigen Funktionen für den Schulalltag.

## Navigation

### Pfad (Breadcrumb)
Am oberen Rand sehen Sie den aktuellen Pfad: `Home > agy > teachers > agy-netzint-teacher`
- Klicken Sie auf einen Teil des Pfades, um dorthin zu springen

### Seitenleiste
- **Home**: Ihr persönliches Verzeichnis
- **Geteilte Dateien**: Von anderen geteilte Dateien

### Suche
- Suchfeld oben: "Tippen, um zu filtern"
- Filtert Dateinamen in Echtzeit

## Dateien hochladen

Klicken Sie unten rechts auf **Neu** (Plus-Symbol) und wählen Sie **Hochladen**:
- Dateien per Drag & Drop in den Bereich ziehen
- Oder **Dateien hinzufügen** klicken
- Mehrere Dateien gleichzeitig möglich


Vor der Übertragung prüft edulution die Auswahl: Dateinamen mit unzulässigen Zeichen werden abgewiesen, und bereits vorhandene Dateien werden vor dem Überschreiben aufgelistet. Alle Regeln dazu stehen unter [Schutzmechanismen beim Hochladen](./dateien/upload-schutzmechanismen.md).

## Ordner erstellen

Klicken Sie unten rechts auf **Neu** (Plus-Symbol) und wählen Sie **Ordner erstellen**:
1. Geben Sie einen Namen ein
2. Klicken Sie auf **Erstellen**

## Neue Dateien erstellen

Klicken Sie unten rechts auf **Neu** (Plus-Symbol) und wählen Sie:
- 📊 **Neue Draw.io-Datei** - Diagramme zeichnen ([Anleitung](./drawio.md))
- 📄 **Neue Textdatei** - Einfache Texte
- 📘 **Neues Dokument** - Word-Dokument (OnlyOffice)
- 📗 **Neue Tabelle** - Excel-Tabelle (OnlyOffice)
- 📙 **Neue Präsentation** - PowerPoint (OnlyOffice)
- 📃 **Andere Datei** - Beliebige Endung selbst eingeben

### Weitere Dateitypen

Über **Weitere Dateitypen** klappen Sie eine Liste vorbereiteter Endungen auf. Damit legen Sie eine leere Datei mit passendem Dateityp an:

`.bat` · `.cfg` · `.css` · `.csv` · `.env` · `.html` · `.ini` · `.js` · `.json` · `.md` · `.ps1` · `.py` · `.sh` · `.toml` · `.xml` · `.yaml` · `.yml`

Ist die gewünschte Endung nicht dabei, wählen Sie **Andere Datei**. Im Dialog erscheint neben dem Namensfeld ein zusätzliches Feld `.ext`, in das Sie die Endung eintragen.

## Dateivorschau

Ein Klick auf den Dateinamen öffnet die Datei in der Vorschau. Vorschaufähig sind Bilder, Video- und Audiodateien, PDF-Dateien, Textdateien, Draw.io-Diagramme und Office-Dokumente. Bei allen übrigen Formaten bleibt der Klick wirkungslos – diese Dateien können Sie nur herunterladen. Über die Schaltflächen in der Titelleiste der Vorschau öffnen Sie die Datei zusätzlich in einem eigenen Browser-Tab.

Office-Dokumente setzen voraus, dass Ihr Administrator einen Dokumenten-Editor eingerichtet hat – [OnlyOffice](../../../edulution-onlyoffice/index.md) beziehungsweise Euro-Office oder [Collabora](../../../edulution-collabora/index.md). Ist keiner konfiguriert, lässt sich ein Office-Dokument nicht öffnen; PDF-Dateien öffnen sich unabhängig davon.

### Office-Dokumente auf dem Smartphone

OnlyOffice und Euro-Office lassen sich auf einem Smartphone beziehungsweise in einem sehr schmalen Browserfenster nicht sinnvoll bedienen. Tippen Sie dort auf ein Office-Dokument, erscheint deshalb der Hinweis *„Office-Dokumente lassen sich auf dem Smartphone nicht öffnen. Bitte nutzen Sie ein Tablet oder einen Computer."*, und das Dokument bleibt geschlossen. Auf einem Tablet öffnet es sich normal.

Ist Collabora als Dokumenten-Editor eingerichtet, gilt diese Einschränkung nicht – dort öffnen sich Office-Dokumente auch auf dem Smartphone. PDF-Dateien, Bilder, Medien- und Textdateien sind ebenfalls nicht betroffen.

### Wenn die Vorschau fehlschlägt

Lässt sich der Inhalt einer Datei nicht laden, zeigt die Vorschau eine Fehlermeldung **Vorschau konnte nicht geladen werden** – anstatt dauerhaft eine Ladeanzeige zu drehen. Darunter stehen der Grund und der Name der betroffenen Datei, etwa *Zugriff verweigert*, wenn Ihnen die Berechtigung fehlt, oder *Nicht gefunden*, wenn die Datei inzwischen verschoben oder gelöscht wurde. Dieselbe Meldung erscheint, wenn Sie die Vorschau in einem eigenen Browser-Tab oder über einen Freigabe-Link geöffnet haben, und ebenso, wenn der Dokumenten-Editor ein Office-Dokument nicht öffnen konnte – das Vorschaufenster bleibt in diesem Fall nicht mehr leer.

## Aktionen mit Dateien

Wenn Sie eine Datei auswählen (Checkbox), erscheinen folgende Aktionen:

- **Löschen** - Datei/Ordner löschen
- **Verschieben** - In anderen Ordner verschieben
- **Umbenennen** - Namen ändern
- **Herunterladen** - Auf Computer speichern
- **Kopieren** - Datei duplizieren
- **Teilen** - Freigabe-Link erstellen

### Teilen (Sharing)

Beim Teilen können Sie festlegen:
- **Sichtbarkeit**: Öffentlich oder Eingeschränkt
- **Passwortschutz**: Optional Passwort setzen
- **Ablaufdatum**: Zeitlich begrenzter Zugriff

## Wichtige Hinweise

### Dateigröße

Die maximale Upload-Größe hängt davon ab, ob FileProxy eingerichtet ist:

| Methode | Upload-Limit |
|---------|--------------|
| **Standard (Linuxmuster)** | ~50 MB pro Datei |
| **Mit FileProxy** | Unbegrenzt* |

\* *Abhängig von verfügbarem Speicherplatz und Quotas*

**FileProxy einrichten:**
Um große Dateien hochladen zu können (Videos, Backups, große Projekte), richten Sie den [edulution FileProxy](../../../edulution-fileproxy/ui-config.md) ein. Dieser bietet:
- Unbegrenzte Upload-Größe
- Deutlich höhere Performance
- Schnellere Up- und Downloads

### Speicherplatz
Überprüfen Sie Ihre Quota im [Dashboard](../dashboard.md#quotas)

### Unterstützte Formate
Alle Dateiformate sind möglich. Direkt bearbeiten können Sie:
- Dokumente (.docx, .odt)
- Tabellen (.xlsx, .ods)
- Präsentationen (.pptx, .odp)

## WebDAV-Zugang

![WebDAV-Zugang Button](/img/dateien/dateien-webdav-zugang.png)

Sie können Ihre Dateien auch direkt über den Dateimanager Ihres Betriebssystems öffnen. In der Dateien-App finden Sie unter **WebDAV-Zugang** die benötigten Verbindungsdaten:

- **WebDAV-URL (Windows / macOS)**: URL im `https://`-Format
- **WebDAV-URL (Linux)**: URL im `davs://`-Format
- **Benutzername**: Ihr Schul-Benutzername
- **Passwort**: Ihr normales Anmeldepasswort

### Anleitungen nach Betriebssystem

- [Windows Datei-Explorer](./webdav-windows.md) - Netzlaufwerk einbinden
- [macOS Finder](./webdav-macos.md) - Mit Server verbinden
- [Linux Dateimanager](./webdav-linux.md) - GNOME, KDE und andere

## Siehe auch

- [Dashboard](../dashboard.md) - Speichernutzung anzeigen
- [Mobile App](../mobile-app.md) - Dateien mobil synchronisieren
- [Eingebettete App](../eingebettete-app.md) - HTML/JS/CSS hochladen
- [Schutzmechanismen beim Hochladen](./dateien/upload-schutzmechanismen.md) - Dateinamen, Duplikate und Bildumwandlung
