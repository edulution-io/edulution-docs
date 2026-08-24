import React from 'react';
import { audienceClassNames, ORGS } from './taxonomy';

/**
 * Eine Zeile zum gewählten Organisationstyp, unter dessen Schaltflächen.
 *
 * Gegenstück zu [[RoleSummary]] und im selben Stil: Sie nennt den Typ und
 * das, was er tatsächlich umstellt – gerade weil die vollständige Liste der
 * Auswirkungen in der Administration liegt und Endnutzern verborgen bleibt.
 *
 * Alle drei Zeilen stehen im HTML, CSS blendet zwei davon aus. Ohne Auswahl
 * erscheint keine.
 */
export default function OrgSummary(): React.JSX.Element {
  return (
    <>
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
