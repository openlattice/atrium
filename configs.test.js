const configs = require('./configs');

describe('webpack config paths', () => {

  test('atrium apps should be submodules', () => {
    expect(configs).toEqual([
      './lattice-edm/config/webpack/webpack.config.dev.js',
      './lattice-login/config/webpack/webpack.config.dev.js',
      './lattice-orgs/config/webpack/webpack.config.dev.js',
    ]);
  });

});
