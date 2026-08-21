import MDXComponents from '@theme-original/MDXComponents';
import ExpertOnly from '@site/src/components/ExpertOnly';
import NormalUserOnly from '@site/src/components/NormalUserOnly';

export default {
  ...MDXComponents,
  // Ohne Import in jeder .md/.mdx-Datei verwendbar.
  ExpertOnly,
  NormalUserOnly,
};
