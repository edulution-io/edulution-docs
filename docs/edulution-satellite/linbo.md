---
sidebar_position: 6
title: LINBO am Satelliten
description: Rechner am Standort eines Satelliten per LINBO bereitstellen – Gruppen, Hosts, Images, Synchronisation, DHCP, Protokolle, Hardware, Treiber, System und Einstellungen
sidebar_custom_props:
  audience: admin
---

# LINBO am Satelliten

LINBO startet Rechner über das Netzwerk und spielt Images auf. Ein Satellit bringt dafür eine eigene LINBO-Installation mit. Gruppen, Rechner und DHCP-Konfiguration übernimmt er per Synchronisation vom Linuxmuster-Server. Sie lassen sich am Satelliten nicht ändern, sondern nur am Server. Images liegen auf dem Satelliten selbst und lassen sich mit dem Server abgleichen.

Der Bereich **LINBO** der App **Satellites** zeigt, was die LINBO-Installation des **gewählten Satelliten** weiß. Er ist unabhängig vom Bereich **LINBO** der App **Schulserver**, der den zentralen Linuxmuster-Server zeigt.

Felder, Zustände, Grenzwerte und Meldungen stehen im [Nachschlagewerk](./linbo-referenz.md). Wie Sie den Satelliten auswählen, steht in [Satelliten verwalten](./verwaltung.md#satelliten-bereich).

Die Unterseiten sind **Gruppen**, **Hosts**, **Images**, **Synchronisation**, **DHCP**, **Protokolle**, **Hardware**, **Treiber** und **System**. **LINBO** öffnet zuerst **Gruppen**. **Einstellungen** in der Aktionsleiste jeder Unterseite öffnet den [Einstellungsdialog](#einstellungen). Solange der Browser-Tab sichtbar ist, laden sich die Unterseiten selbst nach: **Protokolle** alle 15 Sekunden, **Hosts**, **DHCP**, **Synchronisation** und **System** alle 30 Sekunden, alle übrigen jede Minute.

## Wenn LINBO nicht verfügbar ist

Meldet der Satellit keinen LINBO-Dienst, zeigen alle Unterseiten statt ihres Inhalts den Hinweis „LINBO ist auf diesem Satelliten nicht verfügbar.“ mit einer Erklärung.

1. Richten Sie LINBO in der Verwaltungsoberfläche des Satelliten auf der Seite **Satellite Linbo** ein, siehe [Einrichtung mit edulution](./einrichtung-mit-edulution.md#9-linbo-einrichten-optional).
2. Prüfen Sie unter **Einstellungen → Satellites** das Abzeichen **Linbo** am Satelliten. Es zeigt, ob der Dienst läuft.
3. Wählen Sie **Erneut versuchen**. Das lädt die Satellitenliste der Plattform neu.

Ist der Satellit nicht erreichbar, bleibt die Unterseite stehen und meldet einen Fehler.

## Gruppen

**Gruppen** zeigt die Hardwaregruppen, die der Satellit übernommen hat. Die Ansichten sind dieselben vier wie in der [Gruppenliste des Schulservers](../edulution-server/linuxmuster.md#gruppen): **Plattenkarte** (Vorgabe), **Kacheln**, **Datenblatt** und **Tabelle**. Es fehlen die Kachel zum Anlegen und alle Aktionen, die eine Gruppe ändern. Die gewählte Ansicht merkt sich die Plattform getrennt vom Schulserver.

Das Suchfeld findet Gruppen- und Dateinamen, zum Beispiel `start.conf.raum101`. Die Zahl der Rechner je Gruppe stammt aus der Hostliste des Satelliten, nicht aus der des Servers.

### Vorschau öffnen

Klicken Sie eine Karte oder Tabellenzeile an. Die Vorschau zeigt die Datei, wie der Satellit sie meldet:

- **Zusammenfassung** – die ausgewertete `start.conf` mit Schlüsseln und Plattenlayout.
- **Rohdaten** – der unveränderte Dateiinhalt.
- **GRUB cfg** – die GRUB-Konfiguration, sofern der Satellit eine hat. Für eine Gruppe ohne zugeordneten Rechner gibt es keine.

**Aktualisiert** zeigt den Zeitstempel der GRUB-Konfiguration der Gruppe, ersatzweise den Zeitpunkt der Synchronisation. Die letzte Änderung der `start.conf` ist das nicht.

### Aktion an eine Gruppe schicken

Markieren Sie genau eine Gruppe und wählen Sie **Aktion schicken**. Ziel sind alle Rechner der Hostliste des Satelliten, deren Gruppe so heißt. Rechner ohne MAC-Adresse oder ohne LINBO-Netzwerkstart lässt die Plattform aus und nennt sie. Der Dialog ist derselbe wie bei den [Hosts](#aktion-schicken). Nach dem Senden öffnet sich der Auftrag, siehe [Aufträge verfolgen und abbrechen](#aufträge-verfolgen-und-abbrechen).

Meldungen, wenn eine `start.conf` fehlt oder nicht lesbar ist: [Nachschlagewerk](./linbo-referenz.md#gruppen).

## Hosts

Die Unterseite hat drei Registerkarten: **Hosts**, **Aufträge** und **Beim nächsten Start**.

**Hosts** zeigt alle Rechner, die der Satellit kennt, in denselben drei Ansichten wie die [Hostliste des Schulservers](../edulution-server/linuxmuster.md#hosts): **Kacheln** (Vorgabe), **Datenblatt** und **Tabelle**. Die Plattform merkt sich die Ansicht getrennt vom Schulserver. Auf dem Satelliten gilt:

- **Status** ist der Zustand, den der Satellit meldet, nicht das Ergebnis eines Hostscans.
- **Rolle** ist eine Zeile im **Datenblatt** und ein Filter, keine Tabellenspalte.
- **Datenblatt** und Detaildialog zeigen zusätzlich **Image**, **Zuletzt gesehen** und **Geplant** – die Kette, die der Satellit für den nächsten Start vorgemerkt hat. Einen Abschnitt **Images** hat der Detaildialog nicht.

### Hosts suchen und filtern

Das Suchfeld findet Hostname, MAC-Adresse, IP, Gruppe, Raum und Kommentar. Die Auswahlen **Rolle**, **Gruppe** und **Raum** schränken die Liste auf einen oder mehrere Werte ein. Sie wirken zusammen und in allen Ansichten. Ein Rechner ohne Rolle zählt zu **Sonstige**. Beim Wechsel des Satelliten setzt die Seite alle drei zurück.

Spalten und Zustände: [Nachschlagewerk](./linbo-referenz.md#hosts).

### Rechner aufwecken und neu starten

Sobald Rechner ausgewählt sind, bietet die Aktionsleiste **Aufwecken**, **Neu starten**, **Herunterfahren** und **Aktion schicken** an. Die Aktionen erreichen nur ausgewählte Rechner, die Suche und Filter gerade anzeigen. Ausgeblendete Rechner bleiben ausgewählt, werden aber nicht angesprochen.

Welche Rechner die Plattform vorab auslässt:

| Aktion | Ohne MAC-Adresse | Ohne LINBO-Netzwerkstart |
|--------|------------------|--------------------------|
| **Aufwecken** | ausgelassen | wird versucht |
| **Neu starten**, **Herunterfahren**, **Aktion schicken** | ausgelassen | ausgelassen |

Ohne LINBO-Netzwerkstart heißt: Die einblendbare Spalte **PXE** steht weder auf `1` noch auf `2`. Ausgelassene Rechner nennt die Plattform namentlich. Ob **Aufwecken** Rechner ohne LINBO-Netzwerkstart erreicht, hängt vom Satelliten ab. Rechner, die er nicht übernimmt, meldet die Plattform ([Nachschlagewerk](./linbo-referenz.md#meldungen-beim-senden-von-aktionen)).

**Aufwecken** meldet die Zahl der gesendeten Weckpakete, nicht der gestarteten Rechner. Ob ein Rechner hochfährt, zeigt erst seine Spalte **Status**. Rechner, deren Paket hinausging, werden abgewählt.

**Neu starten** und **Herunterfahren** fragen vorher nach und nennen die ausgewählten Rechner. Wechseln Sie währenddessen den Satelliten, wird die Rückfrage verworfen und nichts geschickt. Nach der Bestätigung läuft die Aktion als sofort ausgeführte Kette: Der Auftrag erscheint unter **Aufträge**.

### Aktion schicken

**Aktion schicken** öffnet denselben [Dialog wie im Bereich Schulserver](../edulution-server/linuxmuster.md#der-kommando-dialog). Aktionen mit Betriebssystem setzen voraus, dass alle ausgewählten Rechner derselben Hardwaregruppe angehören. Auf dem Satelliten unterscheiden sich die Optionen:

- **Abstand zwischen den Weckpaketen (Sekunden)** und **Weckpaket zusätzlich an die Broadcast-Adresse senden** fehlen.
- Wake-on-LAN ist ein Schalter: **Rechner nach dem Planen aufwecken**.
- Wake-on-LAN, **Oberfläche des Clients beim nächsten Start abschalten** und **Automatische Funktionen der start.conf beim nächsten Start übergehen** erscheinen erst, wenn unter **Zeitpunkt** die Option **Beim nächsten Start** gewählt ist.

Mit **Jetzt** läuft die Kette sofort. Mit **Beim nächsten Start** schreibt der Satellit sie für den nächsten Start der Rechner vor; sie erscheint unter **Beim nächsten Start**. Ist das Wecken gewählt, werden nur Rechner geweckt, für die das Planen gelungen ist. Die übrigen nennt die Meldung.

:::caution[Planen ersetzt eine vorhandene Aktion]
Ist für einen Rechner schon eine Aktion für den nächsten Start geplant, ersetzt die neue sie ohne Rückfrage.
:::

Lehnt der Satellit ab, bleibt der Dialog geöffnet. Die Meldungen stehen im [Nachschlagewerk](./linbo-referenz.md#meldungen-beim-senden-von-aktionen).

### Aufträge verfolgen und abbrechen

Nach dem Senden öffnet sich der Auftrag in einem Dialog und lädt alle fünf Sekunden nach. Das gilt auch, wenn Sie die Aktion in **Gruppen** gestartet haben.

Die Registerkarte **Hosts** zeigt eine Vorschau: die drei jüngsten Aufträge und die ersten drei geplanten Starts. Die vollständigen Listen stehen auf **Aufträge** und **Beim nächsten Start**. **Aufträge** zeigt die Aufträge der letzten 24 Stunden, zehn je Seite. Die Auswahl **Status** schränkt sie auf einen Zustand ein; die Zustände stehen im [Nachschlagewerk](./linbo-referenz.md#aufträge).

Ein Klick auf einen Auftrag öffnet ihn mit jedem beteiligten Rechner: Zustand, aktueller Arbeitsschritt, Meldung des Satelliten in seinem Wortlaut und Protokoll.

:::caution[Abbrechen hält nur wartende Rechner an]
**Auftrag abbrechen** fragt vorher nach und stoppt nur Rechner, die noch nicht begonnen haben. Läuft die Kette schon, arbeitet der Rechner weiter und wird danach als abgebrochen geführt – auch wenn sein Schritt gelungen ist. Bis der letzte Rechner fertig ist, zeigt der Auftrag **Wird abgebrochen**.
:::

### Geplante Aktionen zurücknehmen

**Beim nächsten Start** listet je Rechner die Kette, die der Satellit vorgemerkt hat. **Entfernen** nimmt sie zurück; die Rückfrage nennt Rechner und Befehle. Hat der Rechner die Aktion inzwischen ausgeführt, verschwindet der Eintrag ohne Fehlermeldung. Bei einem geplanten Abbild-Upload zeigt die Liste statt der Befehle einen Hinweis.

## Images

**Images** verwaltet die LINBO-Images auf dem Satelliten und gleicht sie mit denen des Schulservers ab. Die Ansichten sind dieselben vier wie in der [Imageliste des Schulservers](../edulution-server/linuxmuster.md#images): **Speicher**, **Kacheln**, **Datenblatt** (Vorgabe) und **Tabelle**. Die Plattform merkt sich die Ansicht getrennt vom Schulserver. Das Suchfeld findet Images nach Namen.

Ein Klick auf eine Karte öffnet die [Beipack-Dateien](#beipack-dateien-bearbeiten). Alle anderen Aktionen bietet die Aktionsleiste an, sobald genau ein Image markiert ist: **Prüfsumme prüfen**, **Sicherungen**, **Bearbeiten**, **Vom Server holen**, **Zusatzdateien holen**, **Zum Server übertragen** und **Löschen**. Ein markiertes Image, das Suche oder Tabellenfilter ausblenden, bleibt markiert, zählt aber nicht mit.

Images, die nur auf dem Schulserver liegen, erscheinen nur in der **Tabelle**. Für sie ist nur **Vom Server holen** verfügbar. Bei Images im Altformat sind alle Aktionen gesperrt; der Grund steht am Knopf. Spalten, Zustände und Hinweise: [Nachschlagewerk](./linbo-referenz.md#images).

### Image übertragen

**Vom Server holen** und **Zum Server übertragen** bieten nur die Richtung an, die der Vergleich in der Spalte **Abgleich** zulässt. Eine gesperrte Richtung nennt ihren Grund am Knopf:

- Liegt das Image nur auf einer Seite, ist genau die Richtung möglich, die es auf die andere bringt.
- Sind beide Kopien gleich alt oder lässt sich nicht feststellen, welche neuer ist, bleiben beide Richtungen gesperrt.
- Würde die Übertragung die neuere Kopie durch die ältere ersetzen, warnt der Dialog unter **Die neuere Kopie wird überschrieben** mit beiden Zeitpunkten. Übertragen wird erst mit **Übertragung starten**.

:::warning[Was eine Übertragung überschreibt]
**Vom Server holen** löscht das Imageverzeichnis auf dem Satelliten vollständig – mit allen Sicherungen und Beipack-Dateien – und ersetzt es durch den Stand des Servers. **Zum Server übertragen** überschreibt das Image auf dem Schulserver, das auch andere Satelliten nutzen. Beides lässt sich nicht rückgängig machen.
:::

Solange eine Übertragung läuft oder wartet, zeigt die Seite die **Übertragungswarteschlange**: je Übertragung eine Zeile mit Image, Richtung, Fortschritt und Schritt. **Abbrechen** beendet eine Übertragung nach Rückfrage; Sie können sie später neu starten.

:::note[Das Ergebnis bleibt unsichtbar]
Ein beendeter Auftrag verlässt die Warteschlange, ohne dass die Plattform sein Ergebnis oder einen Fehler zeigt. Ob die Übertragung gelungen ist, erkennen Sie an der Spalte **Abgleich**: Steht dort nicht mehr der Unterschied, der Anlass war, hat sie funktioniert.
:::

### Zusatzdateien holen

Zusatzdateien sind die Beipack-Dateien eines Images wie `.info`, `.desc` oder `.reg`. **Zusatzdateien aktuell** und **Zusatzdateien veraltet** erscheinen nur bei Images, die es auf dem Satelliten und auf dem Server gibt. Bei veralteten Dateien holt **Zusatzdateien holen** sie vom Schulserver, ohne das Image selbst zu übertragen. „Aktuell“ heißt: gleiche Dateigröße wie auf dem Server, nicht zwingend gleicher Inhalt.

Die Rückfrage nennt, welche Dateien fehlen, sich geändert haben oder entfallen. Dateien, die es auf dem Server nicht mehr gibt, löscht der Satellit.

**Zusatzdateien für alle Images holen** in der Aktionsleiste braucht keine Auswahl und gleicht alle Images mit veralteten Zusatzdateien auf einmal ab. Der Vorgang kann einige Zeit dauern. Schlägt er bei einzelnen Images fehl, nennt die Meldung sie; die übrigen sind abgeglichen. Läuft er länger, als die Verbindung zum Satelliten zulässt, liest die Plattform den Abgleich mit der nächsten Aktualisierung neu.

Beide Aktionen sind gesperrt, solange der Abgleich unbekannt ist. Das Ergebnis meldet die Plattform in den Meldungen des [Nachschlagewerks](./linbo-referenz.md#images).

### Prüfsumme prüfen

Der Satellit berechnet die Prüfsumme und meldet, ob sie zur hinterlegten passt. Einen Fortschritt meldet er nicht. Bei großen Images dauert das länger, als die Verbindung zum Satelliten zulässt; die Prüfung läuft dann weiter, ihr Ergebnis ist aber nicht mehr abrufbar. Meldet der Satellit, dass keine Prüfsumme hinterlegt ist, sperrt die Plattform **Prüfsumme prüfen** für dieses Image. Haben Sie inzwischen einen anderen Satelliten gewählt, erscheint das Ergebnis trotzdem, mit dem Zusatz „Auf dem Satelliten …“.

### Sicherungen verwalten

Der Dialog ist derselbe wie im Bereich **LINBO** der App **Schulserver**. Er listet die Sicherungen mit Zeitpunkt, Dateizahl und Größe. Sie können Sicherungen wiederherstellen oder löschen; beides fragt vorher nach. Der Hinweis, dass sich eine Wiederherstellung zurücknehmen lässt, und die Einstellungen je Sicherung fehlen, weil der Satellit beides nicht anbietet.

:::warning[Wiederherstellen mischt zwei Stände]
Beim Wiederherstellen wird die Sicherung selbst gelöscht. Dateien, die im Image vorhanden sind, in der Sicherung aber fehlen, bleiben erhalten. Das Ergebnis ist eine Mischung aus beiden Ständen und lässt sich nicht rückgängig machen.
:::

### Beipack-Dateien bearbeiten

Der Dialog hat dieselben Registerkarten wie am Schulserver: **Beschreibung**, **Info**, **Registry**, **Pre-Start Script** und **Post-Sync Script**. **Info** enthält Angaben des Satelliten und ist nur lesbar. Eine **VDI-Konfiguration** bietet der Satellit nicht an.

Anders als am Schulserver speichert **Speichern** nur die Datei der geöffneten Registerkarte. Änderungen in anderen Registerkarten bleiben als Entwurf stehen. Schließen Sie den Dialog mit einem Entwurf, fragt die Plattform, ob Sie weiterbearbeiten oder verwerfen wollen.

:::note[Eine Änderung gilt für Basis- und Differenzimage]
**Registry** (`.reg`), **Pre-Start Script** (`.prestart`) und **Post-Sync Script** (`.postsync`) teilen sich Basis- und Differenzimage. Ein leerer Inhalt löscht die Datei nicht, sondern setzt sie auf null Bytes. Beipack-Dateien zu löschen bietet der Satellit nicht an.
:::

Grenzen und Meldungen beim Speichern: [Nachschlagewerk](./linbo-referenz.md#beipack-dateien).

### Image löschen

Vor dem Löschen ermittelt die Plattform den Umfang und nennt ihn im Bestätigungsdialog: Gelöscht wird das gesamte Imageverzeichnis mit allen Dateien und Sicherungen, unwiderruflich. Lässt sich der Umfang nicht ermitteln, löscht die Plattform das Image nicht.

### Torrent-Verteilung

Verteilt der Satellit ein Image per Torrent, zeigen die Karten eine Marke mit dem Zustand der Verteilung, die Tabelle die Spalte **Torrent**. Beim Überfahren mit der Maus nennt die Marke Gründe und die Zahl der Seeder und Leecher. Die Beipack-Dateien eines Images zeigen im Abschnitt **Torrent** den vollständigen Zustand mit Tracker, Meldezeitpunkt und festgestellten Problemen. Die Zustände stehen im [Nachschlagewerk](./linbo-referenz.md#torrent-verteilung).

## Synchronisation

**Synchronisation** zeigt, was der Satellit vom Linuxmuster-Server übernommen und angewendet hat, und lässt Sie einen Lauf von Hand anstoßen. Die Seite hat den Abschnitt **Synchronisationszustand**, je eine Karte für **Hosts und Gruppen**, **start.conf**, **devices.csv**, **GRUB und hostcfg** und **DHCP-Konfiguration** sowie die **Sicherungspunkte**. Zustände und Stufen: [Nachschlagewerk](./linbo-referenz.md#synchronisation).

:::note[Offline heißt nicht abgeschaltet]
Als **Modus** zeigt die Seite **Offline**, wenn der Satellit seine Einstellungen nicht lesen konnte oder die Plattform die Anfrage nicht stellen konnte. Die Anzeige belegt nicht, dass die Synchronisation abgeschaltet ist. Prüfen Sie im Zweifel die **Einstellungen**.
:::

### Einen Lauf anstoßen

Die Aktionsleiste bietet drei Läufe an. Jeder fragt vor dem Start nach:

| Aktion | Wirkung |
|--------|---------|
| **Synchronisieren** | übernimmt nur, was sich seit dem letzten Lauf geändert hat |
| **Komplett-Sync** | übernimmt den gesamten Bestand und schreibt alle verwalteten Dateien neu |
| **Cursor leeren** | startet keinen Lauf, sorgt aber dafür, dass der nächste gewöhnliche Lauf wieder alles übernimmt |

Steht der Satellit im Modus **Offline**, weist ein Hinweis oben auf der Seite darauf hin, dass die Synchronisation deaktiviert ist. **Synchronisieren**, **Komplett-Sync**, **Cursor leeren** und **Wiederherstellen** stehen dann nicht zur Verfügung, bis der Modus in den Einstellungen wieder auf **Synchronisation aktiv** steht.

Während eines Laufs nennt die Seite, sofern der Satellit sie meldet, die aktuelle Phase (zum Beispiel „start.conf-Dateien werden geschrieben“) und die Kennung des Laufs.

Solange ein Lauf läuft, verschwinden diese Aktionen und Sicherungspunkte lassen sich nicht wiederherstellen – auch bei einem Lauf, den der Satellit nach seinem Zeitplan selbst gestartet hat. Läuft schon einer, meldet die Seite das, statt einen zweiten zu starten. Die Seite folgt einem Lauf höchstens fünf Minuten, auch wenn sie keinen Lauf beobachtet; danach fragt sie wieder im normalen Abstand.

### Technische Details einer Karte

Jede Karte hat die Schaltfläche **Details**. Sie öffnet die vier Stufen **Gewünscht**, **Geschrieben**, **Geprüft** und **Angewendet** mit Revision, Quell-, erwarteter und wirksamer Revision, Zeitpunkten, Zusammenfassung und Fehler der jeweiligen Stufe. Darüber stehen die letzte gute Revision und ein Fehler der Komponente.

### Sicherungspunkt wiederherstellen

Vor einem Lauf legt der Satellit einen Sicherungspunkt an. Der Abschnitt **Sicherungspunkte** listet sie mit Zeitpunkt, Kennung, Anlass, den gezählten Änderungen sowie der Zahl der gesicherten Dateien und Symlinks. **Wiederherstellen** fragt vorher nach und nennt den Sicherungspunkt. Nach der Wiederherstellung nennt die Seite, wie viele Dateien und Symlinks zurückgespielt wurden.

:::warning[Was eine Wiederherstellung ersetzt]
Alle verwalteten `start.conf`-Dateien, alle DHCP- und GRUB-Konfigurationen sowie der zwischengespeicherte Host- und Gruppenbestand werden gelöscht und durch den Stand des Sicherungspunkts ersetzt. Images und Treiber bleiben unberührt.
:::

## DHCP

**DHCP** zeigt, was der DHCP-Dienst des Satelliten tut. Die Seite ist nur lesbar: Adressen lassen sich weder vergeben noch freigeben. Die DHCP-Konfiguration stammt aus der [Synchronisation](#synchronisation). Zwei Registerkarten gliedern die Seite:

- **Vergebene Adressen** – die Adressen, die der Dienst kennt. Das Suchfeld findet Adresse, MAC, Hostname und Hersteller. Der Schalter **Nur aktive** blendet alle übrigen aus.
- **Verlauf** – die letzten 500 Zeilen des DHCP-Protokolls. Das Suchfeld findet die MAC- oder IP-Adresse eines Clients. Die Auswahl **Meldungstyp** schränkt auf Typen wie `DHCPDISCOVER`, `DHCPOFFER`, `DHCPREQUEST` oder `DHCPACK` ein.

Spalten, Zustände und Meldungen: [Nachschlagewerk](./linbo-referenz.md#dhcp).

## Protokolle

**Protokolle** zeigt die letzten 500 Einträge des LINBO-Dienstes auf dem Satelliten. Das Suchfeld durchsucht die Meldungen. Die Auswahl **Stufe** schränkt auf **Fehler**, **Warnung**, **Info** oder **Debug** ein und nennt je Stufe die Zahl der geladenen Einträge.

Ein Klick auf einen Eintrag öffnet den Dialog **Protokolleintrag** mit Typ, Zeit, Stufe und vollständiger Meldung. **Kopieren** übernimmt den Eintrag als JSON. Per Tastatur erreichen Sie den Dialog über **Details anzeigen** in der Spalte **Aktionen**.

Scheitert eine Aktualisierung, bleibt der zuletzt geladene Stand stehen und die Seite meldet den Fehler. Meldungen: [Nachschlagewerk](./linbo-referenz.md#protokolle).

## Hardware

**Hardware** zeigt das Hardware-Inventar der Rechner am Standort. Rechner ohne Inventardaten stehen mit leeren Feldern in der Liste, ebenso Geräte mit Inventardaten, die der Satellit keinem Host zuordnen kann. Das Suchfeld durchsucht Hostname, IP- und MAC-Adresse, Gruppe, Raum, Modell, Seriennummer und Prozessor.

Ein Klick auf eine Zeile öffnet die Einzelheiten des Rechners. **Neu lesen** im Dialog liest die Hardwaredaten dieses Rechners erneut ein; ohne IP-Adresse des Rechners ist die Aktion gesperrt.

**Alle scannen** liest die Hardwaredaten aller Rechner ein. Die Meldung danach nennt, wie viele gelesen wurden, wie viele bereits erfasst waren, wie viele ohne Datei blieben und wie viele fehlschlugen. Dauert der Scan länger, als die Verbindung zum Satelliten zulässt, läuft er auf dem Satelliten weiter. Die Seite meldet das und lädt die Tabelle alle fünf Sekunden nach, bis sich drei Abfragen in Folge nichts ändert – frühestens nach 30 Sekunden, höchstens nach drei Minuten. Eine Ergebnismeldung gibt es dann nicht.

Meldungen: [Nachschlagewerk](./linbo-referenz.md#hardware).

## Treiber

Ein Treiber-Profil bündelt die Treiberdateien für ein Gerätemodell und lässt sich einem Image zuordnen.

:::caution[Zugeordnete Treiber wirken erst ab LINBO 7.4.8]
Zugewiesene Treiber erreichen die Clients erst mit LINBO 7.4.8 oder neuer. Fehlt die Installation auf dem Satelliten, zeigt die Seite „Treiber werden noch nicht installiert“, und Zuordnungen bleiben ohne Wirkung. Aktualisieren Sie LINBO auf der Unterseite [System](#system) und laden Sie die Seite neu.
:::

### Profil anlegen

**Profil anlegen** erzeugt ein Profil aus einem laufenden Client: Der Satellit liest dessen Hardwaredaten per SSH. Der Client muss deshalb gestartet und erreichbar sein.

1. Wählen Sie **Profil anlegen**.
2. Geben Sie die IPv4-Adresse des Clients ein oder wählen Sie einen Host aus der Liste.
3. Bestätigen Sie.

Gibt es das Profil schon, meldet die Seite das, statt ein zweites anzulegen.

### Profil bearbeiten

Ein Klick auf ein Profil öffnet seinen Dialog:

- **Image-Zuordnung** – wählen Sie ein Image des Satelliten und ordnen Sie es zu; **Zuordnung entfernen** löst es.
- **match.conf** – die Zuordnungsdatei des Profils, direkt bearbeitbar. **Änderungen verwerfen** stellt den gespeicherten Stand wieder her.
- **Dateien** – die Treiberdateien, nur lesbar. Hochladen ist nicht möglich.
- **Profil löschen** – löscht das Profil mit allen Treiberdateien endgültig, nach einer Rückfrage. Solange ein Image zugeordnet ist, ist die Aktion gesperrt; entfernen Sie zuerst die Zuordnung.

Grenzen für **match.conf**: [Nachschlagewerk](./linbo-referenz.md#treiber).

## System

**System** verwaltet die Boot-Dateien, die der Satellit den LINBO-Clients ausliefert. Die Seite besteht aus der Karte **linbofs64** und den Registerkarten **Kernel**, **Firmware** und **WLAN**. **Neu laden** liest alle vier Bereiche neu.

Firmware- und WLAN-Änderungen erreichen die Clients erst, wenn linbofs64 neu gebaut ist. Während auf dem Satelliten ein Neubau oder eine Aktualisierung läuft, sind alle ändernden Aktionen der Unterseite gesperrt.

### linbofs64 neu bauen

**linbofs64 neu bauen** – in der Karte und in der Aktionsleiste – baut die Datei mit den aktuellen Passwörtern, Schlüsseln sowie den Firmware- und WLAN-Einstellungen neu. Der Neubau dauert einige Minuten, die neue Datei gilt für Clients ab ihrem nächsten Start. Zustände der Karte: [Nachschlagewerk](./linbo-referenz.md#system).

### LINBO aktualisieren

Die Karte **LINBO-Paket und Boot-Dateien** auf der Registerkarte **Kernel** zeigt die installierte und die verfügbare Version. **Auf Aktualisierung prüfen** fragt die Paketquelle neu ab. Gibt es eine neuere Version, erscheint **LINBO aktualisieren**.

Die Aktualisierung lädt das Paket, prüft die Prüfsumme, entpackt es, richtet die Boot-Dateien ein und baut zum Schluss linbofs64 neu. Sie dauert einige Minuten und zeigt Schritt und Fortschritt. **Aktualisierung abbrechen** bricht sie ab. Clients übernehmen die neuen Boot-Dateien bei ihrem nächsten Start.

Erreicht der Satellit die Paketquelle nicht, lässt sich nicht prüfen, ob die Boot-Dateien aktuell sind. Prüfen Sie dann Internetzugang und DNS des Satelliten.

### Kernel wechseln

Die Karte **Kernel** zeigt die aktive Variante – **Stable**, **Longterm** oder **Legacy** –, ihre Version und Größe. **Aktivieren** bei einer anderen Variante wechselt den Kernel und baut dabei linbofs64 neu; Clients starten ab ihrem nächsten Start mit dem neuen Kernel. Eine nicht installierte Variante lässt sich nicht aktivieren. Liefert die installierte LINBO-Version nur einen Kernel, gibt es keine Auswahl.

Ist die Kernel-Konfiguration ungültig, warnt die Karte und sperrt den Wechsel. **Konfiguration reparieren** setzt sie auf **Stable** zurück; **Reparieren und neu bauen** baut danach zusätzlich linbofs64 neu. Beides ist auch bei gültiger Konfiguration verfügbar. Ein Fehler des letzten Wechsels steht im Wortlaut des Satelliten auf der Karte.

### Firmware eintragen

Die Registerkarte **Firmware** steuert, welche Firmware-Dateien linbofs64 enthält:

- **Firmware der Clients** wertet die Boot-Protokolle aus und nennt je Client, ob alles **In Ordnung** ist oder **Firmware fehlt**. Bei fehlender Firmware öffnet **Firmware suchen** die Suche mit dem Namen der fehlenden Datei.
- **Eingetragene Firmware** listet die Einträge von linbofs64. **Firmware hinzufügen** öffnet die Suche; Löschen fragt vorher nach.
- **Katalog** bietet Firmware in ausklappbaren Herstellergruppen an. **Hinzufügen** trägt einen Eintrag ein. Ist er vollständig eingetragen, steht dort **Eingetragen**.

Die Suche im Dialog **Firmware hinzufügen** findet Dateien und Verzeichnisse auf dem Satelliten und beginnt ab zwei Zeichen. Mehrere Treffer tragen Sie mit **Auswahl hinzufügen** gemeinsam ein. Bei Katalogeinträgen, die dem Satelliten fehlen, steht **Nicht auf dem Satelliten**.

### WLAN für LINBO-Clients hinterlegen

Die Registerkarte **WLAN** hinterlegt die Zugangsdaten, die LINBO-Clients beim Start nutzen: **Netzwerkname (SSID)**, **Verschlüsselt (WPA-PSK)**, **Schlüssel** und **Verstecktes Netzwerk**. Der Schlüssel wird nie angezeigt; ein leeres Feld lässt ihn unverändert. **WLAN ausschalten** löscht die Konfiguration nach einer Rückfrage; Clients verbinden sich nach dem Neubau von linbofs64 nicht mehr mit dem WLAN. Grenzen: [Nachschlagewerk](./linbo-referenz.md#system).

## Einstellungen

**Einstellungen** in der Aktionsleiste öffnet den Dialog **LINBO-Einstellungen**. Er wirkt nur auf den gewählten Satelliten; die Plattformeinstellungen bleiben unberührt. Ein Lesezeichen auf die frühere Unterseite **Einstellungen** führt zu **Hosts** und öffnet dort den Dialog.

Der Dialog hat drei Teile: **Verbindung zum Schulserver** mit **Verbindung testen**, **Synchronisation** und **LINBO-Client-Passwort**. Felder und Kennzeichnungen stehen im [Nachschlagewerk](./linbo-referenz.md#einstellungen).

### Einstellungen speichern

**Speichern** übernimmt alle geänderten Felder auf einmal; unveränderte Felder sendet die Plattform nicht mit. Passt ein Wert nicht, nennt die Plattform am Feld den Grund, und Sie können nichts speichern. Leerzeichen am Anfang und Ende entfernt sie. Ein geleertes Feld gilt als Fehler; nur das Passwort darf leer bleiben und bleibt dann unverändert.

Lehnt der Satellit einzelne Felder ab, bleibt der Dialog offen und nennt sie. Die übrigen Änderungen sind dann bereits gespeichert, die abgelehnten stehen weiter im Formular. Schließen Sie den Dialog mit ungespeicherten Änderungen, fragt die Plattform, ob Sie sie verwerfen möchten. Wechseln Sie den Satelliten, werden die Eingaben verworfen, damit kein Wert und vor allem kein Passwort auf dem falschen Gerät landet.

:::note[Zeitplan und Intervall starten womöglich sofort einen Lauf]
Änderungen an **Synchronisation aktiv** und **Intervall (Sekunden, 0 deaktiviert)** richten den Zeitplan des Satelliten neu ein. Ist ein Lauf dabei überfällig, startet der Satellit ihn sofort nach dem Speichern. Die Rückfrage weist darauf hin.
:::

### Passwort der Schulserver-Verbindung

Das gespeicherte Passwort gibt der Satellit nicht heraus. Das Feld zeigt als Hinweis die maskierte Form, die er meldet, oder **Nicht gesetzt**. Das Eingabefeld beginnt bei jedem Aufruf leer (Platzhalter *Unverändert lassen*). Ein leeres Feld löscht das Passwort nicht, sondern wird nicht gesendet.

### Verbindung testen

**Verbindung testen** prüft, ob der Satellit den Schulserver erreicht. Er verwendet die eingetragenen, noch nicht gespeicherten Werte von **API-Adresse**, **Benutzer** und **Passwort** und für leere Felder die gespeicherten. So prüfen Sie ein neues Passwort vor dem Speichern. Der Test speichert nichts. Die möglichen Ergebnisse stehen im [Nachschlagewerk](./linbo-referenz.md#einstellungen).

### Einstellungen auf Standard zurücksetzen

Zurücksetzen verwirft eine hier gesetzte Überschreibung, sodass wieder der Wert aus der Umgebung oder der Vorgabewert gilt. **Auf Standard zurücksetzen** in der Fußleiste setzt alle Felder mit der Kennzeichnung **Überschrieben** zurück. Ein einzelnes Feld setzt das Pfeil-Symbol an seiner Kennzeichnung zurück; es erscheint nur bei überschriebenen Feldern. Werte aus der Umgebung lassen sich hier nicht zurücksetzen.

Die Rückfrage nennt die betroffenen Einstellungen. Betrifft das **API-Adresse**, **Benutzer**, **Passwort**, **Schule** oder **LINBO-Server-IP**, warnt sie: Die Synchronisation hängt von der Einstellung ab und schlägt fehl, wenn der danach geltende Wert nicht passt.

### LINBO-Client-Passwort ändern

Mit dem **LINBO-Client-Passwort** melden sich die LINBO-Clients per rsync am Satelliten an. Es hat mit dem Passwort der Schulserver-Verbindung nichts zu tun und wird nie angezeigt.

1. Geben Sie das Passwort unter **Neues Passwort** und **Neues Passwort wiederholen** ein.
2. Wählen Sie **Passwort ändern**.
3. Bestätigen Sie die Rückfrage.

Der Abschnitt wirkt unabhängig von **Speichern**. Die Eingabefelder sind danach in jedem Fall leer. Sind sie beim Schließen des Dialogs noch gefüllt, fragt die Plattform wie bei ungespeicherten Einstellungen nach. Regeln für das Passwort: [Nachschlagewerk](./linbo-referenz.md#einstellungen).

:::warning[Das Ändern baut linbofs64 neu]
Der Satellit baut linbofs64 mit dem neuen Passwort neu auf, was einen Moment dauert. Clients, die noch mit dem alten Passwort gestartet wurden, melden sich erst nach einem Neustart wieder an.
:::

## Siehe auch

- [Nachschlagewerk: LINBO am Satelliten](./linbo-referenz.md) – Felder, Zustände, Grenzwerte, Meldungen
- [Satelliten verwalten](./verwaltung.md) – Kopplung, Status, Netzwerke, Dienste
- [Einrichtung mit edulution](./einrichtung-mit-edulution.md) – LINBO am Satelliten einrichten
