# Eingebettete App

Die Eingebettete App ermöglicht das Erstellen und Teilen von Webinhalten sowie das Hochladen eigener Web-Anwendungen.

![Eingebettete App](/img/features/ressourcen-bib.jpeg)

## Übersicht

Die Eingebettete App ist ein vielseitiges Tool zum:
- Erstellen eigener Webanwendungen
- Hochladen von HTML/JS/CSS-Dateien
- Einbetten von interaktiven Inhalten
- Teilen von Lernressourcen

## Modi

### Separates Layout

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

Die Eingebettete App arbeitet eng mit anderen edulution-Features zusammen:

### Etherpad
- Kollaboratives Bearbeiten von Inhalten
- Mehrere Benutzer können gleichzeitig arbeiten
- Versionierung und Änderungsverlauf

### Frame
- Einbettung externer Anwendungen
- iFrame-basierte Integration
- Nahtlose Integration in edulution UI
- Eigene JavaScript-Skripte beim Laden und beim Abmelden, siehe [Skripte in Frame-Apps](#skripte-in-frame-apps)
- Adresszeile und Deep-Links, siehe [URL-Verarbeitung und Deep-Links](#url-verarbeitung-und-deep-links)

## URL-Verarbeitung und Deep-Links

Standardmäßig zeigt die Adresszeile des Browsers nur den Namen der App — etwa `https://edulution.ihre-domain.de/lernmanagement` —, unabhängig davon, wohin ein Benutzer im eingebetteten Inhalt navigiert. Ein Link auf eine bestimmte Unterseite lässt sich damit nicht weitergeben, und nach dem Neuladen beginnt der Benutzer wieder auf der Startseite der eingebetteten Anwendung.

Der Bereich **URL-Verarbeitung** ändert das. Sie finden ihn als Global-Admin unter **Einstellungen → \<App\>** bei

- **Frame-Apps**, also der Einbettung einer externen Anwendung, und
- **Eingebetteten Apps** im Modus **Separates Layout**.

Im Modus *Integriertes Layout* bleiben die Schalter deaktiviert: Dort wird der Inhalt direkt in die Oberfläche eingefügt, es gibt also keine eigene Navigation, die mitgeführt werden könnte.

### Die beiden Schalter

| Schalter | Wirkung | Frame | Eingebettet |
| --- | --- | --- | --- |
| **URL-Synchronisierung aktivieren** | Die Adresszeile des Browsers folgt der Navigation im eingebetteten Inhalt | standardmäßig aktiv | standardmäßig inaktiv |
| **Basisseite vorladen** | Beim Aufruf eines Deep-Links wird zuerst die konfigurierte URL geladen und erst danach zur Unterseite gewechselt | standardmäßig aktiv | standardmäßig inaktiv |

Nach dem Umschalten speichern Sie die App-Einstellungen über **Speichern**.

### Wie die Adresszeile mitgeführt wird

Bei aktiver URL-Synchronisierung vergleicht edulution zweimal pro Sekunde die Adresse im iframe mit der Adresszeile des Browsers und übernimmt Pfad, Query-Parameter und Anker hinter den App-Namen. Aus `https://moodle.ihre-domain.de/course/view.php?id=7` im iframe wird so `https://edulution.ihre-domain.de/lernmanagement/course/view.php?id=7`.

Der Aufruf einer solchen Adresse geht den umgekehrten Weg: edulution hängt den Teil hinter dem App-Namen an den Host der konfigurierten App-URL und lädt den iframe mit dieser Zieladresse. Lesezeichen und weitergegebene Links landen damit auf der gewünschten Unterseite.

Die Adresse wird dabei ersetzt und nicht als neuer Verlaufseintrag angelegt. Der Zurück-Button des Browsers führt deshalb aus der App heraus und nicht Schritt für Schritt durch die Navigation im eingebetteten Inhalt zurück.

:::warning[Nur bei gleicher Domain]
Die Adresszeile kann nur mitgeführt werden, wenn der eingebettete Inhalt unter derselben Domain wie edulution ausgeliefert wird. Bei einer fremden Domain verweigert der Browser den Zugriff auf die Adresse im iframe — die Adresszeile bleibt dann ohne Fehlermeldung beim App-Namen stehen.

Für externe Anwendungen erreichen Sie die gleiche Domain über die **Proxy-Konfiguration** der App: Der Inhalt wird dann unter der edulution-Domain ausgeliefert.
:::

### Basisseite vorladen

Ist **Basisseite vorladen** aktiv, lädt der iframe beim Aufruf eines Deep-Links zuerst die in der App konfigurierte URL und wechselt erst nach deren Laden zur Zielseite. Das ist für Anwendungen nötig, die auf der Startseite die Anmeldung durchführen oder Initialisierungsskripte ausführen — springt der iframe direkt auf die Unterseite, landet der Benutzer dort auf einer Anmelde- oder Fehlerseite.

Ist der Schalter inaktiv, lädt der iframe sofort die Zielseite. Das ist schneller und für Anwendungen ohne eigene Anmeldung die bessere Wahl.

Solange die Basisseite geladen wird, ruht die URL-Synchronisierung. Die kurz sichtbare Startseite überschreibt den Deep-Link in der Adresszeile also nicht.

## Skripte in Frame-Apps

Frame-Apps können eigene JavaScript-Skripte in den eingebetteten Inhalt einfügen — beim Laden und beim Abmelden. Typische Einsätze sind das Ausfüllen des Anmeldeformulars der eingebetteten Anwendung, das Ausblenden von Bedienelementen, die in edulution doppelt wären, und das Beenden der Sitzung in der Fremdanwendung, wenn sich der Benutzer aus edulution abmeldet.

Den Bereich **Skripte** finden Sie als Global-Admin unter **Einstellungen → \<Frame-App\>**. Eingebettete Apps brauchen ihn nicht — dort pflegen Sie das JavaScript direkt im Editor oder in den hochgeladenen Dateien.

### Aufbau

| Schalter | Das Skript läuft |
| --- | --- |
| **Skript beim Laden aktivieren** | jedes Mal, wenn der Inhalt des iframes fertig geladen ist |
| **Skript beim Abmelden aktivieren** | einmal, sobald die Abmeldung angestoßen wurde und noch bevor die Sitzung beendet ist |

Beide Schalter sind zunächst ausgeschaltet. Schalten Sie einen ein, klappt darunter ein Editor für den JavaScript-Code auf, mit zwei Schaltflächen:

- **Validieren** prüft die Syntax. Bei gültigem Code meldet edulution **"Skript-Syntax ist gültig"**, andernfalls erscheint unter dem Editor **"Skript hat Syntaxfehler"** samt Fehlermeldung. Die Prüfung läuft zusätzlich bei jeder Eingabe mit.
- **Formatieren** rückt den Code neu ein.

Geprüft wird ausschließlich die Syntax, nicht ob das Skript in der eingebetteten Anwendung das Gewünschte bewirkt. Speichern Sie die Einstellungen anschließend über **Speichern**.

Schalten Sie einen Schalter wieder aus, bleibt der Text erhalten, das Skript wird aber nicht mehr ausgeführt.

### Ausführung

Das Lade-Skript wird als `<script>`-Element in den Kopf des iframe-Dokuments eingefügt, sobald dieses vollständig geladen ist. Ändern Sie den Skript-Text, während die App bei einem Benutzer geöffnet ist, lädt edulution den iframe neu, damit das neue Skript zum Einsatz kommt.

Das Abmelde-Skript wird nur ausgeführt, wenn die App zum Zeitpunkt der Abmeldung geladen ist. Meldet sich ein Benutzer ab, ohne die Frame-App in dieser Sitzung geöffnet zu haben, läuft es nicht.

:::warning[Nur bei gleicher Domain]
Skripte lassen sich nur in Inhalte einfügen, die unter derselben Domain wie edulution ausgeliefert werden. Bei einer fremden Domain blockiert der Browser den Zugriff auf das iframe-Dokument, und edulution meldet **"Skript konnte nicht in den iframe eingefügt werden"**. Liefern Sie die Anwendung in diesem Fall über die **Proxy-Konfiguration** der App unter der edulution-Domain aus.
:::

:::caution[Keine Zugangsdaten im Skript]
Die Skripte werden an den Browser jedes Benutzers ausgeliefert, der die App öffnet, und sind dort im Klartext lesbar. Hinterlegen Sie deshalb keine Passwörter, Token oder API-Schlüssel im Skript.
:::

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

### Die Adresszeile ändert sich nicht

- Prüfen Sie, ob **URL-Synchronisierung aktivieren** in den App-Einstellungen aktiv und gespeichert ist
- Bei Eingebetteten Apps muss der Modus **Separates Layout** gewählt sein, sonst bleibt der Schalter deaktiviert
- Der eingebettete Inhalt muss unter derselben Domain wie edulution ausgeliefert werden, andernfalls greift die Synchronisierung nicht

### Ein Deep-Link landet auf der Startseite

- Führt die eingebettete Anwendung auf ihrer Startseite eine Anmeldung oder eine Initialisierung durch, aktivieren Sie **Basisseite vorladen**
- Wird die Adresszeile beim Navigieren nicht mitgeführt (siehe oben), entstehen gar keine Deep-Links, die weitergegeben werden könnten

### Ein Skript wird nicht ausgeführt

- Der zugehörige Schalter im Bereich **Skripte** muss aktiv sein und die Konfiguration gespeichert
- Prüfen Sie das Skript mit **Validieren** auf Syntaxfehler
- Erscheint die Meldung **"Skript konnte nicht in den iframe eingefügt werden"**, liegt der eingebettete Inhalt auf einer fremden Domain
- Fehler im Skript selbst zeigt die Konsole des Browsers

## Grenzen und Beschränkungen

- Maximale Dateigröße: (wird vom Administrator festgelegt)
- Unterstützte Dateitypen: HTML, CSS, JavaScript
- Keine serverseitigen Skripte (PHP, Python, etc.)
- Ausführung im Browser-Kontext
