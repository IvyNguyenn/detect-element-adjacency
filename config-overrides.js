const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const getBuildVersion = require('./scripts/getBuildVersion');
const project = require('./package.json');

module.exports = function override(config, env) {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === 'GenerateSW') {
      return new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/service-worker.js',
        swDest: 'service-worker.js',
      });
    }

    // https://github.com/arackaf/customize-cra/issues/44#issuecomment-452635740
    if (plugin.constructor.name === 'DefinePlugin') {
      const processEnv = plugin.definitions['process.env'] || {};
      plugin.definitions['process.env'] = {
        ...processEnv,
        APP_VERSION: JSON.stringify(project.version),
        BUILD_VERSION: JSON.stringify(getBuildVersion()),
      };
    }
    return plugin;
  });

  return config;
};
