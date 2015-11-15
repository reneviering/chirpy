var webpack = require('webpack');

var node_dir = __dirname + '/node_modules';

module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: 'dist',
    filename: 'bundle.js',
    publicPath: 'dist/'
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin('main', null, false)],
    module: {
        noParse: [node_dir + '/react/dist/react.min.js'],
        exclude:'/node_modules/',
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['es2015', 'react', 'stage-3']
            },

          }
        ]
    },
    devtool: 'source-map'
};