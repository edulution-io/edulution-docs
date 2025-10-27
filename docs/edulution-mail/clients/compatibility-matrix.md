---
sidebar_position: 1
---

# Client-Kompatibilität

import CompatIcon from '@site/src/components/CompatIcon';

Übersicht über die Kompatibilität verschiedener E-Mail-Clients mit edulution Mail (basierend auf SOGo/Mailcow) ohne zusätzliche Plugins.

<div className="mail-compat-legend">
    <div className="mail-compat-legend-item">
        <span className="mail-compat-legend-icon"><CompatIcon type="check" /></span>
        <span>Funktioniert nativ</span>
    </div>
    <div className="mail-compat-legend-item">
        <span className="mail-compat-legend-icon"><CompatIcon type="cross" /></span>
        <span>Nicht unterstützt</span>
    </div>
    <div className="mail-compat-legend-item">
        <span className="mail-compat-legend-icon"><CompatIcon type="warning" /></span>
        <span>Eingeschränkt / Plugin nötig</span>
    </div>
</div>

<div className="mail-compat-table-wrapper">
    <table className="mail-compat-table">
        <thead>
            <tr>
                <th>Client / Betriebssystem</th>
                <th>ActiveSync</th>
                <th>Kalender</th>
                <th>Kontakte</th>
                <th>E-Mail</th>
                <th>Anmerkungen</th>
            </tr>
        </thead>
        <tbody>
            <tr className="mail-compat-category">
                <td colspan="6">Desktop Clients</td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Outlook 2007-2010</span>
                    <span className="mail-compat-platform not-supported">Windows</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="check" /></td>
                <td>Nur E-Mail funktioniert nativ<span className="mail-compat-note warning">Kalender & Kontakte nur mit Plugin</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Outlook 2013</span>
                    <span className="mail-compat-platform not-supported">Windows</span>
                </td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="check" /></td>
                <td>ActiveSync problematisch, nicht empfohlen<span className="mail-compat-note warning">Kalender & Kontakte nur mit Plugin</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Outlook 2016</span>
                    <span className="mail-compat-platform not-supported">Windows</span>
                </td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="check" /></td>
                <td>ActiveSync sehr problematisch<span className="mail-compat-note warning">Kalender & Kontakte nur mit Plugin</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Outlook 2019/2021</span>
                    <span className="mail-compat-platform not-supported">Windows</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td>ActiveSync deaktiviert (OAuth2 erforderlich)<span className="mail-compat-note warning">Auch mit Plugin problematisch</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Outlook Microsoft 365</span>
                    <span className="mail-compat-platform not-supported">Windows / Mac</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td>ActiveSync deaktiviert (OAuth2 erforderlich)<span className="mail-compat-note warning">Auch mit Plugin problematisch</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Neues Outlook (Web)</span>
                    <span className="mail-compat-platform not-supported">Windows / Mac</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="warning" /></td>
                <td>NICHT EMPFOHLEN - Sicherheitsbedenken<span className="mail-compat-note warning">Zugangsdaten werden an Microsoft übertragen</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Mozilla Thunderbird</span>
                    <span className="mail-compat-platform">Windows / Mac / Linux</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td>Native Unterstützung ab neueren Versionen<span className="mail-compat-note">Beste Desktop-Lösung</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Apple Mail</span>
                    <span className="mail-compat-platform">macOS</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td>Perfekte native Integration<span className="mail-compat-note">In Systemeinstellungen konfigurierbar</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Evolution</span>
                    <span className="mail-compat-platform">Linux (GNOME)</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td>Native Kalender & Kontakte Unterstützung<span className="mail-compat-note">Passwort im GNOME Schlüsselbund</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">eM Client</span>
                    <span className="mail-compat-platform">Windows / Mac</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td>Mailcow schließt eM Client von ActiveSync aus<span className="mail-compat-note">Kalender & Kontakte funktioniert nativ</span></td>
            </tr>

            <tr className="mail-compat-category">
                <td colspan="6">iOS / iPadOS Clients</td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Native Mail App</span>
                    <span className="mail-compat-platform">iOS / iPadOS</span>
                </td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td>Alle Protokolle nativ unterstützt<span className="mail-compat-note">Kalender & Kontakte empfohlen für Privatsphäre</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Native Kalender App</span>
                    <span className="mail-compat-platform">iOS / iPadOS</span>
                </td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td>Perfekte Kalender Integration<span className="mail-compat-note">In Einstellungen → Kalender → Accounts</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Native Kontakte App</span>
                    <span className="mail-compat-platform">iOS / iPadOS</span>
                </td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="cross" /></td>
                <td>Perfekte Kontakte Integration<span className="mail-compat-note">In Einstellungen → Kontakte → Accounts</span></td>
            </tr>

            <tr className="mail-compat-category">
                <td colspan="6">Android Clients</td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">DAVx⁵</span>
                    <span className="mail-compat-platform">Android</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="check" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><strong>EMPFOHLEN für Kalender & Kontakte</strong><span className="mail-compat-note">~5€, Open Source, synct mit nativen Apps</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">K-9 Mail / FairEmail</span>
                    <span className="mail-compat-platform">Android</span>
                </td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td>Exzellente E-Mail Clients<span className="mail-compat-note">In Kombination mit DAVx⁵ verwenden</span></td>
            </tr>

            <tr>
                <td>
                    <span className="mail-compat-client-name">Native Mail App</span>
                    <span className="mail-compat-platform">Android (herstellerabhängig)</span>
                </td>
                <td><CompatIcon type="warning" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="cross" /></td>
                <td><CompatIcon type="check" /></td>
                <td>ActiveSync je nach Hersteller/Version<span className="mail-compat-note">Für Kalender & Kontakte DAVx⁵ nutzen</span></td>
            </tr>
        </tbody>
    </table>
</div>

:::tip Empfohlene Konfiguration

- **Desktop:** Thunderbird (alle Plattformen) oder Apple Mail (macOS)
- **iOS:** Native Apps mit Kalender & Kontakte Konfiguration
- **Android:** DAVx⁵ für Kalender/Kontakte + K-9 Mail oder FairEmail für E-Mails
- **Outlook Nutzer:** Migration zu Thunderbird oder Webmail dringend empfohlen
- **Protokoll:** CalDAV/CardDAV bevorzugen – offene Standards, bessere Kontrolle

:::
