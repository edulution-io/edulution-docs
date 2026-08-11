---
sidebar_position: 6
---

# Troubleshooting

## Debug-Endpoint

```bash
curl https://cloud.ihre-edulution-domain.de/apps/nextcloud-app-cookieauth/debug
```

## Häufige Probleme

### Kein Auto-Login (kein Cookie)

**Ursache:** Nextcloud läuft nicht unter einer Subdomain von edulution.

| edulution UI | Nextcloud | Status |
|--------------|-----------|--------|
| `edu.schule.de` | `cloud.edu.schule.de` | ✅ Funktioniert |
| `edu.schule.de` | `nextcloud.schule.de` | ❌ Cookie wird nicht gesendet |

**Lösung:** Nextcloud unter Subdomain von edulution betreiben (z.B. `cloud.edu.schule.de`).

### "User not found"

| Ursache | Lösung |
|---------|--------|
| Benutzer existiert nicht | Benutzer anlegen oder LDAP-Sync prüfen |
| Falscher `user_claim` | Claim ändern (z.B. `preferred_username`) |

### "Signature verification failed"

| Ursache | Lösung |
|---------|--------|
| Falscher Public Key | Realm-URL prüfen |
| Key-Rollover | Cache leeren (siehe unten) |

**Cache leeren:**
```bash
sudo -u www-data php occ config:app:delete nextcloud-app-cookieauth cached_public_key
sudo -u www-data php occ config:app:delete nextcloud-app-cookieauth cached_public_key_time
```

### Nextcloud wird im iFrame nicht angezeigt

**Ursache:** Framing ist in Nextcloud nicht erlaubt.

**Lösung:** Siehe [Voraussetzungen → Framing erlauben](/docs/anbindungen/voraussetzungen#framing-erlauben)

### Session funktioniert nicht im iFrame

**Lösung:** In `config/config.php`:
```php
'session_cookie_samesite' => 'None',
```

### "Failed to fetch realm info"

- Realm-URL im Browser prüfen
- Firewall-Regeln prüfen
- SSL-Zertifikat prüfen

## Logs

```bash
tail -f /var/www/nextcloud/data/nextcloud.log | grep -i cookieauth
```

## Support

- **GitHub Issues:** [nextcloud-app-cookieauth](https://github.com/netzint/nextcloud-app-cookieauth/issues)
