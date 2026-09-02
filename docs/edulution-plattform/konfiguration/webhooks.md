---
sidebar_custom_props:
  audience: admin
---

# Webhooks

Über Webhooks melden externe Dienste Ereignisse an edulution. edulution stellt dazu einen zentralen Endpunkt bereit, an den ein Dienst per HTTP-POST ein Ereignis schickt – zum Beispiel der edulution Eventhandler, wenn sich ein Benutzer an einem Client anmeldet.

Damit ein Dienst diesen Endpunkt nutzen darf, muss er als **Webhook-Client** registriert sein. Ein Webhook-Client besteht aus einem User-Agent und einem automatisch erzeugten API-Key. Beides verwalten Sie in den Einstellungen.

:::caution[Nur Global-Admin]
Das Anlegen und Löschen von Webhook-Clients ist ausschließlich für Global-Admins zugänglich.
:::

## Webhook-Clients verwalten

Öffnen Sie als Global-Admin die **Einstellungen** (Zahnrad-Symbol unten im Menü), wählen Sie **Globale Einstellungen** und klappen Sie den Abschnitt **Webhooks** auf.

Die Tabelle listet alle registrierten Webhook-Clients mit folgenden Spalten:

| Spalte | Bedeutung |
|--------|-----------|
| **User-Agent** | Kennung des Dienstes, der Ereignisse senden darf (z. B. `edulution-eventhandler`). |
| **API-Key** | Der Schlüssel, mit dem sich der Dienst authentifiziert. Er ist standardmäßig verborgen (`********`) und lässt sich über das Augen-Symbol einblenden. |
| **Erstellt am** | Zeitpunkt, zu dem der Client angelegt wurde. |

Über das Suchfeld **Webhook-Clients filtern…** schränken Sie die Liste nach User-Agent ein.

### Webhook-Client hinzufügen

1. Klicken Sie auf die Schaltfläche mit dem **Plus-Symbol** (*Webhook-Client hinzufügen*).
2. Wählen Sie im Dialog unter **User-Agent auswählen** den Dienst aus, für den der Zugang gelten soll.
3. Bestätigen Sie mit **Erstellen**.

Der API-Key wird dabei automatisch erzeugt – er lässt sich weder selbst vergeben noch nachträglich ändern. Nach dem Anlegen erscheint der neue Client in der Tabelle; blenden Sie den API-Key über das Augen-Symbol ein und hinterlegen Sie ihn in der Konfiguration des externen Dienstes.

### Webhook-Client löschen

1. Markieren Sie in der ersten Spalte die zu löschenden Einträge.
2. Klicken Sie auf die Schaltfläche mit dem **Papierkorb-Symbol** (*Webhook-Client löschen*).
3. Bestätigen Sie die Rückfrage.

Der Zugang ist unmittelbar danach ungültig: Anfragen mit dem gelöschten API-Key werden mit `401 Unauthorized` abgewiesen.

:::tip[API-Key wechseln]
Ein bestehender API-Key lässt sich nicht neu erzeugen. Um einen Schlüssel auszutauschen, legen Sie einen zweiten Client mit demselben User-Agent an, tragen den neuen Schlüssel beim externen Dienst ein und löschen anschließend den alten Client.
:::

## Der Webhook-Endpunkt

Registrierte Dienste senden ihre Ereignisse an:

```
POST https://<ihre-edulution-instanz>/edu-api/webhook
```

Der Endpunkt benötigt **kein** Benutzer-Login und kein Bearer-Token – die Authentifizierung erfolgt ausschließlich über die folgenden HTTP-Header:

| Header | Inhalt |
|--------|--------|
| `x-webhook-key` | Der API-Key des Webhook-Clients aus den Einstellungen. |
| `x-webhook-timestamp` | Zeitpunkt des Ereignisses als Unix-Zeitstempel **in Sekunden**. |
| `x-webhook-event-id` | Eine pro Ereignis eindeutige ID (z. B. eine UUID). |
| `User-Agent` | Muss mit dem registrierten User-Agent beginnen, üblicherweise mit angehängter Version (z. B. `edulution-eventhandler/1.0`). |

