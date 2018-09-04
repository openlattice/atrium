const express = require('express');
const path = require('path');
const webpack = require('webpack');

const appConfigPaths = require('./configs');

const app = express();

appConfigPaths.forEach((configPath) => {
  let appWebpackConfig = require(configPath);
  if (appWebpackConfig && appWebpackConfig.default) {
    appWebpackConfig = appWebpackConfig.default;
  }
  if (typeof appWebpackConfig === 'function') {
    appWebpackConfig = appWebpackConfig({
      development: true,
      production: false,
    });
  }
  const compiler = webpack(appWebpackConfig);
  const options = {
    publicPath: appWebpackConfig.output.publicPath
  };
  app.use(require('webpack-dev-middleware')(compiler, options));
  // app.use(require('webpack-hot-middleware')(compiler));
});

app.listen(9000, function (err) {
  if (err) {
    return console.error(err);
  }
});
