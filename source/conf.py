# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'edulution UI'
copyright = '2025 edulution.io '
author = 'edulution.io'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = []

templates_path = ['_templates']
exclude_patterns = []

language = 'de'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
html_favicon = '_static/icon.ico'
html_title = 'edulution UI - Dokumentation'
html_logo = '_static/edulution_docs.png'

html_theme_options = {
    "logo_only": True,
    'collapse_navigation': False,
    'navigation_depth': 4,
}

html_css_files = [
    'custom.css',
]