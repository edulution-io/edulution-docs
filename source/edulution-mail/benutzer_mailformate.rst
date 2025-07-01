Benutzer-E-Mail-Formate anpassen (Hook)
=======================================

Standardmäßig generiert Linuxmuster E-Mail-Adressen für Benutzer nach einem bestimmten Schema. Wenn Sie ein anderes Format wünschen (z.B. ``vorname.nachname@domain`` oder ``nachname-vorname@domain``), können Sie dies über einen Sophomorix-Hook anpassen.

Ein Sophomorix-Hook ist ein Skript, das automatisch ausgeführt wird, wenn bestimmte Aktionen in Linuxmuster stattfinden (z.B. Benutzer hinzugefügt oder aktualisiert werden). Dies ermöglicht es Ihnen, das Verhalten von Linuxmuster zu erweitern und anzupassen.

**Vorgehensweise:**

1.  **Hook-Skript erstellen:**
    Verbinden Sie sich per SSH mit Ihrem Linuxmuster-Server und erstellen Sie eine neue Python-Datei, z.B. ``/etc/linuxmuster/sophomorix/hooks/set-user-mail.py``, mit folgendem Inhalt:

    .. code-block:: python

       #! /usr/bin/env python3

       """
       Script to update all email addresses in the attribute proxyAddresses
       with the template lastname-firstname@mydomain.school.
       """

       from linuxmusterTools.ldapconnector import LMNLdapReader as lr, UserWriter as uw

       # Get a list of all teachers
       # (only the attributes cn, givenName and sn -
       # to get a list of all teachers with all attributes, just use
       # lr.get('/roles/teachers')

       teachers = lr.get('/roles/teacher', attributes=['cn', 'givenName', 'sn'])

       domain = "kepler-freiburg.de" # Passen Sie Ihre Domain an

       # Email template lastname-firstname@mydomain.school
       for teacher in teachers:
           email = f"{teacher['givenName'][0].lower()}_{teacher['sn'].lower()}@{domain}"
           uw.setattr(teacher['cn'], data={'mail':email})
           #print(email)
           #print(teacher['cn'])

    **Erklärung des Skripts:**
    *   ``LMNLdapReader as lr``: Liest Daten aus dem LDAP (Benutzer, Gruppen, Rollen).
    *   ``UserWriter as uw``: Schreibt Änderungen an Benutzerobjekten ins LDAP.
    *   ``lr.get('/roles/teacher', attributes=['cn', 'givenName', 'sn'])``: Dieses Beispiel holt alle Lehrer mit ihren Common Name (cn), Vornamen (givenName) und Nachnamen (sn).
    *   ``domain = "kepler-freiburg.de"``: **Wichtig:** Passen Sie hier Ihre tatsächliche Domain an.
    *   ``email = f"{teacher['givenName'][0].lower()}_{teacher['sn'].lower()}@{domain}"``: Dies ist die Logik für das E-Mail-Format. Im Beispiel wird ``ersterBuchstabeVorname_nachname@domain`` generiert (z.B. ``m_mustermann@kepler-freiburg.de``).
    *   ``uw.setattr(teacher['cn'], data={'mail':email})``: Schreibt die generierte E-Mail-Adresse in das ``mail``-Attribut des Benutzers im LDAP.

2.  **Hook verknüpfen:**
    Verknüpfen Sie das Skript mit den Sophomorix-Hooks, damit es bei Benutzeraktionen automatisch ausgeführt wird:

    .. code-block:: bash

       ln -s /etc/linuxmuster/sophomorix/hooks/set-user-mail.py /etc/linuxmuster/sophomorix/hooks/sophomorix-add.d/
       ln -s /etc/linuxmuster/sophomorix/hooks/set-user-mail.py /etc/linuxmuster/sophomorix/hooks/sophomorix-update.d/

    *   Der erste Befehl verknüpft das Skript mit dem ``sophomorix-add.d``-Verzeichnis, sodass es ausgeführt wird, wenn ein neuer Benutzer hinzugefügt wird.
    *   Der zweite Befehl verknüpft es mit dem ``sophomorix-update.d``-Verzeichnis, sodass es bei Änderungen an bestehenden Benutzerdaten ausgeführt wird.

**Beispiele für E-Mail-Format-Logik:**

Sie können die Zeile ``email = ...`` im Skript anpassen, um verschiedene E-Mail-Formate zu generieren:

*   **Vorname.Nachname@domain:**
    .. code-block:: python

       email = f"{teacher['givenName'].lower()}.{teacher['sn'].lower()}@{domain}"
       # Beispiel: max.mustermann@domain

*   **Nachname-Vorname@domain:**
    .. code-block:: python

       email = f"{teacher['sn'].lower()}-{teacher['givenName'].lower()}@{domain}"
       # Beispiel: mustermann-max@domain

*   **Initialen@domain:**
    .. code-block:: python

       email = f"{teacher['givenName'][0].lower()}{teacher['sn'][0].lower()}@{domain}"
       # Beispiel: mm@domain

Nach diesen Schritten werden die E-Mail-Adressen Ihrer Benutzer automatisch im gewünschten Format generiert und aktualisiert.
