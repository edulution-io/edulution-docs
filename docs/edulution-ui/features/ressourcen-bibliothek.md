# Ressourcen-Bibliothek

Die Ressourcen-Bibliothek ermöglicht das Erstellen und Teilen von Webinhalten sowie das Hochladen eigener Web-Anwendungen.

![Ressourcen-Bibliothek](/img/features/ressourcen-bib.jpeg)

## Übersicht

Die Ressourcen-Bibliothek ist ein vielseitiges Tool zum:
- Erstellen eigener Webanwendungen
- Hochladen von HTML/JS/CSS-Dateien
- Einbetten von interaktiven Inhalten
- Teilen von Lernressourcen

## Modi

### Sparstes Layout

Der Inhalt wird als eigenständige Seite angezeigt, ähnlich wie ein Fenster innerhalb der Anwendung. Dieser Modus eignet sich für:
- Einfache Inhalte
- Minimale Ablenkung
- Fokussierte Darstellung

### Eigene Webanwendung

Erstellen Sie eigene Webanwendungen im Editor mit vollständiger Kontrolle über HTML, JavaScript und CSS.

#### Was Sie tun können:

- Webseiten mit HTML erstellen
- Inhalte formatieren und stylen mit CSS
- Interaktivität hinzufügen mit JavaScript
- Designelemente einbetten
- Interaktive Anwendungen entwickeln

#### Unterstützte Technologien:

- **HTML**: Struktur und Inhalt
- **CSS**: Styling und Layout
- **JavaScript**: Interaktivität und Logik
- Externe Bibliotheken (CDN-Links)

## Dateien hochladen

![Datei-Upload](/img/features/ressourcen-bib.jpeg)

### Datei-Verwaltung

Die integrierte Dateiverwaltung zeigt alle hochgeladenen Dateien in einer übersichtlichen Tabelle:

| Spalte | Beschreibung |
|--------|--------------|
| **Dateiname** | Name der hochgeladenen Datei |
| **Größe** | Dateigröße in KB/MB |
| **Typ** | Dateityp (HTML, JS, CSS, etc.) |
| **Zuletzt geändert** | Upload-/Änderungsdatum |

### Upload-Prozess

1. Klicken Sie auf das **+** Symbol
2. Wählen Sie Ihre Dateien aus (HTML, JS, CSS)
3. Dateien werden hochgeladen und in der Tabelle angezeigt
4. Verwalten Sie Dateien über die Tabellenoptionen

### Funktionen

- **Suche nach Dateiname**: Schnelles Auffinden von Dateien
- **Spalten sortierbar**: Sortierung nach Name, Größe, Typ oder Datum
- **Löschen**: Entfernen nicht benötigter Dateien
- **Speichern**: Änderungen sichern

## Eigene Web-App erstellen

### Beispiel: Einfache HTML-App

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meine Lern-App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Willkommen zu meiner Lern-App</h1>
    <div id="content">
        <!-- Ihr Inhalt hier -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Beispiel: Interaktive Anwendung

```javascript
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Ihre JavaScript-Logik
    const content = document.getElementById('content');
    content.innerHTML = 'Interaktiver Inhalt geladen!';
});
```

### Beispiel: Styling

```css
/* style.css */
body {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    text-align: center;
}
```

## Integration mit Etherpad & Frame

Die Ressourcen-Bibliothek arbeitet eng mit anderen edulution-Features zusammen:

### Etherpad
- Kollaboratives Bearbeiten von Inhalten
- Mehrere Benutzer können gleichzeitig arbeiten
- Versionierung und Änderungsverlauf

### Frame
- Einbettung externer Anwendungen
- iFrame-basierte Integration
- Nahtlose Integration in edulution UI

## Anwendungsfälle

### Lernressourcen
- Interaktive Übungen
- Quiz und Tests
- Lernspiele
- Visualisierungen

### Projekte
- Schülerpräsentationen
- Portfolio-Seiten
- Projektdokumentation
- Kollaborative Arbeiten

### Tools
- Rechner und Konverter
- Timers und Uhren
- Diagramm-Generatoren
- Datenvisualisierungen

## Best Practices

### Dateiorganisation
- Verwenden Sie aussagekräftige Dateinamen
- Organisieren Sie Dateien logisch (index.html als Hauptdatei)
- Halten Sie die Dateistruktur einfach

### Performance
- Optimieren Sie Bilder und Medien
- Minimieren Sie CSS und JavaScript für Produktion
- Nutzen Sie CDN für externe Bibliotheken

### Sicherheit
- Validieren Sie alle Benutzereingaben
- Vermeiden Sie die Speicherung sensibler Daten im Browser
- Testen Sie Ihre Anwendungen gründlich

## Fehlerbehebung

### Dateien werden nicht angezeigt
- Überprüfen Sie die Dateitypen (nur HTML, JS, CSS)
- Stellen Sie sicher, dass Dateinamen keine Sonderzeichen enthalten
- Aktualisieren Sie die Seite

### JavaScript funktioniert nicht
- Überprüfen Sie die Browser-Konsole auf Fehler
- Stellen Sie sicher, dass Skripte korrekt verlinkt sind
- Prüfen Sie die Reihenfolge der Script-Includes

### CSS wird nicht angewendet
- Verifizieren Sie den CSS-Link im HTML
- Prüfen Sie auf Syntax-Fehler im CSS
- Überprüfen Sie die Spezifität der CSS-Regeln

## Grenzen und Beschränkungen

- Maximale Dateigröße: (wird vom Administrator festgelegt)
- Unterstützte Dateitypen: HTML, CSS, JavaScript
- Keine serverseitigen Skripte (PHP, Python, etc.)
- Ausführung im Browser-Kontext
