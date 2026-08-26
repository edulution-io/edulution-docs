---
title: edulution VDI
description: Virtuelle Desktops für den Unterricht – zentral verwaltet, direkt im Browser
---

# edulution VDI

**edulution VDI** stellt zentral verwaltete virtuelle Desktops bereit – jeder Schüler startet mit
einer sauberen, vorkonfigurierten Umgebung, direkt im Browser und ohne Installation am Endgerät.
Das eignet sich besonders für ressourcenintensive Anwendungen, die auf schuleigenen Geräten sonst
nicht liefen.

In der Plattform heißt die App **Desktop-Bereitstellung**. Sie fordert beim Linuxmuster-Server eine freie virtuelle Maschine an und öffnet sie über den Fernzugriffsdienst [Apache Guacamole](https://guacamole.apache.org/) in einem Fenster der Plattform. Eine zusätzliche Software auf dem Endgerät ist nicht nötig.

:::info[Voraussetzung]
Die App erscheint nur, wenn die Administration sie eingerichtet hat (siehe [Konfiguration](konfiguration/index.md)). Die angebotenen Desktops stammen aus der VDI-Konfiguration des Linuxmuster-Servers – ohne dort eingerichtete virtuelle Maschinen bleiben die Karten auf der Seite leer.
:::

## Die Übersichtsseite

Nach dem Öffnen der App sehen Sie je Betriebssystem eine Karte. Angeboten werden **Windows 11** und **Ubuntu**; welche der beiden tatsächlich Clients bereitstellt, hängt von den VDI-Gruppen auf dem Schulserver ab.

Jede Karte zeigt:

| Element | Bedeutung |
| --- | --- |
| **Anzahl und Status** | Wie viele Clients dieses Systems gerade nutzbar sind |
| **Starten** | Fordert einen Desktop an und öffnet die Sitzung |
| Pfeilsymbol oben rechts | Aktualisiert die Anzahl der verfügbaren Clients |

Die Statuszeile wechselt je nach Lage: Solange freie Clients vorhanden sind, nennt sie deren Anzahl (**„3 Clients verfügbar"**). Ist keiner frei, werden aber gerade welche hochgefahren, zeigt sie stattdessen die Zahl der in Vorbereitung befindlichen Maschinen (**„2 Clients werden vorbereitet"**). Die Schaltfläche **Starten** ist nur anklickbar, wenn mindestens ein Client verfügbar ist – während der Vorbereitung bleibt sie deaktiviert.

:::note[Die Anzeige aktualisiert sich nicht von selbst]
Die Übersicht wird beim Öffnen der Seite einmal geladen. Ändert sich der Bestand danach – etwa weil eine vorbereitete Maschine fertig wird oder ein anderer Benutzer einen Client belegt –, sehen Sie das erst nach einem Klick auf **Neu laden** unten in der Aktionsleiste oder auf das Pfeilsymbol der Karte.
:::

## Eine Sitzung starten

1. Klicken Sie auf der gewünschten Karte auf **Starten**. edulution fordert daraufhin eine freie virtuelle Maschine dieses Systems an und reserviert sie für Ihr Benutzerkonto.
2. Die Sitzung öffnet sich in einem Fenster innerhalb der Plattform – zunächst bildschirmfüllend. Sie können das Fenster verkleinern, verschieben und minimieren, um nebenbei in anderen edulution-Apps zu arbeiten.
3. Die Anmeldung am virtuellen Desktop erfolgt automatisch mit Ihren edulution-Zugangsdaten. Sie müssen dort weder Benutzernamen noch Passwort erneut eingeben.

Ton wird aus der Sitzung übertragen, und auf Tablets lässt sich der Desktop per Touch bedienen. Die Bildschirmauflösung des virtuellen Desktops passt sich der Fenstergröße an.

**Verbindung schließen:** Das Schließen des Fensters trennt nur die Verbindung – am virtuellen Desktop bleiben Sie angemeldet, die Sitzung läuft dort weiter und der Client bleibt belegt. Melden Sie sich im virtuellen Desktop regulär ab, wenn Sie ihn wieder freigeben möchten.

:::caution[Ein Client gehört immer nur einer Person]
Eine virtuelle Maschine, an der bereits jemand anderes angemeldet ist, lässt sich nicht ein zweites Mal öffnen – die Verbindung wird mit dem Hinweis abgelehnt, dass die Maschine bereits verwendet wird. Umgekehrt bleibt ein Client Ihnen vorbehalten, solange Sie dort angemeldet sind: Ein versehentlich geschlossenes Sitzungsfenster können Sie also erneut öffnen, ohne den Desktop zu verlieren. Der Vorbehalt greift auch in den ersten Minuten nach dem Anfordern, während die Anmeldung am Desktop noch läuft.
:::

## Meldungen und ihre Ursachen

| Meldung | Ursache und Abhilfe |
| --- | --- |
| „Aktuell ist kein virtueller Desktop für dich verfügbar. Bitte versuche es später erneut." | Alle Clients dieses Systems sind belegt oder werden noch vorbereitet. Warten Sie und aktualisieren Sie die Übersicht. |
| „Diese virtuelle Maschine wird bereits von einem anderen Benutzer verwendet." | Der angefragte Client ist an ein anderes Konto vergeben. |
| „Linuxmuster VDI-Dienst antwortet nicht." | Der Schulserver liefert keine VDI-Daten. Wenden Sie sich an die Administration. |
| „RDP-Dienst nicht verfügbar." | Der Guacamole-Container läuft nicht oder ist nicht erreichbar. |
| „Guacamole ist nicht korrekt konfiguriert, bitte kontaktiere den Systemadministrator." | In den App-Einstellungen fehlt die URL des Guacamole-Dienstes. |
| „Verbindung konnte nicht hergestellt werden. Bitte überprüfe die Anmeldedaten." | Guacamole hat die Sitzung abgelehnt; meist stimmen die hinterlegten Dienst-Zugangsdaten nicht. |

Die letzten vier Meldungen haben ihre Ursache in der Einrichtung – die zugehörigen Stellschrauben beschreibt die [Konfiguration](konfiguration/index.md).

## Weiter

- [Konfiguration](konfiguration/index.md) – die App verbinden und Desktops bereitstellen
- [App-Store & Anwendungen](../edulution-plattform/apps/app-store.md) – Apps hinzufügen und verwalten
