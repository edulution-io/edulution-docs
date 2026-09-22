import React from 'react';
import OriginalLinkItem from '@theme-original/Footer/LinkItem';
import type LinkItemType from '@theme/Footer/LinkItem';
import type { WrapperProps } from '@docusaurus/types';
import { useVersionedDocPath } from '@site/src/components/useVersionedDocPath';

type Props = WrapperProps<typeof LinkItemType>;

/**
 * Haelt die Doku-Verweise in der Fusszeile in der Version, die gerade
 * gelesen wird.
 *
 * Die Ziele stehen in `docusaurus.config.ts` und sind damit statische
 * Konfiguration – `type: 'doc'` gibt es fuer Fusszeilen-Eintraege nicht, und
 * ein Hook laesst sich dort nicht aufrufen. Ohne diesen Wrapper fuehrte jeder
 * der drei Verweise von jeder Seite jeder Version in die ausgelieferte
 * Version zurueck.
 */
export default function FooterLinkItemWrapper(props: Props): React.JSX.Element {
  const versioned = useVersionedDocPath();
  const item = typeof props.item.to === 'string' ? { ...props.item, to: versioned(props.item.to) } : props.item;

  return (
    <OriginalLinkItem
      {...props}
      item={item}
    />
  );
}
