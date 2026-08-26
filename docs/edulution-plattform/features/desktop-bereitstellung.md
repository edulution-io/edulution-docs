# Desktop-Bereitstellung (VDI)

Die **Desktop-Bereitstellung** verbindet Sie mit einem virtuellen Desktop (VDI), der auf dem Schulserver läuft – etwa für Anwendungen, die auf dem eigenen Gerät nicht installiert sind oder zu viele Ressourcen benötigen. Die Sitzung läuft vollständig im Browser: edulution fordert beim Linuxmuster-Server eine freie virtuelle Maschine an und öffnet sie über den Fernzugriffsdienst [Apache Guacamole](https://guacamole.apache.org/) in einem Fenster der Plattform. Eine zusätzliche Software auf dem Endgerät ist nicht nötig.

:::info[Voraussetzung]
Die App erscheint nur, wenn die Administration sie eingerichtet hat (siehe [Einrichtung](#einrichtung-für-administratoren)). Die angebotenen Desktops stammen aus der VDI-Konfiguration des Linuxmuster-Servers – ohne dort eingerichtete virtuelle Maschinen bleiben die Karten auf der Seite leer.
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
| „Der angefragte Host ist kein gültiges VDI-Ziel." | Die eingegebene Adresse gehört zu keiner bekannten VDI-Maschine (siehe [Direkte RDP-Verbindung](#direkte-rdp-verbindung-nur-für-global-admins)). |
| „Linuxmuster VDI-Dienst antwortet nicht." | Der Schulserver liefert keine VDI-Daten. Wenden Sie sich an die Administration. |
| „RDP-Dienst nicht verfügbar." | Der Guacamole-Container läuft nicht oder ist nicht erreichbar. |
| „Guacamole ist nicht korrekt konfiguriert, bitte kontaktiere den Systemadministrator." | In den App-Einstellungen fehlt die URL des Guacamole-Dienstes. |
| „Verbindung konnte nicht hergestellt werden. Bitte überprüfe die Anmeldedaten." | Guacamole hat die Sitzung abgelehnt; meist stimmen die hinterlegten Dienst-Zugangsdaten nicht. |

## Direkte RDP-Verbindung (nur für Global-Admins)

Global-Admins finden in der Aktionsleiste am unteren Rand zusätzlich die Schaltfläche **Verbinden**. Sie öffnet den Dialog **RDP-Verbindung**, in dem Sie im Feld **Host** gezielt eine einzelne Maschine ansprechen, statt einen beliebigen freien Client anzufordern.

Der Host wird gegen die dem Server bekannten VDI-Maschinen geprüft: Adressen außerhalb dieser Liste weist die Plattform ab. Erlaubt sind Buchstaben, Ziffern, Punkt, Bindestrich und Unterstrich bei maximal 253 Zeichen.

Für alle anderen Benutzer enthält die Aktionsleiste ausschließlich **Neu laden**.

## Einrichtung (für Administratoren)

Die Desktop-Bereitstellung wird als native App über den [App-Store](app-store.md) hinzugefügt und anschließend unter **Einstellungen → Desktop-Bereitstellung** konfiguriert.

### App verbinden

1. Fügen Sie im **App-Store** die App **Desktop-Bereitstellung** hinzu.
2. Hinterlegen Sie in den App-Einstellungen die **URL** des Guacamole-Dienstes. Ohne diesen Wert schlägt jeder Verbindungsversuch mit dem Hinweis auf eine fehlende Konfiguration fehl. Eine Änderung greift sofort – die Plattform verwirft die zwischengespeicherte Anmeldung am Dienst beim Speichern.
3. Installieren Sie im Abschnitt **Docker Anwendungen** derselben App den Container `edulution-guacamole` (siehe [Container-Verwaltung](../administration/container-verwaltung.md)).

Die **Proxy-Konfiguration** dieser App pflegt die Plattform selbst: Sie wird beim Installieren des Plugins übernommen und bei neuen Versionen automatisch nachgezogen. Ein Eingriff ist im Normalfall nicht nötig.

Die Zugangsdaten, mit denen sich edulution am Guacamole-Dienst anmeldet, stammen nicht aus der Oberfläche, sondern aus der Server-Umgebung (`EDULUTION_GUACAMOLE_ADMIN_USER` und `EDULUTION_GUACAMOLE_ADMIN_PASSWORD`). Stimmen sie nicht, meldet die App, dass der RDP-Dienst nicht verfügbar ist.

### Virtuelle Maschinen bereitstellen

Die Desktops selbst verwaltet nicht edulution, sondern der Linuxmuster-Server. Die Plattform fragt dort die vorhandenen VDI-Klone ab und fordert bei **Starten** eine freie Maschine an. Ob eine Gruppe einen virtuellen Desktop bereitstellt, ist Teil ihrer `start.conf` – das Datenblatt der Gruppe in der [Linuxmuster-App](../administration/linuxmuster.md) zeigt den Wert an, bearbeiten lässt er sich in dieser Version dort nicht.

Die Namen der VDI-Gruppen auf dem Server bestimmen, welche Karte gefüllt wird: `win11` versorgt die Karte **Windows 11**, `ubuntu` die Karte **Ubuntu**.

### Eigenschaften der RDP-Verbindung

Die Sitzungen werden mit festen Vorgaben aufgebaut, die sich in der Oberfläche nicht ändern lassen: Port `3389`, Authentisierung über **NLA**, Anpassung der Auflösung an die Fenstergröße und aktiviertes Hintergrundbild. Das Zertifikat des Ziels wird dabei nicht geprüft – die Verbindung läuft innerhalb des Schulnetzes zwischen Guacamole und der virtuellen Maschine.

### Auswirkung auf die Container-Verwaltung

Ist diese App konfiguriert und läuft der Guacamole-Container, erscheint in der [Container-Verwaltung](../administration/container-verwaltung.md) zusätzlich die Aktion **Terminal**, mit der Global-Admins eine SSH-Sitzung zum Server öffnen. Diese Funktion nutzt denselben Dienst und steht ohne eingerichtete Desktop-Bereitstellung nicht zur Verfügung.

## Siehe auch

- [App-Store & Anwendungen](app-store.md) – Apps hinzufügen und verwalten
- [Container-Verwaltung](../administration/container-verwaltung.md) – den Guacamole-Container installieren und überwachen
- [Linuxmuster](../administration/linuxmuster.md) – Gruppen und deren `start.conf` am Schulserver
- [Einstellungen](../administration/einstellungen.md) – weitere globale Konfigurationsoptionen
