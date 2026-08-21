import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import { useAudience, Axis } from './AudienceContext';
import { ANY, ORGS, ROLES, Option } from './taxonomy';

const MENU: { axis: Axis; title: string; options: Option[] }[] = [
  { axis: 'role', title: 'Rolle', options: ROLES },
  { axis: 'org', title: 'Organisationstyp', options: ORGS },
];

/**
 * Anzeige und schnelle Änderung der Auswahl in der Navigationsleiste.
 *
 * Zeigt die aktive Rolle; ohne Auswahl lädt sie zum Beantworten der drei
 * Fragen auf der Startseite ein.
 */
export default function AudienceBadge(): React.JSX.Element {
  const audience = useAudience();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onPointerDown = (event: MouseEvent) => {
      if (!container.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const role = ROLES.find((r) => r.id === audience.role);
  const org = ORGS.find((o) => o.id === audience.org);

  return (
    <div className="audience-badge" ref={container}>
      <button
        type="button"
        className={`audience-badge__button${role ? ' audience-badge__button--set' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        title={
          role
            ? `Rolle: ${role.label}${org ? ` · ${org.label}` : ''}`
            : 'Noch keine Rolle gewählt – es wird alles angezeigt'
        }
      >
        {role ? role.short : 'Rolle wählen'}
        {org ? <span className="audience-badge__org"> · {org.short}</span> : null}
      </button>

      {open && (
        <div className="audience-badge__menu">
          {MENU.map(({ axis, title, options }) => (
            <div className="audience-badge__group" key={axis}>
              <p className="audience-badge__group-title">{title}</p>
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`audience-badge__item${
                    audience[axis] === option.id ? ' audience-badge__item--on' : ''
                  }`}
                  onClick={() => audience.setAxis(axis, option.id)}
                >
                  {option.label}
                </button>
              ))}
              <button
                type="button"
                className={`audience-badge__item${
                  audience[axis] === ANY ? ' audience-badge__item--on' : ''
                }`}
                onClick={() => audience.setAxis(axis, ANY)}
              >
                Alles anzeigen
              </button>
            </div>
          ))}
          <Link className="audience-badge__link" to="/docs/" onClick={() => setOpen(false)}>
            Zur Übersicht mit allen Fragen
          </Link>
        </div>
      )}
    </div>
  );
}
