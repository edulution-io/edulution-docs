# Linuxmuster / LINBO

Die App **Schulserver** verbindet die edulution Plattform mit Ihrem Linuxmuster-Server und bündelt die Verwaltung von Benutzerkonten, Geräten und Elternzuweisungen. Der Bereich **LINBO** innerhalb dieser App zeigt zusätzlich die Hosts, Hardwaregruppen und Images Ihrer LINBO-Installation.

Alle Daten werden direkt über die Linuxmuster-API (`linuxmuster-api7`) geladen – die edulution Plattform hält dafür keinen eigenen Zwischenspeicher.

:::warning[Voraussetzungen]
Der Bereich steht nur zur Verfügung, wenn die **Plattform** in den globalen Einstellungen auf **Linuxmuster** gesetzt ist und die Linuxmuster-API mindestens in **Version 7.3.26** vorliegt. Bei einer älteren API-Version wird die App nicht angezeigt, sondern durch den Hinweis *„Die Linuxmuster API-Version ist zu alt"* ersetzt.
:::

## Aufbau der App

Die Unterseiten wählen Sie über die Seitenleiste der App:

| Eintrag | Inhalt |
|---------|--------|
| **Übersicht** | Kacheln als Einstieg in alle Bereiche der App |
| **Benutzerverwaltung** | Benutzerkonten anzeigen, importieren und Passwörter verwalten |
| **Geräteverwaltung** | Geräteliste pflegen und in Linuxmuster importieren |
| **Elternzuweisung** | Eltern ihren Kindern zuordnen |
| **LINBO** | Hosts, Hardwaregruppen und Images der LINBO-Installation |
| **Versionsübersicht** | Versionen der beteiligten Linuxmuster-Komponenten |

