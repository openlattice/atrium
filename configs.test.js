import configs from './configs';

describe('webpack config paths', () => {

  test('apps should be in the same directory as atrium', () => {
    expect(configs).toEqual([
      '../lattice-login/config/webpack/webpack.config.dev.js',
      '../lattice-edm/config/webpack/webpack.config.dev.js',
    ]);
  });

});
