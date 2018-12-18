'use strict';

// ############################################################################################
// ################################ DEVELOPMENT CONFIG ########################################
// ############################################################################################ 

const PRODUCTION = {

  node: {
    websocketEndpoint: "wss://mainnet.infura.io/ws/v3/",
  },

  credentials: {
    infuraApiKey: ""
  },

  accounts: {

    sender: {
      address: "",
      privateKey: "",
    },

    receiver: {
      address: "",
      privateKey: "",
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

