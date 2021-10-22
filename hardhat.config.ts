import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';

// tasks
// import "./tasks/accounts";

let {
  POLYGON_MUMBAI: TESTNET,
  POLYGON_MAINNET: MAINNET,
  POLYGONSCAN_API_KEY: API_KEY,
} = require("./secret");

module.exports = {
  solidity: "0.8.6",
  networks: {
    testnet: {
      url: TESTNET.ENDPOINT,
      accounts: [TESTNET.PRIVATE_KEY],
    },
    mainnet: {
      url: MAINNET.ENDPOINT,
      accounts: [MAINNET.PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: API_KEY,
  },

  namedAccounts: {
    deployer: 0,
  },

  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
};
