---
sidebar_position: 4
sidebar_custom_props:
  audience: admin
---

# Installation

## Funktionsweise

Das Plugin prüft bei jedem Nextcloud-Aufruf, ob ein JWT-Cookie vorhanden ist. Wenn ja:

1. Token wird validiert (Signatur, Ablaufzeit)
2. Benutzername wird aus dem Token extrahiert
3. Benutzer wird automatisch in Nextcloud eingeloggt

So können Benutzer, die in edulution eingeloggt sind, Nextcloud ohne erneute Anmeldung nutzen.

## App installieren

```bash
cd /pfad/zu/nextcloud/apps
git clone https://github.com/netzint/nextcloud-app-cookieauth
chown -R www-data:www-data nextcloud-app-cookieauth/
sudo -u www-data php occ app:enable nextcloud-app-cookieauth
```

:::info Apps-Verzeichnis
Der Pfad zum Apps-Verzeichnis variiert je nach Installation, z.B.:
- `/var/www/nextcloud/apps`
- `/var/www/html/nextcloud/apps`
- `/srv/nextcloud/apps`
:::

## Konfiguration

**Einstellungen → Verwaltung → Sicherheit → Cookie Auth Settings**

![Cookie Auth Settings](/img/anbindungen/cookie-auth-settings.png)

| Feld | Wert |
|------|------|
| **Keycloak Realm URL** | `https://ihre-edulution-domain.de/auth/realms/edulution` |
| **Cookie Name** | `authToken` |
| **User Claim** | `preferred_username` |

Klicken Sie auf **Test** und dann **Save**.

## Nextcloud in edulution einbinden

Nextcloud muss als App Frame in edulution angelegt werden:

1. Im App Store **App Frame** auswählen
2. URL eingeben: `https://cloud.ihre-edulution-domain.de`
3. Name und Berechtigungen konfigurieren

→ Siehe [App Frame - Externe Webseiten einbinden](/docs/edulution-plattform/konfiguration/administration#261-app-frame---externe-webseiten-einbinden) für Details.

## Testen

Debug-Endpoint aufrufen:

```
https://cloud.ihre-edulution-domain.de/apps/nextcloud-app-cookieauth/debug
```

Bei erfolgreichem Login:
```json
{
  "authenticated": true,
  "user": {
    "uid": "benutzername"
  }
}
```

## Weiter

→ [Konfiguration](/docs/edulution-plattform/konfiguration/anbindungen/konfiguration) (erweiterte Optionen)
