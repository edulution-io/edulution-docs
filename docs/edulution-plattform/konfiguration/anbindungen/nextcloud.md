---
sidebar_position: 2
sidebar_custom_props:
  audience: admin
---

# Nextcloud Cookie Auth

<img src="/img/anbindungen/edulution.io_NEXTCLOUD.svg" alt="Nextcloud Logo" width="200" />

Nextcloud-Plugin für automatischen Login via edulution.

## Was macht dieses Plugin?

Wenn ein Benutzer in edulution eingeloggt ist und Nextcloud im iFrame öffnet, wird er automatisch auch in Nextcloud eingeloggt - ohne erneute Anmeldung.

## Wie funktioniert es?

```mermaid
graph LR
    A[Benutzer] -->|Login| B[edulution]
    B -->|setzt Cookie| C[Browser]
    C -->|sendet Cookie| D[Nextcloud]
    D -->|validiert| E[Keycloak]
```

1. Benutzer meldet sich bei edulution an
2. Keycloak setzt ein JWT-Cookie im Browser
3. Beim Öffnen von Nextcloud wird das Cookie mitgesendet
4. Die Cookie Auth App validiert das Token und loggt den Benutzer ein

## Voraussetzungen

:::danger Wichtig
Nextcloud muss unter einer **Subdomain von edulution** laufen, z.B. `cloud.edu.schule.de`
:::

- Nextcloud 25 oder höher
- PHP 8.1 oder höher
- HTTPS

## Installation

1. **[Voraussetzungen prüfen](/docs/edulution-plattform/konfiguration/anbindungen/voraussetzungen)**
2. **[Plugin installieren](/docs/edulution-plattform/konfiguration/anbindungen/installation)**
3. **[Konfigurieren](/docs/edulution-plattform/konfiguration/anbindungen/konfiguration)**
