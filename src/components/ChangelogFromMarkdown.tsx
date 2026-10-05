import React from 'react';
import { Changelog, ChangelogEntry, ContentBlock } from './Changelog';
import Tag from './Tag';

const ENTRY_SEPARATOR = /\n---+\n/;
const ENTRY_HEADER = /^##\s+v?([\d.]+)\s*\|\s*([\d-]+)\s*(?:\|\s*(.+))?$/;
const ENTRY_HEADER_WITH_META = /^##\s+(.+?)\s*\{\{\s*(.+?)\s*\}\}$/;

interface ParsedChangelog {
    entries: ChangelogEntry[];
}

type ExtendedContentBlock = ContentBlock | {
    type: 'text-with-tags';
    text: string;
    tags: string[];
};

/** Parses the entry format described in changelogs/README.md. An entry takes exactly one tag. */
export function parseChangelogMarkdown(markdown: string): ParsedChangelog {
    const entries: ChangelogEntry[] = [];

    const sections = markdown.split(ENTRY_SEPARATOR).filter(s => s.trim());

    sections.forEach(section => {
        const lines = section.trim().split('\n');
        let i = 0;

        const headerMatch = lines[i]?.match(ENTRY_HEADER);

        if (!headerMatch) {
            const altMatch = lines[i]?.match(ENTRY_HEADER_WITH_META);
            if (altMatch) {
                const title = altMatch[1].trim();
                const meta = altMatch[2];

                const dateMatch = meta.match(/date:\s*['"]([^'"]+)['"]/);
                const versionMatch = meta.match(/version:\s*['"]([^'"]+)['"]/);
                const tagMatch = meta.match(/tag:\s*['"]([^'"]+)['"]/);

                const date = dateMatch?.[1] || new Date().toISOString().split('T')[0];
                const version = versionMatch?.[1] || '0.0.0';
                const tag = tagMatch?.[1] || undefined;

                i++;

                const entry = parseEntryContent(lines.slice(i), title, date, version, tag);
                entries.push(entry);
            }
            return;
        }

        const version = headerMatch[1];
        const date = headerMatch[2];
        const tagStr = headerMatch[3]?.trim() || '';
        const tag = tagStr || undefined;

        i++;

        const entry = parseEntryContent(lines.slice(i), '', date, version, tag);
        entries.push(entry);
    });

    return { entries };
}

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
    let currentSubsections: { title: string; items: string[] }[] = [];
    // A #### heading followed by ##### cards becomes a label above them instead of a card.
    let pendingGroupTitle = '';

    const flushSection = () => {
        const subsections = currentSubsections.filter(sub => sub.items.length > 0);
        if (currentSectionTitle && (currentSectionItems.length > 0 || subsections.length > 0)) {
            content.push({
                type: 'improvements',
                title: currentSectionTitle,
                items: [...currentSectionItems],
                ...(subsections.length > 0 && { subsections })
            });
        }
        currentSectionItems = [];
        currentSubsections = [];
    };

    while (i < lines.length) {
        const line = lines[i].trim();

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
            i++;
            continue;
        }

        if (line.startsWith('### ') && !title) {
            title = line.replace(/^###\s+/, '');
            i++;
            continue;
        }

        const subsectionMatch = line.match(/^######\s+(.*)/);
        if (subsectionMatch && currentSectionTitle) {
            currentSubsections.push({ title: subsectionMatch[1], items: [] });
            i++;
            continue;
        }

        const cardMatch = line.match(/^#####\s+(.*)/);
        if (cardMatch) {
            const groupTitle = currentSectionItems.length === 0 && currentSubsections.length === 0 ? currentSectionTitle : '';
            flushSection();
            if (groupTitle && groupTitle === pendingGroupTitle) {
                content.push({ type: 'section-label', title: groupTitle });
                pendingGroupTitle = '';
            }
            currentSectionTitle = cardMatch[1];
            descriptionEnded = true;
            i++;
            continue;
        }

        const sectionMatch = line.match(/^####\s+(.*)/);
        if (sectionMatch) {
            flushSection();
            currentSectionTitle = sectionMatch[1];
            pendingGroupTitle = sectionMatch[1];
            descriptionEnded = true;
            i++;
            continue;
        }

        if (currentSectionTitle && line.startsWith('-')) {
            const itemText = line.replace(/^-\s*/, '');
            const target = currentSubsections[currentSubsections.length - 1]?.items ?? currentSectionItems;
            target.push(itemText);
            i++;
            continue;
        }

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

        if (line && !descriptionEnded) {
            descriptionLines.push(line);
        }

        i++;
    }

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

interface ChangelogFromFileProps {
    entries: ChangelogEntry[];
}

export const ChangelogFromFile: React.FC<ChangelogFromFileProps> = ({ entries }) => {
    return <Changelog entries={entries} />;
};