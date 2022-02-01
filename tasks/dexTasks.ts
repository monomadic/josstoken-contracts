import { task } from 'hardhat/config'

task('deployFactory', 'Deploys a UniswapV2Factory')
  .addParam('feeToSetter', 'account permitted to alter feeTo')
  .setAction(async (args, hre) => {
    const UniswapV2Factory = await hre.ethers.getContractFactory(
      'UniswapV2Factory',
    )
    const uniswapV2Factory = await UniswapV2Factory.deploy(args.feeToSetter)
    const deployed = await uniswapV2Factory.deployed()

    console.log(`Deployed UniswapV2Factory token to ${deployed.address}`)
  })

task('deployRouter', 'Deploys a UniswapV2Router02')
  .addParam('factoryAddress', 'address of underlying factory')
  .addParam('wethAddress', 'address of wrapped base token (eg. WETH, WAVAX)')
  .setAction(async (args, hre) => {
    const UniswapV2Router02 = await hre.ethers.getContractFactory(
      'UniswapV2Router02',
    )
    const uniswapV2Router02 = await UniswapV2Router02.deploy(args.factoryAddress, args.wethAddress)
    const deployed = await uniswapV2Router02.deployed()

    console.log(`Deployed UniswapV2Router02 to ${deployed.address}`)
  })

// task('createPair', 'Create a UniswapV2 Pair')
//   .addParam('feeToSetter', 'account permitted to alter feeTo')
//   .setAction(async (args, hre) => {
//     const UniswapV2Factory = await hre.ethers.getContractFactory('UniswapV2Factory');
//     const uniswapV2Factory = await UniswapV2Factory.deploy(
//       args.feeToSetter,
//     );
//     const deployed = await uniswapV2Factory.deployed();

//     console.log(`Deployed UniswapV2Factory token to ${deployed.address}`);
//   })
