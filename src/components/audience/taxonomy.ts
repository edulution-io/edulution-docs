/**
 * Zielgruppen-Taxonomie der Dokumentation.
 *
 * Zwei Achsen, in dieser Reihenfolge zu beantworten:
 *
 *   org   – Organisationstyp der Installation. Entspricht dem Feld
 *           `EDUI_ORGANIZATION_TYPE` bzw. Einstellungen → Globale
 *           Einstellungen → Allgemein → Organisationstyp.
 *   role  – wer liest? Endnutzer-Rollen und die beiden Administrations-
 *           Situationen (Ersteinrichtung vs. laufender Betrieb).
 *
 * Der Organisationstyp kommt zuerst, weil er bestimmt, wie die Rollen
 * heißen: dieselbe Rollen-ID trägt in einer Schule, einer Behörde und einem
 * Unternehmen einen anderen Namen, und nicht jede Rolle kommt überall vor.
 * Ausgezeichnet werden Inhalte immer mit der ID, angezeigt wird das Label
 * des gewählten Organisationstyps.
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

/** Eine Rolle, wie sie unter einem bestimmten Organisationstyp erscheint. */
export interface RoleView extends Option {
  /** Wofür die Rolle steht – Spalte 2 der Rollenübersicht. */
  overview: string;
  /** Wo diese Rolle typischerweise nachschlägt – Spalte 3. */
  pages: string;
}

/**
 * Kanonische Rollen-IDs. Nur diese Namen dürfen in `<Audience roles="…">`
 * und in `sidebar_custom_props` stehen; die Labels hier sind die neutrale
 * Rückfallebene, solange kein Organisationstyp gewählt ist.
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

/**
 * Zugriffsstufen.
 *
 * Die Rollen stehen nicht nebeneinander, sondern übereinander: Wer eine
 * Instanz einrichtet, betreut sie auch; wer eine Gruppe betreut, arbeitet
 * mit denselben Apps wie die Gruppe selbst. Jede Rolle bekommt deshalb eine
 * Stufe, und daraus entstehen weiter unten die kumulativen Gruppen in
 * `ROLE_GROUPS`: `advanced` ist Stufe 2 und alles darüber, `admin` Stufe 3
 * und alles darüber.
 *
 * Die Stufe hängt an der Rollen-ID, nicht am angezeigten Label. `staff`
 * heißt in Unternehmen wie in Behörden »Mitarbeiter:in« und meint beide
 * Male Grundzugriff; `teacher` heißt Lehrkraft, Lehrende:r oder
 * Führungskraft und meint beide Male jemanden, der eine Gruppe betreut.
 *
 * Kumulativ ist die Vorgabe, nicht die einzige Möglichkeit: Ein Abschnitt,
 * der eine Rolle direkt nennt oder eine der exklusiven Gruppen benutzt,
 * bleibt allen anderen verborgen – auch der Administration. Das braucht,
 * wer zwei Fassungen desselben Themas nebeneinanderstellt, etwa »Für
 * Lehrende« und »Für Schüler«.
 */
