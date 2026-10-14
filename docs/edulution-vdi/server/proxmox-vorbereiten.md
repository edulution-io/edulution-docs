---
sidebar_position: 2
title: Proxmox vorbereiten
description: Benutzer, Zugriffsrechte, Speicher und Netzwerk auf dem Proxmox-Server für edulution-linbo-vdi
sidebar_custom_props:
  audience: admin-setup
---

# Proxmox vorbereiten

Der Dienst steuert Proxmox über dessen Schnittstelle. Dafür braucht er einen eigenen Benutzer mit genau den Rechten, die er zum Anlegen, Starten und Löschen von Maschinen benötigt – nicht den Proxmox-Hauptbenutzer `root@pam`.

## Benutzer und Zugangsschlüssel anlegen

Melden Sie sich auf dem Proxmox-Server als `root` an (per SSH oder über die Konsole in der Weboberfläche) und führen Sie diese vier Befehle aus:

```bash
pveum role add VDI -privs "VM.Allocate VM.Clone VM.Config.CDROM VM.Config.CPU VM.Config.Cloudinit \
  VM.Config.Disk VM.Config.HWType VM.Config.Memory VM.Config.Network VM.Config.Options VM.Audit \
  VM.Console VM.PowerMgmt VM.Monitor VM.GuestAgent.Audit \
  Datastore.Allocate Datastore.AllocateSpace Datastore.Audit Sys.Audit SDN.Use"
pveum user add vdi@pve --comment "edulution-linbo-vdi"
pveum acl modify / -user vdi@pve -role VDI
pveum user token add vdi@pve vdi --privsep 0
```

Der letzte Befehl zeigt eine Tabelle mit dem Wert des Zugangsschlüssels (**value**), eine lange Zeichenkette mit Bindestrichen. Kopieren Sie sie sofort an einen sicheren Ort: Proxmox zeigt sie nur dieses eine Mal. Sie brauchen sie bei der [Installation](installation.md#einrichtungsassistent).

| Begriff | Bedeutung |
|---------|-----------|
| Rolle `VDI` | Die Liste der Rechte. Sie erlaubt alles, was der Dienst mit Maschinen, Speicher und Netzwerk tun muss, und sonst nichts |
| Benutzer `vdi@pve` | Ein Konto nur für den Dienst. Es hat kein Passwort und kann sich nicht an der Weboberfläche anmelden |
| Token `vdi` | Der Zugangsschlüssel des Dienstes. Lässt er sich jederzeit mit `pveum user token remove vdi@pve vdi` zurückziehen, ohne ein Passwort ändern zu müssen |

Den angelegten Zugangsschlüssel zeigt die Weboberfläche unter **Rechenzentrum → Berechtigungen → API-Token**; den Wert selbst zeigt sie dort nicht mehr an.

![API-Token vdi des Benutzers vdi@pve in der Proxmox-Weboberfläche](/img/vdi/proxmox-api-token.png)

:::note[Proxmox VE 9]
Ab Proxmox VE 9 gibt es zusätzlich das Recht `VM.GuestAgent.Audit`. Ergänzen Sie es in der Rolle, damit der Dienst angemeldete Benutzer über den Guest Agent abfragen kann. Proxmox VE 8 kennt das Recht nicht und lehnt es ab.
:::

:::caution[Ordnerfreigabe braucht root]
Die Proxmox-Option *Ordnerfreigabe* für SPICE (`spice_enhancements`) darf nur `root@pam` setzen. Der Dienst lässt sie mit einem Hinweis im Protokoll weg, wenn der Benutzer sie nicht setzen darf. Sitzungen über die edulution-App nutzen RDP und brauchen die Option nicht.
:::

## Speicher prüfen

Öffnen Sie in der Proxmox-Weboberfläche **Rechenzentrum → Storage**. Der Speicher, auf dem die Desktops liegen sollen, muss

- den Inhaltstyp **Disk-Image** erlauben und
- Momentaufnahmen beherrschen: **ZFS**, **LVM-Thin**, **Ceph/RBD** oder ein Verzeichnis mit `qcow2`-Dateien.

Merken Sie sich den **Namen** des Speichers (etwa `local-zfs`); der Assistent fragt danach.

:::note[Platzbedarf]
Die Vorlage belegt den Platz des Images, jeder Klon anfangs fast nichts. Ein Klon wächst nur um das, was in ihm geändert wird, und wird nach jeder Sitzung ohnehin neu erzeugt. Zehn Windows-Klone kommen so in der Regel mit wenigen Gigabyte zusätzlich aus.
:::

## Netzwerk prüfen

Die Desktops hängen an einer Netzwerkbrücke des Proxmox-Servers, in der Regel `vmbr0`. In diesem Netz müssen sie

- den Linuxmuster-Server erreichen (für den LINBO-Start, die Anmeldung und das Heimverzeichnis) und
- vom Linuxmuster-Server erreichbar sein (er prüft, ob eine Maschine fertig gestartet ist).

Liegen die Desktops in einem eigenen VLAN, notieren Sie dessen Kennung (**Tag**) und stellen Sie sicher, dass die Brücke unter **System → Netzwerk** als **VLAN aware** markiert ist.

## Nummern für die Maschinen reservieren

Jede Maschine in Proxmox hat eine Nummer (**VMID**). Der Dienst braucht einen Bereich, in dem keine anderen Maschinen liegen, zum Beispiel:

| Zweck | Nummern |
|-------|---------|
| Master/Vorlage | 1701 und 1702 (zwei, damit eine neue Vorlage gebaut werden kann, während Klone noch die alte nutzen) |
| Klone | 1801 bis 1810 |

Der Dienst fasst eine fremde Maschine mit einer Nummer aus seinem Bereich nie an, kann die Nummer dann aber auch nicht nutzen.

## Zertifikat

Proxmox verschlüsselt seine Schnittstelle mit einem selbst ausgestellten Zertifikat. Der Einrichtungsassistent holt dessen Stammzertifikat beim ersten Kontakt und hinterlegt es, sodass der Dienst danach nur noch genau diesen Proxmox-Server akzeptiert. Sie müssen dafür nichts vorbereiten. Prüfen wollen Sie den Fingerabdruck? Er steht unter **Rechenzentrum → Zertifikate** beim Eintrag `pve-root-ca.pem`.

## Weiter

[Installation](installation.md) – Paket einrichten und den Assistenten durchlaufen
