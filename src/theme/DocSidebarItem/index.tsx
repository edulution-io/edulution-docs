import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type { WrapperProps } from '@docusaurus/types';
import { audienceClassNames, resolveOrgs, resolveRoles } from '@site/src/components/audience/taxonomy';

type Props = WrapperProps<typeof DocSidebarItemType>;

interface AudienceProps {
  audience?: string | string[];
  audienceOrg?: string | string[];
}

/**
 * Blendet Sidebar-Eintraege aus, die sich an andere Zielgruppen richten.
 *
 * Markierung entweder in `sidebars.ts` per
 * `customProps: { audience: 'admin' }` (fuer Kategorien) oder im Front
 * Matter einer Seite per `sidebar_custom_props: { audience: admin }`.
 *
 * Ausgeblendet wird per CSS statt per bedingtem Rendern – sonst wuerde die
 * Sidebar nach der Hydration umspringen. `display: contents` sorgt dafuer,
 * dass der zusaetzliche Wrapper das Listen-Layout nicht stoert.
 */
export default function DocSidebarItemWrapper(props: Props): React.JSX.Element {
  const custom = (props.item as { customProps?: AudienceProps }).customProps;
  const roles = resolveRoles(custom?.audience);
  const orgs = resolveOrgs(custom?.audienceOrg);

  if (!roles.length && !orgs.length) {
    return <OriginalDocSidebarItem {...props} />;
  }

  return (
    <span className={`${audienceClassNames(roles, orgs)} aud--contents`}>
      <OriginalDocSidebarItem {...props} />
    </span>
  );
}
