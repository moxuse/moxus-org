const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    app: "./src/javascripts/app.jsx"
  },
  output: {
    path: __dirname + "/public",
    filename: "javascripts/[name]-[hash:8].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      normalize: __dirname + "/node_modules/normalize.css/"
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [["env", { modules: false }], "react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
                // includePaths: ["node_modules/flexboxgrid"]
              }
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader"
      },
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        loaders: ["raw-loader", "glslify-loader"]
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: [{ loader: "json-loader" }]
      },
      {
        test: /\.yaml$/,
        use: ["file-loader", "json-loader", "yaml-loader"]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      },
      {
        test: /\.md$/,
        use: ["markdown-with-front-matter-loader"]
      }
    ]
  },

  node: {
    console: true,
    fs: "empty"
  },

  devtool: PRODUCTION ? false : "inline-source-map",

  plugins: [
    new webpack.ExtendedAPIPlugin(),
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/html/index.html"
    }),
    new CopyWebpackPlugin(
      [{ from: "./src/", to: "./", ignore: ["index.html"] }],
      {
        ignore: [
          ".DS_Store",
          ".gitkeep",
          "javascripts/components/**/*",
          "javascripts/lib/*",
          "stylesheets/sass/*",
          "javascripts/app.jsx"
        ]
      }
    ),
    ...(PRODUCTION ? [new webpack.optimize.OccurrenceOrderPlugin()] : [])
  ]
};
