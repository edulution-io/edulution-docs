---
sidebar_custom_props:
  audience: admin-setup
---

# Installation

Die edulution Mail Lösung basiert auf Mailcow und bietet eine vollständige E-Mail-Infrastruktur für Schulen.

## Übersicht

edulution-mail integriert Mailcow nahtlos in die edulution-Plattform und linuxmuster.net. Die Lösung bietet:

- **Automatische Synchronisation** von Benutzer-Mailboxen, Aliase und Verteilergruppen aus Keycloak/Linuxmuster
- **Single Sign-On (SSO)** über Keycloak für IMAP/POP3/SMTP-Login
- **Webmail-Zugriff** über SOGo mit Keycloak-Authentifizierung
- **Soft-Delete-Funktion** zum Schutz vor versehentlichem Datenverlust
- **Flexible Konfiguration** über Umgebungsvariablen und Override-Dateien

## Voraussetzungen

Für die Installation von edulution-mail benötigen Sie lediglich:

- **edulution-Plattform** bereits installiert und konfiguriert
- **Ausreichend Speicherplatz** auf dem Server

:::info[Automatische Konfiguration]
Die Installation über edulution-Plattform richtet automatisch alle notwendigen Komponenten ein (Docker, Keycloak-Integration, Netzwerk, etc.). Es sind keine manuellen Vorarbeiten erforderlich.
:::

## Installation über edulution-Plattform

Die Installation von edulution-mail erfolgt direkt über die edulution-Plattform Administrationsoberfläche.

:::info[Installationsverzeichnis]
Der Installer erstellt automatisch das Verzeichnis `/srv/docker/edulution-mail`, in dem alle Mailcow-Daten, Konfigurationsdateien und Logs gespeichert werden.

**Speicherplatz-Bedarf:**
- Grundinstallation: ca. 2-3 GB
- Pro Benutzer: ca. 3 GB (abhängig vom konfigurierten Quota)
- Reserve: mind. 5 GB

**Beispiel:** Für 50 Benutzer sollten ca. 160 GB verfügbar sein (3 GB + 50×3 GB + 5 GB Reserve).
:::

### Schritt 1: E-Mails App installieren

1. Melden Sie sich als Administrator in der edulution-Plattform an
2. Navigieren Sie zu **Einstellungen** → **App-Store**
3. Klicken Sie auf die Kachel **E-Mails**
4. Unten erscheint ein **+** Button - klicken Sie darauf

![App-Store - E-Mails auswählen](/img/edulution-mail/app-store-emails.png)

### Schritt 2: Docker-Anwendung erstellen

1. Scrollen Sie nach unten zum Abschnitt **Docker Anwendungen**
2. Klicken Sie auf das **+** Symbol, um eine neue Docker-Anwendung zu erstellen
3. Ein Dialog öffnet sich zur Eingabe des Hostnames
4. Geben Sie den **Hostname** Ihrer edulution-Instanz ein (z.B. `ihre-schule.de`)
5. Klicken Sie auf **Installieren**

![Hostname eingeben und Installation starten](/img/edulution-mail/installation-hostname.png)

:::warning[Wichtig]
Verwenden Sie den Hostname Ihrer edulution-Instanz, NICHT eine separate Mail-Domain wie `mail.ihre-schule.de`. Die E-Mail-Dienste werden über die edulution-URL bereitgestellt.
:::

### Was wird automatisch eingerichtet?

Der Installationsassistent kümmert sich vollautomatisch um:

- **E-Mail-Server** - Mailcow wird heruntergeladen und konfiguriert
- **Single Sign-On** - Benutzer können sich mit ihren edulution-Zugangsdaten anmelden
- **Automatische Synchronisation** - Benutzer und Gruppen werden aus Keycloak übernommen
- **Benutzer-Quotas** - Die in linuxmuster eingestellten Mail-Quotas werden automatisch übernommen
- **Webmail-Oberfläche** - SOGo wird mit den edulution-Themes eingerichtet
- **Globales Adressbuch** - Alle Benutzer sehen sich gegenseitig im Adressbuch
- **Netzwerk-Integration** - Verbindung mit der edulution-Plattform

:::note[Installationsdauer]
Die Installation dauert etwa **5-10 Minuten**. Der Fortschritt wird in Echtzeit angezeigt.
:::

