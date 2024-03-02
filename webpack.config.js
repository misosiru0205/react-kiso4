const path = require("path")
//cssだけ別ファイルで出力するプラグイン
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//依存関係を解決するやつ
const nodeExternals = require("webpack-node-externals")

//nodeの実行ファイルをバンドルする
const server = {
  //nodeで起動するのでtergetはnodeに
  target:["node"],
  mode: "development",
  //entryはexpressを実装しているファイルに
  entry: "./server/index.js",
  output: {
      path: path.resolve(__dirname,'dist'),
      filename: "server.js"
  },
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

//クライアント側に渡すjsをバンドルする
const client = {
  //クライアント側で読ませるためにtargetはwebに
  target:["web"],
  mode: "development",
  entry: "./src/client.tsx",
  output: {
      path: path.resolve(__dirname,'dist'),
      filename: "client.js"
  },
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

//webpackの設定の送信
module.exports = [client,server]