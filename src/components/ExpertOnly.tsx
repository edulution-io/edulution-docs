import React, { ReactNode } from 'react';

/**
 * Umschließt Inhalte, die nur im Expertenmodus sichtbar sein sollen.
 *
 * In Markdown/MDX ohne Import verwendbar (global registriert in
 * `src/theme/MDXComponents.tsx`). Leerzeilen um den Inhalt nicht vergessen,
 * sonst wird das Markdown darin nicht gerendert:
 *
 * ```mdx
 * <ExpertOnly>
 *
 * ## Nur für Administratoren
 *
 * Text …
 *
 * </ExpertOnly>
 * ```
 *
 * Die Sichtbarkeit steuert CSS über `data-expert` am <html>-Element – der
 * Inhalt wird also immer gerendert und nur ausgeblendet.
 */
export default function ExpertOnly({ children }: { children: ReactNode }): React.JSX.Element {
  return <div className="expert-only">{children}</div>;
}