export interface LevelView {
  /** 1 bis 4; größer heißt: sieht die Stufen darunter mit. */
  level: number;
  label: string;
  /** Die Rollen dieser Stufe. Zusammen ergeben sie alle Rollen-IDs. */
  roles: string[];
  /** Woran zu erkennen ist, dass ein Abschnitt hierher gehört. */
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

/** Die Rollen aller Stufen, auf die `matches` zutrifft. */
function rolesWhere(matches: (level: number) => boolean): string[] {
  return LEVELS.filter((entry) => matches(entry.level)).flatMap((entry) => entry.roles);
}

/** Ein Organisationstyp mit der Beschreibung dessen, was er umstellt. */
export interface OrgView extends Option {
  /** Wofür der Typ steht – Gegenstück zu `RoleView.overview`. */
  overview: string;
}

/**
 * Organisationstypen – Werte wie in `EDUI_ORGANIZATION_TYPE`.
 *
 * Die `overview`-Sätze fassen zusammen, was der Typ tatsächlich umstellt;
 * die vollständige Liste steht unter Einstellungen → Organisationstyp.
 */
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

/** Die Zeile zu einer noch offenen Frage – Gegenstueck zu `OrgView`. */
export interface AnyView {
  label: string;
  overview: string;
}

/**
 * Was »Egal« bedeutet – je Frage eine Zeile.
 *
 * Sie steht hier bei den uebrigen Beschreibungen, weil sie an derselben
 * Stelle erscheint und dasselbe leistet: sagen, was die aktuelle Antwort
 * bewirkt. Die Zeile zum Organisationstyp traegt zusätzlich den Hinweis,
 * woher die Rollennamen der zweiten Frage stammen, solange hier nichts
 * gewaehlt ist – naemlich aus der Schule, siehe `rolesFor`.
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
 * Die beiden Administrations-Rollen. Sie heißen überall gleich – ein Server
 * wird in einer Behörde nicht anders eingerichtet als in einer Schule.
 */
const ADMIN_ROLES: RoleView[] = [
  {
    id: 'admin-setup',
    label: 'Admin · Einrichtung',
    short: 'Einrichtung',
    description: 'Sie setzen eine neue Instanz zum ersten Mal auf.',
    overview:
      'Setzt eine neue Instanz auf: Voraussetzungen, Installation, SSL und Reverse Proxy, Anbindung an Linuxmuster.',
    pages: 'Installation, Linuxmuster verbinden',
  },
  {
    id: 'admin-operate',
    label: 'Admin · Betrieb',
    short: 'Betrieb',
    description: 'Sie betreuen eine bereits laufende Instanz.',
    overview:
      'Betreut eine laufende Instanz: Einstellungen, Benutzer, Container, Updates und Upgrades.',
    pages: 'Administration, Upgrade',
  },
];

/**
 * Rollen je Organisationstyp.
 *
 * Die IDs sind bewusst dieselben wie in `ROLES` – eine Lehrkraft in der
 * Schule und eine Führungskraft im Unternehmen stehen vor derselben Aufgabe
 * (eine Gruppe betreuen) und lesen dieselben Seiten. Nur der Name ändert
 * sich. Was wirklich nur in Schulen existiert, wird zusätzlich über die
 * Achse `org` ausgezeichnet.
 */
export const ORG_ROLES: Record<string, RoleView[]> = {
  school: [
    {
      id: 'student',
      label: 'Schüler:in',
      short: 'Schüler:in',
      description: 'Sie nutzen edulution für den Unterricht.',
      overview: 'Nutzt edulution im Unterricht: Dateien, Aufgaben, Konferenzen.',
      pages: 'Nutzerhandbuch',
    },
    {
      id: 'teacher',
      label: 'Lehrkraft',
      short: 'Lehrkraft',
      description: 'Sie unterrichten mit edulution und betreuen Klassen und Projekte.',
      overview:
        'Unterrichtet mit edulution, betreut Klassen und Projekte, sammelt Dateien ein und beaufsichtigt Bildschirme.',
      pages: 'Nutzerhandbuch, Klassenzimmer',
    },
    {
      id: 'parent',
      label: 'Eltern',
      short: 'Eltern',
      description: 'Sie begleiten Ihr Kind und nutzen die Elternfunktionen.',
      overview: 'Begleiten ihr Kind über die Eltern-Schüler-Zuordnung und die zugehörigen Benachrichtigungen.',
      pages: 'Nutzerhandbuch, Eltern-Schüler-Zuordnung',
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
      pages: 'Nutzerhandbuch',
    },
    {
      id: 'teacher',
      label: 'Lehrende:r',
      short: 'Lehrende:r',
      description: 'Sie leiten Kurse und betreuen Gruppen.',
      overview: 'Leitet Kurse, betreut Gruppen und Projekte, sammelt Dateien ein.',
      pages: 'Nutzerhandbuch, Klassenzimmer',
    },
    {
      id: 'staff',
      label: 'Mitarbeiter:in',
      short: 'Mitarbeiter:in',
      description: 'Sie arbeiten mit edulution, ohne Kurse zu leiten.',
      overview: 'Arbeitet mit edulution, ohne Kurse zu leiten – der übliche Fall in Behörden.',
      pages: 'Nutzerhandbuch',
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
      pages: 'Nutzerhandbuch',
    },
    {
      id: 'teacher',
      label: 'Führungskraft',
      short: 'Führungskraft',
      description: 'Sie führen ein Team und betreuen dessen Gruppen und Projekte.',
      overview:
        'Führt ein Team, betreut dessen Primärgruppe und Projekte, sammelt Dateien ein und beaufsichtigt Bildschirme.',
      pages: 'Nutzerhandbuch, Klassenzimmer',
    },
    ...ADMIN_ROLES,
  ],
};

/**
 * Die Rollen, die zu einem Organisationstyp angeboten werden. Ohne Auswahl
 * gilt **Schule** – die Voreinstellung von edulution.
 */
export function rolesFor(org: string | undefined): RoleView[] {
  return ORG_ROLES[org ?? ''] ?? ORG_ROLES.school;
}

/** Gibt es diese Rolle beim gewählten Organisationstyp überhaupt? */
export function roleExistsIn(org: string | undefined, role: string): boolean {
  return role === ANY || rolesFor(org).some((r) => r.id === role);
}

/** Label einer Rolle in der Sprache des gewählten Organisationstyps. */
export function roleLabel(org: string | undefined, id: string | undefined): string | undefined {
  return roleView(org, id)?.label;
}

/** Kurzform einer Rolle – für die Navigationsleiste. */
export function roleShort(org: string | undefined, id: string | undefined): string | undefined {
  return roleView(org, id)?.short;
}

function roleView(org: string | undefined, id: string | undefined): Option | undefined {
  if (!id || id === ANY) {
    return undefined;
  }
  return rolesFor(org).find((r) => r.id === id) ?? ROLES.find((r) => r.id === id);
}

/**
 * Abkürzungen für die Auszeichnung von Inhalten – jede steht für eine
 * feste Menge von Rollen-IDs, abgeleitet aus den Stufen in `LEVELS`.
 *
 * Kumulativ, also »Mindeststufe«. Wer darüber liegt, liest mit:
 *
 *   advanced  Stufe 2 aufwärts – alles, was das Betreuen einer Gruppe
 *             voraussetzt. Die Administration sieht es mit.
 *   admin     Stufe 3 aufwärts – Einrichtung und Betrieb zusammen. Für
 *             nur eine der beiden steht die Rollen-ID selbst da:
 *             `admin-operate` (Stufe 3) oder `admin-setup` (Stufe 4).
 *
 * Exklusiv, also genau diese Rollen. Alle anderen sehen den Abschnitt
 * nicht, die Administration eingeschlossen:
 *
 *   user      alle Endnutzer, aber niemand aus der Administration – für
 *             den Endnutzer-Teil einer Seite, die weiter unten einen
 *             eigenen Administrations-Teil hat.
 *   basic     nur Stufe 1 – das Gegenstück zu `advanced`, wenn zwei
 *             Fassungen nebeneinanderstehen (»Für Lehrende« neben »Für
 *             Schüler«). Ohne `basic` würde die Schüler-Fassung auch
 *             Lehrenden angezeigt, die daneben schon ihre eigene lesen.
 *
 * Im Zweifel die kumulative Form: Etwas vor der Administration zu
 * verbergen, ist eine Entscheidung und kein Nebeneffekt.
 */
export const ROLE_GROUPS: Record<string, string[]> = {
  advanced: rolesWhere((level) => level >= 2),
  admin: rolesWhere((level) => level >= 3),
  user: rolesWhere((level) => level < 3),
  basic: rolesWhere((level) => level === 1),
};

const ROLE_IDS = new Set(ROLES.map((r) => r.id));
const ORG_IDS = new Set(ORGS.map((o) => o.id));

// Jede Rolle braucht genau eine Stufe. Fehlt sie, taucht die Rolle in keiner
// Gruppe mehr auf – ein Abschnitt mit `roles="user"` wäre dann stumm für sie
// unsichtbar. Lieber ein roter Build.
for (const id of ROLE_IDS) {
  if (LEVELS.filter((entry) => entry.roles.includes(id)).length !== 1) {
    throw new Error(`Die Rolle "${id}" ist in LEVELS nicht genau einer Stufe zugeordnet.`);
  }
}

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

/**
 * CSS-Klassen für ein ausgezeichnetes Element.
 *
 * `plain` unterdrückt die Randmarkierung, mit der ausgezeichnete Absätze im
 * Fließtext gekennzeichnet werden – gedacht für Elemente mit eigenem Layout
 * wie die Einstiegskarten.
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
