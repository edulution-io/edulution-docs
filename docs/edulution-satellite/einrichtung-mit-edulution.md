---
sidebar_position: 2
title: Einrichtung mit edulution
description: Schritt-für-Schritt-Anleitung zur Inbetriebnahme eines Satelliten mit zentraler Verwaltung über die edulution UI
---

# Einrichtung mit edulution

Diese Anleitung führt in der richtigen Reihenfolge durch die Erstinbetriebnahme eines edulution Satellite mit zentraler Verwaltung: Apps in edulution installieren → WireGuard-Container starten → Seriennummer hinterlegen → Gerät anschließen → automatische Bereitstellung → Netze und VLANs anlegen.

:::info[Markierungen in den Screenshots]
Rote Rechtecke und Pfeile markieren die Stelle, um die es im jeweiligen Schritt geht.
:::

## Auf einen Blick

```text
1. In edulution:   Apps installieren (WireGuard + Satellites)
2. In edulution:   WireGuard-Docker-Container starten
3. In edulution:   Seriennummer des Geräts hinterlegen
4. Am Gerät:       ether1 = WAN (Internet) anschließen, Strom an
5. Automatisch:    Satellit provisioniert sich selbst (Auto-Deploy) → Passwort setzen
6. In edulution:   Satellit bestätigen (Akzeptieren) → online
7. Netze anlegen:  lokale Netze und/oder zentrale Netze als VLAN über WireGuard
```

**Voraussetzungen**

- Eine laufende edulution-Instanz mit Global-Admin-Zugang.
- Ein edulution Satellite mit installierter Satelliten-Software (ab Werk vorinstalliert).
- Die **Seriennummer** des Geräts (Aufkleber bzw. QR-Sticker am Gehäuse).

## 1. Apps in edulution installieren

Für den Satelliten-Betrieb werden zwei Apps benötigt. Beide fügen Sie über den **App Store** hinzu: **Einstellungen (⚙) → App Store**.

![App Store mit WireGuard und Satellites](/img/satellite/appstore-uebersicht.png)

Klicken Sie je App auf die Kachel – sie wird hervorgehoben – und anschließend auf **Hinzufügen**.

![WireGuard-Kachel auswählen und hinzufügen](/img/satellite/appstore-app-hinzufuegen.png)

Installieren Sie auf diese Weise nacheinander **beide** Apps:

- **Satellites** – die eigentliche Satelliten-Verwaltung.
- **WireGuard** – stellt den VPN-Server bereit, über den zentrale Netze getunnelt werden.

