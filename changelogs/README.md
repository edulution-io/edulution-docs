# Changelog Komponente

Eine schöne Timeline-basierte Changelog-Komponente im Tailwind Commit-Stil für Docusaurus.

## Features

- **Timeline-Design** mit animierten Verbindungslinien
- **Tag-System** für verschiedene Projekte (edulution-ui, edulution-mail, etc.)
- **Markdown-Support** - schreibe Changelogs als einfache Markdown-Dateien
- **Versionsnummern** mit automatischer Formatierung
- **Bilder** - füge Screenshots oder Bilder zu jedem Eintrag hinzu
- **Verbesserungen-Liste** mit Sparkle-Icon
- **Links** zu Dokumentation oder Release Notes
- **Responsive** - sieht auf allen Geräten gut aus
- **Dark Mode** - perfekt integriert mit dem edulution.io Theme
- **Animationen** - subtile Hover-Effekte und Glüh-Animationen

## Installation

Die Komponente ist bereits im Projekt verfügbar. Falls noch nicht geschehen:

```bash
npm install --save-dev raw-loader
```

## Verwendung

### Methode 1: Mit Markdown-Datei (Empfohlen)

1. Erstelle eine Markdown-Datei in `changelogs/`:

```markdown
## v1.2.0 | 2024-03-15 | edulution-ui, edulution-mail

### Feature Title

Description of the feature or changes.

#### Verbesserungen

- Improvement 1
- Improvement 2
- Improvement 3

[Link Text](https://example.com)

---

## v1.1.0 | 2024-02-01 | edulution-fileproxy

### Another Feature

More description here.

---
```

2. Importiere und verwende in einer MDX-Datei:

```jsx
---
title: Changelog
---

import { ChangelogFromMarkdown } from '@site/src/components/ChangelogFromMarkdown';
import changelogContent from '!!raw-loader!../changelogs/CHANGELOG.md';

# Changelog

<ChangelogFromMarkdown markdown={changelogContent} />
```

### Methode 2: Mit JavaScript-Objekten

```jsx
import { Changelog } from "@site/src/components/Changelog";

<Changelog
  entries={[
    {
      version: "1.2.0",
      date: "2024-03-15",
      title: "Feature Title",
      description: "Description of the feature",
      tags: [{ name: "edulution-ui" }, { name: "edulution-mail" }],
      image: "/img/screenshot.png", // optional
      improvements: ["Improvement 1", "Improvement 2"],
      links: [{ text: "Docs", url: "/docs" }],
    },
  ]}
/>;
```

## Markdown-Format

### Header-Format

```markdown
## v{version} | {date} | {tags}
```

Beispiel:

```markdown
## v2.1.0 | 2025-03-15 | edulution-ui, edulution-mail
```

### Vollständiges Beispiel

```markdown
## v2.1.0 | 2025-03-15 | edulution-ui, edulution-mail

![Optional Screenshot](/img/feature.png)

### Feature Title

Dies ist die Beschreibung des Features. Sie kann mehrere Sätze umfassen
und wird automatisch formatiert.

#### Verbesserungen

- Erste Verbesserung
- Zweite Verbesserung
- Dritte Verbesserung

[Dokumentation ansehen](/docs/feature)
[GitHub Release](https://github.com/org/repo/releases/tag/v2.1.0)

---
```

## Verfügbare Tags

Die Komponente erkennt automatisch diese Tags und wendet passende Farben an:

- `edulution-ui` - Grün (#8FC046)
- `edulution-mail` - Blau (#0081c6)
- `edulution-fileproxy` - Rot (#dc2626)
- `edulution-backend` - Gelb (#FFD700)

### Eigene Tag-Farben

Du kannst auch eigene Farben definieren:

```jsx
tags: [{ name: "custom-tag", color: "bg-purple-500 text-white" }];
```

Die `color`-Property akzeptiert Tailwind-Klassen.

## Styling

Die Komponente verwendet das edulution.io Theme mit:

- Dark Mode by default
- edulution Brand-Farben (#8FC046 grün, #0081c6 blau)
- Gradient-Effekte
- Subtile Animationen
- Responsive Design

### Anpassungen

Falls du das Styling anpassen möchtest, bearbeite `src/components/Changelog.css`.

## Beispiele

### Einfacher Eintrag

```markdown
## v1.0.0 | 2024-01-15 | edulution-ui

### Erste Version

Die erste öffentliche Version der Plattform.

#### Verbesserungen

- Grundlegende Features implementiert
- Dokumentation erstellt

---
```

### Eintrag mit Bild

```markdown
## v1.5.0 | 2024-06-01 | edulution-mail

![Mail Configuration Screenshot](/img/mail-config.png)

### Mail-Konfiguration

Neue interaktive Mail-Konfigurationskomponente.

---
```

### Eintrag mit mehreren Tags und Links

```markdown
## v2.0.0 | 2025-01-20 | edulution-ui, edulution-mail, edulution-fileproxy

### Major Release

Große Überarbeitung aller Komponenten.

#### Verbesserungen

- Neue UI
- Performance-Verbesserungen
- Bug-Fixes

[Dokumentation](/docs)
[Release Notes](https://github.com/org/repo/releases/tag/v2.0.0)
[Blog Post](/blog/v2-release)

---
```

## Tipps

1. **Chronologische Reihenfolge**: Neueste Einträge sollten oben stehen
2. **Klare Titel**: Verwende aussagekräftige Titel, die sofort klar machen, worum es geht
3. **Tags konsequent verwenden**: Bleibe bei den definierten Tags für Konsistenz
4. **Bilder sparsam einsetzen**: Nur für wirklich wichtige Features
5. **Links hinzufügen**: Verlinke zu relevanter Dokumentation oder Release Notes
6. **Verbesserungen-Liste**: Halte Einträge kurz und prägnant

## Dateien

```
src/components/
├── Changelog.tsx          # Haupt-Komponente
├── Changelog.css          # Styling
└── ChangelogFromMarkdown.tsx  # Markdown-Parser

changelogs/
├── CHANGELOG.md          # Haupt-Changelog
└── README.md            # Diese Datei

docs/
├── changelog.mdx        # Changelog-Seite (mit Markdown)
└── changelog-example.mdx  # Beispiel-Seite (mit direkten Daten)
```

## Support

Bei Fragen oder Problemen:

1. Siehe Beispiele in `docs/changelog-example.mdx`
2. Prüfe das Markdown-Format in `changelogs/CHANGELOG.md`
3. Schaue dir die Komponentendateien an

## Lizenz

Teil der edulution.io Dokumentation
