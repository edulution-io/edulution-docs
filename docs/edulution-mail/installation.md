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

- **edulution-UI** bereits installiert und konfiguriert
- **Ausreichend Speicherplatz** auf dem Server

:::info Automatische Konfiguration
Die Installation über edulution-UI richtet automatisch alle notwendigen Komponenten ein (Docker, Keycloak-Integration, Netzwerk, etc.). Es sind keine manuellen Vorarbeiten erforderlich.
:::

## Installation über edulution-UI

Die Installation von edulution-mail erfolgt direkt über die edulution-UI Administrationsoberfläche.

:::info Installationsverzeichnis
Der Installer erstellt automatisch das Verzeichnis `/srv/docker/edulution-mail`, in dem alle Mailcow-Daten, Konfigurationsdateien und Logs gespeichert werden.

**Speicherplatz-Bedarf:**
- Grundinstallation: ca. 2-3 GB
- Pro Benutzer: ca. 3 GB (abhängig vom konfigurierten Quota)
- Reserve: mind. 5 GB

**Beispiel:** Für 50 Benutzer sollten ca. 160 GB verfügbar sein (3 GB + 50×3 GB + 5 GB Reserve).
:::

### Schritt 1: E-Mails App installieren

1. Melden Sie sich als Administrator in der edulution-UI an
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

:::warning Wichtig
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

:::note Installationsdauer
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
      rule: PathPrefix(`/sogo-mail`)
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
        PathPrefix(`/autodiscover/autodiscover.xml`)) "
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
tcp:
  routers:
    imap:
      rule: HostSNI(`*`)
      entryPoints:
        - imap
      service: mail-imap
    imaps:
      entryPoints:
        - imaps
      rule: HostSNI(`edulution-traefik`)
      service: mail-imap-ssl
      tls:
        passthrough: true
  services:
    mail-imap:
      loadBalancer:
        servers:
          - address: dovecot-mailcow:143
    mail-imap-ssl:
      loadBalancer:
        servers:
          - address: dovecot-mailcow:993
```

5. Klicken Sie auf **Speichern**

![Proxy-Konfiguration einfügen](/img/edulution-mail/proxy-konfiguration.png)

:::danger Wichtig
Die Proxy-Konfiguration ist zwingend erforderlich! Ohne diese Konfiguration sind die E-Mail-Dienste nicht über die edulution-URL erreichbar.
:::

### Schritt 4: Docker-Anwendung starten

1. Scrollen Sie zum Abschnitt **Docker Anwendungen**
2. Klicken Sie auf **Starten** bei der edulution-mail Anwendung

Die Installation ist nun abgeschlossen und die E-Mail-Dienste werden gestartet.

![E-Mail Docker-Anwendung starten](/img/edulution-mail/email-einstellungen.png)

## Erstkonfiguration

### Zugriff auf die Mailcow Administrationsoberfläche

Nach erfolgreicher Installation ist die Mailcow-Administrationsoberfläche über Port `8443` erreichbar:

```
https://ihre-server-ip:8443
```

**Standard-Zugangsdaten:**
- **Benutzername:** `admin`
- **Passwort:** `moohoo`

:::danger Sicherheitshinweis
Ändern Sie das Standard-Administratorpasswort **sofort** nach der ersten Anmeldung!

Es wird außerdem dringend empfohlen:
- Den Zugriff auf Port 8443 auf interne Netzwerke zu beschränken
- Eine Firewall-Regel einzurichten, die den öffentlichen Zugriff blockiert
- Regelmäßige Passwortänderungen durchzuführen
:::

Weitere Informationen zur Administration finden Sie unter [Administration](/docs/edulution-mail/administration).

### Webmail (SOGo) Zugriff

Das Webmail-Interface ist über Ihre edulution-Instanz erreichbar:

```
https://ihre-edulution-url.de/SOGo/so/
```

Benutzer können sich hier mit ihren edulution-Zugangsdaten anmelden.

## Empfohlene Einstellungen nach der Installation

Nach der erfolgreichen Installation sollten Sie folgende Einstellungen vornehmen:

### 1. Admin-Passwort ändern

**Wo:** Mailcow Administrationsoberfläche (`https://ihre-server-ip:8443`)

