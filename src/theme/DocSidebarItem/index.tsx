import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import type DocSidebarItemType from '@theme/DocSidebarItem';
import type { WrapperProps } from '@docusaurus/types';
import { audienceClassNames, resolveOrgs, resolveRoles } from '@site/src/components/audience/taxonomy';

type Props = WrapperProps<typeof DocSidebarItemType>;

interface AudienceProps {
  audience?: string | string[];
  audienceOrg?: string | string[];
  /** Real target of a cross-reference; see `CROSS_REF_PLACEHOLDER`. */
  crossRef?: string;
}

/**
 * Docusaurus expands every category above an item whose `href` matches the current URL, so a
 * cross-reference listed in one branch but documented in another would expand both. Cross-references in
 * `sidebars.ts` therefore use this placeholder as `href` and put the real target in `customProps.crossRef`.
 */
const CROSS_REF_PLACEHOLDER = '#';

/**
 * Items for other audiences are hidden by CSS rather than conditional rendering, which would make the
 * sidebar jump after hydration. The audience comes from `customProps` in `sidebars.ts` or
 * `sidebar_custom_props` in a page's front matter.
 */
export default function DocSidebarItemWrapper(props: Props): React.JSX.Element {
  const custom = (props.item as { customProps?: AudienceProps }).customProps;
  const roles = resolveRoles(custom?.audience);
  const orgs = resolveOrgs(custom?.audienceOrg);

  // Clearing `activePath` keeps the item from matching its now real `href` and becoming active after all.
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
