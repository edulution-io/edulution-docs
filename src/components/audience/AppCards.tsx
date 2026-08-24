import React from 'react';
import Link from '@docusaurus/Link';
import { useAudience } from './AudienceContext';
import { ANY, audienceClassNames, resolveOrgs, resolveRoles } from './taxonomy';

/** Ein Einstieg in die Dokumentation einer Komponente. */
interface Target {
  to: string;
  /** Beschriftung des Links – sagt, wo man landet. */
  label: string;
}

interface AppCard {
  /** Kürzel unter dem Schriftzug, wie auf den Produktseiten. */
  badge: string | Record<string, string>;
  title: string | Record<string, string>;
  /** Die grüne Zeile: ein Satzteil, keine Wiederholung des Titels. */
  tagline: string;
  text: string;
  /**
   * Wer die Karte sieht. Leer = alle. Rein administrative Komponenten
   * tauchen für Endnutzer gar nicht erst auf – sie können sie weder
   * installieren noch betreiben.
   */
  roles?: string;
  orgs?: string;
  /**
   * Nimmt zwei Spalten ein, sobald eine Rolle gewaehlt ist, fuer die diese
   * Komponente den Schwerpunkt bildet – siehe `.app-card--wide` im CSS.
   */
  wide?: boolean;
  /**
   * Einstieg je Rolle. `default` gilt für jede Rolle ohne eigenen Eintrag,
   * also insbesondere für alle Endnutzer und für die Ansicht ohne Auswahl.
   */
  targets: Record<string, Target>;
}

const CARDS: AppCard[] = [
  {
    badge: 'PLATTFORM',
    title: 'edulution Plattform',
    tagline: 'Die zentrale Weboberfläche',
    wide: true,
    text: 'Dateien, E-Mail, Kalender, Kontakte, Chat, Konferenzen und Whiteboard – alles nach einer einzigen Anmeldung.',
    targets: {
      default: { to: '/docs/edulution-plattform/erste-schritte/navigation', label: 'Nutzerhandbuch' },
      'admin-setup': {
        to: '/docs/edulution-plattform/installation/voraussetzungen',
        label: 'Installation',
      },
      'admin-operate': {
        to: '/docs/edulution-plattform/konfiguration/administration',
        label: 'Administration',
      },
    },
  },
  {
    // Der Organisationstyp benennt diese App um – siehe Einstellungen →
    // Globale Einstellungen → Allgemein → Organisationstyp.
    badge: { school: 'SCHULSERVER', 'public-administration': 'SCHULSERVER', business: 'SERVER' },
    title: {
      school: 'edulution Schulserver',
      'public-administration': 'edulution Schulserver',
      business: 'edulution Server',
    },
    tagline: 'Der pädagogische Server',
    text: 'Die Linuxmuster-Anbindung: Benutzer, Gruppen, Geräte und Rechte zentral verwalten.',
    roles: 'admin',
    targets: {
      'admin-setup': {
        to: '/docs/edulution-plattform/installation/configure_lmn-server',
        label: 'Linuxmuster verbinden',
      },
      'admin-operate': {
        to: '/docs/edulution-plattform/konfiguration/linuxmuster',
        label: 'Serververwaltung',
      },
      default: {
        to: '/docs/edulution-plattform/konfiguration/linuxmuster',
        label: 'Serververwaltung',
      },
    },
  },
  {
    badge: 'MAIL',
    title: 'edulution Mail',
    tagline: 'Der integrierte Mailserver',
    text: 'Mailserver auf Mailcow-Basis mit Postfächern, Verteilerlisten und Anleitungen für alle gängigen Mail-Clients.',
    targets: {
      default: { to: '/docs/edulution-plattform/apps/e-mail', label: 'Mail-App nutzen' },
      'admin-setup': { to: '/docs/edulution-plattform/apps/e-mail/konfiguration/installation', label: 'Installation' },
      'admin-operate': { to: '/docs/edulution-plattform/apps/e-mail/konfiguration/administration', label: 'Administration' },
    },
  },
  {
    badge: 'APP',
    title: 'edulution App',
    tagline: 'Mobil auf iOS und Android',
    text: 'Zugriff auf die Plattform vom Smartphone – inklusive digitalem Ausweis.',
    targets: {
      default: { to: '/docs/edulution-app/', label: 'Übersicht' },
      'admin-setup': { to: '/docs/edulution-app/setup', label: 'Einrichtung' },
      'admin-operate': { to: '/docs/edulution-app/setup', label: 'Einrichtung' },
    },
  },
  {
    badge: 'LMS',
    title: 'edulution LMS',
    tagline: 'Lernmanagement mit Moodle',
    text: 'Moodle ohne zweiten Login. Kurse und Einschreibungen entstehen automatisch aus Ihren Gruppen.',
    targets: {
      default: {
        to: '/docs/edulution-plattform/apps/lernmanagement',
        label: 'Lernmanagement öffnen',
      },
      'admin-setup': { to: '/docs/edulution-moodle/installation/schnellstart', label: 'Schnellstart' },
      'admin-operate': {
        to: '/docs/edulution-moodle/administration/admin-ui',
        label: 'Admin-Oberfläche',
      },
    },
  },
  {
    badge: 'MDM',
    title: 'edulution MDM',
    tagline: 'Geräteverwaltung mit Relution',
    text: 'Tablets, Smartphones und Computer zentral verwalten – ohne die Relution-Konsole zu öffnen.',
    targets: {
      default: { to: '/docs/edulution-plattform/apps/mdm', label: 'MDM-App' },
    },
  },
  {
    badge: 'SATELLITE',
    title: 'edulution Satellite',
    tagline: 'Sichere Brücke zum Standort',
    text: 'Appliance für entfernte Standorte: Netzwerke, DHCP und Dienste vor Ort, angebunden über einen verschlüsselten Tunnel.',
    roles: 'admin',
    targets: {
      'admin-setup': {
        to: '/docs/edulution-satellite/einrichtung-mit-edulution',
        label: 'Einrichtung',
      },
      'admin-operate': {
        to: '/docs/edulution-plattform/konfiguration/satelliten',
        label: 'Satelliten verwalten',
      },
      default: { to: '/docs/edulution-satellite/', label: 'Übersicht' },
    },
  },
  {
    badge: 'FILEPROXY',
    title: 'edulution FileProxy',
    tagline: 'Sicherer Datei-Proxy',
    text: 'WebDAV-zu-SMB-Proxy für plattformübergreifenden Zugriff auf Windows-Freigaben.',
    roles: 'admin',
    targets: {
      default: { to: '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/', label: 'Übersicht' },
      'admin-setup': { to: '/docs/edulution-plattform/apps/dateien/konfiguration/fileproxy/installation', label: 'Installation' },
    },
  },
  {
    badge: 'OFFICE',
    title: 'Office-Integrationen',
    tagline: 'Dokumente direkt im Browser',
    text: 'OnlyOffice, Collabora und EuroOffice zum Bearbeiten von Dokumenten aus der Dateiverwaltung heraus.',
    targets: {
      default: { to: '/docs/edulution-plattform/apps/dateien/', label: 'Dateien' },
      'admin-setup': { to: '/docs/edulution-plattform/apps/dateien/konfiguration/onlyoffice', label: 'Installation' },
      'admin-operate': { to: '/docs/edulution-plattform/apps/dateien/konfiguration/onlyoffice', label: 'Installation' },
    },
  },
];