Der Rumpf der Anfrage ist ein beliebiges JSON-Objekt; welche Felder erwartet werden, hängt vom sendenden Dienst ab.

edulution prüft jede Anfrage in dieser Reihenfolge:

1. Alle drei `x-webhook-*`-Header sind vorhanden.
2. Der API-Key ist registriert **und** der `User-Agent` beginnt mit dem für diesen Schlüssel hinterlegten User-Agent.
3. Der Zeitstempel liegt nicht in der Zukunft und ist höchstens **5 Minuten** alt.
4. Die Ereignis-ID wurde nicht bereits verarbeitet.

Eine erfolgreiche Anfrage wird mit `200 OK` und dem Rumpf `{"status":"ok"}` beantwortet.

### Beispiel

```bash
curl -X POST https://edulution.example.org/edu-api/webhook \
  -H "User-Agent: edulution-eventhandler/1.0" \
  -H "x-webhook-key: <API-Key aus den Einstellungen>" \
  -H "x-webhook-timestamp: $(date +%s)" \
  -H "x-webhook-event-id: $(uuidgen)" \
  -H "Content-Type: application/json" \
  -d '{"username":"max.mustermann"}'
```

### Fehlerantworten

| Status | Ursache | Abhilfe |
|--------|---------|---------|
| `400 Bad Request` | Mindestens einer der Header `x-webhook-key`, `x-webhook-timestamp` oder `x-webhook-event-id` fehlt. | Alle drei Header senden. |
| `401 Unauthorized` | Der API-Key ist unbekannt oder der `User-Agent` passt nicht zum registrierten Client. | Schlüssel und User-Agent mit dem Eintrag in den Einstellungen abgleichen. |
| `401 Unauthorized` | Der Zeitstempel ist älter als 5 Minuten oder liegt in der Zukunft. | Uhrzeit des sendenden Systems prüfen (NTP) und den Zeitstempel in **Sekunden** senden, nicht in Millisekunden. |
| `409 Conflict` | Eine Ereignis-ID wurde erneut gesendet. | Pro Ereignis eine eigene ID vergeben; Wiederholungsversuche nach einem Fehler mit neuer ID senden. |

:::note[Doppelte Ereignisse]
edulution merkt sich die zuletzt verarbeiteten Ereignis-IDs im Arbeitsspeicher (die jeweils letzten 100). Ein Neustart der Instanz setzt diesen Schutz zurück – die Erkennung doppelter Ereignisse ist eine Absicherung gegen kurzfristige Wiederholungen, kein dauerhaftes Protokoll.
:::

## Unterstützte Dienste

Welcher Dienst ein Ereignis gesendet hat, erkennt edulution am Teil des `User-Agent` vor dem Schrägstrich. Zur Auswahl stehen:

| User-Agent | Verarbeitung |
|------------|--------------|
| `edulution-eventhandler` | Ereignisse mit einem Feld `username` werden für diesen Benutzer zwischengespeichert und stehen 24 Stunden lang zur Weiterverarbeitung bereit. Ereignisse ohne `username` werden verworfen. |
| `linuxmuster-api` | Die Anfrage wird angenommen und protokolliert. Die inhaltliche Auswertung ist vorbereitet, aber noch nicht aktiv. |

Ereignisse eines nicht bekannten Dienstes werden mit `200 OK` quittiert, aber nicht weiterverarbeitet; im Server-Log erscheint eine Warnung.

## Sicherheitshinweise

- Der API-Key ist wie ein Passwort zu behandeln: Er berechtigt jeden, der ihn kennt, zum Senden von Ereignissen an Ihre Instanz.
- Betreiben Sie den Endpunkt ausschließlich über HTTPS, damit Schlüssel und Zeitstempel nicht im Klartext übertragen werden.
- Legen Sie pro Dienst einen eigenen Client an. So lässt sich ein einzelner Zugang entziehen, ohne die übrigen Integrationen zu unterbrechen.
- Löschen Sie Clients, die nicht mehr benötigt werden.
