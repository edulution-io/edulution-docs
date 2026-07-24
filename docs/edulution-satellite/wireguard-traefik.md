---
sidebar_position: 4
title: WireGuard-Server über Traefik
description: Den WireGuard-Server der edulution-Instanz per UDP über Traefik erreichbar machen
---

# WireGuard-Server über Traefik

Damit sich Satelliten verbinden können – und damit zentrale Netze getunnelt werden – muss der WireGuard-Server (Container `edulution-wireguard`) von außen per **UDP** erreichbar sein. In edulution läuft das über **Traefik**: Ein UDP-Entrypoint leitet die Pakete an den WireGuard-Container weiter.

:::info[Einmalig pro edulution-Server]
Die folgenden Schritte sind einmalig pro edulution-Server einzurichten, nicht pro Satellit.
:::

## 1. Traefik-Entrypoint anlegen

In der statischen Konfiguration `/srv/docker/edulution-ui/traefik.yml`:

```yaml
entryPoints:
  # … web / websecure …
  wireguard:
    address: ':443/udp'
```

## 2. UDP-Port veröffentlichen

In der `docker-compose.yml` beim Service `edu-traefik`:

```yaml
ports:
  - 80:80
  - 443:443
  - 443:443/udp # ← WireGuard (UDP)
```

:::warning[`- 443:443` veröffentlicht nur TCP]
Docker veröffentlicht standardmäßig ausschließlich TCP. Die zusätzliche Zeile mit `/udp` ist zwingend erforderlich – sonst erreicht kein WireGuard-Paket den Server.
:::

Anschließend Traefik neu starten:

```bash
docker compose up -d edu-traefik
```

## 3. Dynamischen UDP-Router hinterlegen

In `/srv/docker/edulution-ui/data/traefik/config/edulution-wireguard.yml` – diese Datei wird von Traefik automatisch neu eingelesen:

```yaml
udp:
  routers:
    wg-router:
      entryPoints:
        - wireguard
      service: wg-service
  services:
    wg-service:
      loadBalancer:
        servers:
          - address: 'edulution-wireguard:443'
```

## 4. WireGuard-Container korrekt konfigurieren

Die Werte des Containers stammen aus dem Dialog **WireGuard-Plugins installieren** (siehe [Einrichtung mit edulution, Schritt 2](./einrichtung-mit-edulution.md#2-wireguard-container-starten)) und werden nicht von Hand gesetzt. Entscheidend ist:

- Das Feld **Adresse** muss die **öffentliche Adresse oder den Hostnamen** des edulution-Servers enthalten – **nicht** die interne VPN-IP. Aus diesem Wert wird der Endpunkt gebildet, den die Peers erhalten.
- Der Port ist optional und steht standardmäßig auf **443** – dem UDP-Port aus den Schritten 1 und 2. Er muss daher in der Regel nicht gesetzt werden.

![Feld „Adresse" enthält die öffentliche Server-Adresse](/img/satellite/wireguard-adresse-oeffentlich.png)

## 5. Firewall freigeben

Geben Sie eingehendes **UDP 443** auf den edulution-Server frei. Bei Cloud-Hosts muss die Freigabe zusätzlich **in der Security-Group des Providers** erfolgen, nicht nur auf dem Host. Ohne diese Freigabe erreichen die Handshake-Pakete den Server nie und der Peer bleibt *Disconnected*.

## Kontrolle

Auf dem edulution-Server zeigt

```bash
docker exec edulution-wireguard wg show
```

beim verbundenen Peer einen aktuellen *latest handshake*. In der Oberfläche steht der Peer unter **Einstellungen → WireGuard → WireGuard Peers** auf **Connected**.

![WireGuard-Peer verbunden](/img/satellite/wireguard-peer-verbunden.png)
