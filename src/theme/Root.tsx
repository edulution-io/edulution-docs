import React from 'react';
import { MailConfigProvider } from '../components/MailConfigContext';
import '../css/tailwind.css';

export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <MailConfigProvider>{children}</MailConfigProvider>;
}
