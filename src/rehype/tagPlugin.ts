import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';

const tagPlugin: Plugin = () => {
  return (tree) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName === 'h2' || node.tagName === 'h3' || node.tagName === 'h4') {
        const lastChild = node.children[node.children.length - 1];

        if (lastChild && lastChild.type === 'text') {
          const text = lastChild.value;
          const tagMatch = text.match(/\s*\[tags:\s*([^\]]+)\]\s*$/);

          if (tagMatch) {
            const tags = tagMatch[1]
              .split(',')
              .map((t: string) => t.trim())
              .filter((t: string) => t);

            lastChild.value = text.replace(/\s*\[tags:\s*[^\]]+\]\s*$/, '');

            tags.forEach((tag: string) => {
              const color = getTagColor(tag);
              node.children.push({
                type: 'text',
                value: ' ',
              });
              node.children.push({
                type: 'element',
                tagName: 'span',
                properties: {
                  style: `display:inline-block;margin-left:6px;padding:2px 8px;border-radius:4px;font-size:0.625rem;font-weight:500;background-color:${color.bg};color:${color.color};border:1px solid ${color.border}`,
                },
                children: [
                  {
                    type: 'text',
                    value: getTagLabel(tag),
                  },
                ],
              });
            });
          }
        }
      }
    });
  };
};

function getTagLabel(type: string): string {
  const labels: Record<string, string> = {
    school: 'Schule',
    business: 'Unternehmen',
    ios: 'iOS',
    android: 'Android',
    lmn73: 'LMN 7.3',
  };
  return labels[type] || type;
}

function getTagColor(type: string): { bg: string; color: string; border: string } {
  const colors: Record<string, { bg: string; color: string; border: string }> = {
    school: { bg: 'rgba(33,150,243,0.15)', color: '#2196f3', border: 'rgba(33,150,243,0.3)' },
    business: { bg: 'rgba(255,152,0,0.15)', color: '#ff9800', border: 'rgba(255,152,0,0.3)' },
    ios: { bg: 'rgba(156,39,176,0.15)', color: '#9c27b0', border: 'rgba(156,39,176,0.3)' },
    android: { bg: 'rgba(76,175,80,0.15)', color: '#4caf50', border: 'rgba(76,175,80,0.3)' },
  };
  return colors[type] || { bg: 'rgba(33,150,243,0.15)', color: '#2196f3', border: 'rgba(33,150,243,0.3)' };
}

export default tagPlugin;