:::note[Elternzuweisung]
Die **Elternzuweisung** erscheint nur in Schulumgebungen. Beim [Organisationstyp](einstellungen.md#organisationstyp) **Unternehmen** entfällt der Eintrag.
:::

:::note[LINBO nur für Globaladmins]
Der Eintrag **LINBO** in der Seitenleiste – und die gleichnamige Kachel der Übersicht – ist ausschließlich **Globaladmins** vorbehalten. Für alle anderen Rollen entfällt der Bereich; die übrigen Einträge der App bleiben davon unberührt.
:::

Die **Übersicht** ist nach denselben Bereichen gegliedert wie die Seitenleiste. Unter **Benutzerverwaltung** führt je eine Kachel direkt zu den Benutzertypen **Schüler**, **Lehrer**, **Extra-Schüler**, **Eltern**, **Mitarbeiter**, **Schuladmins** und **Globaladmins**; in Unternehmensumgebungen bleiben davon nur **Mitarbeiter** und **Globaladmins** sichtbar. Darunter folgen die Bereiche **Geräteverwaltung**, **Elternzuweisung**, **LINBO** und **System** mit je einer Kachel. Die Kachel **LINBO** öffnet dieselbe Übersicht wie der gleichnamige Eintrag in der Seitenleiste.

In Umgebungen mit mehreren Schulen enthalten die Listenansichten oben rechts eine **Schulauswahl**. Ein Wechsel der Schule verwirft die bereits geladenen Daten und lädt sie für die neue Schule erneut.

## Benutzerverwaltung

Die Benutzerverwaltung ist je Benutzertyp (Schüler, Lehrer, Extra-Schüler, Eltern, Mitarbeiter) in zwei Registerkarten geteilt:

- **Tabelle** – die bestehenden Konten mit Anmeldename, Name, Klasse, Rolle, Quota und weiteren Eigenschaften. Über **CSV exportieren** laden Sie die angezeigten Konten herunter, über **Benutzer hinzufügen** legen Sie ein einzelnes Konto an.
- **Liste** – der Import über eine CSV-Datei. Die Liste entspricht der Datei `<Schule>/<Typ>.csv` auf dem Server.

Für Benutzertypen ohne Importunterstützung erscheint der Hinweis *„Für diesen Benutzertyp ist kein Import verfügbar."*

### Import in drei Schritten

Der Import ist bewusst zweistufig, damit Sie die Auswirkungen vor dem Schreiben sehen:

1. **Speichern** – die bearbeitete Liste wird auf dem Server abgelegt. Die Meldung weist ausdrücklich darauf hin, anschließend **Prüfen** zu verwenden; gespeichert allein bewirkt noch keine Änderung an den Konten.
2. **Prüfen** – Linuxmuster wertet die Liste aus und meldet das Ergebnis in einem Dialog, gegliedert in eine Übersicht sowie die Konten, die **angelegt**, **aktualisiert** oder **entfernt** würden, und die aufgetretenen **Fehler**.
3. **Anwenden** – erst dieser Schritt schreibt die Änderungen tatsächlich in Linuxmuster.

Eine CSV-Datei können Sie per Drag & Drop in den CSV-Bereich ziehen oder die aktuelle Liste als Vorlage herunterladen. Die Spalte **Gewünschter Login** stammt unverändert aus der CSV-Datei und kann vom später in LDAP hinterlegten Anmeldenamen abweichen.

:::note[Wer darf schreiben?]
Die schreibenden Aktionen **Speichern** und **Prüfen** stehen nur **Globaladmins** und **Schuladmins** zur Verfügung; für andere Rollen sind diese Schaltflächen ausgeblendet. Tabelle und Liste lassen sich weiterhin von allen berechtigten Benutzern einsehen, exportieren und lokal bearbeiten – die Änderungen werden dabei jedoch nicht auf den Server geschrieben.
:::

### Passwörter

Über die **Passwort-Aktionen** eines Kontos setzen Sie Passwörter neu. **Erstpasswort wiederherstellen** setzt das Konto auf das ursprünglich vergebene Erstpasswort zurück.

:::tip[Ausführliche Anleitung]
Eine vollständige Beschreibung der Benutzerverwaltung – Benutzertabelle, Sophomorix-Status, Spalten der Verwaltungslisten, CSV-Import und -Export sowie der Prüf- und Übernahmeprozess – finden Sie unter [Benutzerverwaltung](benutzerverwaltung.md).
:::

## Geräteverwaltung

Die Geräteverwaltung pflegt die Geräteliste (`devices.csv`) von Linuxmuster. Sie bearbeiten die Einträge direkt in der Tabelle, fügen über **Gerät hinzufügen** eine Zeile hinzu oder importieren eine vorhandene CSV-Datei per Drag & Drop.

Jedes Gerät benötigt neben Rechnername, MAC- und IP-Adresse eine **Rolle** und ein **PXE-Flag**:

| PXE-Flag | Bedeutung |
|----------|-----------|
| **Kein PXE** | Das Gerät bootet nicht über das Netzwerk. |
| **Linbo-PXE** | Das Gerät bootet LINBO. |
| **Linbo-PXE + OPSI-PXE** | LINBO und OPSI stehen beide bereit. |
| **OPSI-PXE** | Das Gerät bootet ausschließlich OPSI. |

Als Rolle stehen unter anderem *Schüler-PC im Klassenzimmer*, *Lehrer-PC im Klassenzimmer*, *Fachbereich-Lehrer-PC*, *Lehrer-PC*, *Server*, *Domaincontroller*, *Drucker*, *Router*, *Switch*, *Thinclient*, *BYOD*, *Mobiles Gerät*, *VOIP*, *WLan* und *IP-Only* zur Verfügung.

:::warning[Anwenden importiert sofort]
**Anwenden** speichert die Geräteliste **und importiert sie unmittelbar** in Linuxmuster. Der Dialog **Geräteliste anwenden** fragt dies vorher ab. Im Unterschied zur Benutzerverwaltung gibt es hier keinen vorgeschalteten Prüflauf.
:::

:::note[Wer darf schreiben?]
**Speichern** und **Anwenden** stehen nur **Globaladmins** und **Schuladmins** zur Verfügung. Andere Rollen können die Geräteliste einsehen, Zeilen hinzufügen und eine CSV-Datei einlesen, die Liste aber weder speichern noch importieren.
:::

Vor dem Speichern werden die Einträge validiert. Doppelte Rechnernamen, MAC- oder IP-Adressen werden gemeldet und müssen zuerst bereinigt werden.

## Elternzuweisung

Hier ordnen Sie Elternkonten den zugehörigen Schülerkonten zu. Die Tabelle zeigt die bestehenden Zuweisungen; die Fußzeile nennt die Zahl der ausgewählten Einträge.

## LINBO

Der Bereich **LINBO** ist in vier Unterseiten gegliedert: **Übersicht**, **Hosts**, **Gruppen** und **Images**.

### Übersicht

Sechs Kacheln fassen den Zustand der LINBO-Installation zusammen:

| Kachel | Inhalt |
|--------|--------|
| **LINBO-Status** | **OK** oder **Beeinträchtigt**, mit dem Prüfergebnis für `devices.csv` und `/srv/linbo` |
| **LMN-Server** | Servername, darunter IP-Adresse und Domäne |
| **Schulen** | Anzahl und Namen der Schulen auf dem Server |
| **GRUB-Konfigurationen** | Anzahl der gefundenen GRUB-Konfigurationen |
| **start.conf-Dateien** | Anzahl der gefundenen `start.conf`-Dateien |
| **Images** | Anzahl der verfügbaren Images |

Der Status gilt als **Beeinträchtigt**, sobald `devices.csv` oder das Verzeichnis `/srv/linbo` nicht gefunden wird.

Darunter erzeugt der **DHCP-Export** aus den erfassten Geräten und Gruppen eine fertige DHCP-Konfiguration zum Herunterladen – entweder für **ISC DHCP** oder für **dnsmasq (Proxy)**.

### Hosts

Die Hostliste ist über Registerkarten nach Gerätetyp gefiltert: **Alle**, **Computer**, **Server**, **Drucker**, **iPads** und **Sonstige**. Geräte mit einer Rolle, die keiner dieser Gruppen entspricht, erscheinen unter *Sonstige*. Zusätzlich lässt sich über das Filtersymbol in der Suchleiste nach einer oder mehreren **Gruppen** einschränken.

Die Tabelle zeigt Hostname, MAC-Adresse, IP, Gruppe, Raum, Rolle sowie die Spalten **Status** und **Geplant**.

:::note[Status und geplante Aktionen]
**Status** und **Geplant** bleiben ohne einen edulution-Satellite leer: der Online-/Offline-Zustand ist über die Linuxmuster-API allein nicht verfügbar, und geplante Aktionen werden vom Satellite verwaltet. Beide Spalten sind in dieser Version noch nicht angebunden.
:::

### Gruppen

Eine **Hardwaregruppe** ist eine `start.conf` auf dem Server: sie beschreibt das Plattenlayout und die Betriebssysteme aller Rechner, die ihr zugeordnet sind. Die Seite listet die Hardwaregruppen des Servers.

Oben rechts wählen Sie zwischen vier Ansichten derselben Liste. Ihre Wahl bleibt erhalten und gilt auch nach einem Neuladen:

| Ansicht | Zeigt |
|---------|-------|
| **Plattenkarte** (Vorgabe) | jede Platte der Gruppe als Balken ihrer Partitionen, nach Rolle eingefärbt, dazu die Betriebssysteme mit Autostart-Zeit |
| **Kacheln** | Systemtyp, Betriebssysteme und die Zahl der zugeordneten Rechner |
| **Datenblatt** | die gesetzten Schlüssel der Gruppe: Server, Cache, Download-Typ, Systemtyp, Abmeldung nach, Kernel-Optionen und Virtueller Desktop |
| **Tabelle** | ID, Dateiname und Änderungszeitpunkt |

Ein Banner über der Liste nennt den **Sync-Status**: ob die **LMN-API** erreichbar ist, wie viele Hosts und Gruppen gefunden wurden und wann zuletzt geladen wurde. Meldet die API einen eingeschränkten Zustand, steht der Grund im Klartext daneben – etwa dass `devices.csv` für diese Schule fehlt oder `/srv/linbo` nicht vorhanden ist.

#### Aktionen einer Gruppe

**Vorschau anzeigen** liegt als eigene Schaltfläche auf der Karte. Alle Aktionen zusammen finden Sie im Menü hinter der Schaltfläche mit den drei Punkten – auf der Karte oben rechts neben dem Namen, in der Tabelle in der Spalte **Aktionen**:

| Aktion | Wirkung |
|--------|---------|
| **Bearbeiten** | öffnet den Gruppen-Editor (siehe unten) |
| **Vorschau anzeigen** | zeigt die ausgewertete `start.conf`, ihre Rohdaten und die GRUB-Konfiguration |
| **Duplizieren** | legt eine Kopie unter neuem Namen an |
| **Gruppe löschen** | löscht die `start.conf` der Gruppe auf dem Server |

Über **Gruppe anlegen** unten rechts erstellen Sie eine neue Gruppe. Sie vergeben einen Namen – erlaubt sind Buchstaben, Ziffern, Bindestrich und Unterstrich, keine Leerzeichen – und wählen eine **Vorlage**: *Minimal – nur Cache-Partition*, *Windows (UEFI)*, *Linux (UEFI)*, *Windows und Linux (UEFI)* oder *Windows und Linux (BIOS)*. Der Hinweis unter der Auswahl nennt, wie viele Partitionen die Vorlage anlegt.

:::warning[Vorhandene Gruppe wird nicht überschrieben]
Vor dem Anlegen prüft die Plattform auf dem Server, ob für den Namen bereits eine `start.conf` existiert – auch dann, wenn die Liste sie nicht anzeigt. In diesem Fall bricht der Vorgang mit einem Hinweis ab, statt die vorhandene Gruppe zu ersetzen.
:::

Beim **Duplizieren** übernimmt die Kopie Partitionen, Betriebssysteme und Einstellungen der Vorlage; der Gruppenname in der Datei wird dabei auf den neuen Namen umgeschrieben.

:::warning[Was beim Löschen verschwindet]
Gelöscht werden die `start.conf` **und** die GRUB-Konfiguration der Gruppe. Rechner dieser Gruppe starten danach ohne Konfiguration, bis ihnen eine andere Gruppe zugewiesen wird. Der Server legt vor dem Löschen eine Sicherung der `start.conf` an.
:::

#### Die Vorschau

Die Vorschau **Gruppe \<ID\>** hat drei Registerkarten:

- **Zusammenfassung** – die ausgewertete `start.conf`: der Abschnitt `[LINBO]` als Liste der gesetzten Schlüssel, die **Partitionen** mit Gerät, Bezeichnung, Größe, Dateisystem und der Markierung *Bootfähig* sowie die **Betriebssysteme** mit Name, Version, Basis-Image, Boot-Partition und der Markierung *Autostart*.
- **Rohdaten** – der unveränderte Inhalt der `start.conf`.
- **GRUB cfg** – der Inhalt der GRUB-Konfiguration.

Existiert zu einer Gruppe keine `start.conf`, entfallen die ersten beiden Registerkarten.

:::note[Auswertung der start.conf]
Die Zusammenfassung liest die Datei so, wie LINBO selbst sie liest: Abschnitts- und Schlüsselnamen werden unabhängig von der Groß- und Kleinschreibung erkannt, und als Ja-Wert gelten ausschließlich `yes`, `true` und `enable`. Ein Schlüssel mit einem anderen Wert – etwa `Autostart = 1` – zählt daher als *aus*. Ein leerer oder fehlender Schlüssel erhält den Standardwert, den auch der LINBO-Client annimmt.
:::

#### Der Gruppen-Editor

**Bearbeiten** öffnet die Gruppe unter einer eigenen Adresse (`…/linbo/groups/<Name>`). Diese Adresse lässt sich verlinken und übersteht ein Neuladen; ein unbekannter Name führt mit einem Hinweis zurück auf die Liste. Der Editor hat drei Registerkarten.

**Allgemein** enthält die Felder der Gruppe, gegliedert in *Hardware*, *Startoptionen* und *Darstellung*. Drei Werte sind hier bewusst nicht änderbar: der Gruppenname, der Server und die Cache-Partition – letztere ergibt sich aus dem Partitionslayout. Die Schaltfläche **Erweitert** im Fuß des Dialogs blendet die selten benötigten Felder ein; sie wirkt nur für den geöffneten Dialog und wird nicht gemerkt.

:::warning[Beim Start formatieren]
**Beim Start partitionieren** legt das Plattenlayout bei jedem Start neu an, **Beim Start formatieren** formatiert dabei alle Partitionen. Lokal auf den Rechnern gespeicherte Daten gehen dann bei jedem Start verloren.
:::

**Partitionen** zeigt je Platte eine Karte. Über die Preset-Schaltflächen fügen Sie eine Partition mit sinnvoller Vorgabegröße hinzu: *EFI*, *MSR*, *Windows*, *Linux*, *Swap*, *Daten*, *Erweitert* und *Cache*. Der **Plattentyp** – SATA, VirtIO, Xen, IDE, MMC, NVMe oder allgemein – bestimmt die Gerätenamen; ein Wechsel nummeriert die Partitionen der Platte samt aller Verweise darauf um. Ein Klick auf eine Partition öffnet einen Dialog mit den Unterregisterkarten **Partition** und **Betriebssystem**.

Im Feld **Größe** gilt: eine nackte Zahl sind Kibibytes, ein Suffix `M`, `G` oder `T` legt die Einheit fest, und ein leeres Feld bedeutet *Rest der Platte* (in der Plattenkarte als `∞` dargestellt). Unter dem Feld steht laufend, welche Größe daraus wird.

**Betriebssysteme** listet die Einträge der Gruppe mit Partition, Basisimage, Kernel, Initrd und den Schaltern für Autostart, Sync und Start. Der Reiter ist lesend: bearbeitet wird ein Betriebssystem im Partitionsdialog. Zeigt das Root-Gerät eines Eintrags auf keine Partition des Layouts, wird der Eintrag als verwaist gekennzeichnet und lässt sich hier löschen.

Solange ungespeicherte Änderungen vorliegen, fragt der Editor beim Schließen nach, ob Sie sie verwerfen wollen.

### Images

Oben rechts wählen Sie wie bei den Gruppen zwischen vier Ansichten; die Wahl bleibt erhalten:

| Ansicht | Zeigt |
|---------|-------|
| **Kacheln** (Vorgabe) | Betriebssystem-Symbol, Größe, vorhandene Sidecars und die erste Zeile der Beschreibung |
| **Speicher** | wie voll die Partition mit dem Image ist, dazu Partitionsgerät und Dateizahl |
| **Datenblatt** | Dateiname, Größe, Partition, Partitionsgröße, ob eine Prüfsumme vorliegt, Dateizahl und Änderungszeitpunkt |
| **Tabelle** | Name, Größe, Sidecars und Änderungszeitpunkt |

:::note[Zwei Namen, ein Image]
Ein Image heißt nach seinem Verzeichnis auf dem Server (`debian13`); die Bilddatei darin trägt zusätzlich die Endung (`debian13.qcow2`). Angezeigt und in allen Aktionen verwendet wird der Name des Images, nicht der der Datei.
:::

Sidecars sind die Beipack-Dateien eines Images: Beschreibung (`.desc`), Info (`.info`), VDI-Konfiguration (`.vdi`), Torrent (`.torrent`), Maschinenkonto (`.macct`), Prüfsumme (`.md5`), Hashsumme (`.hash`), Registry (`.reg`), Pre-Start-Skript (`.prestart`) und Post-Sync-Skript (`.postsync`). In der Spalte **Sidecars** steht je vorhandener Datei ein Buchstabenkürzel; welcher Dateityp dahintersteht, erscheint, sobald Sie mit dem Mauszeiger darauf zeigen. Der Detaildialog zeigt zusätzlich Dateiname, Image-Ordner, Pfad, Größe, MD5-Summe und – sofern ein `.info`-Sidecar vorliegt – Erstellungszeitpunkt, Image- und Partitionsgröße sowie die Beschreibung.

Über die Schaltfläche zum Hochladen fügen Sie ein Image hinzu. Zulässig sind Image-Dateien (`.qcow2`, `.qdiff`, `.cloop`, `.rsync`) und alle oben genannten Beipack-Dateien; andere Dateitypen weist der Dialog ab. Während eines laufenden Downloads sind weitere Downloads gesperrt.

#### Aktionen eines Images

**Herunterladen** liegt als eigene Schaltfläche auf der Karte. Die übrigen Aktionen stehen im Menü hinter der Schaltfläche mit den drei Punkten daneben, in der Tabelle in der Spalte **Aktionen**:

| Aktion | Wirkung |
|--------|---------|
| **Details anzeigen** | Dateiname, Pfad, Prüfsumme und der Inhalt des `.info`-Sidecars |
| **Beschreibung und Skripte bearbeiten** | öffnet den Sidecar-Editor (siehe unten) |
| **Sicherungen verwalten** | listet die Sicherungen des Images zum Wiederherstellen oder Löschen |
| **Umbenennen** | benennt Image, Sicherungen und alle Beipack-Dateien um |
| **Duplizieren** | kopiert das Image samt Beschreibung, Registry-Patch und Skripten, aber ohne Sicherungen |
| **Differenzimage löschen** | erscheint nur, wenn zum Image ein Differenzimage existiert |
| **Löschen** | löscht das Image mit Sicherungen, Differenzimage und Beipack-Dateien |

Beim Umbenennen und Duplizieren erlaubt der Name Buchstaben, Ziffern sowie `.`, `_`, `+` und `-`; er muss mit einem Buchstaben oder einer Ziffer beginnen. Ein Name, den ein anderes Image bereits trägt, wird ebenso abgewiesen wie der unveränderte Name.

#### Beschreibung und Skripte bearbeiten

Der Editor hat je eine Registerkarte für die Dateien, die Sie ändern können: **Beschreibung** (`.desc`), **Info** (`.info`), **Registry** (`.reg`), **Pre-Start Script** (`.prestart`) und **Post-Sync Script** (`.postsync`). Für Registry-Patch und Skripte bietet der Editor oben rechts **Aus anderem Image übernehmen** an – die Auswahl listet alle Images, die für diesen Dateityp Inhalt haben, und übernimmt ihn in das Feld.

:::warning[Ein leeres Feld löscht die Datei]
Der Server schreibt beim Speichern immer alle Beipack-Dateien neu und löscht dabei jede, für die kein Inhalt ankommt. Ein Feld, das Sie leeren, löscht also die zugehörige Datei auf dem Server. Die VDI-Konfiguration hat keine Registerkarte, wird aber unverändert mitgeschrieben und bleibt dadurch erhalten.
:::

Die `.info`-Datei ist Pflicht: ohne sie lässt sich das Image nicht mehr einlesen. Ist ihr Feld leer, sperrt der Editor das Speichern und weist darauf hin. Der Inhalt stammt vom Server – Zeitstempel, Image- und Partitionsgröße – und sollte nur mit Bedacht geändert werden.

#### Sicherungen

**Sicherungen verwalten** listet je Sicherung Datum, Zeitstempel und Größe, mit **Wiederherstellen** und **Sicherung löschen**.

:::warning[Registry-Patch und Skripte überleben eine Wiederherstellung nicht]
Beim Wiederherstellen legt der Server zuerst eine neue Sicherung des aktuellen Images an. Die Dateien `.reg`, `.prestart` und `.postsync` wandern dabei in diese Sicherung und stehen dem Image danach nicht mehr zur Verfügung – dies ist ein bekannter Fehler in `linuxmuster-tools7`. Sichern Sie den Inhalt dieser Dateien vorher, wenn Sie ihn behalten wollen. Zwei Wiederherstellungen desselben Images innerhalb derselben Minute schlagen fehl; ein erneuter Versuch nach einer Minute gelingt.
:::

## Versionsübersicht

Die Seite **Versionsübersicht** listet die Versionen der beteiligten Linuxmuster-Komponenten – nützlich, um die für diese App benötigte API-Version 7.3.26 zu prüfen.

## Einschränkungen in dieser Version

Einige Aktionen sind in der Oberfläche bereits vorhanden, aber noch nicht angebunden. Sie melden beim Aufruf *„Diese Aktion wird in dieser Version noch nicht unterstützt."*:

- die Host-Aktionen **Wake-on-LAN**, **Sync**, **Start**, **Neu starten**, **Herunterfahren** und **Treiber-Profil**
- die Aktion **Sync** im Bereich **Gruppen**
- die Spalten **Status** und **Geplant** der Hostliste

Die Schaltfläche **Versionsstände** im Bereich **Gruppen** ist sichtbar, aber dauerhaft deaktiviert: die Linuxmuster-API bietet dafür keine Schnittstelle. Der Grund steht am Knopf.

Ein **Virtueller Desktop** (VDI) je Gruppe lässt sich in dieser Version nicht bearbeiten. Das Datenblatt zeigt, ob er in der `start.conf` aktiviert ist; die zugehörige Konfigurationsdatei ist über die Linuxmuster-API noch nicht erreichbar.

## Einrichtung (für Administratoren)

- Die **Plattform** stellen Sie unter [Einstellungen → Globale Einstellungen → Allgemein](einstellungen.md#allgemein) auf **Linuxmuster**.
- Welche Bereiche dieser App sichtbar sind und wie sie beschriftet werden, hängt zusätzlich vom [Organisationstyp](einstellungen.md#organisationstyp) ab.
- Die Verbindung zum Schulserver richten Sie nach der Anleitung [Linuxmuster verbinden](../configure-lmn-server/configure_lmn-server.md) ein.

## Siehe auch

- [Einstellungen](einstellungen.md) – weitere globale Konfigurationsoptionen
- [Satelliten](satelliten.md) – Standorte anbinden und Dienste betreiben
- [Administration](administration.md) – allgemeine Admin-Aufgaben
