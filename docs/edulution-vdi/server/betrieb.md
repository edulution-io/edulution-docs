---
sidebar_position: 5
title: Betrieb und Fehlersuche
description: Was der Dienst nach dem Start tut, wie Sie den Zustand prüfen und was Protokollmeldungen bedeuten
sidebar_custom_props:
  audience: admin-operate
---

# Betrieb und Fehlersuche

## Was nach dem Start passiert

Mit `journalctl -u edulution-linbo-vdi -f` sehen Sie dem Dienst zu. In dieser Reihenfolge erscheinen die Meldungen:

| Meldung | Bedeutung | Dauer |
|---------|-----------|-------|
| `[win11] Building new master` | Die Master-Maschine wird angelegt und startet über das Netzwerk in LINBO | – |
| `Waiting for an open port on VM 1701` | LINBO partitioniert, formatiert und spielt das Image auf; dann startet Windows zum ersten Mal | 10 bis 25 Minuten |
| `Ports closed again (probably a reboot), resetting counter` | Windows richtet Treiber ein und startet neu. Normal | – |
| `Converting VM 1701 to template` | Master wird heruntergefahren und zur Vorlage | 1 bis 3 Minuten |
| `Master template 1701 created successfully` | Fertig. Ab jetzt entstehen Klone | – |
| `[win11] Building new clone` … `Clone 1801 created successfully` | Je Klon: anlegen, starten, warten bis das System antwortet | 1 bis 4 Minuten je Klon, zwei gleichzeitig |

In der Proxmox-Weboberfläche erscheint die Vorlage mit dem Namen aus der VDI-Konfiguration (hier `aabk-vdi-master`, am Vorlagen-Symbol zu erkennen) und darüber die Klone (`aabk-vdi-clone-1801` …). Die **Notizen** einer Maschine enthalten die Daten, mit denen der Dienst sie verwaltet: Zustand, Erstellungszeit, Image-Größe und beim Klon die Vorlage, aus der er stammt. Ändern Sie diese Notizen nicht.

![Vorlage und Klone einer VDI-Gruppe in Proxmox; die Notizen der Vorlage zeigen die Verwaltungsdaten](/img/vdi/proxmox-vorlage-und-klone.png)

Sobald Klone fertig sind, zeigt die App **Desktop-Bereitstellung** deren Zahl auf der Karte der Gruppe. Die Karte **Ubuntu** bleibt bei „0 Clients verfügbar“, solange es keine Gruppe `ubuntu` gibt.

![Desktop-Bereitstellung mit fünf verfügbaren Windows-11-Clients](/img/vdi/desktop-karten.png)

## Zustand prüfen

```bash
systemctl status edulution-linbo-vdi
vdi-states -m          # Master je Gruppe
vdi-states -c          # Klone je Gruppe, mit Zusammenfassung
```

Die Zusammenfassung der Klone nennt:

| Feld | Bedeutung |
|------|-----------|
| `available_vms` | fertig, läuft, niemand belegt ihn – das zeigt die App als verfügbar |
| `allocated_vms` | fertig, läuft, von einem Benutzer belegt oder gerade angefordert |
| `building_vms` | wird gerade gebaut |
| `stopped_vms` | fertig, aber ausgeschaltet (etwa nach einem Neustart des Proxmox-Servers); der Dienst schaltet sie wieder ein |
| `failed_vms` | hat nicht geantwortet; wird entfernt und ersetzt |
| `foreign_vms` | fremde Maschine mit einer Nummer aus dem VDI-Bereich; wird nicht angefasst |

## So reagiert der Dienst

