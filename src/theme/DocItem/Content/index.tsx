import React from 'react';
import OriginalContent from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import { useAudience } from '@site/src/components/audience/AudienceContext';
import {
  audienceClassNames,
  labelFor,
  resolveOrgs,
  resolveRoles,
  ORGS,
  ROLES,
} from '@site/src/components/audience/taxonomy';

type Props = WrapperProps<typeof ContentType>;

/**
 * Seiten koennen sich im Front Matter komplett an eine Zielgruppe richten:
 *
 * ```yaml
 * sidebar_custom_props:
 *   audience: admin
 * ```
 *
 * Passt die Auswahl nicht, tritt an die Stelle des Inhalts ein Hinweis mit
 * den passenden Rollen und einem Knopf zum Umschalten. Beides wird immer
 * gerendert und per CSS umgeschaltet – kein Flackern, keine
 * Hydration-Mismatches.
 */
export default function ContentWrapper(props: Props): React.JSX.Element {
  const { frontMatter } = useDoc();
  const audience = useAudience();
  const custom = frontMatter.sidebar_custom_props as
    | { audience?: string | string[]; audienceOrg?: string | string[] }
    | undefined;

  const roles = resolveRoles(custom?.audience);
  const orgs = resolveOrgs(custom?.audienceOrg);

  if (!roles.length && !orgs.length) {
    return <OriginalContent {...props} />;
  }

  const audiences = [
    ...roles.map((id) => labelFor(ROLES, id)),
    ...orgs.map((id) => labelFor(ORGS, id)),
  ].filter(Boolean);

  return (
    <>
      <div className={`${audienceClassNames(roles, orgs)} aud--contents`}>
        <OriginalContent {...props} />
      </div>
      <div className="aud-fallback">
        <h1>Diese Seite richtet sich an eine andere Zielgruppe</h1>
        <p>
          Sie ist geschrieben für: <strong>{audiences.join(', ')}</strong>. Ihre aktuelle Auswahl
          blendet sie deshalb aus.
        </p>
        <p>
          {roles.length > 0 && (
            <>
              <button
                type="button"
                className="button button--primary"
                onClick={() => audience.setAxis('role', roles[0])}
              >
                Als {labelFor(ROLES, roles[0])} ansehen
              </button>{' '}
            </>
          )}
          <button type="button" className="button button--secondary" onClick={audience.reset}>
            Alles anzeigen
          </button>{' '}
          <Link className="button button--secondary" to="/docs/">
            Zur Übersicht
          </Link>
        </p>
      </div>
    </>
  );
}
