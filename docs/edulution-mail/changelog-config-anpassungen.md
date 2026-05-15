# Changelog & Config-Anpassungen

Diese Seite dokumentiert Konfigurationsänderungen, die bei einem Update von edulution manuell nachgezogen werden müssen.

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
