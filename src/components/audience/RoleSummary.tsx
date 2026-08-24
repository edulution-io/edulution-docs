import React from 'react';
import { audienceClassNames, ORGS, ORG_ROLES } from './taxonomy';

/**
 * Eine Zeile zur gewählten Rolle, unter den Rollen-Schaltflächen.
 *
 * Nennt die Rolle und wofür sie steht. Die Zeile ist bewusst in den Farben
 * der aktiven Schaltfläche gehalten – sie liest sich damit als Ergebnis der
 * Auswahl und nicht als weiteres Eingabefeld. Ohne gewählte Rolle erscheint
 * nichts; eine Übersicht aller Rollen gibt es bewusst nicht mehr, weil
 * fremde Rollen niemandem weiterhelfen.
 *
 * Die Zeile hängt an beiden Achsen zugleich: Dieselbe Rollen-ID heißt in
 * einer Schule *Lehrkraft* und in einem Unternehmen *Führungskraft* und
 * beschreibt dort eine andere Aufgabe. Deshalb steht je Paar aus
 * Organisation und Rolle eine eigene Zeile im HTML, und CSS blendet alle
 * bis auf eine aus – so springt beim Laden nichts um.
 */
export default function RoleSummary(): React.JSX.Element {
  return (
    <>
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
