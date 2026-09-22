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

{/* ![Geräteverwaltung Übersicht](../../../img/features/geraeteverwaltung-overview.png) */}

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

Die Spalten sind sortierbar; standardmäßig ist nach **Raum** aufsteigend sortiert. Weitere Felder der `devices.csv` (z. B. die Kommentarspalte oder reservierte Sophomorix-Felder) werden nicht angezeigt, bleiben beim Speichern aber erhalten.

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

{/* ![Gerät bearbeiten](../../../img/features/geraeteverwaltung-edit.png) */}

Alle Felder lassen sich direkt in der Tabelle bearbeiten – Textfelder per Eingabe, Rolle und PXE über Auswahllisten.

In der Werkzeugleiste stehen neben **Speichern**, **Anwenden** und **CSV** diese Aktionen für die ganze Liste bereit:

- **Gerät hinzufügen** (`+`) – fügt eine neue, leere Zeile am Ende der Tabelle hinzu.
- **Zurücksetzen** – lädt die Liste neu vom Server und verwirft alle nicht gespeicherten Änderungen.

Jede Zeile hat zusätzlich zwei eigene Schaltflächen:

- **Duplizieren** (Kopier-Symbol) – fügt eine Kopie des Geräts am Ende der Tabelle an, als Vorlage für ein ähnliches Gerät. Die Kopie übernimmt auch die Felder, die die Tabelle nicht anzeigt.
- **Löschen** (Papierkorb-Symbol) – markiert das Gerät zum Entfernen, siehe [Geräte entfernen](#geräte-entfernen).

### Geräte entfernen

Über **Löschen** (Papierkorb-Symbol) in der Zeile eines Geräts markieren Sie das Gerät zum Entfernen. Die Zeile verschwindet sofort aus der Tabelle, das Gerät ist damit aber noch nicht gelöscht:

- **Speichern** entfernt es nur aus der `devices.csv`. In Linuxmuster bleibt es bis zum nächsten Geräteimport bestehen.
- Erst **Anwenden** importiert die Liste und entfernt das Gerät damit auch aus Linuxmuster.

Eine gesetzte Markierung lässt sich nicht einzeln zurücknehmen, und sie bleibt auch nach einem Neuladen der Seite bestehen. Solange Sie noch nicht gespeichert haben, holt **Zurücksetzen** die Geräteliste erneut vom Server und stellt das Gerät damit wieder her – dabei gehen allerdings auch alle übrigen ungespeicherten Änderungen verloren.

Haben Sie bereits gespeichert, aber noch nicht angewendet, hilft **Zurücksetzen** nicht mehr, denn die `devices.csv` auf dem Server enthält das Gerät dann nicht mehr. Legen Sie das Gerät mit denselben Daten neu an und speichern Sie, bevor Sie **Anwenden**. Werte in Feldern, die die Tabelle nicht anzeigt, ergänzen Sie dabei im CSV-Dialog.

Markierte Geräte sind im CSV-Dialog bereits nicht mehr enthalten: Die dort angezeigte und die heruntergeladene Datei entsprechen der Liste **ohne** diese Geräte.

:::note Während Speichern oder Anwenden läuft
Mit **Speichern** oder **Anwenden** gehen die Löschmarkierungen in den laufenden Vorgang ein. Schlägt er fehl, stellt die Tabelle den Stand von davor wieder her: Die betroffenen Geräte stehen wieder an ihrer ursprünglichen Position in der Liste und bleiben zum Entfernen markiert – Ihre Auswahl geht dabei nicht verloren.

Die Tabelle bleibt währenddessen bearbeitbar. Änderungen, die Sie in dieser Zeit vornehmen, bleiben erhalten, gehören aber nicht zum laufenden Vorgang: Sie bleiben als ungespeichert hervorgehoben und benötigen einen weiteren **Speichern**-Vorgang.

Übernehmen Sie in dieser Zeit einen Inhalt aus dem CSV-Dialog, hat dieser Vorrang: Er ersetzt die Tabelle, alle Löschmarkierungen entfallen, und das Ergebnis des laufenden Vorgangs wird verworfen. Dasselbe gilt, wenn Sie währenddessen die Schule wechseln.
:::

### Validierung

Vor dem Speichern werden alle Felder geprüft. Ungültige Werte und doppelte Einträge (bei **Rechnername**, **MAC** und **IP**) werden mit einem roten Rand markiert und verhindern das Speichern und Anwenden. Für ungültige wie für doppelte Werte erscheint dieselbe Meldung: *„Bitte korrigieren Sie alle ungültigen Felder vor dem Speichern“*.

<Audience roles="admin">

## Speichern und Anwenden

Zwei Aktionen schreiben Ihre Änderungen zurück:

- **Speichern** – schreibt die Geräteliste in die `devices.csv`, ohne sie zu importieren. Bestätigung: *„Geräteliste erfolgreich gespeichert“*.
- **Anwenden** – speichert die Liste **und** startet sofort den Linuxmuster-Geräteimport (Sophomorix). Zuvor erscheint eine Sicherheitsabfrage:

{/* ![Anwenden bestätigen](../../../img/features/geraeteverwaltung-apply.png) */}

> **Geräteliste anwenden**
> Die Geräteliste wird gespeichert und sofort importiert. Möchten Sie fortfahren?

Nach der Bestätigung laufen die Meldungen *„Geräteliste wird angewendet…“* und anschließend *„Geräteliste erfolgreich angewendet“*.

:::warning
Der Import kann je nach Größe der Geräteliste einige Zeit in Anspruch nehmen. Wenden Sie Änderungen möglichst außerhalb des Unterrichts an.
:::

:::warning Fehler beim Import
**Anwenden** legt die Geräteliste zuerst auf dem Server ab und startet den Import erst danach. Schlägt allein der Importlauf fehl, ist die Liste bereits gespeichert: Die zum Entfernen markierten Geräte kehren dann **nicht** in die Tabelle zurück, und die Liste gilt als gespeichert. Wiederholen Sie in diesem Fall **Anwenden**, um den Import erneut anzustoßen.
:::

</Audience>

## CSV-Import und -Export

{/* ![CSV-Dialog](../../../img/features/geraeteverwaltung-csv.png) */}

Über die Schaltfläche **CSV** öffnen Sie den Rohinhalt der `devices.csv`. Hier können Sie:

- den Inhalt direkt als Text bearbeiten oder einfügen,
- eine `.csv`- oder `.txt`-Datei per Drag & Drop oder über den Dateidialog in das Textfeld laden (*„Ziehe Dateien hierher oder klicke, um Dateien auszuwählen“*),
- den Inhalt des Textfelds über **Herunterladen** als `devices.csv` exportieren.

Eine geladene Datei ersetzt nur den Inhalt des Textfelds. Erst **Speichern** im Dialog übernimmt diesen Inhalt: Er ersetzt die gesamte Tabelle, und sämtliche Löschmarkierungen entfallen – maßgeblich ist danach ausschließlich, was im Textfeld stand. Zum Entfernen markierte Geräte kehren dadurch nicht zurück, denn sie fehlen bereits im Textfeld. Nur wenn Sie sie dort wieder eintragen oder die geladene Datei sie enthält, sind sie wieder Teil der Liste. Auf den Server geschrieben wird die Liste auch dann erst mit **Speichern** oder **Anwenden** der Geräteliste.

:::tip
Der CSV-Export eignet sich gut für Sicherungen vor größeren Änderungen sowie zum Übertragen von Gerätelisten zwischen Servern.
:::

### Kommentarzeilen

Die `devices.csv` enthält in der Regel schon Kommentarzeilen aus der Linuxmuster-Vorlage, etwa die auskommentierte Beispielzeile `#r100;r100-pc01;…`. Die Trennzeilen der Vorlage, die nur aus `#` bestehen, werden beim ersten Speichern oder Anwenden der Geräteliste zu Leerzeilen. Wie Kommentarzeilen erhalten bleiben und in welchen Fällen sie sich beim Speichern verändern, beschreibt die Benutzerverwaltung unter [Kommentarzeilen](../../../edulution-server/benutzerverwaltung.md#kommentarzeilen) – die Regeln gelten für die Geräteliste genauso, beim **Speichern** wie beim **Anwenden**.

## Siehe auch

- [Klassenraum](./klassenzimmer.md) – Geräte im Unterricht steuern
- [Linuxmuster verbinden](../../../edulution-server/installation.md)
- [Linuxmuster Dokumentation](https://docs.linuxmuster.net/de/latest/systemadministration/index.html)
