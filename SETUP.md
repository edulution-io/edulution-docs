# Setup Anleitung

## Repository auf GitHub erstellen

1. Gehe zu https://github.com/new
2. Repository Name: `edulution-docs-test`
3. Beschreibung: "Test Repository für edulution Docusaurus Dokumentation"
4. Wähle: **Public**
5. **NICHT** "Initialize this repository with a README" anklicken
6. Klicke auf "Create repository"

## Repository pushen

Nachdem das Repository auf GitHub erstellt wurde, führe folgende Befehle aus:

```bash
cd /Users/dennisbolling/Documents/GitHub/edulution-docs-docusaurus
git remote add origin https://github.com/derdennis1012/edulution-docs-test.git
git branch -M main
git push -u origin main
```

## GitHub Pages aktivieren

1. Gehe zu den Repository Settings: https://github.com/derdennis1012/edulution-docs-test/settings/pages
2. Unter "Build and deployment":
   - Source: Wähle "GitHub Actions"
3. Speichern

## Fertig!

Nach dem ersten Push wird automatisch der GitHub Actions Workflow ausgeführt und deine Docusaurus-Seite auf GitHub Pages veröffentlicht.

Die Seite wird dann erreichbar sein unter:
https://derdennis1012.github.io/edulution-docs-test/

## Bei jedem Commit

Der Workflow wird automatisch bei jedem Push auf den `main` Branch ausgelöst und die Seite neu gebaut und deployed.
