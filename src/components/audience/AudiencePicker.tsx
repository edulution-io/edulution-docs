import React from 'react';
import { useAudience, Axis } from './AudienceContext';
import { ANY, ORGS, Option, rolesFor } from './taxonomy';
import RoleSummary from './RoleSummary';
import OrgSummary from './OrgSummary';

const DEFAULT_QUESTIONS: Record<Axis, string> = {
  org: 'Um welche Art von Organisation geht es?',
  role: 'Welche Rolle haben Sie?',
};

/**
 * One audience question for MDX, e.g. `<AudiencePicker axis="role" question="…" />`; `question`
 * overrides the default wording. Place `org` before `role`, because the org type sets the role
 * labels.
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
  const label = question ?? DEFAULT_QUESTIONS[axis];
  const toggle = (id: string) => audience.setAxis(axis, selected === id ? ANY : id);

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
            onClick={() => toggle(option.id)}
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

      {isRole ? <RoleSummary /> : <OrgSummary />}
    </section>
  );
}
