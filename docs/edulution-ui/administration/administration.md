---
id: administration
title: Administration
slug: /edulution-ui/administration/administration
---

Dieser Bereich beschreibt die grundlegende Verwaltung und Konfiguration
der edulution UI nach der Installation.

------------------------------------------------------------------------

### 2.2.1 SSL-Zertifikate sichern

Es ist wichtig, Ihre SSL-Zertifikate regelmäßig zu sichern:

```bash title="Backup erstellen und wiederherstellen"
# Backup erstellen
tar -czf ssl-backup-$(date +%Y%m%d).tar.gz -C /srv/docker/edulution-ui/data/traefik ssl/

# Backup wiederherstellen
tar -xzf ssl-backup-20240115.tar.gz -C /srv/docker/edulution-ui/data/traefik/
```

:::tip
Let's Encrypt Zertifikate können jederzeit neu generiert werden und
müssen nicht zwingend gesichert werden.
:::

## 2.3 Ports und Firewall

Die edulution UI verwendet folgende Ports:

| Port | Protokoll | Beschreibung |
|------|-----------|--------------|
| 80/tcp | HTTP | Weiterleitung zu HTTPS |
| 443/tcp | HTTPS | Web-Interface (edulution UI) |
| 143/tcp | IMAP | E-Mail unverschlüsselt (nur intern) |
| 993/tcp | IMAPS | E-Mail verschlüsselt (SSL/TLS) |

**Firewall-Konfiguration (UFW):**

```bash title="UFW Konfiguration"
# Ports öffnen
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 993/tcp

# IMAP nur intern erlauben
ufw allow from 10.0.0.0/8 to any port 143
```

## 2.4 Updates


### 2.4.1 edulution UI aktualisieren

:::danger
Erstellen Sie vor jedem Update einen Snapshot Ihrer VM!
:::

Um die edulution UI zu aktualisieren:

1.  Wechseln Sie in das edulution UI Verzeichnis:

    ``` bash
    cd /srv/docker/edulution-ui
    ```

2.  Laden Sie die neuesten Container-Images:

    ``` bash
    docker compose pull
    ```

3.  Starten Sie die Container neu:

    ``` bash
    docker compose up -d
    ```

4.  Überprüfen Sie, ob alle Container laufen:

    ``` bash
    docker compose ps
    ```

:::note
Das Update dauert in der Regel nur wenige Minuten. Die edulution UI
bleibt während des Updates kurz nicht erreichbar.
:::

### 2.4.2 Nach dem Update

Nach einem Update sollten Sie:

1.  Die Funktionalität der edulution UI testen
2.  Die Logs auf Fehler prüfen: `docker compose logs -f --tail=50`
3.  Bei Problemen können Sie über den VM-Snapshot zurückrollen

## 2.5 Erste Anmeldung und Konfiguration


### 2.5.1 Anmeldung als global-admin

Nach der erfolgreichen Installation können Sie sich an der edulution UI
anmelden:

1.  Öffnen Sie einen Webbrowser und navigieren Sie zur edulution UI-URL
2.  Melden Sie sich als **global-admin** an, um Konfigurationen
    vorzunehmen

{/* ![edulution UI Login-Seite](login.png) */}

:::warning
Verwenden Sie für die erste Anmeldung immer den **global-admin**
Account, um alle administrativen Funktionen nutzen zu können.
:::

### 2.5.2 Dashboard-Übersicht

Nach der erfolgreichen Anmeldung gelangen Sie zum Dashboard:

{/* ![edulution UI Dashboard](dashboard.png) */}

Das Dashboard bietet Ihnen:

1.  **Überblick** über alle installierten Services
2.  **Schnellzugriff** auf wichtige Funktionen
3.  **Systemstatus** und Benachrichtigungen
4.  **Navigation** zu den Einstellungen

### 2.5.3 Einstellungen aufrufen

