'use strict';

const fs = require("fs")
const ERC20 = artifacts.require("./ERC20.sol");

module.exports = function(deployer, network, accounts) { // die exportierte funktion kann nicht async sein, sonst wird der restliche teil nicht ausgefeührt = bug. 
  deployer.then(async() => {

    let ERC20Instance = await ERC20.new();

    console.log(`ERC20Instance contract with address ${ERC20Instance.address} deployed.`)

    let data = {
      ERC20: {
        address: ERC20Instance.address,
        owner: accounts[0]
      }
    }

    fs.writeFileSync(`${__dirname}/../build/currentContractAddresses.json`, JSON.stringify(data));


  })
}


