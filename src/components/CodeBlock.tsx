import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

interface CommandVariant {
  platform: 'Windows' | 'Linux' | 'macOS' | 'All';
  command: string;
  expectedOutput?: string;
}

interface CodeBlockProps {
  variants: CommandVariant[];
  title?: string;
  description?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ variants, title, description }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('All');
  const [copied, setCopied] = useState(false);
  const [processedCommand, setProcessedCommand] = useState('');

  // Get values from localStorage and replace placeholders
  const replacePlaceholders = (text: string): string => {
    try {
      const mailDomain = localStorage.getItem('mailDomain') || 'mail.edulution.io';
      const emailAddress = localStorage.getItem('emailAddress') || 'benutzer@example.com';
      const userName = localStorage.getItem('userName') || 'benutzer';

      return text
        .replace(/\{\{mailDomain\}\}/g, mailDomain)
        .replace(/\{\{emailAddress\}\}/g, emailAddress)
        .replace(/\{\{userName\}\}/g, userName);
    } catch (error) {
      return text;
    }
  };

  useEffect(() => {
    const currentVariant = variants.find((v) => v.platform === selectedPlatform) || variants[0];
    setProcessedCommand(replacePlaceholders(currentVariant.command));
  }, [selectedPlatform, variants]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(processedCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const currentVariant = variants.find((v) => v.platform === selectedPlatform) || variants[0];
  const processedOutput = currentVariant.expectedOutput ? replacePlaceholders(currentVariant.expectedOutput) : null;

  // Only show platform selector if there are multiple platforms
  const showPlatformSelector = variants.length > 1;
  const availablePlatforms = variants.map((v) => v.platform);

  return (
    <div
      id="tw-scope"
      className="my-6 rounded-lg border border-gray-300 dark:border-[#2a2a2a] overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gray-100 dark:bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-gray-300 dark:border-[#2a2a2a]">
        <div className="flex-1">
          {title && <h4 className="text-sm font-semibold mb-1">{title}</h4>}
          {description && <p className="text-xs opacity-70">{description}</p>}
        </div>

        <div className="flex items-center gap-3">
          {/* Platform Selector */}
          {showPlatformSelector && (
            <div className="flex gap-1 bg-gray-200 dark:bg-[#2d3748] rounded p-1">
              {availablePlatforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                    selectedPlatform === platform
                      ? 'bg-white dark:text-white shadow-sm'
                      : 'hover:bg-gray-300 dark:hover:bg-[#3a4557] opacity-60'
                  }`}
                  style={
                    selectedPlatform === platform
                      ? {
                          background: 'linear-gradient(45deg, #8FC046, #0081C6)',
                        }
                      : undefined
                  }
                >
                  {platform}
                </button>
              ))}
            </div>
          )}

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-semibold rounded bg-gray-200 dark:text-white hover:bg-gray-300 transition-all flex items-center gap-2"
            style={{
              background: 'linear-gradient(45deg, #8FC046, #0081C6)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(45deg, #96dc55, #0295e5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(45deg, #8FC046, #0081C6)';
            }}
            title="Kopieren"
          >
            <FontAwesomeIcon
              icon={copied ? faCheck : faCopy}
              className="w-3 h-3"
            />
            {copied ? 'Kopiert!' : 'Kopieren'}
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="bg-gray-50 dark:bg-[#0f0f0f]">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">{processedCommand}</code>
        </pre>
      </div>

      {/* Expected Output */}
      {processedOutput && (
        <div className="border-t border-gray-300 dark:border-[#2a2a2a]">
          <div className="bg-gray-100 dark:bg-[#1a1a1a] px-4 py-2 border-b border-gray-300 dark:border-[#2a2a2a]">
            <span className="text-xs font-medium opacity-70">Erwartete Ausgabe:</span>
          </div>
          <div className="bg-gray-50 dark:bg-[#0f0f0f]">
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-green-600 dark:text-[#8FC046]">{processedOutput}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
