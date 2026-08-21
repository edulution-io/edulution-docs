---
sidebar_position: 3
---

# Voraussetzungen

## Domain-Anforderung

:::danger Wichtig
Nextcloud **muss** unter einer Subdomain der edulution-Domain laufen.

| edulution Plattform | Nextcloud | Funktioniert? |
|--------------|-----------|---------------|
| `edu.schule.de` | `cloud.edu.schule.de` | ✅ Ja |
| `edu.schule.de` | `nextcloud.schule.de` | ❌ Nein |
| `edu.schule.de` | `cloud.andere.de` | ❌ Nein |

Das JWT-Cookie wird auf `.edu.schule.de` gesetzt und ist nur für Subdomains gültig.
:::

## System-Anforderungen

| Komponente | Anforderung |
|------------|-------------|
| **Nextcloud** | 25 oder höher |
| **PHP** | 8.1 oder höher |
| **HTTPS** | Erforderlich |

## Nextcloud-Konfiguration

### Session-Cookie für iFrame

In `config/config.php` hinzufügen:

```php
'session_cookie_samesite' => 'None',
```

### Framing erlauben

Nextcloud blockiert standardmäßig das Einbetten in iFrames. Das muss deaktiviert werden:

**1. Nginx-Konfiguration anpassen:**

```nginx
# Diese Zeile auskommentieren oder entfernen:
# add_header X-Frame-Options "SAMEORIGIN";

# Stattdessen hinzufügen (URL anpassen):
add_header X-Frame-Options "ALLOW-FROM https://ihre-edulution-domain.de";
add_header Content-Security-Policy "frame-ancestors https://ihre-edulution-domain.de";
```

**2. Nextcloud CSP anpassen:**

Die edulution-URL muss in den `allowedFrameAncestors` von Nextcloud eingetragen werden:

```php title="lib/public/AppFramework/Http/ContentSecurityPolicy.php"
// In allowedFrameAncestors Array die edulution-URL hinzufügen:
'https://ihre-edulution-domain.de'
```

:::warning Nach Updates
Diese Änderung muss nach Nextcloud-Updates ggf. erneut vorgenommen werden.
:::

## Benutzer-Synchronisation

Die Cookie Auth App erstellt **keine neuen Benutzer**. Benutzer müssen bereits in Nextcloud existieren (z.B. via LDAP-Sync).

## Weiter

→ [Installation](/docs/anbindungen/installation)
