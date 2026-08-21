# Lernmanagement (Moodle)

Mit der edulution Plattform v2.0 ist **Moodle** direkt in edulution integriert. Die Lernplattform öffnet sich als App **Lernmanagement** innerhalb der edulution-Oberfläche, und der bisher nötige **zweite Login entfällt**: Wer in edulution angemeldet ist, ist auch in Moodle angemeldet (Single Sign-On).

Kurse, Kategorien und Einschreibungen entstehen dabei automatisch aus den Gruppen Ihrer Schule – die Klasse 10a in edulution ist dieselbe Klasse 10a in Moodle.

## Lernmanagement öffnen

1. Öffnen Sie **Lernmanagement** über die Seitenleiste, die Menüleiste oder den App-Launcher.
2. Moodle wird direkt im edulution-Fenster geladen.
3. Sie sind bereits angemeldet – es erscheint weder ein Moodle-Anmeldeformular noch eine Weiterleitung zum Login.

Die Seitennavigation von edulution bleibt dabei erhalten. Wechseln Sie zu einer anderen App und später zurück, ist Moodle weiterhin an derselben Stelle geöffnet; ein erneutes Laden der Kursseite ist nicht nötig.

:::info[Was Sie in Moodle sehen]
Sichtbar sind die Kurse, in die Sie eingeschrieben sind. Lehrkräfte werden automatisch als **Trainer** eingeschrieben, Schülerinnen und Schüler als **Teilnehmer**. Die Zuordnung stammt aus den Gruppen und Rollen Ihrer Schule und wird regelmäßig abgeglichen – Sie müssen sich also nicht selbst in Kurse eintragen.
:::

<ExpertOnly>

## Einrichtung durch Administratoren

Die folgenden Schritte führen Sie einmalig als Global-Admin in edulution durch.

### Schritt 1: App „Lernmanagement" hinzufügen

1. Melden Sie sich als Administrator an.
2. Navigieren Sie zu **Einstellungen** → **App-Store**.
3. Klicken Sie auf die Kachel **Lernmanagement** und fügen Sie die App über das **+** hinzu.

Die App erscheint danach als eigener Eintrag unter **Einstellungen**, in dem Sie URL, Proxy-Konfiguration und Container verwalten.

### Schritt 2: Moodle bereitstellen

Sie haben zwei Möglichkeiten:

**a) Moodle über edulution installieren (empfohlen)**

1. Öffnen Sie **Einstellungen** → **Lernmanagement**.
2. Scrollen Sie zum Abschnitt **Container-Übersicht** und klicken Sie auf das **+**.
3. Geben Sie im Dialog den **Hostname** Ihrer edulution-Instanz an und starten Sie die Installation.

edulution richtet dabei automatisch ein:

- den Container **edulution-moodle** samt Datenbank
- alle benötigten Passwörter und Secrets (Datenbank, Keycloak-Client)
- den Keycloak-Client `edulution-moodle` für die Anmeldung
- die Traefik-**Proxy-Konfiguration**, damit Moodle über die edulution-URL erreichbar ist

:::tip[Proxy-Konfiguration bleibt aktuell]
Die Proxy-Konfiguration für das Lernmanagement wird von edulution automatisch aus dem [edulution-plugins-Repository](https://github.com/edulution-io/edulution-plugins) bezogen und bei einer neuen veröffentlichten Version selbstständig aktualisiert. Sie müssen die YAML-Konfiguration nicht von Hand pflegen.
:::

**b) Bestehende Moodle-Instanz anbinden**

Betreiben Sie Moodle bereits selbst, tragen Sie unter **Einstellungen** → **Lernmanagement** lediglich die **URL** Ihrer Moodle-Instanz ein. Die Installation und Konfiguration von Moodle beschreibt der [Schnellstart](/docs/edulution-moodle/installation/schnellstart) im Bereich edulution Moodle.

### Schritt 3: Plugin in Moodle konfigurieren

Das Single Sign-On und die Kursstruktur liefert das lokale Moodle-Plugin **edulution**:

1. **Keycloak-Verbindung** herstellen und die [Synchronisation](/docs/edulution-moodle/konfiguration/synchronisation) aktivieren, damit Benutzer, Kurse und Einschreibungen entstehen.
2. **Cookie Auth (SSO)** aktivieren: *Site-Administration → Plugins → Edulution → Cookie Auth (SSO)*. Für edulution sind die Standardwerte richtig – Cookie-Name `authToken`, Benutzer-Claim `preferred_username`. Alle Einstellungen beschreibt die Seite [Cookie Auth (SSO)](/docs/edulution-moodle/konfiguration/cookie-auth).

:::note[Reihenfolge]
Aktivieren Sie zuerst die Synchronisation und danach das Cookie Auth. Angemeldet werden können nur Benutzer, die in Moodle bereits existieren.
:::

### Schritt 4: Sichtbarkeit festlegen

Wie bei jeder App legen Sie unter **Einstellungen** → **Lernmanagement** fest, wo die App erscheint (Seitenleiste, Menüleiste, App-Launcher) und welche Nutzergruppen sie sehen. Details dazu unter [Einstellungen](../administration/einstellungen.md).

</ExpertOnly>

## Fehlerbehebung

| Beobachtung | Ursache und Abhilfe |
| --- | --- |
| Moodle zeigt trotzdem ein **Anmeldeformular** | Cookie Auth ist im Moodle-Plugin nicht aktiviert. Prüfen Sie *Plugins → Edulution → Cookie Auth (SSO)*. |
| Anmeldung schlägt für **einzelne Benutzer** fehl | Das Konto existiert noch nicht in Moodle. Führen Sie die [Synchronisation](/docs/edulution-moodle/konfiguration/synchronisation) aus. |
| SSO funktioniert **für niemanden** | Läuft Moodle unter einer fremden Domain oder ohne HTTPS, wird das Cookie nicht übertragen. Prüfen Sie Domain und Zertifikate. |
| Der Bereich bleibt **leer** | Die hinterlegte URL ist nicht erreichbar oder verbietet die Einbettung. Prüfen Sie die URL unter *Einstellungen → Lernmanagement* und die Proxy-Konfiguration. |
| Kurse fehlen oder heißen **unerwartet** | Die Kurse entstehen aus den Gruppennamen. Siehe [Gruppen-Namensschemas](/docs/edulution-moodle/konfiguration/namensschemas). |

Bleibt das Problem bestehen, hilft die Testseite des Plugins weiter, die Cookie, Token und Konfiguration anzeigt – beschrieben unter [Cookie Auth (SSO) → Testen](/docs/edulution-moodle/konfiguration/cookie-auth#testen).

## Siehe auch

- [edulution Moodle – Übersicht](/docs/edulution-moodle/) – Plugin, Synchronisation und Kursstruktur
- [Cookie Auth (SSO)](/docs/edulution-moodle/konfiguration/cookie-auth) – alle Einstellungen der automatischen Anmeldung
- [Synchronisation](/docs/edulution-moodle/konfiguration/synchronisation) – Benutzer, Kurse und Einschreibungen abgleichen
- [App-Store & Anwendungen](app-store.md) – Apps hinzufügen und verwalten
- [Einstellungen (Settings)](../administration/einstellungen.md) – Container, Nutzergruppen und Anzeigeorte