Die Einstellungen finden Sie in der rechten Seitenleiste:

{/* ![Einstellungen in der Seitenleiste](einstellungen-container.png) */}

Über die Seitenleiste haben Sie Zugriff auf:

- **Container-Verwaltung**
- **App Store**
- **Systemkonfiguration**
- **Benutzerverwaltung**

### 2.5.4 App Store - Apps installieren

Der App Store ist der zentrale Ort für die Installation neuer
Anwendungen:

1.  Klicken Sie in der Seitenleiste auf **\"App Store\"**
2.  Sie sehen eine Übersicht aller verfügbaren Apps

{/* ![edulution UI App Store](appstore.png) */}

**App-Status verstehen:**

| Status | Beschreibung |
|--------|--------------|
| **Verfügbar** (farbig) | App kann per Klick installiert werden |
| **Installiert** (ausgegraut) | App ist bereits installiert und aktiv |

**App installieren:**

1.  Klicken Sie auf eine verfügbare App
2.  Bestätigen Sie die Installation
3.  Warten Sie, bis die Installation abgeschlossen ist
4.  Die App erscheint dann ausgegraut als \"Installiert\"

:::tip
Installierte Apps sind sofort über das Dashboard oder die Navigation
verfügbar.
:::

### 2.5.5 App-Installation und Konfiguration

**App installieren:**

1.  **App auswählen:** Klicken Sie auf das Icon der gewünschten App im
    App Store
2.  **Hinzufügen:** Klicken Sie unten links auf **\"Hinzufügen\"**
3.  **Grundkonfiguration:** Ein Popup öffnet sich, in dem Sie folgende
    Einstellungen vornehmen können:
    - **Name:** Anzeigename der App im Menü
    - **Icon:** Symbol für die App-Darstellung

{/* ![App-Konfiguration Dialog](app-konfiguration.png) */}

**Nach der Installation:**

1.  Die App erscheint im **rechten Menü** (Navigation)
2.  Die App-Einstellungen finden Sie in der **linken Seitenleiste**
    (Einstellungen)
3.  Über die Einstellungen können Sie weitere Konfigurationen vornehmen

**Erweiterte Konfiguration in den App-Einstellungen:**

Nach der Installation können Sie in den App-Einstellungen folgende
Parameter anpassen:

- **Position:** Reihenfolge der App im Menü
- **Berechtigungen:** Wer die App sehen und nutzen kann

**Berechtigungen vergeben:**

Die App-Berechtigung kann auf verschiedene Weise eingeschränkt werden:

| Berechtigung | Beschreibung |
|--------------|--------------|
| **Alle Benutzer** | App ist für alle sichtbar |
| **Linuxmuster Gruppen** | App nur für ausgewählte Klassen/Gruppen (z.B. 5a, 10b, Lehrer-AG) |
| **Linuxmuster Rollen** | App nur für spezifische Rollen:<br/>• `teacher` (Lehrkräfte)<br/>• `student` (Schüler)<br/>• `schooladministrator` (Schuladministrator)<br/>• `globaladministrator` (Global-Administrator) |

{/* ![Beispiel: Berechtigungskonfiguration Info Board](info-board.png) */}

**Beispiel Info Board Konfiguration:**

Das Screenshot zeigt die Berechtigungseinstellungen für das Info Board.
Hier können Sie präzise festlegen, welche Benutzergruppen oder Rollen
Zugriff auf die jeweilige App haben.

:::note
**Integration mit Linuxmuster:** Die edulution UI nutzt die vorhandenen
Gruppen und Rollen aus Ihrem Linuxmuster-System. Sie müssen keine
separaten Berechtigungen pflegen.
:::

## 2.6 App-Typen und Konfiguration


### 2.6.1 App Frame - Externe Webseiten einbinden

Mit dem **App Frame** können Sie externe Webseiten direkt in die
edulution UI einbetten.

