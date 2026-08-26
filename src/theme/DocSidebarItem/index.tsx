import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type { WrapperProps } from '@docusaurus/types';
import { audienceClassNames, resolveOrgs, resolveRoles } from '@site/src/components/audience/taxonomy';

type Props = WrapperProps<typeof DocSidebarItemType>;

interface AudienceProps {
  audience?: string | string[];
  audienceOrg?: string | string[];
  /** Ziel eines Querverweises – siehe `CROSS_REF_PLACEHOLDER`. */
  crossRef?: string;
}

/**
 * Platzhalter-Adresse eines Querverweises in `sidebars.ts`.
 *
 * Docusaurus haelt einen Eintrag fuer die *aktive Seite*, sobald dessen
 * `href` mit der Adresse im Browser uebereinstimmt – und klappt dann jede
 * Kategorie darueber auf. Fuer einen Querverweis ist das falsch: Die
 * Dateien-App steht in der Liste unter *edulution Plattform → Apps*, aber
 * dokumentiert ist sie unter *edulution Dateien (FileProxy)*. Waere ihr
 * `href` das echte Ziel, wuerden beide Aeste zugleich aufklappen.
 *
 * Deshalb traegt der Eintrag in `sidebars.ts` diesen Platzhalter als `href`
 * und das echte Ziel in `customProps.crossRef`. Der Vergleich schlaegt damit
 * fehl, der Ast bleibt zu – und unten wird der Platzhalter wieder durch das
 * echte Ziel ersetzt, bevor der Link im HTML landet.
 */
const CROSS_REF_PLACEHOLDER = '#';

/**
 * Blendet Sidebar-Eintraege aus, die sich an andere Zielgruppen richten, und
 * setzt Querverweise auf ihr echtes Ziel.
 *
 * Die Zielgruppe steht entweder in `sidebars.ts` als
 * `customProps: { audience: 'admin' }` (fuer Kategorien) oder im Front
 * Matter einer Seite als `sidebar_custom_props: { audience: admin }`.
 *
 * Ausgeblendet wird per CSS statt per bedingtem Rendern – sonst wuerde die
 * Sidebar nach der Hydration umspringen. `display: contents` sorgt dafuer,
 * dass der zusaetzliche Wrapper das Listen-Layout nicht stoert.
 */
export default function DocSidebarItemWrapper(props: Props): React.JSX.Element {
  const custom = (props.item as { customProps?: AudienceProps }).customProps;
  const roles = resolveRoles(custom?.audience);
  const orgs = resolveOrgs(custom?.audienceOrg);

  // Das echte Ziel erst hier einsetzen. `activePath` wird zusaetzlich geleert,
  // damit auch der Eintrag selbst nicht als aktiv gilt – sonst faende er sich
  // ueber das nun echte `href` doch wieder.
  const item =
    custom?.crossRef && (props.item as { href?: string }).href === CROSS_REF_PLACEHOLDER
      ? ({ ...props.item, href: custom.crossRef } as Props['item'])
      : props.item;
  const activePath = item === props.item ? props.activePath : '';

  const rendered = <OriginalDocSidebarItem {...props} item={item} activePath={activePath} />;

  if (!roles.length && !orgs.length) {
    return rendered;
  }

  return <span className={`${audienceClassNames(roles, orgs)} aud--contents`}>{rendered}</span>;
}
