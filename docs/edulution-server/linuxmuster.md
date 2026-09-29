---
sidebar_custom_props:
  audience: admin
---

# Linuxmuster / LINBO

Die App **Schulserver** verbindet die edulution Plattform mit Ihrem Linuxmuster-Server und bündelt die Verwaltung von Benutzerkonten, Geräten und Elternzuweisungen. Der Bereich **LINBO** innerhalb dieser App zeigt zusätzlich die Hardwaregruppen und Images Ihrer LINBO-Installation.

Alle Daten werden direkt über die Linuxmuster-API (`linuxmuster-api7`) geladen – die edulution Plattform hält dafür keinen eigenen Zwischenspeicher.

:::warning[Voraussetzungen]
Der Bereich steht nur zur Verfügung, wenn die **Plattform** in den globalen Einstellungen auf **Linuxmuster** gesetzt ist und die Linuxmuster-API mindestens in **Version 7.3.26** vorliegt. Bei einer älteren API-Version wird die App nicht angezeigt, sondern durch den Hinweis *„Die Linuxmuster API-Version ist zu alt“* ersetzt.
:::

## Aufbau der App

Die Unterseiten wählen Sie über die Seitenleiste der App:

| Eintrag | Inhalt |
|---------|--------|
| **Übersicht** | Kacheln als Einstieg in alle Bereiche der App |
| **Benutzerverwaltung** | Benutzerkonten anzeigen, importieren und Passwörter verwalten |
| **Geräteverwaltung** | Hostliste der LINBO-Installation; Geräteliste pflegen und in Linuxmuster importieren |
| **Elternzuweisung** | Eltern ihren Kindern zuordnen |
| **LINBO** | Hardwaregruppen und Images der LINBO-Installation |
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

Die **Übersicht** ist nach denselben Bereichen gegliedert wie die Seitenleiste. Unter **Benutzerverwaltung** führt je eine Kachel direkt zu den Benutzertypen **Schüler**, **Lehrer**, **Extra-Schüler**, **Eltern**, **Mitarbeiter**, **Schuladmins** und **Globaladmins**; in Unternehmensumgebungen bleiben davon nur **Mitarbeiter** und **Globaladmins** sichtbar, und einem Schuladmin fehlt die Kachel **Globaladmins**. Dazu kommen die Bereiche **Geräteverwaltung**, **Elternzuweisung**, **LINBO** und **System** mit je einer Kachel. Die Kachel **LINBO** führt wie der gleichnamige Eintrag in der Seitenleiste in den Bereich **LINBO**.

In Umgebungen mit mehreren Schulen enthalten Benutzerverwaltung, Geräteverwaltung, Verwaltungslisten und Elternzuweisung für **Globaladmins** eine **Schulauswahl**: Sie zeigen die Daten der dort gewählten Schule, ein Wechsel lädt die Listen neu, und zur Wahl steht jede Schule des Servers. Ein Schuladmin sieht dort keine Schulauswahl und arbeitet immer in seiner eigenen Schule.

## Benutzerverwaltung

Die Benutzerverwaltung ist je Benutzertyp (Schüler, Lehrer, Extra-Schüler, Eltern, Mitarbeiter) in zwei Registerkarten geteilt:

- **Tabelle** – die bestehenden Konten mit Anmeldename, Name, Klasse, Rolle, Quota und weiteren Eigenschaften. Über **CSV exportieren** laden Sie die angezeigten Konten herunter, über **Benutzer hinzufügen** legen Sie ein einzelnes Konto an.
- **Liste** – der Import über eine CSV-Datei. Die Liste entspricht der Datei `<Schule>/<Typ>.csv` auf dem Server.

Für Benutzertypen ohne Importunterstützung erscheint der Hinweis *„Für diesen Benutzertyp ist kein Import verfügbar.“*

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

