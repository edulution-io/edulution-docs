# Benutzer-E-Mail-Formate anpassen (Hook)

:::caution Linuxmuster 7.3 Update
Mit **Linuxmuster 7.3** hat sich die API für LDAP-Schreiboperationen geändert. Bitte verwenden Sie das passende Skript für Ihre Version. Die 7.3-Version ist unten als Standard dokumentiert.
:::

Standardmäßig generiert Linuxmuster E-Mail-Adressen für Benutzer nach
einem bestimmten Schema. Wenn Sie ein anderes Format wünschen (z.B.
`vorname.nachname@domain` oder `nachname-vorname@domain`), können Sie
dies über einen Sophomorix-Hook anpassen.

Ein Sophomorix-Hook ist ein Skript, das automatisch ausgeführt wird,
wenn bestimmte Aktionen in Linuxmuster stattfinden (z.B. Benutzer
hinzugefügt oder aktualisiert werden). Dies ermöglicht es Ihnen, das
Verhalten von Linuxmuster zu erweitern und anzupassen.

**Vorgehensweise:**

1.  **Hook-Skript erstellen:** Verbinden Sie sich per SSH mit Ihrem
    Linuxmuster-Server und erstellen Sie eine neue Python-Datei, z.B.
    `/etc/linuxmuster/sophomorix/hooks/set-user-mail.py`, mit folgendem
    Inhalt:

    ``` python
    #!/usr/bin/env python3
    """
    E-Mail-Adressen für Lehrer aktualisieren.
    Format: ersterBuchstabeVorname_nachname@domain
    """

    from linuxmusterTools.ldapconnector import TeacherManager

    # === KONFIGURATION ===
    DOMAIN = "mydomain.schule.de"  # Ihre Domain hier eintragen

    teachers = TeacherManager()

    for cn, teacher in teachers.items():
        data = teacher.data

        lastname = data["lastname_ascii"].lower()
        first_char = data["firstname_ascii"][0].lower()

        email = f"{first_char}_{lastname}@{DOMAIN}"

        # Schreibe ins LDAP
        teacher.setattr({"mail": email})
    ```

    **Erklärung des Skripts:**

    - `TeacherManager()`: Liefert alle Lehrer als Dictionary (cn → Objekt).
    - `teacher.data`: Enthält die Benutzerdaten wie `lastname_ascii`, `firstname_ascii`.
    - `DOMAIN = "mydomain.schule.de"`: **Wichtig:** Passen Sie hier Ihre
      tatsächliche Domain an.
    - `email = f"{first_char}_{lastname}@{DOMAIN}"`:
      Dies ist die Logik für das E-Mail-Format. Im Beispiel wird
      `ersterBuchstabeVorname_nachname@domain` generiert (z.B.
      `m_mustermann@mydomain.schule.de`).
    - `teacher.setattr({"mail": email})`: Schreibt die
      generierte E-Mail-Adresse in das `mail`-Attribut des Benutzers im LDAP.

    <details>
    <summary>Skript für Linuxmuster 7.2 (Legacy)</summary>

    ``` python
    #! /usr/bin/env python3
    """
    Script to update all email addresses in the attribute proxyAddresses
    with the template lastname-firstname@mydomain.school.
    """

    from linuxmusterTools.ldapconnector import LMNLdapReader as lr, UserWriter as uw

    teachers = lr.get('/roles/teacher', attributes=['cn', 'givenName', 'sn'])

    domain = "mydomain.schule.de"  # Passen Sie Ihre Domain an

    for teacher in teachers:
        email = f"{teacher['givenName'][0].lower()}_{teacher['sn'].lower()}@{domain}"
        uw.setattr(teacher['cn'], data={'mail':email})
    ```

    </details>

2.  **Hook verknüpfen:** Verknüpfen Sie das Skript mit den
    Sophomorix-Hooks, damit es bei Benutzeraktionen automatisch
    ausgeführt wird:

    ``` bash
    ln -s /etc/linuxmuster/sophomorix/hooks/set-user-mail.py /etc/linuxmuster/sophomorix/hooks/sophomorix-add.d/
    ln -s /etc/linuxmuster/sophomorix/hooks/set-user-mail.py /etc/linuxmuster/sophomorix/hooks/sophomorix-update.d/
    ```

    - Der erste Befehl verknüpft das Skript mit dem
      `sophomorix-add.d`-Verzeichnis, sodass es ausgeführt wird, wenn
      ein neuer Benutzer hinzugefügt wird.
    - Der zweite Befehl verknüpft es mit dem
      `sophomorix-update.d`-Verzeichnis, sodass es bei Änderungen an
      bestehenden Benutzerdaten ausgeführt wird.

**Beispiele für E-Mail-Format-Logik:**

Sie können die Zeile `email = ...` im Skript anpassen, um verschiedene
E-Mail-Formate zu generieren:

- **Vorname.Nachname@domain:**
  ```python
  firstname = data["firstname_ascii"].lower()
  lastname = data["lastname_ascii"].lower()
  email = f"{firstname}.{lastname}@{DOMAIN}"
  # Beispiel: max.mustermann@domain
  ```

- **Nachname-Vorname@domain:**
  ```python
  firstname = data["firstname_ascii"].lower()
  lastname = data["lastname_ascii"].lower()
  email = f"{lastname}-{firstname}@{DOMAIN}"
  # Beispiel: mustermann-max@domain
  ```

- **Initialen@domain:**
  ```python
  first_char = data["firstname_ascii"][0].lower()
  last_char = data["lastname_ascii"][0].lower()
  email = f"{first_char}{last_char}@{DOMAIN}"
  # Beispiel: mm@domain
  ```

Nach diesen Schritten werden die E-Mail-Adressen Ihrer Benutzer
automatisch im gewünschten Format generiert und aktualisiert.
