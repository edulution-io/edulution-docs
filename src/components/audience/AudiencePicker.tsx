import React from 'react';
import { useAudience, Axis } from './AudienceContext';
import { ANY, ORGS, Option, rolesFor } from './taxonomy';
import RoleSummary from './RoleSummary';
import OrgSummary from './OrgSummary';

/** Voreingestellte Fragen je Achse. */
const QUESTIONS: Record<Axis, string> = {
  org: 'Um welche Art von Organisation geht es?',
  role: 'Welche Rolle haben Sie?',
};

/**
 * Eine der beiden Fragen am Kopf der Startseite – welche, bestimmt `axis`:
 *
 * ```mdx
 * <AudiencePicker axis="org" />
 * <AudiencePicker axis="role" question="Für welchen Standort?" />
 * ```
 *
 * Die Frage steht links neben den Schaltflächen. `question` überschreibt sie;
 * ohne Angabe gilt die Voreinstellung aus `QUESTIONS`. Der erklärende Satz
 * bleibt im Markdown daneben, damit er sich ohne Eingriff in den Code
 * umformulieren lässt.
 *
 * Beide Fragen teilen sich dieselbe Spaltenbreite (siehe `.audience-picker`
 * im CSS), damit die Schaltflächen untereinander fluchten – auch wenn die
 * eine Frage deutlich länger ist als die andere.
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
export default function AudiencePicker({
  axis = 'org',
  question,
}: {
  axis?: Axis;
  question?: string;
}): React.JSX.Element {
  const audience = useAudience();
  const isRole = axis === 'role';

  const options: Option[] = isRole ? rolesFor(audience.org === ANY ? undefined : audience.org) : ORGS;
  const selected = isRole ? audience.role : audience.org;
  const label = question ?? QUESTIONS[axis];

  return (
    <section
      className="audience-picker"
      aria-labelledby={`audience-q-${axis}`}
    >
      <p
        className="audience-picker__question"
        id={`audience-q-${axis}`}
      >
        {label}
      </p>
      <div
        className="audience-picker__options"
        role="group"
        aria-label={label}
      >
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
          className={`audience-chip audience-chip--any${selected === ANY ? ' audience-chip--on' : ''}`}
          onClick={() => audience.setAxis(axis, ANY)}
        >
          Egal
        </button>
      </div>

      {/* Unter Frage und Schaltflaechen steht immer genau eine Zeile: die zur
          gewaehlten Antwort, oder – solange die Frage offen ist – die zu
          *Egal*. Welche davon erscheint, entscheidet CSS; so steht schon vor
          dem ersten Paint das Richtige da. Sie ist ein eigenes Kind des
          Rasters und laeuft ueber beide Spalten. */}
      {isRole ? <RoleSummary /> : <OrgSummary />}
    </section>
  );
}
