---
sidebar_position: 6
title: Nachschlagewerk
description: Alle Einstellungen von edulution-linbo-vdi – Dienstkonfiguration, VDI-Gruppe, Geräteliste
sidebar_custom_props:
  audience: admin
---

# Nachschlagewerk

## Dienstkonfiguration `/etc/edulution/linbo-vdi/vdiConfig.json`

Nur für `root` lesbar. Der Assistent `vdi-setup` schreibt sie; Änderungen von Hand greifen nach `systemctl restart edulution-linbo-vdi`.

| Schlüssel | Vorgabe | Bedeutung |
|-----------|---------|-----------|
| `node` | – | Name des Proxmox-Servers |
| `hvIp` | – | Adresse des Proxmox-Servers |
| `hvUser` | – | Benutzer mit Bereich, `vdi@pve` |
| `tokenName`, `tokenValue` | – | Zugangsschlüssel; alternativ `password` |
| `verifySsl` | `false` | `true`, `false` oder Pfad zum Stammzertifikat (`/etc/edulution/linbo-vdi/pve-root-ca.pem`) |
| `healthPorts` | `135,445,49665,22` | Ports, an denen ein gestartetes System erkannt wird |
| `timeoutConnectionRequest` | `1000` | Sekunden, die ein angeforderter Desktop auf die Anmeldung wartet |
| `recycleUsedClones` | `true` | Klon nach Ende der Sitzung löschen und neu erzeugen |
| `useGuestAgent` | `true` | Angemeldete Benutzer zusätzlich über den Guest Agent erkennen |
| `loopInterval` | `5` | Sekunden zwischen zwei Durchläufen |
| `maxParallelBuilds` | `2` | Klone, die gleichzeitig gebaut werden |
| `proxy_url` | leer | Hostname des SPICE-Proxys für *Remote Viewer* |
| `debugging` | `false` | Ausführliches Protokoll |

## VDI-Gruppe `/srv/linbo/start.conf.<Gruppe>.vdi`

Die Felder, die der Dialog **VDI-Konfiguration** in edulution zeigt, sind mit *Dialog* gekennzeichnet. Alle anderen setzt der Dienst mit einer Vorgabe, wenn sie fehlen. Erlaubt sind in Textfeldern nur Buchstaben, Ziffern und `_ . , : ; = / + -`; eine Datei mit ungültigem Inhalt wird im Protokoll gemeldet und übersprungen.

| Schlüssel | Dialog | Vorgabe | Bedeutung |
|-----------|--------|---------|-----------|
| `activated` | **VDI aktiviert** | – | Gruppe wird verwaltet |
| `vmids` | **VM-IDs** | – | Nummern für den Master, zwei empfohlen |
| `name` | **Name** | – | Name der Vorlage in Proxmox; Klone heißen `<Name ohne master>-clone-<Nummer>` |
| `hostname` | **Hostname** | – | Hostname des Masters in der Geräteliste |
| `ostype` | **Betriebssystemtyp** | – | `win10`, `win11`, `l26` |
| `bios` | **BIOS** | – | `ovmf` (EFI) oder `seabios` |
| `boot` | **Bootreihenfolge** | – | Nur zur Dokumentation; der Master startet immer zuerst vom Netzwerk |
| `ip`, `mac` | **IP-Adresse**, **MAC-Adresse** | – | Adressen des Masters, wie in der Geräteliste |
| `bridge`, `tag` | **Netzwerkbrücke**, **VLAN-Tag** | –, `0` | Netz der Maschinen; `0` = kein VLAN |
| `storage`, `size` | **Speicher**, **Festplattengröße** | – | Proxmox-Speicher und Festplatte in GiB |
| `cores`, `memory` | **Kerne**, **Arbeitsspeicher (MiB)** | – | Ausstattung von Master und Klonen |
| `group` | | Dateiname | LINBO-Gruppe |
| `format` | | `raw` | Festplattenformat |
| `scsihw`, `disk_bus` | | nach `bios` | `virtio-scsi-single`/`scsi` bei EFI, `virtio-scsi-pci`/`sata` bei BIOS |
| `machine`, `efidisk0`, `tpmstate0`, `rng0` | | bei EFI gesetzt | `q35`, EFI-Datenträger ohne vorinstallierte Schlüssel, TPM (Windows 11), Zufallsquelle |
| `nic_model` | | `virtio` | Netzwerkkarte: `virtio`, `e1000`, `e1000e`, `rtl8139`, `vmxnet3` |
| `display`, `audio` | | QXL, SPICE-Audio | Grafik und Ton |
| `usb0` | | nicht gesetzt | `host=spice,usb3=1` erlaubt USB-Weiterleitung aus SPICE-Sitzungen |
| `spice_enhancements` | | nicht gesetzt | `foldersharing=1,videostreaming=all`; nur `root@pam` darf es setzen |
| `minimum_vms`, `maximum_vms`, `prestarted_vms` | | `1`, `5`, `1` | Untergrenze, Obergrenze, stets unbenutzt bereitgehaltene Klone |
| `timeout_building_master`, `timeout_building_clone` | | `600`, `300` | Sekunden bis das System antworten muss |
| `master_stable_seconds`, `master_max_settle` | | `180`, `900` | Der Master gilt als fertig, wenn seine Ports so lange ununterbrochen offen sind (Windows startet nach der Treiberinstallation neu) |
| `health_ports` | | wie `healthPorts` | Abweichende Prüf-Ports für diese Gruppe |

