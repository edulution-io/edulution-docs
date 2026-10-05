import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useAudience } from './AudienceContext';
import { ANY, audienceClassNames, EDULUTION_DEFAULT_ORG, resolveOrgs, resolveRoles } from './taxonomy';

interface Target {
  to: string;
  label: string;
}

type TextPerOrg = string | Record<string, string>;

interface AppCard {
  badge: TextPerOrg;
  title: TextPerOrg;
  /** A sentence fragment that does not repeat the title. */
  tagline: string;
  text: string;
  /** Who sees the card, in the `<Audience roles>` syntax; omitted means everyone. */
  roles?: string;
  orgs?: string;
  /** Spans two columns only while a teacher or admin role is selected (see `.app-card--wide`). */
  wide?: boolean;
  targets: Record<string, Target> & { default: Target };
}

const CARDS: AppCard[] = [
  {
    badge: 'PLATTFORM',
    title: 'edulution Plattform',
    tagline: 'Die zentrale Weboberfläche',
    wide: true,
    text: 'Dateien, E-Mail, Kalender, Kontakte, Chat, Konferenzen und Whiteboard – alles nach einer einzigen Anmeldung.',
    targets: {
      default: { to: '/docs/edulution-plattform/uebersicht/navigation', label: 'Nutzerhandbuch' },
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
    // The org type renames this app, see Einstellungen → Globale Einstellungen → Allgemein →
    // Organisationstyp.
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
        to: '/docs/edulution-server/installation',
        label: 'Linuxmuster verbinden',
      },
      'admin-operate': {
        to: '/docs/edulution-server/linuxmuster',
        label: 'Serververwaltung',
      },
      default: {
        to: '/docs/edulution-server/linuxmuster',
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
      default: { to: '/docs/edulution-mail', label: 'Mail-App nutzen' },
      'admin-setup': { to: '/docs/edulution-mail/konfiguration/installation', label: 'Installation' },
      'admin-operate': { to: '/docs/edulution-mail/konfiguration/administration', label: 'Administration' },
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
        to: '/docs/edulution-satellite/verwaltung',
        label: 'Satelliten verwalten',
      },
      default: { to: '/docs/edulution-satellite/', label: 'Übersicht' },
    },
  },
  {
    badge: 'LMS',
    title: 'edulution LMS',
    tagline: 'Lernmanagement mit Moodle',
    text: 'Moodle ohne zweiten Login. Kurse und Einschreibungen entstehen automatisch aus Ihren Gruppen.',
    targets: {
      default: {
        to: '/docs/edulution-lms/',
        label: 'Lernmanagement öffnen',
      },
      'admin-setup': { to: '/docs/edulution-lms/installation/schnellstart', label: 'Schnellstart' },
      'admin-operate': {
        to: '/docs/edulution-lms/konfiguration/administration/admin-ui',
        label: 'Admin-Oberfläche',
      },
    },
  },
  {
    badge: 'VDI',
    title: 'edulution VDI',
    tagline: 'Virtuelle Desktops für den Unterricht',
    text: 'Zentral verwaltete Desktops direkt im Browser – jeder Schüler startet mit einer sauberen, vorkonfigurierten Umgebung.',
    targets: {
      default: { to: '/docs/edulution-vdi/', label: 'Übersicht' },
      'admin-setup': { to: '/docs/edulution-vdi/konfiguration/', label: 'Einrichtung' },
    },
  },
  {
    badge: 'MDM',
    title: 'edulution MDM',
    tagline: 'Geräteverwaltung mit Relution',
    text: 'Tablets, Smartphones und Computer zentral verwalten – ohne die Relution-Konsole zu öffnen.',
    targets: {
      default: { to: '/docs/edulution-mdm', label: 'MDM-App' },
    },
  },
  {
    badge: 'FILEPROXY',
    title: 'edulution FileProxy',
    tagline: 'Die Dateien-App und der Proxy dahinter',
    text: 'WebDAV-zu-SMB-Proxy für plattformübergreifenden Zugriff auf Windows-Freigaben.',
    roles: 'admin',
    targets: {
      default: { to: '/docs/edulution-fileproxy/', label: 'Übersicht' },
      'admin-setup': { to: '/docs/edulution-fileproxy/konfiguration/installation', label: 'Installation' },
    },
  },
  {
    badge: 'OFFICE',
    title: 'Office-Integrationen',
    tagline: 'Dokumente direkt im Browser',
    text: 'OnlyOffice, Collabora Online oder EuroOffice zum Bearbeiten von Dokumenten aus der Dateiverwaltung heraus.',
    targets: {
      default: { to: '/docs/edulution-fileproxy/dateien/', label: 'Dateien' },
      'admin-setup': { to: '/docs/edulution-fileproxy/dateien/konfiguration/dokumenten-editor', label: 'Installation' },
      'admin-operate': { to: '/docs/edulution-fileproxy/dateien/konfiguration/dokumenten-editor', label: 'Installation' },
    },
  },
];

/**
 * Card visibility comes from CSS classes so admin-only cards never flash on load; only the link
 * target follows the context.
 */
export default function AppCards(): React.JSX.Element {
  const { role, org } = useAudience();
  const markUrl = useBaseUrl('/img/edulution-mark.svg');

  return (
    <div className="app-cards">
      {CARDS.map((card) => {
        const target = card.targets[role] ?? card.targets.default;
        const title = textForOrg(card.title, org);
        return (
          <Link
            key={textForOrg(card.title, ANY)}
            to={target.to}
            className={`app-card${card.wide ? ' app-card--wide' : ''} ${audienceClassNames(
              resolveRoles(card.roles),
              resolveOrgs(card.orgs),
              { plain: true },
            )}`}
          >
            <span className="app-card__brand" aria-hidden="true">
              <img className="app-card__mark" src={markUrl} alt="" />
              <span className="app-card__lockup">
                <span className="app-card__word">
                  edulution<span className="app-card__tld">.io</span>
                </span>
                <span className="app-card__badge">{textForOrg(card.badge, org)}</span>
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

function textForOrg(value: TextPerOrg, org: string): string {
  if (typeof value === 'string') {
    return value;
  }
  return value[org] ?? value[EDULUTION_DEFAULT_ORG];
}
