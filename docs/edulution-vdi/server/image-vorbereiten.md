---
sidebar_position: 4
title: Image vorbereiten
description: Was ein LINBO-Image enthalten muss, damit daraus virtuelle Desktops werden
sidebar_custom_props:
  audience: admin-setup
---

# Image vorbereiten

Der Dienst arbeitet mit einem gewöhnlichen LINBO-Image. Damit die Klone starten, sich melden und jeweils einen eigenen Namen tragen, muss das Image einige Dinge mitbringen.

## Für alle Betriebssysteme

- **Gleiche Hardware.** Erstellen Sie das Image auf einer virtuellen Maschine mit derselben Ausstattung, die die VDI-Gruppe vorsieht: EFI oder BIOS, Festplatte an einem SCSI-Controller (EFI) oder SATA (BIOS), Netzwerkkarte VirtIO, Grafik QXL. Am einfachsten legen Sie die Maschine einmal von Hand mit den Werten der Gruppe an, installieren das System und laden das Image mit LINBO hoch.
- **Ablageort.** LINBO legt das Image unter `/srv/linbo/images/<Name>/<Name>.qcow2` ab. Der Dateiname muss zu **BaseImage** in der `start.conf` der Gruppe passen.
- **Netzwerkstart.** Die Master-Maschine startet über das Netzwerk in LINBO. Im Netz der Desktops muss also der Linuxmuster-Server als DHCP- und Startserver erreichbar sein.

## Windows 10 und 11

| Schritt | Warum |
|---------|-------|
| **VirtIO-Treiber** installieren (Datenträger, Netzwerk, Ballon, serielle Schnittstelle) von der ISO `virtio-win` | Ohne sie findet Windows weder Festplatte noch Netzwerk der virtuellen Maschine |
| **QEMU Guest Agent** installieren (ebenfalls auf der ISO) | Der Dienst fragt darüber ab, ob jemand angemeldet ist, und Proxmox kann die Maschine sauber herunterfahren |
| **SPICE Guest Tools** installieren | Grafiktreiber und Zwischenablage |
| **Firewall**: eingehend TCP **135** und **445** vom Linuxmuster-Server erlauben; TCP **3389** (RDP) aus dem Netz der Benutzer | An den ersten beiden Ports erkennt der Dienst, dass Windows fertig gestartet ist; RDP nutzt die edulution-App für die Sitzung |
| Bei EFI einmalig `mountvol S: /S` und `bcdboot C:\Windows /s S: /f UEFI` ausführen | Der Startmanager verweist dann nicht mehr auf die konkrete Festplatte, sodass Klone starten |

### Jeder Klon braucht seinen eigenen Namen

Nach dem Aufspielen tragen alle Klone den Namen des Masters. LINBO kann den Namen beim Synchronisieren aus der Geräteliste eintragen. Dafür gehören zwei Dateien neben das Image, ins Verzeichnis `/srv/linbo/images/<Name>/`. Beide lassen sich in edulution unter **Schulserver → LINBO → Images** mit der Aktion **Bearbeiten** anlegen (Registerkarten **Registry** und **Pre-Start Script**).

`<Name>.reg` – der Registry-Eintrag mit Platzhalter:

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters]
"Hostname"="{$HostName$}"
"NV Hostname"="{$HostName$}"

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ActiveComputerName]
"ComputerName"="{$HostName$}"

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName]
"ComputerName"="{$HostName$}"
```

`<Name>.prestart` – das Skript, das LINBO vor dem Start von Windows ausführt und den Platzhalter durch den Namen aus der Geräteliste ersetzt. Die Partitionsnummern gelten für EFI (`sda1` EFI, `sda2` Windows, `sda3` Cache); für BIOS verwenden Sie `sda1` und `sda2`:

```bash
patch="/tmp/patch.reg"
linbo_mount /dev/sda2 /mnt
linbo_mount /dev/sda3 /cache
sed 's|{\$HostName\$}|'"$HOSTNAME"'|g' /cache/*.reg > "$patch"
linbo_patch_registry "$patch"
rm -f "$patch"
```

:::caution[Groß- und Kleinschreibung]
Der Platzhalter heißt `{$HostName$}` mit großem `N`. Schreiben Sie ihn anders, bleibt der Name unverändert.
:::

## Ubuntu und Debian

```bash
apt install openssh-server qemu-guest-agent spice-vdagent xrdp
```

| Paket | Warum |
|-------|-------|
| `openssh-server` | Am offenen Port 22 erkennt der Dienst, dass das System gestartet ist |
| `qemu-guest-agent` | Angemeldete Benutzer erkennen, sauber herunterfahren |
| `spice-vdagent` | Zwischenablage und Bildschirmgröße |
| `xrdp` | Die edulution-App verbindet sich per RDP |

Den Rechnernamen setzt LINBO über das übliche Post-Sync-Skript aus der Geräteliste; eine Registry gibt es hier nicht.

## Checkliste vor dem ersten Start

- [ ] Image liegt unter `/srv/linbo/images/<Name>/`, die Datei `<Name>.qcow2.info` daneben
- [ ] **BaseImage** der Gruppe nennt genau diesen Dateinamen
- [ ] Windows: `.reg` und `.prestart` liegen neben dem Image
- [ ] Firewall des Images lässt die Prüf-Ports vom Server zu
- [ ] Guest Agent ist installiert
- [ ] Geräteliste importiert (`linuxmuster-import-devices`)
- [ ] **VDI aktiviert** in der VDI-Konfiguration der Gruppe

## Weiter

[Betrieb und Fehlersuche](betrieb.md) – was nach dem Start passiert