1. Melden Sie sich mit den Standard-Zugangsdaten an
2. Klicken Sie oben rechts auf **Admin**
3. Wählen Sie **Passwort ändern**
4. Vergeben Sie ein sicheres, neues Passwort

:::danger Kritisch
Dies ist der wichtigste Sicherheitsschritt und sollte sofort nach der Installation durchgeführt werden!
:::

### 2. E-Mail-Einstellungen konfigurieren

**Wo:** edulution-UI → [Einstellungen → E-Mails](/docs/edulution-ui/administration/einstellungen#e-mails)

Hier können Sie folgende Einstellungen anpassen:

- **SOGo Theme** - Wählen Sie zwischen hellem und dunklem Design
- **Benutzer-Mailformate** - Konfigurieren Sie das Schema für E-Mail-Adressen
- **Quota-Einstellungen** - Anpassen über Override-Konfiguration (siehe [Konfiguration](/docs/edulution-mail/administration#konfiguration))

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

Weitere Details finden Sie unter [Administration → Konfiguration](/docs/edulution-mail/administration#konfiguration).

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

**NUR intern erreichbar (Lokales Netzwerk):**
| Port | Protokoll | Dienst | Beschreibung |
|------|-----------|---------|--------------|
| 8443 | TCP | Mailcow Admin | Administrationsoberfläche |

:::danger Sicherheitshinweis
Beschränken Sie den Zugriff auf Port **8443** (Mailcow Admin) unbedingt auf interne Netzwerke oder VPN! Diese Oberfläche sollte NIEMALS öffentlich erreichbar sein.
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

:::tip Automatische Generierung
Mailcow generiert alle notwendigen DNS-Einträge automatisch. Sie müssen diese nur noch in Ihrer DNS-Verwaltung eintragen.
:::

## Theme Switch Setup

:::info Nur für ältere Installationen
Dieser Abschnitt ist nur relevant, wenn Sie **edulution-installer < v1.0.0** verwendet haben.

Bei neueren Installationen (edulution-installer >= v1.0.0 und edulution-UI >= v1.6.14) ist dieser Schritt bereits automatisch konfiguriert.
:::

Um aus der edulution-UI Administrationsoberfläche das SOGo-Theme umstellen zu können, muss ein zusätzlicher Volume-Mount eingerichtet werden.

### Volume-Mount konfigurieren

Führen Sie folgenden Befehl aus, um den SOGo-Konfigurationsordner in den edulution-api Container zu mounten:

```bash
sed -i '/^\s*volumes:/a\      - /srv/docker/edulution-mail/mailcow/data/conf/sogo:/data/apps/mail/sogo/overrides:rw' /srv/docker/edulution-ui/docker-compose.yml
```

### Theme auswählen

Nach der Konfiguration des Volume-Mounts:

1. Melden Sie sich in der edulution-UI als Administrator an
2. Navigieren Sie zu [**Einstellungen** → **E-Mails**](/docs/edulution-ui/administration/einstellungen#e-mails)
3. Wählen Sie das gewünschte SOGo-Theme (Hell/Dunkel) aus

Die Theme-Änderung wird sofort für alle Benutzer wirksam.

{/* ![Auswahl des SOGo-Themes](assets/setupMailTheme.webp) */}

## Nächste Schritte

Nach der Installation können Sie:

- [E-Mail-Clients konfigurieren](/docs/edulution-mail/clients/server-settings) - Anleitungen für verschiedene Mail-Clients
- [Verteilerlisten einrichten](/docs/edulution-mail/verteilerlisten) - Projekt-basierte E-Mail-Verteiler
- [Mail-Migration durchführen](/docs/edulution-mail/admin_mail_migration) - Bestehende E-Mails importieren
- [Erweiterte Administration](/docs/edulution-mail/administration) - Mailserver konfigurieren und verwalten
