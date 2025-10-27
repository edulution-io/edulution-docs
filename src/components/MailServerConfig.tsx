import React, { useState } from 'react';
import styles from './MailServerConfig.module.css';
import { useMailConfig } from './MailConfigContext';

interface ServerConfig {
  imapServer: string;
  imapPort: number;
  smtpServer: string;
  smtpPort: number;
  caldavServer: string;
  carddavServer: string;
  webmailUrl: string;
}

// Helper component for copyable code values
function CopyableCode({ value }: { value: string | number }): JSX.Element {
  const handleCopy = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(String(value));
    }
  };

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
      <code>{value}</code>
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
          opacity: 0.5,
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </span>
  );
}

export default function MailServerConfig(): JSX.Element {
  const mailConfigContext = useMailConfig();

  const [domain, setDomain] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [config, setConfig] = useState<ServerConfig | null>(null);

  // Initialize from URL params or LocalStorage on mount
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let initialDomain = '';
    let initialEmail = '';

    // First check URL params
    const params = new URLSearchParams(window.location.search);
    const urlDomain = params.get('domain');
    const urlEmail = params.get('email');

    if (urlDomain || urlEmail) {
      // URL params take priority
      initialDomain = urlDomain || '';
      initialEmail = urlEmail || '';
    } else {
      // Try to load from LocalStorage
      const stored = localStorage.getItem('edulution-mail-config');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          initialDomain = parsed.domain || '';
          initialEmail = parsed.email || '';
        } catch (e) {
          console.error('Failed to parse mail config:', e);
        }
      }
    }

    // Set state and update config
    if (initialDomain || initialEmail) {
      setDomain(initialDomain);
      setEmail(initialEmail);
      updateConfig(initialDomain, initialEmail);
    }
  }, []); // Run only on mount

  const generateAppleMobileConfig = () => {
    if (!config || !email || !domain) {
      alert('Bitte geben Sie Ihre E-Mail-Adresse und Domain ein.');
      return;
    }

    const emailLocal = email.split('@')[0];
    const mobileconfig = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>EmailAccountDescription</key>
            <string>${email}</string>
            <key>EmailAccountName</key>
            <string>${email}</string>
            <key>EmailAccountType</key>
            <string>EmailTypeIMAP</string>
            <key>EmailAddress</key>
            <string>${email}</string>
            <key>IncomingMailServerAuthentication</key>
            <string>EmailAuthPassword</string>
            <key>IncomingMailServerHostName</key>
            <string>${config.imapServer}</string>
            <key>IncomingMailServerPortNumber</key>
            <integer>${config.imapPort}</integer>
            <key>IncomingMailServerUseSSL</key>
            <true/>
            <key>IncomingMailServerUsername</key>
            <string>${email}</string>
            <key>OutgoingMailServerAuthentication</key>
            <string>EmailAuthPassword</string>
            <key>OutgoingMailServerHostName</key>
            <string>${config.smtpServer}</string>
            <key>OutgoingMailServerPortNumber</key>
            <integer>${config.smtpPort}</integer>
            <key>OutgoingMailServerUseSSL</key>
            <true/>
            <key>OutgoingMailServerUsername</key>
            <string>${email}</string>
            <key>OutgoingPasswordSameAsIncomingPassword</key>
            <true/>
            <key>PayloadDescription</key>
            <string>E-Mail-Konto konfigurieren</string>
            <key>PayloadDisplayName</key>
            <string>E-Mail (${email})</string>
            <key>PayloadIdentifier</key>
            <string>com.edulution.mail.${emailLocal}</string>
            <key>PayloadType</key>
            <string>com.apple.mail.managed</string>
            <key>PayloadUUID</key>
            <string>${crypto.randomUUID()}</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>PreventMove</key>
            <false/>
            <key>PreventAppSheet</key>
            <false/>
            <key>SMIMEEnabled</key>
            <false/>
        </dict>
        <dict>
            <key>CalDAVAccountDescription</key>
            <string>${email}</string>
            <key>CalDAVHostName</key>
            <string>${config.imapServer}</string>
            <key>CalDAVPort</key>
            <integer>443</integer>
            <key>CalDAVPrincipalURL</key>
            <string>/SOGo/dav/${email}</string>
            <key>CalDAVUseSSL</key>
            <true/>
            <key>CalDAVUsername</key>
            <string>${email}</string>
            <key>PayloadDescription</key>
            <string>Kalender konfigurieren</string>
            <key>PayloadDisplayName</key>
            <string>Kalender (${email})</string>
            <key>PayloadIdentifier</key>
            <string>com.edulution.caldav.${emailLocal}</string>
            <key>PayloadType</key>
            <string>com.apple.caldav.account</string>
            <key>PayloadUUID</key>
            <string>${crypto.randomUUID()}</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
        <dict>
            <key>CardDAVAccountDescription</key>
            <string>${email}</string>
            <key>CardDAVHostName</key>
            <string>${config.imapServer}</string>
            <key>CardDAVPort</key>
            <integer>443</integer>
            <key>CardDAVPrincipalURL</key>
            <string>/SOGo/dav/${email}</string>
            <key>CardDAVUseSSL</key>
            <true/>
            <key>CardDAVUsername</key>
            <string>${email}</string>
            <key>PayloadDescription</key>
            <string>Kontakte konfigurieren</string>
            <key>PayloadDisplayName</key>
            <string>Kontakte (${email})</string>
            <key>PayloadIdentifier</key>
            <string>com.edulution.carddav.${emailLocal}</string>
            <key>PayloadType</key>
            <string>com.apple.carddav.account</string>
            <key>PayloadUUID</key>
            <string>${crypto.randomUUID()}</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDescription</key>
    <string>edulution Mail Konfiguration für ${email}</string>
    <key>PayloadDisplayName</key>
    <string>edulution Mail</string>
    <key>PayloadIdentifier</key>
    <string>com.edulution.mail.profile.${emailLocal}</string>
    <key>PayloadOrganization</key>
    <string>edulution</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>${crypto.randomUUID()}</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>`;

    const blob = new Blob([mobileconfig], { type: 'application/x-apple-aspen-config' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `edulution-mail-${emailLocal}.mobileconfig`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  const extractDomain = (input: string): string => {
    // Remove protocol
    let cleaned = input.replace(/^https?:\/\//, '');
    // Remove trailing slashes and paths
    cleaned = cleaned.replace(/\/.*$/, '');
    // EDU Domain = Mail Server (don't remove subdomains!)
    return cleaned;
  };

  const getEmailDomain = (emailAddress: string): string => {
    const match = emailAddress.match(/@(.+)$/);
    return match ? match[1] : '';
  };

  const updateConfig = (domainInput: string, emailInput: string) => {
    if (domainInput.trim()) {
      const baseDomain = extractDomain(domainInput);
      const username = emailInput.trim() || `ihr.name@${baseDomain}`;

      const newConfig = {
        imapServer: baseDomain,
        imapPort: 993,
        smtpServer: baseDomain,
        smtpPort: 465,
        caldavServer: `https://${baseDomain}/SOGo/dav/${username}`,
        carddavServer: `https://${baseDomain}/SOGo/dav/${username}`,
        webmailUrl: `https://${baseDomain}/SOGo`,
      };

      setConfig(newConfig);

      // Save to context (and LocalStorage)
      const configToSave = {
        email: emailInput.trim(),
        domain: domainInput.trim(),
        imapServer: baseDomain,
        smtpServer: baseDomain,
      };
      mailConfigContext.setConfig(configToSave);

      // Also save directly to LocalStorage as backup
      if (typeof window !== 'undefined') {
        localStorage.setItem('edulution-mail-config', JSON.stringify(configToSave));
      }
    } else {
      setConfig(null);
      mailConfigContext.setConfig(null);
    }
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setDomain(input);
    updateConfig(input, email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setEmail(input);

    // Auto-fill domain from email if domain is empty
    if (!domain.trim() && input.includes('@')) {
      const emailDomain = getEmailDomain(input);
      if (emailDomain) {
        setDomain(emailDomain);
        updateConfig(emailDomain, input);
        return;
      }
    }

    updateConfig(domain, input);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <label htmlFor="email-input" className={styles.label}>
          Ihre E-Mail-Adresse (optional):
        </label>
        <input
          id="email-input"
          type="email"
          className={styles.input}
          placeholder="z.B. max.mustermann@beispielschule.de"
          value={email}
          onChange={handleEmailChange}
        />
        <small className={styles.hint}>
          Wenn Sie Ihre E-Mail-Adresse eingeben, werden die CalDAV/CardDAV URLs personalisiert
        </small>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="domain-input" className={styles.label}>
          Ihre edulution Domain:
        </label>
        <input
          id="domain-input"
          type="text"
          className={styles.input}
          placeholder="z.B. https://ui.beispielschule.de oder beispielschule.de"
          value={domain}
          onChange={handleDomainChange}
        />
        <small className={styles.hint}>
          Wird automatisch aus der E-Mail-Adresse übernommen oder kann manuell eingegeben werden
        </small>
      </div>

      {config && (
        <div className={styles.configDisplay}>
          <h3 className={styles.configTitle}>Ihre Server-Einstellungen</h3>

          <div className={styles.configGrid}>
            <div className={styles.configSection}>
              <div className={styles.sectionTitle}>Benutzername</div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>E-Mail</div>
                <div className={styles.configValue}>
                  <CopyableCode value={email || `Ihre E-Mail-Adresse`} />
                </div>
              </div>
            </div>

            <div className={styles.configSection}>
              <div className={styles.sectionTitle}>E-Mail Empfang (IMAP)</div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>Server</div>
                <div className={styles.configValue}>
                  <CopyableCode value={config.imapServer} />
                </div>
              </div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>Port</div>
                <div className={styles.configValue}>
                  <CopyableCode value={config.imapPort} />
                </div>
              </div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>Verschlüsselung</div>
                <div className={styles.configValue}>
                  <code>SSL/TLS</code>
                </div>
              </div>
            </div>

            <div className={styles.configSection}>
              <div className={styles.sectionTitle}>E-Mail Versand (SMTP)</div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>Server</div>
                <div className={styles.configValue}>
                  <CopyableCode value={config.smtpServer} />
                </div>
              </div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>Port</div>
                <div className={styles.configValue}>
                  <CopyableCode value={config.smtpPort} />
                </div>
              </div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>Verschlüsselung</div>
                <div className={styles.configValue}>
                  <code>SSL/TLS</code>
                </div>
              </div>
            </div>

            <div className={styles.configSection}>
              <div className={styles.sectionTitle}>Kalender (CalDAV)</div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>URL</div>
                <div className={styles.configValue}>
                  <CopyableCode value={config.caldavServer} />
                </div>
              </div>
            </div>

            <div className={styles.configSection}>
              <div className={styles.sectionTitle}>Kontakte (CardDAV)</div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>URL</div>
                <div className={styles.configValue}>
                  <CopyableCode value={config.carddavServer} />
                </div>
              </div>
            </div>

            <div className={styles.configSection}>
              <div className={styles.sectionTitle}>Webmail</div>
              <div className={styles.configRow}>
                <div className={styles.configLabel}>URL</div>
                <div className={styles.configValue}>
                  <CopyableCode value={config.webmailUrl} />
                </div>
              </div>
            </div>
          </div>

          {email && (
            <div className={styles.successBox}>
              ✅ Personalisiert für <strong>{email}</strong>
            </div>
          )}

          <div className={styles.downloadSection}>
            <h4 className={styles.downloadTitle}>📥 Konfigurationsdatei herunterladen</h4>

            {email ? (
              <div className={styles.appleDownload}>
                <button
                  className={styles.downloadBtn}
                  onClick={generateAppleMobileConfig}
                >
                  🍎 Apple Profil herunterladen (.mobileconfig)
                </button>
                <p className={styles.downloadInfo}>
                  <strong>Für:</strong> iPhone, iPad, Mac<br/>
                  <strong>Enthält:</strong> E-Mail (IMAP/SMTP), Kalender (CalDAV), Kontakte (CardDAV)
                </p>
                <details className={styles.importDetails}>
                  <summary className={styles.importSummary}>Wie installiere ich das Profil?</summary>
                  <div className={styles.importContent}>
                    <p><strong>iPhone / iPad:</strong></p>
                    <ol>
                      <li>Datei öffnen (z.B. per AirDrop oder Mail)</li>
                      <li>"Profil installieren" antippen</li>
                      <li>Geräte-Code eingeben</li>
                      <li>Ihr E-Mail-<strong>Passwort</strong> eingeben wenn gefragt</li>
                      <li>"Installieren" antippen</li>
                    </ol>
                    <p><strong>Mac:</strong></p>
                    <ol>
                      <li>Datei doppelklicken</li>
                      <li>Systemeinstellungen öffnen sich automatisch</li>
                      <li>Zu "Profile" gehen</li>
                      <li>Ihr E-Mail-<strong>Passwort</strong> eingeben wenn gefragt</li>
                      <li>"Installieren" klicken</li>
                    </ol>
                    <p className={styles.warning}>
                      ⚠️ <strong>Wichtig:</strong> Sie müssen beim ersten Start Ihr E-Mail-Passwort eingeben.
                      Das Profil enthält KEIN Passwort - nur die Server-Einstellungen.
                    </p>
                  </div>
                </details>
              </div>
            ) : (
              <p className={styles.downloadHint}>
                💡 Geben Sie oben Ihre E-Mail-Adresse ein, um das Apple-Profil herunterladen zu können.
              </p>
            )}

            <details className={styles.importDetails} style={{marginTop: '1rem'}}>
              <summary className={styles.importSummary}>Automatische Konfiguration (ohne Download)</summary>
              <div className={styles.importContent}>
                <p><strong>Thunderbird / Apple Mail (Desktop):</strong></p>
                <ul>
                  <li>Geben Sie einfach Ihre E-Mail-Adresse und Passwort ein</li>
                  <li>Der Client erkennt die Server-Einstellungen automatisch</li>
                  <li>Keine manuelle Konfiguration notwendig</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      )}
    </div>
  );
}
