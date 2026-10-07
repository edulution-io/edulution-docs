---
sidebar_position: 5
title: Satelliten verwalten
description: Satelliten in der edulution Plattform koppeln, freigeben und betreiben – Status, Netzwerke, Authentifizierung und Dienste
sidebar_custom_props:
  audience: admin
---

# Satelliten verwalten

Ein Satellit ist ein edulution-Gerät an einem entfernten Standort. Nach der Kopplung verwalten Sie seine Netzwerke (VLANs), LDAP-Anbieter und Dienste zentral in der edulution Plattform. Die Verwaltung besteht aus zwei Teilen:

- **Einstellungen → Satellites** – Satelliten koppeln, freigeben, einer Schule zuweisen, aktualisieren und entfernen.
- **App Satellites** – den laufenden Betrieb eines gewählten Satelliten einsehen und konfigurieren: **Übersicht**, **Netzwerke**, **Authentifizierung**, **Dienste** und **LINBO**.

:::note[Nur für Administratoren]
Die gesamte Satellitenverwaltung steht nur Administratoren offen – in den **Einstellungen** ebenso wie in der App.
:::

Die Erstinbetriebnahme eines Geräts beschreibt [Einrichtung mit edulution](./einrichtung-mit-edulution.md). LINBO behandelt [LINBO am Satelliten](./linbo.md).

## Status eines Satelliten

Die Liste **Verbundene Satellites** zeigt den Status als Rohwert. Ist ein Satellit erreichbar, steht stattdessen **● Online**; die verfügbaren Aktionen richten sich trotzdem nach dem zugrunde liegenden Status.

| Anzeige | Bedeutung |
|---------|-----------|
| **pending** | Der Satellit hat sich selbst registriert und wartet auf **Akzeptieren**. |
| **paired** | Die Seriennummer ist hinterlegt, der Satellit hat sich noch nicht gemeldet. Bei der ersten Verbindung wird er automatisch **accepted**. |
| **accepted** | Der Satellit ist freigegeben. Nur diese Satelliten erscheinen in der App. |
| **rejected** | Die Anfrage wurde abgelehnt. |

## Satellit koppeln

Eine Kopplung über die Seriennummer spart das Freigeben von Hand: Der Satellit verbindet sich bei der ersten Meldung selbst.

1. Wählen Sie unter **Einstellungen → Satellites** das Plus-Symbol.
2. Geben Sie die **Seriennummer** ein, zum Beispiel *HJB0A1B2C3D*.
3. Wählen Sie **Hinzufügen**.

Die Plattform meldet „Satellit erfolgreich hinzugefügt! Warte auf erste Verbindung...“. Der Eintrag hat den Status **paired**.

| Meldung | Ursache | Abhilfe |
|---------|---------|---------|
| Satellit bereits gekoppelt mit: *Besitzer* | Die Seriennummer gehört bereits einer anderen edulution-Instanz. | Den Satelliten an der Instanz des Besitzers entkoppeln. |
| Satellit ist bereits mit einer anderen Instanz gekoppelt. | Die Seriennummer ist vergeben, der Besitzer ist unbekannt – oder in der Liste steht schon ein Eintrag dazu, dessen Status nicht **pending** ist. | Zuerst den alten Eintrag in der Liste entfernen, sonst die Kopplung an der anderen Instanz aufheben. |
| Für das Koppeln fehlt EDULUTION_BASE_DOMAIN in der API-Konfiguration. Bitte die öffentliche edulution-Domain eintragen und die API neu starten. | Auf dem edulution-Server fehlt die Variable `EDULUTION_BASE_DOMAIN`. | Variable setzen, API neu starten. |

## Satelliten freigeben und entfernen

| Status | Verfügbare Aktionen |
|--------|---------------------|
| **pending** | **Akzeptieren**, **Ablehnen**, **Entfernen** |
| **paired** | **Entfernen** |
| **rejected** | **Akzeptieren**, **Entfernen** |
| **accepted** | **Updates prüfen** (nur wenn online), **Zentrales Netzwerk**, **Entkoppeln**, **Entfernen**, Auswahl der Schule |