/**
 * Die Komponenten von edulution als Einstiegskarten.
 *
 * Zwei Dinge hängen an der Auswahl der Lesenden:
 *
 * 1. **Wohin die Karte führt.** Eine Lehrkraft landet beim Nutzerhandbuch,
 *    die Ersteinrichtung bei der Installation, der Betrieb bei der
 *    Administration. Niemand muss sich durch fremde Kapitel arbeiten.
 * 2. **Ob die Karte erscheint.** Satellite und FileProxy sind reine
 *    Administrationsthemen und verschwinden für Endnutzer.
 *
 * Ausgeblendet wird per CSS (die Klassen stehen schon im HTML, das
 * Inline-Skript setzt `data-role` vor dem ersten Paint), das Linkziel
 * dagegen aus dem Kontext – deshalb springt beim Laden nichts.
 */
export default function AppCards(): React.JSX.Element {
  const { role, org } = useAudience();

  return (
    <div className="app-cards">
      {CARDS.map((card) => {
        const target = card.targets[role] ?? card.targets.default;
        const title = pick(card.title, org);
        return (
          <Link
            key={pick(card.title, ANY)}
            to={target.to}
            className={`app-card${card.wide ? ' app-card--wide' : ''} ${audienceClassNames(
              resolveRoles(card.roles),
              resolveOrgs(card.orgs),
              { plain: true },
            )}`}
          >
            <span className="app-card__brand" aria-hidden="true">
              <span className="app-card__mark">e</span>
              <span className="app-card__lockup">
                <span className="app-card__word">
                  edulution<span className="app-card__tld">.io</span>
                </span>
                <span className="app-card__badge">{pick(card.badge, org)}</span>
              </span>
            </span>

            <span className="app-card__title">{title}</span>
            <span className="app-card__tagline">{card.tagline}</span>
            <span className="app-card__text">{card.text}</span>
            <span className="app-card__more">
              {target.label}
              <span className="app-card__chevron" aria-hidden="true">
                ›
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/** Wählt die Schreibweise des gewählten Organisationstyps. */
function pick(value: string | Record<string, string>, org: string): string {
  if (typeof value === 'string') {
    return value;
  }
  // Ohne Auswahl gilt Schule – die Voreinstellung von edulution.
  return value[org] ?? value.school;
}
