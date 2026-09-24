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

:::note[Wer LINBO erreicht]
Der Eintrag **LINBO** in der Seitenleiste – und die gleichnamige Kachel der Übersicht – steht **Globaladmins** immer offen. **Schuladmins** erreichen den Bereich ab **Version 7.4.13** der Linuxmuster-API; mit einer älteren API entfällt er für sie. Für alle anderen Rollen entfällt der Bereich ganz; die übrigen Einträge der App bleiben davon unberührt.
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

Für **Rechnername**, **Raum** und **Hardwaregruppe** gelten zusätzlich Namensregeln; welche Zeichen erlaubt sind, nennt die Meldung, mit der **Speichern** und **Anwenden** einen abweichenden Namen abweisen. Ein Rechnername darf außerdem weder mit einem Bindestrich beginnen noch mit einem Bindestrich enden.

:::note[Ältere Namen dürfen bleiben, bis Sie die Zeile ändern]
Die Namensregeln gelten nur für neue und geänderte Zeilen. Eine Zeile, die unverändert der gespeicherten Geräteliste entspricht, lässt sich weiterhin speichern und anwenden, auch wenn einer ihrer Namen gegen die Regeln verstößt. Die Tabelle markiert eine solche Zelle gelb statt als Fehler; beim Überfahren erscheint *„Dieser Name entspricht nicht den aktuellen Namensregeln. Die Zeile kann unverändert bleiben, muss aber angepasst werden, sobald sie bearbeitet wird."*

Sobald Sie in dieser Zeile irgendeinen Wert ändern, muss sie den Regeln entsprechen. Das gilt auch nach dem Einlesen einer CSV-Datei: Eine eingelesene Zeile, die mit einer gespeicherten Zeile vollständig übereinstimmt, gilt als unverändert. Doppelte Einträge sowie ungültige MAC- und IP-Adressen werden dagegen immer abgewiesen.
:::

:::tip[Ausführliche Anleitung]
Wie Sie Geräte entfernen, was **Speichern** und **Anwenden** dabei jeweils bewirken, was bei einem fehlgeschlagenen Vorgang mit Ihren Änderungen geschieht, wie der CSV-Dialog die Tabelle ersetzt und was mit Kommentarzeilen geschieht, beschreibt die [Geräteverwaltung](../edulution-plattform/apps/native-apps/geraeteverwaltung.md).
:::

## Elternzuweisung

Hier geben Sie die Verknüpfungen frei, die Eltern und Schüler selbst über einen Zuweisungs-Code
angefragt haben. Wie die Anfrage entsteht, beschreibt
[Benutzereinstellungen → Meine Kinder/Eltern](../edulution-plattform/uebersicht/benutzereinstellungen/meine-kinder-eltern.md).
Der Bereich erscheint nur in Schulumgebungen.

![Tabelle der Eltern-Schüler-Zuweisungen mit Spalten Elternteil, Schüler, Status und Erstellt am](/img/eltern-schueler-zuordnung/elternzuweisung-tabelle.png)

Die Tabelle zeigt **Elternteil**, **Schüler**, **Status** und **Erstellt am**.

:::info[Akzeptierte und abgelehnte Anfragen sind ausgeblendet]
Der Status-Filter steht zu Beginn auf **Ausstehend**. Eine Anfrage, die Sie akzeptieren oder
ablehnen, verschwindet deshalb sofort aus der Tabelle – sie ist nicht gelöscht. Um sie wieder zu
sehen, etwa um eine Ablehnung zurückzunehmen, wählen Sie im Status-Filter **Akzeptiert**,
**Abgelehnt** oder **Alle**. Ihre Wahl gilt bis zur Abmeldung.
:::

Die Tabelle enthält nur Anfragen, die über einen Code entstanden sind. Eltern, die direkt in der
[Benutzerverwaltung](./benutzerverwaltung.md) zugeordnet wurden, stehen hier nicht – Eltern und
Kind sehen sie trotzdem als **Akzeptiert**.

