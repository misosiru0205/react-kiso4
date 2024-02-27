import express from 'express';
import React from "react";
import Home from "../src/pages/Home";
import ReactDOMServer from "react-dom/server"

const htmlElement = ReactDOMServer.renderToString(React.createElement(Home))
const port = process.env.PORT || 9000
const app = express()

app.use(express.static("."));

app.get("/react-kiso4/",(req,res)=>{

    const html = `<!DOCTYPE html>
  <html class="scroll-smooth">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width">
      <script type="module" src="../dist/client.js" async defer></script>
      <link rel="stylesheet" type="text/css" href="../dist/client.css">
      <title>React test</title>
    </head>
    <body>
      <div id="root">${htmlElement}</div>
    </body>
  </html>`;

    res.status(200).send(html)
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})