---
sidebar_custom_props:
  audience: admin
---

# Container-Verwaltung

Die edulution Plattform verwaltet die Docker-Container Ihres Servers direkt aus der Oberfläche heraus: Sie sehen alle Container mit ihrem aktuellen Zustand, installieren die Container zusätzlicher Dienste (Plugins), aktualisieren sie auf das neueste Image und steuern ihren Lebenszyklus – starten, stoppen, neu starten, erzwungen beenden und löschen.

:::caution[Nur Global-Admin]
Die Container-Verwaltung ist ausschließlich für Global-Admins zugänglich. Alle Aufrufe der zugehörigen Schnittstelle sind serverseitig auf diese Rolle beschränkt.
:::

:::warning[Eingriff in den laufenden Betrieb]
Die Aktionen dieser Seite wirken unmittelbar auf die Docker-Container Ihres Servers. Ein gestoppter oder gelöschter Container bedeutet einen Ausfall des betroffenen Dienstes. Führen Sie Änderungen nur mit entsprechendem Docker-Know-how und – bei Updates – möglichst nach einem Snapshot Ihrer VM durch.
:::

## Zugriff

Es gibt zwei Einstiegspunkte:

| Ort | Inhalt |
|-----|--------|
| **Einstellungen → Container** | Alle Container des Servers, mit allen Aktionen |
| **Einstellungen → *App* → Docker Anwendungen** | Nur die Container der jeweiligen App, zum Installieren des zugehörigen Plugins |

Die Gesamtübersicht erreichen Sie als Global-Admin über das **Zahnrad-Symbol** unten im Menü. Der Bereich **Einstellungen** öffnet sich mit der Registerkarte **Container**.

Eine App-eigene Sektion **Docker Anwendungen** besitzen die Apps, deren Dienste als Container betrieben werden:

| App | Container |
|-----|-----------|
| E-Mail | `edulution-mail` |
| Klassenzimmer | `edulution-veyon` |
| Desktop-Bereitstellung | `edulution-guacamole` |
| Lernplattform (Moodle) | `edulution-moodle` |
| VPN-Zugang (WireGuard) | `edulution-wireguard` |
| Dateien | je nach aktivem Editor `edulution-onlyoffice`, `edulution-collabora` oder `edulution-eurooffice` |

## Die Container-Übersicht

Die Tabelle listet **alle** Container des Docker-Hosts – auch gestoppte. Über das Suchfeld (*Suche nach Container-Name*) filtern Sie die Liste, über die Spaltenköpfe sortieren Sie sie.

| Spalte | Beschreibung |
|--------|--------------|
| **Badge** | Farbpunkt: grün = läuft, rot = läuft nicht |
| **Container-Name** | Name des Containers |
| **Image** | Docker-Image samt Tag |
| **Betriebszustand** | *läuft*, *erstellt*, *neu gestartet*, *pausiert*, *gestoppt* oder *tot* |
| **Status** | Laufzeit bzw. Zeitpunkt der letzten Zustandsänderung (z. B. *Up 2 days*) |
| **Port** | Nach außen veröffentlichte Ports |
| **Erstellt am** | Erstellungszeitpunkt des Containers |

Auf kleinen Bildschirmen werden **Image**, **Port**, **Status** und **Erstellt am** ausgeblendet.

:::tip[Die Tabelle aktualisiert sich selbst]
Die edulution Plattform hört auf die Ereignisse des Docker-Daemons. Startet, stoppt oder verschwindet ein Container – auch außerhalb der UI, etwa per SSH –, aktualisiert sich die Tabelle automatisch. Die Schaltfläche **Neu laden** erzwingt zusätzlich ein sofortiges Neuladen.
:::

## Aktionen

Wählen Sie eine oder mehrere Zeilen aus. Die Schaltflächen der Aktionsleiste am unteren Rand erscheinen abhängig vom Zustand der Auswahl:

| Schaltfläche | Sichtbar, wenn … | Wirkung |
|--------------|------------------|---------|
| **Erstellen** | nichts ausgewählt ist | Öffnet die Plugin-Installation |
| **Starten** | kein ausgewählter Container läuft | Startet die Container |
| **Stoppen** | alle ausgewählten Container laufen (oder neu starten) | Stoppt die Container regulär |
| **Neu starten** | mindestens ein Container ausgewählt ist | Startet die Container neu |
| **Beenden** | alle ausgewählten Container laufen (oder neu starten) | Beendet die Container erzwungen (`kill`) |
| **Löschen** | kein ausgewählter Container läuft | Entfernt die Container nach Rückfrage |
| **Update** | mindestens ein Container ausgewählt ist | Lädt das neueste Image und erstellt die Container neu |
| **Neu laden** | immer | Lädt die Tabelle neu |
| **Terminal** | Desktop-Bereitstellung konfiguriert und Guacamole läuft | Öffnet eine SSH-Sitzung zum Server |

Jede Aktion wird mit einer kurzen Meldung bestätigt, etwa *„Container gestartet."* oder *„Container erzwungen gestoppt."*.

