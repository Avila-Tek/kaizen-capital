const path = require('path');

module.exports = ({ actions }) => {
  const sassResourceSettings = {
    use: [
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [path.resolve('src/styles/abstracts/_abstracts.scss')],
        },
      },
    ],
  };

  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    ...sassResourceSettings,
  };

  const normalSassRules = {
    test: /\.s(a|c)ss$/,
    ...sassResourceSettings,
  };

  return actions.setWebpackConfig({
    module: {
      rules: [sassRuleModules, normalSassRules],
    },
    resolve: {
      alias: {
        components: path.resolve('src/components'),
        contexts: path.resolve('src/context'),
        hooks: path.resolve('src/hooks'),
        images: path.resolve('src/images'),
        utils: path.resolve('src/utils'),
      },
    },
  });
};
