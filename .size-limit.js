// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const fs = require('fs');
const { components } = require('./common.helpers');
// let limitsJSON = [];
// try {
//   const limitsFile = fs.readFileSync('./stats/size.json');
//   limitsJSON = JSON.parse(limitsFile);
// } catch (e) {
//   limitsJSON = [];
// }

// let limits = [];
// if (Array.isArray(limitsJSON)) limits = limitsJSON;
// console.log({ limits });
// console.log({ components });

module.exports = Object.keys(components).map(name => ({
    path: `./lib/components/${name}.js`,
    entry: name,
    // NOTE: if you want to override then you will need to mannually increase in stats/size.json or just delete the file
    // limit: limits.find(l => l.name === name)?.size || 1000000, // defaulting to 1MB
    limit: 10000, // max 10kb allowed
    // "config": "./webpack.config.js",
    // "ignore": ["fs"],
    // modifyWebpackConfig: config => {
      // config.entry = { [name]: components[name] },
      // config.plugins.push(new BundleAnalyzerPlugin());
      // return config;
    // },
    running: false,
    webpack: false,
  })
);
