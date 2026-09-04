---
sidebar_position: 5
sidebar_custom_props:
  audience: admin
---

# Konfiguration

Alle Einstellungen unter **Admin → Sicherheit → Cookie Auth Settings**.

## Optionen

| Option | Erforderlich | Beschreibung |
|--------|--------------|--------------|
| **Keycloak Realm URL** | Ja* | URL zum Keycloak Realm |
| **Cookie Name** | Ja | Name des JWT-Cookies |
| **User Claim** | Ja | JWT-Claim für Benutzername |
| **JWT Algorithm** | Nein | Standard: RS256 |
| **Public Key** | Ja* | Alternativ zu Realm URL |
| **Fallback to email** | Nein | Bei User-Suche auf E-Mail zurückfallen |
| **edulution API URL** | Nein | Für erweiterte Funktionen |

*Entweder Realm URL ODER Public Key muss angegeben werden.

## Gängige User Claims

| Claim | Beispielwert |
|-------|--------------|
| `preferred_username` | `max.mustermann` |
| `sub` | `f47ac10b-58cc-4372...` |
| `email` | `max@example.com` |

## Erweiterte Optionen

![Cookie Auth Advanced Options](/img/anbindungen/cookie-auth-advanced.png)

## config.php Alternative

```php title="config/config.php"
'session_cookie_samesite' => 'None',

'nextcloud-app-cookieauth' => [
    'realm_url' => 'https://ihre-edulution-domain.de/auth/realms/edulution',
    'cookie_name' => 'authToken',
    'user_claim' => 'preferred_username',
],
```

## Konfigurationspriorität

1. Admin-UI (Datenbank) - höchste Priorität
2. config.php - Fallback
3. Defaults

Bei Migration von config.php zur Admin-UI: **Migrate Settings** Button verwenden.
