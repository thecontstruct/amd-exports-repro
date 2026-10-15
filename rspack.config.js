// Shared config. BUNDLER=rspack|webpack, SPLIT=1 for the split-chunk variant.
const bundler = process.env.BUNDLER || 'rspack';
const split = process.env.SPLIT === '1';
const config = {
  mode: 'development', devtool: false, entry: './src/index.js',
  resolve: { alias: { underscore: __dirname + '/src/underscore.js', jquery: __dirname + '/src/jquery.js' } },
  output: { path: `${__dirname}/dist/${bundler}${split ? '-split' : ''}` },
  optimization: { minimize: false },
};
if (bundler === 'rspack') config.amd = {}; // webpack enables AMD by default
if (split) Object.assign(config.optimization, { runtimeChunk: 'single',
  splitChunks: { chunks: 'all', cacheGroups: { v: { test: /src[\\/]/, name: 'v', enforce: true } } } });
module.exports = config;
