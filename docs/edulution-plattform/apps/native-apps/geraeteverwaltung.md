---
sidebar_custom_props:
  audience: advanced
---

# Geräteverwaltung

Die **Geräteverwaltung** ist Teil der Linuxmuster-App und zeigt alle am Schulserver registrierten Geräte in einer bearbeitbaren Tabelle an. Sie pflegen hier die Geräteliste (`devices.csv`) Ihrer Schule und importieren Änderungen direkt in Linuxmuster.

:::info Linuxmuster Integration
Die Geräteverwaltung arbeitet direkt auf der Sophomorix-Gerätedatei `/etc/linuxmuster/sophomorix/<schule>/devices.csv`. Mehr Informationen zum Import: [Linuxmuster Dokumentation](https://docs.linuxmuster.net/de/latest/systemadministration/index.html)
:::

## Übersicht

{/* ![Geräteverwaltung Übersicht](/img/features/geraeteverwaltung-overview.png) */}

Sie erreichen die Geräteverwaltung über die **Linuxmuster-App** → **Geräteverwaltung** (Symbol: Monitor) in der Seitenleiste.

Die Seite listet alle Geräte der ausgewählten Schule in einer Tabelle. Neu hinzugefügte Zeilen werden **grün**, geänderte Felder **blau** und ungültige oder doppelte Einträge mit einem **roten Rand** markiert, solange die Änderungen noch nicht gespeichert sind.

:::note Berechtigungen
Die Geräteliste kann von allen berechtigten Nutzern der Linuxmuster-App geöffnet und die CSV-Datei angesehen werden. Das **Speichern** und **Anwenden** von Änderungen ist nur für **Schuladministratoren** und **Global-Administratoren** möglich. Global-Administratoren können zusätzlich über ein Auswahlmenü zwischen den Schulen wechseln.
:::

## Tabellenspalten

Jede Zeile entspricht einem Gerät. Folgende Spalten werden angezeigt:

| Spalte | Beschreibung |
|--------|--------------|
| **Raum** | Raumbezeichnung des Geräts (nur Buchstaben, Ziffern und `-`, max. 15 Zeichen) |
| **Rechnername** | Hostname des Geräts (nur Buchstaben, Ziffern und `-`, max. 15 Zeichen, eindeutig) |
| **Gruppe** | LINBO-Hardwaregruppe des Geräts |
| **MAC** | MAC-Adresse im Format `XX:XX:XX:XX:XX:XX` (eindeutig) |
| **IP** | IP-Adresse als Dotted-Quad, z. B. `10.0.0.10` (eindeutig) |
| **Sophomorix-Rolle** | Rolle des Geräts (Auswahlliste, siehe unten) |
| **PXE** | PXE-/LINBO-Startverhalten (Auswahlliste, siehe unten) |

Die Spalten sind sortierbar; standardmäßig ist nach **Raum** aufsteigend sortiert. Weitere Felder der `devices.csv` (z. B. Kommentare oder reservierte Sophomorix-Felder) werden nicht angezeigt, bleiben beim Speichern aber erhalten.

### Sophomorix-Rollen

Über die Auswahlliste **Sophomorix-Rolle** legen Sie fest, wie Linuxmuster das Gerät behandelt:

| Rolle | Bedeutung |
|-------|-----------|
| `classroom-studentcomputer` | Schüler-PC im Klassenzimmer |
| `classroom-teachercomputer` | Lehrer-PC im Klassenzimmer |
| `faculty-teachercomputer` | Fachbereich-Lehrer-PC |
| `staffcomputer` | Lehrer-PC |
| `byod` | BYOD-Gerät (Bring Your Own Device) |
| `mobile` | Mobiles Gerät |
| `thinclient` | Thinclient |
| `printer` | Drucker |
| `server` | Server |
| `addc` | Domaincontroller |
| `router` | Router |
| `switch` | Switch |
| `wlan` | WLAN-Gerät |
| `voip` | VoIP-Gerät |
| `iponly` | IP-Only |

:::note Business-Umgebungen
In Business-Organisationen entfallen die Klassenzimmer-Rollen (`classroom-*`, `faculty-teachercomputer`); die Rolle `staffcomputer` wird dort als **Computer** bezeichnet.
:::

### PXE-Startverhalten

Die Spalte **PXE** steuert das Netzwerk-Startverhalten (LINBO):

| Wert | Bedeutung |
|------|-----------|
| **0** | Kein PXE |
| **1** | Linbo-PXE |

## Geräte bearbeiten

{/* ![Gerät bearbeiten](/img/features/geraeteverwaltung-edit.png) */}

Alle Felder lassen sich direkt in der Tabelle bearbeiten – Textfelder per Eingabe, Rolle und PXE über Auswahllisten.

Über die untere Aktionsleiste stehen folgende Funktionen bereit:

- **Gerät hinzufügen** (`+`) – fügt eine neue, leere Zeile am Ende der Tabelle hinzu.
- **Gerät duplizieren** (Kopier-Symbol pro Zeile) – erstellt eine Kopie der Zeile als Vorlage für ein ähnliches Gerät.
- **Löschen** (Papierkorb-Symbol pro Zeile) – markiert die Zeile zum Löschen; entfernt wird sie erst beim Speichern.
- **Rückgängig** – lädt die Liste neu vom Server und verwirft alle nicht gespeicherten Änderungen.

### Validierung

Vor dem Speichern werden alle Felder geprüft. Ungültige Werte und doppelte Einträge (bei **Rechnername**, **MAC** und **IP**) werden mit einem roten Rand markiert und verhindern das Speichern. In diesem Fall erscheint ein Hinweis:

- *„Bitte korrigieren Sie alle ungültigen Felder vor dem Speichern"*
- *„Doppelte Einträge für Rechnername, MAC oder IP gefunden"*

<Audience roles="admin">

## Speichern und Anwenden

Zwei Aktionen schreiben Ihre Änderungen zurück:

- **Speichern** – schreibt die Geräteliste in die `devices.csv`, ohne sie zu importieren. Bestätigung: *„Geräteliste erfolgreich gespeichert"*.
- **Anwenden** – speichert die Liste **und** startet sofort den Linuxmuster-Geräteimport (Sophomorix). Zuvor erscheint eine Sicherheitsabfrage:

{/* ![Anwenden bestätigen](/img/features/geraeteverwaltung-apply.png) */}

> **Geräteliste anwenden**
> Die Geräteliste wird gespeichert und sofort importiert. Möchten Sie fortfahren?

Nach der Bestätigung laufen die Meldungen *„Geräteliste wird angewendet…"* und anschließend *„Geräteliste erfolgreich angewendet"*.

:::warning
Der Import kann je nach Größe der Geräteliste einige Zeit in Anspruch nehmen. Wenden Sie Änderungen möglichst außerhalb des Unterrichts an.
:::

</Audience>

## CSV-Import und -Export

{/* ![CSV-Dialog](/img/features/geraeteverwaltung-csv.png) */}

Über die Schaltfläche **CSV** öffnen Sie den Rohinhalt der `devices.csv`. Hier können Sie:

- den Inhalt direkt als Text bearbeiten oder einfügen,
- eine `.csv`- oder `.txt`-Datei per Drag & Drop importieren (*„Datei hier hin schieben um sie zu importieren"*),
- die aktuelle Liste über **CSV Herunterladen** als `devices.csv` exportieren.

:::tip
Der CSV-Export eignet sich gut für Sicherungen vor größeren Änderungen sowie zum Übertragen von Gerätelisten zwischen Servern.
:::

## Siehe auch

- [Klassenraum](./klassenzimmer.md) – Geräte im Unterricht steuern
- [Linuxmuster verbinden](../../../edulution-server/installation.md)
- [Linuxmuster Dokumentation](https://docs.linuxmuster.net/de/latest/systemadministration/index.html)
