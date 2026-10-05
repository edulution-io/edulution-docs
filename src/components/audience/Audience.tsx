import React, { ReactNode } from 'react';
import { audienceClassNames, resolveOrgs, resolveRoles } from './taxonomy';

export default function Audience({
  roles,
  org,
  children,
}: {
  roles?: string | string[];
  org?: string | string[];
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className={audienceClassNames(resolveRoles(roles), resolveOrgs(org))}>{children}</div>
  );
}
