# Changelog & Config-Anpassungen

Diese Seite dokumentiert Konfigurationsänderungen, die bei einem Update von edulution manuell nachgezogen werden müssen.

## edulution-ui / edulution-api v2.0.156

Beim Update der **edulution-ui** und **edulution-api** Container auf v2.0.156 oder höher muss **edulution-mail auf v1.1.13 (oder höher)** aktualisiert werden. edulution-mail verbindet sich daraufhin selbstständig mit dem Mailcow-Netzwerk — sie ruft beim Start ein `docker network connect` für den edulution-api Container auf. Weitere manuelle Schritte sind funktional nicht erforderlich.

:::warning[Versionskopplung]
Ohne Update von edulution-mail auf v1.1.13+ findet die edulution-ui den Mail-Stack nach dem Update der edu-ui/edu-api Container nicht mehr.
:::

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

Nach Änderungen den Mail-Stack neu starten:

```bash
cd /srv/docker/edulution-mail && docker compose up -d
```