Die Geräteverwaltung hat zwei Registerkarten: **Geräte** zeigt die [Hostliste der LINBO-Installation](#hosts) und erscheint nur für Benutzer, die auch den Bereich **LINBO** erreichen; **Import** pflegt die Geräteliste (`devices.csv`) von Linuxmuster. Sie bearbeiten die Einträge direkt in der Tabelle, fügen über **Gerät hinzufügen** eine Zeile hinzu oder importieren eine vorhandene CSV-Datei per Drag & Drop.

Jedes Gerät benötigt neben Rechnername, MAC- und IP-Adresse eine **Rolle** und ein **PXE-Flag**:

| PXE-Flag | Bedeutung |
|----------|-----------|
| **Kein PXE** | Das Gerät bootet nicht über das Netzwerk. |
| **Linbo-PXE** | Das Gerät bootet LINBO. |
| **Linbo-PXE + OPSI-Management** | Das Gerät bootet LINBO und wird zusätzlich über OPSI verwaltet. |
| **OPSI-PXE** | Das Gerät bootet ausschließlich OPSI. |

Als Rolle stehen unter anderem *Schüler-PC im Klassenzimmer*, *Lehrer-PC im Klassenzimmer*, *Fachbereich-Lehrer-PC*, *Lehrer-PC*, *Server*, *Domaincontroller*, *Drucker*, *Router*, *Switch*, *Thinclient*, *BYOD*, *Mobiles Gerät*, *VOIP*, *WLan* und *IP-Only* zur Verfügung.

:::warning[Anwenden importiert sofort]
**Anwenden** speichert die Geräteliste **und importiert sie unmittelbar** in Linuxmuster. Der Dialog **Geräteliste anwenden** fragt dies vorher ab. Im Unterschied zur Benutzerverwaltung gibt es hier keinen vorgeschalteten Prüflauf.
:::

:::note[Wer darf schreiben?]
**Speichern** und **Anwenden** stehen nur **Globaladmins** und **Schuladmins** zur Verfügung. Andere Rollen können die Geräteliste einsehen, Zeilen hinzufügen und eine CSV-Datei einlesen, die Liste aber weder speichern noch importieren.
:::

Vor dem Speichern werden die Einträge validiert. Doppelte Rechnernamen, MAC- oder IP-Adressen werden gemeldet und müssen zuerst bereinigt werden.

Rechnername, Raum und Hardwaregruppe sind zugleich die Ziele, auf die ein `linbo-remote`-Lauf gerichtet wird, und müssen zusätzlich den Import nach Linuxmuster überstehen. Alle drei beginnen mit einem Buchstaben oder einer Ziffer:

| Spalte | Erlaubt nach dem ersten Zeichen | Länge |
|--------|----------------------------------|-------|
| **Rechnername** | Buchstaben, Ziffern, Bindestrich; nicht am Ende | höchstens 15 Zeichen |
| **Raum** | Buchstaben, Ziffern, Bindestrich | höchstens 63 Zeichen |
| **Hardwaregruppe** | Buchstaben, Ziffern, Bindestrich, Unterstrich | höchstens 63 Zeichen |

Ein Pluszeichen ist in keiner der drei Spalten zulässig. Abweichende Zellen markiert die Tabelle, und **Speichern** und **Anwenden** bleiben gesperrt, bis sie bereinigt sind; leer bleiben darf keine der drei Spalten. Die Prüfung greift auch beim Einlesen einer CSV-Datei und noch einmal auf dem Server.

:::note[Ältere Namen dürfen bleiben, bis Sie die Zeile ändern]
Die Namensregeln gelten nur für neue und geänderte Zeilen. Eine Zeile, die unverändert der gespeicherten Geräteliste entspricht, lässt sich weiterhin speichern und anwenden, auch wenn einer ihrer Namen gegen die Regeln verstößt. Die Tabelle markiert eine solche Zelle gelb statt als Fehler; beim Überfahren erscheint *„Dieser Name entspricht nicht den aktuellen Namensregeln. Die Zeile kann unverändert bleiben, muss aber angepasst werden, sobald sie bearbeitet wird.“*

Sobald Sie in dieser Zeile irgendeinen Wert ändern, muss sie den Regeln entsprechen. Das gilt auch nach dem Einlesen einer CSV-Datei: Eine eingelesene Zeile, die mit einer gespeicherten Zeile vollständig übereinstimmt, gilt als unverändert. Welche Zeilen sich geändert haben, ermittelt die Plattform anhand der gespeicherten Geräteliste; kann sie diese nicht lesen – etwa weil der Linuxmuster-Server nicht antwortet –, weist sie das Speichern mit *„Die gespeicherte Geräteliste konnte nicht gelesen werden, um die Änderung zu prüfen. Bitte erneut versuchen.“* ab, statt jede Zeile den Regeln zu unterwerfen. Doppelte Einträge sowie ungültige MAC- und IP-Adressen werden dagegen immer abgewiesen.

Eine Hardwaregruppe mit älterem Namen ändern Sie nicht hier, sondern als Globaladmin unter **LINBO** mit [**Gruppe umbenennen**](#eine-gruppe-umbenennen): Die Aktion stellt alle Geräte der Gruppe mit um und wendet die Änderung an, statt die Geräte von ihrer `start.conf` zu trennen.
:::

:::warning[Ein unzulässiger Name bricht den Import der ganzen Schule ab]
`sophomorix-device` prüft Raum und Hardwaregruppe beim Import ein weiteres Mal und bricht bei einem unzulässigen Zeichen den Import **der gesamten Schule** ab – nicht nur die betroffene Zeile. Die Linuxmuster-API meldet den Vorgang dabei trotzdem als erfolgreich. Deshalb weist die Geräteverwaltung solche Namen bereits in der Tabelle ab, statt sie an den Import weiterzureichen.
:::

:::tip[Ausführliche Anleitung]
Wie Sie Geräte entfernen, was **Speichern** und **Anwenden** dabei jeweils bewirken, was bei einem fehlgeschlagenen Vorgang mit Ihren Änderungen geschieht, was passiert, wenn die Geräteliste inzwischen geändert wurde, wie der CSV-Dialog die Tabelle ersetzt und was mit Kommentarzeilen geschieht, beschreibt die [Geräteverwaltung](../edulution-plattform/apps/native-apps/geraeteverwaltung.md).
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

Der Bereich **LINBO** ist in zwei Unterseiten gegliedert: **Gruppen** und **Images**. Beim Öffnen landen Sie auf **Gruppen**; ist die Linuxmuster-API älter als **Version 7.4.11**, entfällt diese Unterseite und Sie landen auf **Images**; die übrigen Bereiche der App arbeiten weiter. Die Hostliste liegt in der **Geräteverwaltung** auf der Registerkarte **Geräte**; beschrieben ist sie hier unter [Hosts](#hosts), weil ihre Aktionen LINBO-Läufe auslösen.

:::note[Ältere Adressen]
`…/linbo/configs` und `…/linbo/hosts` aus früheren Versionen leiten auf die Gruppen beziehungsweise auf die Registerkarte **Geräte** der Geräteverwaltung weiter. Lesezeichen funktionieren also weiterhin.
:::

### Hosts

Über die Auswahl **Rolle** in der Suchleiste schränken Sie die Liste auf einen oder mehrere Gerätetypen ein; ohne Auswahl erscheinen alle Geräte.

| Auswahl | Enthaltene Rollen |
|---------|-------------------|
| **Computer** | Schüler-PC im Klassenzimmer, Lehrer-PC im Klassenzimmer, Fachbereich-Lehrer-PC, Lehrer-PC, Thinclient |
| **Server** | Server, Domaincontroller |
| **Drucker** | Drucker |
| **iPads** | BYOD, Mobiles Gerät |
| **Netzwerk** | Router, Switch, WLan, VOIP, IP-Only |
| **Sonstige** | Geräte ohne Rolle und Geräte mit einer Rolle, die keiner dieser Gruppen angehört – etwa einer Rolle, die auf Ihrem Server zusätzlich eingerichtet wurde |

Zusätzlich lässt sich über das Filtersymbol in der Suchleiste nach einer oder mehreren **Gruppen** einschränken.

Über die Ansichtswahl wählen Sie zwischen drei Ansichten derselben Liste. Ihre Wahl bleibt erhalten und gilt auch nach einem Neuladen:

| Ansicht | Zeigt |
|---------|-------|
| **Kacheln** (Vorgabe) | je Host eine kleine Karte mit Hostname und **Status**, darunter IP und MAC-Adresse, dazu Gruppe und Raum als Etiketten. Das PXE-Kennzeichen erscheint nur bei Rechnern ohne LINBO-Netzwerkstart, also bei denen, die LINBO-Kommandos überspringen |
| **Datenblatt** | je Host eine Karte mit Hostname und **Status** und den Zeilen Rolle, IP, MAC-Adresse, Gruppe, Raum, PXE und Kommentar; Zeilen ohne Wert entfallen |
| **Tabelle** | die unten beschriebenen Spalten |

Suche, Filter und Auswahl bleiben erhalten, wenn Sie die Ansicht wechseln. In den beiden Kartenansichten wählen Sie einen Host ausschließlich über das Auswahlkästchen seiner Karte aus; **Alle auswählen** wählt alle Hosts, die Suche und Filter zeigen.

Ein Klick auf eine Karte – in der Tabelle auf eine Zeile – öffnet die **Details** des Hosts. Der Dialog zeigt seinen **Status** und alle Angaben, die die Geräteliste zu diesem Rechner führt: neben denen des Datenblatts auch Schule, PXE aktiv, DHCP-Optionen, Office-Schlüssel und Windows-Schlüssel. Hat die Plattform nach einer Aktion für genau diesen Host erhoben, wann seine Images zuletzt synchronisiert wurden (siehe unten), listet der Dialog das zusätzlich unter **Images**. Die Details lassen sich nur ansehen; geändert werden die Angaben in der [Geräteverwaltung](#geräteverwaltung).

In der Ansicht **Tabelle** zeigt die Liste Hostname, MAC-Adresse, IP, Gruppe, Raum, Rolle sowie die Spalten **Status** und **Geplant**. **Geplant** zeigt „–“; beim Überfahren erscheint *„Geplante Aktionen werden vom Edulution-Satellite verwaltet und sind in dieser Version noch nicht angebunden.“* Die Spalte **Rolle** zeigt dieselbe Bezeichnung wie der Import; eine Rolle, die Ihre Installation selbst definiert hat, erscheint unter ihrem technischen Namen, ein Gerät ohne Rolle mit „—“. Bricht das Laden mittendrin ab, zeigt sie die bis dahin geladenen Hosts, und darüber bleibt bis zum nächsten Laden der Hinweis *„Die Hosts konnten nicht vollständig geladen werden.“* stehen.

Sechs weitere Spalten sind ausgeblendet und lassen sich über die Spaltenauswahl einschalten: **PXE** mit der Bezeichnung des PXE-Kennzeichens, **PXE aktiv**, **Kommentar**, **DHCP-Optionen**, **Office-Schlüssel** und **Windows-Schlüssel**. Sie geben wieder, was die Geräteliste zu einem Rechner führt; geändert werden diese Angaben in der [Geräteverwaltung](#geräteverwaltung), nicht hier. Die Suche findet einen Rechner auch über seinen **Kommentar** – die beiden Schlüssel bleiben aus der Suche heraus.

:::note[Hostliste und Schulbindung]
Anders als die Gruppen sind Hosts schulgebunden. Ein Schuladmin sieht die Rechner seiner eigenen Schule, und jede Aktion – **Neu starten**, **Herunterfahren**, ein Kommando aus dem Aktionsdialog oder ein **Hostscan** – wirkt auf diese Schule. Nennt eine Anfrage eine andere Schule, antwortet die Plattform mit *„Du hast keine Berechtigung, auf diese Ressource zuzugreifen.“*, ohne die Anfrage an den Server weiterzugeben. Ein Globaladmin wählt über die **Schulauswahl** jede Schule des Servers.

**Aufwecken** steht **Globaladmins** und **Schuladmins** zur Verfügung. Für einen Schuladmin weckt die Linuxmuster-API nur die Rechner seiner eigenen Schule und übergeht alle übrigen. Besteht die Auswahl ausschließlich aus Rechnern anderer Schulen, wird sie mit *„Keiner der gewählten Rechner gehört zu Ihrer Schule“* abgewiesen.
:::

**Status** nennt je Host **Online** oder **Offline** – in den Kartenansichten und im Detaildialog neben dem Hostnamen; die Spaltenüberschrift sagt beim Überfahren, wann der Zustand zuletzt erhoben wurde. Solange für einen Host noch keine Erhebung vorliegt, bleibt das Feld leer.

Eine Aktion zum Neuladen gibt es nicht: Alle 30 Sekunden und beim Zurückwechseln in den Browser-Tab holt die Seite die Hostliste erneut vom Server und erhebt danach den Status; ist der Tab nicht sichtbar, pausiert die Abfrage. So erscheinen auch Hosts, die in der Geräteverwaltung hinzugekommen sind. Ein geöffneter Detaildialog übernimmt den neuen Stand und schließt sich, wenn der Host nicht mehr in der Liste steht.

Nach einer Aktion – etwa **Aufwecken**, **Neu starten** oder **Herunterfahren** – fragt die Plattform den Status der erreichten Hosts mehrfach nach. Hat die Aktion genau einen Host getroffen, nennt **Status** ab **Version 7.4.12** der Linuxmuster-API zusätzlich, welches System der Rechner gerade ausführt: *LINBO*, *Linux*, *Windows* oder *Unbekanntes Betriebssystem*. Beim Überfahren listet sie je Image, wann es auf dem Rechner zuletzt synchronisiert wurde oder dass es dort noch nie synchronisiert wurde. Mit einer älteren API-Version oder nach einer Aktion für mehrere Hosts zeigt die Spalte nur **Online** oder **Offline**.

#### Hosts auswählen

Aktionen für einzelne Hosts laufen immer über die Auswahl – auch einen einzigen Rechner wählen Sie dafür aus.

Die Aktionsleiste im Seitenkopf bietet unabhängig von der Auswahl **Sitzungen** und **Raum-Aktion** an, sofern die Linuxmuster-API Sitzungen beziehungsweise Kommandoketten unterstützt – **Raum-Aktion** nur, wenn die Geräteliste Räume führt. Sobald mindestens ein Host ausgewählt ist, nennt sie die Anzahl und ergänzt **Aufwecken**, **Neu starten**, **Herunterfahren** und **Aktion schicken**. Ein Host, der nicht erreichbar ist, wird übersprungen und in der Rückmeldung benannt. **Neu starten**, **Herunterfahren** und **Aktion schicken** überspringen außerdem Rechner, deren Name kein gültiges Ziel eines `linbo-remote`-Laufs ist, etwa einen älteren Namen mit Unterstrich. Der [Kommando-Dialog](#der-kommando-dialog) nennt sie schon vor dem Abschicken (*„Der Rechner … wird übersprungen, weil sein Name kein gültiges Ziel eines linbo-remote-Laufs ist.“*) und sperrt das Abschicken mit *„Keiner der ausgewählten Rechner hat einen Namen, der Ziel eines linbo-remote-Laufs sein kann.“*, wenn keiner ein gültiges Ziel ist. Bei **Neu starten** und **Herunterfahren** nennt eine Warnung sie beim Auslösen (*„Der Rechner … wurde übersprungen, weil sein Name kein gültiges Ziel eines linbo-remote-Laufs ist.“*); ist keiner der ausgewählten Rechner ein gültiges Ziel, läuft nichts. Übersprungene Rechner werden in jedem Fall abgewählt, die erreichten nach dem Lauf. **Aufwecken** erreicht auch diese Rechner, weil es sie über ihre MAC-Adresse anspricht.

:::warning[LINBO-Kommandos erreichen nur Rechner mit LINBO-Netzwerkstart]
`linbo-remote` spricht nur Rechner an, deren PXE-Flag in der [Geräteliste](#geräteverwaltung) **Linbo-PXE** oder **Linbo-PXE + OPSI-Management** lautet. Rechner mit **Kein PXE** oder **OPSI-PXE** überspringt deshalb jedes LINBO-Kommando – **Neu starten**, **Herunterfahren**, **Aktion schicken** sowie die Aktionen für eine Gruppe oder einen Raum. Der Kommando-Dialog nennt diese Rechner vor dem Abschicken (*„… weil für ihn in der Geräteliste kein LINBO-Netzwerkstart eingetragen ist.“*), bei **Neu starten** und **Herunterfahren** nennt sie eine Warnung beim Auslösen (*„Ohne LINBO-Netzwerkstart übersprungen: …“*). Bleibt in der Auswahl, der Gruppe oder dem Raum kein solcher Rechner übrig, lässt sich das Ziel nicht wählen beziehungsweise das Abschicken ist gesperrt.

**Aufwecken** ist davon nicht betroffen: Es weckt jeden ausgewählten Rechner, unabhängig von seinem PXE-Flag.
:::

:::note[Die Suche bestimmt mit, wen eine Sammelaktion trifft]
Eine Sammelaktion erreicht nur die Hosts, die gerade **sichtbar** sind. Schränken Sie die Suche ein, nachdem Sie ausgewählt haben, sinkt die Zahl in der Leiste entsprechend – ausgeblendete Hosts bleiben ausgewählt, werden aber nicht angesprochen. Leeren Sie die Suche wieder, sind sie erneut Teil der Auswahl.
:::

Nach einer Sammelaktion werden die Hosts abgewählt, für die der Server den Auftrag angenommen hat – auch dann, wenn er einzelne davon als offline übersprungen hat. Ausgewählt bleiben nur Rechner, die der Auftrag gar nicht erreicht hat, etwa weil bei einem großen Lauf ein Teil nicht zugestellt werden konnte. Die Auswahl schrumpft dann auf genau diese Rechner, sodass ein zweiter Versuch die bereits bedienten nicht noch einmal trifft.

#### Eine Aktion an einen Raum schicken

**Raum-Aktion** richtet eine Kommandokette an einen Raum, auch ohne dass ein Rechner ausgewählt ist. Sie wählen den Raum aus einer Liste; die Räume stammen aus der Geräteliste (`devices.csv`), nicht aus den Sitzplänen. Ein Raum, dessen Name kein gültiges Ziel eines `linbo-remote`-Laufs ist, steht in der Liste, lässt sich aber nicht wählen; der Grund steht am Eintrag. Der Dialog nennt, wie viele Rechner mit LINBO-Netzwerkstart die Geräteliste in diesem Raum führt und wie viele übrigen Rechner des Raums übersprungen werden; ein Raum ohne einen solchen Rechner lässt sich nicht wählen. Der Server löst den Raum beim Ausführen selbst auf. Aktionen mit Betriebssystem stehen nur für Räume bereit, deren Rechner alle derselben Hardwaregruppe angehören – bei einem gemischten Raum nennt der Dialog die beteiligten Gruppen. Auch die Bestätigung für einen zerstörenden Schritt nennt dann den Raum statt einer Anzahl von Rechnern. Sind Hosts ausgewählt, steht im Feld **Ziel** zunächst *Raum wählen*; die aktuelle Auswahl bleibt dort als Ziel wählbar.

#### Der Kommando-Dialog

**Aktion schicken** öffnet einen Dialog, der die ausgewählten Rechner namentlich nennt – oder, aus dem Bereich **Gruppen** heraus, die Hardwaregruppe, an die die Kette geht – und aus einzelnen Schritten eine **Kommandokette** zusammensetzt. Die Kette wird genau in der Reihenfolge ausgeführt, in der die Schritte stehen; über **Nach oben** und **Nach unten** ordnen Sie sie um, über **Entfernen** nehmen Sie einen Schritt wieder heraus. Unten zeigt die **Kommandokette** die Schreibweise, die Sie auch auf der Konsole verwenden würden.

Im Feld **Modus** wählen Sie, wie Sie die Kette zusammenstellen. **Einfach** führt je Betriebssystem der `start.conf` eine Zeile mit **Formatieren**, **Sync** und **Start** und dazu die Schalter **Partitionieren** und **Cache befüllen** (`rsync`); daraus entsteht die Kette in der Reihenfolge Partitionieren, Formatieren, Cache befüllen, Sync, Start. Führt die `start.conf` kein Betriebssystem, bleiben nur die beiden Schalter. **Erweitert** ist der Baukasten mit dem vollen Kommando-Katalog, den die folgenden Abschnitte beschreiben.

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

Außerdem legen Sie die Optionen fest: **Beim nächsten Start ausführen** stellt die Kette zurück, statt sie sofort zu schicken. **Wake-on-LAN** weckt die Rechner und wartet die eingetragenen Sekunden, bevor die Kette ausgeführt wird. Erst mit Wake-on-LAN lassen sich zwei weitere Werte setzen: der **Abstand zwischen den Weckpaketen**, mit dem die Rechner nacheinander statt gleichzeitig geweckt werden, und **Weckpaket zusätzlich an die Broadcast-Adresse senden**. **Oberfläche des Clients beim nächsten Start abschalten** und **Automatische Funktionen der start.conf beim nächsten Start übergehen** wirken erst beim nächsten Start – Letzteres überspringt das in der `start.conf` eingestellte automatische Partitionieren, Formatieren, **Cache befüllen** und Starten.

:::warning[Bestätigung für zerstörende Schritte]
**Neu**, **Formatieren** und **Partitionieren** löschen Daten auf den Zielrechnern. Der Dialog verlangt dafür eine zusätzliche Bestätigung, die die Anzahl der betroffenen Rechner nennt – und, wenn die Auswahl mehrere Hardwaregruppen umfasst, auch deren Anzahl; geht die Kette an eine ganze Hardwaregruppe, nennt die Bestätigung stattdessen die Gruppe. Die Bestätigung gilt für **genau diese Kette, genau diese Rechner und genau diese Optionen**: ändern Sie danach einen Schritt, ein Argument, die Auswahl oder eine der Optionen darüber, wird sie zurückgenommen und Sie bestätigen erneut. Das gilt besonders für **Beim nächsten Start ausführen** und **Wake-on-LAN** – das eine verlegt einen begleiteten Lauf auf den nächsten Start der Rechner, das andere weckt auch die, die bewusst ausgeschaltet waren.
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

#### Laufende Sitzungen

Ein Lauf wird auf dem Schulserver je Host in einer eigenen Sitzung ausgeführt und läuft dort weiter, auch wenn Sie den Dialog schließen oder die Seite verlassen. **Sitzungen** in der Aktionsleiste der Hostliste zeigt, was gerade läuft; steht etwas an, nennt die Schaltfläche die Anzahl.

Der Dialog listet je Sitzung den Hostnamen und seit wann sie läuft. **Protokoll** zeigt die Ausgabe des Laufs für diesen Host; über **Zurück zur Liste** kehren Sie zur Übersicht zurück. Der Schulserver schreibt die Ausgabe mit, solange der Lauf dauert, und behält sie danach – das Protokoll eines gerade beendeten Laufs bleibt also lesbar, auch wenn die Sitzung nicht mehr in der Liste steht.

Solange die Hostliste im Vordergrund liegt, wird die Liste etwa alle fünf Sekunden neu gelesen und ein geöffnetes Protokoll im Sekundentakt nachgeführt; nach dem Ende der Sitzung wird es ein letztes Mal gelesen. Ein Browser-Tab im Hintergrund fragt nichts ab und holt beim Zurückwechseln nach.

:::note[Die Liste folgt nicht der gewählten Schule]
Welche Sitzungen Sie sehen, entscheidet der Schulserver anhand Ihres Kontos: ein Schuladmin sieht die Hosts der eigenen Schule, ein Globaladmin jede laufende Sitzung. Der **Schulauswahl** folgt sie deshalb nicht – ein Wechsel blendet keine Sitzung aus, die weiterläuft.
:::

Antwortet der Server nicht, bleibt der zuletzt bekannte Stand stehen und der Dialog sagt es; der nächste Versuch läuft von selbst, ohne die Meldung bei jedem Durchgang zu wiederholen.

### Gruppen

Eine **Hardwaregruppe** ist eine `start.conf` auf dem Server: sie beschreibt das Plattenlayout und die Betriebssysteme aller Rechner, die ihr zugeordnet sind. Die Seite listet die Hardwaregruppen des Servers – also genau die Gruppen, für die eine `start.conf` vorliegt.

:::note[Gruppen sind nicht schulgebunden]
Die `start.conf`-Dateien liegen serverweit und nicht je Schule. Ein Wechsel der Schule über die **Schulauswahl** ändert die Gruppen deshalb nicht, nur die Zahl der zugeordneten Rechner.
:::

Über die Ansichtswahl wählen Sie zwischen vier Ansichten derselben Liste. Ihre Wahl bleibt erhalten und gilt auch nach einem Neuladen:

| Ansicht | Zeigt |
|---------|-------|
| **Plattenkarte** (Vorgabe) | jede Platte der Gruppe als eigener Balken ihrer Partitionen, nach Rolle eingefärbt, dazu die Betriebssysteme mit Autostart-Zeit |
| **Kacheln** | Systemtyp, Betriebssysteme, Zahl der zugeordneten Rechner, verwendete Images und die Partitionen als Balken je Platte, dazu Cache, Download-Typ und Aktualisierungszeitpunkt |
| **Datenblatt** | die gesetzten Schlüssel der Gruppe: Server, Cache, Download-Typ, Systemtyp, Abmeldung nach, Kernel-Optionen und Virtueller Desktop, dazu die verwendeten Images |
| **Tabelle** | ID, Betriebssysteme, verwendete Images, Partitionen, Zahl der Rechner und Aktualisierungszeitpunkt |

Die Werkzeugleiste der Liste enthält in allen vier Ansichten die Zahl der Gruppen, die die Suche übrig lässt, das Suchfeld, die Ansichtswahl und die Schulauswahl, in den drei Kartenansichten außerdem **Sortieren**. Die Suche findet eine Gruppe über ihren Namen und den Dateinamen ihrer `start.conf`. Suchbegriff und Auswahl bleiben erhalten, wenn Sie die Ansicht wechseln.

In den drei Kartenansichten wählen Sie eine Gruppe über das Auswahlkästchen ihrer Karte aus; **Alle auswählen** wählt alle Gruppen, die die Suche zeigt.

Eine Aktion zum Neuladen gibt es nicht. Solange die Seite geöffnet ist, holt sie die `start.conf`-Dateien, die GRUB-Konfigurationen, die Images und die Hosts für die Hostzahlen jede Minute und beim Zurückwechseln in den Browser-Tab erneut vom Server; ist der Tab nicht sichtbar, pausiert die Abfrage. Solange eine Gruppe im Editor geöffnet ist oder gespeichert wird, fragt sie nicht ab, damit ungespeicherte Änderungen erhalten bleiben.

:::note[Die Suche bestimmt mit, welche Gruppen eine Aktion trifft]
Ausgewählte Gruppen bleiben ausgewählt, wenn die Suche oder der Filter der Tabelle sie ausblendet. Die Zahl in der Leiste und jede Aktion beziehen sich aber nur auf die ausgewählten Gruppen, die gerade **sichtbar** sind. Leeren Sie die Suche wieder, sind die ausgeblendeten Gruppen erneut Teil der Aktion.
:::

#### Aktionen einer Gruppe

Die Aktionen bietet die Aktionsleiste an, sobald Gruppen ausgewählt sind – in jeder Ansicht gleich. Aktionen, die sich auf eine einzelne Gruppe beziehen, stehen nur bei genau einer ausgewählten Gruppe zur Wahl. Die Vorschau öffnen Sie zudem per Klick auf eine Karte oder eine Zeile der **Tabelle**.

| Aktion | Wirkung |
|--------|---------|
| **Bearbeiten** | öffnet den [Gruppen-Editor](#der-gruppen-editor) |
| **Vorschau** | zeigt die ausgewertete `start.conf`, ihre Rohdaten und die GRUB-Konfiguration |
| **Duplizieren** | legt eine Kopie unter neuem Namen an |
| **Gruppe umbenennen** | gibt der Gruppe einen neuen Namen und stellt ihre Geräte in allen Schulen mit um; nur für Globaladmins, siehe [Eine Gruppe umbenennen](#eine-gruppe-umbenennen) |
| **Sicherungen** | listet die Sicherungen der `start.conf` und spielt eine davon zurück |
| **VDI** | öffnet die VDI-Konfiguration der Gruppe |
| **Aktion schicken** | öffnet den [Kommando-Dialog](#der-kommando-dialog) für alle Rechner der Gruppe |
| **Löschen** | löscht die `start.conf` der Gruppe auf dem Server |

**Aktion schicken** richtet eine Kommandokette an die Hardwaregruppe als Ganzes: Der Server ermittelt selbst, welche Rechner der **ausgewählten Schule** dazugehören – Rechner derselben Gruppe in einer anderen Schule erreicht der Lauf nicht; wechseln Sie dafür die Schule in der **Schulauswahl**. Der Dialog nennt die Gruppe und dazu, wie viele ihrer Rechner mit LINBO-Netzwerkstart die ausgewählte Schule führt und wie viele übrigen übersprungen werden (siehe [Hosts auswählen](#hosts-auswählen)); führt sie keinen solchen Rechner, steht keine Aktion zur Wahl, und der Dialog sagt warum. Solange die Rechnerliste der Schule noch geladen wird – oder wenn das Laden fehlgeschlagen ist – ist die Anzahl noch nicht bekannt: Auch dann steht keine Aktion zur Wahl, der Dialog nennt dafür aber das Laden als Grund, statt es der Schule zuzuschreiben. Öffnen Sie den Dialog direkt nach dem Aufruf der Seite, kann das kurz der Fall sein; sobald die Liste steht, stehen die Aktionen zur Wahl. Die Betriebssysteme für **Sync**, **Neu** und **Start** stammen aus der `start.conf` der Gruppe. Die Aktion ist ausgegraut, solange ein anderer Auftrag noch läuft, und für eine Gruppe, deren Name die Regeln für `linbo-remote` nicht erfüllt – der Grund steht am Knopf. Nach dem Abschicken meldet die Plattform, ob die Kette die Gruppe erreicht hat; waren Rechner offline, nennt sie den Hinweis des Servers dazu. Ob der Lauf noch läuft und was er ausgibt, sehen Sie anschließend unter [Laufende Sitzungen](#laufende-sitzungen) in der Hostliste.

Solange keine Gruppe ausgewählt ist, bietet die Aktionsleiste ab **Version 7.4.13** der Linuxmuster-API auch **linbo.iso** an: Die Schaltfläche lädt das Startmedium, das der Server unter `/srv/linbo/linbo.iso` vorhält. Die Datei ist einige hundert Megabyte groß.

Eine neue Gruppe legen Sie in den drei Kartenansichten über die Karte **Gruppe anlegen** vor der ersten Gruppe an; in der **Tabelle** steht **Gruppe anlegen** stattdessen in der Aktionsleiste. Sie vergeben einen Namen nach denselben Regeln wie in der Spalte **Hardwaregruppe** der [Geräteverwaltung](#geräteverwaltung) und wählen eine **Vorlage**: *Minimal — nur Cache-Partition*, *Windows (UEFI)* (Vorgabe), *Linux (UEFI)*, *Windows und Linux (UEFI)* oder *Windows und Linux (BIOS)*. Der Hinweis unter der Auswahl nennt, wie viele Partitionen die Vorlage anlegt und auf welchem Gerät sie entstehen. Einen Namen, den eine gelistete Gruppe bereits trägt, weist der Dialog schon bei der Eingabe ab; Groß- und Kleinschreibung spielt dabei keine Rolle.

Ab **Version 7.4.13** der Linuxmuster-API stehen unter den fünf mitgelieferten Vorlagen zusätzlich die Beispielkonfigurationen, die der Server in `/srv/linbo/examples` bereithält. Eine solche Vorlage wird unverändert übernommen; nur Gruppenname, Serveradresse und Schule schreibt die Plattform beim Anlegen neu.

Ist die Serveradresse noch nicht bekannt, holt die Plattform sie beim Öffnen des Dialogs nach. Gelingt das nicht – etwa weil die Linuxmuster-API die Serverinformationen nur Globaladmins herausgibt –, verwendet sie die Serveradresse, die eine bereits vorhandene Gruppe nennt. Findet sich auch dort keine, bricht das Anlegen mit einer Meldung ab. Eine neu angelegte Gruppe steht ohne Neuladen in der Liste. Sie übernimmt die gewählte Schule in ihr Feld **Schule** (Gruppen-Editor, Registerkarte **Allgemein**); ist keine Schule gewählt, bleibt das Feld leer.

:::note[Vorlagen zielen auf die erste SATA-Platte]
Alle fünf Vorlagen legen ihr Layout auf `/dev/sda` an. Auf Rechnern mit NVMe- oder VirtIO-Platten passt das nicht: Die Gruppe entsteht zwar, ihre Gerätenamen gehen aber an der Hardware vorbei und müssen anschließend in der `start.conf` korrigiert werden. Das Gerät steht im Hinweis unter der Vorlagenauswahl, bevor Sie schreiben.
:::

:::warning[Vorhandene Gruppe wird nicht überschrieben]
Vor dem Anlegen prüft die Plattform auf dem Server, ob für den Namen bereits eine `start.conf` existiert – auch dann, wenn die Liste sie nicht anzeigt. In diesem Fall bricht der Vorgang mit einem Hinweis ab, statt die vorhandene Gruppe zu ersetzen.
:::

:::warning[Namen, die kein LINBO-Lauf ansprechen kann]
Die Namensregel entspricht den Zielen, die ein `linbo-remote`-Lauf annimmt. Ein Name, der mit einem Bindestrich oder Unterstrich beginnt, wird auf der Kommandozeile als Option gelesen; die Gruppe ließe sich anlegen, aber von keinem Lauf mehr ansprechen.

Gruppen, die vor Einführung der Regel unter einem solchen Namen entstanden sind, bleiben in der Liste und lassen sich ansehen, in der Vorschau öffnen und löschen. Im Gruppen-Editor bleibt **Speichern** dagegen gesperrt und nennt den Gruppennamen als Grund, statt die Änderung erst nach dem Bearbeiten abzuweisen. Geben Sie der Gruppe in diesem Fall mit [**Gruppe umbenennen**](#eine-gruppe-umbenennen) einen zulässigen Namen. Einem Globaladmin bietet der Editor die Aktion neben dem Hinweis an; anderen Rollen nennt der Hinweis nur, dass ein Globaladmin die Gruppe umbenennen kann. Solange im Editor ungespeicherte Änderungen vorliegen, ist die Aktion gesperrt (*„Verwerfen Sie zuerst Ihre ungespeicherten Änderungen, um die Gruppe umzubenennen; unter diesem Namen lassen sie sich nicht speichern.“*).
:::

Beim **Duplizieren** übernimmt die Kopie Partitionen, Betriebssysteme und Einstellungen der Vorlage; der Gruppenname in der Datei wird dabei auf den neuen Namen umgeschrieben.

Eine angelegte oder duplizierte Gruppe wendet die Plattform an wie nach dem Speichern im [Gruppen-Editor](#der-gruppen-editor); ist die `start.conf` geschrieben, das Anwenden aber fehlgeschlagen, meldet die Plattform *„Gruppe „…“ wurde angelegt, aber nicht angewendet. Bitte wenden Sie die Geräteliste in der Geräteverwaltung an.“* beziehungsweise *„„…“ wurde als „…“ dupliziert, aber nicht angewendet. Bitte wenden Sie die Geräteliste in der Geräteverwaltung an.“*

:::warning[Wer Gruppen schreiben darf, entscheidet die Linuxmuster-API]
Anlegen, Speichern, Duplizieren und Löschen einer Gruppe reicht die Plattform an die Linuxmuster-API weiter; welche Rolle die Aktion ausführen darf, prüft die API. Bis einschließlich **Version 7.4.12** sind diese Schreibrouten Globaladmins vorbehalten; Schuladmins erreichen den Bereich erst ab **Version 7.4.13** (siehe [Wer LINBO erreicht](#aufbau-der-app)). Lesen und Vorschau sind von der Einschränkung nicht betroffen.
:::

:::note[Die Dateien unter `/srv/linbo` kennen keine Schule]
`start.conf`-Dateien, Images und Beispielkonfigurationen liegen serverweit, nicht je Schule. Ein Schuladmin ändert hier also, was alle Schulen des Servers verwenden. Einzig die Serverinformationen gibt die Linuxmuster-API nur Globaladmins heraus.
:::

:::warning[Was beim Löschen verschwindet]
Gelöscht werden die `start.conf`, die GRUB-Konfiguration **und**, falls vorhanden, die [VDI-Konfiguration](#vdi-konfiguration) der Gruppe. Rechner dieser Gruppe starten danach ohne Konfiguration, bis ihnen eine andere Gruppe zugewiesen wird. Der Server legt vor dem Löschen Sicherungen der `start.conf` und der VDI-Konfiguration an. Die VDI-Konfiguration löscht die Plattform zuerst; lässt sie sich nicht löschen, bleibt die Gruppe unverändert bestehen. So findet eine spätere Gruppe gleichen Namens keine verwaiste VDI-Konfiguration vor.
:::

#### Eine Gruppe umbenennen

**Gruppe umbenennen** ist Globaladmins vorbehalten, weil die Geräte einer Gruppe in jeder Schule liegen können; für andere Rollen ist die Aktion ausgegraut, und der Grund steht am Knopf. Für den neuen Namen gelten dieselben Regeln wie beim Anlegen. Außerdem darf keine Geräteliste einer Schule bereits Geräte mit diesem Gruppennamen führen, auch nicht in anderer Groß- und Kleinschreibung. Der Dialog nennt, wie viele Geräte welcher Schulen umgestellt werden.

Die Plattform benennt in dieser Reihenfolge um:

1. Sie speichert die `start.conf` unter dem neuen Namen und trägt ihn in der Geräteliste jeder betroffenen Schule ein. Jede Geräteliste liest sie dafür unmittelbar vorher erneut: Hat ein anderer Admin sie inzwischen gespeichert, bleibt seine Änderung erhalten, und umgestellt werden nur die Geräte, die dann noch in der alten Gruppe stehen.
2. Sofern vorhanden, übernimmt sie die VDI-Konfiguration unter dem neuen Namen.
3. Sie wendet die Änderung über den Geräteimport jeder betroffenen Schule an.
4. Erst wenn die VDI-Konfiguration übernommen ist und alle Importe gelungen sind, löscht sie die alte `start.conf` und die alte VDI-Konfiguration. Schlägt ein Import fehl, bleiben beide erhalten, denn die Geräte dieser Schule starten noch von ihnen. Ließ sich die VDI-Konfiguration nicht übernehmen, bleibt die alte Gruppe ebenfalls bestehen, damit die VDI-Konfiguration nicht verloren geht.

Die Sicherungen der `start.conf` bleiben unter dem alten Namen. Lässt sich die Geräteliste einer Schule nicht ändern, nimmt die Plattform die Umstellung zurück – nur für die Geräte, die sie selbst umgestellt hat. Nach dem Umbenennen, auch nach einem fehlgeschlagenen, lädt die Seite Gruppen und Hosts neu, dazu jede bereits in der [Geräteverwaltung](#geräteverwaltung) geöffnete Geräteliste einer betroffenen Schule. Wird die Umbenennung vorab abgewiesen, bleiben die Gerätelisten unberührt. Bleibt etwas offen – etwa eine alte Datei, die sich nicht löschen ließ –, nennt das Ergebnis im Dialog, was noch zu tun ist.

| Meldung | Ursache und Abhilfe |
|---------|---------------------|
| *„In der Geräteliste von … gibt es bereits Geräte mit der Gruppe „…“. Wählen Sie einen anderen Namen.“* | Der neue Name ist in der Geräteliste einer der genannten Schulen schon vergeben. Geändert wurde nichts; wählen Sie einen anderen Namen. |
| *„Die Gruppe „…“ wird gerade umbenannt. Warten Sie, bis die Umbenennung abgeschlossen ist, und versuchen Sie es erneut.“* | Eine andere Umbenennung mit dem alten oder dem neuen Namen läuft noch. Geändert wurde nichts. |
| *„Die Geräte der Schule „…“ konnten nicht auf den neuen Gruppennamen umgestellt werden. Die Umbenennung wurde vollständig zurückgenommen.“* | Die Geräteliste dieser Schule ließ sich nicht lesen oder schreiben. Geräte und `start.conf` sind im Ausgangszustand; versuchen Sie es erneut. |
| *„Die VDI-Konfiguration konnte nicht übernommen werden. Damit sie nicht verloren geht, bleibt die alte Gruppe „…“ bestehen. Übertragen Sie die VDI-Konfiguration auf „…“ und löschen Sie danach die alte Gruppe.“* | Die Geräte stehen bereits in der neuen Gruppe, deren VDI-Konfiguration fehlt aber. Übertragen Sie die VDI-Konfiguration auf die neue Gruppe und löschen Sie anschließend die alte. |
| *„Die alte Gruppe „…“ bleibt erhalten, weil der Geräteimport nicht für alle Schulen gelang und deren Geräte noch von ihr starten. Wenden Sie die Geräteliste dort an und löschen Sie danach die alte Gruppe.“* | Mindestens ein Geräteimport ist fehlgeschlagen. Wenden Sie die Geräteliste dieser Schule in der [Geräteverwaltung](#geräteverwaltung) an und löschen Sie anschließend die alte Gruppe. |
| *„Nach dem Umbenennen wurde die Geräteverwaltung von … neu geladen. Ungespeicherte Änderungen dort wurden verworfen.“* | In der Geräteverwaltung der genannten Schulen standen ungespeicherte Änderungen. Tragen Sie sie erneut ein. |
| *„Die Geräte der Schule „…“ konnten nicht umgestellt werden, und die Umstellung ließ sich für … nicht zurücknehmen. Diese Geräte zeigen weiterhin auf „…“; beide Gruppen bleiben erhalten. Bitte prüfen Sie die Geräteliste.“* | Auch das Zurücknehmen ist gescheitert. In den genannten Schulen stehen die Geräte bereits in der neuen Gruppe. Stellen Sie sie in der [Geräteverwaltung](#geräteverwaltung) zurück oder benennen Sie die Gruppe erneut um. |
| *„Die Geräte der Schule „…“ konnten nicht umgestellt werden; alle Geräte bleiben in der bisherigen Gruppe. Die neu angelegte start.conf „…“ ließ sich nicht wieder entfernen — löschen Sie sie bitte von Hand.“* | Die Geräte sind zurückgestellt, die neue `start.conf` liegt aber noch auf dem Server. Löschen Sie die Gruppe mit dem neuen Namen. |

#### Sicherungen der start.conf

Ab **Version 7.4.13** der Linuxmuster-API listet **Sicherungen** je Eintrag Datum, Zeitstempel und Größe, mit **Wiederherstellen** und einer Schaltfläche zum Löschen. Der Server legt jede Sicherung selbst an, sobald eine `start.conf` geschrieben wird.

:::note[Wiederherstellen ist umkehrbar]
Vor dem Zurückspielen sichert der Server die aktuelle `start.conf`, sodass sich der Schritt zurücknehmen lässt. Der Server behält die zehn letzten Fassungen und verwirft ältere.
:::

Nach dem **Wiederherstellen** wendet die Plattform die Gruppe an wie nach dem Speichern im [Gruppen-Editor](#der-gruppen-editor): Sie startet den Geräteimport einer Schule, die die Gruppe per PXE startet, damit das Boot-Menü der zurückgespielten Fassung folgt. Die Meldung nennt diese Schule, sagt, dass noch kein Computer die Gruppe startet, oder dass das Anwenden fehlgeschlagen ist – dann wenden Sie die Geräteliste in der Geräteverwaltung an. Zurückgespielt ist die Datei in jedem Fall.

#### VDI-Konfiguration

Ab **Version 7.4.13** der Linuxmuster-API öffnet **VDI** die Datei `start.conf.<Gruppe>.vdi` der Gruppe. Der Dialog zeigt die Felder, die die Schulkonsole schreibt – darunter **VDI aktiviert**, Name, Hostname, Betriebssystemtyp, IP- und MAC-Adresse, Netzwerkbrücke, Kerne, Arbeitsspeicher und die VM-IDs. **Speichern** ersetzt die Datei als Ganzes, **VDI abschalten** löscht sie; die `start.conf` der Gruppe bleibt in beiden Fällen unberührt. In der Liste der Gruppen erscheint die VDI-Konfiguration nicht als eigene Gruppe; beim Löschen der Gruppe wird sie mitgelöscht.

:::note[Felder außerhalb der Liste bleiben erhalten]
Die Datei gehört edulution-linbo-vdi. Felder, die der Dialog nicht anzeigt, schreibt die Plattform unverändert zurück, statt sie zu verwerfen.
:::

Lässt sich die Datei nicht lesen, zeigt der Dialog statt der Felder einen Hinweis und sperrt **Speichern**, denn ein leeres Formular würde die gespeicherte Konfiguration ersetzen. Schließen Sie den Dialog und öffnen Sie ihn erneut.

Ebenso bleibt **Speichern** gesperrt, solange ein Feld einen unzulässigen Wert enthält; der Dialog nennt den Fehler direkt am Feld:

| Feld | Zulässig |
|------|----------|
| **Kerne**, **Arbeitsspeicher (MiB)** | ganze Zahlen ab 1 |
| **VM-IDs** | ganze Zahlen ab 1, mehrere durch Kommas getrennt |
| **VLAN-Tag** | ganze Zahlen von 0 bis 4094; 0 bedeutet *kein VLAN* |
| **MAC-Adresse** | im Format `aa:bb:cc:dd:ee:ff` |
| **IP-Adresse** | eine IPv4-Adresse wie `10.0.0.50` |

Geprüft werden nur Felder, die Sie ändern: Ein Wert, der unverändert aus einer älteren Datei stammt, sperrt das Speichern nicht.

#### Die Vorschau

Die Vorschau **Gruppe \<ID\>** hat drei Registerkarten:

- **Zusammenfassung** – die ausgewertete `start.conf`: der Abschnitt `[LINBO]` als Liste der gesetzten Schlüssel, darunter dasselbe Plattenlayout wie im Gruppen-Editor – je Platte ihre Partitionen, darunter die Betriebssysteme. Hier lässt sich nichts verschieben oder bearbeiten.
- **Rohdaten** – der unveränderte Inhalt der `start.conf`.
- **GRUB cfg** – der Inhalt der GRUB-Konfiguration.

Existiert zu einer Gruppe keine `start.conf`, entfallen die ersten beiden Registerkarten.

:::note[Die GRUB-Vorschau zeigt den Stand auf dem Server]
Die Registerkarte **GRUB cfg** liest die Konfiguration bei jedem Öffnen erneut vom Server und zeigt damit nicht die Fassung, die beim Laden der Liste mitkam. Verweigert die Linuxmuster-API das Lesen der einzelnen Konfiguration, bleibt die Vorschau ohne Fehlermeldung bei der Fassung aus der Liste.
:::

:::note[Auswertung der start.conf]
Die Zusammenfassung liest die Datei so, wie LINBO selbst sie liest: Abschnitts- und Schlüsselnamen werden unabhängig von der Groß- und Kleinschreibung erkannt, und als Ja-Wert gelten ausschließlich `yes`, `true` und `enable`. Ein Schlüssel mit einem anderen Wert – etwa `Autostart = 1` – zählt daher als *aus*. Ein leerer oder fehlender Schlüssel erhält den Standardwert, den auch der LINBO-Client annimmt.
:::

#### Der Gruppen-Editor

**Bearbeiten** öffnet die Gruppe unter einer eigenen Adresse (`…/linbo/groups/<Name>`). Diese Adresse lässt sich verlinken und übersteht ein Neuladen; ein unbekannter Name führt mit der Meldung *„Die Gruppe „…“ gibt es nicht.“* zurück auf die Liste. Der Editor hat zwei Registerkarten.

**Allgemein** zeigt alle Felder der Gruppe in fünf Abschnitten:

| Abschnitt | Felder |
|-----------|--------|
| **Übersicht** | Gruppe, Server und Cache – nur zum Lesen |
| **Hardware** | Systemtyp, Download-Typ |
| **Startoptionen** | Beim Start partitionieren, Beim Start formatieren, Beim Start Cache aktualisieren, Schule |
| **Darstellung** | Sprache, Minimales Layout verwenden, Clientdetails standardmäßig anzeigen |
| **System** | Abmeldung nach, Kernel-Optionen |

Gruppenname, Server und Cache-Partition sind bewusst nicht änderbar: Der Name ist die Identität der Gruppe, und die Cache-Partition ergibt sich aus dem Partitionslayout. *Vorgabe des Servers* bei **Sprache** bedeutet, dass die Gruppe keine eigene Sprache setzt. **Abmeldung nach** erwartet Sekunden; die Vorgabe ist 600.

Zum Feld **Kernel-Optionen** gehören Schaltflächen für die gebräuchlichen Werte: `quiet`, `splash`, `acpi=noirq`, `acpi=off`, `irqpoll` und `dhcpretry=9`. Ein Klick hängt den Wert an die bestehenden Optionen an; ist er bereits gesetzt, ist die Schaltfläche ausgegraut.

Ein Feld der Registerkarte **Allgemein**, das Sie leeren, verschwindet beim Speichern aus der `start.conf`, statt als leerer Eintrag darin stehen zu bleiben. Für LINBO ist das der Unterschied zwischen *nicht gesetzt* und *auf leer gesetzt*: Der Wert fällt damit auf die Vorgabe zurück. Das betrifft unter anderem **Schule**, **Abmeldung nach** und **Kernel-Optionen**.

:::warning[Beim Start formatieren]
**Beim Start partitionieren** legt das Plattenlayout bei jedem Start neu an, **Beim Start formatieren** formatiert dabei alle Partitionen. Lokal auf den Rechnern gespeicherte Daten gehen dann bei jedem Start verloren.
:::

**Partitionen** zeigt je Platte eine Karte. Über die Preset-Schaltflächen fügen Sie eine Partition mit sinnvoller Vorgabegröße hinzu: *EFI*, *MSR*, *Windows*, *Linux*, *Swap*, *Daten*, *Erweitert* und *Cache*. Die Reihenfolge ändern Sie durch Ziehen: Eine Partition lässt sich innerhalb ihrer Platte verschieben, und ein Preset lässt sich direkt an die Stelle ziehen, an der die neue Partition entstehen soll. Klicken Sie ein Preset nur an, bestimmt es die Position selbst: *EFI* an den Anfang, *MSR* dahinter, alle übrigen ans Ende. Gerätenamen und alle Verweise darauf werden danach neu durchnummeriert. Der **Plattentyp** – SATA, VirtIO, Xen, IDE, MMC, NVMe oder allgemein – bestimmt die Gerätenamen; ein Wechsel nummeriert die Partitionen der Platte samt aller Verweise darauf um. Ein Klick auf eine Partition öffnet einen Dialog mit den Unterregisterkarten **Partition** und **Betriebssystem**. Er öffnet in der einfachen Ansicht; **Erweitert** blendet auf **Partition** zusätzlich **Partitionstyp** und **Dateisystem** ein und gilt nur für die geöffnete Partition.

Im Feld **Größe** gilt: eine nackte Zahl sind Kibibytes, ein Suffix `K`, `M`, `G` oder `T` legt die Einheit fest – wahlweise gefolgt von `B` oder `iB`, etwa `40GB` –, und ein leeres Feld bedeutet *Rest der Platte* (in der Plattenkarte als `∞` dargestellt). Unter dem Feld steht laufend, welche Größe daraus wird. Dezimalzahlen, Leerzeichen in der Angabe und andere Einheiten liest LINBO nicht, und eine Partition muss mindestens 2 MiB groß sein; eine solche Größe markiert der Dialog als ungültig. Enthält die Gruppe noch eine ungültige Größe, lässt sich der Editor nicht speichern und nennt die betroffenen Partitionen.

Über **Neue Festplatte** fügen Sie eine weitere Platte hinzu. Solange sie keine Partition trägt, bleibt sie beim Wechsel der Registerkarten erhalten, wird aber nicht in die `start.conf` geschrieben – legen Sie vor dem Speichern mindestens eine Partition darauf an.

Unter den Platten listet der Abschnitt **Betriebssysteme** die Einträge der Gruppe mit Partition, Basisimage, Kernel, Initrd und den Schaltern für Autostart, Sync und Start. **Bearbeiten** öffnet die Partition, an der ein Eintrag hängt. Zeigt das Root-Gerät eines Eintrags auf keine Partition des Layouts, wird der Eintrag als verwaist gekennzeichnet (**Ohne Partition**) und lässt sich hier löschen. Dieselbe Kennzeichnung trägt das Betriebssystem auf der Karte der Gruppe in der **Plattenkarte**.

Bearbeitet wird ein Betriebssystem auf der Unterregisterkarte **Betriebssystem** des Partitionsdialogs. Dort stehen **Name**, **Version**, **Standardaktion**, **Symbol**, **Beschreibung**, **Basisimage**, die **Startknöpfe im LINBO-Menü** – *Start*, *Sync & Start*, *Neu & Start* und *Autostart* – sowie das **Autostart-Timeout (Sekunden)**. Hinter **Erweitert** liegen **Kernel**, **Zusätzliche Kernel-Parameter**, **Opsi-Setup erzwingen**, **Opsi-Status wiederherstellen** und **Im Startmenü ausblenden**.

Zwei dieser Felder richten sich nach dem Dateisystem der Partition: **Initrd** erscheint nur, wenn die Partition kein NTFS trägt – ein Windows-System startet ohne Initrd –, und **Kernel** ist auf NTFS eine Auswahl aus `auto`, `grub.exe` und `reboot` statt eines freien Textfelds.

Trägt eine Partition noch kein Betriebssystem, weist die Unterregisterkarte darauf hin und bietet **Betriebssystem hinzufügen** an. Die Schaltfläche erscheint nur auf Partitionen, von denen LINBO überhaupt starten kann – also nicht auf *EFI*, *MSR*, *Erweitert* und *Swap* und nicht auf der Cache-Partition. Eine Partition aus dem Preset *Daten* kommt dagegen infrage; sie unterscheidet sich von *Windows* nur im Label. Dasselbe gilt für Partitionen aus einer hochgeladenen `start.conf`, die dort keinen Betriebssystem-Abschnitt hatten.

:::warning[Betriebssystem auf einer nicht startfähigen Partition]
Ändern Sie an einer Partition, an der ein Betriebssystem hängt, das Dateisystem oder den Partitionstyp auf einen Wert, von dem LINBO nicht startet – oder machen Sie sie zur Cache-Partition –, bleibt der Eintrag erhalten und weiter bearbeitbar. Die Unterregisterkarte **Betriebssystem** weist dann darauf hin, dass LINBO dieses System hier nicht mehr starten kann.

Gelöscht wird der Eintrag nicht – setzen Sie das Dateisystem oder den Partitionstyp zurück, damit das System wieder startet. Im Abschnitt **Betriebssysteme** lässt sich der Eintrag in diesem Zustand nicht entfernen: Die Schaltfläche zum Löschen erscheint dort nur bei verwaisten Einträgen, deren Partition es gar nicht mehr gibt.
:::

Solange ungespeicherte Änderungen vorliegen, fragt der Editor nach, bevor sie verloren gehen – auch wenn Sie über die Seitenleiste oder den Zurück-Knopf des Browsers weggehen; Sie wählen dann **Weiter bearbeiten** oder **Verwerfen**. Beim Neuladen oder Schließen des Tabs fragt stattdessen der Browser selbst. Nach dem Speichern schließt sich der Editor ohne Nachfrage.

Nach dem **Speichern** wendet die Plattform die Gruppe sofort an: Sie startet den Geräteimport einer Schule, in der ein Gerät mit gesetztem PXE-Flag dieser Gruppe zugeordnet ist, damit die Startkonfiguration der Gruppe neu erzeugt wird. Gesucht wird zuerst in der gewählten Schule, als Globaladmin danach in den übrigen Schulen des Servers – ein Schuladmin wendet nur in seiner eigenen Schule an; importiert wird nur die erste Schule, die die Gruppe verwendet. Die Meldung nennt das Ergebnis:

| Meldung | Bedeutung |
|---------|-----------|
| *„… wurde gespeichert und über den Geräteimport der Schule „…“ angewendet.“* | Die Gruppe ist angewendet; die Meldung nennt die Schule, deren Import gelaufen ist. |
| *„… wurde gespeichert. Noch startet kein Computer diese Gruppe, daher musste nichts angewendet werden.“* | Keinem Gerät mit PXE-Flag ist die Gruppe zugeordnet. |
| *„… wurde gespeichert, aber nicht angewendet. Bitte wenden Sie die Geräteliste in der Geräteverwaltung an.“* | Der Import ist fehlgeschlagen. Die `start.conf` liegt auf dem Server; wenden Sie die Geräteliste der betroffenen Schule in der [Geräteverwaltung](#geräteverwaltung) mit **Anwenden** an. |

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

Über die Ansichtswahl wählen Sie wie bei den Gruppen zwischen vier Ansichten; die Wahl bleibt erhalten:

| Ansicht | Zeigt |
|---------|-------|
| **Speicher** | wie voll die Partition mit dem Image ist, dazu Partitionsgerät und Dateizahl |
| **Kacheln** | Betriebssystem-Symbol, Größe, vorhandene Sidecars und die erste Zeile der Beschreibung |
| **Datenblatt** (Vorgabe) | Dateiname, Größe, Partition, Partitionsgröße, ob eine Prüfsumme vorliegt, Dateizahl und Änderungszeitpunkt |
| **Tabelle** | Name, Größe, **Verwendet in**, Sidecars und Aktualisierungszeitpunkt |

Die Werkzeugleiste ist dieselbe wie bei den Gruppen, ohne Schulauswahl. Die Suche findet ein Image über seinen Namen, seine Beschreibung und die Fehlermeldung, die die Plattform zu einem fehlerhaften Image anzeigt. In den Kartenansichten wählen Sie ein Image über das Auswahlkästchen seiner Karte aus; ein Klick auf die Karte oder auf eine Zeile der **Tabelle** öffnet die Details des Images.

Gruppen und Images verweisen aufeinander: Jede Ansicht der Gruppen nennt die Images, die eine Gruppe startet, und jede Ansicht der Images nennt unter **Verwendet in** die Gruppen, die ein Image starten. Die Zuordnung liest die Plattform aus den `start.conf`-Dateien und steht daher erst ab **Version 7.4.11** der Linuxmuster-API zur Verfügung.

Auch hier gibt es keine Aktion zum Neuladen. Die Seite lädt die Images jede Minute und beim Zurückwechseln in den Browser-Tab erneut vom Server, ab **Version 7.4.11** der Linuxmuster-API auch die `start.conf`-Dateien der Gruppen; ist der Tab nicht sichtbar oder wird gerade ein Image gespeichert oder gelöscht, pausiert die Abfrage. Wie bei den Gruppen bleiben ausgewählte Images ausgewählt, wenn die Suche oder der Filter der Tabelle sie ausblendet; Zahl und Aktionen der Leiste gelten nur für die sichtbaren.

:::note[Zwei Namen, ein Image]
Ein Image heißt nach seinem Verzeichnis auf dem Server (`debian13`); die Bilddatei darin trägt zusätzlich die Endung (`debian13.qcow2`). Angezeigt und in allen Aktionen verwendet wird der Name des Images, nicht der der Datei.
:::

:::note[Ein Image mit unlesbarer .info-Datei bleibt in der Liste]
Fehlt einem Image eine lesbare `.info`-Datei, führt der Server es nicht in seiner Bestandsliste. Die Plattform zeigt es trotzdem an; in der **Tabelle** trägt es den Vermerk *Nicht lesbar*, beim Überfahren erscheint die Meldung des Servers. **Herunterladen** ist gesperrt (*„Der Server kann die Datei dieses Images nicht lesen.“*), und im Editor sind die Beipack-Dateien nur zu lesen – speichern lässt sich dort nur der Name. Löschen bleibt möglich.
:::

Sidecars sind die Beipack-Dateien eines Images: Beschreibung (`.desc`), Info (`.info`), VDI-Konfiguration (`.vdi`), Torrent (`.torrent`), Maschinenkonto (`.macct`), Prüfsumme (`.md5`), Hashsumme (`.hash`), Registry (`.reg`), Pre-Start-Skript (`.prestart`) und Post-Sync-Skript (`.postsync`). In der Spalte **Sidecars** steht je vorhandener Datei ein Buchstabenkürzel; welcher Dateityp dahintersteht, erscheint, sobald Sie mit dem Mauszeiger darauf zeigen. Der Detaildialog zeigt zusätzlich Dateiname, Image-Ordner, Pfad, Größe, MD5-Summe, die Dateien des Images – jeweils als **Image** oder **Beipack-Datei** gekennzeichnet – und – sofern ein `.info`-Sidecar vorliegt – Erstellungszeitpunkt, Image- und Partitionsgröße sowie die Beschreibung.

Ein Image fügen Sie in den drei Kartenansichten über die Karte **Image hochladen** vor dem ersten Image hinzu, in der **Tabelle** über **Image hochladen** in der Aktionsleiste. Zulässig sind Image-Dateien (`.qcow2`, `.qdiff`, `.cloop`, `.rsync`) und alle oben genannten Beipack-Dateien; andere Dateitypen weist der Dialog ab und nennt dabei die abgelehnte Datei. Für den Namen eines neuen Images gelten dieselben Regeln wie beim [Duplizieren](#aktionen-eines-images); ein Name, der sich von einem vorhandenen Image nur in Groß- und Kleinschreibung unterscheidet, wird abgewiesen.

:::warning[Ein Upload unter vorhandenem Namen ersetzt das Image]
Laden Sie eine `.qcow2`-Datei unter dem Namen eines vorhandenen Images hoch, ersetzt der Upload dieses Image. Der Dialog weist darauf hin und gibt den Upload erst frei, wenn Sie das Ersetzen für diesen Namen bestätigen. Die bisherige Version legt der Server in einem Sicherungsordner ab, der unter **Sicherungen** nicht erscheint und sich nur direkt auf dem Server löschen lässt – bei großen Images belegt er entsprechend viel Speicherplatz. Das gilt auch, wenn Sie zu einem vorhandenen Image nur eine Beipack-Datei hochladen: Auch dann kopiert der Server das vollständige Image in diesen Ordner.
:::

Im Dialog geben Sie Image-Name und Dateiname an; während der Übertragung sind beide Felder gesperrt und ein Fortschrittsbalken zeigt den Stand in Prozent. **Abbrechen** bricht die laufende Übertragung ab und verwirft zugleich die Daten, die der Server bereits entgegengenommen hat – es bleibt also kein angefangenes Image auf dem Server zurück. Fällt **Abbrechen** in den Augenblick, in dem der Server das vollständig übertragene Image bereits fertigstellt, wartet die Plattform diesen Schritt ab; das Image liegt danach vollständig vor.

Der Browser überträgt die Datei in Teilstücken unmittelbar an den Schulserver. Die Größenbeschränkung, die bisher der Zwischenspeicher des edulution-Servers setzte, entfällt damit; abgewiesen wird eine Datei erst, wenn sie die Obergrenze von LINBO überschreitet – die Meldung nennt diese Grenze. Bricht die Übertragung ab, weil etwa die Verbindung wegfällt, setzt ein erneuter Upload derselben Datei dort an, wo er stehengeblieben ist, und der Dialog weist mit *„Setzt einen abgebrochenen Upload bei N % fort“* darauf hin; bei einem mehrere Gigabyte großen Image erspart das den bereits übertragenen Teil.

Scheitert ein Teilstück unterwegs – die Verbindung reißt ab oder der Server antwortet mit einem Fehler –, wartet der Browser 2 Sekunden, beim zweiten Mal 5, prüft dann, ob das Teilstück doch angekommen ist, und sendet es andernfalls erneut; erst wenn auch der dritte Versuch scheitert, bricht der Upload ab. Weist der Server ein Teilstück dagegen ab, etwa wegen eines unzulässigen Image- oder Dateinamens, endet der Upload sofort mit der Meldung. Das gilt auch, wenn dieselbe Datei desselben Images gerade schon übertragen wird – etwa aus einem zweiten Tab oder von einer anderen Administration: Der zweite Upload endet mit *„Diese Datei wird bereits hochgeladen“*, der erste läuft weiter.

:::note[Fortgesetzt wird nur dieselbe Datei, und nur im selben Browser]
Den Vermerk über einen angefangenen Upload hält der Browser selbst. Er greift nur, wenn Dateiname, Größe **und** Änderungszeitpunkt der erneut gewählten Datei übereinstimmen, das zuletzt übertragene Teilstück höchstens 24 Stunden zurückliegt und der Schulserver genau so viele Bytes bereithält, wie dieser Browser übertragen hat – hat inzwischen ein anderer Upload unter demselben Namen Daten abgelegt, beginnt die Übertragung von vorn. Angelegt wird der Vermerk, sobald das erste Teilstück angekommen ist, und nach jedem weiteren fortgeschrieben; gelöscht wird er, sobald der Upload abgeschlossen oder abgebrochen ist, das Image gelöscht wird oder Sie sich abmelden. In einem anderen Browser, an einem anderen Rechner oder nach dem Leeren der Websitedaten beginnt die Übertragung deshalb von vorn – der Stand auf dem Schulserver überdauert dagegen einen Neustart der edulution-Instanz.

Laden Sie unter einem bereits angefangenen Namen eine andere Datei hoch – etwa ein neu erstelltes Image –, beginnt die Übertragung von vorn und überschreibt den angefangenen Stand. Weicht am Ende die Größe der auf dem Server abgelegten Datei von der gewählten ab, schließt die Plattform den Upload nicht ab, sondern meldet dies und behält den Vermerk, sodass ein erneuter Versuch fortsetzen kann.
:::

#### Aktionen eines Images

Die Aktionen bietet die Aktionsleiste an, sobald Images ausgewählt sind; Aktionen für ein einzelnes Image stehen nur bei genau einer Auswahl zur Wahl:

| Aktion | Wirkung |
|--------|---------|
| **Herunterladen** | lädt die Image-Datei herunter; gesperrt, solange ein anderer Download läuft |
| **Bearbeiten** | öffnet den [Sidecar-Editor](#beschreibung-und-skripte-bearbeiten) |
| **Sicherungen** | listet die Sicherungen des Images zum Wiederherstellen oder Löschen |
| **Duplizieren** | kopiert das Image samt Beschreibung, Registry-Patch und Skripten, aber ohne Sicherungen |
| **Beschreibung und Skripte des Differenzimages** | erscheint nur, wenn zum Image ein Differenzimage existiert |
| **Differenzimage löschen** | löscht die Differenzimages aller ausgewählten Images, die eines haben |
| **Löschen** | löscht die ausgewählten Images mit Sicherungen, Differenzimage und Beipack-Dateien |

Beim Duplizieren und beim Umbenennen erlaubt der Name Buchstaben, Ziffern, Leerzeichen sowie `.`, `_`, `+` und `-` und ist höchstens 200 Zeichen lang; er darf nicht mit einem Punkt beginnen und keine zwei Punkte hintereinander enthalten. Einen Namen, den ein Image bereits trägt, weist der Dialog ab – auch in anderer Groß- und Kleinschreibung und beim Duplizieren auch den Namen der Vorlage.

Meldet die Linuxmuster-API beim **Löschen** einen Serverfehler oder antwortet sie nicht, prüft die Plattform anhand der Imageliste nach: Führt der Server das Image dort nicht mehr, gilt es als gelöscht.

:::note[Große Images brauchen Zeit – und werden nicht wiederholt]
**Duplizieren**, **Wiederherstellen**, Umbenennen und die Löschaktionen verschieben oder kopieren die vollständigen Image-Dateien auf dem Server. Dafür gilt ein eigenes Zeitlimit von zehn Minuten. Wird es überschritten, meldet die Oberfläche einen Fehler, obwohl der Server weiterarbeitet und die Aktion noch gelingen kann. Die Plattform wiederholt sie deshalb nicht von selbst – beim Wiederherstellen entstünde sonst eine weitere Sicherung. Warten Sie, bis die Imageliste den Stand des Servers zeigt – sie fragt ihn jede Minute ab –, bevor Sie die Aktion erneut auslösen; wie Sie das Zeitlimit anheben, steht unter [Einrichtung](#einrichtung-für-administratoren).
:::

#### Beschreibung und Skripte bearbeiten

Der Editor öffnet für das Image selbst, für sein Differenzimage und für jede einzelne Sicherung. Er hat je eine Registerkarte für die Dateien, die Sie ändern können: **Beschreibung** (`.desc`), **Info** (`.info`), **VDI-Konfiguration** (`.vdi`), **Registry** (`.reg`), **Pre-Start Script** (`.prestart`) und **Post-Sync Script** (`.postsync`). Beim Differenzimage entfällt **Post-Sync Script**, denn dieses Skript führt der Server nur am Basisimage. Für VDI-Konfiguration, Registry-Patch und Skripte bietet der Editor **Aus anderem Image übernehmen** an – die Auswahl listet alle Images, die für diesen Dateityp Inhalt haben, und übernimmt ihn in das Feld. Umbenannt wird ein Image über das Namensfeld im Editor seines Basisimages.

Hat jemand anderes die Beipack-Dateien geändert, seit Sie den Editor geöffnet haben, speichert die Plattform nicht, sondern meldet *„Die Beipack-Dateien dieses Images wurden inzwischen geändert. Ihre Änderungen wurden nicht gespeichert.“*; **Neu laden** in der Meldung holt den aktuellen Stand und verwirft dabei Ihre Eingaben.

:::warning[Ein leeres Feld löscht die Datei]
Der Server schreibt beim Speichern immer alle Beipack-Dateien neu und löscht dabei jede, für die kein Inhalt ankommt. Ein Feld, das Sie leeren, löscht also die zugehörige Datei auf dem Server.
:::

Die `.info`-Datei ist Pflicht: ohne sie lässt sich das Image nicht mehr einlesen. Ist ihr Feld leer, sperrt der Editor das Speichern und weist darauf hin. Der Inhalt stammt vom Server – Zeitstempel, Image- und Partitionsgröße – und sollte nur mit Bedacht geändert werden.

#### Sicherungen

**Sicherungen** listet je Sicherung Datum, Zeitstempel und Größe, mit **Wiederherstellen** und **Sicherung löschen**. Über das Zahnrad einer Zeile (*„Einstellungen der Sicherung vom …“*) öffnen Sie den Editor für die Beipack-Dateien dieser Sicherung. Der mit **Basisimage** gekennzeichnete Eintrag ist das Image selbst, keine Sicherung.

:::note[Wiederherstellen ist umkehrbar]
Der Server legt vor dem Wiederherstellen eine neue Sicherung des aktuellen Images an, sodass sich der Schritt zurücknehmen lässt. Zwei Wiederherstellungen desselben Images innerhalb derselben Minute schlagen fehl; ein erneuter Versuch nach einer Minute gelingt.
:::

## Versionsübersicht

Die Seite **Versionsübersicht** listet die Versionen der beteiligten Linuxmuster-Komponenten – nützlich, um die für diese App benötigte API-Version 7.3.26 zu prüfen.

## Einschränkungen in dieser Version

Eine laufende Sitzung lässt sich aus der Plattform heraus **nicht abbrechen** und nicht mitverfolgen, wie es `tmux attach` auf der Konsole erlaubt: die Linuxmuster-API bietet dafür keine Schnittstelle. Sie sehen den Lauf und sein Protokoll, beenden können Sie ihn nur auf dem Server.

Eine Kommandokette mit dem Schritt **Cache befüllen** weist die Linuxmuster-API derzeit ab; das Abschicken endet dann mit einer Fehlermeldung.

## Einrichtung (für Administratoren)

- Die **Plattform** stellen Sie unter [Einstellungen → Globale Einstellungen → Allgemein](../edulution-plattform/konfiguration/einstellungen.md#allgemein) auf **Linuxmuster**.
- Welche Bereiche dieser App sichtbar sind und wie sie beschriftet werden, hängt zusätzlich vom [Organisationstyp](../edulution-plattform/konfiguration/einstellungen.md#organisationstyp) ab.
- Die Verbindung zum Schulserver richten Sie nach der Anleitung [Linuxmuster verbinden](./installation.md) ein.
- Dauern Kopier- und Verschiebeaktionen an sehr großen Images länger als zehn Minuten, setzen Sie die Umgebungsvariable `LMN_API_FILE_OPERATION_TIMEOUT_MS` des edulution-API-Dienstes auf einen höheren Wert in Millisekunden; ohne Angabe gilt `600000`.

:::warning[Anmeldelimit der Linuxmuster-API bei vielen gleichzeitigen Anmeldungen]
Die Plattform meldet jeden Benutzer von ihrer eigenen Adresse aus an der Linuxmuster-API an. Deren Anmelderoute ist auf fünf Anfragen je 60 Sekunden und Adresse begrenzt: Melden sich innerhalb einer Minute mehr Benutzer an – etwa zu Stundenbeginn –, weist die API die weiteren mit *„Die LMN-API hat zu viele Anmeldungen in kurzer Zeit abgewiesen“* ab. Ab **Version 7.4.13** lässt sich das Limit im Abschnitt `rate_limit` der Datei `/etc/linuxmuster/api/config.yml` einstellen; `requests: 0` schaltet es ab, und eine Whitelist nimmt die Adresse der Plattform aus. Die API liest die Datei beim Start, ein Neustart des Dienstes ist also nötig.
:::

## Siehe auch

- [Einstellungen](../edulution-plattform/konfiguration/einstellungen.md) – weitere globale Konfigurationsoptionen
- [Satelliten](../edulution-satellite/verwaltung.md) – Standorte anbinden und Dienste betreiben
- [Administration](../edulution-plattform/konfiguration/administration.md) – allgemeine Admin-Aufgaben
