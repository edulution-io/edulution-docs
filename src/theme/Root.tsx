import React from 'react';
import { MailConfigProvider } from '../components/MailConfigContext';
import { ExpertModeProvider } from '../components/ExpertMode';
import '../css/tailwind.css';

export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <ExpertModeProvider>
      <MailConfigProvider>{children}</MailConfigProvider>
    </ExpertModeProvider>
  );
}
