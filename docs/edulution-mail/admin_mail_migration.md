# Mail-Migration für Administratoren

Damit Benutzer ihre E-Mails von einem externen IMAP-Server in die
edulution Mail-App migrieren können, muss ein Administrator den externen
Mailserver zunächst als Provider hinterlegen. Benutzer wählen ihn
anschließend beim Anlegen eines Sync-Jobs aus und ergänzen nur noch ihre
eigenen Zugangsdaten.

**Externen Mail-Provider anlegen**

1.  **Einstellungen öffnen:** **Einstellungen** (Zahnrad-Symbol) im Menü
    rechts unten, dann in der linken Seitenleiste die App **E-Mails**.
2.  **Abschnitt wählen:** Zum Abschnitt **Externe Mail-Provider**
    wechseln.
3.  **Provider anlegen:** Über **Hinzufügen** unter der Tabelle den
    Dialog **E-Mail-Provider anlegen** öffnen und eintragen:
    - **Name:** Ein frei wählbarer Name für diesen Provider (z.B.
      "Altes Postfach BelWue"). Er wird den Benutzern in der Auswahlliste
      angezeigt und benennt zugleich den Zielordner, in dem die
      importierten E-Mails landen.
    - **Hostname:** Der IMAP-Server, von dem die Mails geholt werden
      (z.B. `mbox1.belwue.de`).
    - **Port:** Der IMAP-Port, in der Regel `993` für eine sichere
      Verbindung (IMAPS).
    - **Verschlüsselung:** `SSL`, `TLS` oder `PLAIN`.
4.  **Speichern:** Mit **Speichern** wird der Provider für die Benutzer
    verfügbar.

Host, Port und Verschlüsselung bleiben den Benutzern verborgen – ihre
Auswahlliste enthält ausschließlich den Namen des Providers.

![Einstellungen für den E-Mail Sync](/_static/edulution-mail_sync-einstellungen.png)

## Siehe auch

- [Mail-App konfigurieren](mail-app-konfiguration.md#externe-mail-provider) – alle Felder des Abschnitts im Detail
- [Benutzer: E-Mails migrieren](user_mail_migration.md) – Sync-Job aus Benutzersicht
