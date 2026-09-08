import React from 'react';
import { ANY_ORG, audienceClassNames, ORGS } from './taxonomy';

/**
 * Eine Zeile zum gewählten Organisationstyp, unter dessen Schaltflächen.
 *
 * Gegenstück zu [[RoleSummary]] und im selben Stil: Sie nennt den Typ und
 * das, was er tatsächlich umstellt – gerade weil die vollständige Liste der
 * Auswirkungen in der Administration liegt und Endnutzern verborgen bleibt.
 *
 * Solange nichts gewählt ist, tritt die Zeile zu *Egal* an ihre Stelle. Sie
 * sagt nicht nur, dass alles sichtbar bleibt, sondern auch, dass die Rollen
 * der zweiten Frage bis dahin die Namen einer Schule tragen – ohne diese
 * Frage hier ließe sich das nicht ändern.
 *
 * Alle vier Zeilen stehen im HTML, CSS blendet drei davon aus.
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
