import React from 'react';
import { Changelog, ChangelogEntry, ContentBlock } from './Changelog';
import Tag from './Tag'; // Importiere die Tag-Komponente

/**
 * Parses a markdown changelog file and converts it to ChangelogEntry objects.
 *
 * Expected format:
 *
 * ## v1.2.0 | 2024-03-15 | edulution-ui
 *
 * ![Optional Image](path/to/image.png)
 *
 * ### Feature Title
 *
 * Description of the feature or changes.
 *
 * #### Verbesserungen
 * - Improvement 1 [tags: school, ios]
 * - Improvement 2
 *
 * [Link Text](https://example.com)
 *
 * **Feature Name** [tags: school, ios, android]
 *
 * ---
 *
 * Note: Only ONE tag per release!
 */

interface ParsedChangelog {
    entries: ChangelogEntry[];
}

// Erweitere ContentBlock um tags type
type ExtendedContentBlock = ContentBlock | {
    type: 'text-with-tags';
    text: string;
    tags: string[];
};

export function parseChangelogMarkdown(markdown: string): ParsedChangelog {
    const entries: ChangelogEntry[] = [];

    // Split by horizontal rules (---) to separate entries
    const sections = markdown.split(/\n---+\n/).filter(s => s.trim());

    sections.forEach(section => {
        const lines = section.trim().split('\n');
        let i = 0;

        // Parse header: ## v1.2.0 | 2024-03-15 | tag1, tag2
        const headerMatch = lines[i]?.match(/^##\s+v?([\d.]+)\s*\|\s*([\d-]+)\s*(?:\|\s*(.+))?$/);

        if (!headerMatch) {
            // Try alternative format: ## Title {{ date: '2024-03-15', version: '1.2.0', tags: 'tag1, tag2' }}
            const altMatch = lines[i]?.match(/^##\s+(.+?)\s*\{\{\s*(.+?)\s*\}\}$/);
            if (altMatch) {
                const title = altMatch[1].trim();
                const meta = altMatch[2];

                const dateMatch = meta.match(/date:\s*['"]([^'"]+)['"]/);
                const versionMatch = meta.match(/version:\s*['"]([^'"]+)['"]/);
                const tagMatch = meta.match(/tag:\s*['"]([^'"]+)['"]/);

                const date = dateMatch?.[1] || new Date().toISOString().split('T')[0];
                const version = versionMatch?.[1] || '0.0.0';
                const tag = tagMatch?.[1] || undefined; // Only ONE tag

                i++;

                const entry = parseEntryContent(lines.slice(i), title, date, version, tag);
                entries.push(entry);
            }
            return;
        }

        const version = headerMatch[1];
        const date = headerMatch[2];
        const tagStr = headerMatch[3]?.trim() || ''; // Only ONE tag
        const tag = tagStr || undefined;

        i++;

        // Rest of the content
        const entry = parseEntryContent(lines.slice(i), '', date, version, tag);
        entries.push(entry);
    });

    return { entries };
}

// Hilfsfunktion um Tags aus einer Zeile zu extrahieren
function extractTags(text: string): { cleanText: string; tags: string[] } {
    const tagMatch = text.match(/\[tags:\s*([^\]]+)\]/);
    if (tagMatch) {
        const tags = tagMatch[1].split(',').map(t => t.trim()).filter(t => t);
        const cleanText = text.replace(/\[tags:\s*[^\]]+\]/, '').trim();
        return { cleanText, tags };
    }
    return { cleanText: text, tags: [] };
}

function parseEntryContent(
    lines: string[],
    defaultTitle: string,
    date: string,
    version: string,
    tag?: string
): ChangelogEntry {
    let title = defaultTitle;
    let description = '';
    const content: ExtendedContentBlock[] = [];

    let i = 0;
    let descriptionLines: string[] = [];
    let descriptionEnded = false;
    let currentSectionTitle = '';
    let currentSectionItems: string[] = [];

    const flushSection = () => {
        if (currentSectionTitle && currentSectionItems.length > 0) {
            content.push({
                type: 'improvements',
                title: currentSectionTitle,
                items: [...currentSectionItems]
            });
            currentSectionItems = [];
        }
    };

    while (i < lines.length) {
        const line = lines[i].trim();

        // Image: ![alt](url)
        if (line.startsWith('![')) {
            flushSection();
            const imgMatch = line.match(/!\[([^\]]*)\]\((.+?)\)/);
            if (imgMatch) {
                content.push({
                    type: 'image',
                    url: imgMatch[2],
                    alt: imgMatch[1] || title
                });
            }
            descriptionEnded = true;
            i++;
            continue;
        }

        // Title: ### Title
        if (line.startsWith('### ') && !title) {
            title = line.replace(/^###\s+/, '');
            i++;
            continue;
        }

        // Improvements section: #### Verbesserungen, #### Neue Features, #### Bugfixes
        const sectionMatch = line.match(/^####\s+(.*)/);
        if (sectionMatch) {
            flushSection();
            currentSectionTitle = sectionMatch[1];
            descriptionEnded = true;
            i++;
            continue;
        }

        if (currentSectionTitle && line.startsWith('-')) {
            const itemText = line.replace(/^-\s*/, '');
            currentSectionItems.push(itemText); // Behalte die Tags im Text
            i++;
            continue;
        }

        // Link: [text](url)
        const linkMatch = line.match(/^\[(.+?)\]\((.+?)\)$/);
        if (linkMatch && !line.startsWith('!') && !line.includes('[tags:')) {
            flushSection();
            content.push({
                type: 'link',
                text: linkMatch[1],
                url: linkMatch[2]
            });
            i++;
            continue;
        }

        // Text mit Tags: **Text** [tags: school, ios]
        const { cleanText, tags } = extractTags(line);
        if (tags.length > 0 && line.startsWith('**')) {
            flushSection();
            content.push({
                type: 'text-with-tags',
                text: cleanText,
                tags
            });
            descriptionEnded = true;
            i++;
            continue;
        }

        // Regular description text (only before any #### section)
        if (line && !descriptionEnded) {
            descriptionLines.push(line);
        }

        i++;
    }

    // Flush any remaining section
    flushSection();

    description = descriptionLines.join(' ').trim();

    return {
        version,
        date,
        title: title || 'Update',
        description: description || 'Neue Features und Verbesserungen',
        tag,
        content: content.length > 0 ? content : undefined,
    };
}

interface ChangelogFromMarkdownProps {
    markdown: string;
}

export const ChangelogFromMarkdown: React.FC<ChangelogFromMarkdownProps> = ({ markdown }) => {
    const { entries } = parseChangelogMarkdown(markdown);
    return <Changelog entries={entries} />;
};

// Helper component to load markdown from a file path (for static sites)
interface ChangelogFromFileProps {
    entries: ChangelogEntry[];
}

export const ChangelogFromFile: React.FC<ChangelogFromFileProps> = ({ entries }) => {
    return <Changelog entries={entries} />;
};