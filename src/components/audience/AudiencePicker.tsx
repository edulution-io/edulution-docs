import React from 'react';
import { useAudience, Axis } from './AudienceContext';
import { ANY, MODULES, ORGS, ROLES, Option } from './taxonomy';

const QUESTIONS: { axis: Axis; question: string; hint: string; options: Option[] }[] = [
  {
    axis: 'role',
    question: 'Wer sind Sie?',
    hint: 'Bestimmt, ob Administrations-Abschnitte eingeblendet werden.',
    options: ROLES,
  },
  {
    axis: 'org',
    question: 'Um welche Art von Organisation geht es?',
    hint: 'edulution benennt und zeigt manche Funktionen je nach Organisationstyp unterschiedlich.',
    options: ORGS,
  },
  {
    axis: 'module',
    question: 'Womit möchten Sie starten?',
    hint: 'Sortiert die Einstiegskarten weiter unten – ausgeblendet wird dadurch nichts.',
    options: MODULES,
  },
];

/**
 * Die drei Fragen am Kopf der Startseite.
 *
 * Beantworten ist freiwillig: Ohne Auswahl bleibt die gesamte Dokumentation
 * sichtbar. Die Auswahl blendet nur weg, was für andere Zielgruppen
 * geschrieben ist.
 */
export default function AudiencePicker(): React.JSX.Element {
  const audience = useAudience();

  return (
    <section className="audience-picker" aria-label="Dokumentation auf Ihre Rolle zuschneiden">
      {QUESTIONS.map(({ axis, question, hint, options }, index) => {
        const selected = audience[axis];
        return (
          <div className="audience-picker__question" key={axis}>
            <p className="audience-picker__label">
              <span className="audience-picker__number" aria-hidden="true">
                {index + 1}
              </span>
              {question}
            </p>
            <p className="audience-picker__hint">{hint}</p>
            <div className="audience-picker__options" role="group" aria-label={question}>
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  title={option.description}
                  aria-pressed={selected === option.id}
                  className={`audience-chip${selected === option.id ? ' audience-chip--on' : ''}`}
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
                Alles anzeigen
              </button>
            </div>
          </div>
        );
      })}

      <p className="audience-picker__footer">
        {audience.hasSelection ? (
          <>
            Ihre Auswahl gilt für die gesamte Dokumentation und bleibt gespeichert. Sie lässt sich
            jederzeit oben rechts in der Navigationsleiste ändern.{' '}
            <button type="button" className="audience-picker__reset" onClick={audience.reset}>
              Auswahl zurücksetzen
            </button>
          </>
        ) : (
          <>
            Solange Sie nichts auswählen, sehen Sie <strong>die vollständige Dokumentation</strong> –
            also auch alles, was nur für die Administration gedacht ist.
          </>
        )}
      </p>
    </section>
  );
}