{/* ![App Frame Konfiguration - Speiseplan Beispiel](app-frame-speiseplan.png) */}

**Konfiguration eines App Frames:**

1.  Wählen Sie **\"App Frame\"** aus dem App Store
2.  Geben Sie die **URL** der zu framenden Seite ein
3.  Konfigurieren Sie Name und Berechtigungen

:::warning
**Wichtiger Hinweis:** Die externe Webseite muss das Einbetten in Frames
erlauben. Seiten mit strikten X-Frame-Options oder
Content-Security-Policy können nicht geframt werden.
:::

**Beispiele für App Frame Nutzung:**

- **Speiseplan** der Schulkantine
- **Vertretungsplan**
- **Externe Lernplattformen**
- **Schulspezifische Dienste**

**Technische Voraussetzungen:**

- Die Ziel-URL muss über HTTPS erreichbar sein
- Die Webseite darf keine Frame-Embedding-Beschränkungen haben
- Die Seite sollte responsive Design unterstützen

:::tip
Testen Sie App Frames zunächst in einem Browser-Tab, um sicherzustellen,
dass die Seite korrekt angezeigt wird.
:::

## 2.7 KI-Chat konfigurieren

Die edulution UI unterstützt OpenAI, Anthropic, Google Gemini, Ollama
und OpenAI-kompatible Dienste. Ergänzen Sie die Variablen des gewünschten
Anbieters in der `.env` im Installationsverzeichnis
`/srv/docker/edulution-ui`.

