import React from 'react';
import OriginalContent from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import { useExpertMode } from '@site/src/components/ExpertMode';

type Props = WrapperProps<typeof ContentType>;

/**
 * Seiten, die im Front Matter `sidebar_custom_props: { expertOnly: true }`
 * tragen, sind komplett Experten-Inhalt. Ist der Expertenmodus aus, wird
 * statt des Inhalts ein Hinweis mit Einschalt-Möglichkeit gezeigt.
 *
 * Beides wird immer gerendert und per CSS umgeschaltet, damit es weder
 * flackert noch zu Hydration-Mismatches kommt.
 *
 * Bewusst `.expert-page` statt `.expert-only`: Ganze Experten-Seiten bleiben
 * im Suchindex, damit Admins sie finden. Wer ohne Expertenmodus auf einem
 * Treffer landet, sieht den Hinweis unten mit Einschalt-Knopf. Nur einzelne
 * `<ExpertOnly>`-Abschnitte werden aus dem Index entfernt – dort gäbe es
 * keinen solchen Hinweis, der Treffer würde ins Leere führen.
 */
export default function ContentWrapper(props: Props): React.JSX.Element {
  const { frontMatter } = useDoc();
  const { setExpertMode } = useExpertMode();
  const expertOnly = Boolean(
    (frontMatter.sidebar_custom_props as { expertOnly?: boolean } | undefined)?.expertOnly,
  );

  if (!expertOnly) {
    return <OriginalContent {...props} />;
  }

  return (
    <>
      <div className="expert-page">
        <OriginalContent {...props} />
      </div>
      <div className="expert-page-fallback">
        <h1>Nur im Expertenmodus</h1>
        <p>
          Diese Seite richtet sich an Administratorinnen und Administratoren und ist im
          normalen Modus ausgeblendet.
        </p>
        <p>
          <button type="button" className="button button--primary" onClick={() => setExpertMode(true)}>
            Expertenmodus einschalten
          </button>{' '}
          <Link className="button button--secondary" to="/docs/">
            Zur Übersicht
          </Link>
        </p>
      </div>
    </>
  );
}
