import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DocSidebarItemType>;

/**
 * Blendet Sidebar-Einträge aus, die als Experten-Inhalt markiert sind.
 *
 * Markierung entweder in `sidebars.ts` per `customProps: { expertOnly: true }`
 * (für Kategorien) oder im Front Matter einer Seite per
 * `sidebar_custom_props: { expertOnly: true }`.
 *
 * Ausgeblendet wird per CSS statt per bedingtem Rendern – sonst würde die
 * Sidebar nach der Hydration umspringen. `display: contents` sorgt dafür, dass
 * der zusätzliche Wrapper das Listen-Layout nicht stört.
 *
 * Eigene Klasse (nicht `.expert-only`), weil `.expert-only` aus dem Suchindex
 * entfernt wird – die Sidebar liefert dem Index aber die Breadcrumbs.
 */
export default function DocSidebarItemWrapper(props: Props): React.JSX.Element {
  const expertOnly = Boolean((props.item as { customProps?: { expertOnly?: boolean } }).customProps?.expertOnly);

  if (!expertOnly) {
    return <OriginalDocSidebarItem {...props} />;
  }

  return (
    <span className="expert-nav">
      <OriginalDocSidebarItem {...props} />
    </span>
  );
}
