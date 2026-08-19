# Satelliten

Satelliten sind eigenständige edulution-Geräte (Appliances) an entfernten Standorten, die über einen WireGuard-Tunnel mit Ihrer zentralen edulution-Instanz verbunden sind. Nach der Kopplung lassen sich ihre Netzwerke (VLANs), Authentifizierungs-Anbieter (LDAP) und Dienste wie der mDNS-Repeater und der RADIUS-Server zentral aus der edulution UI heraus verwalten und überwachen.

:::tip[Satelliten erstmalig in Betrieb nehmen]
Diese Seite beschreibt den **laufenden Betrieb** in der edulution UI. Die Erstinbetriebnahme eines Geräts – Apps installieren, WireGuard starten, Gerät koppeln und zentrale Netze bereitstellen – ist unter [edulution Satellite](../../edulution-satellite/index.md) beschrieben.
:::

Die Verwaltung gliedert sich in zwei Bereiche:

- **Einstellungen → Satellites** – Satelliten koppeln, genehmigen, einer Schule zuweisen und aktualisieren (nur Global-Admin).
- **App „Satellites"** – den laufenden Betrieb eines ausgewählten Satelliten einsehen und konfigurieren (Übersicht, Netzwerke, Authentifizierung, Dienste).

:::warning[Nur Global-Admin]
Das Koppeln und Verwalten von Satelliten in den **Einstellungen** ist ausschließlich für Global-Admins zugänglich. Der Schulfilter im Satelliten-Bereich erscheint ebenfalls nur für Global-Admins mit mehr als einer Schule.
:::

## Lebenszyklus eines Satelliten

Ein Satellit durchläuft mehrere Zustände, bis er betriebsbereit ist:

| Status | Bedeutung |
|--------|-----------|
| **Ausstehend** (pending) | Der Satellit hat sich registriert und wartet auf Ihre Genehmigung. |
| **Gekoppelt** (paired) | Der Satellit wurde über seine Seriennummer vorab gekoppelt und meldet sich bei der nächsten Verbindung. |
| **Akzeptiert** (accepted) | Der Satellit ist freigegeben und wird im Satelliten-Bereich angezeigt. |
| **Abgelehnt** (rejected) | Die Verbindungsanfrage wurde abgewiesen. |
| **Online** | Ein akzeptierter Satellit ist aktuell erreichbar (regelmäßiger Heartbeat). |

Nur **akzeptierte** Satelliten erscheinen im Satelliten-Bereich und können dort konfiguriert werden.

## Satelliten koppeln und verwalten (Einstellungen)

Öffnen Sie als Global-Admin die **Einstellungen** (Zahnrad-Symbol unten im Menü) und wählen Sie in der Seitenleiste **Satellites**. Die Ansicht ist in **Ausstehende**, **Verbundene** und **Abgelehnte Satellites** gegliedert und aktualisiert sich automatisch in regelmäßigen Abständen.

Solange noch kein Satellit verbunden ist, erscheint der Hinweis, dass sich Satelliten hier eintragen, sobald sie sich bei der edulution-Instanz registrieren.

### Satellit hinzufügen

1. Klicken Sie auf die Schaltfläche mit dem **Plus-Symbol** (*Satellit hinzufügen*).
2. Geben Sie im Dialog **Satellit hinzufügen** die **Seriennummer** des Geräts ein (z. B. `SN-1234567890`).
3. Bestätigen Sie mit **Hinzufügen**.

Bei Erfolg erscheint die Meldung, dass der Satellit hinzugefügt wurde und auf die erste Verbindung gewartet wird.

:::note[Bereits gekoppelte Geräte]
Ist die Seriennummer bereits mit einer anderen edulution-Instanz gekoppelt, meldet der Dialog dies und nennt – sofern bekannt – den aktuellen Besitzer. Die Kopplung muss dann zuerst an der anderen Instanz aufgehoben werden.
:::

### Einen Satelliten genehmigen oder ablehnen

