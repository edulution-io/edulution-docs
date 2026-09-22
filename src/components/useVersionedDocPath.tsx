import React from 'react';
import Link from '@docusaurus/Link';
import { useAllDocsData, useDocsVersionCandidates, type GlobalVersion } from '@docusaurus/plugin-content-docs/client';

/** Adresse, unter der die Dokumentation liegt – `routeBasePath` des Docs-Plugins. */
const DOCS_BASE = '/docs';

const stripTrailingSlash = (path: string): string => path.replace(/\/+$/, '');

/**
 * Bildet einen unversionierten Doc-Pfad auf die Version ab, die gerade
 * gelesen wird.
 *
 * In `sidebars.ts`, in `AppCards` und in den Karten der Übersichtsseiten
 * stehen Ziele als `/docs/edulution-mail/…`. Dieselbe Zeichenkette landet
 * beim Versionsschnitt unverändert in jeder eingefrorenen Version – ein
 * Leser in einer älteren Version würde damit in die ausgelieferte Version
 * springen, ohne es zu merken.
 *
 * Die Kandidaten sind dieselben wie bei `useLayoutDoc`: erst die aktive
 * Version, dann die bevorzugte, dann die letzte – danach alle übrigen, damit
 * eine Seite, die es nur in der Entwicklungsversion gibt, aus einer
 * eingefrorenen Version heraus trotzdem erreichbar bleibt.
 *
 * Findet sich das Ziel in keiner Version, bleibt der Pfad stehen. Dann bricht
 * der Build mit `onBrokenLinks: 'throw'` ab – und genau dann ist der Link
 * tatsächlich falsch.
 */
export function useVersionedDocPath(): (path: string) => string {
  const candidates = useDocsVersionCandidates('default');
  const allVersions = useAllDocsData().default?.versions ?? [];

  return (path: string): string => {
    if (!path?.startsWith(DOCS_BASE)) {
      return path;
    }

    // Anker und Abfrage bleiben unangetastet.
    const cut = path.search(/[#?]/);
    const target = cut === -1 ? path : path.slice(0, cut);
    const suffix = cut === -1 ? '' : path.slice(cut);
    const rest = target.slice(DOCS_BASE.length);

    const ordered: GlobalVersion[] = [...candidates, ...allVersions.filter((v) => !candidates.includes(v))];

    // `/docs/` selbst ist keine Seite in `version.docs`, sondern die Wurzel
    // der Version – sie gibt es in jeder.
    if (stripTrailingSlash(rest) === '') {
      const version = ordered[0];
      return `${version ? stripTrailingSlash(version.path) : DOCS_BASE}/${suffix}`;
    }

    const wanted = stripTrailingSlash(rest);
    const match = ordered.find((version) =>
      version.docs.some((doc) => stripTrailingSlash(doc.path) === stripTrailingSlash(version.path) + wanted),
    );

    return match ? `${stripTrailingSlash(match.path)}${rest}${suffix}` : path;
  };
}

type DocLinkProps = React.ComponentProps<typeof Link>;

/**
 * Wie `Link`, nur dass ein `/docs/…`-Ziel in der Version bleibt, die gerade
 * gelesen wird. Für alles andere verhält sich die Komponente identisch.
 */
export function DocLink({ to, ...rest }: DocLinkProps): React.JSX.Element {
  const versioned = useVersionedDocPath();
  return (
    <Link
      to={typeof to === 'string' ? versioned(to) : to}
      {...rest}
    />
  );
}

export default DocLink;
