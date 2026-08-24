---
sidebar_position: 1
---

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

### Ansicht, Tastatur und Filter
- **Tabellen- oder Kachelansicht**: Umschalter rechts über der Dateiliste, die Wahl bleibt gespeichert
- **Pfeiltasten**: Durch die Liste blättern, **Enter** öffnet das markierte Element
- **Anzahl der Elemente**: Unter der Liste steht, wie viele Elemente angezeigt bzw. ausgewählt sind
- **Filter**: System- und versteckte Dateien einblenden und einzelne Dateikategorien ausblenden

Alle Details finden Sie unter [Ansicht und Navigation](./ansicht-und-navigation.md).

## Dateien hochladen

Klicken Sie unten rechts auf **Neu** (Plus-Symbol) und wählen Sie **Hochladen**:
- Dateien per Drag & Drop in den Bereich ziehen
- Oder **Dateien hinzufügen** klicken
- Mehrere Dateien gleichzeitig möglich


Vor der Übertragung prüft edulution die Auswahl: Dateinamen mit unzulässigen Zeichen werden abgewiesen, und bereits vorhandene Dateien werden vor dem Überschreiben aufgelistet. Alle Regeln dazu stehen unter [Schutzmechanismen beim Hochladen](./upload-schutzmechanismen.md).

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

## Aktionen mit Dateien

Wenn Sie eine Datei auswählen (Checkbox), erscheinen folgende Aktionen:

- **Löschen** - Datei/Ordner löschen
- **Verschieben** - In anderen Ordner verschieben
- **Umbenennen** - Namen ändern
- **Herunterladen** - Auf Computer speichern
- **Kopieren** - Datei duplizieren
- **Teilen** - Freigabe-Link erstellen

### In App öffnen [tags: ios, android]

Rufen Sie die Dateiverwaltung über die [edulution.io App](/docs/edulution-app/) auf, kommt die Aktion **In App öffnen** hinzu. Die Datei wird an die App übergeben und dort mit den Mitteln des Betriebssystems angezeigt – unter iOS über die Dateien-App. Im Browser entfällt die Aktion, ebenso in App-Versionen älter als 2.0.

Siehe auch [Mobile App & Tablet-Nutzung](../native-apps/mobile-app.md).

### Teilen (Sharing)

Beim Teilen legen Sie in **Bereichen** fest, wer Zugriff bekommt und was dort erlaubt ist:
- **Sichtbarkeit** je Bereich: Öffentlich (jeder mit dem Link) oder Eingeschränkt (ausgewählte Benutzer und Gruppen)
- **Berechtigungen** je Bereich: von **Nur ansehen** über **Bearbeiten** bis **Vollzugriff**
- **Passwortschutz**: Optional Passwort setzen
- **Ablaufdatum**: Zeitlich begrenzter Zugriff

Freigegebene Inhalte lassen sich außerdem direkt in edulution unter **Geteilte Dateien** öffnen – ganz ohne Freigabe-Link. Alle Details finden Sie unter [Teilen und Berechtigungen](./teilen.md).

## Wichtige Hinweise

### Dateigröße

Die maximale Upload-Größe hängt davon ab, ob FileProxy eingerichtet ist:

| Methode | Upload-Limit |
|---------|--------------|
| **Standard (Linuxmuster)** | ~50 MB pro Datei |
| **Mit FileProxy** | Unbegrenzt* |

\* *Abhängig von verfügbarem Speicherplatz und Quotas*

**FileProxy einrichten:**
Um große Dateien hochladen zu können (Videos, Backups, große Projekte), richten Sie den [edulution FileProxy](./konfiguration/fileproxy/ui-config.md) ein. Dieser bietet:
- Unbegrenzte Upload-Größe
- Deutlich höhere Performance
- Schnellere Up- und Downloads

### Speicherplatz
Ihre Speichernutzung steht am unteren Rand der Menüleiste: Schulname, Fortschrittsbalken und die belegten GB. Wird der Platz knapp, erscheint eine Warnung unter der Überschrift **Dateien**; bei sehr geringer Quota werden Hochladen und Erstellen ausgeblendet und Freigaben lassen sich nicht mehr mit Schreibrechten versehen.

Alle Details finden Sie unter [Speicherplatz und Quota](./speicherplatz-und-quota.md), die berechneten Cloud- und E-Mail-Quotas im [Dashboard](../../erste-schritte/dashboard.md#quotas).

### Unterstützte Formate
Alle Dateiformate sind möglich. Direkt bearbeiten können Sie:
- Dokumente (.docx, .odt)
- Tabellen (.xlsx, .ods)
- Präsentationen (.pptx, .odp)
- Text- und Markdown-Dateien (.txt, .md und weitere)
- Diagramme (.drawio)

Ansehen können Sie außerdem PDFs, Bilder, Videos, Audiodateien und Draw.io-Diagramme – ein Klick auf den Dateinamen genügt. Bei allen übrigen Formaten bleibt der Klick wirkungslos; diese Dateien können Sie nur herunterladen. Wie das Vorschaufenster funktioniert, welche Voraussetzungen Office-Dokumente haben und wie Sie textbasierte Dateien ausdrucken, steht unter [Vorschau und Drucken](./vorschau-und-drucken.md).

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

- [Vorschau und Drucken](./vorschau-und-drucken.md) - Dateien ansehen und ausdrucken
- [Dashboard](../../erste-schritte/dashboard.md) - Speichernutzung anzeigen
- [Mobile App](../native-apps/mobile-app.md) - Dateien mobil synchronisieren
- [Eingebettete App](../native-apps/eingebettete-app.md) - HTML/JS/CSS hochladen
- [Schutzmechanismen beim Hochladen](./upload-schutzmechanismen.md) - Dateinamen, Duplikate und Bildumwandlung