**Zentrales Netzwerk** erscheint nur auf Linuxmuster-Installationen und bei Satelliten mit Seriennummer; die Konfiguration steht in [Einrichtung mit edulution](./einrichtung-mit-edulution.md#zentrale-netze-über-wireguard). **Entkoppeln** erscheint nur bei Satelliten, die über ihre Seriennummer gekoppelt wurden.

**Entkoppeln** und **Entfernen** löschen den Eintrag, den WireGuard-Zugang des Satelliten und seine zentralen Netze auf dem Linuxmuster-Server. Sie unterscheiden sich in einem Punkt:

| Aktion | Seriennummer |
|--------|--------------|
| **Entkoppeln** | wird beim Provisionierungsdienst freigegeben; das Gerät lässt sich an einer anderen Instanz koppeln |
| **Entfernen** | bleibt beim Provisionierungsdienst Ihrer Instanz zugeordnet |

:::caution[Keine Rückfrage]
**Entkoppeln** und **Entfernen** laufen ohne Sicherheitsabfrage. Ob die Seriennummer beim Provisionierungsdienst freigegeben werden konnte, meldet die Plattform nicht.
:::

Konnte beim Entkoppeln oder Entfernen ein Teil nicht aufgeräumt werden, ist der Eintrag trotzdem gelöscht. Die Plattform meldet „Abgeschlossen, mit Hinweisen: …“ mit einem oder beiden dieser Texte:

| Hinweis | Abhilfe |
|---------|---------|
| Die LMN-Subnetze konnten nicht entfernt werden. | Die Subnetze des Satelliten im Linuxmuster-Server von Hand löschen. |
| Der WireGuard-Peer konnte nicht entfernt werden. | Den Peer `sat-<seriennummer>` unter **Einstellungen → WireGuard** löschen. |

## Schule zuweisen

Bei akzeptierten Satelliten wählen Sie in der Auswahlliste eine **Schule**; **Keine Schule** hebt die Zuweisung auf. Die Schule bestimmt, wie die App die Satelliten gruppiert und filtert.

## WireGuard-Zugang erneut senden

Sobald dem Satelliten eine Tunnel-IP zugewiesen ist, zeigt der Eintrag den Abschnitt **WireGuard-Tunnel** mit **Tunnel-IP**, **Peer-Endpunkt** und **Öffentlicher Schlüssel**. Vom Schlüssel zeigt die Plattform die ersten 20 Zeichen.

**WG neu konfigurieren** sendet die WireGuard-Konfiguration erneut und legt den Zugang neu an, falls er fehlt:

| Satellit | Plattform meldet |
|----------|------------------|
| online | WireGuard-Konfiguration an Satellit gesendet. |
| offline | Satellit offline — Konfiguration wird bei der nächsten Verbindung angewendet. |

## Satellit aktualisieren

Bei einem akzeptierten, erreichbaren Satelliten fragt **Updates prüfen** nach neuen Versionen. Die Plattform zeigt die installierte Version, bei einem Update zusätzlich die Zielversion mit einer Schaltfläche je Komponente, beschriftet mit „*KOMPONENTE* aktualisieren“ (der Komponentenname in Großbuchstaben). Ist alles aktuell, erscheint **Aktuell**.

## Satelliten-Bereich

In der App **Satellites** wählen Sie den Satelliten im Feld **Satellit**. Die Liste enthält nur akzeptierte Satelliten, jeweils mit **[Online]** oder **[Offline]**, dem Namen und – falls zugewiesen – der Schule. Der erste Satellit ist vorgewählt.

Das Feld **Schule** (mit **Alle Schulen**) erscheint nur für Global-Admins und nur, wenn die akzeptierten Satelliten zu mehr als einer Schule gehören.

Was die Unterseiten bei fehlender Auswahl oder einem nicht erreichbaren Satelliten zeigen:

| Situation | Anzeige |
|-----------|---------|
| Kein Satellit gewählt | Bitte einen Satelliten auswählen, um fortzufahren. |
| **Übersicht**, Satellit offline | Satellit ist offline. |
| **Netzwerke**, **Authentifizierung**, **Dienste**, **LINBO**, Satellit offline | Die Seite meldet einen Ladefehler. |

### Übersicht

Die **Übersicht** gibt es nur für erreichbare Satelliten. Sie zeigt:

- **Satellite-Übersicht** – Status, Version, Laufzeit und Seriennummer.
- **LINBO** – eine Kachel mit **Hosts online** (online von allen Hosts), **Gruppen**, **Schulserver** (erreichbar oder nicht erreichbar) und **Aktiver Kernel** (Variante und Version). Sie ist nur lesend; Details stehen in [LINBO am Satelliten](./linbo.md). Meldet der Satellit keinen LINBO-Dienst, fehlt die Kachel. Was der Satellit nicht liefert, zeigt die Kachel als „—“.
- Kacheln für **Netzwerke**, **Container** und **Auth-Anbieter**; sie führen zur jeweiligen Unterseite.
- **Container-Status** – wie viele Container laufen und wie viele gestoppt sind.
- **Ressourcen** – Auslastung von CPU, Arbeitsspeicher und Speicher, dazu die Plattform des Geräts.

Liefert das Gerät keine Messwerte, steht dort „Keine Ressourcen-Metriken von der Satelliten-Hardware verfügbar.“ Die Balken wechseln mit der Auslastung die Farbe:

| Auslastung | Farbe |
|------------|-------|
| unter 65 % | grün |
| 65 % bis unter 85 % | gelb |
| ab 85 % | rot |

### Netzwerke

**Netzwerke** verwaltet die VLANs des Satelliten. Beim Anlegen und Bearbeiten gelten diese Felder:

| Feld | Hinweis |
|------|---------|
| **Name** | Bezeichnung des Netzwerks |
| **VLAN-ID** | beim Bearbeiten nicht änderbar |
| **Eltern-Interface** | Interface, auf dem das VLAN aufsetzt; vorgewählt ist das erste der Liste |
| **Adresse** | Netzadresse, zum Beispiel `10.0.0.0` |
| **Maske** | Netzmaske in Punktschreibweise, Vorgabe `255.255.255.0` – keine Präfixlänge wie `24` |
| **Satelliten-IP** | Adresse des Satelliten im Netz, zum Beispiel `10.0.0.1` |

### Authentifizierung

**Authentifizierung** verwaltet die LDAP-Anbieter des Satelliten. Beim Anlegen und Bearbeiten gelten diese Felder:

| Feld | Hinweis |
|------|---------|
| **Name** | beim Bearbeiten nicht änderbar |
| **Server** | Adresse des LDAP-Servers |
| **Port** | Vorgabe `389` |
| **SSL** | Vorgabe aus |
| **Zertifikat prüfen** | Vorgabe an |
| **Bind-Benutzer**, **Passwort** | Zugangsdaten für die LDAP-Anmeldung |
| **Base DN** | Basis für die Suche |
| **Benutzerfilter** | Vorgabe `(uid={username})` |

**Testen** prüft den gewählten Anbieter. Die Plattform zeigt die Meldung des Satelliten; nur wenn er keine liefert, lautet sie „Verbindung erfolgreich“ oder „Verbindung fehlgeschlagen“.

### Dienste

**Dienste** hat drei ausklappbare Abschnitte:

| Abschnitt | Inhalt |
|-----------|--------|
| **mDNS-Repeater** | leitet mDNS zwischen **Netzwerk 1** und **Netzwerk 2** weiter; Repeater lassen sich **Starten**, **Stoppen** und löschen |
| **RADIUS-Server** | Netzwerk-Authentifizierung für ein **Netzwerk** mit einem **Auth**-Anbieter; ebenfalls **Starten**, **Stoppen** und löschen |
| **Container** | die Container des Satelliten, nur zur Ansicht |

Der **Status** von mDNS-Repeater und RADIUS-Server lautet **● aktiv** oder **○ gestoppt**. Bei Containern zeigt die Spalte den Wert, den der Satellit meldet, zum Beispiel `running`.

## Siehe auch

- [LINBO am Satelliten](./linbo.md) – Rechner am Standort per LINBO bereitstellen
- [Einrichtung mit edulution](./einrichtung-mit-edulution.md) – Erstinbetriebnahme und zentrale Netze
- [Einstellungen](../edulution-plattform/konfiguration/einstellungen.md) – weitere globale Konfigurationsoptionen
- [Administration](../edulution-plattform/konfiguration/administration.md) – allgemeine Admin-Aufgaben
