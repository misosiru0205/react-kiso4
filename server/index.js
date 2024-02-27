import ReactDOMServer from "react-dom/server"
import express from "express"
import React from "react"
import fs from "fs"
import Home from "../src/pages/Home.tsx"

//ポートの指定　今回は9000
const port = process.env.PORT || 9000
const app = express()

//CSSやJsも読み込ませたいのでstaticを使用
app.use(express.static("."));

//react-dom-routerでreact-kiso4を設定しているので"/react-kiso4/"に設定
app.get("/react-kiso4/",(req,res)=>{

    //renderToString()にてHomeコンポーネントをHTMLに変換
    const htmlElement = ReactDOMServer.renderToString(React.createElement(Home))
    //fs.readFileSyncであらかじめ用意したhtmlファイルをtmpに代入
    const tmp = fs.readFileSync("./dist/index.html","utf-8")
    //htmlファイル内の{{content}}をHomeから変換したHTMLに
    const html = tmp.replace("{{content}}",htmlElement)
    //送信
    res.status(200).send(html)
})

//ポート9000で開放
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

