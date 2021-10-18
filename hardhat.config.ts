import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";

// tasks
import "./tasks/accounts";

let { TESTNET, MAINNET, BSCSCAN_API_KEY } = require("./secret");

module.exports = {
  solidity: "0.8.4",
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
    apiKey: BSCSCAN_API_KEY,
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
