const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/javascripts/app.jsx'
  },
  output: {
    path: __dirname + '/public',
    filename: 'javascripts/[name].js'
  },
  resolve : {
    alias: {
      normalize: __dirname + '/node_modules/normalize.css/'
    }
  },
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
        use: [ 
          {loader: 'style-loader'}, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              includePaths: ["node_modules/flexboxgrid"]
            }
          } 
        ]
      },{ 
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader" 
      },
      { 
        test: /\.json$/,
        loader: "json-loader" 
      },
      {
        test: /\.yaml$/,
        use: [
          'file-loader',
          'json-loader',          
          'yaml-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.md$/,
        use: [
          'markdown-with-front-matter-loader'
        ]
      }
    ],
  },

  node: {
    console: true,
  },

  //devtool: 'inline-source-map',

  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery"
    }),
    new copyWebpackPlugin(
      [
        { from: './src/', to: './' }
      ],
      {
        ignore: 
        [
          '.DS_Store',
          '.gitkeep',
          'javascripts/components/**/*',
          'javascripts/index.jsx'
        ]
      }
    ),
    new webpack.optimize.UglifyJsPlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  node: {
    fs: "empty"
  }
};

//"rmn8810
