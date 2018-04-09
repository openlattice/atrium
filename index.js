import express from 'express';
import path from 'path';
import webpack from 'webpack';

import appConfigPaths from './configs';

const app = express();

appConfigPaths.forEach((configPath) => {
  let appWebpackConfig = require(configPath).default;
  if (typeof appWebpackConfig === 'function') {
    appWebpackConfig = appWebpackConfig({});
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
