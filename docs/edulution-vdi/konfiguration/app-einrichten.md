---
sidebar_position: 2
title: App einrichten
sidebar_custom_props:
  audience: admin-setup
---

# App einrichten

Die Desktop-Bereitstellung wird als native App über den [App-Store](../../edulution-plattform/apps/app-store.md) hinzugefügt und anschließend unter **Einstellungen → Desktop-Bereitstellung** konfiguriert.

## App verbinden

1. Fügen Sie im **App-Store** die App **Desktop-Bereitstellung** hinzu.
2. Hinterlegen Sie in den App-Einstellungen die **URL** des Guacamole-Dienstes. Ohne diesen Wert schlägt jeder Verbindungsversuch mit dem Hinweis auf eine fehlende Konfiguration fehl. Eine Änderung greift sofort – die Plattform verwirft die zwischengespeicherte Anmeldung am Dienst beim Speichern.
3. Installieren Sie im Abschnitt **Docker Anwendungen** derselben App den Container `edulution-guacamole` (siehe [Container-Verwaltung](../../edulution-plattform/konfiguration/container-verwaltung.md)).

Die **Proxy-Konfiguration** dieser App pflegt die Plattform selbst: Sie wird beim Installieren des Plugins übernommen und bei neuen Versionen automatisch nachgezogen. Ein Eingriff ist im Normalfall nicht nötig.

## Zugangsdaten des Dienstes

Die Zugangsdaten, mit denen sich edulution am Guacamole-Dienst anmeldet, stammen nicht aus der Oberfläche, sondern aus der Server-Umgebung:

| Variable | Bedeutung |
| --- | --- |
| `EDULUTION_GUACAMOLE_ADMIN_USER` | Benutzername für die Anmeldung am Guacamole-Dienst |
| `EDULUTION_GUACAMOLE_ADMIN_PASSWORD` | Zugehöriges Passwort |

Stimmen sie nicht, meldet die App, dass der RDP-Dienst nicht verfügbar ist.

## Auswirkung auf die Container-Verwaltung

Ist diese App konfiguriert und läuft der Guacamole-Container, erscheint in der [Container-Verwaltung](../../edulution-plattform/konfiguration/container-verwaltung.md) zusätzlich die Aktion **Terminal**, mit der Global-Admins eine SSH-Sitzung zum Server öffnen. Diese Funktion nutzt denselben Dienst und steht ohne eingerichtete Desktop-Bereitstellung nicht zur Verfügung.

## Weiter

- [Virtuelle Maschinen](virtuelle-maschinen.md) – woher die angebotenen Desktops stammen
- [Einstellungen](../../edulution-plattform/konfiguration/einstellungen.md) – weitere globale Konfigurationsoptionen
