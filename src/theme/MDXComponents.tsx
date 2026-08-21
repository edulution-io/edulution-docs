import MDXComponents from '@theme-original/MDXComponents';
import Audience from '@site/src/components/audience/Audience';
import AudiencePicker from '@site/src/components/audience/AudiencePicker';
import ModuleCards from '@site/src/components/audience/ModuleCards';

export default {
  ...MDXComponents,
  // Ohne Import in jeder .md/.mdx-Datei verwendbar.
  Audience,
  AudiencePicker,
  ModuleCards,
};
