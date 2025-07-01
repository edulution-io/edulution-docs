Verteilerlisten
===============

Verteilerlisten in der edulutionUI basieren auf Projekten in Linuxmuster. Dies ermöglicht eine flexible Verwaltung von E-Mail-Verteilern direkt über die Linuxmuster-Oberfläche.

Projekt als Verteiler anlegen
*****************************

Um eine Verteilerliste zu erstellen, legen Sie ein neues Projekt in Linuxmuster an und aktivieren die Verteiler-Option.

1.  **Projekt erstellen:**
    Navigieren Sie in der Linuxmuster-WebUI zu **"Klassenzimmer"** -> **"Einschreiben"**.

2.  **Verteiler-Option aktivieren:**
    Beim Erstellen oder Bearbeiten des Projekts muss der Haken **"Verteiler"** gesetzt werden.

    .. image:: /_static/linuxmuster_verteiler_projekt.png
       :alt: Linuxmuster Projekt als Verteiler

    Die E-Mail-Adresse des Verteilers wird automatisch generiert und lautet dann ``p_projektname@domain`` (z.B. ``p_ag-robotik@meinedomain.de``).

3.  **Mitglieder hinzufügen:**
    Fügen Sie dem Projekt die gewünschten Mitglieder hinzu. Alle Mitglieder des Projekts erhalten dann E-Mails, die an die Verteileradresse gesendet werden.

.. warning::
   Aktuell ist es nicht möglich, ganze Gruppen direkt zu Projekten hinzuzufügen. Mitglieder müssen einzeln hinzugefügt werden. Wenn Gruppen hinzugefügt werden, führt dies dazu, dass die E-Mail-Adressen der Gruppenmitglieder nicht korrekt synchronisiert werden.

Verteiler-E-Mail-Adressen anpassen (Hook)
*****************************************

Standardmäßig wird die E-Mail-Adresse des Verteilers als ``p_projektname@domain`` generiert. Wenn Sie dieses Format ändern möchten (z.B. nur ``projektname@domain``), können Sie dies über einen Sophomorix-Hook auf dem Linuxmuster-Server anpassen.

**Vorgehensweise:**

1.  **Hook-Skript erstellen:**
    Verbinden Sie sich per SSH mit Ihrem Linuxmuster-Server und erstellen Sie eine neue Python-Datei, z.B. ``/etc/linuxmuster/sophomorix/hooks/set-mail-group.py``, mit folgendem Inhalt:

    .. code-block:: python

       from linuxmusterTools.ldapconnector import (
           LMNLdapReader as lr,
           ProjectWriter as pw,   #  <-- statt GroupWriter
       )

       DOMAIN = "schule.demo"  # Passen Sie Ihre Domain an
       WRITE  = True             # jetzt wirklich schreiben

       projects = lr.get('/projects', attributes=['cn','mail'])

       for p in projects:
          # print(p)
           cn_attr = p['cn']
           cn = cn_attr[0] if isinstance(cn_attr, list) else cn_attr
           proj   = cn[2:] if cn.lower().startswith('p_') else cn
           mail   = f"{proj.lower()}@{DOMAIN}"

           print(f"{cn}  →  {mail}")
           if WRITE:
               pw.setattr(cn, data={'mail': mail})

    **Erklärung des Skripts:**
    *   ``DOMAIN``: Hier müssen Sie Ihre tatsächliche Domain eintragen.
    *   Das Skript liest alle Projekte aus dem LDAP.
    *   Für jedes Projekt wird der Präfix ``p_`` (falls vorhanden) entfernt, um den gewünschten Projektnamen für die E-Mail-Adresse zu erhalten.
    *   Die neue E-Mail-Adresse wird im Format ``projektname@DOMAIN`` erstellt.
    *   ``pw.setattr(cn, data={'mail': mail})``: Dieser Befehl schreibt die neu generierte E-Mail-Adresse zurück in das LDAP-Attribut des Projekts.

2.  **Hook verknüpfen:**
    Verknüpfen Sie das Skript mit den Sophomorix-Hooks, damit es bei Änderungen an Projekten automatisch ausgeführt wird:

    .. code-block:: bash

       ln -s /etc/linuxmuster/sophomorix/hooks/set-mail-group.py /etc/linuxmuster/sophomorix/hooks/sophomorix-add.d/
       ln -s /etc/linuxmuster/sophomorix/hooks/set-mail-group.py /etc/linuxmuster/sophomorix/hooks/sophomorix-update.d/

    *   Der erste Befehl verknüpft das Skript mit dem ``sophomorix-add.d``-Verzeichnis, sodass es ausgeführt wird, wenn ein neues Projekt hinzugefügt wird.
    *   Der zweite Befehl verknüpft es mit dem ``sophomorix-update.d``-Verzeichnis, sodass es bei Änderungen an bestehenden Projekten ausgeführt wird.

Nach diesen Schritten werden die E-Mail-Adressen Ihrer Verteilerprojekte automatisch im gewünschten Format generiert und aktualisiert.
