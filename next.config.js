const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {ANALYZE} = process.env;

module.exports = {
  webpack: function(config) {
    config.module.rules.push(
        {
          test: require.resolve('snapsvg'),
          loader: 'imports-loader?this=>window,fix=>module.exports=0',
        },
    );

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }

    return config;
  },
};