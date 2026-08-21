/**
 * Setzt `data-expert` am <html>-Element, bevor die Seite gezeichnet wird.
 *
 * Ohne dieses Skript wären Experten-Inhalte bei jedem Seitenaufruf kurz
 * sichtbar, bis React hydriert und den Wert aus dem LocalStorage liest.
 * Docusaurus löst den Dark-Mode-Flash auf dieselbe Weise.
 */
const script = `
(function () {
  try {
    var stored = window.localStorage.getItem('edulution-expert-mode');
    document.documentElement.setAttribute('data-expert', stored === 'true' ? 'true' : 'false');
  } catch (e) {
    document.documentElement.setAttribute('data-expert', 'false');
  }
})();
`;

module.exports = function expertModePlugin() {
  return {
    name: 'edulution-expert-mode',
    injectHtmlTags() {
      return {
        preBodyTags: [
          {
            tagName: 'script',
            innerHTML: script,
          },
        ],
      };
    },
  };
};
