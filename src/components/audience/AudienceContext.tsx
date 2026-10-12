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

const OBSOLETE_MODULE_STORAGE_KEY = 'edulution-audience-module';

interface AudienceState {
  org: string;
  role: string;
}

interface AudienceContextType extends AudienceState {
  setAxis: (axis: Axis, value: string) => void;
  reset: () => void;
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
  // Starts with DEFAULTS so SSR and the first client render match; the inline script in
  // `src/plugins/audience.js` has already applied the stored selection to <html>.
  const [state, setState] = useState<AudienceState>(DEFAULTS);

  useEffect(() => {
    const stored: AudienceState = { org: read('org'), role: read('role') };

    // localStorage can hold a role that does not exist in the stored org type (e.g. `parent`
    // with `business`); reset and persist it so the stored state repairs itself.
    if (!roleExistsIn(stored.org, stored.role)) {
      stored.role = ANY;
      store('role', ANY);
    }
    window.localStorage.removeItem(OBSOLETE_MODULE_STORAGE_KEY);

    setState(stored);
    apply(stored);
  }, []);

  const setAxis = useCallback((axis: Axis, value: string) => {
    setState((previous) => {
      const next = { ...previous, [axis]: value };
      // A role that does not exist in the new org type would stay active without a button
      // to deselect it.
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

  useEffect(() => {
    const syncFromOtherTab = (event: StorageEvent) => {
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
    window.addEventListener('storage', syncFromOtherTab);
    return () => window.removeEventListener('storage', syncFromOtherTab);
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
    return { ...DEFAULTS, setAxis: () => {}, reset: () => {}, hasSelection: false };
  }
  return context;
}

/**
 * Reads computed styles, so it runs in the browser after each render: it hides TOC entries for
 * hidden headings and reveals the hidden section an incoming URL hash points into.
 */
function HiddenContentSync({ state }: { state: AudienceState }): null {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
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
