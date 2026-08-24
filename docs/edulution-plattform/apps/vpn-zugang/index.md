# VPN-Zugang (WireGuard)

Mit dem **VPN-Zugang** greifen Sie über einen [WireGuard](https://www.wireguard.com/)-Tunnel gesichert auf das Schul- bzw. Organisationsnetz zu – etwa um von unterwegs auf interne Dienste zuzugreifen. edulution verwaltet die WireGuard-Peers zentral: Die Administration richtet den Zugang ein, jede Nutzerin und jeder Nutzer ruft die eigene Konfiguration anschließend in den Benutzereinstellungen ab.

:::info[Voraussetzung]
Der VPN-Zugang erscheint nur, wenn die Administration die **WireGuard**-App eingerichtet hat. Ist die App nicht konfiguriert, fehlt der Eintrag **VPN-Zugang** in den Benutzereinstellungen vollständig.
:::

## Für Benutzer: eigenen VPN-Zugang abrufen

Den eigenen Zugang finden Sie in den [Benutzereinstellungen](../../erste-schritte/mein-profil.md) unter **VPN-Zugang**. Die Seite zeigt die persönliche WireGuard-Konfiguration, sofern Ihnen die Administration einen Peer zugewiesen hat.

Wurde für Ihr Konto noch kein Zugang eingerichtet, erscheint stattdessen der Hinweis, dass noch kein WireGuard-VPN-Zugang vorhanden ist. Wenden Sie sich in diesem Fall an einen Administrator.

Ist ein Peer vorhanden, gliedert sich die Seite in vier Abschnitte:

![Die VPN-Zugang-Seite mit Verbindungsstatus, Verbindungsdetails und QR-Code](/img/features/wireguard-vpn-user-page.png)

### Verbindungsstatus

Zeigt an, ob der Tunnel aktuell aktiv ist:

- **Verbunden** (grün) bzw. **Nicht verbunden** (rot)
- **Letzter Handshake** – Zeitpunkt der letzten erfolgreichen Aushandlung
- **Empfangen** / **Gesendet** – übertragenes Datenvolumen in MB

### Verbindungsdetails

Die technischen Eckdaten Ihres Peers:

| Feld | Beschreibung |
| --- | --- |
| **Name** | Bezeichnung des Peers |
| **IP-Adresse** | Die dem Peer zugewiesene VPN-IP-Adresse |
| **Routen** | Netzbereiche, die über den Tunnel geleitet werden (z. B. `0.0.0.0/0` für den gesamten Datenverkehr) |

### QR-Code

Zur schnellen Einrichtung auf **Mobilgeräten**. Öffnen Sie die WireGuard-App auf Ihrem Smartphone oder Tablet und scannen Sie den angezeigten QR-Code – die Verbindung wird dann automatisch angelegt.

### Konfigurationsdatei

Für die Einrichtung am **Computer**. Über **Konfiguration herunterladen** laden Sie eine `.conf`-Datei herunter, die Sie in der WireGuard-Anwendung Ihres Rechners (Windows, macOS, Linux) importieren.

:::tip[WireGuard-Client]
Die passende Client-Software für alle Plattformen finden Sie auf der offiziellen Seite [wireguard.com/install](https://www.wireguard.com/install/).
:::

<Audience roles="user">

Den VPN-Zugang richtet die Administration Ihrer Schule ein und legt dabei fest, wer ihn nutzen darf. Erscheint in Ihren Benutzereinstellungen kein Eintrag **VPN-Zugang**, ist der Dienst für Sie noch nicht freigeschaltet – wenden Sie sich an Ihre Administration.

</Audience>

<Audience roles="admin">

## Für Administratoren: WireGuard einrichten

Der VPN-Zugang wird als native **WireGuard**-App über den [App-Store](../app-store.md) hinzugefügt und anschließend unter **Einstellungen** konfiguriert.

### App hinzufügen und verbinden

1. Fügen Sie im **App-Store** die App **WireGuard** hinzu.
2. Hinterlegen Sie in den App-Einstellungen die Verbindungsdaten zum WireGuard-Dienst:
   - **URL** – Adresse des WireGuard-Dienstes
   - **API-Key** – Schlüssel für die Authentifizierung gegenüber dem Dienst
   - Bei Bedarf eine **Proxy-Konfiguration** sowie die zugehörigen **Container-Einstellungen**

Sobald die Verbindung steht, erscheint für alle Benutzer der Eintrag **VPN-Zugang** in den Benutzereinstellungen.

### Peers verwalten

In der App-Konfiguration verwalten Sie über die **Peer-Tabelle** sämtliche Verbindungen. Die Tabelle listet je Peer **Name**, **Status**, **Erlaubte IPs**, **Endpunkt** und **Letzter Handshake**. Über **Peer hinzufügen** legen Sie einen neuen Eintrag an; ein Klick auf eine Zeile öffnet die Details und erlaubt das Löschen des Peers.

![Die WireGuard-Peer-Tabelle in den App-Einstellungen mit der Schaltfläche zum Hinzufügen](/img/features/wireguard-admin-peers.png)

Beim Anlegen wählen Sie zwischen zwei Typen:

#### Client-Peer

Ein Zugang für einzelne **Benutzer** oder ganze **Gruppen** – das ist der übliche Fall für den persönlichen VPN-Zugang.

| Feld | Beschreibung |
| --- | --- |
| **Benutzer / Gruppen** | Wählen Sie über die Suche die Personen oder Gruppen aus, für die ein Peer erstellt wird |
| **Routen** | Kommagetrennte Liste der Netzbereiche, die über den Tunnel geleitet werden (Standard `0.0.0.0/0` für den gesamten Datenverkehr) |

Für jede ausgewählte Person wird ein eigener Peer erzeugt. Die Betroffenen rufen ihre Konfiguration anschließend selbst unter **VPN-Zugang** ab.

![Dialog „Peer hinzufügen“ mit dem Typ Client-Peer](/img/features/wireguard-admin-client-peer.png)

#### Site-to-Site

Eine dauerhafte Verbindung zwischen zwei **Standorten bzw. Netzen**.

| Feld | Beschreibung |
| --- | --- |
| **Name** | Bezeichnung der Verbindung (erforderlich) |
| **Routen** | Netzbereiche, die über den Tunnel geleitet werden |
| **Erlaubte IPs** | Kommagetrennte Liste der IP-Bereiche der Gegenstelle (erforderlich, z. B. `192.168.1.0/24, 192.168.2.0/24`) |
| **Endpunkt** | Adresse und Port der Gegenstelle (z. B. `vpn.example.com:51820`) |

![Dialog „Peer hinzufügen“ mit dem Typ Site-to-Site](/img/features/wireguard-admin-site-to-site.png)

:::note[Satelliten]
Die WireGuard-App ist unabhängig von den [Satelliten](./konfiguration/satelliten.md), die ebenfalls über einen WireGuard-Tunnel angebunden werden. Der hier beschriebene VPN-Zugang dient dem Zugriff einzelner Benutzer und Standorte, nicht der Kopplung von Satelliten-Appliances.
:::

</Audience>

## Siehe auch

- [Benutzereinstellungen](../../erste-schritte/mein-profil.md) – Übersicht aller persönlichen Einstellungen
- [App-Store & Anwendungen](../app-store.md) – Apps hinzufügen und verwalten
- [Satelliten](./konfiguration/satelliten.md) – Anbindung entfernter edulution-Standorte
