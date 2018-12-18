'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const serverPort = 8080;
const blockchainApi = require("./blockchain/blockchainApi.js");

app.use(bodyParser.json())

app.use(express.static("public"))

app.post('/sendTokens', async function(reqest, response) {

  try {

    let res = await blockchainApi.sendTokens()
    response.json(res)

  } catch ( err ) {
    console.error(err)

    response.status = err.code || 500;

    response.json({
      error: "Something went wrong."
    })

  }
});

app.listen(serverPort, () => console.log(`Example app listening on port ${serverPort}!`))