Für jeden Satelliten werden Name, Status, Version, zugewiesene Schule, URL sowie – sofern gemeldet – Hostname, letzter Kontakt, Modell, Seriennummer und MAC-Adressen angezeigt. Je nach Status stehen folgende Aktionen zur Verfügung:

| Status | Verfügbare Aktionen |
|--------|---------------------|
| Ausstehend | **Akzeptieren**, **Ablehnen**, **Entfernen** |
| Abgelehnt | **Akzeptieren**, **Entfernen** |
| Akzeptiert | **Updates prüfen** (wenn online), **Entkoppeln**, **Entfernen**, Schule zuweisen |

- **Akzeptieren** gibt den Satelliten frei; er erscheint anschließend im Satelliten-Bereich.
- **Ablehnen** weist die Anfrage ab.
- **Entkoppeln** löst die Kopplung, sodass das Gerät an einer anderen Instanz verwendet werden kann.
- **Entfernen** löscht den Eintrag aus der Liste.

### Schule zuweisen

Akzeptierten Satelliten können Sie über das Auswahlfeld eine **Schule** zuordnen. Die Zuordnung steuert, unter welcher Schule der Satellit im Satelliten-Bereich gruppiert und gefiltert wird. Über **Keine Schule** entfernen Sie die Zuordnung wieder.

### WireGuard-Tunnel

Sobald ein Tunnel besteht, zeigt der Satelliten-Eintrag einen Abschnitt **WireGuard-Tunnel** mit **Tunnel-IP**, **Peer-Endpunkt** und **öffentlichem Schlüssel**. Über **WG neu konfigurieren** senden Sie die WireGuard-Konfiguration erneut an den Satelliten:

- Ist der Satellit online, wird die Konfiguration sofort übertragen.
- Ist er offline, wird sie bei der nächsten Verbindung angewendet.

### Updates

Bei akzeptierten, online erreichbaren Satelliten können Sie über **Updates prüfen** nach neuen Versionen suchen. Steht ein Update bereit, wird die aktuelle Version mit der verfügbaren Zielversion angezeigt, und Sie können einzelne Komponenten gezielt aktualisieren. Ist alles aktuell, erscheint der Hinweis **Aktuell**.

## Der Satelliten-Bereich

Den laufenden Betrieb eines Satelliten verwalten Sie in der App **Satellites** (sofern für Sie freigeschaltet). Am oberen Rand befindet sich die Satelliten-Auswahl, darunter wechseln Sie über die Seitenleiste zwischen **Übersicht**, **Netzwerke**, **Authentifizierung** und **Diensten**.

### Satellit auswählen

Über das Auswahlfeld **Satellit** wählen Sie das gewünschte Gerät. Jeder Eintrag ist mit seinem Verbindungszustand gekennzeichnet (`[Online]` bzw. `[Offline]`) und – falls zugewiesen – mit der Schule. Global-Admins mit Satelliten an mehreren Schulen sehen zusätzlich das Feld **Schule**, mit dem sich die Auswahl auf eine Schule (oder **Alle Schulen**) einschränken lässt. Die Liste enthält ausschließlich akzeptierte Satelliten und wird laufend aktualisiert.

Ist kein Satellit ausgewählt, erscheint der Hinweis, einen Satelliten auszuwählen. Ist der gewählte Satellit offline, wird statt der Inhalte die Meldung **Satellit ist offline** angezeigt.

### Übersicht

Die **Übersicht** fasst den Zustand des ausgewählten Satelliten zusammen:

- **Satellite-Übersicht** – Status (Online/Offline), Version, Laufzeit und Seriennummer.
- **Kennzahlen-Kacheln** – Anzahl der **Netzwerke**, **Container** und **Auth-Anbieter**. Ein Klick auf eine Kachel führt direkt zur jeweiligen Unterseite.
- **Container-Status** – ein Ringdiagramm mit der Zahl laufender und gestoppter Container.
- **Ressourcen** – Auslastung von CPU, Arbeitsspeicher und Speicher als Balken. Neben der Auslastung wird die Plattform (z. B. MikroTik-Board und Architektur) angezeigt.

Die Ressourcen-Balken sind nach Auslastung eingefärbt:

