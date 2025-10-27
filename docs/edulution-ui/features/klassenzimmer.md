# Klassenraum

Der Klassenraum ist das zentrale Tool für Lehrer zur Unterrichtsverwaltung. Hier können Sie Unterricht starten, Schüler überwachen und Projekte verwalten.

:::info Linuxmuster Integration
Der Klassenraum nutzt die Linuxmuster-Funktionen für Klassenverwaltung und Projekte (Sophomorix). Mehr Informationen: [Linuxmuster Dokumentation](https://docs.linuxmuster.net/de/latest/systemadministration/schoolconsole/)
:::

## Übersicht

![Klassenraum Start](/img/klassenraum/unterricht-start.png)

### Bereiche

**Seitenleiste:**
- **Unterricht** - Stunde starten und verwalten
- **Einschreiben** - In Klassen und Projekte einschreiben
- **Passwörter drucken** - Zugangsdaten ausdrucken
- **Meine Projekte** - Projektübersicht

**Schnellzugriff:**
- **Mein Raum** - Aktueller Unterrichtsraum
- **Meine Klassen** - Alle Ihre Klassen
- **Meine Projekte** - Alle Ihre Projekte

## Unterricht starten

![Unterricht Ansicht](/img/klassenraum/unterricht-ansicht.png)

### Sitzung erstellen

1. Wählen Sie eine Klasse oder ein Projekt
2. Oder fügen Sie Schüler über die Suche hinzu
3. Klicken Sie **Sitzung speichern**

### Schülerkarten

Jede Karte zeigt:
- Name und Benutzername
- Klasse
- Speichernutzung (Quota)

### Steuerungs-Icons

Pro Schüler verfügbar:
- 📶 **Internet** - Zugriff aktivieren/deaktivieren
- 🖥️ **Bildschirm** - Anzeige steuern
- 🖨️ **Drucker** - Druckzugriff
- 🔴 **Herunterfahren** - Gerät ausschalten
- 👁️ **Überwachen** - Bildschirm anzeigen

**Alle auswählen** - Für Massenaktionen

## Einschreiben

![Einschreiben](/img/klassenraum/einschreiben.png)

Schreiben Sie sich in Klassen und Projekte ein.

### Klassen

Verfügbare Klassen mit:
- Klassenname (z.B. "10a", "5a")
- Anzahl Benutzer
- Checkbox zum Einschreiben

### Projekte

Alle Projekte mit:
- Projektname (z.B. "Chemie 10er")
- Admin- und Benutzer-Anzahl
- 🔒 Private Projekte mit Schloss-Symbol

:::tip Projekte nutzen
Projekte sind ideal für:
- Oberstufenkurse
- AGs und Arbeitsgruppen
- Spezielle Lerngruppen

[Sophomorix Projects Doku](https://wiki.linuxmuster.net/community/anwenderwiki:sophomorix:sophomorix-project)
:::

## Meine Projekte

![Meine Projekte](/img/klassenraum/meine-projekte.png)

Übersicht Ihrer Projekte als Admin.

Jedes Projekt zeigt:
- Projektname
- Anzahl Admins und Benutzer

**Neues Projekt** - Klicken Sie **+ Projekt erste...**

## Passwörter drucken

![Passwörter drucken](/img/klassenraum/passwoerter-drucken.png)

Drucken Sie Zugangsdaten für Klassen aus.

### Icons pro Klasse

- 📄 **Einzeldatei** - Nur diese Klasse
- 📋 **Sammeldatei** - Mehrere Klassen zusammen

:::tip Verwendung
Nützlich für:
- Schuljahresbeginn (neue Schüler)
- Nach Passwort-Reset
:::

## Linuxmuster-Konzepte

### Klassen vs. Projekte

| | Klassen | Projekte |
|---|---------|----------|
| **Verwendung** | Schulklassen (5a, 10b) | Kurse, AGs |
| **Verwaltung** | Automatisch | Manuell |
| **Mitglieder** | Alle Schüler | Ausgewählt |

### Weiterführende Links

- [Linuxmuster Schulkonsole](https://docs.linuxmuster.net/de/latest/systemadministration/schoolconsole/)
- [Sophomorix Basics](https://wiki.linuxmuster.net/archiv/dokumentation:sophomorix:basics)

## Siehe auch

- [Dashboard](dashboard.md) - Klassenübersicht
- [Linuxmuster verbinden](../configure-lmn-server/configure_lmn-server.md)
