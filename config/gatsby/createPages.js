const buildLangs = require('./build-lang');

module.exports = async ({ actions }) => {
  await buildLangs(actions);
  return null;
};
