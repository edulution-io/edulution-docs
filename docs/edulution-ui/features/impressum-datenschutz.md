# Impressum und Datenschutz einrichten

Mit edulution können Sie rechtliche Pflichtseiten wie Impressum und Datenschutzerklärung als eingebettete Webseiten hinzufügen. Diese werden automatisch im Footer Ihrer edulution-Instanz verlinkt.

## Wichtiger Hinweis zur automatischen Footer-Integration

Damit Ihre Seiten automatisch im Footer der Webseite erscheinen, **muss** der Seitenname einer der folgenden Bezeichnungen entsprechen:

- **Impressum** (Deutsch)
- **Imprint** (Englisch)
- **Datenschutz** (Deutsch)
- **Privacy** (Englisch)

:::tip
Der Seitenname entspricht dem Pfad in der URL. Wenn Sie also eine App mit dem Namen "Impressum" erstellen, wird diese automatisch unter `/impressum` erreichbar sein und im Footer verlinkt.
:::

## Schritt-für-Schritt Anleitung

### 1. App-Store öffnen und "Eingebettet" auswählen

Navigieren Sie zu **Einstellungen** → **App-Store** und wählen Sie die App-Kategorie **"Eingebettet"** aus.

![App-Store Eingebettet](/img/features/app-store-embedded.png)

### 2. Neue App hinzufügen

Klicken Sie auf das **"Eingebettet"**-Icon. Es öffnet sich ein Dialog zum Hinzufügen der neuen App.

![App hinzufügen Dialog](/img/features/impressum-app-hinzufuegen.png)

**Eingabefelder:**

- **Name**: Geben Sie einen der erlaubten Namen ein:
  - `Impressum` oder `Imprint` für die Impressumsseite
  - `Datenschutz` oder `Privacy` für die Datenschutzerklärung

- **Icon auswählen**: Wählen Sie ein passendes Icon aus der Icon-Galerie oder laden Sie ein eigenes Icon hoch
  - Unterstützte Formate: **SVG**, **WEBP**

Klicken Sie auf **"Hinzufügen"**, um die App zu erstellen.

### 3. HTML-Inhalt bearbeiten

Nach dem Hinzufügen öffnet sich der Editor für die neue Seite.

![Impressum Editor](/img/features/impressum-editor.png)

**Editor-Funktionen:**

- **HTML-Code-Editor**: Geben Sie Ihren HTML-Code direkt ein
  - Sie können vollständiges HTML mit Überschriften, Absätzen, Listen etc. verwenden
  - Beispiel für ein Impressum:

```html
<h2>Angaben gemäß § 5 TMG</h2>
<p>Schulträger: Musterstraße 1</p>
<p>12345 Musterstadt</p>
<h3>Kontakt</h3>
<p>Telefon: +49 123 456789</p>
<p>E-Mail: info@beispiel.de</p>
```

- **Sichtbarkeit**: Aktivieren Sie den Schalter, damit die Seite öffentlich zugänglich ist

:::warning Wichtig
Die **Sichtbarkeit** muss aktiviert sein, damit die App im Footer erscheint und für registrierte Nutzer zugänglich ist. Ohne aktivierte Sichtbarkeit bleibt die Seite privat und erscheint nicht im Footer.
:::

- **Proxy-Konfiguration**: Optional für erweiterte Netzwerk-Einstellungen

### 4. Speichern

Klicken Sie auf **"Speichern"**, um Ihre Änderungen zu übernehmen.

### 5. Ergebnis prüfen

Nach dem Speichern erscheinen die Links automatisch im Footer Ihrer edulution-Webseite.

![Footer mit Impressum und Datenschutz](/img/features/impressum-footer.png)

## Mehrere Seiten erstellen

Sie können sowohl eine Impressums- als auch eine Datenschutzseite anlegen:

1. Wiederholen Sie die Schritte 1-4 für jede Seite
2. Verwenden Sie jeweils die entsprechenden Namen:
   - Erste App: **Impressum** (oder **Imprint**)
   - Zweite App: **Datenschutz** (oder **Privacy**)

Beide Seiten werden dann automatisch nebeneinander im Footer angezeigt.

## Tipps

- **HTML-Vorlagen**: Nutzen Sie HTML-Generatoren für Impressum und Datenschutzerklärungen
- **Formatierung**: Verwenden Sie semantisches HTML (`<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`) für bessere Lesbarkeit
- **Aktualisierung**: Sie können den Inhalt jederzeit bearbeiten, indem Sie die App in den Einstellungen öffnen
- **Löschung**: Apps können über das Papierkorb-Symbol in den Einstellungen gelöscht werden

## Rechtlicher Hinweis

:::info
Diese Funktion stellt lediglich eine technische Möglichkeit zur Verfügung, rechtliche Pflichtangaben bereitzustellen. Bitte konsultieren Sie einen Rechtsberater, um sicherzustellen, dass Ihre Impressums- und Datenschutzerklärung den gesetzlichen Anforderungen entspricht.
:::
