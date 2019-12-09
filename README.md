# Atrium

Atrium is a git superproject containing repositories for frontend applications as well as an app runner for running these applications locally.

## Getting Started

1. Add your SSH key to GitHub

  https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

  https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

2. Join the OpenLattice GitHub organizations

  https://github.com/openlattice

  https://github.com/Lattice-Works

3. Install `node` and `npm`

  ```
  ~ $ node --version
  v11.6.0
  ~ $ npm --version
  6.13.0
  ```

3. Clone Atrium

  ```
  git clone git@github.com:openlattice/atrium.git --recurse-submodules
  ```

4. Install

  ```
  ~ $ cd atrium
  ~/atrium $ npm install --no-package-lock
  ```

## Running Locally

1. Atrium will run applications specified in `configs.js`. However, each application needs the `npm install` step. You can either:
  - RECOMMENDED: manually go through each project listed in `configs.js` and run `npm install`
  
  ```
  ~/atrium $ cd lattice-orgs
  ~/atrium/lattice-orgs $ npm install --no-package-lock
  ```
  
  - NOT RECOMMENDED:

  ```
  ~/atrium $ npm run gsm-install
  ```
  `gsm-install` is just a shortcut for `git submodule foreach "npm install --no-package-lock || :""`

  **NOTE**: `gsm-install` ignores `configs.js` and will run on each subproject defined in `.gitmodules`. If you run `gsm-install`, it will certainly take a long time, so grab some :coffee: :doughnut:

2. Now, take a look at `configs.js`. It exports relative file paths to the subprojects Atrium will run.

  ```
  module.exports = [
    './lattice-edm/config/webpack/webpack.config.dev.js',
    './lattice-login/config/webpack/webpack.config.dev.js',
    './lattice-orgs/config/webpack/webpack.config.dev.js',
  ];
  ```

  To run additional apps, update the exported array with the path to the application's `webpack.config.dev.js`. Our convention is:

  `{project-name}/config/webpack/webpack.config.dev.js`

3. Finally, we can run Atrium.

  ```
  ~/atrium $ npm run app

  > atrium@0.0.0 app /Users/hristo/openlattice/atrium
  > node index.js

  ℹ ｢wdm｣: Hash: 28738e4ca56f8ebfc89e
  Version: webpack 4.41.2
  Time: 11661ms
  ...
  [./lattice-login/src/index.js] 2.38 KiB {main} [built]
  ...
  ℹ ｢wdm｣: Compiled successfully.

  ℹ ｢wdm｣: Hash: 86ab12fcf69feb3a99d3
  Version: webpack 4.41.2
  Time: 13458ms
  ...
  [./lattice-orgs/src/index.js] 2.59 KiB {main} [built]
  ...
  ℹ ｢wdm｣: Compiled successfully.

  ℹ ｢wdm｣: Hash: bae06594a5632a334a53
  Version: webpack 4.41.2
  Time: 17358ms
  ...
  [./lattice-edm/src/index.js] 2.63 KiB {main} [built]
  ...
  ℹ ｢wdm｣: Compiled successfully.
  ```

  Atrium should now be running each application under `localhost:9000/{app}/`, where `{app}` is defined as `BASE_PATH` in `config/webpack/webpack.config.base.js`. For example:
    - `localhost:9000/edm/`
    - `localhost:9000/orgs/`

  **NOTE**: the trailing `/` is required