:::info[Was einen Neubau auslöst]
Eine Änderung an `bios`, `cores`, `memory`, `ostype`, `name`, `scsihw` oder `machine` sowie ein neues Image (andere Größe laut `<Image>.info`) lässt den Dienst eine neue Vorlage bauen und die Klone ersetzen. Änderungen am Vorrat (`minimum_vms`, `maximum_vms`, `prestarted_vms`) wirken sofort, ohne Neubau.
:::

## Geräteliste `devices.csv`

Jede VDI-Gruppe braucht einen Eintrag für den Master und einen je möglichen Klon. Der Assistent legt sie an; von Hand sehen sie so aus:

```
vdi;win11-master;win11;aa:ee:4e:b5:5c:00;10.0.0.50;;;;classroom-studentcomputer;;1;;;;;
vdi;win11-01;win11;aa:ee:4e:b5:5c:01;10.0.0.201;;;;classroom-studentcomputer;;1;1801;;;;
vdi;win11-02;win11;aa:ee:4e:b5:5c:02;10.0.0.202;;;;classroom-studentcomputer;;1;1802;;;;
```

| Spalte | Inhalt |
|--------|--------|
| 1 Raum | frei wählbar |
| 2 Hostname | eindeutig; der Master trägt den `hostname` der VDI-Konfiguration |
| 3 Gruppe | genau der Name der VDI-Gruppe |
| 4 MAC-Adresse | Master wie `mac` in der VDI-Konfiguration; Klone erhalten ihre MAC-Adresse aus dieser Spalte |
| 5 IP-Adresse | Adresse, unter der der Dienst die Maschine prüft |
| 11 PXE | `1` |
| 12 VM-ID | Proxmox-Nummer des Klons; beim Master leer |

Nach jeder Änderung: `linuxmuster-import-devices`.

## Befehle

| Befehl | Zweck |
|--------|-------|
| `vdi-setup` | Einrichtungsassistent; kann die Konfiguration behalten und nur Gruppen anlegen |
| `vdi-states -m [Gruppe]` / `-c [Gruppe]` | Zustand von Master bzw. Klonen als JSON |
| `vdi-service --once --debug` | Ein Durchlauf im Vordergrund mit allen Details |
| `vdi-remove-clone --vm <Nummer>` | Einen Klon löschen |
| `vdi-remove-clone --everything [Gruppe] [--force]` | Alle (unbelegten) Klone löschen |
| `journalctl -u edulution-linbo-vdi -f` | Protokoll verfolgen |

## Netzwerkports

| Von | Nach | Port | Zweck |
|-----|------|------|-------|
| Linuxmuster-Server | Proxmox | TCP 8006 | Steuerung |
| Linuxmuster-Server | Desktops | TCP 135, 445 (Windows) / 22 (Linux) | Prüfung, ob gestartet |
| Desktops | Linuxmuster-Server | DHCP, TFTP, rsync, SMB, LDAP | LINBO-Start, Anmeldung, Heimverzeichnis |
| edulution (Guacamole) | Desktops | TCP 3389 | RDP-Sitzung |
| Clients | Proxmox | TCP 3128 | nur bei SPICE über *Remote Viewer* |
