# Verteilerlisten

Verteilerlisten in der edulution UI basieren auf Projekten in
Linuxmuster. Dies ermöglicht eine flexible Verwaltung von
E-Mail-Verteilern direkt über die Linuxmuster-Oberfläche.

## Projekt als Verteiler anlegen

Um eine Verteilerliste zu erstellen, legen Sie ein neues Projekt in
Linuxmuster an und aktivieren die Verteiler-Option.

1.  **Projekt erstellen:** Navigieren Sie in der Linuxmuster-WebUI zu
    **\"Klassenzimmer\"** -\> **\"Einschreiben\"**.

2.  **Verteiler-Option aktivieren:** Beim Erstellen oder Bearbeiten des
    Projekts muss der Haken **\"Verteiler\"** gesetzt werden.

    ![Linuxmuster Projekt als Verteiler](/_static/linuxmuster_verteiler_projekt.png)

    Die E-Mail-Adresse des Verteilers wird automatisch generiert und
    lautet dann `p_projektname@domain` (z.B.
    `p_ag-robotik@meinedomain.de`).

3.  **Mitglieder hinzufügen:** Fügen Sie dem Projekt die gewünschten
    Mitglieder hinzu. Alle Mitglieder des Projekts erhalten dann
    E-Mails, die an die Verteileradresse gesendet werden.

:::warning
Aktuell ist es nicht möglich, ganze Gruppen direkt zu Projekten
hinzuzufügen. Mitglieder müssen einzeln hinzugefügt werden. Wenn Gruppen
hinzugefügt werden, führt dies dazu, dass die E-Mail-Adressen der
Gruppenmitglieder nicht korrekt synchronisiert werden.
:::

## Verteiler-E-Mail-Adressen anpassen

Standardmäßig wird die E-Mail-Adresse des Verteilers als
`p_projektname@domain` generiert. Um dieses Format zu ändern
(z.B. nur `projektname@domain`), nutzen Sie die **Gruppen-Mail-Synchronisation**.

:::tip Zwei Varianten möglich
Sie können das gleiche Skript **manuell** ausführen oder als **Cronjob** (empfohlen) einrichten:

**Manuell:** Für gelegentliche Anpassungen
**Cronjob:** Automatische Synchronisation alle 5 Minuten

→ Siehe [Gruppen-Mail-Synchronisation](./gruppen-mail-sync.md) für beide Varianten
:::

### Quick-Start: Manuell ausführen

Falls Sie nur eine einmalige Anpassung benötigen:

1. Erstellen Sie das [Skript aus der Gruppen-Mail-Synchronisation](./gruppen-mail-sync.md#1-skript-erstellen)
2. Führen Sie es manuell aus:
   ```bash
   sudo python3 /etc/linuxmuster/sophomorix/hooks/set-mail-group.py
   ```

:::info
Das Skript muss nach jeder Projekt-Änderung **manuell neu ausgeführt** werden, da Sophomorix-Hooks bei Projekten nicht automatisch getriggert werden.

**Empfehlung:** Richten Sie den [Cronjob](./gruppen-mail-sync.md#4-cronjob-einrichten) ein für automatische Updates.
:::
