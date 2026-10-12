/**
 * Sets `data-org` and `data-role` on <html> before first paint, so content for other audiences does
 * not flash until React hydrates and reads localStorage. Docusaurus avoids the dark-mode flash the
 * same way.
 */
const script = `
(function () {
  var axes = {
    'data-org': 'edulution-audience-org',
    'data-role': 'edulution-audience-role'
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
