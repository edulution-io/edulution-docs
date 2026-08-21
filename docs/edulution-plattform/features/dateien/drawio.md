---
sidebar_position: 7
---

# Diagramme mit Draw.io

Draw.io ist direkt in die Dateiverwaltung eingebettet. Sie legen Diagramme wie jede andere Datei in Ihrem Verzeichnis an, öffnen sie per Klick in der Vorschau und bearbeiten sie im vollständigen Draw.io-Editor – ohne die edulution-Oberfläche zu verlassen. Gespeichert wird direkt in Ihre WebDAV-Freigabe.

Typische Einsatzzwecke sind Flussdiagramme, Netzpläne, Organigramme, Mindmaps oder Sitzpläne.

## Draw.io-Datei erstellen

1. Öffnen Sie die App **Dateien** und wechseln Sie in den gewünschten Ordner.
2. Klicken Sie unten rechts auf die Schaltfläche **Neu** (Plus-Symbol).
3. Wählen Sie **Neue Draw.io-Datei**.
4. Geben Sie im Dialog *Erstelle eine neue Draw.io-Datei* einen Namen ein und bestätigen Sie mit **Erstellen**.

Die Datei wird mit der Endung `.drawio` und einem leeren Diagramm angelegt und erscheint sofort in der Dateiliste.

:::info[Unterstützte Endungen]
Zum Ansehen und Bearbeiten erkennt edulution die Endungen `.drawio` und `.dio`. Neu erstellte Diagramme erhalten immer `.drawio`. Bestehende Diagramme können Sie also einfach in Ihr Verzeichnis hochladen und dort weiterbearbeiten.
:::

## Diagramm ansehen

Klicken Sie in der Dateiliste auf den Namen der Datei. Das Diagramm öffnet sich in der Dateivorschau – je nach Einstellung als angedockter Bereich neben der Dateiliste oder als frei verschiebbares Fenster.

In der Vorschau ist das Diagramm schreibgeschützt: Es gibt keine Werkzeugleiste, Sie können lediglich navigieren, zoomen und zwischen den Seiten eines Diagramms wechseln.

Über **In neuem Tab öffnen** in der Fensterleiste zeigen Sie das Diagramm bildschirmfüllend in einem eigenen Browser-Tab an.

## Diagramm bearbeiten

Klicken Sie in der Fensterleiste der Vorschau auf **Bearbeiten** (Stift-Symbol). Damit wechselt die Ansicht in den vollständigen Draw.io-Editor mit Formenbibliothek, Werkzeugleiste und Formatierungsbereich.

Zum Zurückschalten klicken Sie auf **Ansehen** (Augen-Symbol).

### Speichern

Sobald Sie im Editor etwas ändern, wird das Diagramm als geändert markiert und die Schaltfläche **Speichern** in der Fensterleiste aktiv. Sie haben zwei Möglichkeiten:

- **Speichern** in der Fensterleiste des Vorschaufensters (bzw. unten rechts, wenn Sie das Diagramm in einem eigenen Tab geöffnet haben)
- die Speichern-Schaltfläche des Draw.io-Editors selbst

In beiden Fällen wird die Datei in Ihrem Verzeichnis überschrieben; eine Bestätigung erscheint als kurze Meldung.

:::caution[Ungespeicherte Änderungen]
Schließen Sie die Vorschau, wechseln in den Ansichtsmodus oder öffnen eine andere Datei, während noch ungespeicherte Änderungen bestehen, fragt edulution über den Dialog *Ungespeicherte Änderungen* nach, ob gespeichert oder verworfen werden soll. Beim Schließen des Browser-Tabs greift zusätzlich die Warnung des Browsers.
:::

## Darstellung und Sprache

Der eingebettete Editor übernimmt automatisch die Einstellungen der edulution-Oberfläche:

| Einstellung | Verhalten |
|-------------|-----------|
| **Design** | Im dunklen Design nutzt Draw.io die dunkle Oberfläche, im hellen Design die helle. Ein Wechsel des Designs wirkt sich unmittelbar auf den Editor aus. |
| **Sprache** | Der Editor startet in der Sprache, die in edulution eingestellt ist. |

## Draw.io in anderen Bereichen

- **Wiki**: Als Anhang hinterlegte Draw.io-Dateien lassen sich in der Anhang-Vorschau ansehen. Bearbeitet werden sie in der App *Dateien*.
- **Freigabe-Links**: Draw.io-Dateien, die Sie öffentlich teilen, stehen über den Link zum **Herunterladen** bereit. Die Aktion *Im Browser öffnen* wird für Diagramme nicht angeboten.

## Administration: Draw.io-Instanz festlegen

Standardmäßig verwendet edulution die öffentliche Instanz `https://embed.diagrams.net`. Der Editor wird dabei als eingebettete Seite geladen, die Diagrammdaten selbst bleiben im Browser und werden ausschließlich in Ihre WebDAV-Freigabe zurückgeschrieben.

Wer den Editor im eigenen Netz betreiben möchte, hinterlegt die URL einer selbst gehosteten Draw.io-Instanz:

1. Öffnen Sie als Global-Admin die **Einstellungen** (Zahnrad-Symbol unten im Menü).
2. Wählen Sie die App **Dateien**.
3. Klappen Sie den Abschnitt **Draw.io Integration** auf.
4. Tragen Sie unter **Draw.io URL** die Basis-URL Ihrer Instanz ein (ohne abschließenden Schrägstrich, z. B. `https://drawio.schule.de`).
5. Speichern Sie die Einstellungen.

:::tip[Eigene Instanz]
Die Instanz muss das Einbetten erlauben (Draw.io-Embed-Modus). Das offizielle Container-Image `jgraph/drawio` bringt diese Funktion mit. Bleibt das Feld leer, greift wieder die Voreinstellung `https://embed.diagrams.net`.
:::

## Siehe auch

- [Dateien](./index.md) – Grundlagen der Dateiverwaltung
- [Vorschau und Drucken](./vorschau-und-drucken.md) – wie das Vorschaufenster allgemein funktioniert
- [Einstellungen](../../administration/einstellungen.md) – weitere Konfigurationsmöglichkeiten
