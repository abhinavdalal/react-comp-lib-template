const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TsDeclarationWebpackPlugin = require('ts-declaration-webpack-plugin');
const TsSpecificDeclarationWebpackPlugin = require('ts-specific-declarations-webpack-plugin');
// const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
// const DtsBundleWebpack = require('dts-bundle-webpack');
// const DBWTF = require('dbwtf');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const { components } = require('./common.helpers');

// DtsBundlePlugin.prototype.apply = function (compiler) {
//   compiler.plugin('done', function(){
//     var dts = require('dts-bundle');

//     dts.bundle({
//       name: libraryName,
//       main: 'src/index.d.ts',
//       out: '../index.d.ts',
//       removeSource: true,
//       outputAsModuleFolder: true // to use npm in-package typings
//     });
//   });
// };

// Base Rules
const config = {
  mode: 'production',
  // entry: './src/index.ts',
  entry: {
    // index: './src/index.ts',
    ...components,
  },
  output: {
    // filename: '[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib/components'),
    library: 'react-comp-lib',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [],
  module: {
    rules: [],
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: [],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
  },
  optimization: {},
  externals: [],
};

// TS rules
// config.plugins.push(new TsDeclarationWebpackPlugin(
// {
// name: '[name].d.ts',
// }
// ));
// config.plugins.push(new DeclarationBundlerPlugin({
//   moduleName: '\'react-comp-lib\'',
//   out: './lib/index.d.ts',
// }));

// config.plugins = config.plugins.concat(Object.keys(components).map(
//   (name) => new DeclarationBundlerPlugin({
//     moduleName: `'react-comp-lib${name !== 'index' ? `/${name}` : ''}'`,
//     out: name !== 'index' ? `./lib/components/${name}/index.d.ts` : './lib/index.d.ts',
//     excludedReferences: ['./src/helpers/types'],
//   }),
// ));

// config.plugins = config.plugins.concat(Object.keys(components).map(name =>
//   new DtsBundleWebpack({
//     name: `${name}`,
//     main: `./lib/components/${name}/index.d.ts`,
//     out: `./lib/components/${name}/index.d.ts`,
//     removeSource: true,
//     outputAsModuleFolder: false,
//   }),
// ));

// config.plugins = config.plugins.concat(Object.keys(components).map(name =>
//   new DBWTF({
//     moduleName: `${name}`,
//     out: `./${name}/index.d.ts`,
//   })
// ));

// config.plugins.push(new DBWTF({
//   moduleName: 'react-comp-lib',
//   out: './index.d.ts',
// }));

config.plugins.push(new TsSpecificDeclarationWebpackPlugin());

config.module.rules.push({
  test: /\.(ts|tsx|jsx|js)$/,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: 'ts-loader',
    },
  ],
  exclude: /node_modules/,
});
config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');

// scss module rules
// config.plugins.push(new MiniCssExtractPlugin({
//   filename: '[name]/index.css',
//   // chunkFilename: '[name].css',
//   // filename: 'index.css',
// }));
config.module.rules.push({
  test: /\.module\.s(a|c)ss$/,
  use: [
    // MiniCssExtractPlugin.loader,
    { loader: 'style-loader' }, // to inject the result into the DOM as a style block
    { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
    { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
    { loader: 'sass-loader' }, // to convert SASS to CSS
    // NOTE: The first build after adding/removing/renaming CSS classes fails;
    // since the newly generated .d.ts typescript module is picked up only later
  ],
});
config.module.rules.push({
  test: /\.s(a|c)ss$/,
  exclude: /\.module.(s(a|c)ss)$/,
  loader: [
    // MiniCssExtractPlugin.loader,
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
    },
  ],
});
config.resolve.extensions.push('.css', '.scss', '.sass');

// Optimization rules
// config.optimization = {
//   ...config.optimization,
//   splitChunks: {
//     cacheGroups: {
//       vendor: {
//         chunks: 'initial',
//         name: 'vendor',
//         test: /[\\/]node_modules[\\/]/,
//         enforce: true,
//       },
//     },
//   },
//   // runtimeChunk: true
// };

// External rules
config.externals = [
  ...config.externals,
  {
    externalsPresets: {
      node: true,
    },
  },
  'react',
  'react-dom',
  'react-router-dom',
  'classnames',
  'react-transition-group',
  /@material-ui\/.*/,
  /lodash\/.*/,
];

// clean up old folder contents
config.plugins.push(new CleanWebpackPlugin());
config.plugins.push(new FileManagerPlugin({
  events: {
    onEnd: {
      copy: [{
        source: './lib/components/*.*',
        destination: './',
      // }, {
      //   source: './lib/index.js',
      //   destination: './',
      // }, {
      //   source: './lib/index.d.ts',
      //   destination: './',
      }],
    },
  },
}));

// console.log(JSON.stringify(config, null, 2));
module.exports = config;
