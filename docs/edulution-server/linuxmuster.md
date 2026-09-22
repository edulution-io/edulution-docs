---
sidebar_custom_props:
  audience: admin
---

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
Die **Elternzuweisung** erscheint nur in Schulumgebungen. Beim [Organisationstyp](../edulution-plattform/konfiguration/einstellungen.md#organisationstyp) **Unternehmen** entfällt der Eintrag.
:::

:::note[Wer den Schulserver verwalten darf]
Die Bereiche der App **Schulserver** stehen **Globaladmins** und **Schuladmins** offen. Andere Rollen haben gegenüber Linuxmuster keine Verwaltungsrechte – daran ändert auch der Zugriff auf die App nichts.
:::

:::note[LINBO nur für Globaladmins]
Der Eintrag **LINBO** in der Seitenleiste – und die gleichnamige Kachel der Übersicht – ist ausschließlich **Globaladmins** vorbehalten. Für alle anderen Rollen entfällt der Bereich; die übrigen Einträge der App bleiben davon unberührt.
:::

Die **Übersicht** ist nach denselben Bereichen gegliedert wie die Seitenleiste. Unter **Benutzerverwaltung** führt je eine Kachel direkt zu den Benutzertypen **Schüler**, **Lehrer**, **Extra-Schüler**, **Eltern**, **Mitarbeiter**, **Schuladmins** und **Globaladmins**; in Unternehmensumgebungen bleiben davon nur **Mitarbeiter** und **Globaladmins** sichtbar. Darunter folgen die Bereiche **Geräteverwaltung**, **Elternzuweisung**, **LINBO** und **System** mit je einer Kachel. Die Kachel **LINBO** öffnet dieselbe Übersicht wie der gleichnamige Eintrag in der Seitenleiste.

In Umgebungen mit mehreren Schulen enthalten die Listenansichten oben rechts eine **Schulauswahl**. Benutzerverwaltung, Geräteverwaltung, Verwaltungslisten und Elternzuweisung zeigen die Daten der dort gewählten Schule; ein Wechsel lädt die Listen neu. Als **Globaladmin** wählen Sie jede Schule des Servers, als **Schuladmin** enthält die Auswahl nur Ihre eigene Schule.

## Benutzerverwaltung

Die Benutzerverwaltung ist je Benutzertyp (Schüler, Lehrer, Extra-Schüler, Eltern, Mitarbeiter) in zwei Registerkarten geteilt:

- **Tabelle** – die bestehenden Konten mit Anmeldename, Name, Klasse, Rolle, Quota und weiteren Eigenschaften. Über **CSV exportieren** laden Sie die angezeigten Konten herunter, über **Benutzer hinzufügen** legen Sie ein einzelnes Konto an.
- **Liste** – der Import über eine CSV-Datei. Die Liste entspricht der Datei `<Schule>/<Typ>.csv` auf dem Server.

Für Benutzertypen ohne Importunterstützung erscheint der Hinweis *„Für diesen Benutzertyp ist kein Import verfügbar."*

### Import in drei Schritten

Der Import ist bewusst mehrstufig, damit Sie die Auswirkungen vor dem Schreiben sehen:

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
Eine vollständige Beschreibung der Benutzerverwaltung – Benutzertabelle, Sophomorix-Status, Spalten der Verwaltungslisten, CSV-Import und -Export sowie der Prüf- und Übernahmeprozess – finden Sie unter [Benutzerverwaltung](./benutzerverwaltung.md).
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

Hier geben Sie die Verknüpfungen frei, die Eltern und Schüler selbst über einen Zuweisungs-Code
angefragt haben (*„Eltern-Schüler-Zuweisungen verwalten."*). Wie die Anfrage entsteht, beschreibt
[Benutzereinstellungen → Meine Kinder/Eltern](../edulution-plattform/uebersicht/benutzereinstellungen/meine-kinder-eltern.md).

![Kachel „Elternzuweisung" auf der Übersichtsseite der Schulserver-App](/img/eltern-schueler-zuordnung/elternzuweisung-kachel.png)

:::note[Zu welcher Schule eine Anfrage gehört]
Eine Anfrage gehört immer zur **Schule des Schülers**. Gehören Kind und Elternteil verschiedenen
Schulen an, erscheint sie deshalb nur in der Schule des Kindes und wird auch nur dort freigegeben.
:::

Die Tabelle zeigt die Zuordnungen mit folgenden Spalten; die Fußzeile nennt die Zahl der
ausgewählten Einträge.

![Tabelle der Eltern-Schüler-Zuweisungen mit Spalten Elternteil, Schüler, Status und Erstellt am](/img/eltern-schueler-zuordnung/elternzuweisung-tabelle.png)

| Spalte | Inhalt |
| --- | --- |
| **Elternteil** | Das anfragende bzw. zugeordnete Elternteil |
| **Schüler** | Der zugeordnete Schüler |
| **Status** | Ausstehend, Akzeptiert oder Abgelehnt |
| **Erstellt am** | Zeitpunkt der Anfrage |

### Anfragen bearbeiten

Über die Aktionen einer Zeile geben Sie eine Anfrage frei (**Akzeptieren**) oder lehnen sie ab (**Ablehnen**). Sie können mehrere Einträge auswählen und über die Schaltflächen am unteren Rand gemeinsam bearbeiten. Nach der Bearbeitung erscheint die Rückmeldung *„Status erfolgreich aktualisiert."*.

- Mit **Akzeptieren** wird die Verknüpfung in der Linuxmuster-Umgebung eingerichtet – das Elternteil wird dem Schülerkonto zugeordnet.
- Mit **Ablehnen** einer bereits akzeptierten Zuordnung wird die Verknüpfung wieder entfernt.

### Filtern und suchen

- Über das **Suchfeld** filtern Sie die Tabelle nach Elternteil oder Schüler (*„Nach Elternteil oder Schüler suchen…"*).
- Ein **Status-Filter** blendet gezielt *Alle*, *Ausstehend*, *Akzeptiert* oder *Abgelehnt* ein. Standardmäßig sind die **ausstehenden** Anfragen vorausgewählt.
- Über die **Schulauswahl** oben rechts bearbeiten **Globaladmins** die Anfragen einer anderen Schule.

![Geöffneter Status-Filter mit den Optionen Alle, Ausstehend, Akzeptiert und Abgelehnt](/img/eltern-schueler-zuordnung/elternzuweisung-filter.png)

:::info[Nur in Schulumgebungen]
Der Bereich erscheint ausschließlich in Schulumgebungen.
:::

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

**Status** nennt je Host **Online** oder **Offline**; die Spaltenüberschrift sagt beim Überfahren, wann der Zustand zuletzt erhoben wurde. Solange für einen Host noch keine Erhebung vorliegt, bleibt das Feld leer.

Über das Menü hinter der Schaltfläche mit den drei Punkten schicken Sie einer Zeile **Wake-on-LAN**, **Neu starten**, **Herunterfahren** oder **Aktion schicken…** – Letzteres öffnet den Kommando-Dialog für genau diesen Host, unabhängig davon, welche Zeilen sonst angehakt sind. Ein Host, der nicht erreichbar ist, wird übersprungen und in der Rückmeldung benannt.

#### Mehrere Hosts auswählen

Die erste Spalte der Tabelle trägt je Zeile ein Auswahlkästchen, das Kästchen in der Kopfzeile wählt alle Zeilen der aktuellen Ansicht. Sobald mindestens ein Host ausgewählt ist, erscheint oberhalb der Tabelle eine Leiste mit der Anzahl und den Aktionen **Auswahl aufwecken**, **Auswahl neu starten**, **Auswahl herunterfahren** und **Aktion schicken**.

:::note[Die Suche bestimmt mit, wen eine Sammelaktion trifft]
Eine Sammelaktion erreicht nur die Hosts, die gerade **sichtbar** sind. Schränken Sie die Suche ein, nachdem Sie ausgewählt haben, sinkt die Zahl in der Leiste entsprechend – ausgeblendete Hosts bleiben angehakt, werden aber nicht angesprochen. Leeren Sie die Suche wieder, sind sie erneut Teil der Auswahl.
:::

Nach einer Sammelaktion verlieren die Hosts ihr Häkchen, für die der Server den Auftrag angenommen hat – auch dann, wenn er einzelne davon als offline übersprungen hat. Angehakt bleiben nur Rechner, die der Auftrag gar nicht erreicht hat, etwa weil bei einem großen Lauf ein Teil nicht zugestellt werden konnte. Die Auswahl schrumpft dann auf genau diese Rechner, sodass ein zweiter Versuch die bereits bedienten nicht noch einmal trifft.

#### Der Kommando-Dialog

**Aktion schicken** öffnet einen Dialog, der die ausgewählten Rechner namentlich nennt – oder, aus dem Bereich **Gruppen** heraus, die Hardwaregruppe, an die die Kette geht – und aus einzelnen Schritten eine **Kommandokette** zusammensetzt. Die Kette wird genau in der Reihenfolge ausgeführt, in der die Schritte stehen; über **Nach oben** und **Nach unten** ordnen Sie sie um, über **Entfernen** nehmen Sie einen Schritt wieder heraus. Unten zeigt die **Kommandokette** die Schreibweise, die Sie auch auf der Konsole verwenden würden.

Je nach Schritt verlangt der Dialog ein zusätzliches Argument:

| Schritt | Auswahl |
|---------|---------|
| **Sync**, **Neu**, **Start**, **Prestart**, **Postsync** | das Betriebssystem – mit seinem Namen aus der `start.conf`, nicht als Ziffer |
| **Formatieren** | die Partition, benannt mit Nummer, Gerät und Bezeichnung, oder **Alle Partitionen** |
| **Cache befüllen** | die Übertragungsart `rsync`, `multicast` oder `torrent` |
| **Partitionieren**, **Beschriften**, **Neu starten**, **Herunterfahren** | – |

:::note[Woher die Nummern stammen]
Betriebssysteme und Partitionen werden in der Reihenfolge gezählt, in der ihre Abschnitte in der `start.conf` stehen – nicht nach der Ziffer im Gerätenamen. Der Dialog zählt dabei genauso wie der LINBO-Client: ein auskommentierter Abschnitt steht nicht zur Auswahl, zählt aber mit, sodass die Einträge darunter ihre Nummer behalten. Deshalb kann die Partition `/dev/sda5` die Nummer 3 tragen, und auf einem Rechner mit zwei Festplatten steht jede Partition einzeln zur Wahl, statt mit der gleich nummerierten der anderen Platte zusammengefasst zu werden.
:::

Darunter legen Sie den Modus und die Optionen fest: **Beim nächsten Start ausführen** stellt die Kette zurück, statt sie sofort zu schicken. **Wake-on-LAN** weckt die Rechner und wartet die eingetragenen Sekunden, bevor die Kette ausgeführt wird. Erst mit Wake-on-LAN lassen sich zwei weitere Werte setzen: der **Abstand zwischen den Weckpaketen**, mit dem die Rechner nacheinander statt gleichzeitig geweckt werden, und **Weckpaket zusätzlich an die Broadcast-Adresse senden**. **Oberfläche des Clients beim nächsten Start abschalten** und **Automatische Funktionen der start.conf beim nächsten Start übergehen** wirken erst beim nächsten Start – Letzteres überspringt das in der `start.conf` eingestellte automatische Partitionieren, Formatieren, **Cache befüllen** und Starten.

:::warning[Bestätigung für zerstörende Schritte]
**Neu**, **Formatieren** und **Partitionieren** löschen Daten auf den Zielrechnern. Der Dialog verlangt dafür ein zusätzliches Häkchen, das die Anzahl der betroffenen Rechner nennt – und, wenn die Auswahl mehrere Hardwaregruppen umfasst, auch deren Anzahl; geht die Kette an eine ganze Hardwaregruppe, nennt das Häkchen stattdessen die Gruppe. Die Bestätigung gilt für **genau diese Kette, genau diese Rechner und genau diese Optionen**: ändern Sie danach einen Schritt, ein Argument, die Auswahl oder eine der Optionen darüber, wird sie zurückgenommen und Sie bestätigen erneut. Das gilt besonders für **Beim nächsten Start ausführen** und **Wake-on-LAN** – das eine verlegt einen begleiteten Lauf auf den nächsten Start der Rechner, das andere weckt auch die, die bewusst ausgeschaltet waren.
:::

Steht **Ausführen** nicht zur Verfügung, nennt der Dialog den Grund direkt darüber – etwa ein Schritt, dem noch die Auswahl fehlt, eine ausstehende Bestätigung oder ein Lauf, der bereits läuft.

Nicht jede Aktion steht für jede Auswahl bereit. Fehlt eine, erklärt der Dialog oberhalb der Schaltflächen, warum:

| Hinweis | Ursache |
|---------|---------|
| Abbild-Aktionen laufen nur auf genau einem Rechner | **Abbild erstellen**, **Abbild hochladen**, **Differenz erstellen** und **Differenz hochladen** verlangen einen einzelnen Host – für eine ganze Hardwaregruppe stehen sie deshalb nie bereit |
| Aktionen mit Betriebssystem verlangen dieselbe Hardwaregruppe | die Position des Betriebssystems lässt sich nur aus **einer** `start.conf` auflösen |
| Für diese Hardwaregruppe gibt es keine `start.conf` | die Gruppe der ausgewählten Rechner ist auf dem Server nicht beschrieben – etwa bei Servern und Druckern in `nopxe` |
| Die `start.conf` dieser Hardwaregruppe konnte nicht geladen werden | der Server war nicht erreichbar oder hat die Anfrage abgelehnt; die Gruppe kann sehr wohl eine `start.conf` besitzen |

Solange die `start.conf` der Gruppe noch geladen wird, bleiben die Aktionen mit Betriebssystem wählbar. Der Dialog sagt an derselben Stelle, dass die Datei noch geladen wird, und die Auswahlliste füllt sich, sobald sie vorliegt.

Nach dem Abschicken meldet die Plattform, ob die Kette alle Rechner erreicht hat. Waren einzelne Hosts offline, werden sie namentlich genannt; die Statusspalte der betroffenen Zeilen wird anschließend mehrfach nachgefragt, weil ein Rechner, der gerade neu startet, nicht sofort antwortet.

:::note[Geplante Aktionen]
**Geplant** bleibt ohne einen edulution-Satellite leer: geplante Aktionen werden vom Satellite verwaltet und sind in dieser Version nicht angebunden.
:::

#### Laufende Sitzungen

Ein Lauf wird auf dem Schulserver je Host in einer eigenen Sitzung ausgeführt und läuft dort weiter, auch wenn Sie den Dialog schließen oder die Seite verlassen. **Laufende Sitzungen** in der Aktionen-Leiste der Hostliste zeigt, was gerade läuft; steht etwas an, nennt die Schaltfläche die Anzahl. Die Schaltfläche steht immer bereit, auch ohne Auswahl.

Der Dialog listet je Sitzung den Hostnamen und seit wann sie läuft. **Protokoll** zeigt die Ausgabe des Laufs für diesen Host; über **Zurück zur Liste** kehren Sie zur Übersicht zurück. Der Schulserver schreibt die Ausgabe mit, solange der Lauf dauert, und behält sie danach – das Protokoll eines gerade beendeten Laufs bleibt also lesbar, auch wenn die Sitzung nicht mehr in der Liste steht.

Solange die Hostliste im Vordergrund liegt, wird die Liste etwa alle fünf Sekunden neu gelesen und ein geöffnetes Protokoll im Sekundentakt nachgeführt; nach dem Ende der Sitzung wird es ein letztes Mal gelesen. Ein Browser-Tab im Hintergrund fragt nichts ab und holt beim Zurückwechseln nach.

:::note[Die Liste folgt nicht der gewählten Schule]
Welche Sitzungen Sie sehen, entscheidet der Schulserver anhand Ihres Kontos: eine Schulverwaltung sieht die Hosts der eigenen Schule, eine globale Administration jede laufende Sitzung. Der Schulauswahl oberhalb der Liste folgt sie deshalb nicht – ein Wechsel blendet keine Sitzung aus, die weiterläuft.
:::

Antwortet der Server nicht, bleibt der zuletzt bekannte Stand stehen und der Dialog sagt es; der nächste Versuch läuft von selbst, ohne die Meldung bei jedem Durchgang zu wiederholen.

### Gruppen

Eine **Hardwaregruppe** ist eine `start.conf` auf dem Server: sie beschreibt das Plattenlayout und die Betriebssysteme aller Rechner, die ihr zugeordnet sind. Die Seite listet die Hardwaregruppen des Servers – also genau die Gruppen, für die eine `start.conf` vorliegt.

:::note[Gruppen sind nicht schulgebunden]
Die `start.conf`-Dateien liegen serverweit und nicht je Schule. Ein Wechsel der Schule über die Auswahl oberhalb der Liste ändert die Gruppen deshalb nicht; Sync-Status und Hostzahl im Banner beziehen sich weiterhin auf die gewählte Schule.
:::

:::warning[API-Version für die Gruppenliste]
Die Gruppenliste benötigt die Linuxmuster-API in **Version 7.4.11** oder neuer. Ist die API älter, bleibt die Liste leer und meldet einen Fehler, während die übrigen Bereiche der App weiterarbeiten.
:::

Oben rechts wählen Sie zwischen vier Ansichten derselben Liste. Ihre Wahl bleibt erhalten und gilt auch nach einem Neuladen:

| Ansicht | Zeigt |
|---------|-------|
| **Plattenkarte** (Vorgabe) | jede Platte der Gruppe als Balken ihrer Partitionen, nach Rolle eingefärbt, dazu die Betriebssysteme mit Autostart-Zeit |
| **Kacheln** | Systemtyp, Betriebssysteme und die Zahl der zugeordneten Rechner |
| **Datenblatt** | die gesetzten Schlüssel der Gruppe: Server, Cache, Download-Typ, Systemtyp, Abmeldung nach, Kernel-Optionen und Virtueller Desktop |
| **Tabelle** | ID, Dateiname und Änderungszeitpunkt |

Ein Banner über der Liste nennt den **Sync-Status**: den Zustand der **LMN-API**, wie viele Hosts und Gruppen gefunden wurden und wann zuletzt geladen wurde. Die API-Anzeige unterscheidet vier Zustände:

| Anzeige | Bedeutung |
|---------|-----------|
| **Wird geprüft …** | Die Abfrage läuft noch. Nach einem Wechsel der Schule erscheint der Zustand erneut, bis die Antwort für die neue Schule vorliegt. |
| **Verbunden** | Die API antwortet und meldet alle Prüfungen als bestanden. |
| **Eingeschränkt** | Die API antwortet, meldet aber einen fehlenden Bestandteil. Der Grund steht im Klartext daneben – etwa dass `devices.csv` für diese Schule fehlt oder `/srv/linbo` nicht vorhanden ist. Nennt die API keinen Grund, weist der Text ausdrücklich darauf hin. |
| **Nicht verfügbar** | Die API antwortet nicht – oder es steht keine Schule zur Auswahl, für die gefragt werden könnte. Im zweiten Fall fragt die Plattform gar nicht erst an; der Server kann dabei einwandfrei laufen. |

#### Aktionen einer Gruppe

**Vorschau anzeigen** liegt als eigene Schaltfläche auf der Karte. Alle Aktionen zusammen finden Sie im Menü hinter der Schaltfläche mit den drei Punkten, auf der Karte oben rechts neben dem Namen. In der **Tabelle** steht in der Spalte **Aktionen** das Löschen; die Vorschau öffnen Sie dort per Klick auf die Zeile – beim Überfahren weist die Spalte **Aktualisiert** darauf hin.

| Aktion | Wirkung |
|--------|---------|
| **Bearbeiten** | öffnet den Gruppen-Editor (siehe unten) |
| **Vorschau anzeigen** | zeigt die ausgewertete `start.conf`, ihre Rohdaten und die GRUB-Konfiguration |
| **Duplizieren** | legt eine Kopie unter neuem Namen an |
| **Aktion schicken** | öffnet den [Kommando-Dialog](#der-kommando-dialog) für alle Rechner der Gruppe |
| **Gruppe löschen** | löscht die `start.conf` der Gruppe auf dem Server |

**Aktion schicken** richtet eine Kommandokette an die Hardwaregruppe als Ganzes: Der Server ermittelt selbst, welche Rechner der **ausgewählten Schule** dazugehören – Rechner derselben Gruppe in einer anderen Schule erreicht der Lauf nicht; wechseln Sie dafür die Schule oberhalb der Liste. Der Dialog nennt die Gruppe und dazu, wie viele ihrer Rechner die ausgewählte Schule führt; führt sie keinen, steht keine Aktion zur Wahl, und der Dialog sagt warum. Solange die Rechnerliste der Schule noch geladen wird – oder wenn das Laden fehlgeschlagen ist – ist die Anzahl noch nicht bekannt: Auch dann steht keine Aktion zur Wahl, der Dialog nennt dafür aber das Laden als Grund, statt es der Schule zuzuschreiben. Öffnen Sie den Dialog direkt nach dem Aufruf der Seite, kann das kurz der Fall sein; sobald die Liste steht, stehen die Aktionen zur Wahl. Die Betriebssysteme für **Sync**, **Neu** und **Start** stammen aus der `start.conf` der Gruppe. Die Aktion ist ausgegraut, solange ein anderer Auftrag noch läuft, und für eine Gruppe, deren Name die Regeln für `linbo-remote` nicht erfüllt – der Grund steht am Knopf. Nach dem Abschicken meldet die Plattform, ob die Kette die Gruppe erreicht hat; waren Rechner offline, nennt sie den Hinweis des Servers dazu. Ob der Lauf noch läuft und was er ausgibt, sehen Sie anschließend unter [Laufende Sitzungen](#laufende-sitzungen) im Bereich **Hosts**.

Über **Gruppe anlegen** oben rechts erstellen Sie eine neue Gruppe. Sie vergeben einen Namen – erlaubt sind Buchstaben, Ziffern, Bindestrich und Unterstrich, keine Leerzeichen – und wählen eine **Vorlage**: *Minimal – nur Cache-Partition*, *Windows (UEFI)*, *Linux (UEFI)*, *Windows und Linux (UEFI)* oder *Windows und Linux (BIOS)*. Der Hinweis unter der Auswahl nennt, wie viele Partitionen die Vorlage anlegt und auf welchem Gerät sie entstehen. Einen Namen, den eine gelistete Gruppe bereits trägt, weist der Dialog schon bei der Eingabe ab; Groß- und Kleinschreibung spielt dabei keine Rolle.

Ist die Serveradresse noch nicht bekannt, holt die Plattform sie beim Öffnen des Dialogs nach; gelingt das nicht, bricht das Anlegen mit einer Meldung ab. Eine neu angelegte Gruppe steht ohne Neuladen in der Liste.

:::note[Vorlagen zielen auf die erste SATA-Platte]
Alle fünf Vorlagen legen ihr Layout auf `/dev/sda` an. Auf Rechnern mit NVMe- oder VirtIO-Platten passt das nicht: Die Gruppe entsteht zwar, ihre Gerätenamen gehen aber an der Hardware vorbei und müssen anschließend in der `start.conf` korrigiert werden. Das Gerät steht im Hinweis unter der Vorlagenauswahl, bevor Sie schreiben.
:::

:::warning[Vorhandene Gruppe wird nicht überschrieben]
Vor dem Anlegen prüft die Plattform auf dem Server, ob für den Namen bereits eine `start.conf` existiert – auch dann, wenn die Liste sie nicht anzeigt. In diesem Fall bricht der Vorgang mit einem Hinweis ab, statt die vorhandene Gruppe zu ersetzen.
:::

Beim **Duplizieren** übernimmt die Kopie Partitionen, Betriebssysteme und Einstellungen der Vorlage; der Gruppenname in der Datei wird dabei auf den neuen Namen umgeschrieben.

:::warning[Wer Gruppen schreiben darf, entscheidet die Linuxmuster-API]
Anlegen, Speichern, Duplizieren und Löschen einer Gruppe reicht die Plattform für Schul- und globale Administratoren an die Linuxmuster-API weiter; welche Rolle die Aktion ausführen darf, prüft die API. Bis einschließlich **Version 7.4.11** sind diese Schreibrouten globalen Administratoren vorbehalten: Als Schuladministrator erreichen Sie die Aktion in der Oberfläche, der Server weist sie aber ab – mit der Meldung *„start.conf konnte nicht gespeichert werden"* beziehungsweise *„start.conf konnte nicht gelöscht werden"*. Gibt eine neuere API-Version die Routen auch für Schuladministratoren frei, stehen sie ohne Änderung an der Plattform zur Verfügung. Lesen und Vorschau sind von der Einschränkung nicht betroffen.
:::

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

**Bearbeiten** öffnet die Gruppe unter einer eigenen Adresse (`…/linbo/groups/<Name>`). Diese Adresse lässt sich verlinken und übersteht ein Neuladen; ein unbekannter Name führt mit einem Hinweis zurück auf die Liste. Der Editor hat zwei Registerkarten.

**Allgemein** enthält die Felder der Gruppe, gegliedert in *Hardware*, *Startoptionen* und *Darstellung*. Drei Werte sind hier bewusst nicht änderbar: der Gruppenname, der Server und die Cache-Partition – letztere ergibt sich aus dem Partitionslayout. Die Schaltfläche **Erweitert** im Fuß des Dialogs blendet die selten benötigten Felder ein; sie wirkt nur für den geöffneten Dialog und wird nicht gemerkt.

Zum Feld **Kernel-Optionen** gehören Schaltflächen für die gebräuchlichen Werte: `quiet`, `splash`, `acpi=noirq`, `acpi=off`, `irqpoll` und `dhcpretry=9`. Ein Klick hängt den Wert an die bestehenden Optionen an; ist er bereits gesetzt, ist die Schaltfläche ausgegraut.

:::warning[Beim Start formatieren]
**Beim Start partitionieren** legt das Plattenlayout bei jedem Start neu an, **Beim Start formatieren** formatiert dabei alle Partitionen. Lokal auf den Rechnern gespeicherte Daten gehen dann bei jedem Start verloren.
:::

**Partitionen** zeigt je Platte eine Karte. Über die Preset-Schaltflächen fügen Sie eine Partition mit sinnvoller Vorgabegröße hinzu: *EFI*, *MSR*, *Windows*, *Linux*, *Swap*, *Daten*, *Erweitert* und *Cache*. Der **Plattentyp** – SATA, VirtIO, Xen, IDE, MMC, NVMe oder allgemein – bestimmt die Gerätenamen; ein Wechsel nummeriert die Partitionen der Platte samt aller Verweise darauf um. Ein Klick auf eine Partition öffnet einen Dialog mit den Unterregisterkarten **Partition** und **Betriebssystem**.

Im Feld **Größe** gilt: eine nackte Zahl sind Kibibytes, ein Suffix `M`, `G` oder `T` legt die Einheit fest, und ein leeres Feld bedeutet *Rest der Platte* (in der Plattenkarte als `∞` dargestellt). Unter dem Feld steht laufend, welche Größe daraus wird.

Unter den Platten listet der Abschnitt **Betriebssysteme** die Einträge der Gruppe mit Partition, Basisimage, Kernel, Initrd und den Schaltern für Autostart, Sync und Start. **Bearbeiten** öffnet die Partition, an der ein Eintrag hängt. Zeigt das Root-Gerät eines Eintrags auf keine Partition des Layouts, wird der Eintrag als verwaist gekennzeichnet und lässt sich hier löschen.

Bearbeitet wird ein Betriebssystem auf der Unterregisterkarte **Betriebssystem** des Partitionsdialogs. Dort stehen **Name**, **Version**, **Standardaktion**, **Symbol**, **Basisimage**, die **Startknöpfe im LINBO-Menü** – *Start*, *Sync & Start*, *Neu & Start* und *Autostart* – sowie das **Autostart-Timeout (Sekunden)**. Hinter **Erweitert** liegen **Kernel**, **Initrd**, **Zusätzliche Kernel-Parameter**, **Opsi-Setup erzwingen**, **Opsi-Status wiederherstellen** und **Im Startmenü ausblenden**.

Solange ungespeicherte Änderungen vorliegen, fragt der Editor beim Schließen nach, ob Sie sie verwerfen wollen.

:::note[Was beim Speichern geprüft wird]
Bevor die Plattform eine `start.conf` auf den Server schreibt, prüft sie deren Abschnitt `[LINBO]` und weist die Datei mit einer Meldung ab, wenn

- kein **Group**-Eintrag vorhanden ist,
- der **Group**-Eintrag nicht dem Namen entspricht, unter dem die Gruppe gespeichert wird – der Dateiname *ist* die Identität der Gruppe, beide müssen übereinstimmen – oder
- keine **Cache**-Partition genannt ist; ohne Cache startet LINBO die Gruppe nicht.

Gewertet wird dabei ausschließlich der Abschnitt `[LINBO]`: ein `Cache`-Eintrag in einer Partitionssektion oder eine auskommentierte Zeile zählt nicht. Die Linuxmuster-API selbst prüft den Inhalt nicht – eine `start.conf`, die Sie direkt auf dem Server ablegen, durchläuft diese Prüfung nicht.
:::

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

:::note[Wiederherstellen ist umkehrbar]
Der Server legt vor dem Wiederherstellen eine neue Sicherung des aktuellen Images an, sodass sich der Schritt zurücknehmen lässt. Zwei Wiederherstellungen desselben Images innerhalb derselben Minute schlagen fehl; ein erneuter Versuch nach einer Minute gelingt.
:::

## Versionsübersicht

Die Seite **Versionsübersicht** listet die Versionen der beteiligten Linuxmuster-Komponenten – nützlich, um die für diese App benötigte API-Version 7.3.26 zu prüfen.

## Einschränkungen in dieser Version

Die Spalte **Geplant** der Hostliste ist in der Oberfläche bereits vorhanden, aber noch nicht angebunden; sie meldet beim Aufruf *„Diese Aktion wird in dieser Version noch nicht unterstützt."*.

Eine Kommandokette richtet sich an einen einzelnen Host, an eine Auswahl von Hosts oder an eine Hardwaregruppe. Ein ganzer **Raum** lässt sich in dieser Version nicht als Ziel wählen, obwohl die Linuxmuster-API das anbietet.

Eine laufende Sitzung lässt sich aus der Plattform heraus **nicht abbrechen** und nicht mitverfolgen, wie es `tmux attach` auf der Konsole erlaubt: die Linuxmuster-API bietet dafür keine Schnittstelle. Sie sehen den Lauf und sein Protokoll, beenden können Sie ihn nur auf dem Server.

Die Schaltfläche **Versionsstände** im Bereich **Gruppen** ist sichtbar, aber dauerhaft deaktiviert: die Linuxmuster-API bietet dafür keine Schnittstelle. Der Grund steht am Knopf.

Ein **Virtueller Desktop** (VDI) je Gruppe lässt sich in dieser Version nicht bearbeiten. Das Datenblatt zeigt, ob er in der `start.conf` aktiviert ist; die zugehörige Konfigurationsdatei ist über die Linuxmuster-API noch nicht erreichbar.

## Einrichtung (für Administratoren)

- Die **Plattform** stellen Sie unter [Einstellungen → Globale Einstellungen → Allgemein](../edulution-plattform/konfiguration/einstellungen.md#allgemein) auf **Linuxmuster**.
- Welche Bereiche dieser App sichtbar sind und wie sie beschriftet werden, hängt zusätzlich vom [Organisationstyp](../edulution-plattform/konfiguration/einstellungen.md#organisationstyp) ab.
- Die Verbindung zum Schulserver richten Sie nach der Anleitung [Linuxmuster verbinden](./installation.md) ein.

## Siehe auch

- [Einstellungen](../edulution-plattform/konfiguration/einstellungen.md) – weitere globale Konfigurationsoptionen
- [Satelliten](../edulution-satellite/verwaltung.md) – Standorte anbinden und Dienste betreiben
- [Administration](../edulution-plattform/konfiguration/administration.md) – allgemeine Admin-Aufgaben