### Wer entscheidet

Eine Anfrage gehört zur **Schule des Kindes**, auch wenn das Elternteil an einer anderen Schule
geführt wird.

| Rolle | Darf |
| --- | --- |
| **Globaladmins** | Anfragen aller Schulen sehen und entscheiden; die Schule wählen sie über die Schulauswahl |
| **Schuladmins** | Anfragen der eigenen Schule sehen und entscheiden |
| andere Rollen mit Zugriff auf den Schulserver | Anfragen der eigenen Schule sehen, aber nicht entscheiden |

Wer nicht entscheiden darf, sieht **Akzeptieren** und **Ablehnen** trotzdem. Ein Klick führt zu
*„Du hast keine Berechtigung, auf diese Ressource zuzugreifen.“*, der Status bleibt unverändert.

### Anfragen entscheiden

Solange eine Anfrage **Ausstehend** ist, ändert sich auf dem Linuxmuster-Server nichts – erst die
Entscheidung schreibt ins AD.

Wählen Sie in der Zeile **Akzeptieren** oder **Ablehnen**. Für mehrere Anfragen auf einmal wählen
Sie die Zeilen aus; die beiden Schaltflächen erscheinen dann in der Leiste mit den schwebenden
Schaltflächen.

| Aktion | Wirkung |
| --- | --- |
| **Akzeptieren** | nimmt das Elternteil in die Gruppen `<schüler>-parents` und `<klasse>-parents` auf. Fehlt `<schüler>-parents` noch, legt der Linuxmuster-Server sie dabei an. Schlägt das fehl, erscheint eine Fehlermeldung und die Anfrage bleibt, wie sie war. |
| **Ablehnen** einer ausstehenden Anfrage | schließt die Anfrage. Eltern und Kind können sie nicht erneut stellen. |
| **Ablehnen** einer akzeptierten Anfrage | nimmt das Elternteil aus beiden Gruppen wieder heraus. Die Gruppe `<schüler>-parents` selbst bleibt bestehen. |
| **Akzeptieren** einer abgelehnten Anfrage | holt eine versehentliche Ablehnung zurück – der einzige Weg, denn eine neue Anfrage für dasselbe Paar ist nicht möglich. |

| Meldung | Bedeutung |
| --- | --- |
| *„Status erfolgreich aktualisiert.“* | Alle gewählten Anfragen wurden geändert. |
| *„Status für 2 von 5 Zuweisungen fehlgeschlagen.“* (Zahlen je nach Fall) | Bei einer Sammelbearbeitung schlugen einzelne Anfragen fehl, meist an der Linuxmuster-API oder an fehlender Berechtigung für die Schule. Die übrigen sind geändert. Die Tabelle wird neu geladen; bearbeiten Sie die verbliebenen Anfragen einzeln, um die Ursache zu sehen. |

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

:::note[Hostliste und Schulbindung]
Die Registerkarte **Hosts** erreicht, wer auch den Bereich **LINBO** erreicht: **Globaladmins** immer, **Schuladmins** ab **Version 7.4.13** der Linuxmuster-API. Zuvor blieb die Registerkarte auch einem Schuladmin verborgen, dem die API LINBO bereits geöffnet hatte.

Anders als die Gruppen sind Hosts schulgebunden. Ein Schuladmin sieht die Rechner seiner eigenen Schule, und jede Aktion – **Wake-on-LAN**, **Neu starten**, **Herunterfahren**, ein Kommando aus dem Aktionsdialog oder ein **Hostscan** – wirkt auf diese Schule. Nennt eine Anfrage eine andere Schule, antwortet die Plattform mit *„Du hast keine Berechtigung, auf diese Ressource zuzugreifen."*, ohne die Anfrage an den Server weiterzugeben. Ein Globaladmin wählt über die **Schulauswahl** jede Schule des Servers.
:::