| Auslastung | Farbe | Bedeutung |
|------------|-------|-----------|
| unter 65 % | grün | normaler Bereich |
| 65 % bis 85 % | gelb | erhöhte Auslastung |
| ab 85 % | rot | kritische Auslastung |

:::note[Hardware- und VM-Satelliten]
Bei MikroTik-basierten Geräten werden die detaillierten Hardware-Metriken bevorzugt verwendet; auf VM-Satelliten dienen die Host-Werte als Grundlage. Liefert die Hardware keine Metriken, erscheint statt der Balken ein entsprechender Hinweis.
:::

### Netzwerke

Die Unterseite **Netzwerke** verwaltet die VLAN-Netzwerke des Satelliten. Die Tabelle zeigt **VLAN**, **Name**, **Eltern-Interface**, **Adresse**, **Maske** und **Satelliten-IP**. Über die Schaltflächen am unteren Rand sowie die Aktionen je Zeile können Sie Netzwerke anlegen, bearbeiten, löschen und die Liste neu laden.

Beim Anlegen oder Bearbeiten füllen Sie folgende Felder aus:

| Feld | Beschreibung |
|------|--------------|
| **Name** | Bezeichnung des Netzwerks |
| **VLAN-ID** | numerische VLAN-Kennung (beim Bearbeiten nicht änderbar) |
| **Eltern-Interface** | physisches Interface, auf dem das VLAN aufsetzt (Auswahl) |
| **Adresse** | Netzadresse, z. B. `10.0.0.0` |
| **Maske** | Präfixlänge, z. B. `24` |
| **Satelliten-IP** | IP-Adresse des Satelliten in diesem Netz, z. B. `10.0.0.1` |

### Authentifizierung

Unter **Authentifizierung** pflegen Sie die LDAP-Authentifizierungs-Anbieter des Satelliten. Die Tabelle zeigt **Name**, **Server**, **Port**, **SSL** und **Base DN**. Neben Anlegen, Bearbeiten, Löschen und Neuladen können Sie einen ausgewählten Anbieter über **Testen** prüfen – das Ergebnis wird als **Verbindung erfolgreich** oder **Verbindung fehlgeschlagen** gemeldet.

Der Dialog umfasst folgende Felder:

| Feld | Beschreibung |
|------|--------------|
| **Name** | Bezeichnung des Anbieters (beim Bearbeiten nicht änderbar) |
| **Server** | Adresse des LDAP-Servers |
| **Port** | LDAP-Port (Standard `389`) |
| **SSL** | verschlüsselte Verbindung aktivieren |
| **Zertifikat prüfen** | Server-Zertifikat validieren |
| **Bind-Benutzer** | Benutzer für die LDAP-Anmeldung |
| **Passwort** | Passwort des Bind-Benutzers |
| **Base DN** | Basis-DN für die Suche |
| **Benutzerfilter** | LDAP-Filter, Standard `(uid={username})` |

### Dienste

Die Unterseite **Dienste** bündelt die laufenden Dienste in drei ausklappbaren Abschnitten:

- **mDNS-Repeater** – leitet mDNS-Anfragen zwischen zwei Netzwerken weiter. Die Tabelle zeigt **Name**, **Netzwerk 1**, **Netzwerk 2** (jeweils als VLAN) und den **Status**. Einzelne Repeater lassen sich **starten**, **stoppen** und löschen.
- **RADIUS-Server** – stellt die Netzwerk-Authentifizierung bereit. Die Tabelle zeigt **Name**, **Netzwerk** (VLAN), den zugeordneten **Auth**-Anbieter und den **Status**. Auch hier können Einträge gestartet, gestoppt und gelöscht werden.
- **Container** – listet die auf dem Satelliten laufenden Container mit **Name**, **Status** und zugeordneten **Netzwerken** (rein informativ).

Über die Aktion zum Neuladen aktualisieren Sie alle drei Listen.

## Siehe auch

- [Einstellungen](einstellungen.md) – weitere globale Konfigurationsoptionen
- [Administration](administration.md) – allgemeine Admin-Aufgaben
