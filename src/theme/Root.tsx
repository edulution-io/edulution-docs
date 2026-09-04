import React from 'react';
import { MailConfigProvider } from '../components/MailConfigContext';
import { AudienceProvider } from '../components/audience/AudienceContext';
import '../css/tailwind.css';

export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <AudienceProvider>
      <MailConfigProvider>{children}</MailConfigProvider>
    </AudienceProvider>
  );
}
