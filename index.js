import express from 'express';
import path from 'path';
import webpack from 'webpack';

import edmWebpackConfig from '../lattice-edm/config/webpack/webpack.config.dev.js';
import loginWebpackConfig from '../lattice-login/config/webpack/webpack.config.dev.js';

const app = express();

[
  loginWebpackConfig,
  edmWebpackConfig
].forEach((webpackConfig) => {
  const config = webpackConfig({});
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
