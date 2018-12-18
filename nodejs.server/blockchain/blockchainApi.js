'use strict';

/*

- auf ESP Serial 0 Arduino vortäsuschen und HTTP post requests machen 

- zuhause:
- logic level shifter anschließen und mit multimeter voltage prüfen
- system test

*/

// ########################################################################################################################################################
// ########################################################################################################################################################
const Web3 = require("web3")


const promiseTimout = require('promise-timeout');

const config = require("../config.js");

const CONTRACTS = require("../contracts.truffle/build/currentContractAddresses.json")

const SENDER = config.accounts.sender;

const RECEIVER = config.accounts.receiver;

var web3 = new Web3(new Web3.providers.WebsocketProvider(`${config.node.websocketEndpoint}${config.credentials.infuraApiKey}`));

var nonce;

// ########################################################################################################################################################
// ########################################################################################################################################################

exports.sendTokens = async function() {

  if (!(await checkWeb3Connection()))
    await connectToWeb3().catch(err => {
      throw err
    })

  let newNonce = await web3.eth.getTransactionCount(SENDER.address)
  if (!nonce || newNonce > nonce)
    nonce = newNonce

  let token = await getERC20Token(CONTRACTS.ERC20.address)

  let encoded = token.methods.transfer(RECEIVER.address, 1).encodeABI()

  let txToSign = {
    to: CONTRACTS.ERC20.address,
    data: encoded,
    gas: 70000,
    nonce: nonce++
  }

  let signed = await web3.eth.accounts.signTransaction(txToSign, SENDER.privateKey)

  let txHash = await new Promise((resolve, reject) => {
    web3.eth.sendSignedTransaction(signed.rawTransaction)
      .on('transactionHash', async function(txHash) {
        resolve(txHash)
      })
  })

  console.info("Sent tx with hash: ", txHash)

  let res = {
    tokenAddress: String(token.options.address).toLowerCase(),
    txReceiptStatus: "Pending",
    numberOfTokens: 1,
    from: SENDER.address,
    to: String(RECEIVER.address).toLowerCase(),
    txHash: String(txHash).toLowerCase(),
  }

  return res

}


// ########################################################################################################################################################
// ########################################################################################################################################################

async function checkWeb3Connection() {

  let isListeningPromise = web3.eth.net.isListening()

  return promiseTimout.timeout(isListeningPromise, 2000)
    .then(function() {
      return true
    }).catch(function(err) {
    if (err instanceof promiseTimout.TimeoutError) {
      return false
    }
  });
}

async function connectToWeb3() {

  if (!(await checkWeb3Connection())) {
    web3 = new Web3(new Web3.providers.WebsocketProvider(`${config.node.websocketEndpoint}${config.credentials.infuraApiKey}`));
    if (!(await checkWeb3Connection())) {
      let err = new Error(`Failed to connect to Ethereum node at ${config.node.websocketEndpoint}${config.credentials.infuraApiKey}.`)
      err.code = 500
      throw err
    } else {
      console.info(`Successfully reconnected to Ethereum node at ${config.node.websocketEndpoint}${config.credentials.infuraApiKey}.`)
    }
  }
}

async function getERC20Token(_tokenAddress) {

  let truffleContractObject = require(`../contracts.truffle/build/contracts/ERC20.json`)
  let abi = truffleContractObject.abi

  let instance = new web3.eth.Contract(abi, _tokenAddress)

  let res = instance

  return res
}

