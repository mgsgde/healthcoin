'use strict';

require("../server.js")
const assert = require('assert');
const config = require("../config.js")
const Web3 = require("web3")
const web3 = new Web3(new Web3.providers.WebsocketProvider(`${config.node.websocketEndpoint}${config.credentials.infuraApiKey}`));
const fetch = require("node-fetch")
const HOST = "http://localhost:8080"
const SENDER = config.accounts.sender;
const RECEIVER = config.accounts.receiver;
const CONTRACTS = require("../contracts.truffle/build/currentContractAddresses.json")

// ######################################################################################################
// ################################## API - testing endpoints ###########################################
// ######################################################################################################


describe('API - testing endpoints \n', function() {

  it(`POST ${HOST}/sendTokens`, async function() {
    this.timeout(120000);

    let response = await fetch(`${HOST}/sendTokens`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })

    if (response.status != 200) {
      assert(false, response.error)
    }

    response = await response.json()

    await confirmTransaction(response.txHash, 3)

    assert("tokenAddress" in response)
    assert("txReceiptStatus" in response)
    assert("numberOfTokens" in response)
    assert("from" in response)
    assert("to" in response)
    assert("txHash" in response)

    assert(response.tokenAddress == CONTRACTS.ERC20.address)
    assert(response.txReceiptStatus == "Pending")
    assert(response.numberOfTokens == 1)
    assert(response.from == SENDER.address)
    assert(response.to == RECEIVER.address)

  })

  it.skip(`POST ${HOST}/sendTokens twice`, async function() {
    this.timeout(120000);

    await fetch(`${HOST}/sendTokens`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })

    let response = await fetch(`${HOST}/sendTokens`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    })

    if (response.status != 200) {
      assert(false, response.error)
    }

    response = await response.json()

    await confirmTransaction(response.txHash, 3)

    assert("tokenAddress" in response)
    assert("txReceiptStatus" in response)
    assert("numberOfTokens" in response)
    assert("from" in response)
    assert("to" in response)
    assert("txHash" in response)

    assert(response.tokenAddress == CONTRACTS.ERC20.address)
    assert(response.txReceiptStatus == "Pending")
    assert(response.numberOfTokens == 1)
    assert(response.from == SENDER.address)
    assert(response.to == RECEIVER.address)

  })

})

// ######################################################################################################
// ######################################################################################################

async function getConfirmations(txHash) {
  try {

    // Get transaction details
    const trx = await web3.eth.getTransaction(txHash)

    // Get current block number
    const currentBlock = await web3.eth.getBlockNumber()

    // When transaction is unconfirmed, its block number is null.
    // In this case we return 0 as number of confirmations

    return trx.blockNumber === null ? 0 : currentBlock - trx.blockNumber
  } catch ( error ) {}
}


async function confirmTransaction(txHash, confirmations = 10) {
  await delay(15 * 1000)

  // Get current number of confirmations and compare it with sought-for value
  const trxConfirmations = await getConfirmations(txHash)

  console.info('Transaction with hash ' + txHash + ' has ' + trxConfirmations + ' confirmation(s)')

  if (trxConfirmations >= confirmations) {
    // Handle confirmation event according to your business logic
    console.info('Transaction with hash ' + txHash + ' has been successfully confirmed')
    return
  }
  // Recursive call
  return confirmTransaction(txHash, confirmations)

}

async function delay(t) {
  let res = new Promise(resolve => setTimeout(resolve, t))
  return res
}