import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';

/**
 * Ein Raster aus Einstiegskarten für Übersichtsseiten.
 *
 * Anders als `AppCards`, das die Komponenten von edulution fest verdrahtet
 * und je nach Rolle umlenkt, steht hier in der Seite selbst, wohin es geht.
 * Gedacht für Kapitel-Startseiten, die ihre Unterseiten anmoderieren.
 *
 * Das Raster füllt sich selbst auf (`auto-fill`) – die Anzahl der Spalten
 * ergibt sich aus der Breite, nicht aus einem Breakpoint in der Seite.
 */
export function Cards({ children }: { children: ReactNode }): React.JSX.Element {
  return <div className="doc-cards">{children}</div>;
}

interface CardProps {
  /** Ziel der Karte – ein Doc-Pfad wie `/docs/edulution-mdm/einrichtung/voraussetzungen`. */
  to: string;
  title: string;
  /** Ein Satz dazu, was auf der Zielseite steht. Alternativ `children`. */
  text?: string;
  children?: ReactNode;
}

/**
 * Eine einzelne Karte.
 *
 * Die ganze Kachel ist der Link. Damit der Beschreibungstext deshalb nicht
 * in Linkfarbe erscheint, setzt `.doc-card` die Farbe zurück; die Rolle als
 * Link trägt sichtbar der Chevron hinter dem Titel.
 */
export function Card({ to, title, text, children }: CardProps): React.JSX.Element {
  return (
    <Link to={to} className="doc-card">
      <span className="doc-card__title">
        {title}
        <span className="doc-card__chevron" aria-hidden="true">
          ›
        </span>
      </span>
      {(children ?? text) ? <span className="doc-card__text">{children ?? text}</span> : null}
    </Link>
  );
}

export default Cards;
