import configs from './configs';

describe('webpack config paths', () => {

  test('apps should be in the same directory as atrium', () => {
    expect(configs).toEqual([
      '../lattice-login/config/webpack/webpack.config.dev.js',
      '../lattice-edm/config/webpack/webpack.config.dev.js',
      '../baltimore-health/config/webpack/webpack.config.dev.js',
      '../electronic-client-record/config/webpack/webpack.config.dev.js',
      '../pretrial-case-management/config/webpack/webpack.config.dev.js',
      '../chronicle-web/config/webpack/webpack.config.dev.js'
    ]);
  });

});