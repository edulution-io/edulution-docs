import React from 'react';
import { ANY_ORG, audienceClassNames, ORGS } from './taxonomy';

/**
 * All lines are rendered and CSS shows only the selected org type's line, so nothing jumps on
 * load.
 */
export default function OrgSummary(): React.JSX.Element {
  return (
    <>
      <div className="org-summary org-summary--any">
        <span className="aud-summary__label">{ANY_ORG.label}</span>
        <span className="aud-summary__text">{ANY_ORG.overview}</span>
      </div>
      {ORGS.map((org) => (
        <div
          key={org.id}
          className={`org-summary ${audienceClassNames([], [org.id], { plain: true })}`}
        >
          <span className="aud-summary__label">{org.label}</span>
          <span className="aud-summary__text">{org.overview}</span>
        </div>
      ))}
    </>
  );
}
