import React from 'react';
import { useAudience, Axis } from './AudienceContext';
import { ANY, ORGS, Option, rolesFor } from './taxonomy';
import RoleSummary from './RoleSummary';
import OrgSummary from './OrgSummary';

/**
 * Eine der beiden Fragen am Kopf der Startseite – welche, bestimmt `axis`:
 *
 * ```mdx
 * <AudiencePicker axis="org" />
 * <AudiencePicker axis="role" />
 * ```
 *
 * Überschrift und beschreibender Satz stehen im Markdown daneben, damit sie
 * sich ohne Eingriff in den Code umformulieren lassen. Die Komponente
 * liefert nur die Schaltflächen und das, was vom Zustand abhängt.
 *
 * Die Reihenfolge ist nicht beliebig: Der Organisationstyp beschriftet die
 * zweite Frage überhaupt erst. Dieselbe Rolle heißt in einer Schule
 * *Lehrkraft*, in einer Behörde *Lehrende:r* und in einem Unternehmen
 * *Führungskraft*.
 *
 * Beantworten ist freiwillig: Ohne Auswahl bleibt die gesamte Dokumentation
 * sichtbar. Die Auswahl blendet nur weg, was für andere Zielgruppen
 * geschrieben ist.
 */
export default function AudiencePicker({ axis = 'org' }: { axis?: Axis }): React.JSX.Element {
  const audience = useAudience();
  const isRole = axis === 'role';

  const options: Option[] = isRole
    ? rolesFor(audience.org === ANY ? undefined : audience.org)
    : ORGS;
  const selected = isRole ? audience.role : audience.org;
  const label = isRole ? 'Ihre Rolle' : 'Ihre Organisation';

  return (
    <section className="audience-picker" aria-label={label}>
      <div className="audience-picker__options" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            title={option.description}
            aria-pressed={selected === option.id}
            className={`audience-chip${selected === option.id ? ' audience-chip--on' : ''}`}
            // Erneuter Klick auf die aktive Auswahl hebt sie wieder auf.
            onClick={() => audience.setAxis(axis, selected === option.id ? ANY : option.id)}
          >
            {option.label}
          </button>
        ))}
        <button
          type="button"
          title="Keine Einschränkung – alles anzeigen"
          aria-pressed={selected === ANY}
          className={`audience-chip audience-chip--any${
            selected === ANY ? ' audience-chip--on' : ''
          }`}
          onClick={() => audience.setAxis(axis, ANY)}
        >
          Egal
        </button>
      </div>

      {!isRole && <OrgSummary />}

      {/* Hinweis und Rollenbeschreibung schliessen einander aus: ohne
          gewaehlte Organisation der Hinweis, sonst die Beschreibung. Welche
          von beiden erscheint, entscheidet CSS – so steht schon vor dem
          ersten Paint das Richtige da. */}
      {isRole && (
        <>
          <p className="audience-picker__note">
            Angezeigt sind die Rollen einer <strong>Schule</strong> – der Voreinstellung von
            edulution. Beantworten Sie die Frage darüber, wenn die Rollen bei Ihnen anders heißen.
          </p>
          <RoleSummary />
        </>
      )}
    </section>
  );
}
