---
sidebar_position: 10
---

# Admin-Features & Tipps

Erweiterte Funktionen und Tipps für Administratoren zur Verwaltung von edulution Mail.

## 🔗 Direkt-Links mit vorausgefüllten Daten

Als Administrator können Sie Links zur Client-Anleitungen mit vorausgefüllten Daten erstellen und an Benutzer weitergeben.

### Query-Parameter

Die Dokumentationsseiten unterstützen folgende URL-Parameter:

| Parameter | Beschreibung | Beispiel |
|-----------|--------------|----------|
| `domain` | Mail-Server Domain | `mail.ihre-schule.de` |
| `email` | E-Mail-Adresse des Benutzers | `max.mustermann@ihre-schule.de` |

### Beispiel-Links

**Nur Domain vorausfüllen:**
```
https://docs.edulution.io/docs/edulution-mail/mail-clients/server-settings?domain=mail.beispielschule.de
```

**Domain und E-Mail vorausfüllen:**
```
https://docs.edulution.io/docs/edulution-mail/mail-clients/server-settings?email=max@beispiel.de&domain=mail.beispiel.de
```

**Direkt zur Apple Mail Anleitung:**
```
https://docs.edulution.io/docs/edulution-mail/mail-clients/apple-mail?email=max@beispiel.de&domain=mail.beispiel.de
```

### Praktische Anwendungsfälle

**1. Willkommens-E-Mail für neue Benutzer**
```
Hallo Max,

Ihr E-Mail-Konto wurde eingerichtet!

Klicken Sie hier für die Einrichtungsanleitung:
https://docs.edulution.io/docs/edulution-mail/mail-clients/server-settings?email=max.mustermann@ihre-schule.de

Beste Grüße
Ihr IT-Team
```

**2. Kollegen-Dokumentation**
- Erstellen Sie personalisierte Links für jeden Kollegen
- Senden Sie diese z.B. per E-Mail oder Chat
- Die Server-Einstellungen sind bereits ausgefüllt

**3. Intranet/Wiki Integration**
- Erstellen Sie einen Link-Generator in Ihrem Intranet
- Automatisches Einfügen der Schul-Domain
- Benutzer müssen nur noch ihre E-Mail-Adresse eingeben

**4. Support-Tickets**
- Fügen Sie vorgenerierte Links in Support-Antworten ein
- Spart Zeit bei der Fehlerbehebung
- Benutzer sehen sofort die richtigen Einstellungen

## 📧 .mobileconfig Profil-Verwaltung

### Apple-Profile vom Webmail

Benutzer können ihre .mobileconfig-Datei selbst im Webmail generieren:

1. Webmail öffnen: `https://mail.ihre-domain.de/SOGo`
2. Einstellungen (Zahnrad) → **Apple Profile**
3. .mobileconfig herunterladen
4. Profil auf iOS/macOS installieren

### Vorteile der Webmail-Methode

- ✅ **App-Passwörter:** Automatisch generiert und eingebettet
- ✅ **Sicherheit:** Haupt-Passwort bleibt geschützt
- ✅ **Vollständig:** E-Mail (IMAP/SMTP), Kalender (CalDAV), Kontakte (CardDAV)
- ✅ **Self-Service:** Benutzer können es selbst machen
- ✅ **Widerrufbar:** App-Passwörter können einzeln gelöscht werden

### Massenverteilung (für viele Benutzer)

Falls Sie viele Benutzer gleichzeitig einrichten müssen:

1. **Automatische Konfiguration bevorzugen**
   - Mailcow stellt autoconfig/autodiscover bereit
   - Thunderbird und Apple Mail erkennen automatisch

2. **Schulungs-Session**
   - Zeigen Sie Benutzern wie sie .mobileconfig selbst herunterladen
   - Einmalige Schulung spart Support-Aufwand

3. **Dokumentation verteilen**
   - Erstellen Sie personalisierte Links (siehe oben)
   - Versenden Sie diese per E-Mail oder Rundschreiben

