---
sidebar_position: 1
title: Voraussetzungen
description: Relution-Instanz, Service-Account und API-Token für die MDM-Anbindung
sidebar_custom_props:
  audience: admin-setup
---

# Voraussetzungen

Bevor die App **MDM** konfiguriert werden kann, müssen drei Dinge auf der Relution-Seite bereitstehen.

## 1. Erreichbare Relution-Instanz

| Anforderung | Wert |
|---|---|
| **Betriebsart** | Relution Cloud oder eigene On-Premises-Installation |
| **Protokoll** | HTTPS mit gültigem Zertifikat |
| **Erreichbarkeit** | Von der **edulution API** aus, nicht vom Browser der Nutzer |
| **Zeitlimit** | Jede Anfrage bricht nach **15 Sekunden** ab |

:::note[Server-zu-Server, nicht Browser-zu-Server]
Alle Anfragen an Relution stellt die edulution API. Der Browser der Nutzer spricht nie direkt mit Relution. Steht Relution hinter einer Firewall, muss also der edulution-Server dorthin durchkommen – nicht die Endgeräte.
:::

## 2. Service-Account in Relution

Legen Sie in Relution ein eigenes Benutzerkonto für die Anbindung an. Es sollte:

- in **der Organisation** liegen, deren Geräte in edulution erscheinen sollen,
- **Administrationsrechte** in dieser Organisation besitzen (Geräte, Apps, Einschreibungen, Benutzerverwaltung, Audit-Log),
- ausschließlich für die edulution-Anbindung verwendet werden.

Aus diesem Konto liest edulution beim ersten Zugriff die **Organisations-UUID** aus – sie bestimmt, in welcher Organisation neue Benutzer und Einschreibungen angelegt werden.

:::tip[Der Service-Account ist geschützt]
edulution erkennt sein eigenes Service-Konto und nimmt es von der Synchronisation aus: Es wird weder als Benutzer angelegt noch als verwaister Zugang gelöscht. Ein versehentliches Abräumen der eigenen Anbindung ist damit ausgeschlossen.
:::

## 3. API-Token des Service-Accounts

Erzeugen Sie in Relution für dieses Konto einen **Access Token mit Scope `API`**. Dieser Token wird in edulution als **API-Schlüssel** hinterlegt und bei jeder Anfrage im Header `X-User-Access-Token` mitgeschickt.

:::caution[Der Token ist ein Vollzugriff]
Wer den Token besitzt, kann in Relution alles tun, was der Service-Account darf – Geräte sperren, Benutzer anlegen und löschen. Bewahren Sie ihn nur in der App-Konfiguration auf und geben Sie ihn nicht weiter. Das Eingabefeld in edulution ist ein Passwortfeld – der Token erscheint dort nur verdeckt.
:::

## Auf der edulution-Seite

| Voraussetzung | Warum |
|---|---|
| **Global-Administrator** | Nur er sieht **Einstellungen** und darf die App konfigurieren |
| **App „MDM" im App-Store hinzugefügt** | Erst danach existiert der Konfigurationsbereich |
| **Master-Key eingerichtet** | Die Benutzer-Token werden damit verschlüsselt gespeichert – siehe [Master-Key](../../edulution-plattform/konfiguration/master-key.md) |
| **Gepflegte Gruppen** | Die Synchronisation zieht ihre Mitglieder aus Keycloak-Gruppen |

:::warning[Master-Key nicht nachträglich austauschen]
Die Relution-Token der Benutzer liegen mit dem Master-Key verschlüsselt in der Datenbank. Wird der Schlüssel gewechselt, lassen sich die vorhandenen Token nicht mehr entschlüsseln – die betroffenen Benutzer erhalten dann erst nach dem Löschen und Neuanlegen ihres Zugangs wieder Daten.
:::

## Nächster Schritt

[App konfigurieren →](./app-konfiguration.md)
