import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';

import './tasks/accountTasks';
import './tasks/masterChefTasks';
import './tasks/tokenTasks';

require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.6" },
      { version: "0.6.6" },
      { version: "0.5.16" },
    ],
  },
  networks: {
    bsc_testnet: {
      url: process.env.BSC_TESTNET_ENDPOINT,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
    polygon_testnet: {
      url: process.env.POLYGON_TESTNET_ENDPOINT,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
    avax_testnet: {
      url: process.env.AVAX_TESTNET_ENDPOINT,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: {
      bsc: process.env.BSC_EXPLORER_API_KEY,
      bscTestnet: process.env.BSC_EXPLORER_API_KEY,
      polygon: process.env.POLYGON_EXPLORER_API_KEY,
      polygonMumbai: process.env.POLYGON_EXPLORER_API_KEY,
      avalanche: process.env.AVAX_EXPLORER_API_KEY,
      avalancheFujiTestnet: process.env.AVAX_EXPLORER_API_KEY,
    },
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