| Ereignis | Verhalten |
|----------|-----------|
| Ein Benutzer fordert einen Desktop an | Er bekommt einen freien Klon. Der bleibt ihm 1000 Sekunden lang vorbehalten, danach so lange, wie er angemeldet ist |
| Ein Benutzer meldet sich ab | Der Klon wird gelöscht und aus der Vorlage neu erzeugt. Daten des Benutzers bleiben nicht zurück |
| Neues Image hochgeladen | Eine neue Vorlage wird gebaut; danach werden die alten Klone nach und nach ersetzt. Belegte Klone bleiben, bis ihre Sitzung endet |
| Kerne, Arbeitsspeicher oder Festplatte in der VDI-Konfiguration geändert | Wie beim neuen Image |
| Proxmox-Server neu gestartet | Die Klone sind ausgeschaltet; der Dienst schaltet sie zu zweit je Durchlauf wieder ein |
| Ober- oder Untergrenze geändert | Der Vorrat wächst oder schrumpft beim nächsten Durchlauf. Entfernt werden nur unbelegte Klone |
| **VDI aktiviert** abgeschaltet | Nichts wird gelöscht; der Dienst lässt die Gruppe in Ruhe |

## Klone von Hand entfernen

```bash
vdi-remove-clone --vm 1803                  # einen Klon
vdi-remove-clone --everything win11         # alle unbelegten Klone der Gruppe
vdi-remove-clone --everything win11 --force # auch belegte
```

Der Dienst baut fehlende Klone anschließend wieder auf, solange die Gruppe aktiviert ist.

## Wenn etwas nicht funktioniert

| Meldung im Protokoll | Ursache | Abhilfe |
|----------------------|---------|---------|
| `No master states, check devices.csv and start.conf` | Der Master steht nicht in der Geräteliste, oder MAC-Adresse bzw. Hostname aus der VDI-Konfiguration passen nicht zur Geräteliste | Eintrag in der Geräteliste prüfen, `linuxmuster-import-devices` ausführen |
| `Ignoring VDI group config … missing required key 'storage'` | Die Datei `start.conf.<Gruppe>.vdi` ist unvollständig | Fehlendes Feld in der VDI-Konfiguration der Gruppe ergänzen |
| `Master 1701 failed (no open port after imaging), removing` | Die Maschine hat nicht geantwortet: Sie startet nicht in LINBO (DHCP/Netzwerkstart im Netz der Desktops?), das Image fehlt, oder die Firewall des Images blockiert die Prüf-Ports | In Proxmox die Konsole der Maschine öffnen, während der Dienst sie das nächste Mal baut |
| `Master 1701 ignored ACPI shutdown, stopping it` | Guest Agent fehlt im Image | Unschädlich; die Maschine wird hart ausgeschaltet. Agent nachinstallieren |
| `Clone 1801 did not come up, marked as failed` | Wie beim Master: Firewall oder Netzwerk | Prüf-Ports im Image freigeben |
| `linbo-remote failed` | LINBO kennt den Master-Rechner nicht | `linuxmuster-import-devices` ausführen |
| `Storage local-zfs not available on node pve01` | Speichername falsch geschrieben oder nicht auf diesem Node | Name in Proxmox unter **Storage** nachsehen |
| `TLS verification for the Proxmox API is disabled` | Zertifikatsprüfung ist aus (ältere Konfiguration) | `vdi-setup` erneut ausführen und das Zertifikat holen lassen |
| `occupies a VDI VMID but was not created by the VDI service` | Eine fremde Maschine liegt im Nummernbereich | Maschine verschieben oder andere Nummern wählen |
| `Connection to node failed … 596` | Node-Name stimmt nicht | Name in `vdiConfig.json` mit der Proxmox-Weboberfläche vergleichen |

In der App zeigt die Karte **„Keine Clients gefunden“**, obwohl Klone laufen? Dann heißt die Gruppe nicht `win11`, `win10` oder `ubuntu`, oder die Klone sind noch nicht fertig (`building_vms`).

## Deinstallieren

```bash
vdi-remove-clone --everything --force
apt-get purge edulution-linbo-vdi
```

Die Vorlagen löschen Sie anschließend in Proxmox von Hand, ebenso den Benutzer `vdi@pve`.
