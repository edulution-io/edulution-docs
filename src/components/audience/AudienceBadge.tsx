import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import { useAudience } from './AudienceContext';
import { ANY, ORGS, labelFor, roleShort, rolesFor } from './taxonomy';

/**
 * Anzeige und schnelle Änderung der Auswahl in der Navigationsleiste.
 *
 * Reihenfolge wie auf der Startseite: erst die Organisation, dann die Rolle
 * – die Rollenliste hängt schließlich an der Organisation. Ohne Auswahl
 * lädt der Knopf zum Beantworten der beiden Fragen ein.
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

  const org = ORGS.find((o) => o.id === audience.org);
  const role = roleShort(audience.org, audience.role);
  const roles = rolesFor(audience.org === ANY ? undefined : audience.org);

  return (
    <div className="audience-badge" ref={container}>
      <button
        type="button"
        className={`audience-badge__button${
          org || role ? ' audience-badge__button--set' : ''
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        title={
          org || role
            ? `Zielgruppe: ${[org?.label, role].filter(Boolean).join(' · ')}`
            : 'Noch nichts gewählt – es wird alles angezeigt'
        }
      >
        {role ?? org?.short ?? 'Zielgruppe'}
        {role && org ? <span className="audience-badge__org"> · {org.short}</span> : null}
      </button>

      {open && (
        <div className="audience-badge__menu">
          <div className="audience-badge__group">
            <p className="audience-badge__group-title">Organisation</p>
            {ORGS.map((option) => (
              <MenuItem
                key={option.id}
                label={option.label}
                on={audience.org === option.id}
                onClick={() => audience.setAxis('org', option.id)}
              />
            ))}
            <MenuItem
              label="Alles anzeigen"
              on={audience.org === ANY}
              onClick={() => audience.setAxis('org', ANY)}
            />
          </div>

          <div className="audience-badge__group">
            <p className="audience-badge__group-title">
              Rolle{org ? ` in ${labelFor(ORGS, org.id)}` : ''}
            </p>
            {roles.map((option) => (
              <MenuItem
                key={option.id}
                label={option.label}
                on={audience.role === option.id}
                onClick={() => audience.setAxis('role', option.id)}
              />
            ))}
            <MenuItem
              label="Alles anzeigen"
              on={audience.role === ANY}
              onClick={() => audience.setAxis('role', ANY)}
            />
          </div>

          <Link className="audience-badge__link" to="/docs/" onClick={() => setOpen(false)}>
            Zur Übersicht mit beiden Fragen
          </Link>
        </div>
      )}
    </div>
  );
}

function MenuItem({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}): React.JSX.Element {
  return (
    <button
      type="button"
      className={`audience-badge__item${on ? ' audience-badge__item--on' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