:::note[WireGuard nur für zentrale Netze]
Die Verwaltung des Satelliten läuft über eine **WebSocket-Verbindung** – dafür wird kein Tunnel benötigt. WireGuard brauchen Sie erst für die Funktion **Zentrales Netzwerk** in [Schritt 7](#zentrale-netze-über-wireguard). Wenn Sie ausschließlich lokale Netze am Satelliten betreiben, können Sie die Schritte 2 und 6 (Kontrolle des Peers) überspringen.
:::

:::note[Nur einmal pro Instanz]
Dieser Schritt ist einmalig pro edulution-Installation nötig. Sind die Apps bereits vorhanden, fahren Sie direkt mit [Schritt 3](#3-seriennummer-in-edulution-hinterlegen) fort.
:::

## 2. WireGuard-Container starten

Die WireGuard-App benötigt einen laufenden **Docker-Container** als VPN-Server. Öffnen Sie dazu **Einstellungen → WireGuard**. Die Konfigurationsseite zeigt unter anderem die **URL**, den automatisch erzeugten **API-Schlüssel** und den Abschnitt **Docker Anwendungen**.

![WireGuard-App-Konfiguration](/img/satellite/wireguard-app-konfiguration.png)

Klicken Sie im Abschnitt **Docker Anwendungen** auf das **Plus-Symbol**. Es öffnet sich der Dialog **WireGuard-Plugins installieren** mit drei Feldern:

| Feld | Bedeutung | Beispiel |
|---|---|---|
| **IP-Netzwerk** | internes Netz des VPN (CIDR) | `10.250.255.0/24` |
| **Adresse** | öffentliche Adresse des edulution-Servers | `vpn.schule.de` |
| **DNS-Server** | DNS für die VPN-Verbindung | `9.9.9.9` |

Klicken Sie anschließend auf **Installieren** – der Container wird geladen und gestartet.

![Docker-Anwendung WireGuard installieren](/img/satellite/wireguard-container-installieren.png)

:::warning[Feld „Adresse" ist die öffentliche Adresse]
Tragen Sie unter **Adresse** die von außen erreichbare Adresse bzw. den Hostnamen des edulution-Servers ein – **nicht** die interne VPN-IP. Aus diesem Wert wird der Endpunkt gebildet, den die Satelliten später ansprechen. Details unter [WireGuard-Server über Traefik](./wireguard-traefik.md).
:::

Nach kurzer Zeit läuft der Container. Prüfen können Sie das unter **Einstellungen → Allgemein → Container-Übersicht**: `edulution-wireguard` steht auf **läuft**.

![WireGuard-Container läuft](/img/satellite/wireguard-container-laeuft.png)

:::warning[UDP-Erreichbarkeit prüfen]
Der WireGuard-Server muss von außen per **UDP** erreichbar sein, sonst kommt später kein Tunnel zustande. Diese Vorbereitung ist einmalig pro edulution-Server nötig – siehe [WireGuard-Server über Traefik](./wireguard-traefik.md).
:::

## 3. Seriennummer in edulution hinterlegen

Öffnen Sie **Einstellungen → Satellites**. Der Abschnitt **Verbundene Satellites** ist zunächst leer.

![Verbundene Satellites – noch leer](/img/satellite/satellites-liste-leer.png)

Klicken Sie auf das **Plus-Symbol**, tragen Sie die **Seriennummer** des Geräts ein und bestätigen Sie mit **Hinzufügen**.

![Seriennummer eintragen](/img/satellite/satellit-seriennummer-hinzufuegen.png)

Damit ist das Gerät in edulution vorangemeldet. Sobald es später online geht, wird es automatisch dieser Anmeldung zugeordnet – das ist die Grundlage für den **Auto-Deploy** in Schritt 5.

## 4. Gerät anschließen

1. Verbinden Sie **`ether1` (WAN)** mit dem Internet-Uplink (DHCP). Das Gerät benötigt Internet, um seine Konfiguration und die Container-Images zu laden.
2. Die **übrigen LAN-Ports** bilden die interne Bridge (`bridge-lan`) – hier kommen später die Endgeräte und VLANs heraus.
3. Schließen Sie das Gerät an den **Strom** an. Es bootet und startet seine drei Container. Nach ein bis zwei Minuten ist die Oberfläche erreichbar.

Für den Zugang zur Oberfläche verbinden Sie einen Laptop mit dem Management-Port **`ether3`** und öffnen **`https://192.168.99.1/`**. Details dazu unter [Anschluss und Zugang zum Gerät](./index.md#anschluss-und-zugang-zum-gerät).

## 5. Auto-Deploy und Passwort setzen

Beim ersten Aufruf der Oberfläche startet der **Setup-Wizard**. Weil die Seriennummer in Schritt 3 hinterlegt wurde, **provisioniert sich der Satellit automatisch**: Er lädt seine Zugangsdaten, meldet sich bei edulution an und baut – sofern ein WireGuard-Server eingerichtet ist – zusätzlich den Tunnel auf. Der Wizard bestätigt dies mit einem grünen Hinweis und fragt nur noch nach einem **Passwort** für die lokale Administration.

| Auto-Deploy: automatisch gekoppelt | Passwort setzen → Finish |
|---|---|
| ![Auto-Deploy](/img/satellite/wizard-auto-deploy.png) | ![Passwort setzen](/img/satellite/wizard-passwort-setzen.png) |

Nach **Finish** läuft ein kurzes Setup. Melden Sie sich anschließend mit dem gesetzten Passwort an – Sie landen auf dem **Dashboard**.

![Dashboard des Satelliten](/img/satellite/satellit-dashboard.png)

## 6. Satellit in edulution bestätigen

Zurück in edulution unter **Einstellungen → Satellites → Verbundene Satellites** erscheint das Gerät jetzt als **Online**, zunächst im Status *Ausstehend*. Bestätigen Sie es mit **Akzeptieren**.

![Satellit akzeptieren](/img/satellite/satellit-akzeptieren.png)

edulution überträgt dabei die endgültige WireGuard-Konfiguration an den Satelliten. Danach ist er **akzeptiert** und voll verwaltbar; die Schaltflächen **Zentrales Netzwerk** und **Entkoppeln** sowie die Tunnel-Details werden angezeigt.

![Satellit akzeptiert](/img/satellite/satellit-akzeptiert.png)

**Kontrolle:** Unter **Einstellungen → WireGuard → WireGuard Peers** steht der Peer `sat-<seriennummer>` auf **Connected** mit aktuellem Zeitpunkt unter *Letzter Handshake*.

![WireGuard-Peer verbunden](/img/satellite/wireguard-peer-verbunden.png)

:::warning[Peer bleibt „Disconnected"?]
Zeigt der Peer dauerhaft *Disconnected* bzw. keinen Handshake, steht der WireGuard-Tunnel nicht. Ursache ist fast immer die Erreichbarkeit des Servers – siehe [WireGuard-Server über Traefik](./wireguard-traefik.md). Der Satellit selbst bleibt davon unberührt online und verwaltbar; ohne Tunnel funktionieren lediglich die **zentralen Netze** aus Schritt 7 nicht.
:::

## 7. Netze und VLANs anlegen

Es gibt zwei Arten von Netzen; in der Regel benötigen Sie beide.

### Lokale Netze am Satelliten

Für Netze, die der Satellit selbst bereitstellt (eigenes DHCP und Routing), öffnen Sie am Gerät **Networks → Add Network** und geben Name, Eltern-Interface (`bridge-lan`), VLAN-ID, Netz, Maske und Satelliten-IP an. Bestätigen Sie mit **Create**.

| Übersicht | Dialog „Create Network" | Angelegtes Netz |
|---|---|---|
| ![Netzwerke](/img/satellite/satellit-netzwerke.png) | ![Netzwerk anlegen](/img/satellite/satellit-netzwerk-anlegen.png) | ![Netzwerk angelegt](/img/satellite/satellit-netzwerk-angelegt.png) |

### Zentrale Netze über WireGuard

Um ein **zentrales Netz** – etwa das linuxmuster-Netz – über den WireGuard-Tunnel an den LAN-Ports des Satelliten bereitzustellen, öffnen Sie in edulution am Satelliten die Schaltfläche **Zentrales Netzwerk**.

![Dialog „Zentrales Netzwerk"](/img/satellite/zentrales-netzwerk-dialog.png)

Legen Sie über **Netz hinzufügen** ein oder mehrere Netze an. **Jedes Netz wird auf einem eigenen VLAN** an den LAN-Ports ausgegeben, zum Beispiel „Lehrer VLAN 10" und „Schüler VLAN 20". Je Netz geben Sie an:

| Feld | Bedeutung | Beispiel |
|---|---|---|
| **VLAN-ID** | VLAN, auf dem das Netz ausgegeben wird | `10` |
| **Client-Subnetz** | Netz für die Endgeräte (CIDR) | `10.0.1.0/24` |
| **Gateway-IP** | Adresse des Satelliten in diesem Netz | `10.0.1.1` |
| **DHCP-Server** | zentraler DHCP-Server (über den Tunnel) | `10.0.0.1` |
| **DNS-Server** | optional; leer = wie DHCP-Server | `10.0.0.1` |
| **Zentrale Subnetze** | über WireGuard geroutete Netze | `10.0.0.0/24` |

:::note[WAN und LAN sind fest vorgegeben]
WAN-Port (`ether1`) und LAN-Bridge (`bridge-lan`) werden bei der Installation festgelegt und sind daher **nicht** Teil dieser Konfiguration.
:::

Mit **Anwenden** richtet edulution automatisch alle drei Seiten ein: den Eintrag am zentralen DHCP-Server (linuxmuster), die Rückrouten am WireGuard-Server sowie VLAN und DHCP-Relay am Satelliten. Der Status wechselt auf **Aktiv**.

![Zentrales Netzwerk aktiv](/img/satellite/zentrales-netzwerk-aktiv.png)

Am Satelliten entsteht je Netz ein Interface `cn-vlan-<id>` auf `bridge-lan` mit der Gateway-IP sowie ein DHCP-Relay (`cn-relay-<id>`) zum zentralen Server; der DHCP-Verkehr läuft über den WireGuard-Tunnel. Über **Deaktivieren** wird alles wieder rückgängig gemacht.

:::warning[Voraussetzungen für zentrale Netze]
Der WireGuard-Tunnel muss stehen (Peer *Connected*, siehe Schritt 6) und der zentrale Server benötigt **linuxmuster-api ab Version 7.4.6** – erst ab dort existiert der benötigte Subnets-Endpunkt.
:::

## 8. Dienste starten (optional)

Zusätzliche Dienste wie mDNS, RADIUS, KMS, File Server oder Proxy laufen als eigene Container am Satelliten. Beispiel **KMS**: Dienst öffnen → Netzwerk wählen → **Save Configuration** → **Start**.

| Dienst-Konfiguration | Laufende Container |
|---|---|
| ![KMS-Konfiguration](/img/satellite/satellit-dienst-kms.png) | ![Container-Übersicht](/img/satellite/satellit-container.png) |

## Passwort ändern

Das lokale Admin-Passwort ändern Sie am Satelliten unter **Settings → Passwort**: aktuelles Passwort, neues Passwort und Bestätigung eingeben, dann **Update Password**. Danach melden Sie sich mit dem neuen Passwort an.

| Passwort ändern | Bestätigung |
|---|---|
| ![Passwort ändern](/img/satellite/satellit-passwort-aendern.png) | ![Passwort geändert](/img/satellite/satellit-passwort-geaendert.png) |

Unter **Settings** lässt sich außerdem über **Unpair & Reset** die Verbindung zu edulution trennen; der Satellit startet danach wieder mit dem Setup-Wizard.

## Satellit wieder entfernen

Zum vollständigen Entfernen räumen Sie in edulution in umgekehrter Reihenfolge auf. Beim Löschen erscheinen jeweils Bestätigungs-Dialoge.

1. **Satellit entfernen:** **Einstellungen → Satellites** → am Satelliten auf **Entfernen** bzw. **Entkoppeln**.

2. **WireGuard-Container löschen:** **Einstellungen → Allgemein → Container-Übersicht** → Container `edulution-wireguard` auswählen → **stoppen** → **Löschen** → im Dialog bestätigen.

   ![Container löschen – Bestätigung](/img/satellite/container-loeschen.png)

3. **App löschen:** auf der App-Konfigurationsseite (zum Beispiel **Satellites**) oben rechts auf **Löschen** → im Dialog bestätigen.

   ![App löschen – Bestätigung](/img/satellite/app-loeschen.png)

:::note[Zurücksetzen am Gerät selbst]
Das Entfernen der Container, Netze und Firewall-Regeln **auf dem Gerät** erfolgt über das Uninstall-Skript des Satelliten und ist nicht Teil dieser Anleitung.
:::

## Es klappt nicht?

| Symptom | Prüfen Sie |
|---|---|
| Satellit erscheint nicht in edulution | Internet an `ether1`? Seriennummer korrekt hinterlegt (Schritt 3)? Läuft der WireGuard-Container (Schritt 2)? |
| Status bleibt *offline*, WireGuard-Peer *Disconnected* | Erreichbarkeit des Servers per UDP – siehe [WireGuard-Server über Traefik](./wireguard-traefik.md) |
| **Zentrales Netzwerk → Anwenden** schlägt fehl | linuxmuster-api ab Version 7.4.6 erforderlich (Subnets-Endpunkt) |
| Kein Zugriff auf das Gerät | Laptop an **`ether3`**, dann **`https://192.168.99.1/`** aufrufen |
