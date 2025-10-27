import React from 'react';
import { useMailConfig } from './MailConfigContext';

interface ConfigPlaceholderProps {
  type: 'email' | 'server' | 'port' | 'caldav' | 'carddav' | 'caldav-base' | 'carddav-base' | 'webmail';
  inline?: boolean;
}

export default function ConfigPlaceholder({ type, inline = true }: ConfigPlaceholderProps): JSX.Element {
  const { config } = useMailConfig();
  const [localConfig, setLocalConfig] = React.useState<any>(null);

  // Load from LocalStorage on mount (client-side only)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('edulution-mail-config');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setLocalConfig(parsed);
        } catch (e) {
          console.error('Failed to parse config placeholder:', e);
        }
      }
    }
  }, []);

  // Use localConfig if available, otherwise use context config
  const activeConfig = localConfig || config;

  const placeholders = {
    email: activeConfig?.email || 'ihre.email@ihre-schule.de',
    server: activeConfig?.imapServer || 'mail.ihre-schule.de',
    port: '993',
    caldav: activeConfig?.email && activeConfig?.imapServer
      ? `https://${activeConfig.imapServer}/SOGo/dav/${activeConfig.email}/`
      : 'https://mail.ihre-schule.de/SOGo/dav/ihre.email@ihre-schule.de/',
    carddav: activeConfig?.email && activeConfig?.imapServer
      ? `https://${activeConfig.imapServer}/SOGo/dav/${activeConfig.email}/`
      : 'https://mail.ihre-schule.de/SOGo/dav/ihre.email@ihre-schule.de/',
    'caldav-base': activeConfig?.imapServer
      ? `https://${activeConfig.imapServer}/SOGo/dav/`
      : 'https://mail.ihre-schule.de/SOGo/dav/',
    'carddav-base': activeConfig?.imapServer
      ? `https://${activeConfig.imapServer}/SOGo/dav/`
      : 'https://mail.ihre-schule.de/SOGo/dav/',
    'webmail': activeConfig?.imapServer
      ? `https://${activeConfig.imapServer}/SOGo`
      : 'https://mail.ihre-schule.de/SOGo',
  };

  const value = placeholders[type];

  const handleCopy = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(value);
    }
  };

  if (inline) {
    return (
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
        <code style={{
          backgroundColor: 'var(--ifm-color-warning-contrast-background)',
          color: 'var(--ifm-color-warning-darkest)',
          padding: '0.2rem 0.4rem',
          borderRadius: '3px',
          fontWeight: 600
        }}>{value}</code>
        <button
          onClick={handleCopy}
          title="Kopieren"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.15rem',
            display: 'inline-flex',
            alignItems: 'center',
            opacity: 0.6,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </span>
    );
  }

  return <strong>{value}</strong>;
}