**Status** nennt je Host **Online** oder **Offline**; die Spaltenüberschrift sagt beim Überfahren, wann der Zustand zuletzt erhoben wurde. Solange für einen Host noch keine Erhebung vorliegt, bleibt das Feld leer.

Ab der Linuxmuster-API **Version 7.4.12** fragt die Plattform einen Host nach einer Aktion aus dem Menü seiner Zeile – **Wake-on-LAN**, **Neu starten** oder **Herunterfahren** – mehrfach nach. Die Spalte **Status** nennt dann neben **Online** oder **Offline**, welches System der Rechner gerade ausführt: *LINBO*, *Linux*, *Windows* oder *Unbekanntes Betriebssystem*. Beim Überfahren listet sie je Image, wann es auf dem Rechner zuletzt synchronisiert wurde oder dass es dort noch nie synchronisiert wurde. Mit einer älteren API-Version zeigt die Spalte nur **Online** oder **Offline**.

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

Solange keine Gruppe ausgewählt ist, bietet die Leiste am unteren Rand **Neu laden** an. Die Schaltfläche holt die `start.conf`-Dateien, die GRUB-Konfigurationen, die Images und die Hosts für die Hostzahlen erneut vom Server – auch dann, wenn die Seite sie gerade erst geladen hat.

:::note[Die Suche bestimmt mit, welche Gruppen eine Aktion trifft]
Ausgewählte Gruppen bleiben ausgewählt, wenn die Suche oder der Filter der Tabelle sie ausblendet. Die Zahl in der Leiste und jede Aktion beziehen sich aber nur auf die ausgewählten Gruppen, die gerade **sichtbar** sind. Leeren Sie die Suche wieder, sind die ausgeblendeten Gruppen erneut Teil der Aktion.
:::

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
| **Sicherungen** | listet die Sicherungen der `start.conf` und spielt eine davon zurück |
| **VDI** | öffnet die VDI-Konfiguration der Gruppe |
| **Aktion schicken** | öffnet den [Kommando-Dialog](#der-kommando-dialog) für alle Rechner der Gruppe |
| **Gruppe löschen** | löscht die `start.conf` der Gruppe auf dem Server |

**Aktion schicken** richtet eine Kommandokette an die Hardwaregruppe als Ganzes: Der Server ermittelt selbst, welche Rechner der **ausgewählten Schule** dazugehören – Rechner derselben Gruppe in einer anderen Schule erreicht der Lauf nicht; wechseln Sie dafür die Schule oberhalb der Liste. Der Dialog nennt die Gruppe und dazu, wie viele ihrer Rechner die ausgewählte Schule führt; führt sie keinen, steht keine Aktion zur Wahl, und der Dialog sagt warum. Solange die Rechnerliste der Schule noch geladen wird – oder wenn das Laden fehlgeschlagen ist – ist die Anzahl noch nicht bekannt: Auch dann steht keine Aktion zur Wahl, der Dialog nennt dafür aber das Laden als Grund, statt es der Schule zuzuschreiben. Öffnen Sie den Dialog direkt nach dem Aufruf der Seite, kann das kurz der Fall sein; sobald die Liste steht, stehen die Aktionen zur Wahl. Die Betriebssysteme für **Sync**, **Neu** und **Start** stammen aus der `start.conf` der Gruppe. Die Aktion ist ausgegraut, solange ein anderer Auftrag noch läuft, und für eine Gruppe, deren Name die Regeln für `linbo-remote` nicht erfüllt – der Grund steht am Knopf. Nach dem Abschicken meldet die Plattform, ob die Kette die Gruppe erreicht hat; waren Rechner offline, nennt sie den Hinweis des Servers dazu. Ob der Lauf noch läuft und was er ausgibt, sehen Sie anschließend unter [Laufende Sitzungen](#laufende-sitzungen) im Bereich **Hosts**.

Solange keine Gruppe ausgewählt ist, steht neben **Gruppe anlegen** ab **Version 7.4.13** der Linuxmuster-API auch **linbo.iso herunterladen**: Die Schaltfläche lädt das Startmedium, das der Server unter `/srv/linbo/linbo.iso` vorhält. Die Datei ist einige hundert Megabyte groß.

Über **Gruppe anlegen** oben rechts erstellen Sie eine neue Gruppe. Sie vergeben einen Namen – erlaubt sind Buchstaben, Ziffern, Bindestrich und Unterstrich, keine Leerzeichen – und wählen eine **Vorlage**: *Minimal – nur Cache-Partition*, *Windows (UEFI)*, *Linux (UEFI)*, *Windows und Linux (UEFI)* oder *Windows und Linux (BIOS)*. Der Hinweis unter der Auswahl nennt, wie viele Partitionen die Vorlage anlegt und auf welchem Gerät sie entstehen. Einen Namen, den eine gelistete Gruppe bereits trägt, weist der Dialog schon bei der Eingabe ab; Groß- und Kleinschreibung spielt dabei keine Rolle.

Ab **Version 7.4.13** der Linuxmuster-API stehen unter den fünf mitgelieferten Vorlagen zusätzlich die Beispielkonfigurationen, die der Server in `/srv/linbo/examples` bereithält. Eine solche Vorlage wird unverändert übernommen; nur Gruppenname, Serveradresse und Schule schreibt die Plattform beim Anlegen neu.

Ist die Serveradresse noch nicht bekannt, holt die Plattform sie beim Öffnen des Dialogs nach. Gelingt das nicht – etwa weil `/server-info` globalen Administratoren vorbehalten ist –, verwendet sie die Serveradresse, die eine bereits vorhandene Gruppe nennt. Findet sich auch dort keine, bricht das Anlegen mit einer Meldung ab. Eine neu angelegte Gruppe steht ohne Neuladen in der Liste.

:::note[Vorlagen zielen auf die erste SATA-Platte]
Alle fünf Vorlagen legen ihr Layout auf `/dev/sda` an. Auf Rechnern mit NVMe- oder VirtIO-Platten passt das nicht: Die Gruppe entsteht zwar, ihre Gerätenamen gehen aber an der Hardware vorbei und müssen anschließend in der `start.conf` korrigiert werden. Das Gerät steht im Hinweis unter der Vorlagenauswahl, bevor Sie schreiben.
:::

:::warning[Vorhandene Gruppe wird nicht überschrieben]
Vor dem Anlegen prüft die Plattform auf dem Server, ob für den Namen bereits eine `start.conf` existiert – auch dann, wenn die Liste sie nicht anzeigt. In diesem Fall bricht der Vorgang mit einem Hinweis ab, statt die vorhandene Gruppe zu ersetzen.
:::

Beim **Duplizieren** übernimmt die Kopie Partitionen, Betriebssysteme und Einstellungen der Vorlage; der Gruppenname in der Datei wird dabei auf den neuen Namen umgeschrieben.

:::warning[Wer Gruppen schreiben darf, entscheidet die Linuxmuster-API]
Anlegen, Speichern, Duplizieren und Löschen einer Gruppe reicht die Plattform an die Linuxmuster-API weiter; welche Rolle die Aktion ausführen darf, prüft die API. Bis einschließlich **Version 7.4.12** sind diese Schreibrouten globalen Administratoren vorbehalten: Als Schuladministrator erreichen Sie die Aktion in der Oberfläche, der Server weist sie aber ab – mit der Meldung *„start.conf konnte nicht gespeichert werden"* beziehungsweise *„start.conf konnte nicht gelöscht werden"*. Ab **Version 7.4.13** stehen die LINBO-Routen auch Schuladministratoren offen; der Bereich **LINBO** erscheint dann für sie im Menü. Lesen und Vorschau sind von der Einschränkung nicht betroffen.
:::

:::note[Die Dateien unter `/srv/linbo` kennen keine Schule]
`start.conf`-Dateien, Images und Beispielkonfigurationen liegen serverweit, nicht je Schule. Ein Schuladministrator ändert hier also, was alle Schulen des Servers verwenden. Einzig `/server-info` bleibt globalen Administratoren vorbehalten: Die Serveradresse für eine neue Gruppe entnimmt die Plattform dann einer vorhandenen Gruppe.
:::

:::warning[Was beim Löschen verschwindet]
Gelöscht werden die `start.conf` **und** die GRUB-Konfiguration der Gruppe. Rechner dieser Gruppe starten danach ohne Konfiguration, bis ihnen eine andere Gruppe zugewiesen wird. Der Server legt vor dem Löschen eine Sicherung der `start.conf` an.
:::

#### Sicherungen der start.conf

Ab **Version 7.4.13** der Linuxmuster-API listet **Sicherungen** je Eintrag Datum, Zeitstempel und Größe, mit **Wiederherstellen** und einer Schaltfläche zum Löschen. Der Server legt jede Sicherung selbst an, sobald eine `start.conf` geschrieben wird.

:::note[Wiederherstellen ist umkehrbar]
Vor dem Zurückspielen sichert der Server die aktuelle `start.conf`, sodass sich der Schritt zurücknehmen lässt. Der Server behält die zehn letzten Fassungen und verwirft ältere.
:::

Nach dem **Wiederherstellen** wendet die Plattform die Gruppe an wie nach dem Speichern im [Gruppen-Editor](#der-gruppen-editor): Sie startet den Geräteimport einer Schule, die die Gruppe per PXE startet, damit das Boot-Menü der zurückgespielten Fassung folgt. Die Meldung nennt diese Schule, sagt, dass noch kein Computer die Gruppe startet, oder dass das Anwenden fehlgeschlagen ist – dann wenden Sie die Geräteliste in der Geräteverwaltung an. Zurückgespielt ist die Datei in jedem Fall.

#### VDI-Konfiguration

Ab **Version 7.4.13** der Linuxmuster-API öffnet **VDI** die Datei `start.conf.<Gruppe>.vdi` der Gruppe. Der Dialog zeigt die Felder, die die Schulkonsole schreibt – darunter **VDI aktiviert**, Name, Hostname, Betriebssystemtyp, IP- und MAC-Adresse, Netzwerkbrücke, Kerne, Arbeitsspeicher und die VM-IDs. **Speichern** ersetzt die Datei als Ganzes, **VDI abschalten** löscht sie; die `start.conf` der Gruppe bleibt in beiden Fällen unberührt.

:::note[Felder außerhalb der Liste bleiben erhalten]
Die Datei gehört edulution-linbo-vdi. Felder, die der Dialog nicht anzeigt, schreibt die Plattform unverändert zurück, statt sie zu verwerfen.
:::

Lässt sich die Datei nicht lesen, zeigt der Dialog statt der Felder einen Hinweis und bietet **Speichern** nicht an, denn ein leeres Formular würde die gespeicherte Konfiguration ersetzen. Schließen Sie den Dialog und öffnen Sie ihn erneut. Ebenso bleibt **Speichern** gesperrt, solange ein Zahlenfeld oder die VM-IDs etwas anderes als ganze Zahlen enthalten; mehrere VM-IDs trennen Sie durch Kommas.

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

Ein Feld der Registerkarte **Allgemein**, das Sie leeren, verschwindet beim Speichern aus der `start.conf`, statt als leerer Eintrag darin stehen zu bleiben. Für LINBO ist das der Unterschied zwischen *nicht gesetzt* und *auf leer gesetzt*: Der Wert fällt damit auf die Vorgabe zurück. Das betrifft unter anderem **Schule**, **Abmeldung nach**, **Kernel-Optionen** und **Hintergrundfarbe**.

:::warning[Beim Start formatieren]
**Beim Start partitionieren** legt das Plattenlayout bei jedem Start neu an, **Beim Start formatieren** formatiert dabei alle Partitionen. Lokal auf den Rechnern gespeicherte Daten gehen dann bei jedem Start verloren.
:::

**Partitionen** zeigt je Platte eine Karte. Über die Preset-Schaltflächen fügen Sie eine Partition mit sinnvoller Vorgabegröße hinzu: *EFI*, *MSR*, *Windows*, *Linux*, *Swap*, *Daten*, *Erweitert* und *Cache*. Der **Plattentyp** – SATA, VirtIO, Xen, IDE, MMC, NVMe oder allgemein – bestimmt die Gerätenamen; ein Wechsel nummeriert die Partitionen der Platte samt aller Verweise darauf um. Ein Klick auf eine Partition öffnet einen Dialog mit den Unterregisterkarten **Partition** und **Betriebssystem**.

Im Feld **Größe** gilt: eine nackte Zahl sind Kibibytes, ein Suffix `M`, `G` oder `T` legt die Einheit fest, und ein leeres Feld bedeutet *Rest der Platte* (in der Plattenkarte als `∞` dargestellt). Unter dem Feld steht laufend, welche Größe daraus wird.

Unter den Platten listet der Abschnitt **Betriebssysteme** die Einträge der Gruppe mit Partition, Basisimage, Kernel, Initrd und den Schaltern für Autostart, Sync und Start. **Bearbeiten** öffnet die Partition, an der ein Eintrag hängt. Zeigt das Root-Gerät eines Eintrags auf keine Partition des Layouts, wird der Eintrag als verwaist gekennzeichnet und lässt sich hier löschen.

Bearbeitet wird ein Betriebssystem auf der Unterregisterkarte **Betriebssystem** des Partitionsdialogs. Dort stehen **Name**, **Version**, **Standardaktion**, **Symbol**, **Beschreibung**, **Basisimage**, die **Startknöpfe im LINBO-Menü** – *Start*, *Sync & Start*, *Neu & Start* und *Autostart* – sowie das **Autostart-Timeout (Sekunden)**. Hinter **Erweitert** liegen **Kernel**, **Zusätzliche Kernel-Parameter**, **Opsi-Setup erzwingen**, **Opsi-Status wiederherstellen** und **Im Startmenü ausblenden**.

Zwei dieser Felder richten sich nach dem Dateisystem der Partition: **Initrd** erscheint nur, wenn die Partition kein NTFS trägt – ein Windows-System startet ohne Initrd –, und **Kernel** ist auf NTFS eine Auswahl aus `auto`, `grub.exe` und `reboot` statt eines freien Textfelds.

Trägt eine Partition noch kein Betriebssystem, weist die Unterregisterkarte darauf hin und bietet **Betriebssystem hinzufügen** an. Die Schaltfläche erscheint nur auf Partitionen, von denen LINBO überhaupt starten kann – also nicht auf *EFI*, *MSR*, *Erweitert* und *Swap* und nicht auf der Cache-Partition. Eine Partition aus dem Preset *Daten* kommt dagegen infrage; sie unterscheidet sich von *Windows* nur im Label. Dasselbe gilt für Partitionen aus einer hochgeladenen `start.conf`, die dort keinen Betriebssystem-Abschnitt hatten.

:::warning[Betriebssystem auf einer nicht startfähigen Partition]
Ändern Sie an einer Partition, an der ein Betriebssystem hängt, das Dateisystem oder den Partitionstyp auf einen Wert, von dem LINBO nicht startet – oder machen Sie sie zur Cache-Partition –, bleibt der Eintrag erhalten und weiter bearbeitbar. Die Unterregisterkarte **Betriebssystem** weist dann darauf hin, dass LINBO dieses System hier nicht mehr starten kann.

Gelöscht wird der Eintrag nicht – setzen Sie das Dateisystem oder den Partitionstyp zurück, damit das System wieder startet. Im Abschnitt **Betriebssysteme** lässt sich der Eintrag in diesem Zustand nicht entfernen: Die Schaltfläche zum Löschen erscheint dort nur bei verwaisten Einträgen, deren Partition es gar nicht mehr gibt.
:::

Solange ungespeicherte Änderungen vorliegen, fragt der Editor beim Schließen nach, ob Sie sie verwerfen wollen.

Nach dem **Speichern** wendet die Plattform die Gruppe sofort an: Sie startet den Geräteimport einer Schule, in der ein Gerät mit gesetztem PXE-Flag dieser Gruppe zugeordnet ist, damit die Startkonfiguration der Gruppe neu erzeugt wird. Gesucht wird zuerst in der gewählten Schule, danach in den übrigen Schulen des Servers; importiert wird nur die erste Schule, die die Gruppe verwendet. Die Meldung nennt das Ergebnis:

| Meldung | Bedeutung |
|---------|-----------|
| *„… wurde gespeichert und über den Geräteimport der Schule „…" angewendet."* | Die Gruppe ist angewendet; die Meldung nennt die Schule, deren Import gelaufen ist. |
| *„… wurde gespeichert. Noch startet kein Computer diese Gruppe, daher musste nichts angewendet werden."* | Keinem Gerät mit PXE-Flag ist die Gruppe zugeordnet. |
| *„… wurde gespeichert, aber nicht angewendet. Bitte wenden Sie die Geräteliste in der Geräteverwaltung an."* | Der Import ist fehlgeschlagen. Die `start.conf` liegt auf dem Server; wenden Sie die Geräteliste der betroffenen Schule in der [Geräteverwaltung](#geräteverwaltung) mit **Anwenden** an. |

:::warning[Der Import übernimmt die gespeicherte Geräteliste]
Der Geräteimport ist derselbe, den **Anwenden** in der Geräteverwaltung auslöst. Er übernimmt die auf dem Server gespeicherte Geräteliste der Schule vollständig – auch Änderungen, die dort gespeichert, aber noch nicht angewendet wurden. Beim Löschen einer Gruppe läuft kein Geräteimport.
:::

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

Auch hier bietet die Leiste am unteren Rand **Neu laden** an, solange kein Image ausgewählt ist. Die Schaltfläche lädt die Images erneut vom Server und – sofern die Linuxmuster-API die Gruppenliste unterstützt – auch die `start.conf`-Dateien der Gruppen. Wie bei den Gruppen bleiben ausgewählte Images ausgewählt, wenn die Suche oder der Filter der Tabelle sie ausblendet; Zahl und Aktionen der Leiste gelten nur für die sichtbaren.

:::note[Zwei Namen, ein Image]
Ein Image heißt nach seinem Verzeichnis auf dem Server (`debian13`); die Bilddatei darin trägt zusätzlich die Endung (`debian13.qcow2`). Angezeigt und in allen Aktionen verwendet wird der Name des Images, nicht der der Datei.
:::

Sidecars sind die Beipack-Dateien eines Images: Beschreibung (`.desc`), Info (`.info`), VDI-Konfiguration (`.vdi`), Torrent (`.torrent`), Maschinenkonto (`.macct`), Prüfsumme (`.md5`), Hashsumme (`.hash`), Registry (`.reg`), Pre-Start-Skript (`.prestart`) und Post-Sync-Skript (`.postsync`). In der Spalte **Sidecars** steht je vorhandener Datei ein Buchstabenkürzel; welcher Dateityp dahintersteht, erscheint, sobald Sie mit dem Mauszeiger darauf zeigen. Der Detaildialog zeigt zusätzlich Dateiname, Image-Ordner, Pfad, Größe, MD5-Summe und – sofern ein `.info`-Sidecar vorliegt – Erstellungszeitpunkt, Image- und Partitionsgröße sowie die Beschreibung.

Über die Schaltfläche zum Hochladen fügen Sie ein Image hinzu. Zulässig sind Image-Dateien (`.qcow2`, `.qdiff`, `.cloop`, `.rsync`) und alle oben genannten Beipack-Dateien; andere Dateitypen weist der Dialog ab. Während eines laufenden Downloads sind weitere Downloads gesperrt.

Im Dialog geben Sie Image-Name und Dateiname an; während der Übertragung sind beide Felder gesperrt und ein Fortschrittsbalken zeigt den Stand in Prozent. **Abbrechen** bricht die laufende Übertragung ab und verwirft zugleich die Daten, die der Server bereits entgegengenommen hat – es bleibt also kein angefangenes Image auf dem Server zurück.

Der Server nimmt ein Image in Teilstücken entgegen. Bricht die Übertragung ab, weil etwa die Verbindung zum Schulserver wegfällt, setzt ein erneuter Upload derselben Datei dort an, wo er stehengeblieben ist; bei einem mehrere Gigabyte großen Image erspart das den bereits übertragenen Teil.

:::note[Fortgesetzt wird nur dieselbe Datei]
Fortgesetzt wird der Upload ausschließlich dann, wenn Sie unter demselben Image- und Dateinamen erneut eine Datei derselben Größe hochladen. Laden Sie unter einem bereits angefangenen Namen eine andere Datei hoch – etwa ein neu erstelltes Image –, beginnt die Übertragung von vorn und überschreibt den angefangenen Stand. Nach einem Neustart der edulution-Instanz beginnt jeder Upload ebenfalls von vorn.
:::

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

Ein **Virtueller Desktop** (VDI) je Gruppe lässt sich erst ab **Version 7.4.13** der Linuxmuster-API bearbeiten; ältere Versionen halten die Konfigurationsdatei nicht bereit. Das Datenblatt zeigt unabhängig davon, ob VDI in der `start.conf` aktiviert ist.

## Einrichtung (für Administratoren)

- Die **Plattform** stellen Sie unter [Einstellungen → Globale Einstellungen → Allgemein](../edulution-plattform/konfiguration/einstellungen.md#allgemein) auf **Linuxmuster**.
- Welche Bereiche dieser App sichtbar sind und wie sie beschriftet werden, hängt zusätzlich vom [Organisationstyp](../edulution-plattform/konfiguration/einstellungen.md#organisationstyp) ab.
- Die Verbindung zum Schulserver richten Sie nach der Anleitung [Linuxmuster verbinden](./installation.md) ein.

:::warning[Anmeldelimit der Linuxmuster-API bei vielen gleichzeitigen Anmeldungen]
Die Plattform meldet jeden Benutzer von ihrer eigenen Adresse aus an der Linuxmuster-API an. Deren Anmelderoute ist auf fünf Anfragen je 60 Sekunden und Adresse begrenzt: Melden sich innerhalb einer Minute mehr Benutzer an – etwa zu Stundenbeginn –, weist die API die weiteren mit *„Die LMN-API hat zu viele Anmeldungen in kurzer Zeit abgewiesen"* ab. Ab **Version 7.4.13** lässt sich das Limit im Abschnitt `rate_limit` der Datei `/etc/linuxmuster/api/config.yml` einstellen; `requests: 0` schaltet es ab, und eine Whitelist nimmt die Adresse der Plattform aus. Die API liest die Datei beim Start, ein Neustart des Dienstes ist also nötig.
:::

## Siehe auch

- [Einstellungen](../edulution-plattform/konfiguration/einstellungen.md) – weitere globale Konfigurationsoptionen
- [Satelliten](../edulution-satellite/verwaltung.md) – Standorte anbinden und Dienste betreiben
- [Administration](../edulution-plattform/konfiguration/administration.md) – allgemeine Admin-Aufgaben
