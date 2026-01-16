---
sidebar_position: 6
---

# Gruppen-Mail-Synchronisation

Automatische Synchronisation von E-Mail-Adressen für Linuxmuster-Projekte über einen Cronjob.

:::caution Linuxmuster 7.3 Update
Mit **Linuxmuster 7.3** hat sich die API für LDAP-Schreiboperationen geändert. Bitte verwenden Sie das passende Skript für Ihre Version. Die 7.3-Version ist unten als Standard dokumentiert.
:::

## Warum ein Cronjob?

Der [Sophomorix-Hook](./verteilerlisten.md#verteiler-e-mail-adressen-anpassen-hook) wird bei **Projekten nicht automatisch getriggert**.

:::warning Wichtig
Sophomorix-Hooks funktionieren nur für Benutzer und Gruppen, **nicht für Projekte**. Für Projekte ist ein **Cronjob zwingend erforderlich**.
:::

Ein **Cronjob** läuft alle 5 Minuten und korrigiert die E-Mail-Adressen automatisch:

```
p_ag-robotik@schule.de  →  ag-robotik@schule.de
```

## Installation

### 1. Skript erstellen

Erstellen Sie das Skript auf Ihrem **Linuxmuster-Server** im Sophomorix-Hooks-Verzeichnis:

```bash
sudo nano /etc/linuxmuster/sophomorix/hooks/set-mail-group.py
```

Kopieren Sie folgenden Code hinein:

```python
#!/usr/bin/env python3
"""
E-Mail-Adressen für Linuxmuster-Projekte automatisch korrigieren.
Entfernt 'p_' Präfix und setzt korrekte Domain.
"""

from linuxmusterTools.ldapconnector import LMNProjects

# === KONFIGURATION ===
DOMAIN = "schule.de"  # Ihre Domain hier eintragen

projects = LMNProjects()
total = len(projects)

for index, (cn, project) in enumerate(projects.items(), start=1):
    name = cn.lower()

    # Entferne 'p_' Präfix
    if name.startswith("p_"):
        name = name[2:]

    mail = f"{name}@{DOMAIN}"

    print(f"[{index}/{total}] {cn} -> {mail}")

    # Schreibe ins LDAP
    project.setattr({"mail": mail})

print("Fertig.")
```

Speichern Sie mit `Ctrl+O`, `Enter`, `Ctrl+X`.

<details>
<summary>Skript für Linuxmuster 7.2 (Legacy)</summary>

```python
#!/usr/bin/env python3
"""
E-Mail-Adressen für Linuxmuster-Projekte automatisch korrigieren.
Entfernt 'p_' Präfix und setzt korrekte Domain.
"""

from linuxmusterTools.ldapconnector import (
    LMNLdapReader as lr,
    ProjectWriter as pw,
)

# === KONFIGURATION ===
DOMAIN = "schule.de"  # Ihre Domain hier eintragen
WRITE = True          # False = Nur anzeigen, nicht schreiben

def main():
    print(f"E-Mail-Synchronisation für: {DOMAIN}")
    print(f"Modus: {'SCHREIBEN' if WRITE else 'DRY-RUN'}\n")

    projects = lr.get('/projects', attributes=['cn', 'mail'])
    changed = 0

    for p in projects:
        cn_attr = p['cn']
        cn = cn_attr[0] if isinstance(cn_attr, list) else cn_attr

        # Entferne 'p_' Präfix
        proj = cn[2:] if cn.lower().startswith('p_') else cn
        correct_mail = f"{proj.lower()}@{DOMAIN}"

        # Aktuelle Mail
        mail_attr = p.get('mail', [])
        current_mail = mail_attr[0] if isinstance(mail_attr, list) and mail_attr else None

        if current_mail == correct_mail:
            print(f"✓ {cn}: OK")
        else:
            print(f"✗ {cn}: {current_mail or '(keine)'} → {correct_mail}")
            if WRITE:
                pw.setattr(cn, data={'mail': correct_mail})
            changed += 1

    print(f"\nGeändert: {changed}")

if __name__ == '__main__':
    main()
```

</details>

Machen Sie das Skript ausführbar:

```bash
sudo chmod +x /etc/linuxmuster/sophomorix/hooks/set-mail-group.py
```

### 2. Domain anpassen

Öffnen Sie das Skript und passen Sie die Domain an:

```bash
sudo nano /etc/linuxmuster/sophomorix/hooks/set-mail-group.py
```

Ändern Sie die Zeile mit `DOMAIN`:

```python
DOMAIN = "ihre-schule.de"  # Ihre Domain hier eintragen
```

Speichern mit `Ctrl+O`, `Enter`, `Ctrl+X`.

### 3. Testen

```bash
sudo python3 /etc/linuxmuster/sophomorix/hooks/set-mail-group.py
```

Prüfen Sie die Ausgabe. Wenn alles korrekt aussieht, läuft das Skript.

### 4. Cronjob einrichten

```bash
sudo crontab -e
```

Fügen Sie hinzu (alle 5 Minuten):

```bash
*/5 * * * * /usr/bin/python3 /etc/linuxmuster/sophomorix/hooks/set-mail-group.py >> /var/log/edulution-mail-sync.log 2>&1
```

Fertig! Das Skript läuft jetzt automatisch alle 5 Minuten.
