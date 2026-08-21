import React from 'react';
import { useExpertMode } from './ExpertMode';

/**
 * Schalter für den Expertenmodus – wird als Navbar-Element eingebunden
 * (siehe `src/theme/NavbarItem/ComponentTypes.tsx`).
 */
export default function ExpertModeToggle(): React.JSX.Element {
  const { expertMode, setExpertMode } = useExpertMode();

  return (
    <label
      className="expert-mode-toggle"
      title={
        expertMode
          ? 'Expertenmodus aktiv – Administrations-Inhalte werden angezeigt'
          : 'Expertenmodus aus – Administrations-Inhalte sind ausgeblendet'
      }
    >
      <input
        type="checkbox"
        role="switch"
        checked={expertMode}
        onChange={(event) => setExpertMode(event.target.checked)}
        aria-label="Expertenmodus"
      />
      <span className="expert-mode-toggle__track" aria-hidden="true">
        <span className="expert-mode-toggle__thumb" />
      </span>
      <span className="expert-mode-toggle__label">Expertenmodus</span>
    </label>
  );
}
