# Changelog & Config-Anpassungen

Diese Seite dokumentiert Konfigurationsänderungen, die bei einem Update von edulution manuell nachgezogen werden müssen.

## edulution-mail v1.3.2

Mit v1.3.2 ändert sich die Erreichbarkeit der Mailcow-Administrationsoberfläche, und die Proxy-Konfiguration wird angepasst. Beide Punkte betreffen bestehende Installationen.

:::warning[Versionskopplung]
Die angepasste Proxy-Konfiguration setzt **edulution-mail v1.3.2 oder höher** voraus. Aktualisieren Sie zuerst den Container und ziehen Sie danach die Konfiguration nach.
:::

### Schritt 1: Mailcow-API-URL prüfen

**edulution-UI → Einstellungen → E-Mails → Mailserver**

Prüfen Sie, welcher Wert im Feld **URL** eingetragen ist. Er muss lauten:

```
https://mailcowdockerized-nginx-mailcow-1
```

Ältere Installationen haben hier teilweise noch `https://edu-traefik/sogo-mail` stehen — dieser Wert wurde vom Webinstaller gesetzt. Stellen Sie ihn um und klicken Sie oben rechts auf **Speichern**.

:::danger[Reihenfolge beachten]
Diese Umstellung muss **vor** der Anpassung der Proxy-Konfiguration erfolgen. Andernfalls erreicht die edulution-api die Mailcow-API nicht mehr — Mailbox-Status, Sync-Trigger und Admin-Funktionen schlagen dann fehl.
:::

Die restlichen Werte des Abschnitts sind in der [Installations-Anleitung, Schritt 5](/docs/edulution-mail/installation#schritt-5-mailserver-hosts-konfigurieren) beschrieben.

### Schritt 2: Proxy-Konfiguration anpassen

**edulution-UI → Einstellungen → E-Mails → Proxy-Konfiguration (Expertenmodus)**

Zwei Änderungen an der dynamischen Mail-Konfiguration:

```diff
     edulution-sogo-mail:
-      rule: PathPrefix(`/sogo-mail`)
+      rule: Path(`/sogo-mail/sogo-auth.php`)
       service: edulution-sogo
```

```diff
     sogo-headers:
       headers:
         customRequestHeaders:
           X-Forwarded-Proto: https
+          X-Api-Key: ""
         frameDeny: false
```

Der Router `edulution-sogo-mail` veröffentlicht damit genau den Pfad, den der Browser unter diesem Präfix benötigt: `sogo-auth.php`. Die Anmeldung antwortet mit einer Weiterleitung auf `/SOGo/so/{login}`, die über den Router `edulution-sogo` läuft — das Webmail funktioniert unverändert. Die Router `edulution-active-sync` und `edulution-autodiscover` sind eigenständig und bleiben ebenfalls unberührt.

Der leere Wert bei `X-Api-Key` entfernt diesen Header aus eingehenden Anfragen, bevor sie an den Mailserver weitergereicht werden; auf diesem Weg wird er nicht benötigt.

Alles Übrige — `strip-sogo-mail-prefix`, `sogo-buffers` und der Service `edulution-sogo` — bleibt wie bisher. Die vollständige Konfiguration zum Übernehmen finden Sie in der [Installations-Anleitung, Schritt 3](/docs/edulution-mail/installation#schritt-3-proxy-konfiguration-hinzufügen).

Anschließend den Mail-Stack neu starten:

```bash
cd /srv/docker/edulution-mail && docker compose up -d
```

### Schritt 3: Zugriff auf die Mailcow-Oberfläche umstellen

Port `8443` ist ab v1.3.2 an `127.0.0.1` gebunden und damit nicht mehr direkt über die Server-IP erreichbar. Der Zugriff erfolgt über einen SSH-Tunnel:

```bash
ssh -L 8443:127.0.0.1:8443 <benutzer>@<ihre-server-ip>
```

Solange die SSH-Verbindung besteht, erreichen Sie die Oberfläche im Browser unter `https://localhost:8443`.

Passen Sie bestehende Lesezeichen entsprechend an. Firewall-Regeln für Port 8443 werden nicht mehr benötigt und können entfernt werden.

:::info[Container-Neustart erforderlich]
Die Portänderung greift erst, wenn der Container `nginx-mailcow` neu erstellt wird. edulution-mail übernimmt das beim Start automatisch. Prüfen können Sie das Ergebnis mit:

```bash
docker port mailcowdockerized-nginx-mailcow-1 443
```

Erwartete Ausgabe: `127.0.0.1:8443`.
:::

## edulution-ui / edulution-api v2.0.156

Beim Update der **edulution-ui** und **edulution-api** Container auf v2.0.156 oder höher muss **edulution-mail auf v1.1.13 (oder höher)** aktualisiert werden. edulution verbindet sich daraufhin selbstständig mit dem Mailcow-Netzwerk — edulution-mail ruft beim Start ein `docker network connect` für den edulution-api Container auf.

:::warning[Versionskopplung]
Ohne Update von edulution-mail auf v1.1.13+ findet die edulution-ui den Mail-Stack nach dem Update der edu-ui/edu-api Container nicht mehr.
:::

### Mailserver-Hosts in der edulution-UI anpassen

Da edulution-api jetzt direkt im Mailcow-Netzwerk hängt, müssen IMAP- und SMTP-Server auf die internen Container-Hostnamen umgestellt werden:

**edulution-UI → Einstellungen → E-Mails → Mailserver**

| Feld | Wert |
|------|------|
| **URL** (Mailcow-API) | `https://mailcowdockerized-nginx-mailcow-1` |
| **API-Schlüssel** | `***` |
| **IMAP-Server** | `dovecot` |
| **IMAP Port** | `993` |
| **SMTP-Server** | `postfix` |
| **SMTP Port** | `587` |

Ohne den korrekten URL-Wert kann die edulution-UI nicht mit der Mailcow-API kommunizieren. Anschließend oben rechts auf **Speichern** klicken.

### Optionales Aufräumen: IMAP/IMAPS in Traefik

Sobald edulution-api über das Mailcow-Netzwerk direkt mit Dovecot sprechen kann, werden die alten IMAP-/IMAPS-Routen über Traefik nicht mehr benötigt — sie funktionierten in der Praxis ohnehin nicht zuverlässig. Diese Anpassung ist **reines Cleanup**, für die Funktion nicht erforderlich.

#### traefik.yml

`imap`/`imaps`-EntryPoints entfernen:

```diff
-  imap:
-    address: ":143"
-  imaps:
-    address: ":993"
```

#### Dynamische Mail-Traefik-Konfiguration

In **edulution-UI → Einstellungen → E-Mails → Proxy-Konfiguration (Expertenmodus)** den kompletten `tcp:`-Block entfernen (Router `imap`/`imaps`, Services `mail-imap`/`mail-imap-ssl`) — er referenziert die oben entfernten EntryPoints und sollte zusammen mit ihnen verschwinden.

Die finale dyn. Mail-Konfiguration (ohne `tcp:`-Block) finden Sie in der [Installations-Anleitung, Schritt 3](/docs/edulution-mail/installation#schritt-3-proxy-konfiguration-hinzufügen) — sie kann 1:1 in den Expertenmodus übernommen werden.

Nach Änderungen den Mail-Stack neu starten:

```bash
cd /srv/docker/edulution-mail && docker compose up -d
```
