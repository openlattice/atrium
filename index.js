import express from 'express';
import path from 'path';
import webpack from 'webpack';

import bhrWebpackConfig from '../baltimore-health/config/webpack/webpack.config.dev.js';
import edmWebpackConfig from '../lattice-edm/config/webpack/webpack.config.dev.js';
import ehrWebpackConfig from '../electronic-client-record/config/webpack/webpack.config.dev.js';
import loginWebpackConfig from '../lattice-login/config/webpack/webpack.config.dev.js';

const app = express();

[
  loginWebpackConfig,
  edmWebpackConfig,
  bhrWebpackConfig,
  ehrWebpackConfig
].forEach((webpackConfig) => {
  let config = webpackConfig;
  if (typeof webpackConfig === 'function') {
    config = webpackConfig({});
  }
  const compiler = webpack(config);
  const options = {
    publicPath: config.output.publicPath
  };
  app.use(require('webpack-dev-middleware')(compiler, options));
  // app.use(require('webpack-hot-middleware')(compiler));
});

app.listen(9000, function (err) {
  if (err) {
    return console.error(err);
  }
});
