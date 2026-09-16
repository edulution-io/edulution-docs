import React, { ReactNode } from 'react';
import { audienceClassNames, resolveOrgs, resolveRoles } from './taxonomy';

/**
 * Zeichnet Inhalte für bestimmte Zielgruppen aus.
 *
 * Global registriert (siehe `src/theme/MDXComponents.tsx`), also ohne Import
 * in jeder .md/.mdx-Datei verwendbar. Leerzeilen um den Inhalt nicht
 * vergessen, sonst wird das Markdown darin nicht gerendert:
 *
 * ```mdx
 * <Audience roles="admin">
 *
 * ## Einrichtung
 *
 * …
 *
 * </Audience>
 * ```
 *
 * - `roles` – eine oder mehrere Rollen, durch Leerzeichen oder Komma
 *   getrennt, oder eine der Gruppen aus `ROLE_GROUPS`. Ohne Angabe gilt der
 *   Abschnitt für alle Rollen.
 *
 *   Die Gruppen bilden die Zugriffsstufen ab: `advanced` meint Stufe 2 und
 *   alles darüber, `admin` Stufe 3 und alles darüber – wer höher steht,
 *   liest also mit. Eine einzelne Rolle oder eine der exklusiven Gruppen
 *   (`user`, `basic`) grenzt dagegen scharf ab und verbirgt den Abschnitt
 *   auch vor der Administration; das ist gemeint, wenn zwei Fassungen
 *   desselben Themas nebeneinanderstehen.
 * - `org` – ein oder mehrere Organisationstypen. Ohne Angabe gilt der
 *   Abschnitt für alle Organisationstypen.
 *
 * Beide Angaben werden mit UND verknüpft: `roles="teacher" org="school"`
 * zeigt den Abschnitt Lehrkräften in Schulumgebungen.
 *
 * Ein unbekannter Name lässt den Build fehlschlagen – besser ein roter
 * Build als ein Abschnitt, der wegen eines Tippfehlers stumm für alle
 * sichtbar bleibt.
 */
export default function Audience({
  roles,
  org,
  children,
}: {
  roles?: string | string[];
  org?: string | string[];
  children: ReactNode;
}): React.JSX.Element {
  return (
    <div className={audienceClassNames(resolveRoles(roles), resolveOrgs(org))}>{children}</div>
  );
}
