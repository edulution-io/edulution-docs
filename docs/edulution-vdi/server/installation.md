---
sidebar_position: 3
title: Installation
description: edulution-linbo-vdi auf dem Linuxmuster-Server installieren und mit dem Assistenten einrichten
sidebar_custom_props:
  audience: admin-setup
---

# Installation

Alle Schritte laufen auf dem Linuxmuster-Server als `root`. Halten Sie den Zugangsschlüssel aus [Proxmox vorbereiten](proxmox-vorbereiten.md#benutzer-und-zugangsschlüssel-anlegen) bereit.

## Paketquelle einrichten

Das Paket kommt vom edulution-Paketserver. Die Quelle einzurichten ist einmalig nötig; danach kommen Aktualisierungen mit den gewöhnlichen Updates des Servers.

```bash
curl -fsSL https://package.edulution.io/pub.gpg | gpg --dearmor -o /usr/share/keyrings/edulution.gpg
echo "deb [signed-by=/usr/share/keyrings/edulution.gpg] https://package.edulution.io/ $(. /etc/os-release && echo "$VERSION_CODENAME") main" \
  > /etc/apt/sources.list.d/edulution.list
apt-get update
```

Die Zeile mit `VERSION_CODENAME` setzt den Namen Ihrer Ubuntu-Version selbst ein; Sie müssen nichts anpassen.

## Paket installieren

```bash
apt-get install edulution-linbo-vdi
```

Das Paket richtet den Dienst `edulution-linbo-vdi` ein, startet ihn aber noch nicht: Er wartet, bis eine Konfiguration vorliegt.

:::note[Ältere Installation vorhanden?]
Lief auf dem Server schon `linuxmuster-linbo-vdi` oder `edulution-linbo-vdi` in Version 1.0, übernimmt das neue Paket die vorhandene Konfiguration und die bestehenden Master und Klone. Der Assistent im nächsten Schritt bietet an, die Konfiguration zu behalten oder neu zu schreiben. Prüfen Sie danach die [Zugriffsrechte](#einrichtungsassistent): Die alte Version arbeitete mit `root@pam` und ohne Zertifikatsprüfung.
:::

## Einrichtungsassistent

```bash
vdi-setup
```

Der Assistent stellt nacheinander Fragen. Ein Vorschlag in eckigen Klammern wird mit der Eingabetaste übernommen.

### Verbindung zu Proxmox

| Frage | Eingabe |
|-------|---------|
| **Proxmox node name** | Der Name des Proxmox-Servers, so wie er in dessen Weboberfläche links im Baum steht (etwa `pve01`) |
| **Proxmox host IP or hostname** | Die Adresse des Proxmox-Servers |
| **Authentication method** | `1` für den Zugangsschlüssel (empfohlen) |
| **Proxmox API user** | `vdi@pve` |
| **Token name** | `vdi` |
| **Token value** | Der kopierte Zugangsschlüssel. Die Eingabe bleibt unsichtbar |
| **Verify the Proxmox TLS certificate?** | `1`: Der Assistent holt das Stammzertifikat des Proxmox-Servers und hinterlegt es |

### Dienst-Einstellungen

| Frage | Bedeutung | Vorschlag |
|-------|-----------|-----------|
| **Multi-school mode?** | Nur für Server mit mehreren Schulen | `N` |
| **Seconds a connection request reserves a VM before login** | Wie lange ein angeforderter Desktop auf die Anmeldung wartet, bevor er wieder frei wird | `1000` (knapp 17 Minuten) |
| **SPICE proxy hostname** | Nur nötig, wenn Sie Desktops mit dem Programm *Remote Viewer* statt über die edulution-App öffnen | leer |
| **Destroy and rebuild a clone after its user session ended?** | Klone nach Gebrauch neu erzeugen, damit keine Daten an den Nächsten gehen | `Y` |
| **Enable debug logging?** | Ausführliches Protokoll, nur zur Fehlersuche | `N` |

Der Assistent schreibt die Konfiguration nach `/etc/edulution/linbo-vdi/vdiConfig.json`, lesbar nur für `root`, und bietet an, die Verbindung zu testen. Erscheint `OK -- Connected to node …`, stimmen Adresse, Benutzer und Schlüssel.

Schlägt der Test fehl, nennt der Assistent die Rechte, die der Proxmox-Benutzer braucht. Meist fehlt dann der Schritt `pveum acl modify` aus [Proxmox vorbereiten](proxmox-vorbereiten.md#benutzer-und-zugangsschlüssel-anlegen) oder der Schlüssel wurde unvollständig kopiert.

### VDI-Gruppe anlegen

Eine **VDI-Gruppe** ist eine LINBO-Hardwaregruppe, deren Rechner virtuelle Maschinen sind. Der Assistent legt sie samt `start.conf` an.

| Frage | Eingabe |
|-------|---------|
| **OS type** | Betriebssystem des Images |
| **Group name** | Übernehmen Sie den Vorschlag `win11` oder `ubuntu`. Die App **Desktop-Bereitstellung** zeigt nur Gruppen mit genau diesen Namen (und `win10`) als Karte an |
| **Boot mode** | `1` für EFI. Windows 11 setzt EFI voraus |
| **Base image filename** | Dateiname des Images, zum Beispiel `win11.qcow2`. Es muss noch nicht vorliegen |
| **Storage** | Der Speicher aus [Proxmox vorbereiten](proxmox-vorbereiten.md#speicher-prüfen), als Nummer aus der angezeigten Liste |
| **VLAN tag** | Die VLAN-Kennung der Desktops oder leer |

Danach zeigt der Assistent die übrigen Vorgaben – Kerne, Arbeitsspeicher, Festplattengröße, Adressen und Nummern der Maschinen, Größe des Klon-Vorrats – als Zusammenfassung:

```
  Defaults:
    OS version:       24H2
    School:           default-school
    Server IP:        10.0.0.1
    Cores / RAM:      4 cores, 6144 MB
    Disk / Storage:   80 GB on local-zfs
    Network:          vmbr0, VLAN 100
    Master:           VMID 1701, IP 10.0.0.50, MAC aa:ee:4e:b5:5c:00, host win11-master
    Clone pool:       3-10 VMs, 1 pre-started
    Clone VMIDs:      1801+, IPs 10.0.0.201+, hosts win11-01+
  Customize these values? [y/N]:
```

Mit `y` ändern Sie einzelne Werte, mit der Eingabetaste übernehmen Sie alle. Prüfen Sie mindestens:

- **Server IP** – die Adresse Ihres Linuxmuster-Servers.
- **Master IP** – eine freie Adresse im Netz der Desktops. Die Klone bekommen die Adressen ab `.201` desselben Netzes.
- **Master VMID** – der Beginn Ihres reservierten Nummernbereichs; die Klone erhalten die Nummern ab `+100`.
- **Maximum VMs** – so viele Desktops kann es höchstens gleichzeitig geben. Für jeden wird ein Eintrag in der Geräteliste angelegt.

Der Assistent prüft die Geräteliste (`devices.csv`) auf Überschneidungen bei Hostnamen, MAC- und IP-Adressen und Nummern und warnt, bevor er etwas schreibt. Zum Schluss fragt er, ob er die Einträge an die Geräteliste anhängen darf.

### Geräte importieren

Damit LINBO, DHCP und die Benutzerverwaltung die neuen Rechner kennen:

```bash
linuxmuster-import-devices
```

### Dienst starten

Der Assistent bietet an, den Dienst zu aktivieren und zu starten. Alternativ:

```bash
systemctl enable --now edulution-linbo-vdi
journalctl -u edulution-linbo-vdi -f
```

Was Sie im Protokoll jetzt sehen sollten und wie lange es dauert, steht in [Betrieb und Fehlersuche](betrieb.md#was-nach-dem-start-passiert). Ohne hochgeladenes Image bleibt der Dienst beim Bau des Masters stehen – stellen Sie als Nächstes das [Image bereit](image-vorbereiten.md).

## Gruppe in der Plattform bearbeiten

Die Einstellungen einer VDI-Gruppe lassen sich später auch in edulution ändern: In der App **Schulserver** unter **LINBO → Gruppen** öffnet die Aktion **VDI** die [VDI-Konfiguration](../../edulution-server/linuxmuster.md#vdi-konfiguration) der Gruppe. Dort stehen Name, Adressen, Kerne, Arbeitsspeicher, Speicher, Festplattengröße, VLAN und die Nummern der Master. Felder, die der Dialog nicht zeigt, bleiben erhalten. Eine Änderung an Kernen, Arbeitsspeicher oder Festplatte lässt den Dienst die Vorlage und danach alle Klone neu bauen.

## Aktualisieren

```bash
apt-get update && apt-get install edulution-linbo-vdi
```

Konfiguration, Vorlage und Klone bleiben erhalten; der Dienst startet neu.
