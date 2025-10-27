# Voraussetzungen

Bevor Sie mit der Installation der edulution UI beginnen, stellen Sie bitte sicher, dass Ihr System die folgenden Voraussetzungen erfüllt. Eine sorgfältige Vorbereitung gewährleistet einen reibungslosen Installationsprozess.

## Inhaltsverzeichnis

- [System-Anforderungen](#system-anforderungen)
- [Empfohlenes Speicherlayout](#empfohlenes-speicherlayout)
- [Benötigte Ports](#benötigte-ports)
- [Linuxmuster-Server Voraussetzungen](#linuxmuster-server-voraussetzungen)
- [Vorbereitung](#vorbereitung)

## System-Anforderungen

| Komponente | Anforderung |
|------------|-------------|
| Betriebssystem | Ubuntu 22.04 oder 24.04 Server (VM empfohlen) |
| Arbeitsspeicher | Mindestens 4 GB RAM |
| Festplattenspeicher | Mindestens 10 GB frei |
| Virtualisierung | Bei Proxmox: Prozessor-Typ "host" verwenden |
| Internet | Erforderlich während der Installation |
| Domain | Öffentliche Domain (z.B. ui.musterschule.de) |

## Empfohlenes Speicherlayout

| Partition | Größe |
|-----------|-------|
| `/` (Root) | 50 GB |
| `/srv/docker/edulution-ui` | 50 GB |
| `/srv/docker/edulution-mail` | 250 GB (je nach Bedarf) |

## Benötigte Ports

Die edulution UI und die zugehörigen Dienste benötigen die Freigabe
bestimmter Ports. Beachten Sie, dass einige Ports nur intern zugänglich
sein sollten.

:::note
Die Ports für E-Mail-Dienste (SMTP, IMAP, IMAPS) und die Mailcow
Administrationsoberfläche (8443) werden nur benötigt, wenn die
E-Mail-Funktionalität der edulution UI genutzt wird.
:::

| Port | Beschreibung |
|------|--------------|
| 80 | HTTP (für automatische Weiterleitung zu HTTPS, Let's Encrypt Validierung) |
| 443 | HTTPS (edulution UI Web-Interface, extern zugänglich) |
| 389 | LDAP (unverschlüsselte LDAP-Verbindung, primär intern) |
| 636 | LDAPS (verschlüsselte LDAP-Verbindung, extern zugänglich, gültiges Zertifikat nötig) |
| 8443 | Mailcow Administrationsoberfläche (intern empfohlen) |
| 25 | SMTP (Standard-Port für E-Mail-Versand) |
| 465 | SMTPS (SMTP über SSL/TLS, veraltet, aber noch genutzt) |
| 587 | Submission (SMTP mit STARTTLS, empfohlen für E-Mail-Clients) |
| 143 | IMAP (unverschlüsselt, primär intern) |
| 993 | IMAPS (IMAP über SSL/TLS, verschlüsselt, extern zugänglich) |

## Linuxmuster-Server Voraussetzungen

| Port | Verwendung |
|------|------------|
| 443 (HTTPS) | Linuxmuster-WebUI (auch über Reverse-Proxy möglich) |
| 8001 (TCP) | Linuxmuster-API |
| 389 (LDAP) | Unverschlüsselte LDAP-Verbindung |
| 636 (LDAPS) | Verschlüsselte LDAP-Verbindung (gültiges Zertifikat nötig!) |

## Vorbereitung

:::note
**Erforderlicher Vorbereitungsschritt:**

Bevor Sie fortfahren, muss die **Linuxmuster-API** auf dem
Linuxmuster-Server installiert sein. Eine Anleitung dazu finden Sie
in der entsprechenden Dokumentation.

**Optional:** Für eine schnellere Einrichtung können Sie vorab ein
**Edulution-Setup-Token** in der Linuxmuster-WebUI generieren.
:::
