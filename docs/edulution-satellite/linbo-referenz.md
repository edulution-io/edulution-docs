---
sidebar_position: 7
title: LINBO am Satelliten – Nachschlagewerk
description: Spalten, Zustände, Grenzwerte und Meldungen der LINBO-Unterseiten eines Satelliten
sidebar_custom_props:
  audience: admin
---

# LINBO am Satelliten – Nachschlagewerk

Diese Seite listet Spalten, Zustände, Grenzwerte und Meldungen der LINBO-Unterseiten eines Satelliten. Das Vorgehen steht in [LINBO am Satelliten](./linbo.md). Texte, die der Satellit selbst meldet, zeigt die Plattform in seinem Wortlaut.

## LINBO nicht verfügbar

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| LINBO ist auf diesem Satelliten nicht verfügbar. | Der Satellit meldet keinen LINBO-Dienst. Dasselbe gilt, wenn er dazu nichts meldet und auf eine Anfrage antwortet, dass LINBO auf ihm nicht eingerichtet ist. Der Satz ist die Überschrift, es folgt eine Beschreibung. | LINBO am Satelliten einrichten, danach **Erneut versuchen** wählen. Das lädt die Satellitenliste der Plattform neu. |

Ist der Satellit nicht erreichbar, bleibt die Unterseite stehen und meldet einen Fehler.

