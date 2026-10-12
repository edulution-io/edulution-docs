import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';

/**
 * Entry cards for chapter overview pages; unlike `AppCards`, the page itself sets each card's target.
 * The number of columns follows the available width, so pages need no breakpoints.
 */
export function Cards({ children }: { children: ReactNode }): React.JSX.Element {
  return <div className="doc-cards">{children}</div>;
}

interface CardProps {
  /** A doc path such as `/docs/edulution-mdm/einrichtung/voraussetzungen`. */
  to: string;
  title: string;
  /** One sentence on what the target page covers; `children` can be used instead. */
  text?: string;
  children?: ReactNode;
}

/**
 * The whole tile is the link. `.doc-card` resets the link colour so the text stays readable, and the
 * chevron signals the link instead.
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
