const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const nodeExternals = require("webpack-node-externals")

const client = {
    target:["web"],
    mode: "development",
    entry: "./src/server.tsx",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "client.js"
    },
    devServer:{static:"dist",open:true},
    module: {
        rules: [
           {
             test:  /\.(jsx|js|ts|tsx)?$/,
             exclude:/node_modules/,
             use:{
              loader:"babel-loader",
             }
          },
          {
            test:/\.(css|scss)?$/,
            use: [{loader:MiniCssExtractPlugin.loader},{loader:"css-loader"},{loader:"sass-loader"}],
            exclude: /node_modules/,
          },
         ]
       },
       resolve: {
         extensions: [".ts", ".tsx", ".js"]
       },
       plugins: [
        new MiniCssExtractPlugin({
          filename:"client.css"
        })
    ]
};

const server = {
  target:["node"],
  mode: "development",
  entry: "./server/test.tsx",
  output: {
      path: path.resolve(__dirname,'dist'),
      filename: "server.js"
  },
  devServer:{static:"dist",open:true},
  externals:[nodeExternals()],
  module: {
      rules: [
         {
           test:  /\.(jsx|js|ts|tsx)?$/,
           exclude:/node_modules/,
           use:{
            loader:"babel-loader",
           }
        },
       ]
     },
     resolve: {
       extensions: [".ts", ".tsx", ".js"]
     },
};


module.exports = [client,server]