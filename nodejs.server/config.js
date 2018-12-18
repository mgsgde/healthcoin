'use strict';

// ############################################################################################
// ################################ DEVELOPMENT CONFIG ########################################
// ############################################################################################ 

const PRODUCTION = {

  node: {
    websocketEndpoint: "wss://mainnet.infura.io/ws/v3/",
  },

  credentials: {
    infuraApiKey: "c8df1ea6bba245b1a61f5bbdbd3cc14a"
  },

  accounts: {

    sender: {
      address: "0xc2c5a236395382f861a3d956c720b29a4ae4f15b",
      privateKey: "0xa78a0c60210d7ffa2fa3f75de66c16807c9a21879b543aa1e9d17c9065460c83",
    },

    receiver: {
      address: "0x29153c959be8fea3b08e7be8594dcbf19366ce8f",
      privateKey: "0x59f30428e71675b8e8cfb7dea06434b8b95f802cbf2b9bc80d7d0b05807843d2",
    }
  }

}

// ############################################################################################
// ############################################################################################
// ############################################################################################ 

switch (process.env.NODE_ENV) {

  case 'DEVELOPMENT':
    module.exports = DEVELOPMENT
    break;
  case 'TEST':
    module.exports = TEST
    break;
  case 'PRODUCTION':
    module.exports = PRODUCTION
    break;

  default:
    throw new Error("Please specify environment variable 'NODE_ENV' out of {'DEVELOPMENT', 'TEST', 'PRODUCTION'}.")
}