### Schritt 3: Proxy-Konfiguration hinzufügen

Nach Abschluss der Installation muss die Traefik Proxy-Konfiguration hinzugefügt werden, damit die E-Mail-Dienste über die edulution-URL erreichbar sind.

1. Bleiben Sie in **Einstellungen** → **E-Mails**
2. Scrollen Sie zum Abschnitt **Proxy-Konfiguration**
3. Aktivieren Sie den **Expertenmodus**
4. Fügen Sie folgende Konfiguration ein:

```yaml
http:
  routers:
    edulution-sogo-mail:
      rule: Path(`/sogo-mail/sogo-auth.php`)
      service: edulution-sogo
      entryPoints:
        - websecure
      tls: {}
      middlewares:
        - strip-sogo-mail-prefix

    edulution-sogo:
      rule: PathPrefix(`/SOGo`)
      service: edulution-sogo
      entryPoints:
        - websecure
      tls: {}
      middlewares:
        - sogo-headers
        - sogo-buffers

    edulution-active-sync:
      rule: PathPrefix(`/Microsoft-Server-ActiveSync`)
      service: edulution-sogo
      entryPoints:
        - websecure
      tls: {}

    edulution-autodiscover:
      rule: "(HostRegexp(`autodiscover.*`) || HostRegexp(`autoconfig.*`)) &&
        (PathPrefix(`/mail/config-v1.1.xml`) ||
        PathPrefix(`/autodiscover/autodiscover.xml`))"
      service: edulution-sogo
      entryPoints:
        - websecure
      tls: {}

  middlewares:
    strip-sogo-mail-prefix:
      stripPrefix:
        prefixes:
          - /sogo-mail

    sogo-headers:
      headers:
        customRequestHeaders:
          X-Forwarded-Proto: https
          X-Api-Key: ""
        frameDeny: false
        customResponseHeaders:
          X-Frame-Options: ALLOWALL

    sogo-buffers:
      buffering:
        maxRequestBodyBytes: 0
        memRequestBodyBytes: 131072
        maxResponseBodyBytes: 0
        memResponseBodyBytes: 524288
        retryExpression: IsNetworkError() && Attempts() <= 2

  services:
    edulution-sogo:
      loadBalancer:
        servers:
          - url: http://nginx/
```

5. Klicken Sie auf **Speichern**

![Proxy-Konfiguration einfügen](/img/edulution-mail/proxy-konfiguration.png)

:::danger[Wichtig]
Die Proxy-Konfiguration ist zwingend erforderlich! Ohne diese Konfiguration sind die E-Mail-Dienste nicht über die edulution-URL erreichbar.
:::

:::info[Hintergrund zu den einzelnen Routern]
- **`edulution-sogo-mail`** veröffentlicht genau einen Pfad: `/sogo-mail/sogo-auth.php`. Mehr benötigt der Browser unter diesem Präfix nicht — die Anmeldung antwortet mit einer Weiterleitung auf `/SOGo/so/{login}`, die über den eigenen Router `edulution-sogo` läuft.
- **`edulution-active-sync`** und **`edulution-autodiscover`** haben jeweils eigene Router und sind davon unabhängig.
- Der leere Wert bei **`X-Api-Key`** in `sogo-headers` entfernt diesen Header aus eingehenden Anfragen, bevor sie an den Mailserver weitergereicht werden. Er wird auf diesem Weg nicht benötigt.
:::

