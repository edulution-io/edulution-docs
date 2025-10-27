# Installation

Die edulution Mail Lösung basiert auf Mailcow und bietet eine vollständige E-Mail-Infrastruktur für Schulen.

:::note
Dieser Bereich wird kontinuierlich erweitert. Weitere Anleitungen zur Einrichtung von Mail-Clients folgen in Kürze.
:::

## 2.1.1 Setup Theme Switch (edulution UI \>= v1.6.14)

Um aus der edulution UI Administrationsoberfläche heraus das Theme
umzustellen, benötigen Sie folgende zusätzliche Schritte:

``` {.bash caption="SOGo Volume in edulution-api Container mounten"}
# Volume mount in docker-compose.yml erstellen
sed -i '/^\s*volumes:/a\      - /srv/docker/edulution-mail/mailcow/data/conf/sogo:/data/apps/mail/sogo/overrides:rw' /srv/docker/edulution-ui/docker-compose.yml
```

:::note
Dieser Schritt ist nur notwendig, wenn edulution-installer <
[v1.0.0](https://github.com/edulution-io/edulution-installer/releases/tag/v1.0.0)
verwendet wurde.
:::

Anschließend kann in den Einstellungen zur Mail-App das Theme ausgewählt
werden.

{/* ![Auswahl des SOGo-Themes](assets/setupMailTheme.webp) */}
