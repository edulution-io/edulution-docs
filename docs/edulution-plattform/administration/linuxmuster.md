# Linuxmuster / LINBO

Die App **Schulserver** verbindet die edulution Plattform mit Ihrem Linuxmuster-Server und bündelt die Verwaltung von Benutzerkonten, Geräten und Elternzuweisungen. Der Bereich **LINBO** innerhalb dieser App zeigt zusätzlich die Hosts, Konfigurationen und Images Ihrer LINBO-Installation.

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
| **LINBO** | Hosts, Konfigurationen und Images der LINBO-Installation |
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

Der Bereich **LINBO** ist in vier Unterseiten gegliedert: **Übersicht**, **Hosts**, **Konfigurationen** und **Images**.

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

### Konfigurationen

Die Tabelle listet die GRUB-Konfigurationen mit ID, Dateiname und Änderungszeitpunkt. Ein Banner darüber zeigt, ob die **LMN-API** erreichbar ist, sowie die Zahl der Hosts und Konfigurationen.

Ein Klick auf eine Zeile öffnet die Vorschau **Konfiguration \<ID\>** mit drei Registerkarten:

- **Zusammenfassung** – die ausgewertete `start.conf`: der Abschnitt `[LINBO]` als Liste der gesetzten Schlüssel, die **Partitionen** mit Gerät, Bezeichnung, Größe, Dateisystem und der Markierung *Bootfähig* sowie die **Betriebssysteme** mit Name, Version, Basis-Image, Boot-Partition und der Markierung *Autostart*.
- **Rohdaten** – der unveränderte Inhalt der `start.conf`.
- **GRUB cfg** – der Inhalt der GRUB-Konfiguration.

Existiert zu einer GRUB-Konfiguration keine `start.conf`, entfallen die ersten beiden Registerkarten und es erscheint der Hinweis *„Für diese GRUB-Konfiguration existiert keine start.conf."*

:::note[Auswertung der start.conf]
Die Zusammenfassung liest die Datei so, wie LINBO selbst sie liest: Abschnitts- und Schlüsselnamen werden unabhängig von der Groß- und Kleinschreibung erkannt, und als Ja-Wert gelten ausschließlich `yes`, `true` und `enable`. Ein Schlüssel mit einem anderen Wert – etwa `Autostart = 1` – zählt daher als *aus*. Ein leerer oder fehlender Schlüssel erhält den Standardwert, den auch der LINBO-Client annimmt.
:::

### Images

Die Tabelle zeigt Name, Größe, vorhandene **Sidecars** und den Änderungszeitpunkt jedes Images. Über die Aktionen einer Zeile laden Sie ein Image **herunter** oder öffnen die **Details**.

Sidecars sind die Beipack-Dateien eines Images: Beschreibung (`.desc`), Info (`.info`), Torrent (`.torrent`), Prüfsumme (`.md5`), Registry (`.reg`), Pre-Start-Skript (`.prestart`) und Post-Sync-Skript (`.postsync`). Der Detaildialog zeigt zusätzlich Dateiname, Image-Ordner, Pfad, Größe, MD5-Summe und – sofern ein `.info`-Sidecar vorliegt – Erstellungszeitpunkt, Image- und Partitionsgröße sowie die Beschreibung.

Über die Schaltfläche zum Hochladen fügen Sie ein Image hinzu. Zulässig sind Image-Dateien (`.qcow2`, `.cloop`, `.rsync`) und Beipack-Dateien (`.info`, `.desc`, `.md5`, `.reg`, `.torrent`, `.prestart`, `.postsync`, `.macct`); andere Dateitypen weist der Dialog ab. Während eines laufenden Downloads sind weitere Downloads gesperrt.

## Versionsübersicht

Die Seite **Versionsübersicht** listet die Versionen der beteiligten Linuxmuster-Komponenten – nützlich, um die für diese App benötigte API-Version 7.3.26 zu prüfen.

## Einschränkungen in dieser Version

Einige Aktionen sind in der Oberfläche bereits vorhanden, aber noch nicht angebunden. Sie melden beim Aufruf *„Diese Aktion wird in dieser Version noch nicht unterstützt."*:

- die Host-Aktionen **Wake-on-LAN**, **Sync**, **Start**, **Neu starten**, **Herunterfahren** und **Treiber-Profil**
- die Aktion **Sync** im Bereich **Konfigurationen**
- die Spalten **Status** und **Geplant** der Hostliste

Das Bearbeiten der `start.conf` aus der edulution Plattform heraus ist derzeit nicht möglich; die Konfigurationen werden ausschließlich angezeigt.

## Einrichtung (für Administratoren)

- Die **Plattform** stellen Sie unter [Einstellungen → Globale Einstellungen → Allgemein](einstellungen.md#allgemein) auf **Linuxmuster**.
- Welche Bereiche dieser App sichtbar sind und wie sie beschriftet werden, hängt zusätzlich vom [Organisationstyp](einstellungen.md#organisationstyp) ab.
- Die Verbindung zum Schulserver richten Sie nach der Anleitung [Linuxmuster verbinden](../configure-lmn-server/configure_lmn-server.md) ein.

## Siehe auch

- [Einstellungen](einstellungen.md) – weitere globale Konfigurationsoptionen
- [Satelliten](satelliten.md) – Standorte anbinden und Dienste betreiben
- [Administration](administration.md) – allgemeine Admin-Aufgaben
