# Wiki

Das Wiki ist ein gemeinschaftliches Werkzeug zur Wissensverwaltung. Sie können Markdown-Seiten anlegen, in Ordnern organisieren, gemeinsam bearbeiten und über alle Wikis hinweg durchsuchen.

:::info WebDAV-Anbindung
Jedes Wiki ist an eine WebDAV-Freigabe gebunden. Die Sichtbarkeit eines Wikis lässt sich vom Global-Admin separat von der Datei-Freigabe steuern (siehe [Wiki-Einstellungen](../administration/wiki-einstellungen.md)).
:::

## Übersicht

![Wiki Übersicht](/img/wiki/uebersicht.png)

### Bereiche

**Seitenleiste:**
- Liste aller Wikis, auf die Sie Zugriff haben
- Aufklappbare Ordnerstruktur mit Unterseiten
- Filterfeld zum Eingrenzen der Baumansicht (Enter für Volltextsuche, alternativ `Strg + Umschalt + F`)

**Hauptbereich:**
- Anzeige der ausgewählten Seite (Lesen oder Bearbeiten)
- Werkzeugleiste mit Editor-Aktionen im Bearbeitungsmodus
- Statusanzeige mit Speicherzeitpunkt und Konflikt-Hinweisen

## Seiten lesen

Klicken Sie in der Seitenleiste auf einen Wiki-Eintrag, um den Inhalt zu öffnen. Ordner lassen sich aufklappen, um Unterseiten anzuzeigen. Enthält ein Ordner eine **Index-Seite** (`index`), wird diese als Startseite des Ordners angezeigt.

## Seiten bearbeiten

Klicken Sie auf **Bearbeiten** (Stift-Symbol), um in den Bearbeitungsmodus zu wechseln (Voraussetzung: Schreibrecht auf der zugrundeliegenden Datei-Freigabe). Mit **Schließen** verlassen Sie den Editor wieder.

### Werkzeugleiste

Die Editor-Leiste bietet:

- Überschriften, Absatz
- **Fett**, **Kursiv**, **Durchgestrichen**
- **Inline-Code** und **Code-Blöcke**
- **Aufzählungen**, **Nummerierte Listen**, **Aufgabenlisten**
- Zitat, horizontale Linie
- **Bilder** und **Links**
- **Tabellen**

### Wiki-Verlinkung

Verweise auf andere Wiki-Seiten lassen sich über die Syntax `[[Seitenname]]` einfügen. Während der Eingabe schlägt der Editor passende Seiten zur Auswahl vor.

### Speichern

Änderungen werden automatisch gespeichert. Die Statusanzeige zeigt den letzten Speicherzeitpunkt (z.B. `Gespeichert 10:40`) sowie Hinweise auf Fehler beim Speichern.

:::tip Entwurf wiederherstellen
Wenn Sie den Browser schließen, ohne zu speichern, werden Ihre Änderungen lokal als Entwurf gesichert. Beim nächsten Öffnen der Seite erscheint ein Banner zum **Wiederherstellen** oder **Verwerfen** des Entwurfs.
:::

### Konflikte

Speichert eine andere Person die gleiche Seite während Ihrer Bearbeitung, öffnet sich ein Dialog mit drei Spalten:

- **Ihre Version** – Ihre lokalen Änderungen
- **Andere Version** – die zwischenzeitlich gespeicherte Variante
- **Zusammengeführte Vorschau** – Vorschlag für die kombinierte Version

Sie können Ihre Version übernehmen, die andere übernehmen oder den Konflikt manuell bearbeiten.

## Seiten und Ordner anlegen

![Neue Seite anlegen](/img/wiki/neue-seite.png)

Über die Schaltflächen **Neue Seite** und **Neuer Ordner** in der Werkzeugleiste:

**Neue Seite**
1. Klicken Sie auf **Neue Seite**
2. Wählen Sie unter **Ort** den Zielordner
3. Geben Sie den **Titel** ein
4. Optional: Setzen Sie das Häkchen bei **Diese Seite als Hauptseite des Ordners anlegen** (Index), wenn die Seite als Einstiegsseite des Ordners dienen soll
5. **Erstellen** bestätigt das Anlegen

**Neuer Ordner**
1. Klicken Sie auf **Neuer Ordner**
2. Wählen Sie unter **Ort** den übergeordneten Ordner
3. Geben Sie den **Ordnernamen** ein
4. **Erstellen** bestätigt das Anlegen

