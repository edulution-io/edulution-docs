/**
 * Zielgruppen-Taxonomie der Dokumentation.
 *
 * Drei unabhängige Achsen:
 *
 *   role    – wer liest? Endnutzer-Rollen und die beiden Administrations-
 *             Situationen (Ersteinrichtung vs. laufender Betrieb).
 *   org     – Organisationstyp der Installation. Entspricht dem Feld
 *             `EDUI_ORGANIZATION_TYPE` bzw. Einstellungen → Globale
 *             Einstellungen → Allgemein → Organisationstyp.
 *   module  – Produktmodul. Filtert keine Inhalte, sondern personalisiert
 *             die Einstiegskarten auf der Startseite.
 *
 * Inhalte deklarieren, für wen sie gedacht sind; die Auswahl der Lesenden
 * entscheidet über die Sichtbarkeit. Ohne Auswahl ist alles sichtbar.
 */

export const ANY = 'all';

export interface Option {
  id: string;
  label: string;
  /** Kurzform für die Navigationsleiste. */
  short: string;
  description: string;
}

/** Rollen. Reihenfolge = Anzeigereihenfolge im Auswahldialog. */
export const ROLES: Option[] = [
  {
    id: 'student',
    label: 'Schüler:in',
    short: 'Schüler:in',
    description: 'Sie nutzen edulution für den Unterricht.',
  },
  {
    id: 'teacher',
    label: 'Lehrkraft',
    short: 'Lehrkraft',
    description: 'Sie unterrichten mit edulution und betreuen Klassen und Projekte.',
  },
  {
    id: 'parent',
    label: 'Eltern',
    short: 'Eltern',
    description: 'Sie begleiten Ihr Kind und nutzen die Elternfunktionen.',
  },
  {
    id: 'staff',
    label: 'Mitarbeiter:in',
    short: 'Mitarbeiter:in',
    description: 'Sie arbeiten mit edulution, ohne zu unterrichten.',
  },
  {
    id: 'admin-setup',
    label: 'Administration – Ersteinrichtung',
    short: 'Ersteinrichtung',
    description: 'Sie richten eine neue edulution-Instanz zum ersten Mal ein.',
  },
  {
    id: 'admin-operate',
    label: 'Administration – Betrieb',
    short: 'Betrieb',
    description: 'Sie betreuen eine bereits laufende edulution-Instanz.',
  },
];

/** Organisationstypen – Werte wie in `EDUI_ORGANIZATION_TYPE`. */
export const ORGS: Option[] = [
  {
    id: 'school',
    label: 'Schule',
    short: 'Schule',
    description: 'Schulen und Bildungseinrichtungen. Voreinstellung von edulution.',
  },
  {
    id: 'business',
    label: 'Unternehmen',
    short: 'Unternehmen',
    description: 'Firmen und andere nicht-schulische Organisationen.',
  },
  {
    id: 'public-administration',
    label: 'Öffentliche Verwaltung',
    short: 'Verwaltung',
    description: 'Behörden und kommunale Einrichtungen.',
  },
];

/** Module – steuern die Einstiegskarten, nicht die Sichtbarkeit von Text. */
export const MODULES: Option[] = [
  {
    id: 'plattform',
    label: 'edulution Plattform',
    short: 'Plattform',
    description: 'Die zentrale Weboberfläche mit Dateien, Kalender, Chat und Konferenzen.',
  },
  {
    id: 'mail',
    label: 'edulution Mail',
    short: 'Mail',
    description: 'Mailserver auf Mailcow-Basis, in die Plattform integriert.',
  },
  {
    id: 'app',
    label: 'edulution App',
    short: 'App',
    description: 'Die mobile App für iOS und Android.',
  },
  {
    id: 'infrastruktur',
    label: 'Infrastruktur',
    short: 'Infrastruktur',
    description: 'FileProxy, Satellite, Office-Integrationen und Moodle.',
  },
];

/**
 * Abkürzungen für die Auszeichnung von Inhalten. `admin` spart das
 * Aufzählen beider Administrations-Rollen, `user` das der vier
 * Endnutzer-Rollen.
 */
export const ROLE_GROUPS: Record<string, string[]> = {
  admin: ['admin-setup', 'admin-operate'],
  user: ['student', 'teacher', 'parent', 'staff'],
};

const ROLE_IDS = new Set(ROLES.map((r) => r.id));
const ORG_IDS = new Set(ORGS.map((o) => o.id));

/**
 * Löst eine Angabe wie "admin" oder "teacher student" in konkrete Rollen auf.
 * Wirft bei unbekannten Namen – ein Tippfehler soll den Build anhalten und
 * nicht stillschweigend einen Abschnitt für alle sichtbar lassen.
 */
export function resolveRoles(value: string | string[] | undefined): string[] {
  return resolve(value, ROLE_IDS, ROLE_GROUPS, 'Rolle');
}

export function resolveOrgs(value: string | string[] | undefined): string[] {
  return resolve(value, ORG_IDS, {}, 'Organisationstyp');
}

function resolve(
  value: string | string[] | undefined,
  known: Set<string>,
  groups: Record<string, string[]>,
  what: string,
): string[] {
  if (value === undefined || value === null) {
    return [];
  }
  const tokens = (Array.isArray(value) ? value : value.split(/[\s,]+/))
    .map((t) => t.trim())
    .filter(Boolean);

  const out = new Set<string>();
  for (const token of tokens) {
    if (groups[token]) {
      groups[token].forEach((id) => out.add(id));
    } else if (known.has(token)) {
      out.add(token);
    } else {
      const allowed = [...known, ...Object.keys(groups)].join(', ');
      throw new Error(
        `Unbekannte ${what} "${token}" in einer Zielgruppen-Angabe. Erlaubt: ${allowed}`,
      );
    }
  }
  return [...out];
}

/** CSS-Klassen für ein ausgezeichnetes Element. */
export function audienceClassNames(roles: string[], orgs: string[]): string {
  const classes = ['aud'];
  if (roles.length) {
    classes.push('aud--roled', ...roles.map((r) => `aud-role-${r}`));
  }
  if (orgs.length) {
    classes.push('aud--orged', ...orgs.map((o) => `aud-org-${o}`));
  }
  return classes.join(' ');
}

export function labelFor(options: Option[], id: string | undefined): string | undefined {
  return options.find((o) => o.id === id)?.label;
}
