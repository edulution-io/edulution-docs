# Dateien

Die Dateiverwaltung funktioniert wie ein klassischer Datei-Explorer mit allen wichtigen Funktionen für den Schulalltag.

![Dateien Übersicht](/img/dateien/dateien-overview.png)

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

![Dateien hochladen](/img/dateien/dateien-upload.png)

Klicken Sie auf **Hochladen** (unten):
- Dateien per Drag & Drop in den Bereich ziehen
- Oder **Dateien hinzufügen** klicken
- Mehrere Dateien gleichzeitig möglich

## Ordner erstellen

![Ordner erstellen](/img/dateien/dateien-ordner-erstellen.png)

Klicken Sie auf **Ordner erstellen** (unten):
1. Geben Sie einen Namen ein
2. Klicken Sie auf **Erstellen**

## Neue Dateien erstellen

![Neue Datei erstellen](/img/dateien/dateien-neu-erstellen.png)

Klicken Sie auf **Datei erstellen** (unten) und wählen Sie:
- 📊 **Neue Draw.io-Datei** - Diagramme zeichnen
- 📄 **Neue Textdatei** - Einfache Texte
- 📘 **Neues Dokument** - Word-Dokument (OnlyOffice)
- 📗 **Neue Tabelle** - Excel-Tabelle (OnlyOffice)
- 📙 **Neue Präsentation** - PowerPoint (OnlyOffice)

## Aktionen mit Dateien

![Datei-Aktionen](/img/dateien/dateien-aktionen.png)

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

### Dateigröße {#dateigröße}

Die maximale Upload-Größe hängt davon ab, ob FileProxy eingerichtet ist:

| Methode | Upload-Limit |
|---------|--------------|
| **Standard (Linuxmuster)** | ~50 MB pro Datei |
| **Mit FileProxy** | Unbegrenzt* |

\* *Abhängig von verfügbarem Speicherplatz und Quotas*

**FileProxy einrichten:**
Um große Dateien hochladen zu können (Videos, Backups, große Projekte), richten Sie den [edulution FileProxy](../../edulution-fileproxy/ui-config.md) ein. Dieser bietet:
- Unbegrenzte Upload-Größe
- Deutlich höhere Performance
- Schnellere Up- und Downloads

### Speicherplatz
Überprüfen Sie Ihre Quota im [Dashboard](dashboard.md#quotas)

### Unterstützte Formate
Alle Dateiformate sind möglich. Direkt bearbeiten können Sie:
- Dokumente (.docx, .odt)
- Tabellen (.xlsx, .ods)
- Präsentationen (.pptx, .odp)

## Siehe auch

- [Dashboard](dashboard.md) - Speichernutzung anzeigen
- [Mobile App](mobile-app.md) - Dateien mobil synchronisieren
- [Ressourcen-Bibliothek](ressourcen-bibliothek.md) - HTML/JS/CSS hochladen
