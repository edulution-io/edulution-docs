# Master-Key-Verschlüsselung

Seit edulution Plattform v2.0 verschlüsselt die edulution API alle sicherheitsrelevanten Schlüssel und Passwörter in der Datenbank mit einem serverseitigen **Master-Schlüssel**. Ohne diesen Schlüssel sind die betroffenen Datensätze in der MongoDB nicht mehr verwendbar. Diese Seite beschreibt das Verschlüsselungsmodell, die Bereitstellung des Schlüssels, die automatische Migration bestehender Installationen sowie Backup und Wiederherstellung.

:::danger[Der Master-Schlüssel gehört ins Backup]
Ein Datenbank-Backup allein reicht nicht. Wird der Master-Schlüssel verloren, lassen sich verschlüsselte Inhalte (z. B. Passwörter von Shared Mailboxen oder passwortgeschützten Freigabe-Links) nicht wiederherstellen. Sichern Sie den Schlüssel gemeinsam mit der Datenbank – aber getrennt aufbewahrt.
:::

## Verschlüsselungsmodell

edulution verwendet zwei Ebenen:

1. **Client-seitige Verschlüsselung im Browser.** Bei der Anmeldung erzeugt die Oberfläche einen zufälligen Schlüssel (den `encryptKey`) und verschlüsselt damit das Benutzerpasswort mit AES-256-GCM. Nur dieses Chiffrat wird an die API gesendet – das Passwort selbst verlässt den Browser nie im Klartext. Die API benötigt das entschlüsselte Passwort, um im Namen des Benutzers auf nachgelagerte Dienste wie WebDAV-Freigaben oder Mail zuzugreifen.

2. **Serverseitige Verschlüsselung des Schlüssels (Key Wrapping).** Der `encryptKey` selbst wird nicht im Klartext gespeichert. Die API verschlüsselt ihn vor dem Schreiben in die Datenbank mit dem Master-Schlüssel – mit demselben Verfahren – und legt ihn mit dem Präfix `wrapped:` ab.

Ein Angreifer, der ausschließlich Lesezugriff auf die MongoDB erlangt (etwa über ein entwendetes Datenbank-Backup), kann damit weder die Schlüssel noch die Passwörter entschlüsseln. Erst die Kombination aus Datenbank **und** Master-Schlüssel ergibt verwertbare Daten.

### Was mit dem Master-Schlüssel geschützt wird

| Datensatz | Collection | Inhalt |
|---|---|---|
| Benutzer-Schlüssel (`encryptKey`) | `users` | Schlüssel zum verschlüsselten Benutzerpasswort |
| Passwörter von Shared Mailboxen | `sharedmailboxes` | Schlüssel des Mailbox-Passworts |
| Passwörter öffentlicher Datei-Freigaben | `publicshares` | Passwort eines passwortgeschützten Freigabe-Links |
| Tokens der mobilen Geräteverwaltung | `relutionusertokens` | API-Token pro Benutzer |

## Master-Schlüssel einrichten

Die API sucht den Schlüssel beim Start zuerst in der Umgebungsvariablen `MASTER_ENCRYPT_KEY`, danach in der Datei `data/master.key` im Arbeitsverzeichnis des API-Containers. Findet sie beides nicht, erzeugt sie beim ersten Start selbst einen Schlüssel und legt ihn mit den Dateirechten `0600` in dieser Datei ab.

:::warning[Schlüssel explizit setzen]
Verlassen Sie sich in produktiven Installationen nicht auf die automatisch erzeugte Datei. Liegt das Datenverzeichnis des API-Containers nicht auf einem persistenten Volume, geht der Schlüssel beim Neuerstellen des Containers verloren – und mit ihm der Zugriff auf alle verschlüsselten Daten. Tragen Sie den Schlüssel stattdessen in die `.edulution.env` ein.
:::

### 1. Bestehenden Schlüssel prüfen

Läuft die Installation bereits, hat die API mit hoher Wahrscheinlichkeit schon einen Schlüssel erzeugt. Diesen **müssen** Sie übernehmen – ein neuer Schlüssel würde die vorhandenen Daten unbrauchbar machen:

```bash title="Vorhandenen Schlüssel auslesen"
cd /srv/docker/edulution-ui
docker compose exec edulution-api cat /opt/edulution/api/data/master.key
```

Gibt der Befehl einen 64-stelligen Wert aus, verwenden Sie genau diesen im nächsten Schritt.

### 2. Neuen Schlüssel erzeugen

Nur bei einer Neuinstallation, in der noch keine Benutzer angemeldet waren:

```bash title="Schlüssel erzeugen"
openssl rand -hex 32
```

### 3. Schlüssel eintragen und Container neu starten

Der Schlüssel ist ein 256-Bit-Wert in hexadezimaler Schreibweise, also genau **64 Zeichen aus `0-9` und `a-f`**.

```dotenv title=".edulution.env"
MASTER_ENCRYPT_KEY=<64-stelliger-hex-wert>
```

```bash
cd /srv/docker/edulution-ui
docker compose up -d
docker compose logs -f --tail=100 edulution-api
```

Im Log muss anschließend die Bestätigung erscheinen, dass der Schlüssel zu den vorhandenen Daten passt:

```text
[UsersService] Master key verified against existing wrapped key
```

:::danger[Der Schlüssel darf sich nie ändern]
`MASTER_ENCRYPT_KEY` hat Vorrang vor der Schlüsseldatei. Tragen Sie dort einen **anderen** Wert ein als den, mit dem die Daten verschlüsselt wurden, verweigert die API den Start. Es gibt keinen automatischen Schlüsselwechsel: Ein Wechsel des Master-Schlüssels entwertet alle bereits verschlüsselten Datensätze.
:::