:::note[Mehrfachauswahl]
Alle Aktionen außer **Erstellen** und **Terminal** wirken auf die gesamte Auswahl. Die Container werden dabei parallel angesprochen; eine feste Reihenfolge gibt es nicht. Bei voneinander abhängigen Containern gehen Sie daher besser einzeln vor.
:::

### Geschützte Container

Solange ein Container in der edulution-Basisinstallation eingebunden ist, gilt dieser als geschützt. Deshalb werden dann **keine** Aktionsschaltflächen angeboten.

Ein Stoppen oder Löschen dieser Container würde die edulution Plattform selbst außer Betrieb setzen. Die Sperre gilt zusätzlich serverseitig: Auch ein direkter Aufruf der Schnittstelle wird für Start, Stopp, Neustart, Beenden und Löschen abgewiesen.

Enthält die Auswahl einen geschützten Container, verschwindet die gesamte Aktionsleiste – auch für die übrigen ausgewählten Container. Nehmen Sie den geschützten Container aus der Auswahl, um mit den anderen weiterzuarbeiten.

:::tip[Die Basisinstallation aktualisieren]
Für die geschützten Container ist das Update über die Oberfläche nicht vorgesehen. Aktualisieren Sie diese wie unter [Administration → Updates](./administration.md) beschrieben auf der Konsole des Servers.
:::

## Container installieren

