---
sidebar_position: 2
---

# Package Server

Edulution Repository einrichten.

## Repository einrichten

### 1. GPG-Schlüssel hinzufügen

```bash
curl -fsSL https://package.edulution.io/pub.gpg | sudo gpg --dearmor -o /usr/share/keyrings/edulution.gpg
```

### 2. Repository hinzufügen

```bash
echo "deb [signed-by=/usr/share/keyrings/edulution.gpg] https://package.edulution.io/ nobel main" | sudo tee /etc/apt/sources.list.d/edulution.list
```

### 3. Paketliste aktualisieren

```bash
sudo apt update
```

## Nächster Schritt

Fahren Sie mit der [FileProxy Installation](./installation) fort →
