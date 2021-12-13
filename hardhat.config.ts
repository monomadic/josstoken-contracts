import "./tasks/accounts";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";

// tasks
let {
  POLYGON_MUMBAI: TESTNET,
  POLYGON_MAINNET: MAINNET,
  POLYGONSCAN_API_KEY: API_KEY,
} = require("./secret");

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.6" },
      { version: "0.6.6" },
      { version: "0.5.16" },
    ],
  },
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
