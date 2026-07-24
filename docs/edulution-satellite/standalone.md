---
sidebar_position: 3
title: Standalone einrichten
description: Einen edulution Satellite eigenständig in Betrieb nehmen – auf MikroTik-Hardware oder als virtuelle Maschine
---

# Standalone einrichten

Diese Anleitung nimmt einen Satelliten **eigenständig** in Betrieb – ohne Anbindung an eine zentrale edulution-Instanz. Sie öffnen die Oberfläche, durchlaufen den Setup-Wizard und melden sich an. Danach verwalten Sie den Satelliten **lokal über seine eigene Oberfläche**: Netze, Dienste und Passwort.

:::tip[Zentral verwalteter Betrieb]
Für Pairing, Auto-Deploy und zentrale Netze über WireGuard folgen Sie stattdessen der [Einrichtung mit edulution](./einrichtung-mit-edulution.md).
:::

**Voraussetzungen**

- Ein edulution Satellite mit installierter Satelliten-Software (die drei Container laufen), am Strom und mit `ether1` am Uplink.

## 1. Oberfläche öffnen

Schließen Sie einen Laptop an den **Management-Port `ether3`** an – er erhält automatisch per DHCP eine Adresse aus `192.168.99.0/24` – und öffnen Sie im Browser **`https://192.168.99.1/`**.

:::note[Alternativer Zugang]
Die Oberfläche ist auch über die WAN-Adresse von `ether1` erreichbar: `https://<router-ip>/`.
:::

Beim ersten Aufruf startet automatisch der **Setup-Wizard**.

## 2. Modus „Standalone" wählen

Der Wizard begrüßt Sie mit *Welcome to edulution-satellite – Choose how you want to set up this satellite* und bietet zwei Kacheln an. Wählen Sie die linke:

- **Standalone** – *Configure manually – set up networks, services, and credentials yourself.* Das ist der eigenständige Betrieb.
- **Edulution** – Anbindung an eine zentrale edulution-Instanz; hier nicht gewünscht.

![Modus-Auswahl: Standalone](/img/satellite/wizard-modus-standalone.png)

:::note[Auto-Provisioning-Bildschirm erscheint zuerst?]
Zeigt der Wizard zunächst den Hinweis *This satellite was auto-provisioned…*, klicken Sie unten auf **Configure manually instead** – dann erscheint diese Modus-Auswahl.
:::

## 3. Admin-Zugangsdaten setzen

Im Schritt **Admin Credentials** vergeben Sie die Zugangsdaten für die Satelliten-Oberfläche – **Username**, **Password** und **Confirm Password** – und klicken unten rechts auf **Apply & Finish**.

![Admin-Zugangsdaten setzen](/img/satellite/wizard-admin-zugangsdaten.png)

:::note[Schritt „Geräteverbindung"]
Auf MikroTik-Geräten richtet der Installer die Geräteverbindung bereits ein; der Wizard überspringt diesen Schritt automatisch.
:::

Anschließend läuft ein kurzes Setup, danach erscheint die **Login-Seite**.

## 4. Anmelden

Melden Sie sich mit den soeben gesetzten Zugangsdaten an.

![Login-Seite](/img/satellite/satellit-login.png)

Fertig – der Satellit läuft standalone und zeigt das **Dashboard**.

![Dashboard des Satelliten](/img/satellite/satellit-dashboard.png)

## Satellit als virtuelle Maschine

Der Satellit läuft nicht nur auf MikroTik-Hardware, sondern auch als **Linux-VM** mit denselben drei Containern. Für den Standalone-Betrieb ändert sich fast nichts – der Wizard ist derselbe:

- **Zugang:** über IP oder Hostname der VM (`https://<vm-ip>/`). Der Management-Port `ether3` aus Schritt 1 ist MikroTik-spezifisch und entfällt.
- **Wizard:** identisch – **Standalone** wählen → **Admin Credentials** setzen → **Apply & Finish** → anmelden. Der MikroTik-Schritt zur Geräteverbindung entfällt, der Wizard geht direkt von der Modus-Auswahl zu den Zugangsdaten.
- **Danach:** dasselbe Dashboard und dieselbe lokale Verwaltung.

![VM-Modus – Dashboard nach dem Standalone-Setup](/img/satellite/vm-dashboard.png)

:::note[Netzwerk-Scans in der VM]
Im VM-Modus laufen Netzwerk-Scans über einen Helfer-Container. Bis dieser läuft, erscheint der Hinweis *Enable NAPI to perform network scans*.
:::

## Nach der Einrichtung

Alles Weitere passiert lokal in der Satelliten-Oberfläche – eine edulution-Instanz wird dafür nicht benötigt:

- **Networks** – eigene Netze und VLANs anlegen.
- **Services** – Dienste wie mDNS, RADIUS, KMS, DHCP-Relay oder File Server konfigurieren und starten.
- **Settings** – unter anderem das Admin-Passwort ändern.

![Einstellungen des Satelliten](/img/satellite/satellit-einstellungen.png)

Ein Beispiel für das Konfigurieren und Starten eines Dienstes finden Sie unter [Dienste starten](./einrichtung-mit-edulution.md#8-dienste-starten-optional).

## Später an edulution anbinden

Ein standalone eingerichteter Satellit lässt sich jederzeit nachträglich zentral anbinden:

1. **Settings → Unpair & Reset** – setzt den Verbindungszustand zurück und startet den Wizard neu.
2. Im Wizard den Modus **Edulution** wählen und die **edulution-URL** angeben.
3. Den Satelliten anschließend in edulution **akzeptieren** – siehe [Einrichtung mit edulution](./einrichtung-mit-edulution.md#6-satellit-in-edulution-bestätigen).

:::note[Wird dafür WireGuard benötigt? Nein.]
Die zentrale Verwaltung und Steuerung läuft über die **WebSocket-Verbindung** zwischen Satellit und edulution: edulution sendet Befehle und API-Aufrufe über diese Verbindung, der Satellit ruft dafür lokal seine eigene API auf. Der Satellit ist damit online und voll steuerbar, **auch ohne WireGuard-Tunnel**.

WireGuard wird nur zusätzlich aufgebaut, wenn Sie die Funktion **Zentrales Netzwerk** nutzen – also ein zentrales bzw. linuxmuster-Netz über den Tunnel an den LAN-Ports des Satelliten bereitstellen möchten.
:::
