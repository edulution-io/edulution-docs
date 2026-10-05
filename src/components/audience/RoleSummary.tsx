import React from 'react';
import { ANY_ROLE, audienceClassNames, ORGS, ORG_ROLES } from './taxonomy';

/**
 * One line per org/role pair, because the same role ID has a different label and meaning per org
 * type; CSS shows only the matching line, so nothing jumps on load.
 */
export default function RoleSummary(): React.JSX.Element {
  return (
    <>
      <div className="role-summary role-summary--any">
        <span className="aud-summary__label">{ANY_ROLE.label}</span>
        <span className="aud-summary__text">{ANY_ROLE.overview}</span>
      </div>
      {ORGS.flatMap((org) =>
        ORG_ROLES[org.id].map((role) => (
          <div
            key={`${org.id}-${role.id}`}
            className={`role-summary ${audienceClassNames([role.id], [org.id], { plain: true })}`}
          >
            <span className="aud-summary__label">{role.label}</span>
            <span className="aud-summary__text">{role.overview}</span>
          </div>
        )),
      )}
    </>
  );
}
