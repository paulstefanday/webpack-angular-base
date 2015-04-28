var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    wiredep = require('wiredep')(),
    deps = wiredep.js.concat(wiredep.css);

module.exports = {
  context:  __dirname + '/app',
  entry: { app: './index.js', vendor: deps },
  output: { path:  __dirname + '/html', filename: 'bundle.js' },

  plugins: [
    new webpack.DefinePlugin({ ON_TEST: process.env.NODE_ENV === 'test' }),
    // new ExtractTextPlugin("styles.css", { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],

  resolve: {
    modulesDirectories: ["node_modules", "bower_components"]
  },

  module: {
    loaders: [
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]', 'image?bypassOnDebug&optimizationLevel=7&interlaced=false'] },
      {test: /\.js$/, loader: 'ngInjector-loader!babel', exclude: /node_modules/},
      {test: /\.jade$/, loader: 'jade', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"), exclude: /node_modules/},
      {test: /\.json$/, loader: 'json', exclude: /node_modules/},
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  }
};

