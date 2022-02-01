import { task } from 'hardhat/config'

task('deployFactory', 'Deploys a UniswapV2Factory')
  .addParam('feeToSetter', 'account permitted to alter feeTo')
  .setAction(async (args, hre) => {
    const UniswapV2Factory = await hre.ethers.getContractFactory('UniswapV2Factory');
    const uniswapV2Factory = await UniswapV2Factory.deploy(
      args.feeToSetter,
    );
    const deployed = await uniswapV2Factory.deployed();

    console.log(`Deployed UniswapV2Factory token to ${deployed.address}`);
  })