:::warning[Voraussetzung: Mailcow-API-URL]
Die Mailcow-API-URL unter **Einstellungen → E-Mails → Mailserver** muss auf `https://mailcowdockerized-nginx-mailcow-1` stehen (siehe [Schritt 5](#schritt-5-mailserver-hosts-konfigurieren)).

Ältere Installationen haben dort teilweise noch `https://edu-traefik/sogo-mail` eingetragen. Dieser Wert funktioniert mit der oben gezeigten Konfiguration nicht mehr und muss vorher umgestellt werden — sonst erreicht die edulution-api die Mailcow-API nicht.
:::

:::warning[edulution-mail beim Update mit aktualisieren]
Beim Update der **edulution-plattform/edulution-api Container auf v2.0.156 oder höher** muss **edulution-mail auf v1.1.13 (oder höher) aktualisiert** werden. edulution verbindet sich dann selbstständig mit dem Mailcow-Netzwerk (per `docker network connect` für den edu-api Container).
:::

:::info[Optionales Aufräumen]
Sobald edulution-mail das Mailcow-Netzwerk für edulution-api sichtbar macht, sind die alten `imap`/`imaps`-EntryPoints in Traefik und der zugehörige TCP-Block in der dyn. Mail-Konfiguration obsolet und können bereinigt werden. Details siehe [Changelog & Config-Anpassungen](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/changelog-config-anpassungen).
:::

### Schritt 4: Docker-Anwendung starten

1. Scrollen Sie zum Abschnitt **Docker Anwendungen**
2. Klicken Sie auf **Starten** bei der edulution-mail Anwendung

### Schritt 5: Mailserver-Hosts konfigurieren

Damit die edulution-api direkt mit dem Mailserver kommunizieren kann, müssen IMAP- und SMTP-Server auf die internen Mailcow-Hostnamen gesetzt werden.

1. Bleiben Sie in **Einstellungen** → **E-Mails**
2. Scrollen Sie nach oben zum Abschnitt **Mailserver**
3. Tragen Sie folgende Werte ein:

| Feld | Wert |
|------|------|
| **URL** (Mailcow-API) | `https://mailcowdockerized-nginx-mailcow-1` |
| **API-Schlüssel** | `***` |
| **IMAP-Server** | `dovecot` |
| **IMAP Port** | `993` |
| **SMTP-Server** | `postfix` |
| **SMTP Port** | `587` |
| **Nicht zertifizierte Verbindungen ablehnen** | aus |

4. Klicken Sie oben rechts auf **Speichern**

:::warning[URL-Feld nicht vergessen]
Ohne den korrekten URL-Wert kann die edulution-Plattform nicht mit der Mailcow-API kommunizieren — z.B. Mailbox-Status, Sync-Trigger und Admin-Funktionen schlagen dann fehl.
:::

:::info[Hintergrund]
`dovecot` und `postfix` sind die internen Service-Namen der Mailcow-Container. Sie sind nur auflösbar, weil edulution-mail den edulution-api Container automatisch in das Mailcow-Netzwerk einbindet (siehe [Versionskopplung](#schritt-3-proxy-konfiguration-hinzufügen)).
:::

Die Installation ist nun abgeschlossen und die E-Mail-Dienste werden gestartet.

## Erstkonfiguration

### Zugriff auf die Mailcow Administrationsoberfläche

Die Mailcow-Administrationsoberfläche lauscht auf Port `8443`, allerdings nur auf der Loopback-Adresse des Servers (`127.0.0.1`). Sie ist damit nicht direkt über die Server-IP erreichbar, sondern wird über einen SSH-Tunnel aufgerufen:

```bash
ssh -L 8443:127.0.0.1:8443 <benutzer>@<ihre-server-ip>
```

Solange die SSH-Verbindung besteht, erreichen Sie die Oberfläche im Browser Ihres eigenen Rechners unter:

```
https://localhost:8443
```

**Standard-Zugangsdaten:**
- **Benutzername:** `admin`
- **Passwort:** `moohoo`

:::danger[Sicherheitshinweis]
Ändern Sie das Standard-Administratorpasswort **sofort** nach der ersten Anmeldung! Führen Sie außerdem regelmäßige Passwortänderungen durch.
:::

:::warning[Ältere Versionen aktualisieren]
Die Bindung an `127.0.0.1` gilt ab **edulution-mail v1.3.2**. Ältere Installationen binden Port 8443 an alle Netzwerkschnittstellen — aktualisieren Sie edulution-mail, siehe [Changelog & Config-Anpassungen](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/changelog-config-anpassungen). Bis dahin gehören Port 8443 in der Firewall gesperrt und das Standardpasswort geändert.
:::

Weitere Informationen zur Administration finden Sie unter [Administration](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/administration).

### Webmail (SOGo) Zugriff

Das Webmail-Interface ist über Ihre edulution-Instanz erreichbar:

```
https://ihre-edulution-url.de/SOGo/so/
```

Benutzer können sich hier mit ihren edulution-Zugangsdaten anmelden.

## Empfohlene Einstellungen nach der Installation

Nach der erfolgreichen Installation sollten Sie folgende Einstellungen vornehmen:

### 1. Admin-Passwort ändern

**Wo:** Mailcow Administrationsoberfläche

Die Oberfläche ist nur über die Loopback-Adresse des Servers erreichbar. Bauen Sie dafür zunächst einen SSH-Tunnel auf:

```bash
ssh -L 8443:127.0.0.1:8443 <benutzer>@<ihre-server-ip>
```

Öffnen Sie anschließend `https://localhost:8443` im Browser.

1. Melden Sie sich mit den Standard-Zugangsdaten an
2. Klicken Sie oben rechts auf **Admin**
3. Wählen Sie **Passwort ändern**
4. Vergeben Sie ein sicheres, neues Passwort

:::danger[Kritisch]
Dies ist der wichtigste Sicherheitsschritt und sollte sofort nach der Installation durchgeführt werden!
:::

### 2. E-Mail-Einstellungen konfigurieren

**Wo:** edulution-Plattform → [Einstellungen → E-Mails](/docs/edulution-plattform/konfiguration/einstellungen#e-mails)

Hier können Sie folgende Einstellungen anpassen:

- **SOGo Theme** - Wählen Sie zwischen hellem und dunklem Design
- **Benutzer-Mailformate** - Konfigurieren Sie das Schema für E-Mail-Adressen
- **Quota-Einstellungen** - Anpassen über Override-Konfiguration (siehe [Konfiguration](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/administration#konfiguration))

### 3. Sync-Gruppen überprüfen

**Wo:** Override-Konfiguration (`/srv/docker/edulution-mail/mail.override.config`)

Standardmäßig werden folgende Gruppen synchronisiert:
- `role-schooladministrator`
- `role-teacher`
- `role-student`

Falls Sie andere Gruppen synchronisieren möchten, erstellen Sie eine Override-Konfiguration:

```json
{
  "GROUPS_TO_SYNC": "role-teacher,role-student,ihre-custom-gruppe"
}
```

Weitere Details finden Sie unter [Administration → Konfiguration](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/administration#konfiguration).

### 4. Firewall-Regeln einrichten

**Wo:** Ihre Firewall-Lösung (z.B. Sophos, pfSense, ufw, iptables)

Stellen Sie sicher, dass folgende Ports in Ihrer Firewall freigegeben sind:

**Öffentlich erreichbar (Internet):**
| Port | Protokoll | Dienst | Beschreibung |
|------|-----------|---------|--------------|
| 25 | TCP | SMTP | E-Mail-Empfang |
| 587 | TCP | SMTP Submission | E-Mail-Versand (authentifiziert) |
| 143 | TCP | IMAP | E-Mail-Abruf (unverschlüsselt) |
| 993 | TCP | IMAPS | E-Mail-Abruf (verschlüsselt) |
| 110 | TCP | POP3 | E-Mail-Abruf (unverschlüsselt) |
| 995 | TCP | POP3S | E-Mail-Abruf (verschlüsselt) |
| 80 | TCP | HTTP | Webmail (Weiterleitung zu HTTPS) |
| 443 | TCP | HTTPS | Webmail (verschlüsselt) |

**Nicht freigeben:**
| Port | Protokoll | Dienst | Beschreibung |
|------|-----------|---------|--------------|
| 8443 | TCP | Mailcow Admin | Administrationsoberfläche, nur auf `127.0.0.1` |

:::warning[Port 8443 nicht freigeben]
Ab **edulution-mail v1.3.2** ist Port 8443 an `127.0.0.1` gebunden; der Zugriff erfolgt über einen SSH-Tunnel (siehe [Zugriff auf die Mailcow Administrationsoberfläche](#zugriff-auf-die-mailcow-administrationsoberfläche)). Eine Freigabe in der Firewall ist in keinem Fall erforderlich.
:::

### 5. DNS-Einträge überprüfen

**Wo:** Mailcow Administrationsoberfläche → **Konfiguration** → **Diagnostics**

Mailcow bietet eine integrierte DNS-Prüfung:

1. Melden Sie sich in der Mailcow Admin-Oberfläche an
2. Navigieren Sie zu **Konfiguration**
3. Wählen Sie **Diagnostics**
4. Klicken Sie auf **DNS-Prüfung**

Die Oberfläche zeigt Ihnen:
- Welche DNS-Einträge erforderlich sind
- Ob diese korrekt konfiguriert sind
- Wie die Einträge konkret aussehen müssen (MX, SPF, DKIM, DMARC)

:::tip[Automatische Generierung]
Mailcow generiert alle notwendigen DNS-Einträge automatisch. Sie müssen diese nur noch in Ihrer DNS-Verwaltung eintragen.
:::

## Theme Switch Setup

:::info[Nur für ältere Installationen]
Dieser Abschnitt ist nur relevant, wenn Sie **edulution-installer < v1.0.0** verwendet haben.

Bei neueren Installationen (edulution-installer >= v1.0.0 und edulution-Plattform >= v1.6.14) ist dieser Schritt bereits automatisch konfiguriert.
:::

Um aus der edulution-Plattform Administrationsoberfläche das SOGo-Theme umstellen zu können, muss ein zusätzlicher Volume-Mount eingerichtet werden.

### Volume-Mount konfigurieren

Führen Sie folgenden Befehl aus, um den SOGo-Konfigurationsordner in den edulution-api Container zu mounten:

```bash
sed -i '/^\s*volumes:/a\      - /srv/docker/edulution-mail/mailcow/data/conf/sogo:/data/apps/mail/sogo/overrides:rw' /srv/docker/edulution-ui/docker-compose.yml
```

### Theme auswählen

Nach der Konfiguration des Volume-Mounts:

1. Melden Sie sich in der edulution-Plattform als Administrator an
2. Navigieren Sie zu [**Einstellungen** → **E-Mails**](/docs/edulution-plattform/konfiguration/einstellungen#e-mails)
3. Wählen Sie das gewünschte SOGo-Theme (Hell/Dunkel) aus

Die Theme-Änderung wird sofort für alle Benutzer wirksam.

## Weitere Einrichtung

Die Verbindungsdaten des integrierten E-Mail-Clients – Mailcow-API,
IMAP, SMTP, ManageSieve und DAV – werden in den Einstellungen der
Mail-App gepflegt. Siehe
[Mail-App konfigurieren](./mail-app-konfiguration.md).

{/* ![Auswahl des SOGo-Themes](assets/setupMailTheme.webp) */}

## Fehlerbehebung

### Abwesenheitsnotiz schlägt fehl (502 / lange Ladezeiten)

Wenn das Aktivieren einer Abwesenheitsnotiz nach ~10 Sekunden mit **502** fehlschlägt (oder die Abwesenheits-Einstellungen sehr langsam laden), erreicht der `edulution-api` Container den ManageSieve-Dienst von Mailcow (Port 4190) nicht. Webmail und IMAP funktionieren weiter, da sie nicht direkt über edu-api → dovecot laufen — deshalb fällt das Problem oft erst bei der Abwesenheitsnotiz auf.

Eine mögliche Ursache ist, dass `edulution-api` nach einem Redeploy/Update **nicht mehr im Mailcow-Netzwerk** ist: Die Einbindung wird normalerweise von edulution-mail beim Start gesetzt (siehe [Mailserver-Hosts konfigurieren](#schritt-5-mailserver-hosts-konfigurieren)).

**Prüfen** (im edulution-api Container):

```bash
docker exec edulution-api nc -vz dovecot 4190
```

- `open` → Verbindung besteht, Ursache liegt woanders.
- `bad address 'dovecot'` / Timeout → edu-api ist nicht im Mailcow-Netzwerk.

**Beheben:**

```bash
docker restart edulution-mail
docker exec edulution-api nc -vz dovecot 4190   # muss nun verbinden
```

Der Neustart von edulution-mail bindet den aktuellen edu-api-Container wieder in das Mailcow-Netzwerk ein. Danach kehrt das Aktivieren der Abwesenheitsnotiz von 10s→502 auf eine Antwort im Millisekundenbereich zurück.

## Nächste Schritte

Nach der Installation können Sie:

- [E-Mail-Clients konfigurieren](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/clients/server-settings) - Anleitungen für verschiedene Mail-Clients
- [Verteilerlisten einrichten](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/verteilerlisten) - Projekt-basierte E-Mail-Verteiler
- [Mail-Migration durchführen](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/migration-einrichten) - Bestehende E-Mails importieren
- [Erweiterte Administration](/docs/edulution-plattform/apps/mit-einrichtung/e-mail/konfiguration/administration) - Mailserver konfigurieren und verwalten
