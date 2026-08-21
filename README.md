# edulution Dokumentation

Offizielle Dokumentation für edulution Produkte, erstellt mit [Docusaurus](https://docusaurus.io/).

## Live-Version

Die Dokumentation ist verfügbar unter: [docs.edulution.io](https://docs.edulution.io)

## Lokale Entwicklung

### Installation

```bash
npm install
```

### Development Server starten

```bash
npm start
```

Dieser Befehl startet einen lokalen Development Server und öffnet ein Browser-Fenster. Die meisten Änderungen werden live übernommen.

### Build

```bash
npm run build
```

Dieser Befehl generiert statische Inhalte im `build` Verzeichnis.

## Struktur

- `/docs` - Dokumentationsinhalte

  - `/edulution-plattform` - edulution Plattform Dokumentation
  - `/edulution-mail` - edulution Mail Dokumentation
  - `/edulution-fileproxy` - edulution FileProxy Dokumentation
  - `/edulution-onlyoffice` - edulution OnlyOffice Dokumentation

- `/changelogs` - Versionshistorie und Änderungsprotokolle
- `/static` - Statische Assets (Bilder, Icons, etc.)
- `/src` - Custom React Komponenten und Styles

## Expertenmodus

Über den Schalter **Expertenmodus** in der Navigationsleiste lassen sich Administrations-Inhalte
ein- und ausblenden. Die Einstellung wird im LocalStorage gespeichert und gilt für alle Seiten.

> **Kein Zugriffsschutz.** Docusaurus erzeugt statisches HTML – ausgeblendete Inhalte werden
> weiterhin an jeden Besucher ausgeliefert und sind im Quelltext lesbar. Der Schalter reduziert
> nur die Informationsflut, er schützt nichts.

### Einzelnen Abschnitt ausblenden

`<ExpertOnly>` ist global registriert und braucht keinen Import. Die Leerzeilen sind wichtig,
sonst wird das Markdown im Block nicht gerendert:

```mdx
<ExpertOnly>

## Einrichtung (für Administratoren)

Text nur für Admins …

</ExpertOnly>
```

### Hinweis für Nicht-Admins einblenden

`<NormalUserOnly>` ist das Gegenstück und nur bei **ausgeschaltetem** Expertenmodus sichtbar.
Gedacht für den kurzen Hinweis, der an die Stelle eines ausgeblendeten Administrations-Abschnitts
tritt – sonst steht ein Benutzer ratlos vor einer fehlenden App:

```mdx
<NormalUserOnly>

Wer die App verwenden darf, legt die Administration Ihrer Schule fest.

</NormalUserOnly>

<ExpertOnly>

## Einrichtung (für Administratoren)

Zugriffsgruppen unter Einstellungen → … pflegen.

</ExpertOnly>
```

Nur ergänzen, wo die Information dem Benutzer sonst wirklich fehlt – steht sie bereits im
sichtbaren Text, ist ein zusätzlicher Hinweis nur Rauschen.

### Ganze Seite ausblenden

Im Front Matter markieren:

```yaml
---
sidebar_custom_props:
  expertOnly: true
---
```

Die Seite verschwindet damit aus der Sidebar. Wer sie direkt aufruft, sieht statt des Inhalts
einen Hinweis mit Knopf zum Einschalten des Expertenmodus.

### Ganze Kategorie ausblenden

In `sidebars.ts` an der Kategorie:

```ts
{
  type: 'category',
  label: 'Administration',
  customProps: { expertOnly: true },
  items: [ /* … */ ],
}
```

### Suchindex

`<ExpertOnly>`-Abschnitte werden über `ignoreCssSelectors` aus dem Suchindex entfernt – ein
Treffer würde sonst auf unsichtbaren Text springen. Ganze Experten-**Seiten** bleiben dagegen
auffindbar, damit Admins sie über die Suche erreichen; ohne Expertenmodus landet man dort auf
dem Hinweis. `<NormalUserOnly>` bleibt ebenfalls im Index, weil der ausgeschaltete
Expertenmodus der Normalfall ist.

### Beteiligte Dateien

| Datei | Zweck |
| --- | --- |
| `src/components/ExpertMode.tsx` | Context, LocalStorage, Abgleich des Inhaltsverzeichnisses |
| `src/components/ExpertOnly.tsx` | Wrapper für einzelne Abschnitte |
| `src/components/NormalUserOnly.tsx` | Gegenstück, nur ohne Expertenmodus sichtbar |
| `src/components/ExpertModeToggle.tsx` | Schalter in der Navigationsleiste |
| `src/plugins/expert-mode.js` | Inline-Skript, setzt `data-expert` vor dem ersten Paint |
| `src/theme/DocSidebarItem/index.tsx` | Blendet Sidebar-Einträge aus |
| `src/theme/DocItem/Content/index.tsx` | Blendet ganze Seiten aus, zeigt den Hinweis |
| `src/css/custom.css` | Sichtbarkeitsregeln (`html[data-expert]`) |

## Deployment

Die Dokumentation wird automatisch über GitHub Actions deployed, wenn Änderungen auf den `main` Branch gepusht werden.

## Lizenz

Copyright © edulution.io
