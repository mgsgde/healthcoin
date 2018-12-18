'use strict';

// ############################################################################################
// ################################ DEVELOPMENT CONFIG ########################################
// ############################################################################################ 

const PRODUCTION = {

  node: {
    websocketEndpoint: "wss://mainnet.infura.io/ws/v3/",
  },

  credentials: {
    infuraApiKey: process.env.INFURAAPIKEY
  },

  accounts: {

    sender: {
      address: "0xc2c5a236395382f861a3d956c720b29a4ae4f15b",
      privateKey: process.env.SENDERPRIVATEKEY,
    },

    receiver: {
      address: "0x29153c959be8fea3b08e7be8594dcbf19366ce8f",
      privateKey: process.env.RECEIVERPRIVATEKEY,
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

