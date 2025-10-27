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
  - `/edulution-ui` - edulution UI Dokumentation
  - `/edulution-mail` - edulution Mail Dokumentation
  - `/edulution-fileproxy` - edulution FileProxy Dokumentation
- `/changelogs` - Versionshistorie und Änderungsprotokolle
- `/static` - Statische Assets (Bilder, Icons, etc.)
- `/src` - Custom React Komponenten und Styles

## Deployment

Die Dokumentation wird automatisch über GitHub Actions deployed, wenn Änderungen auf den `main` Branch gepusht werden.

## Lizenz

Copyright © edulution.io