## Seiten suchen

![Wiki Suche](/img/wiki/suche.png)

Die Volltextsuche öffnen Sie über das Filterfeld in der Seitenleiste (mit Enter bestätigen) oder die Tastenkombination `Strg + Umschalt + F`. Es erscheint der Dialog **Wikis durchsuchen**.

- Volltextsuche über alle Freigaben, auf die Sie Zugriff haben
- Auswahl des Suchbereichs: **Alle Freigaben** oder **Aktuelle Freigabe**
- Ergebnisliste mit Trefferausschnitt und hervorgehobenem Suchbegriff
- Klick auf einen Treffer öffnet die entsprechende Seite

:::note Eingeschränkte Suchergebnisse
Ist eine Freigabe vorübergehend nicht erreichbar (z.B. wegen Wartungsarbeiten), erscheint oberhalb der Trefferliste der Hinweis **Teilergebnisse angezeigt** mit der Liste der nicht verfügbaren Freigaben. Die Suche liefert dann nur Treffer aus den verfügbaren Wikis.
:::

## Seiten löschen

Über **Löschen** (Papierkorb-Symbol) in der Werkzeugleiste lässt sich die aktuell geöffnete Seite entfernen. Vor dem Löschen erscheint ein Bestätigungsdialog.

:::note Ordner löschen
Das Entfernen ganzer Ordner ist über die Wiki-Oberfläche derzeit nicht möglich – über die Werkzeugleiste lassen sich nur einzelne Seiten löschen. Leere Ordner und nicht mehr benötigte Unterstrukturen können über den direkten Zugriff auf die zugrundeliegende WebDAV-Freigabe (siehe [Dateien](dateien/index.md)) entfernt werden.
:::

:::caution Unwiderruflich
Gelöschte Wiki-Seiten können nicht aus der Anwendung wiederhergestellt werden. Bei Bedarf wenden Sie sich an Ihren Global-Admin – Wiki-Inhalte werden auf der zugrundeliegenden WebDAV-Freigabe gespeichert und sind ggf. über das Backup wiederherstellbar.
:::

## Rollenspezifische Unterschiede

### Lehrer und Mitarbeitende

- Lese- und Schreibzugriff auf Wikis, denen Ihre Datei-Freigabe und Ihre Wiki-Zugriffsgruppe zugeordnet sind
- Können Seiten und Ordner anlegen, bearbeiten und löschen

### Schüler

- Sehen nur Wikis, die Lese- und ggf. Schreibrechte für ihre Gruppe vorsehen
- Können Seiten lesen und – sofern auf der Freigabe erlaubt – mitbearbeiten

### Global-Admin

- Sieht alle aktivierten Wikis, sofern die Wiki-Zugriffsgruppen erfüllt sind
- Verwaltet **Wiki aktivieren** und **Wiki-Zugriffsgruppen** pro Freigabe in den Einstellungen (siehe [Wiki-Einstellungen](../administration/wiki-einstellungen.md))

## Tipps für die Nutzung

:::tip Anwendungsbeispiele
- **Lehrer-Wiki:** internes Handbuch für das Kollegium (Vertretungsregeln, IT-Hinweise, Kontakte)
- **Klassen-Wiki:** Lehrkraft pflegt Themenüberblicke, Schüler ergänzen eigene Notizen
- **Projekt-Wiki:** Dokumentation laufender Projekte mit Aufgabenlisten und Verlinkungen
:::

:::info Markdown-Hinweis
Das Wiki nutzt Standard-Markdown. Eine Übersicht der unterstützten Formatierungen finden Sie in der [Markdown-Hilfe](markdown-hilfe.md).
:::

## Siehe auch

- [Markdown-Hilfe](markdown-hilfe.md) – unterstützte Formatierungen im Wiki-Editor
- [Wiki-Einstellungen (Admin)](../administration/wiki-einstellungen.md) – Sichtbarkeit pro Freigabe steuern
- [Wiki-Infrastruktur (Admin)](../../edulution-fileproxy/wiki-infrastruktur.md) – Server-seitige Einrichtung des Suchindex
- [Dateien](dateien/index.md) – Datei-Freigaben, auf denen Wikis basieren
- [Mein Profil](../benutzer/mein-profil.md) – Gruppenzugehörigkeit prüfen
