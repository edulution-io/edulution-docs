import React, { JSX, useEffect, useRef, useState } from 'react';
import './Changelog.css';

export type ContentBlock =
  | { type: 'image'; url: string; alt: string }
  | { type: 'text'; content: string }
  | { type: 'improvements'; title: string; items: string[] }
  | { type: 'link'; text: string; url: string }
  | { type: 'text-with-tags'; text: string; tags: string[] };

export interface ChangelogEntry {
  version?: string;
  date: string;
  title: string;
  description?: string;
  tag?: string;
  content?: ContentBlock[];
  // Legacy support
  image?: string;
  images?: string[];
  improvements?: string[];
  links?: Array<{ text: string; url: string }>;
}

interface ChangelogProps {
  entries: ChangelogEntry[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  const colors: Record<string, string> = {
    'edulution-ui': 'bg-[rgba(136,216,64,0.15)] text-[#8FC046] border-[#8FC046]/30',
    'edulution-mail': 'bg-[rgba(0,129,198,0.15)] text-[#0081c6] border-[#0081c6]/30',
    'edulution-fileproxy': 'bg-[rgba(220,38,38,0.15)] text-[#dc2626] border-[#dc2626]/30',
    'edulution-backend': 'bg-[rgba(255,215,0,0.15)] text-[#FFD700] border-[#FFD700]/30',
    'edulution-app': 'bg-[rgba(147,51,234,0.15)] text-[#9333ea] border-[#9333ea]/30',
  };

  const colorClass = colors[tag] || 'bg-[rgba(136,216,64,0.15)] text-[#8FC046] border-[#8FC046]/30';

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[0.625rem] font-medium rounded border uppercase tracking-wide ${colorClass}`}
    >
      {tag}
    </span>
  );
};

const FeatureTag: React.FC<{ type: string }> = ({ type }) => {
  const colors: Record<string, string> = {
    school: 'bg-[rgba(33,150,243,0.15)] text-[#2196f3] border-[#2196f3]/30',
    business: 'bg-[rgba(255,152,0,0.15)] text-[#ff9800] border-[#ff9800]/30',
    ios: 'bg-[rgba(156,39,176,0.15)] text-[#9c27b0] border-[#9c27b0]/30',
    android: 'bg-[rgba(76,175,80,0.15)] text-[#4caf50] border-[#4caf50]/30',
  };

  const labels: Record<string, string> = {
    school: 'Schule',
    business: 'Unternehmen',
    ios: 'iOS',
    android: 'Android',
    lmn73: 'LMN73',
  };

  const colorClass = colors[type] || 'bg-[rgba(136,216,64,0.15)] text-[#8FC046] border-[#8FC046]/30';
  const label = labels[type] || type;

  return (
    <span className={`inline-block px-2 py-0.5 text-[0.625rem] font-medium rounded border ${colorClass}`}>{label}</span>
  );
};

const SparkleIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="w-4 h-4"
  >
    <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
  </svg>
);

const renderTextWithTags = (text: string) => {
  const tagMatch = text.match(/\[tags:\s*([^\]]+)\]/);
  if (tagMatch) {
    const tags = tagMatch[1]
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t);
    const cleanText = text.replace(/\[tags:\s*[^\]]+\]/, '').trim();
    return (
      <>
        {renderMarkdown(cleanText)}
        {tags.length > 0 && (
          <span className="ml-2 inline-flex gap-1">
            {tags.map((tag, idx) => (
              <FeatureTag
                key={idx}
                type={tag}
              />
            ))}
          </span>
        )}
      </>
    );
  }
  return renderMarkdown(text);
};

const renderMarkdown = (text: string) => {
  const parts: (string | JSX.Element)[] = [];
  let currentIndex = 0;
  let key = 0;

  const pattern = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|\*(?!\*)[^*]+?\*|—)/g;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }

    const matched = match[0];

    if (matched.startsWith('[')) {
      const linkMatch = matched.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        parts.push(
          <a
            key={key++}
            href={linkMatch[2]}
            className="text-sky-400 underline decoration-sky-400/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40"
          >
            {linkMatch[1]}
          </a>,
        );
      }
    } else if (matched.startsWith('**') && matched.endsWith('**')) {
      const inner = matched.slice(2, -2);
      const linkMatch = inner.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        parts.push(
          <strong
            key={key++}
            className="font-semibold text-white"
          >
            <a
              href={linkMatch[2]}
              className="text-sky-400 underline decoration-sky-400/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white/40"
            >
              {linkMatch[1]}
            </a>
          </strong>,
        );
      } else {
        parts.push(
          <strong
            key={key++}
            className="font-semibold text-white"
          >
            {inner}
          </strong>,
        );
      }
    }
    // Italic: *text*
    else if (matched.startsWith('*') && matched.endsWith('*') && !matched.startsWith('**')) {
      parts.push(
        <em
          key={key++}
          className="italic"
        >
          {matched.slice(1, -1)}
        </em>,
      );
    }
    // Em dash
    else if (matched === '—') {
      parts.push(<span key={key++}> — </span>);
    } else {
      parts.push(matched);
    }

    currentIndex = match.index + matched.length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts.length > 0 ? parts : text;
};

// ContentWrapper - weniger Links-Abstand
function ContentWrapper({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="lg:ml-48 lg:flex lg:w-full lg:justify-start lg:pl-16">
        <div className={`mx-auto max-w-3xl lg:mx-0 lg:w-full lg:max-w-3xl ${className}`}>{children}</div>
      </div>
    </div>
  );
}

// ArticleHeader
function ArticleHeader({ id, date, tag }: { id: string; date: string; tag?: string }) {
  return (
    <header className="relative mb-10 xl:mb-0">
      <div className="pointer-events-none absolute top-0 left-[max(-0.5rem,calc(50%-18.625rem))] z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:min-w-[180px] xl:h-8">
        <a
          href={`#${id}`}
          className="inline-flex pointer-events-auto"
        >
          <time className="hidden xl:block text-[0.6875rem] leading-4 font-medium text-white/50">
            {formatDate(date)}
          </time>
        </a>
        <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
      </div>
      <ContentWrapper>
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={`#${id}`}
            className="inline-flex"
          >
            <time className="text-[0.6875rem] leading-4 font-medium text-gray-500 xl:hidden dark:text-white/50">
              {formatDate(date)}
            </time>
          </a>
          <Tag tag={tag || 'edulution-ui'} />
        </div>
      </ContentWrapper>
    </header>
  );
}

