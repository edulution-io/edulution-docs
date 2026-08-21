import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { useLocation } from '@docusaurus/router';

export const EXPERT_MODE_STORAGE_KEY = 'edulution-expert-mode';

/**
 * Expertenmodus.
 *
 * Blendet Administrations-Inhalte ein und aus. Die Sichtbarkeit selbst wird per
 * CSS über das Attribut `data-expert` am <html>-Element gesteuert (siehe
 * `src/css/custom.css`) und nicht per bedingtem Rendern. Das hat zwei Gründe:
 *
 * 1. Kein Flackern: Ein Inline-Skript setzt `data-expert` schon vor dem ersten
 *    Paint (siehe `src/plugins/expert-mode.js`), lange bevor React hydriert.
 * 2. Keine Hydration-Mismatches: Server und Client rendern denselben Baum.
 *
 * Achtung: Das ist eine Anzeige-Einstellung, keine Zugriffskontrolle. Die
 * Inhalte stehen weiterhin im ausgelieferten HTML.
 */

interface ExpertModeContextType {
  expertMode: boolean;
  setExpertMode: (value: boolean) => void;
  toggleExpertMode: () => void;
}

const ExpertModeContext = createContext<ExpertModeContextType | undefined>(undefined);

function readStoredExpertMode(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.localStorage.getItem(EXPERT_MODE_STORAGE_KEY) === 'true';
}

function applyExpertMode(value: boolean): void {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-expert', value ? 'true' : 'false');
  }
}

export function ExpertModeProvider({ children }: { children: ReactNode }) {
  // Startet bewusst mit `false`, damit SSR und erster Client-Render
  // übereinstimmen. Das Inline-Skript hat das <html>-Attribut zu diesem
  // Zeitpunkt bereits korrekt gesetzt, sichtbar ist also schon das Richtige.
  const [expertMode, setExpertModeState] = useState(false);

  useEffect(() => {
    const stored = readStoredExpertMode();
    setExpertModeState(stored);
    applyExpertMode(stored);
  }, []);

  const setExpertMode = useCallback((value: boolean) => {
    setExpertModeState(value);
    applyExpertMode(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(EXPERT_MODE_STORAGE_KEY, value ? 'true' : 'false');
    }
  }, []);

  const toggleExpertMode = useCallback(() => {
    setExpertMode(!readStoredExpertMode());
  }, [setExpertMode]);

  // Einstellung über mehrere Tabs hinweg synchron halten.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === EXPERT_MODE_STORAGE_KEY) {
        const value = event.newValue === 'true';
        setExpertModeState(value);
        applyExpertMode(value);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <ExpertModeContext.Provider value={{ expertMode, setExpertMode, toggleExpertMode }}>
      {children}
      <ExpertModeTocSync expertMode={expertMode} />
    </ExpertModeContext.Provider>
  );
}

export function useExpertMode(): ExpertModeContextType {
  const context = useContext(ExpertModeContext);
  if (context === undefined) {
    // Fallback während SSG oder wenn der Provider fehlt.
    return { expertMode: false, setExpertMode: () => {}, toggleExpertMode: () => {} };
  }
  return context;
}

/**
 * Das Inhaltsverzeichnis wird aus allen Überschriften der Seite erzeugt – auch
 * aus denen in ausgeblendeten Abschnitten. Diese Einträge würden sonst ins
 * Leere führen. Hier werden sie passend zum Expertenmodus mit ausgeblendet.
 */
function ExpertModeTocSync({ expertMode }: { expertMode: boolean }): null {
  const location = useLocation();

  useEffect(() => {
    // Nach dem Rendern des neuen Seiteninhalts ausführen.
    const frame = window.requestAnimationFrame(() => {
      const hiddenIds = new Set<string>();
      document.querySelectorAll('.expert-only [id], .expert-page [id]').forEach((element) => {
        hiddenIds.add(element.id);
      });

      document.querySelectorAll('.table-of-contents a[href^="#"]').forEach((anchor) => {
        const id = decodeURIComponent(anchor.getAttribute('href')!.slice(1));
        const listItem = anchor.closest('li');
        if (!listItem) {
          return;
        }
        listItem.classList.toggle('expert-only-toc', hiddenIds.has(id));
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, expertMode]);

  return null;
}
