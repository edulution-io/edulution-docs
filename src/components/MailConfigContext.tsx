import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MailConfig {
  email: string;
  domain: string;
  imapServer: string;
  smtpServer: string;
}

interface MailConfigContextType {
  config: MailConfig | null;
  setConfig: (config: MailConfig | null) => void;
}

const MailConfigContext = createContext<MailConfigContextType | undefined>(undefined);

export function MailConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfigState] = useState<MailConfig | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      const stored = localStorage.getItem('edulution-mail-config');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setConfigState(parsed);
        } catch (e) {
          console.error('Failed to parse stored config:', e);
        }
      }
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Save to LocalStorage when config changes
  const setConfig = (newConfig: MailConfig | null) => {
    setConfigState(newConfig);
    if (typeof window !== 'undefined') {
      if (newConfig) {
        localStorage.setItem('edulution-mail-config', JSON.stringify(newConfig));
      } else {
        localStorage.removeItem('edulution-mail-config');
      }
    }
  };

  return (
    <MailConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </MailConfigContext.Provider>
  );
}

export function useMailConfig() {
  const context = useContext(MailConfigContext);
  if (context === undefined) {
    // Return default values if provider is not available (e.g., during SSG)
    return {
      config: null,
      setConfig: () => {},
    };
  }
  return context;
}

// Helper component to display values with fallback
interface ConfigValueProps {
  value?: string;
  fallback: string;
  code?: boolean;
}

export function ConfigValue({ value, fallback, code = false }: ConfigValueProps) {
  const displayValue = value || fallback;

  if (code) {
    return <code>{displayValue}</code>;
  }

  return <>{displayValue}</>;
}
