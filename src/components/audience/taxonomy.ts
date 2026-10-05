export const ANY = 'all';

export interface Option {
  id: string;
  label: string;
  /** Short label for the navbar badge. */
  short: string;
  description: string;
}

export interface RoleView extends Option {
  /** Shown in the summary line below the role picker. */
  overview: string;
}

/**
 * Canonical role IDs for `<Audience roles="…">` and `sidebar_custom_props`. Their labels are the
 * fallback for a role the selected organization type does not offer.
 */
export const ROLES: Option[] = [
  {
    id: 'student',
    label: 'Lernende:r',
    short: 'Lernende:r',
    description: 'Nutzt edulution zum Lernen.',
  },
  {
    id: 'teacher',
    label: 'Lehrende:r',
    short: 'Lehrende:r',
    description: 'Unterrichtet oder betreut Gruppen.',
  },
  {
    id: 'parent',
    label: 'Eltern',
    short: 'Eltern',
    description: 'Begleitet ein Kind über die Elternfunktionen.',
  },
  {
    id: 'staff',
    label: 'Mitarbeiter:in',
    short: 'Mitarbeiter:in',
    description: 'Arbeitet mit edulution, ohne zu unterrichten.',
  },
  {
    id: 'admin-setup',
    label: 'Admin · Einrichtung',
    short: 'Einrichtung',
    description: 'Richtet eine neue edulution-Instanz zum ersten Mal ein.',
  },
  {
    id: 'admin-operate',
    label: 'Admin · Betrieb',
    short: 'Betrieb',
    description: 'Betreut eine bereits laufende edulution-Instanz.',
  },
];

export interface LevelView {
  /** 1 to 4; a higher level also sees the content of the levels below. */
  level: number;
  label: string;
  roles: string[];
  /** How to tell that a section belongs to this level. */
  description: string;
}

export const LEVELS: LevelView[] = [
  {
    level: 1,
    label: 'Benutzer',
    roles: ['student', 'parent', 'staff'],
    description:
      'Nutzt edulution für die eigene Arbeit: Dateien, Konferenzen, E-Mail, Aufgaben.',
  },
  {
    level: 2,
    label: 'Erweiterter Benutzer',
    roles: ['teacher'],
    description:
      'Betreut zusätzlich eine Gruppe: Klassen und Projekte, Bildschirme, eingesammelte Dateien, Umfragen und Mitteilungen anlegen.',
  },
  {
    level: 3,
    label: 'Admin · Betrieb',
    roles: ['admin-operate'],
    description: 'Betreut die laufende Instanz: Einstellungen, Benutzer, Container, Updates.',
  },
  {
    level: 4,
    label: 'Admin · Einrichtung',
    roles: ['admin-setup'],
    description: 'Richtet eine Instanz zum ersten Mal ein: Voraussetzungen, Installation, Anbindungen.',
  },
];

function rolesWhere(matches: (level: number) => boolean): string[] {
  return LEVELS.filter((entry) => matches(entry.level)).flatMap((entry) => entry.roles);
}

export interface OrgView extends Option {
  /** What selecting this type changes; shown in the summary line below the organization picker. */
  overview: string;
}

export const ORGS: OrgView[] = [
  {
    id: 'school',
    label: 'Schule',
    short: 'Schule',
    description: 'Schulen und Bildungseinrichtungen. Voreinstellung von edulution.',
    overview:
      'Voller Funktionsumfang für Bildungseinrichtungen: Klassen, Schülerausweis und Elternzuweisung. Die Server-App heißt Schulserver.',
  },
  {
    id: 'business',
    label: 'Unternehmen',
    short: 'Unternehmen',
    description: 'Firmen und andere nicht-schulische Organisationen.',
    overview:
      'Ohne die schulspezifischen Funktionen: Aus Klasse wird Primärgruppe, die Elternzuweisung entfällt, und statt des edulution-Logos steht beim Login allein Ihr eigenes Branding.',
  },
  {
    id: 'public-administration',
    label: 'Öffentliche Verwaltung',
    short: 'Verwaltung',
    description: 'Behörden und kommunale Einrichtungen.',
    overview:
      'Verhält sich wie Schule – Klassen und Elternzuweisung bleiben erhalten. Einziger Unterschied: Der Ausweis heißt Mitarbeiterausweis.',
  },
];

/** Summary line shown while a question is left at *Egal*. */
export interface AnyView {
  label: string;
  overview: string;
}

/**
 * Its overview names the school roles because `rolesFor` falls back to school while no
 * organization type is selected.
 */
export const ANY_ORG: AnyView = {
  label: 'Egal',
  overview:
    'Ohne Auswahl bleibt alles sichtbar – die Rollen unten tragen dann die Namen einer Schule, der Voreinstellung von edulution. Wählen Sie hier, wenn die Rollen bei Ihnen anders heißen.',
};

export const ANY_ROLE: AnyView = {
  label: 'Egal',
  overview:
    'Ohne Auswahl bleibt alles sichtbar – auch das, was nur eine einzelne Rolle betrifft, von den ersten Schritten bis zur Administration.',
};

/**
 * Shared by every organization type, since setting up or running a server does not differ between
 * them.
 */
