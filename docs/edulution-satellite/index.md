---
sidebar_position: 1
title: edulution Satellite
description: Übersicht über den edulution Satellite, seine Betriebsarten und den Zugang zum Gerät
---

# edulution Satellite

Der **edulution Satellite** ist eine Appliance für entfernte Standorte – als MikroTik-Hardware oder als virtuelle Maschine. Er stellt vor Ort Netzwerke (VLANs), DHCP und Dienste wie mDNS-Repeater, RADIUS, KMS oder File Server bereit und lässt sich wahlweise **zentral aus der edulution UI** oder **eigenständig über seine lokale Oberfläche** verwalten.

Technisch läuft der Satellit als drei Container (Datenbank, API, UI) direkt auf dem Gerät. Im zentral verwalteten Betrieb verbindet er sich über einen **WireGuard-Tunnel** mit Ihrer edulution-Instanz.

```text
[ Satellit: Datenbank + API + UI ] --WireGuard--> [ edulution UI ] --> [ linuxmuster-Server ]
    LAN-Ports / VLANs vor Ort                      App „Satellites"       zentrales DHCP/DNS
```

![Dashboard eines Satelliten](/img/satellite/satellit-dashboard.png)

## Welche Betriebsart ist die richtige?

| | **Mit edulution** | **Standalone** |
|---|---|---|
| Verwaltung | zentral aus der edulution UI | lokal auf dem Satelliten |
| Verbindung zur Zentrale | WebSocket | – |
| WireGuard-Tunnel | nur für zentrale Netze | nicht nötig |
| Zentrale Netze (linuxmuster) über VLAN | ✔ | ✘ |
| Einrichtung | [Einrichtung mit edulution](./einrichtung-mit-edulution.md) | [Standalone einrichten](./standalone.md) |

:::note[Wofür WireGuard gebraucht wird]
Die zentrale Verwaltung läuft über die **WebSocket-Verbindung** zwischen Satellit und edulution – dafür ist kein Tunnel nötig. Der **WireGuard-Tunnel** kommt erst ins Spiel, wenn Sie zentrale bzw. linuxmuster-Netze über die Funktion **Zentrales Netzwerk** an den LAN-Ports des Satelliten bereitstellen.
:::

:::tip[Später wechselbar]
Ein standalone eingerichteter Satellit lässt sich nachträglich an edulution anbinden: **Settings → Unpair & Reset**, danach den Wizard erneut durchlaufen und den Modus **Edulution** wählen – siehe [Später an edulution anbinden](./standalone.md#später-an-edulution-anbinden).
:::

## Voraussetzungen

- Ein **edulution Satellite** mit installierter Satelliten-Software. Hardware-Appliances werden ab Werk vorinstalliert ausgeliefert.
- Die **Seriennummer** des Geräts (Aufkleber bzw. QR-Sticker am Gehäuse) – nur für den Betrieb mit edulution.
- Für den Betrieb mit edulution zusätzlich: eine laufende edulution-Instanz mit Global-Admin-Zugang.
- Nur wenn Sie **zentrale Netze** nutzen möchten: ein von außen per UDP erreichbarer WireGuard-Server (siehe [WireGuard-Server über Traefik](./wireguard-traefik.md)).

## Anschluss und Zugang zum Gerät

Bei der MikroTik-Appliance sind die Ports fest belegt:

| Port | Funktion |
|---|---|
| `ether1` | **WAN** – Uplink ins Internet (DHCP). Wird für Konfiguration und Container-Images benötigt. |
| `ether3` | **Management** – fester Zugang mit eigener IP `192.168.99.1/24` und DHCP-Server. |
| übrige Ports | **LAN-Bridge** (`bridge-lan`) – hier kommen die Endgeräte bzw. VLANs heraus. |

Zum Aufrufen der Oberfläche einen Laptop an **`ether3`** anschließen (er erhält automatisch eine Adresse aus `192.168.99.0/24`) und im Browser **`https://192.168.99.1/`** öffnen. Die Router-Oberfläche WebFig liegt auf **`http://192.168.99.1:8080/`**.

Dieser Zugang ist unabhängig von der WAN-IP und vom Client-Netz der übrigen Ports getrennt. Alternativ ist die Oberfläche auch über die WAN-Adresse von `ether1` erreichbar (`https://<wan-ip>/`).

:::note[Satellit als virtuelle Maschine]
Läuft der Satellit als VM, entfällt der Management-Port. Der Zugang erfolgt dann über IP oder Hostname der VM (`https://<vm-ip>/`). Alles Weitere ist identisch – Details unter [Standalone einrichten](./standalone.md#satellit-als-virtuelle-maschine).
:::

## Weiter geht es hier

- [Einrichtung mit edulution](./einrichtung-mit-edulution.md) – Apps installieren, WireGuard starten, Gerät koppeln, zentrale Netze bereitstellen.
- [Standalone einrichten](./standalone.md) – Satellit ohne zentrale edulution-Instanz in Betrieb nehmen.
- [WireGuard-Server über Traefik](./wireguard-traefik.md) – einmalige Vorbereitung auf dem edulution-Server.
- [Satelliten verwalten](../edulution-ui/administration/satelliten.md) – laufender Betrieb in der edulution UI.