## Migration bestehender Installationen

Beim Update auf v2.0 oder neuer laufen die notwendigen Migrationen automatisch beim Start der API – es ist kein manueller Eingriff nötig:

- **`000-wrap-encrypt-keys-with-master-key`** verschlüsselt alle im Klartext gespeicherten `encryptKey`-Werte der `users`-Collection mit dem Master-Schlüssel.
- Die Migration der Datei-Freigaben verschlüsselt zusätzlich die Passwörter bestehender passwortgeschützter Freigabe-Links.

Beide Migrationen sind wiederholbar: Bereits verschlüsselte Werte (erkennbar am Präfix `wrapped:`) werden übersprungen. Der Fortschritt steht im API-Log:

```text
[000-wrap-encrypt-keys-with-master-key] 128 users to migrate (wrap encryptKey with master key)...
[000-wrap-encrypt-keys-with-master-key] Migration completed: 128 encrypt keys wrapped with master key
```

:::note[Reihenfolge beim Update]
Erzeugt die API beim Update selbst einen Schlüssel, werden die Daten mit genau diesem Schlüssel verschlüsselt. Lesen Sie ihn danach wie oben beschrieben aus und tragen Sie ihn in die `.edulution.env` ein, bevor Sie den Container das nächste Mal neu erstellen.
:::

## Backup und Wiederherstellung

Behandeln Sie Datenbank und Master-Schlüssel als zusammengehörendes Paar:

- Sichern Sie den Schlüssel (aus der `.edulution.env` oder der Schlüsseldatei) an einem separaten, geschützten Ort – zum Beispiel im Passwort-Tresor der Schulverwaltung.
- Notieren Sie zu jedem Datenbank-Backup, welcher Master-Schlüssel dazugehört.
- Beim Zurückspielen eines Datenbank-Backups muss derselbe Master-Schlüssel aktiv sein, mit dem das Backup erstellt wurde. Andernfalls startet die API nicht.
- Der Schlüssel gehört **nicht** in eine Versionsverwaltung und nicht in Support-Anfragen oder Log-Auszüge.

### Wenn der Master-Schlüssel verloren ist

Ein verlorener Schlüssel lässt sich nicht rekonstruieren. Die Folgen unterscheiden sich je nach Datensatz:

| Datensatz | Auswirkung |
|---|---|
| Benutzer-Schlüssel und -Passwörter | Werden bei der nächsten Anmeldung des Benutzers neu erzeugt und überschrieben |
| Passwörter von Shared Mailboxen | Nicht wiederherstellbar, müssen neu gesetzt werden |
| Passwörter öffentlicher Freigabe-Links | Nicht wiederherstellbar, betroffene Links müssen neu angelegt werden |
| Tokens der mobilen Geräteverwaltung | Nicht wiederherstellbar, müssen neu hinterlegt werden |

Damit die API nach einem Schlüsselverlust wieder startet, müssen die nicht mehr entschlüsselbaren `encryptKey`-Werte aus der `users`-Collection entfernt werden. Wenden Sie sich in diesem Fall an den Support, bevor Sie Änderungen an der Datenbank vornehmen.

## Zugriff auf den Benutzer-Schlüssel über die API

Mit der Master-Key-Verschlüsselung wurde auch der Zugriff auf die Benutzer-Endpunkte verschärft:

- Alle `/users`-Endpunkte liefern und ändern ausschließlich den Datensatz des angemeldeten Benutzers. Ein abweichender Benutzername im Pfad wird mit `403 Forbidden` abgewiesen.
- Anfragen werden strikt validiert: Felder, die im jeweiligen Datenformat nicht vorgesehen sind, führen zur Ablehnung der Anfrage.
- Der Endpunkt `GET /users/:username/key`, über den das entschlüsselte Passwort des eigenen Benutzers abgerufen werden kann, ist **standardmäßig deaktiviert** und antwortet mit `404 Not Found`.

Der Endpunkt wird nur von einzelnen Zusatzanwendungen benötigt. Aktivieren Sie ihn ausschließlich dann, wenn eine angebundene Anwendung ihn ausdrücklich erfordert:

```dotenv title=".edulution.env"
EDUI_ENABLE_USER_KEY_ENDPOINT=true
```

## Fehlerbehebung

| Meldung im API-Log | Ursache | Lösung |
|---|---|---|
| `Master key verification failed — unable to unwrap existing key from DB` | Der aktive Master-Schlüssel passt nicht zu den Daten in der Datenbank | Ursprünglichen Schlüssel in `MASTER_ENCRYPT_KEY` eintragen. Prüfen Sie auch, ob versehentlich ein Datenbank-Backup aus einer anderen Installation eingespielt wurde |
| `No master key found. Generated new master key and saved to ./data/master.key` | Weder Umgebungsvariable noch Schlüsseldatei vorhanden | Bei einer Neuinstallation erwartet. Bei einer bestehenden Installation ist der Schlüssel verloren gegangen – Container nicht weiterlaufen lassen, sondern zuerst den ursprünglichen Schlüssel wiederherstellen |
| `Failed to unwrap encrypt key — master key may have changed or is incorrect` | Ein einzelner Datensatz wurde mit einem anderen Schlüssel verschlüsselt | Betroffenen Datensatz neu anlegen (Mailbox-Passwort, Freigabe-Link, Token) |
| `Failed to decrypt stored password for <Mailbox>` | Das gespeicherte Passwort der Shared Mailbox passt nicht mehr zum Schlüssel | Passwort der Shared Mailbox in den Einstellungen neu setzen |

:::tip[Logs gezielt filtern]
```bash
cd /srv/docker/edulution-ui
docker compose logs --tail=200 edulution-api | grep -i "master key"
```
:::
