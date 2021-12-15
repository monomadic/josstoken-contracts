import './tasks/accounts';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';

let secrets = require("./secret");

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.6" },
      { version: "0.6.6" },
      { version: "0.5.16" },
    ],
  },
  networks: {
    polygon_testnet: {
      url: secrets.POLYGON_MUMBAI.ENDPOINT,
      accounts: [secrets.POLYGON_MUMBAI.PRIVATE_KEY],
    },
    polygon_mainnet: {
      url: secrets.POLYGON_MAINNET.ENDPOINT,
      accounts: [secrets.POLYGON_MAINNET.PRIVATE_KEY],
    },
    bsc_testnet: {
      url: secrets.BSC_TESTNET.ENDPOINT,
      accounts: [secrets.BSC_TESTNET.PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: secrets.BSC_API_KEY,
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