Die Freigabe des KI-Chats für einzelne Nutzergruppen konfigurieren Sie
anschließend unter
[Einstellungen → Chat (KI-Chat)](./einstellungen#chat-ki-chat).

### 2.7.1 Unterstützte Anbieter

| Anbieter | `AI_PROVIDER` | Benötigte anbieterspezifische Variable |
|----------|---------------|-----------------------------------------|
| OpenAI API (GPT-Modelle) | `openai` | `OPENAI_API_KEY` |
| Anthropic (Claude) | `anthropic` | `ANTHROPIC_API_KEY` |
| Google Gemini | `google` | `GOOGLE_GENERATIVE_AI_API_KEY` |
| Ollama | `ollama` | `AI_OLLAMA_BASE_URL` |
| OpenAI-kompatibler Dienst oder Gateway | `openai-compatible` | `AI_BASE_URL` und je nach Dienst `AI_API_KEY` |

:::warning
Pro Installation kann nur **ein Anbieter gleichzeitig** ausgewählt werden.
Alle Einträge in `AI_MODELS` müssen deshalb zum gewählten `AI_PROVIDER`
gehören.
:::

:::note[OpenAI und ChatGPT]
Die Anbindung erfolgt über die **OpenAI API**, nicht über eine Anmeldung bei
ChatGPT. Ein ChatGPT-Abonnement enthält nicht automatisch API-Nutzung. Dafür
werden ein separater [OpenAI-API-Schlüssel](https://platform.openai.com/api-keys)
und eine gesonderte API-Abrechnung benötigt.
:::

### 2.7.2 Gemeinsame Variablen

| Variable | Beschreibung |
|----------|--------------|
| `AI_PROVIDER` | Anbieter: `openai`, `anthropic`, `google`, `ollama` oder `openai-compatible` |
| `AI_MODELS` | Kommaseparierte Modell-IDs, die im KI-Chat ausgewählt werden können |
| `AI_MODEL` | Standardmodell; wird automatisch zusätzlich zur Modellauswahl hinzugefügt |
| `AI_SYSTEM_PROMPT` | Optionale Systemanweisung, die bei jeder Chat-Anfrage mitgesendet wird |
| `AI_REASONING_TAGS` | Optionale, kommaseparierte Tags wie `think`, deren Inhalte als Denkprozess dargestellt werden |

Verwenden Sie die exakten Modell-IDs des jeweiligen Anbieters. Aktuelle
Modell-IDs finden Sie in den Modellübersichten von
[OpenAI](https://developers.openai.com/api/docs/models),
[Anthropic](https://platform.claude.com/docs/en/about-claude/models/overview)
und [Google Gemini](https://ai.google.dev/gemini-api/docs/models).

### 2.7.3 OpenAI konfigurieren

```bash title=".env"
AI_PROVIDER=openai
OPENAI_API_KEY=<OPENAI_API_KEY>
AI_MODELS=<OPENAI_MODELL_1>,<OPENAI_MODELL_2>
AI_MODEL=<OPENAI_MODELL_1>
```

### 2.7.4 Anthropic konfigurieren

Erstellen Sie den benötigten Schlüssel in der
[Anthropic Console](https://platform.claude.com/settings/keys).

```bash title=".env"
AI_PROVIDER=anthropic
ANTHROPIC_API_KEY=<ANTHROPIC_API_KEY>
AI_MODELS=<CLAUDE_MODELL_1>,<CLAUDE_MODELL_2>
AI_MODEL=<CLAUDE_MODELL_1>
```

### 2.7.5 Google Gemini konfigurieren

Erstellen Sie den benötigten Schlüssel in
[Google AI Studio](https://aistudio.google.com/app/apikey).

```bash title=".env"
AI_PROVIDER=google
GOOGLE_GENERATIVE_AI_API_KEY=<GOOGLE_API_KEY>
AI_MODELS=<GEMINI_MODELL_1>,<GEMINI_MODELL_2>
AI_MODEL=<GEMINI_MODELL_1>
```

### 2.7.6 Ollama konfigurieren

Die Ollama-URL muss aus dem API-Container erreichbar sein und mit `/v1`
enden. Informationen zur Schnittstelle finden Sie in der
[Ollama-Dokumentation](https://docs.ollama.com/api/openai-compatibility).

```bash title=".env"
AI_PROVIDER=ollama
AI_OLLAMA_BASE_URL=http://<OLLAMA_HOST>:11434/v1
AI_MODELS=<OLLAMA_MODELL_1>,<OLLAMA_MODELL_2>
AI_MODEL=<OLLAMA_MODELL_1>
```

### 2.7.7 OpenAI-kompatiblen Dienst konfigurieren

Diese Variante eignet sich beispielsweise für selbst gehostete Gateways
und andere Dienste mit einer OpenAI-kompatiblen API:

```bash title=".env"
AI_PROVIDER=openai-compatible
AI_BASE_URL=https://ai.example.org/v1
AI_API_KEY=<AI_API_KEY>
AI_MODELS=MODELL-1,MODELL-2,MODELL-3
AI_MODEL=MODELL-1
AI_INFO_API_KEY=<AI_INFO_API_KEY>
```

`AI_INFO_API_KEY` ist optional. Unterstützt der Dienst die Route
`/model/info`, kann darüber die Kontextgröße der Modelle abgefragt und
die Kontextauslastung angezeigt werden. Verwenden Sie dafür keinen
Master-Schlüssel.

### 2.7.8 Optionale Einstellungen

Die folgenden Einstellungen können mit jeder Anbieterkonfiguration
kombiniert werden:

```bash title=".env"
AI_SYSTEM_PROMPT=Antworte immer in Markdown
AI_REASONING_TAGS=think
```

Lassen Sie `AI_REASONING_TAGS` leer, wenn das gewählte Modell keine
entsprechenden Tags wie `<think>` ausgibt.

### 2.7.9 Container neu starten

Starten Sie die Container nach einer Änderung neu und prüfen Sie die Logs:

```bash
docker compose up -d
docker compose logs -f --tail=50
```

:::warning[Sicherheit]
Tragen Sie echte API-Schlüssel nur in die lokale `.env` ein. Veröffentlichen
Sie diese niemals in der Dokumentation oder Versionsverwaltung.
:::
