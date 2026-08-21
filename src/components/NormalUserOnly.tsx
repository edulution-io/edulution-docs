import React, { ReactNode } from 'react';

/**
 * Gegenstück zu `<ExpertOnly>`: sichtbar nur bei **ausgeschaltetem**
 * Expertenmodus.
 *
 * Gedacht für den kurzen Hinweis, der an die Stelle eines ausgeblendeten
 * Administrations-Abschnitts tritt – damit Benutzerinnen und Benutzer wissen,
 * dass eine Funktion von der Administration freigeschaltet werden muss, statt
 * ratlos vor einer fehlenden App zu stehen.
 *
 * In Markdown/MDX ohne Import verwendbar (global registriert in
 * `src/theme/MDXComponents.tsx`). Leerzeilen um den Inhalt nicht vergessen:
 *
 * ```mdx
 * <NormalUserOnly>
 *
 * Wer die App verwenden darf, legt die Administration fest.
 *
 * </NormalUserOnly>
 * ```
 */
export default function NormalUserOnly({ children }: { children: ReactNode }): React.JSX.Element {
  return <div className="normal-only">{children}</div>;
}
