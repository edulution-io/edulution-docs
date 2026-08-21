/**
 * Setzt `data-role`, `data-org` und `data-module` am <html>-Element, bevor
 * die Seite gezeichnet wird.
 *
 * Ohne dieses Skript waeren Inhalte anderer Zielgruppen bei jedem
 * Seitenaufruf kurz sichtbar, bis React hydriert und den LocalStorage liest.
 * Docusaurus loest den Dark-Mode-Flash auf dieselbe Weise.
 */
const script = `
(function () {
  var axes = {
    'data-role': 'edulution-audience-role',
    'data-org': 'edulution-audience-org',
    'data-module': 'edulution-audience-module'
  };
  Object.keys(axes).forEach(function (attribute) {
    var value = 'all';
    try {
      value = window.localStorage.getItem(axes[attribute]) || 'all';
    } catch (e) {
      value = 'all';
    }
    document.documentElement.setAttribute(attribute, value);
  });
})();
`;

module.exports = function audiencePlugin() {
  return {
    name: 'edulution-audience',
    injectHtmlTags() {
      return {
        preBodyTags: [{ tagName: 'script', innerHTML: script }],
      };
    },
  };
};