const ADMIN_ROLES: RoleView[] = [
  {
    id: 'admin-setup',
    label: 'Admin · Einrichtung',
    short: 'Einrichtung',
    description: 'Sie setzen eine neue Instanz zum ersten Mal auf.',
    overview:
      'Setzt eine neue Instanz auf: Voraussetzungen, Installation, SSL und Reverse Proxy, Anbindung an Linuxmuster.',
  },
  {
    id: 'admin-operate',
    label: 'Admin · Betrieb',
    short: 'Betrieb',
    description: 'Sie betreuen eine bereits laufende Instanz.',
    overview:
      'Betreut eine laufende Instanz: Einstellungen, Benutzer, Container, Updates und Upgrades.',
  },
];

/**
 * IDs match `ROLES` so content is tagged once per task; only the label differs per organization
 * type. Content that exists only in schools is tagged with `org` instead.
 */
export const ORG_ROLES: Record<string, RoleView[]> = {
  school: [
    {
      id: 'student',
      label: 'Schüler:in',
      short: 'Schüler:in',
      description: 'Sie nutzen edulution für den Unterricht.',
      overview: 'Nutzt edulution im Unterricht: Dateien, Aufgaben, Konferenzen.',
    },
    {
      id: 'teacher',
      label: 'Lehrkraft',
      short: 'Lehrkraft',
      description: 'Sie unterrichten mit edulution und betreuen Klassen und Projekte.',
      overview:
        'Unterrichtet mit edulution, betreut Klassen und Projekte, sammelt Dateien ein und beaufsichtigt Bildschirme.',
    },
    {
      id: 'parent',
      label: 'Eltern',
      short: 'Eltern',
      description: 'Sie begleiten Ihr Kind und nutzen die Elternfunktionen.',
      overview: 'Begleiten ihr Kind über die Eltern-Schüler-Zuordnung und die zugehörigen Benachrichtigungen.',
    },
    ...ADMIN_ROLES,
  ],
  'public-administration': [
    {
      id: 'student',
      label: 'Teilnehmer:in',
      short: 'Teilnehmer:in',
      description: 'Sie nehmen an Kursen und Schulungen teil.',
      overview: 'Nimmt an Kursen teil: Dateien, Aufgaben, Konferenzen.',
    },
    {
      id: 'teacher',
      label: 'Lehrende:r',
      short: 'Lehrende:r',
      description: 'Sie leiten Kurse und betreuen Gruppen.',
      overview: 'Leitet Kurse, betreut Gruppen und Projekte, sammelt Dateien ein.',
    },
    {
      id: 'staff',
      label: 'Mitarbeiter:in',
      short: 'Mitarbeiter:in',
      description: 'Sie arbeiten mit edulution, ohne Kurse zu leiten.',
      overview: 'Arbeitet mit edulution, ohne Kurse zu leiten – der übliche Fall in Behörden.',
    },
    ...ADMIN_ROLES,
  ],
  business: [
    {
      id: 'staff',
      label: 'Mitarbeiter:in',
      short: 'Mitarbeiter:in',
      description: 'Sie arbeiten täglich mit edulution.',
      overview: 'Arbeitet täglich mit edulution: Dateien, E-Mail, Kalender, Chat, Konferenzen.',
    },
    {
      id: 'teacher',
      label: 'Führungskraft',
      short: 'Führungskraft',
      description: 'Sie führen ein Team und betreuen dessen Gruppen und Projekte.',
      overview:
        'Führt ein Team, betreut dessen Primärgruppe und Projekte, sammelt Dateien ein und beaufsichtigt Bildschirme.',
    },
    ...ADMIN_ROLES,
  ],
};

export const EDULUTION_DEFAULT_ORG = 'school';

export function rolesFor(org: string | undefined): RoleView[] {
  return ORG_ROLES[org ?? ''] ?? ORG_ROLES[EDULUTION_DEFAULT_ORG];
}

export function roleExistsIn(org: string | undefined, role: string): boolean {
  return role === ANY || rolesFor(org).some((r) => r.id === role);
}

export function roleLabel(org: string | undefined, id: string | undefined): string | undefined {
  return roleView(org, id)?.label;
}

export function roleShort(org: string | undefined, id: string | undefined): string | undefined {
  return roleView(org, id)?.short;
}

function roleView(org: string | undefined, id: string | undefined): Option | undefined {
  if (!id || id === ANY) {
    return undefined;
  }
  return rolesFor(org).find((r) => r.id === id) ?? ROLES.find((r) => r.id === id);
}

export const ROLE_GROUPS: Record<string, string[]> = {
  advanced: rolesWhere((level) => level >= 2),
  admin: rolesWhere((level) => level >= 3),
  user: rolesWhere((level) => level < 3),
  basic: rolesWhere((level) => level === 1),
};

const ROLE_IDS = new Set(ROLES.map((r) => r.id));
const ORG_IDS = new Set(ORGS.map((o) => o.id));

// A role without a level drops out of every group and silently loses sections like
// `roles="user"`, so fail the build instead.
for (const id of ROLE_IDS) {
  if (LEVELS.filter((entry) => entry.roles.includes(id)).length !== 1) {
    throw new Error(`Die Rolle "${id}" ist in LEVELS nicht genau einer Stufe zugeordnet.`);
  }
}

/**
 * Resolves a value like "admin" or "teacher student" to role IDs. Unknown names throw, so a typo
 * fails the build instead of showing the section to everyone.
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

/**
 * `plain` filters the element without the margin marker of tagged prose, for elements with their
 * own layout such as the entry cards.
 */
export function audienceClassNames(
  roles: string[],
  orgs: string[],
  options: { plain?: boolean } = {},
): string {
  const classes = ['aud'];
  if (options.plain) {
    classes.push('aud--plain');
  }
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
