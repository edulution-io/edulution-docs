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

## Zielgruppen (Rollen, Organisationstyp, Modul)

Die Dokumentation lässt sich auf die Lesenden zuschneiden. Auf der [Startseite](docs/index.md)
beantwortet man drei Fragen; die Auswahl liegt im LocalStorage und gilt für alle Seiten. Oben rechts
in der Navigationsleiste zeigt ein Badge die aktive Rolle und erlaubt das schnelle Umschalten.

**Ohne Auswahl ist nichts ausgeblendet.** Wer die Fragen überspringt, sieht die vollständige
Dokumentation – die Auswahl ist eine Lesehilfe, kein Zugriffsschutz.

> **Kein Zugriffsschutz.** Docusaurus erzeugt statisches HTML – ausgeblendete Inhalte werden
> weiterhin an jeden Besucher ausgeliefert und sind im Quelltext lesbar.

### Die drei Achsen

| Achse | Werte | Wirkung |
| --- | --- | --- |
| `role` | `student`, `teacher`, `parent`, `staff`, `admin-setup`, `admin-operate` | blendet Inhalte anderer Rollen aus |
| `org` | `school`, `business`, `public-administration` | blendet Inhalte anderer Organisationstypen aus |
| `module` | `plattform`, `mail`, `app`, `infrastruktur` | sortiert nur die Einstiegskarten, blendet nichts aus |

Die Rollenwerte folgen den Benutzertypen von edulution, die Organisationstypen den Werten von
`EDUI_ORGANIZATION_TYPE`. Definiert sind sie in
[`src/components/audience/taxonomy.ts`](src/components/audience/taxonomy.ts) – neue Werte gehören
dorthin und brauchen zusätzlich eine CSS-Regel in `src/css/custom.css`.

### Abschnitt auszeichnen

`<Audience>` ist global registriert und braucht keinen Import. Die Leerzeilen sind wichtig, sonst
wird das Markdown im Block nicht gerendert:

```mdx
<Audience roles="user">

Wer die App verwenden darf, legt die Administration Ihrer Schule fest.

</Audience>

<Audience roles="admin">

## Einrichtung (für Administratoren)

Zugriffsgruppen unter Einstellungen → … pflegen.

</Audience>
```

- `roles` – eine oder mehrere Rollen, durch Leerzeichen oder Komma getrennt. Die Kürzel `admin`
  (beide Administrations-Rollen) und `user` (alle Endnutzer-Rollen) sparen das Aufzählen.
- `org` – ein oder mehrere Organisationstypen.
- Beide Angaben werden mit UND verknüpft: `roles="teacher" org="school"` zeigt den Abschnitt
  Lehrkräften in Schulumgebungen.
- Ohne Angabe gilt die jeweilige Achse als unbeschränkt.

Ein unbekannter Name lässt den Build fehlschlagen – besser ein roter Build als ein Abschnitt, der
wegen eines Tippfehlers stumm für alle sichtbar bleibt.

Nur auszeichnen, wo es wirklich nötig ist. Steht die Information für die andere Zielgruppe schon im
sichtbaren Text, ist ein zusätzlicher Block nur Rauschen.

### Ganze Seite auszeichnen

```yaml
---
sidebar_custom_props:
  audience: admin-setup
---
```

Die Seite verschwindet damit aus der Sidebar. Wer sie direkt aufruft, sieht statt des Inhalts einen
Hinweis, für welche Rollen sie geschrieben ist, samt Knopf zum Umschalten.

### Ganze Kategorie auszeichnen

In `sidebars.ts` an der Kategorie:

```ts
{
  type: 'category',
  label: 'Installation',
  customProps: { audience: 'admin-setup' },
  items: [ /* … */ ],
}
```

### Inhaltsverzeichnis und Suche

- Einträge im Inhaltsverzeichnis, die auf eine ausgeblendete Überschrift zeigen, werden mit
  ausgeblendet.
- Der Suchindex bleibt **vollständig**. Ohne Auswahl ist ohnehin alles sichtbar; führt ein
  Suchtreffer oder ein geteilter Link jemanden mit gewählter Rolle auf einen Anker in einem
  ausgeblendeten Abschnitt, wird genau dieser Abschnitt aufgedeckt statt zu fehlen.

### Beteiligte Dateien

| Datei | Zweck |
| --- | --- |
| `src/components/audience/taxonomy.ts` | Rollen, Organisationstypen, Module, Auflösung der Kürzel |
| `src/components/audience/AudienceContext.tsx` | Auswahl, LocalStorage, Inhaltsverzeichnis und Aufdecken |
| `src/components/audience/Audience.tsx` | Wrapper für einzelne Abschnitte |
| `src/components/audience/AudiencePicker.tsx` | Die drei Fragen auf der Startseite |
| `src/components/audience/AudienceBadge.tsx` | Anzeige und Umschalten in der Navigationsleiste |
| `src/components/audience/ModuleCards.tsx` | Einstiegskarten, sortiert nach gewähltem Modul |
| `src/plugins/audience.js` | Inline-Skript, setzt `data-role`/`data-org` vor dem ersten Paint |
| `src/theme/DocSidebarItem/index.tsx` | Blendet Sidebar-Einträge aus |
| `src/theme/DocItem/Content/index.tsx` | Blendet ganze Seiten aus, zeigt den Hinweis |
| `src/css/custom.css` | Sichtbarkeitsregeln (`html[data-role]`, `html[data-org]`) |


## Deployment

Die Dokumentation wird automatisch über GitHub Actions deployed, wenn Änderungen auf den `main` Branch gepusht werden.

## Lizenz

Copyright © edulution.io
