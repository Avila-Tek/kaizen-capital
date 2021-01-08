const path = require('path');
const languages = require('../../src/lang');

module.exports = async actions => {
  const { createPage } = actions;

  // Create pages for each markdown file.
  const landingTemplate = path.resolve('src/templates/landing.js');
  Object.entries(languages).forEach(([key, value]) => {
    createPage({
      path: `/${key}/`,
      component: landingTemplate,
      context: {
        lang: value,
      },
    });
  });
};