## 🔧 Troubleshooting für Admins

### Häufige Support-Anfragen

**"Automatische Konfiguration funktioniert nicht"**

Checkliste:
- [ ] DNS-Einträge korrekt? (`autoconfig.ihre-domain.de`, `autodiscover.ihre-domain.de`)
- [ ] SSL-Zertifikat gültig?
- [ ] Firewall-Ports offen? (443, 993, 465)
- [ ] Client auf aktueller Version?

**"Outlook funktioniert nicht"**

Antwort:
- Outlook 2019+ unterstützt kein ActiveSync ohne OAuth2
- Empfehlen Sie Migration zu Thunderbird
- Alternativ: Nur IMAP/SMTP nutzen (ohne Kalender/Kontakte)
- Siehe: [Outlook Anleitung](./clients/outlook)

**"Kalender/Kontakte synchronisieren nicht"**

Checkliste:
- [ ] CalDAV/CardDAV URLs korrekt?
- [ ] Benutzername = vollständige E-Mail-Adresse?
- [ ] Ports 443 erreichbar?
- [ ] Bei iOS: Account in Einstellungen aktiviert?

### Nützliche Admin-Befehle

**Mailcow Logs anzeigen:**
```bash
docker-compose logs -f --tail=100 sogo-mailcow
docker-compose logs -f --tail=100 dovecot-mailcow
```

**SOGo Cache leeren:**
```bash
docker-compose exec -u sogo sogo-mailcow sogo-tool expire-sessions
```

**App-Passwörter anzeigen:**
- Webmail → Administration → Benutzer → [Benutzer auswählen] → App-Passwörter

## 📊 Best Practices

### Für neue Installationen

1. **Autoconfig/Autodiscover testen**
   - Testen Sie mit Thunderbird und Apple Mail
   - Stellen Sie sicher, dass DNS korrekt konfiguriert ist

2. **Dokumentation vorbereiten**
   - Erstellen Sie Links mit Ihrer Domain
   - Verteilen Sie diese an Benutzer

3. **Schulung planen**
   - Zeigen Sie .mobileconfig Download
   - Erklären Sie App-Passwörter
   - Demonstrieren Sie Thunderbird Auto-Setup

### Für bestehende Benutzer

1. **Migration kommunizieren**
   - Ankündigung rechtzeitig versenden
   - Klare Anleitungen bereitstellen
   - Support-Zeitfenster einplanen

2. **Outlook-Nutzer informieren**
   - Frühzeitig über Einschränkungen informieren
   - Thunderbird als Alternative anbieten
   - Schulung anbieten

3. **Self-Service fördern**
   - Dokumentation gut sichtbar verlinken
   - FAQs erstellen
   - Video-Tutorials (optional)

## 🔒 Sicherheitshinweise

### App-Passwörter

- ✅ Verwenden Sie App-Passwörter für mobile Geräte
- ✅ Haupt-Passwort nur für Webmail
- ✅ Regelmäßige Überprüfung aktiver App-Passwörter
- ✅ Bei Geräteverlust: App-Passwort sofort widerrufen

### Passwort-Richtlinien

- Mindestlänge: 12 Zeichen
- Komplexität erzwingen
- Regelmäßige Passwort-Änderung (optional)
- 2FA aktivieren (falls verfügbar)

### Monitoring

- Regelmäßige Log-Überprüfung
- Ungewöhnliche Login-Versuche überwachen
- Große Datenmengen-Transfers beobachten
- Bounce-Rate im Auge behalten

## 📞 Support-Ressourcen

- **edulution Community:** [ask.linuxmuster.net/c/edulution/63](https://ask.linuxmuster.net/c/edulution/63)
- **Mailcow Dokumentation:** [docs.mailcow.email](https://docs.mailcow.email/)
- **SOGo Dokumentation:** [sogo.nu/support.html](https://sogo.nu/support.html)
