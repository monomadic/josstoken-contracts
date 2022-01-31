import { task } from 'hardhat/config'

task('deployChef', 'Deploys a MasterChef')
  .addParam('tokenAddress', 'tbd')
  .addParam('feeAddress', 'tbd')
  .addParam('startBlock', 'tbd')
  .setAction(async (args, hre) => {
    const MasterChef = await hre.ethers.getContractFactory('MasterChef')
    const masterChef = await MasterChef.deploy(
      args.tokenAddress,
      args.feeAddress,
      args.startBlock,
    )
    const deployed = await masterChef.deployed()

    console.log(`Deployed ${args.tokenSymbol} token to ${deployed.address}`)
  })
