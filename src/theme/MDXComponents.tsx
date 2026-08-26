import MDXComponents from '@theme-original/MDXComponents';
import Audience from '@site/src/components/audience/Audience';
import AudiencePicker from '@site/src/components/audience/AudiencePicker';
import AppCards from '@site/src/components/audience/AppCards';
import RoleSummary from '@site/src/components/audience/RoleSummary';
import AudienceFaq from '@site/src/components/audience/AudienceFaq';

export default {
  ...MDXComponents,
  // Ohne Import in jeder .md/.mdx-Datei verwendbar.
  Audience,
  AudiencePicker,
  AppCards,
  RoleSummary,
  AudienceFaq,
};
