import React from 'react';
import Link from '@docusaurus/Link';
import { useAudience } from './AudienceContext';
import { ANY } from './taxonomy';

interface Card {
  module: string;
  title: string;
  to: string;
  text: string;
}

/**
 * Einstiegskarten je Modul. Ist ein Modul gewählt, rücken dessen Karten nach
 * vorn – ausgeblendet wird nichts, damit niemand einen Einstieg verliert.
 */
const CARDS: Card[] = [
  {
    module: 'plattform',
    title: 'edulution Plattform',
    to: '/docs/edulution-plattform/features/navigation',
    text: 'Die zentrale Weboberfläche: Dateien, Kalender, Kontakte, Chat, Konferenzen und Whiteboard.',
  },
  {
    module: 'mail',
    title: 'edulution Mail',
    to: '/docs/category/edulution-mail',
    text: 'Mailserver auf Mailcow-Basis – vollständig in die Plattform integriert.',
  },
  {
    module: 'app',
    title: 'edulution App',
    to: '/docs/edulution-app/',
    text: 'Die mobile App für iOS und Android, inklusive digitalem Ausweis.',
  },
  {
    module: 'infrastruktur',
    title: 'edulution FileProxy',
    to: '/docs/edulution-fileproxy/',
    text: 'WebDAV-zu-SMB-Proxy für plattformübergreifenden Zugriff auf Windows-Freigaben.',
  },
  {
    module: 'infrastruktur',
    title: 'edulution Satellite',
    to: '/docs/edulution-satellite/',
    text: 'Appliance für entfernte Standorte – Netzwerke, DHCP und Dienste vor Ort.',
  },
  {
    module: 'infrastruktur',
    title: 'Office-Integrationen',
    to: '/docs/category/edulution-onlyoffice',
    text: 'OnlyOffice, Collabora und EuroOffice für das Bearbeiten von Dokumenten.',
  },
];

export default function ModuleCards(): React.JSX.Element {
  const { module } = useAudience();
  const ordered =
    module === ANY
      ? CARDS
      : [...CARDS].sort(
          (a, b) => Number(b.module === module) - Number(a.module === module),
        );

  return (
    <div className="module-cards">
      {ordered.map((card) => (
        <Link
          key={card.title}
          to={card.to}
          className={`module-card${card.module === module ? ' module-card--match' : ''}`}
        >
          <span className="module-card__title">{card.title}</span>
          <span className="module-card__text">{card.text}</span>
        </Link>
      ))}
    </div>
  );
}
