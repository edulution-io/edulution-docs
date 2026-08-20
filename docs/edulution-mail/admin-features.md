---
sidebar_position: 10
---

# Admin-Features & Tipps

## Direkt-Links mit vorausgefüllten Daten

Erstellen Sie personalisierte Links mit vorausgefüllten Server-Einstellungen:

**Beispiel:**
```
https://docs.edulution.io/edulution-mail/clients/server-settings?email=max@schule.de&domain=mail.schule.de
```

**Parameter:**
- `domain` - Mail-Server Domain
- `email` - E-Mail-Adresse des Benutzers

## Apple-Profile (.mobileconfig)

Benutzer können Profile selbst im Webmail generieren:

1. Webmail öffnen: `https://mail.ihre-domain.de/SOGo`
2. Einstellungen → **Apple Profile**
3. .mobileconfig herunterladen und installieren

**Vorteile:** Automatische App-Passwörter, vollständige Konfiguration (Mail, Kalender, Kontakte)

## Troubleshooting

**Automatische Konfiguration funktioniert nicht:**
- DNS-Einträge korrekt? (`autoconfig`, `autodiscover`)
- SSL-Zertifikat gültig?
- Firewall-Ports offen? (443, 993, 465)

**Outlook funktioniert nicht:**
- Outlook 2019+ unterstützt kein ActiveSync ohne OAuth2
- Alternative: Thunderbird oder nur IMAP/SMTP

## Nützliche Befehle

**Logs anzeigen:**
```bash
docker compose logs -f --tail=100 sogo-mailcow
```

**SOGo Cache leeren:**
```bash
docker compose exec -u sogo sogo-mailcow sogo-tool expire-sessions
```

## SOGo Worker erhöhen

**Problem:** Mail-Clients fragen wiederholt nach Passwort

**Lösung:**

1. Konfiguration bearbeiten:
   ```bash
   nano /srv/docker/edulution-mail/mailcow/data/conf/sogo/sogo.conf
   ```

2. Worker erhöhen (Standard: 20, empfohlen: 80-100):
   ```
   WOWorkersCount = "80";
   ```

3. Neustart:
   ```bash
   docker compose restart sogo-mailcow
   ```

## Support

- [edulution Community](https://ask.linuxmuster.net/c/edulution/63)
- [Mailcow Dokumentation](https://docs.mailcow.email/)
- [SOGo Dokumentation](https://sogo.nu/support.html)