// Article
export const ChangelogItem: React.FC<{
  entry: ChangelogEntry;
  index: number;
}> = ({ entry, index }) => {
  const heightRef = useRef<HTMLDivElement>(null);
  const [heightAdjustment, setHeightAdjustment] = useState(0);

  useEffect(() => {
    if (!heightRef.current) {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (!heightRef.current) {
        return;
      }
      const { height } = heightRef.current.getBoundingClientRect();
      const nextMultipleOf8 = 8 * Math.ceil(height / 8);
      setHeightAdjustment(nextMultipleOf8 - height);
    });

    observer.observe(heightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const id = entry.version ? `v${entry.version}` : entry.date.replace(/\//g, '-');

  return (
    <article
      id={id}
      className="scroll-mt-16"
      style={{ paddingBottom: `${heightAdjustment}px` }}
    >
      <div ref={heightRef}>
        <ArticleHeader
          id={id}
          date={entry.date}
          tag={entry.tag}
        />
        <ContentWrapper className="relative">
          <h2 className="text-2xl font-semibold leading-7 text-white mb-4 mt-6">{entry.title}</h2>
          {entry.description && <p className="text-base leading-7 text-gray-300 mb-6">{entry.description}</p>}

          {/* Content Blocks */}
          {entry.content && entry.content.length > 0 ? (
            <div className="space-y-6">
              {entry.content.map((block, idx) => {
                if (block.type === 'image') {
                  return (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-2xl bg-gray-900/50 mb-8 group cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[#8FC046]/50"
                    >
                      <img
                        src={block.url}
                        alt={block.alt}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                    </div>
                  );
                }

                if (block.type === 'text') {
                  return (
                    <p
                      key={idx}
                      className="text-base leading-7 text-gray-300"
                    >
                      {renderMarkdown(block.content)}
                    </p>
                  );
                }

                if (block.type === 'text-with-tags') {
                  return (
                    <div
                      key={idx}
                      className="mb-4"
                    >
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="text-base font-semibold text-white">{renderMarkdown(block.text)}</span>
                        {block.tags.map((tag, tagIdx) => (
                          <FeatureTag
                            key={tagIdx}
                            type={tag}
                          />
                        ))}
                      </div>
                    </div>
                  );
                }

                if (block.type === 'improvements') {
                  return (
                    <div
                      key={idx}
                      className="mt-6 p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/50"
                    >
                      <h3 className="flex items-center gap-3 text-lg font-semibold leading-6 text-white mb-6">
                        <div className="p-2 rounded-lg bg-[#8FC046]/10">
                          <SparkleIcon />
                        </div>
                        {block.title}
                      </h3>
                      <ul className="list-none pl-0 m-0 space-y-3">
                        {block.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="relative pl-6 text-sm leading-7 text-gray-300 hover:text-gray-100 transition-colors"
                          >
                            <span className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 rounded-full bg-[#8FC046]"></span>
                            {renderTextWithTags(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                if (block.type === 'link') {
                  return (
                    <div
                      key={idx}
                      className="mt-6"
                    >
                      <a
                        href={block.url}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#8FC046] bg-[#8FC046]/5 rounded-lg border border-[#8FC046]/20 hover:bg-[#8FC046]/10 hover:border-[#8FC046]/40 transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {block.text}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ) : (
            <>
              {/* Legacy rendering */}
              {entry.image && (
                <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 mb-8 group cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[#8FC046]/50">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>
              )}

              {entry.images && entry.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {entry.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-xl bg-gray-900/50 group cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[#8FC046]/50"
                    >
                      <img
                        src={img}
                        alt={`${entry.title} - Screenshot ${idx + 1}`}
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                    </div>
                  ))}
                </div>
              )}

              {entry.improvements && entry.improvements.length > 0 && (
                <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/50">
                  <h3 className="flex items-center gap-3 text-lg font-semibold leading-6 text-white mb-6">
                    <div className="p-2 rounded-lg bg-[#8FC046]/10">
                      <SparkleIcon />
                    </div>
                    Verbesserungen & Features
                  </h3>
                  <ul className="list-none pl-0 m-0 space-y-3">
                    {entry.improvements.map((improvement, idx) => (
                      <li
                        key={idx}
                        className="relative pl-6 text-sm leading-7 text-gray-300 hover:text-gray-100 transition-colors"
                      >
                        <span className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 rounded-full bg-[#8FC046]"></span>
                        {renderMarkdown(improvement)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {entry.links && entry.links.length > 0 && (
                <div className="mt-6 flex gap-3 flex-wrap">
                  {entry.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#8FC046] bg-[#8FC046]/5 rounded-lg border border-[#8FC046]/20 hover:bg-[#8FC046]/10 hover:border-[#8FC046]/40 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </ContentWrapper>
      </div>
    </article>
  );
};

export const Changelog: React.FC<ChangelogProps> = ({ entries }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Alle verfügbaren Tags sammeln
  const allTags = Array.from(new Set(entries.map((e) => e.tag).filter(Boolean))) as string[];

  // Filtern
  const filteredEntries = entries.filter((entry) => {
    const matchesSearch =
      searchTerm === '' ||
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.improvements?.some((i) => i.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag = selectedTag === 'all' || entry.tag === selectedTag;

    return matchesSearch && matchesTag;
  });

  return (
    <div
      id="tw-scope"
      className="relative flex-auto"
    >
      {/* Suche und Filter */}
      <div
        className="sticky top-0 z-50 border-b border-gray-800/50 backdrop-blur-xl py-6"
        style={{ background: 'var(--ifm-background-color)' }}
      >
        <ContentWrapper>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Suchfeld */}
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Changelog durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#8FC046] focus:ring-2 focus:ring-[#8FC046]/20 transition-all"
                style={{ background: 'var(--ifm-background-surface-color)' }}
              />
            </div>

            {/* Filter-Buttons */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  selectedTag === 'all'
                    ? 'bg-[#8FC046] text-black shadow-lg shadow-[#8FC046]/20'
                    : 'text-gray-300 border border-gray-700/50 hover:border-[#8FC046]/50 hover:bg-[#8FC046]/5'
                }`}
                style={selectedTag !== 'all' ? { background: 'var(--ifm-background-surface-color)' } : undefined}
              >
                Alle
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    selectedTag === tag
                      ? 'bg-[#8FC046] text-black shadow-lg shadow-[#8FC046]/20'
                      : 'text-gray-300 border border-gray-700/50 hover:border-[#8FC046]/50 hover:bg-[#8FC046]/5'
                  }`}
                  style={selectedTag !== tag ? { background: 'var(--ifm-background-surface-color)' } : undefined}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Ergebnis-Counter */}
          {(searchTerm || selectedTag !== 'all') && (
            <div className="mt-4 text-sm font-medium text-gray-400">
              {filteredEntries.length} {filteredEntries.length === 1 ? 'Eintrag' : 'Einträge'} gefunden
            </div>
          )}
        </ContentWrapper>
      </div>

      {/* Timeline - angepasst für weniger Links-Abstand */}
      <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden lg:left-[180px] lg:overflow-visible">
        <svg
          className="absolute top-0 left-[max(0px,calc(50%-18.125rem))] h-full w-1.5 lg:left-0"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="changelog-pattern"
              width="6"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0H6M0 8H6"
                className="stroke-sky-900/10 xl:stroke-white/10 dark:stroke-white/10"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#changelog-pattern)"
          />
        </svg>
      </div>

      {/* Content */}
      <main className="space-y-16 py-12 sm:space-y-20 sm:py-16">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry, index) => (
            <ChangelogItem
              key={`${entry.version}-${entry.date}-${index}`}
              entry={entry}
              index={index}
            />
          ))
        ) : (
          <ContentWrapper>
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Keine Einträge gefunden</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('all');
                }}
                className="mt-4 px-4 py-2 bg-[#8FC046] text-black rounded-lg font-medium hover:bg-[#96dc55] transition-colors"
              >
                Filter zurücksetzen
              </button>
            </div>
          </ContentWrapper>
        )}
      </main>
    </div>
  );
};
