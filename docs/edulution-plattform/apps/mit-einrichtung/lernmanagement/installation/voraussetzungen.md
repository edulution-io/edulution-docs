---
sidebar_position: 1
title: Voraussetzungen
sidebar_custom_props:
  audience: admin
---

# Voraussetzungen

Bevor Sie edulution Moodle installieren, stellen Sie sicher, dass alle Voraussetzungen erfüllt sind.

## Systemvoraussetzungen

### Hardware

| Komponente | Minimum | Empfohlen | Für große Schulen |
|------------|---------|-----------|-------------------|
| **CPU** | 2 Kerne | 4 Kerne | 8+ Kerne |
| **RAM** | 4 GB | 8 GB | 16+ GB |
| **Speicher** | 20 GB SSD | 50 GB SSD | 100+ GB SSD |
| **Netzwerk** | 100 Mbit/s | 1 Gbit/s | 1 Gbit/s |

:::tip Empfehlung
Für eine Schule mit bis zu 500 Benutzern empfehlen wir mindestens 4 CPU-Kerne und 8 GB RAM.
:::

### Software

| Software | Version | Hinweis |
|----------|---------|---------|
| **Docker** | 20.10+ | [Installationsanleitung](https://docs.docker.com/engine/install/) |
| **Docker Compose** | 2.0+ | Meist in Docker Desktop enthalten |
| **Git** | 2.0+ | Für das Klonen des Repositories |

## Netzwerk-Voraussetzungen

### Ports

Folgende Ports müssen verfügbar sein:

| Port | Dienst | Erforderlich |
|------|--------|--------------|
| **80** | HTTP (Redirect) | Ja |
| **443** | HTTPS | Ja |
| **3306** | MariaDB | Nur intern |
| **6379** | Redis | Nur intern |

### DNS

Sie benötigen einen DNS-Eintrag für Ihre Moodle-Installation:

```
moodle.ihre-schule.de    A    <Server-IP>
```

Oder bei Nutzung innerhalb von edulution:

```
ihre-schule.edulution.io    A    <Server-IP>
```

### Firewall

Stellen Sie sicher, dass folgende Verbindungen möglich sind:

| Richtung | Ziel | Port | Zweck |
|----------|------|------|-------|
| Ausgehend | Keycloak | 443 | OAuth2/API |
| Ausgehend | moodle.org | 443 | Plugin-Downloads |
| Ausgehend | github.com | 443 | Moodle-Updates |
| Eingehend | Clients | 443 | Webzugriff |

## Keycloak-Voraussetzungen

edulution Moodle benötigt eine funktionierende Keycloak-Instanz.

### Bei edulution-Installation

Wenn Sie bereits edulution nutzen, ist Keycloak bereits konfiguriert. Sie benötigen:

- Die Keycloak-URL (z.B. `https://sso.ihre-schule.edulution.io`)
- Einen Service-Account mit Lesezugriff auf Benutzer und Gruppen

### Bei Standalone-Installation

Für eine eigenständige Installation benötigen Sie:

1. **Keycloak-Instanz** (Version 20+)
2. **Realm** für Ihre Schule
3. **Client** für Moodle mit folgenden Einstellungen:

```yaml
Client ID: moodle
Client Protocol: openid-connect
Access Type: confidential
Valid Redirect URIs: https://moodle.ihre-schule.de/*
Web Origins: https://moodle.ihre-schule.de
```

4. **Service Account** für die Synchronisation:

```yaml
Client ID: moodle-sync
Client Protocol: openid-connect
Access Type: confidential
Service Account Enabled: ON
Authorization Enabled: OFF
```

Mit folgenden Rollen:
- `view-users`
- `view-groups`
- `query-users`
- `query-groups`

## Datenbankoptionen

### Integrierte MariaDB (Standard)

Die Standard-Installation enthält eine MariaDB-Instanz. Keine weitere Konfiguration erforderlich.

### Externe Datenbank

Bei Nutzung einer externen Datenbank:

| Parameter | Beschreibung |
|-----------|--------------|
| **Typ** | MariaDB 10.6+ oder MySQL 8.0+ |
| **Zeichensatz** | `utf8mb4` |
| **Collation** | `utf8mb4_unicode_ci` |
| **Max. Verbindungen** | Mindestens 100 |

:::warning Wichtig
PostgreSQL wird derzeit nicht unterstützt. Moodle funktioniert am besten mit MariaDB.
:::

## Speicheroptionen

### Lokaler Speicher (Standard)

Daten werden standardmäßig unter `/srv/docker/moodle/` gespeichert:

```
/srv/docker/moodle/
├── data/           # Moodle-Daten (moodledata)
├── db/             # Datenbank-Dateien
├── config/         # Konfigurationsdateien
├── backups/        # Automatische Backups
└── logs/           # Log-Dateien
```

### Netzwerkspeicher

Für Cluster-Setups kann ein NFS-Share verwendet werden:

```yaml
volumes:
  moodle_data:
    driver: local
    driver_opts:
      type: nfs
      o: addr=nfs-server.local,rw
      device: ":/exports/moodle"
```

## Checkliste

Vor der Installation:

- [ ] Server mit ausreichend Ressourcen bereitgestellt
- [ ] Docker und Docker Compose installiert
- [ ] DNS-Eintrag konfiguriert
- [ ] Firewall-Regeln eingerichtet
- [ ] Keycloak-Zugang vorhanden
- [ ] SSL-Zertifikat oder Let's Encrypt möglich
- [ ] Backup-Speicher eingeplant

## Nächste Schritte

Wenn alle Voraussetzungen erfüllt sind, können Sie mit der Installation fortfahren:

- [Schnellstart](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/installation/schnellstart) - Schnelle Installation in 10 Minuten
- [Detaillierte Installation](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/installation/detailliert) - Ausführliche Anleitung
- [Migration](/docs/edulution-plattform/apps/mit-einrichtung/lernmanagement/installation/migration) - Bestehende Installation migrieren