Die Container zusätzlicher Dienste werden nicht von Hand angelegt, sondern aus einer gepflegten Compose-Vorlage installiert. Die Vorlagen stammen aus dem Repository [edulution-plugins](https://github.com/edulution-io/edulution-plugins) und werden bei jeder Installation frisch geladen, sodass Sie stets die aktuelle Fassung erhalten.

1. Klicken Sie in **Einstellungen → Container** auf **Erstellen** (Plus-Symbol), ohne dass eine Zeile ausgewählt ist.
2. Wählen Sie im Dialog **Plugin zur Installation auswählen** die gewünschte App bzw. den **Edulution-Manager** aus und bestätigen Sie mit **Auswählen**.
3. Der Installationsdialog *„&lt;App&gt;-Plugins installieren"* öffnet sich. Verlangt die Vorlage Angaben – etwa einen Hostnamen oder ein Token –, füllen Sie die eingeblendeten Felder aus.
4. **Installieren** startet den Vorgang. Das Textfeld zeigt den Fortschritt live an: *Docker Image wird abgerufen …*, *Docker Container wird erstellt …*, abschließend *Container erfolgreich erstellt.*
5. Schließen Sie den Dialog mit **Schließen**.

Alternativ starten Sie die Installation direkt aus der App: **Einstellungen → *App* → Docker Anwendungen → Installieren**. Der Ablauf ist identisch, die App ist dabei bereits vorausgewählt.

### Abgefragte Werte

Welche Felder erscheinen, hängt von der Vorlage ab. Gebräuchlich sind:

| Feld | Erläuterung |
|------|-------------|
| **Installations-Token** | Token aus dem Edulution-Manager (nur beim Edulution-Manager-Agent) |
| **Hostname** | Hostname des Mailservers, kann von der edulution-Domain abweichen |
| **IP-Netzwerk**, **Adresse**, **DNS-Server** | Netzwerkparameter der WireGuard-Installation |
| **WWW-Root**, **Admin E-Mail**, **Admin Passwort**, **Website-Name** | Grunddaten der Moodle-Installation |

Zugangsdaten, die edulution bereits kennt – etwa API-Schlüssel der App-Konfiguration –, werden automatisch eingesetzt und nicht abgefragt. Passwörter und Schlüssel, die nur der Container selbst benötigt (z. B. die Datenbank-Passwörter von Moodle), erzeugt edulution bei der ersten Installation und verwendet sie bei einer erneuten Installation unverändert weiter.

### Wo die Konfiguration abgelegt wird

Nach erfolgreicher Installation speichert die API die verwendete Compose-Datei samt der eingesetzten Werte auf dem Server:

```text title="Ablageort der Container-Konfiguration"
/srv/docker/edulution-ui/data/apps/<app>/<container-name>/docker-compose.yml
```

Diese Datei ist die Referenz für spätere Installationen: Aus ihr werden bereits erzeugte Geheimnisse wieder eingelesen, sodass eine Neuinstallation nicht ungewollt neue Passwörter setzt.

:::warning[Enthält Zugangsdaten]
Die abgelegte `docker-compose.yml` enthält die eingesetzten Passwörter und Token im Klartext. Beziehen Sie das Verzeichnis in Ihre Sicherung ein und behandeln Sie es wie andere Geheimnisse Ihres Servers.
:::

## Den Edulution-Manager-Agent installieren

Der **Edulution-Manager-Agent** (`edulution-manager-agent`) verbindet Ihre Installation mit dem zentralen Edulution-Manager. Er wird wie ein Plugin installiert, erscheint in der Auswahlliste aber nicht als App, sondern als eigener Eintrag **Edulution-Manager**.

1. **Einstellungen → Container → Erstellen**
2. Im Dialog **Plugin zur Installation auswählen** den Eintrag **Edulution-Manager** wählen und mit **Auswählen** bestätigen.
3. Im Feld **Installations-Token** den Token eintragen, der zuvor im Edulution-Manager erzeugt wurde.
4. Mit **Installieren** bestätigen und den Fortschritt abwarten.

Nach der Installation erscheint `edulution-manager-agent` wie jeder andere Container in der Übersicht und lässt sich dort auch starten, stoppen und aktualisieren.

:::note[Der Agent aktualisiert sich selbst]
Der Agent kann sein eigenes Update anstoßen, ohne dass sich jemand anmeldet. edulution nimmt diese Anforderung nur an, wenn sie tatsächlich aus dem Container `edulution-manager-agent` stammt: Die API ermittelt zur anfragenden IP-Adresse den zugehörigen Container und weist die Anforderung andernfalls ab. Ein entsprechender Versuch wird protokolliert.
:::

## Container aktualisieren

Die Schaltfläche **Update** bringt die ausgewählten Container auf das neueste Image:

1. Das im Container hinterlegte Image wird neu geladen (`pull`).
2. Bringt der Vorgang keine neue Fassung, endet er mit dem Hinweis *„&lt;Container&gt; ist bereits aktuell."* – der Container läuft unverändert weiter.
3. Andernfalls wird der Container gestoppt, entfernt und mit derselben Konfiguration – Umgebungsvariablen, Volumes, Ports, Netzwerke – aus dem neuen Image neu erstellt und gestartet. Abschließend erscheint *„&lt;Container&gt; erfolgreich aktualisiert."*

:::warning[Der Container wird ersetzt, nicht verändert]
Beim Update wird der Container gelöscht und neu angelegt. Daten in eingebundenen Volumes bleiben erhalten; Dateien, die ausschließlich im Dateisystem des Containers liegen, gehen verloren. Der Dienst ist während des Vorgangs kurz nicht erreichbar.
:::

## Container löschen

1. Wählen Sie die – gestoppten – Container aus.
2. Klicken Sie auf **Löschen**.
3. Der Dialog **Container löschen** nennt die betroffenen Container und weist darauf hin, dass sich der Vorgang nicht rückgängig machen lässt. Bestätigen Sie ihn.

Gelöscht wird nur der Container selbst. Volumes und die abgelegte `docker-compose.yml` bleiben bestehen, sodass sich der Dienst über **Erstellen** mit seinen bisherigen Daten wiederherstellen lässt.

## Terminal (SSH)

Ist die App **Desktop-Bereitstellung** konfiguriert und läuft der Container `edulution-guacamole`, erscheint in der Aktionsleiste zusätzlich **Terminal**. Darüber öffnen Sie eine SSH-Sitzung zum Server:

1. **Terminal** anklicken.
2. Im Dialog **SSH Anmeldedaten** Benutzername und Passwort des Servers eingeben.
3. Mit **Verbinden** bestätigen – die Sitzung öffnet sich in einem Fenster innerhalb der edulution Plattform.

Fehlt die Schaltfläche, prüfen Sie, ob unter **Einstellungen → Desktop-Bereitstellung** eine URL hinterlegt ist und ob der Guacamole-Container läuft – siehe [edulution VDI](../../edulution-vdi/index.md#einrichtung-für-administratoren).

## Fehlerbehebung

| Meldung | Ursache und Abhilfe |
|---------|---------------------|
| *Docker-Verbindung fehlgeschlagen* | Die API erreicht den Docker-Socket nicht. Prüfen Sie, ob `/var/run/docker.sock` in den Container `edulution-api` eingebunden ist. |
| *Docker Image konnte nicht gefunden werden* | Das Image ließ sich nicht laden. Prüfen Sie die Internetverbindung des Servers und den Zugriff auf die Registry. |
| *Docker Container konnte nicht erstellt werden* | Die Installation ist fehlgeschlagen – häufig, weil ein Name oder Port bereits belegt ist. Der Fortschrittsbereich des Dialogs nennt den letzten erfolgreichen Schritt. |
| *Docker Befehl konnte nicht ausgeführt werden* | Die Aktion wurde abgewiesen. Bei einem [geschützten Container](#geschützte-container) ist das beabsichtigt. |
| *Docker Container konnte nicht aktualisiert werden* | Das Update wurde abgebrochen. Prüfen Sie über **Neu laden**, ob der Container läuft, und starten Sie ihn andernfalls neu. |

Zusätzliche Hinweise finden Sie im Log des API-Containers:

```bash title="Log des API-Containers ansehen"
docker logs -f edulution-api
```

## Siehe auch

- [Einstellungen](./einstellungen.md) – die übrigen Bereiche der globalen Einstellungen
- [Administration](./administration.md) – Updates, Ports und allgemeine Admin-Aufgaben
- [Passwortänderung einrichten](./passwort-aenderung.md#keycloak-administrationsoberfläche-aufrufen) – Zugang zur Keycloak-Administrationsoberfläche
- [Satelliten](../../edulution-satellite/verwaltung.md) – Container an entfernten Standorten
