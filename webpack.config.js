const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    app: './src/javascripts/app.jsx'
  },

  output: {
    path: __dirname + '/public',
    filename: 'javascripts/[name].js',
  },
  // resolve : {
  //   alias: {

  //   }
  // },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "stage-0"]
        }
      }, { 
        test: /\.css$/, 
        loader: [ 'style-loader', 'css-loader' ]
      },{ 
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader" 
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ],
  },

  node: {
    console: true,
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery"
    }),
    new copyWebpackPlugin([{ from: './src/', to: './' }], {
      ignore: [
        '.DS_Store',
        '.gitkeep',
        'javascripts/components/*.jsx'
      ]
    })
  ]
};
