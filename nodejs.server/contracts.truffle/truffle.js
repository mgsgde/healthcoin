'use strict';


const config = require("../config.js")

var PrivateKeyProvider = require("truffle-privatekey-provider");

let privateKey = formatPrivateKeyForTruffle(config.accounts.sender.privateKey)

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    mainnet: {
      provider: new PrivateKeyProvider(privateKey, "https://mainnet.infura.io/"),
      network_id: 1,
      gas: 800000,
      gasPrice: 10000000000
    }
  }
};


function formatPrivateKeyForTruffle(_address) {
  let res = _address.slice(2)
  return res
}