import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { useLocation } from '@docusaurus/router';
import { ANY, roleExistsIn } from './taxonomy';

export const STORAGE_KEYS = {
  org: 'edulution-audience-org',
  role: 'edulution-audience-role',
} as const;

export type Axis = keyof typeof STORAGE_KEYS;

/**
 * Auswahl der Lesenden (Organisationstyp und Rolle).
 *
 * Die Sichtbarkeit steuert allein CSS über die Attribute `data-role` und
 * `data-org` am <html>-Element. Ein Inline-Skript setzt sie vor dem ersten
 * Paint (siehe `src/plugins/audience.js`), damit nichts aufblitzt und
 * Server- und Client-Render identisch bleiben.
 *
 * Ohne Auswahl steht überall `all` – dann ist nichts ausgeblendet.
 *
 * Achtung: Anzeige-Einstellung, keine Zugriffskontrolle. Alle Inhalte
 * stehen weiterhin im ausgelieferten HTML.
 */

interface AudienceState {
  org: string;
  role: string;
}

interface AudienceContextType extends AudienceState {
  setAxis: (axis: Axis, value: string) => void;
  reset: () => void;
  /** true, sobald mindestens eine Frage beantwortet wurde. */
  hasSelection: boolean;
}

const DEFAULTS: AudienceState = { org: ANY, role: ANY };

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

function read(axis: Axis): string {
  if (typeof window === 'undefined') {
    return ANY;
  }
  return window.localStorage.getItem(STORAGE_KEYS[axis]) || ANY;
}

function apply(state: AudienceState): void {
  if (typeof document === 'undefined') {
    return;
  }
  const root = document.documentElement;
  root.setAttribute('data-org', state.org);
  root.setAttribute('data-role', state.role);
}

function store(axis: Axis, value: string): void {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEYS[axis], value);
  }
}

export function AudienceProvider({ children }: { children: ReactNode }) {
  // Startet mit den Vorgabewerten, damit SSR und erster Client-Render
  // übereinstimmen. Das Inline-Skript hat die Attribute zu diesem Zeitpunkt
  // bereits korrekt gesetzt – sichtbar ist also schon das Richtige.
  const [state, setState] = useState<AudienceState>(DEFAULTS);

  useEffect(() => {
    const stored: AudienceState = { org: read('org'), role: read('role') };

    // Bis zur Umstellung waren Organisation und Rolle unabhaengig
    // voneinander waehlbar, es konnte also "Unternehmen" und "Eltern"
    // zugleich gespeichert sein. Solche Kombinationen gibt es nicht mehr:
    // Die Rolle faellt auf "alles" zurueck und wird gleich zurueck-
    // geschrieben, damit sich der Zustand einmalig selbst repariert.
    if (!roleExistsIn(stored.org, stored.role)) {
      stored.role = ANY;
      store('role', ANY);
    }
    // Die dritte Achse "Modul" ist entfallen; ihren Schluessel aufraeumen.
    window.localStorage.removeItem('edulution-audience-module');

    setState(stored);
    apply(stored);
  }, []);

  const setAxis = useCallback((axis: Axis, value: string) => {
    setState((previous) => {
      const next = { ...previous, [axis]: value };
      // Nicht jede Rolle kommt in jeder Organisation vor: Eltern gibt es in
      // einem Unternehmen nicht. Beim Wechsel des Organisationstyps fällt
      // eine Rolle, die es dort nicht gibt, deshalb auf "alles" zurück –
      // sonst bliebe eine Auswahl aktiv, die im Auswahldialog gar nicht
      // mehr auftaucht und sich nicht abwählen ließe.
      if (axis === 'org' && !roleExistsIn(value, next.role)) {
        next.role = ANY;
        store('role', ANY);
      }
      apply(next);
      store(axis, value);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setState(DEFAULTS);
    apply(DEFAULTS);
    if (typeof window !== 'undefined') {
      Object.values(STORAGE_KEYS).forEach((key) => window.localStorage.removeItem(key));
    }
  }, []);

  // Auswahl über mehrere Tabs hinweg synchron halten.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      const axis = (Object.keys(STORAGE_KEYS) as Axis[]).find(
        (a) => STORAGE_KEYS[a] === event.key,
      );
      if (!axis) {
        return;
      }
      setState((previous) => {
        const next = { ...previous, [axis]: event.newValue || ANY };
        apply(next);
        return next;
      });
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const hasSelection = state.org !== ANY || state.role !== ANY;

  return (
    <AudienceContext.Provider value={{ ...state, setAxis, reset, hasSelection }}>
      {children}
      <HiddenContentSync state={state} />
    </AudienceContext.Provider>
  );
}

export function useAudience(): AudienceContextType {
  const context = useContext(AudienceContext);
  if (context === undefined) {
    // Fallback während SSG oder wenn der Provider fehlt.
    return { ...DEFAULTS, setAxis: () => {}, reset: () => {}, hasSelection: false };
  }
  return context;
}

/**
 * Zwei Aufräumarbeiten nach jedem Render, die sich nur im Browser erledigen
 * lassen, weil sie davon abhängen, was gerade tatsächlich sichtbar ist:
 *
 * 1. Einträge im Inhaltsverzeichnis, die auf eine ausgeblendete Überschrift
 *    zeigen, würden ins Leere führen – sie werden mit ausgeblendet.
 * 2. Führt ein Link von außen (Suchtreffer, geteilte URL) auf einen Anker
 *    innerhalb eines ausgeblendeten Abschnitts, wird genau dieser Abschnitt
 *    aufgedeckt. Sonst landet man auf einer Seite, auf der die gesuchte
 *    Stelle scheinbar fehlt.
 */
function HiddenContentSync({ state }: { state: AudienceState }): null {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      // Zuvor aufgedeckte Abschnitte wieder zurücksetzen.
      document
        .querySelectorAll('.aud--revealed')
        .forEach((element) => element.classList.remove('aud--revealed'));

      const target = location.hash ? decodeURIComponent(location.hash.slice(1)) : '';
      if (target) {
        const anchor = document.getElementById(target);
        const hiddenAncestor = anchor?.closest<HTMLElement>('.aud');
        if (hiddenAncestor && getComputedStyle(hiddenAncestor).display === 'none') {
          hiddenAncestor.classList.add('aud--revealed');
        }
      }

      const hiddenIds = new Set<string>();
      document.querySelectorAll<HTMLElement>('.aud').forEach((element) => {
        if (getComputedStyle(element).display !== 'none') {
          return;
        }
        element.querySelectorAll('[id]').forEach((child) => hiddenIds.add(child.id));
      });

      document.querySelectorAll('.table-of-contents a[href^="#"]').forEach((link) => {
        const id = decodeURIComponent(link.getAttribute('href')!.slice(1));
        link.closest('li')?.classList.toggle('toc-hidden', hiddenIds.has(id));
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, state.role, state.org]);

  return null;
}