## Gruppen

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Die Gruppen des Satelliten konnten nicht geladen werden. | Der Satellit hat die Gruppenliste nicht geliefert. | Erreichbarkeit des Satelliten prüfen. Die Seite fragt jede Minute neu. |
| Die start.conf dieser Gruppe konnte nicht gelesen werden. | Eine einzelne `start.conf` ist nicht lesbar, etwa weil die Datei auf dem Satelliten fehlt, obwohl die Gruppe in der Liste steht. Die Gruppe erscheint dann als eine ohne `start.conf`. | [Synchronisation](./linbo.md#einen-lauf-anstoßen) anstoßen. |
| Diese Gruppe hat keine start.conf und keine GRUB-Konfiguration. | Die Datei fehlt oder ist leer, und es gibt auch keine GRUB-Konfiguration. Eine leere Datei behandelt die Vorschau wie eine fehlende. | Gruppe am Linuxmuster-Server prüfen, danach synchronisieren. |

Bei vielen Gruppen erscheint die Liste erst, wenn alle Dateien gelesen sind.

## Hosts

### Spalten

Die **Tabelle** zeigt **Hostname**, **MAC-Adresse**, **IP**, **Gruppe**, **Raum**, **Status**, **Image** und **Zuletzt gesehen**. Über die Spaltenauswahl blenden Sie sechs weitere ein:

| Spalte | Inhalt |
|--------|--------|
| **PXE** | LINBO-Netzwerkstart; `1` oder `2` bedeutet, dass der Rechner über LINBO vom Netzwerk startet |
| **PXE aktiv**, **Kommentar**, **DHCP-Optionen**, **Office-Schlüssel**, **Windows-Schlüssel** | Angaben der Geräteliste |

**Gruppe** und **Raum** bieten nur Werte an, die mindestens ein Rechner des Satelliten trägt, und erscheinen erst, wenn es welche gibt.

### Status und Image

**Status** zeigt, was der Satellit meldet: **Online**, **Offline**, **Überträgt** oder **Unbekannt**. Einen Wert, den die Plattform nicht kennt, zeigt sie unverändert an.

Die Spalte **Image** zeigt **Aktuell**, **Veraltet**, **Nie synchronisiert** oder **Unbekannt** und nennt den Namen des Images. Die Plattform gibt dabei den Abgleichsstand wieder, den der Satellit je Rechner meldet.

### Aufträge

**Aufträge** zeigt die Aufträge der letzten 24 Stunden. Der Filter **Status** bietet diese Zustände an:

| Zustand | Hinweis |
|---------|---------|
| **Wartet**, **Läuft** | Der Auftrag ist noch nicht beendet. |
| **Wird abgebrochen** | Der Abbruch läuft, bis der letzte Rechner fertig ist. |
| **Erfolgreich** | Alle Rechner waren erfolgreich. |
| **Teilweise fehlgeschlagen** | Mindestens ein Rechner schlug fehl oder wurde abgebrochen, oder der Satellit meldet den Auftrag mit Fehlern abgeschlossen. |
| **Fehlgeschlagen**, **Abgebrochen** | Der Satellit meldet den Auftrag so. |

Die Plattform leitet den Zustand aus den Rechnern des Auftrags ab, nicht allein aus der Meldung des Satelliten. Ein Rechner im Auftrag ist **Wartet**, **Läuft**, **Erfolgreich**, **Fehlgeschlagen** oder **Abgebrochen**. Der Filter gilt nur auf der Registerkarte **Aufträge**; beim Zurückwechseln zu **Hosts** entfällt er.

### Meldungen beim Senden von Aktionen

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Ein Rechner ist bereits mit einem Auftrag beschäftigt, oder zwei ausgewählte Rechner teilen sich eine Adresse. | Auf einem Rechner läuft schon ein Auftrag, oder zwei ausgewählte Rechner haben dieselbe Adresse. Die Meldung unterscheidet beides nicht. | **Auftrag anzeigen** in der Meldung öffnet den belegenden Auftrag, sofern der Satellit ihn nennt. Sonst den Auftrag abwarten oder die Adressen der Rechner prüfen. |
| Der Satellit nimmt gerade keine weiteren Aufträge an. Bitte in einer Minute erneut versuchen. | Der Satellit begrenzt, wie viele Aufträge er je Minute annimmt. | Nach einer Minute erneut versuchen. |
| Diese Rechner hat der Satellit nicht übernommen – er kennt sie nicht oder sie starten nicht über das Netzwerk: *Namen* | Der Satellit hat die genannten Rechner nicht in den Auftrag aufgenommen. | Synchronisation anstoßen, damit der Satellit den Rechner kennt; LINBO-Netzwerkstart in der Geräteliste am Server prüfen. |
| Ohne MAC-Adresse übersprungen: *Namen* | Für den Rechner ist keine MAC-Adresse hinterlegt. | MAC-Adresse am Server eintragen. |
| Ohne LINBO-Netzwerkstart übersprungen: *Namen* | In der Geräteliste ist für den Rechner kein LINBO-Netzwerkstart eingetragen. | LINBO-Netzwerkstart am Server eintragen. |
| *n* von *m* Rechnern konnten nicht geplant werden: *Namen* | Der Satellit konnte die Kette für den nächsten Start nicht vormerken. | Aktion für die genannten Rechner wiederholen. |
| *n* von *m* Rechnern konnten nicht geplant werden: *Namen* (beim Aufwecken mit Kette) | Planen und Wecken laufen in einer Anfrage. Der Satellit hat die Kette für diese Rechner nicht vormerken können; er weckt trotzdem. Ältere Satelliten melden das nicht. | Aktion für die genannten Rechner wiederholen. |
| *n* von *m* Weckpaketen gesendet – ob die Rechner starten, zeigt erst ihr Status | Die Zahl zählt gesendete Pakete, nicht gestartete Rechner. | Spalte **Status** beobachten. |
| *n* Weckpakete konnten nicht gesendet werden | Der Satellit konnte einzelne Pakete nicht senden. | Aufwecken wiederholen. |
| Der Satellit hat *n* von *m* Rechnern übernommen. Die übrigen kennt er nicht oder sie starten nicht über das Netzwerk. | Der Satellit hat weniger Rechner übernommen als gesendet. Die Plattform zeigt den Hinweis nur für Aufträge, die Sie in dieser Browsersitzung gesendet haben. | Synchronisation anstoßen und LINBO-Netzwerkstart in der Geräteliste am Server prüfen. |

Ist der Satellit nicht erreichbar, erscheint die allgemeine Fehlermeldung der Plattform.

### Meldungen der Listen

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Die Hosts des Satelliten konnten nicht geladen werden. | Die Hostliste ist nicht lesbar. Die Tabelle bleibt leer. Die Plattform meldet den Fehler zusätzlich, wenn Sie die Seite öffnen oder neu laden. | Erreichbarkeit des Satelliten prüfen. |
| Der Image-Status der Hosts konnte nicht gelesen werden. Die Spalte „Image“ zeigt deshalb „Unbekannt“. | Der Image-Stand kommt aus einer eigenen Abfrage, die gescheitert ist. Die Rechner stehen trotzdem in der Tabelle. | Seite später erneut öffnen. |
| Die Aufträge des Satelliten konnten nicht gelesen werden. | Der Satellit hat die Auftragsliste nicht geliefert. Die Seite zeigt statt einer leeren Liste diese Meldung. | Erreichbarkeit prüfen. |
| Die geplanten Aktionen des Satelliten konnten nicht gelesen werden. | Der Satellit hat die Liste **Beim nächsten Start** nicht geliefert. | Erreichbarkeit prüfen. |
| Keine Aufträge in den letzten 24 Stunden. | Es gibt keine Aufträge. | – |
| Für keinen Rechner ist eine Aktion geplant. | Es ist nichts für den nächsten Start vorgemerkt. | – |
| Geplanter Abbild-Upload – die Befehle enthalten Zugangsdaten und werden nicht angezeigt | Die Befehle eines geplanten Abbild-Uploads enthalten Zugangsdaten. Die Plattform zeigt sie deshalb nicht. | – |

## Images

### Spalten

Die **Tabelle** zeigt **Name**, **Typ** (**Basisimage** oder **Differenzimage**), **Größe**, **Verwendet in**, **Status**, **Abgleich**, **MD5**, **Info**, **Beschreibung** und **Aktualisiert**. Meldet der Satellit den Zustand seiner Torrent-Verteilung, kommt **Torrent** hinzu.

| Spalte | Bedeutung |
|--------|-----------|
| **Verwendet in** | die Gruppen des Satelliten, deren `start.conf` das Image startet; dieselbe Angabe tragen die Karten |
| **Status** | **Verfügbar** – im Imageverzeichnis abgelegt; **Altformat** – außerhalb der Imageverzeichnisse |
| **Abgleich** | Vergleich mit dem Schulserver: **Satellit neuer**, **Server neuer**, **Gleich alt**, **Nur am Satelliten**, **Nur am Server** oder **Unbekannt** |
| **Torrent** | Zustand der Torrent-Verteilung, siehe [Torrent-Verteilung](#torrent-verteilung) |

Images nur auf dem Schulserver stehen mit **Nur am Server**, Größe und Datum des Servers und ohne Status in der **Tabelle**. In den Kartenansichten fehlen sie.

### Angaben der Karten

Meldet der Satellit Beschreibung, Prüfsumme, Angaben der Info-Datei und vorhandene Zusatzdateien nicht in seiner Imageliste, fehlen sie in den Karten. **Partition** und **Partitionsgröße** entnimmt die Plattform dann der `start.conf` der Gruppen, die das Image verwenden – bei mehreren der in Namensreihenfolge ersten. Gibt es keine verwendende Gruppe, bleiben beide Angaben und die Anzeige **Partition gefüllt** leer.

Ob eine Prüfsumme vorliegt, fragt die Plattform erst nach, wenn genau ein Image markiert ist. Die Zeile **Prüfsumme vorhanden** im **Datenblatt** erscheint deshalb nur bei Images, für die das schon bekannt ist.

Bei der regelmäßigen Aktualisierung lässt die Plattform den Abgleich mit dem Schulserver aus, solange eine ändernde Aktion oder eine Prüfsummenprüfung läuft oder ein Dialog zu Übertragung, Zusatzdateien oder Beipack-Dateien offen ist.

### Übertragungswarteschlange

Eine Zeile zeigt Image, Richtung (**Download vom Server** oder **Upload zum Server**), Fortschrittsbalken und übertragene Menge. Der Schritt ist einer von:

| Schritt | Hinweis |
|---------|---------|
| **Wartet** | Der Auftrag wartet auf einen laufenden. |
| **Lädt herunter**, **Lädt hoch** | zeigt Geschwindigkeit und geschätzte Restzeit |
| **MD5-Prüfung läuft** | Geschwindigkeit und Restzeit entfallen |
| **Wird abgeschlossen** | letzter Schritt vor dem Ende |

Die Schaltfläche **Abbrechen** gilt auch für wartende Aufträge und ist gesperrt, solange eine andere ändernde Aktion der Seite läuft. Das Ergebnis (**Abgeschlossen**, **Fehlgeschlagen**, **Abgebrochen**) zeigt die Plattform nicht.

### Beipack-Dateien

| Grenze | Wert |
|--------|------|
| Inhalt, den der Satellit annimmt | höchstens 200 KB |
| Datei, die der Satellit ausliefert | höchstens 1 MB |

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Inhalt zu groß – Der Inhalt überschreitet *Grenze* und lässt sich so nicht speichern. | Der Entwurf ist größer als 200 KB. **Speichern** ist gesperrt. | Inhalt kürzen. |
| Beipack-Datei nicht lesbar – Diese Beipack-Datei konnte nicht vom Satelliten gelesen werden. Speichern ist gesperrt, damit der vorhandene Inhalt nicht überschrieben wird. | Der Satellit lieferte die Datei nicht. | Später erneut öffnen. |
| Diese Beipack-Datei ist größer als *Grenze* und wird vom Satelliten nicht ausgeliefert. Speichern ist gesperrt, damit der vorhandene Inhalt nicht überschrieben wird. | Die Datei ist größer als 1 MB. | Datei am Satelliten bearbeiten. |
| Die Beipack-Dateien dieses Images wurden inzwischen geändert. Deine Änderungen wurden nicht gespeichert. | Jemand hat die Datei auf dem Satelliten geändert. | **Neu laden** in der Meldung holt den Stand dieser Datei und verwirft den Entwurf der Registerkarte. |

### Torrent-Verteilung

| Zustand | Bedeutung |
|---------|-----------|
| **Wird geseedet** | Der Seeder läuft und die Torrent-Datei passt zum Image. |
| **Eingeschränkt** | Die Verteilung läuft, aber etwas stimmt nicht, etwa ein gestoppter Seeder oder eine Hash-Datei, die nicht zur Torrent-Datei passt. Die Gründe zeigt die Marke beim Überfahren mit der Maus. |
| **Defekt** | Das Image kann so nicht verteilt werden, etwa weil die Torrent-Datei unlesbar ist oder das Image nicht zu ihr passt. |
| **Unbekannt** | Der Satellit kann den Zustand gerade nicht sagen. |
| **Kein Torrent** | Zu diesem Image liegt keine Torrent-Datei. In den Karten erscheint keine Marke. |

Bei **Wird geseedet** und **Eingeschränkt** nennt die Marke außerdem die Zahl der Seeder und Leecher, die der Tracker kennt. Meldet der Satellit den Zustand nicht, fehlen Marke und Spalte; die Imageliste bleibt unverändert.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Die Torrent-Verteilung ist auf diesem Satelliten nicht aktiv. | Der Torrent-Dienst ist nicht eingerichtet. Das ist ein normaler Zustand. | Keine; die Images werden klassisch verteilt. |
| Der Seeding-Zustand ist veraltet; der Torrent-Dienst hat seit *Zeitpunkt* nichts mehr gemeldet. | Die Angaben je Image stammen von einem früheren Stand und gelten als **Unbekannt**. | Torrent-Dienst am Satelliten prüfen. |

### Meldungen der Images

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Die Images des Satelliten konnten nicht geladen werden. | Der Satellit hat die Imageliste nicht geliefert. | Erreichbarkeit prüfen. |
| Der Abgleich mit dem Schulserver ist nicht verfügbar. Die Spalte „Abgleich“ und die Übertragung bleiben deshalb ohne Aussage. | Eine Abgleichsanfrage ist gescheitert und der Satellit nennt keinen Grund der LMN-API. Die Plattform bietet keine Übertragungsrichtung an; die Imageliste bleibt nutzbar. | Verbindung zwischen Satellit und Schulserver prüfen. |
| Der Satellit kann die Images nicht bei der LMN-API des Schulservers abfragen: Sie ist nicht erreichbar oder lehnt die Anmeldung ab. Die Spalte „Abgleich“ und die Übertragung bleiben deshalb ohne Aussage. | Der Satellit trennt nicht, ob die API nicht antwortet oder die Anmeldung abweist. | Prüfen, ob das Netz, in dem LINBO auf dem Satelliten läuft, die **API-Adresse** aus den [Einstellungen](#einstellungen) erreicht, etwa über eine Freigabe zwischen den VLANs und eine Rückroute oder NAT. Danach **Benutzer** und **Passwort** prüfen; **Verbindung testen** prüft beides. |
| Die LMN-API des Schulservers lehnt die Anmeldung des Satelliten ab oder antwortet mit einem Fehler, deshalb ist kein Abgleich möglich. Prüfe Benutzer und Passwort in den LINBO-Einstellungen; bis dahin bleiben die Spalte „Abgleich“ und die Übertragung ohne Aussage. | Die API ist erreichbar, weist die Anfrage aber ab. | **Benutzer** und **Passwort** in den LINBO-Einstellungen prüfen. |
| Dieses Image liegt nur auf dem Schulserver. Hol es zuerst mit „Vom Server holen“ auf den Satelliten. | Das Image fehlt auf dem Satelliten, deshalb sind die übrigen Aktionen gesperrt. | **Vom Server holen** wählen. |
| Der ausgewählte Satellit hat sich geändert. Die Aktion wurde nicht ausgeführt. | Sie haben den Satelliten gewechselt, bevor die Aktion lief. | Aktion am gewünschten Satelliten wiederholen. |
| Die Zusatzdateien dieses Images sind bereits aktuell. | Das Image hat keine veralteten Zusatzdateien. Der Hinweis steht auch, solange der Abgleich unbekannt ist, und trifft dann nicht zu. | – |
| Zusatzdateien für *n* Images abgeglichen, bei *m* Images ist es fehlgeschlagen: *Namen* | Der Abgleich ist bei einzelnen Images gescheitert. Die übrigen sind abgeglichen. | **Zusatzdateien holen** für die genannten Images wiederholen. |
| Der Vorgang läuft möglicherweise noch auf dem Satelliten. Der Abgleich wird aktualisiert, sobald er abgeschlossen ist. | Der Vorgang dauert länger, als die Verbindung zum Satelliten zulässt. | Abwarten. |
| Die Prüfung von *Name* dauert länger als die Verbindung zum Satelliten zulässt. Sie läuft auf dem Satelliten weiter, das Ergebnis ist hier aber nicht abrufbar. | Die Berechnung der Prüfsumme dauert bei großen Images länger als die Verbindung. | – |
| Für *Name* ist keine Prüfsumme hinterlegt. | Der Satellit kennt keine Prüfsumme zu diesem Image. **Prüfsumme prüfen** ist dafür gesperrt. | – |
| Der Vorgang läuft möglicherweise noch auf dem Satelliten. Bitte die Liste neu laden, bevor erneut wiederhergestellt wird. | Der Satellit meldet den Ausgang der Wiederherstellung nicht zurück. | **Sicherungen** des Images erneut öffnen, bevor Sie nochmals wiederherstellen. |
| Der Umfang der Löschung konnte nicht ermittelt werden. Das Image wird nicht gelöscht. | Die Plattform konnte nicht feststellen, was das Löschen entfernen würde. | Später erneut versuchen. |

## Synchronisation

### Angaben der Seite

| Angabe | Inhalt |
|--------|--------|
| **Modus** | **Synchronisation aktiv** oder **Offline** |
| **Zuletzt synchronisiert** | Zeitpunkt der letzten Synchronisation |
| Hosts und Gruppen | Zahl der übernommenen Hosts und Gruppen |
| Hosts online | wie viele davon online sind; die Seite ermittelt das beim Öffnen und wenn ein Lauf endet, nicht bei den Abfragen im Hintergrund und nicht nach **Cursor leeren** |
| **Schulserver-API** | **Erreichbar** oder **Nicht erreichbar** |
| **Gesamtzustand** | Zustand über alle Bestandteile |
| **Letzter Lauf** | Art (**Inkrementell**, **Vollständig**, **Wiederherstellung**), Ergebnis (**Läuft**, **Abgeschlossen**, **Fehlgeschlagen**), **Gestartet** und **Beendet** |
| **Cursor** | Stelle, bis zu der der Satellit Änderungen zuletzt übernommen hat; **Keiner – der nächste Lauf liest den gesamten Bestand** zeigt, dass **Cursor leeren** gegriffen hat |
| **Letzter Sicherungspunkt**, **Zuletzt wiederhergestellt** | Zeitpunkte |

Läuft gerade ein Lauf, vermerkt die Seite das. Einen zuletzt gemeldeten Fehler zeigt sie im Wortlaut des Satelliten.

### Zustände der Karten

Jede Karte zeigt **Aktuell**, **Ausstehend**, **Fehler** oder **Keine Angabe** und eine gemeldete Fehlermeldung im Wortlaut. **Ausstehend** heißt, dass der Satellit noch auf eine Rückmeldung wartet, etwa darauf, dass der DHCP-Dienst die Konfiguration übernommen hat. **Keine Angabe** und **Nicht gemeldet** bedeuten fehlende Information, keine Störung.

Nur die Karte **DHCP-Konfiguration** zeigt vier Stufen mit je eigenem Zustand:

| Stufe | Zustände |
|-------|----------|
| **Gewünscht**, **Geschrieben**, **Geprüft**, **Angewendet** | **Aktuell**, **Ausstehend**, **Unverändert**, **Fehlgeschlagen**, **Nicht zutreffend**, **Nicht gemeldet**, **Keine Angabe** |

Meldet der Satellit den Vollzug nicht zurück, bleiben die Stufen sichtbar, **Geprüft** und **Angewendet** stehen dann auf **Nicht gemeldet**.

Nur der Abschnitt **Synchronisationszustand** und die **Sicherungspunkte** zeigen eine Ladeanzeige. Die übrigen Karten erscheinen, sobald ihre Daten da sind.

### Meldungen

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Der Synchronisationszustand konnte nicht geladen werden. | Mindestens eine von vier Abfragen (Modus, Zustand, Sicherungspunkte, Stand der Bestandteile) ist gescheitert. | Erreichbarkeit des Satelliten prüfen. |
| Die Aktion konnte nicht ausgeführt werden. | Start, Zurücksetzen oder Wiederherstellen ist gescheitert. | Erreichbarkeit prüfen, Aktion wiederholen. |
| Eine Synchronisation läuft. | Ein Lauf ist aktiv. | Abwarten. |
| Auf dem Satelliten läuft bereits eine Synchronisation. | Der Satellit hat bereits einen Lauf; die Plattform startet keinen zweiten. | Abwarten. |
| Auf dem Satelliten läuft gerade eine Synchronisation. Die Aktion lässt sich bestätigen, sobald sie abgeschlossen ist. | Die Rückfrage ist offen, während ein Lauf läuft. | Abwarten. |
| Dieser Satellit meldet den DHCP-Zustand nicht zurück. | Der Satellit kann den Vollzug der DHCP-Konfiguration nicht melden. | – |
| Noch keine Sicherungspunkte vorhanden. | Es gibt noch keinen Sicherungspunkt. | – |
| Die verwalteten Dateien wurden aus einem Sicherungspunkt wiederhergestellt. | Der letzte Lauf war eine Wiederherstellung, von Hand oder nach einem fehlgeschlagenen Lauf. | – |

## DHCP

### Spalten und Zustände

| Registerkarte | Inhalt |
|---------------|--------|
| **Vergebene Adressen** | **Adresse**, **MAC**, **Hostname**, **Status**, **Gültig bis**, **Hersteller**; dazu die Zeile **Adressen** („*n* aktiv von *m*“) und der **Stand der Daten** |
| **Verlauf** | **Zeit**, **Typ**, **Meldung**; dazu die Zeile **Zeilen** („*x* von *y*“) und der **Stand der Daten** |

Der **Status** einer Adresse ist **Aktiv**, **Frei**, **Reserve** oder **Verworfen**. Eine Adresse ohne Ablauf zeigt **Unbegrenzt**.

### Meldungen

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Keine DHCP-Daten verfügbar | **Vergebene Adressen:** Der DHCP-Container des Satelliten läuft nicht oder hat noch keine Lease-Datenbank angelegt. **Verlauf:** Der DHCP-Container läuft nicht oder hat noch kein DHCP-Log geschrieben. Einen vom Satelliten gemeldeten Grund zeigt die Seite nicht. | DHCP-Container auf dem Satelliten prüfen, siehe [Dienste](./verwaltung.md#dienste). |
| Die vergebenen Adressen des Satelliten konnten nicht geladen werden. | Die Liste ist nicht ladbar. | Erreichbarkeit prüfen. |
| Der DHCP-Verlauf des Satelliten konnte nicht geladen werden. | Der Verlauf ist nicht ladbar. | Erreichbarkeit prüfen. |
| Es werden nur *N* von *M* Adressen angezeigt. Der Satellit liefert nicht alle Daten. | Der Satellit hat nicht alle Adressen geliefert. Suche und Filter wirken nur auf die angezeigten. Für Protokollzeilen erscheint der entsprechende Hinweis. | – |

## Protokolle

Die Tabelle zeigt **Stufe**, **Zeit**, **Meldung** und **Aktionen**. Die **Stufe** ist **Fehler**, **Warnung**, **Info** oder **Debug**.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Das Protokoll des Satelliten konnte nicht aktualisiert werden. | Eine Aktualisierung ist gescheitert. Die Seite behält den zuletzt geladenen Stand. | Erreichbarkeit prüfen. |
| Das Protokoll des Satelliten konnte nicht gelesen werden. | Es war noch nichts geladen, als der Fehler auftrat. | Erreichbarkeit prüfen. |
| Der Satellit hat noch keine Protokolleinträge. | Es gibt keine Einträge. | – |

## Hardware

Die Tabelle zeigt **Host**, **IP-Adresse**, **Modell**, **Prozessor**, **Arbeitsspeicher**, **Platten** und **Erfasst**. Der Dialog zeigt zusätzlich **MAC-Adresse**, **Hersteller**, **Produkt**, **Seriennummer**, **BIOS**, **Kerne**, **Netzwerk** und **PCI-Geräte**.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Das Hardware-Inventar des Satelliten konnte nicht geladen werden. | Das Inventar ist nicht ladbar. | Erreichbarkeit prüfen. |
| Die Hosts des Satelliten konnten nicht geladen werden. Die Tabelle zeigt nur Rechner mit Inventardaten. | Die Hostliste ist gescheitert; das Inventar ist da. | Erreichbarkeit prüfen. |
| Das Hardware-Inventar ist derzeit nicht erreichbar. | Der Satellit liefert das Inventar nicht. | Später erneut versuchen. |
| Es liegen noch keine Hardwaredaten vor. Starte „Alle scannen“, sobald sich Clients mit LINBO gemeldet haben. | Noch kein Client hat Daten geliefert. | **Alle scannen** wählen, sobald Clients gestartet sind. |
| Scan abgeschlossen: *n* gelesen, *n* bereits erfasst, *n* ohne Datei, *n* fehlgeschlagen. | Ergebnis von **Alle scannen**. | Bei „ohne Datei“ und „fehlgeschlagen“ die Clients prüfen und erneut scannen. |
| Der Scan läuft noch auf dem Satelliten. Die Tabelle aktualisiert sich automatisch. | Der Scan dauert länger, als die Verbindung zum Satelliten zulässt. Eine Ergebnismeldung folgt nicht. | Abwarten. |
| Für *Host* liegt noch keine Hardwaredatei vor. Der Client ist vermutlich noch nicht partitioniert. | **Neu lesen** fand keine Datei. | Client mit LINBO starten und partitionieren, danach erneut lesen. |
| Für diesen Rechner liegen noch keine Hardwaredaten vor. | Der Dialog hat keine Daten. | Client mit LINBO starten und partitionieren, danach **Neu lesen** wählen. |

## Treiber

Die Liste zeigt **Ordner**, **Hersteller**, **Produkt**, **Image**, **Dateien** und **Größe**.

| Grenze | Wert |
|--------|------|
| **match.conf** | darf nicht leer sein, höchstens 10 240 Zeichen |

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Treiber werden noch nicht installiert | Zugewiesene Treiber erreichen die Clients erst mit LINBO 7.4.8 oder neuer, weil die Installation im ausgelieferten linbofs liegt. Zuordnungen bleiben ohne Wirkung. | LINBO auf der Unterseite [System](./linbo.md#linbo-aktualisieren) aktualisieren, danach die Seite neu laden. |
| Ob die Treiber-Installation auf den Clients verfügbar ist, konnte nicht geprüft werden. | Die Prüfung ist gescheitert. | Seite neu laden. |
| Die Treiber-Profile des Satelliten konnten nicht geladen werden. | Die Liste ist nicht ladbar. | Erreichbarkeit prüfen. |
| Die Treiber-Profile sind derzeit nicht erreichbar. | Der Satellit liefert die Profile nicht. | Später erneut versuchen. |
| Es gibt noch keine Treiber-Profile. Lege eines aus einem Client an. | Es gibt kein Profil. | **Profil anlegen** wählen. |
| Gib eine gültige IPv4-Adresse ein. | Die Adresse des Clients ist ungültig. | Adresse korrigieren. |
| Das Profil *Ordner* gab es bereits. | Das Profil existiert; die Plattform legt kein zweites an. | – |
| Entferne zuerst die Image-Zuordnung. | **Profil löschen** ist gesperrt, solange ein Image zugeordnet ist. | **Zuordnung entfernen** wählen. |
| Die Dateien des Profils konnten nicht geladen werden. | Die Dateiliste ist nicht ladbar. | Dialog erneut öffnen. |

## System

### linbofs64

Die Karte zeigt **Zustand**, **Größe**, **MD5**, **Geändert**, **Zuletzt gebaut** und **Hooks** („*n* ausgeführt, *m* mit Warnung“). Darunter stehen, soweit der Satellit sie meldet, **Autorisierte Schlüssel**, **Dropbear-Schlüssel**, **SSH-Schlüssel** und **Passwort-Hash** (jeweils *Ja* oder *Nein*) sowie **Schlüsseldateien** (Anzahl der Dropbear-, SSH- und öffentlichen Schlüssel). Warnt ein Hook, steht dessen Meldung unter der Karte. Eine Liste nennt jeden installierten Hook mit **Vor dem Bauen** oder **Nach dem Bauen**; ein Hook, der nicht ausführbar ist, trägt den Zusatz „nicht ausführbar“. Der **Zustand** ist **Bereit**, **Fehlt**, **Beschädigt**, **Nicht eingerichtet**, **Unvollständig** oder **Unbekannt**. Bei **Fehlt**, **Beschädigt**, **Nicht eingerichtet** und **Unvollständig** weist die Karte darauf hin, dass ein Neubau das behebt.

Der Hinweis auf wartende Änderungen gilt nur in dieser Browsersitzung.

### LINBO-Paket und Boot-Dateien

Die Karte nennt **Installiert**, **Verfügbar** und **Paketgröße**. Der Schritt einer Aktualisierung ist **Wird vorbereitet**, **Paket wird geladen**, **Prüfsumme wird geprüft**, **Paket wird entpackt**, **Boot-Dateien werden eingerichtet** oder **linbofs64 wird neu gebaut**. Sie endet mit **Aktualisierung abgeschlossen**, **Aktualisierung fehlgeschlagen** oder **Aktualisierung abgebrochen**.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Die Boot-Dateien sind aktuell. | Es gibt keine neuere Version. | – |
| Es gibt eine neuere LINBO-Version. Der Satellit läuft mit alten Boot-Dateien. | Die Paketquelle bietet eine neuere Version. | **LINBO aktualisieren** wählen. |
| Ob die Boot-Dateien aktuell sind, lässt sich nicht prüfen: Die Paketquelle ist nicht erreichbar. | Der Satellit erreicht die Paketquelle nicht. Ein Satellit mit alten Boot-Dateien aktualisiert sie erst, wenn er sie erreicht. | Internetzugang und DNS des Satelliten prüfen. |
| Die installierte LINBO-Version ist nicht bekannt. | Der Satellit meldet die Version nicht. | – |
| Die Version des LINBO-Pakets konnte nicht gelesen werden. | Die Abfrage ist gescheitert. | **Neu laden** wählen. |
| Auf dem Satelliten läuft gerade ein Neubau oder eine Aktualisierung. Warte, bis sie abgeschlossen ist. | Ändernde Aktionen sind gesperrt, solange ein Neubau oder eine Aktualisierung läuft. | Abwarten. |

### Kernel

Varianten sind **Stable**, **Longterm** und **Legacy**. Die Karte zeigt **Aktive Variante**, **Version**, **Größe von linbo64**, **MD5 von linbo64** und **Letzter Wechsel**. Zu jeder Variante stehen Version sowie Größe von Kernel und Modulen („Kernel … · Module …“).

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Die Kernel-Konfiguration ist ungültig. | Der Wechsel ist gesperrt. | **Konfiguration reparieren** oder **Reparieren und neu bauen** wählen. Beides setzt auf **Stable** zurück. |
| Vorlage fehlt: Im Kernel-Set wurde keine Basis-initramfs gefunden. | Dem Kernel-Satz fehlt die Basis-initramfs. | LINBO aktualisieren. |
| Unvollständig (Hinweis: Variante unvollständig: Es fehlen Dateien.) | Eine Variante ist nur teilweise installiert. Sie lässt sich nicht aktivieren. | LINBO aktualisieren. |
| Diese LINBO-Version liefert nur einen Kernel. Eine Variante lässt sich nicht wählen. | Es gibt nur einen Kernel. | – |
| Letzter Fehler: *Text des Satelliten* | Der letzte Wechsel ist fehlgeschlagen. | Fehlertext prüfen, Wechsel wiederholen. |

### Firmware

Die Clients zeigen **In Ordnung**, **Firmware fehlt** oder **Kein Protokoll**. Die Zusammenfassung zählt auch Clients ohne Protokoll („… ohne Protokoll“). Einträge, die es auf dem Satelliten nicht gibt, tragen **Auf dem Satelliten nicht vorhanden**, im Katalog **Nicht auf dem Satelliten**. Einen fehlerhaften Eintrag kennzeichnet **Ungültiger Eintrag**. Die Suche beginnt ab zwei Zeichen.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Noch kein Client hat ein Boot-Protokoll geliefert. | Es gibt nichts auszuwerten. | Clients starten. |
| Keine Firmware gefunden. | Die Suche hat keinen Treffer. | Suchbegriff ändern. |
| Die Suche ist fehlgeschlagen. | Der Satellit hat die Suche nicht beantwortet. | Erneut suchen. |

### WLAN

| Grenze | Wert |
|--------|------|
| **Netzwerkname (SSID)** | höchstens 32 Zeichen, keine Steuerzeichen |
| **Schlüssel** | 8 bis 128 Zeichen |

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Gib den Netzwerknamen ein. | **Netzwerkname (SSID)** ist leer. | Namen eintragen. |
| Der Netzwerkname darf höchstens 32 Zeichen lang sein. | Zu langer Name. | Name kürzen. |
| Der Netzwerkname darf keine Steuerzeichen enthalten. | Der Name enthält Steuerzeichen. | Zeichen entfernen. |
| Gib einen Schlüssel ein. | Bei **Verschlüsselt (WPA-PSK)** fehlt der Schlüssel. | Schlüssel eintragen. |
| Der Schlüssel muss mindestens 8 Zeichen lang sein. | Zu kurzer Schlüssel. | Schlüssel verlängern. |
| Der Schlüssel darf höchstens 128 Zeichen lang sein. | Zu langer Schlüssel. | Schlüssel kürzen. |

## Einstellungen

### Felder

| Feld | Hinweis |
|------|---------|
| **API-Adresse** | Adresse der Linuxmuster-API des Schulservers; erlaubt ist eine http- oder https-Adresse |
| **Benutzer**, **Passwort** | Zugangsdaten für die API; das Passwort darf leer bleiben und ist dann unverändert |
| **Schule** | Buchstaben, Ziffern, Bindestrich und Unterstrich; das erste Zeichen ist ein Buchstabe oder eine Ziffer |
| **LINBO-Server-IP** | IPv4-Adresse, die der Satellit den Rechnern als LINBO-Server nennt, zum Beispiel `10.0.0.1` |
| **Synchronisation aktiv** | Schalter für die selbsttätige Synchronisation |
| **Intervall (Sekunden, 0 deaktiviert)** | ganze Zahl in Sekunden; `0` schaltet den Zeitplan ab |

Jedes Feld trägt eine Kennzeichnung, woher der Satellit den Wert bezieht:

| Kennzeichnung | Bedeutung |
|---------------|-----------|
| **Standard** | Vorgabewert des Satelliten |
| **Aus der Umgebung** | bei der Einrichtung des Geräts gesetzt |
| **Überschrieben** | hier in der Plattform gesetzt |

### LINBO-Client-Passwort

| Regel | Meldung bei Verstoß |
|-------|---------------------|
| mindestens 4 Zeichen | Das Passwort braucht mindestens 4 Zeichen. |
| kein Doppelpunkt, kein Zeilenumbruch | Das Passwort darf keinen Doppelpunkt und keinen Zeilenumbruch enthalten. |
| kein Leerzeichen am Anfang oder Ende | Das Passwort darf nicht mit einem Leerzeichen beginnen oder enden. |
| beide Eingaben gleich | Die beiden Passwörter stimmen nicht überein. |

### Meldungen

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Ein leeres Feld wird nicht gespeichert. | Ein Feld ist leer; nur das Passwort darf leer bleiben. **Speichern** ist gesperrt. | Wert eintragen. |
| Ein leeres Feld wird nicht gespeichert. „Auf Standard zurücksetzen“ entfernt den gespeicherten Wert. | Das Feld ist leer, obwohl hier ein Wert überschrieben ist. | Wert eintragen oder auf Standard zurücksetzen. |
| Erlaubt sind nur true und false. | Ungültiger Wert für **Synchronisation aktiv** | – |
| Erlaubt ist eine ganze Zahl in Sekunden. 0 deaktiviert den Zeitplan. | Ungültiges **Intervall** | Ganze Zahl eintragen. |
| Erlaubt ist eine http- oder https-Adresse. | Ungültige **API-Adresse** | Adresse mit `http://` oder `https://` eintragen. |
| Erlaubt ist eine IPv4-Adresse, zum Beispiel 10.0.0.1. | Ungültige **LINBO-Server-IP** | IPv4-Adresse eintragen. |
| Erlaubt sind Buchstaben, Ziffern, Bindestrich und Unterstrich. Das erste Zeichen muss ein Buchstabe oder eine Ziffer sein. | Ungültige **Schule** | Namen korrigieren. |
| Diese Einstellungen konnten nicht geändert werden: *Felder* | Der Satellit lehnt einzelne Felder ab. Die übrigen Änderungen sind gespeichert, die abgelehnten stehen weiter im Formular. | Werte korrigieren und erneut speichern. |
| Die Einstellungen konnten nicht geladen werden. | Der Satellit hat die Einstellungen nicht geliefert. | Erreichbarkeit prüfen. |
| Das LINBO-Client-Passwort konnte nicht geändert werden. | Der Satellit hat die Änderung nicht übernommen. Die Eingabefelder sind danach leer. | Passwort erneut eingeben. |
| Der Schulserver ist erreichbar. | Ergebnis von **Verbindung testen**, mit Version der API und Antwortzeit. | – |
| Der Schulserver antwortet, meldet aber keinen betriebsbereiten Zustand. Bitte Benutzer und Passwort prüfen. | Ergebnis von **Verbindung testen** | **Benutzer** und **Passwort** prüfen. |
| Der Schulserver ist nicht erreichbar. | Ergebnis von **Verbindung testen** | **API-Adresse** und Netzwerkfreigaben prüfen. |
