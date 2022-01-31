import hre from 'hardhat';

export async function deployFactory(feeToSetter: string): Promise<string> {
  const factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const contract = await factory.deploy(feeToSetter);

  await contract.deployed().then((contract) => {
    console.log(`Factory contract deployed and mined to: ${contract.address}`);
  });

  // // verify contract
  // if (hre.network.name != "hardhat") {
  //   await hre.run("verify:verify", {
  //     address: contract.address,
  //     constructorArguments: [feeToSetter],
  //   });
  // }

  return contract.address;
}

export async function createPair(
  factoryAddress: string,
  tokenA: string,
  tokenB: string
): Promise<string> {
  const factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  let instance = factory.attach(factoryAddress);

  const contract = await instance.createPair(tokenA, tokenB);

  console.log(`Created pair ${contract}.`);

  // // verify contract
  // if (hre.network.name != "hardhat") {
  //   await hre.run("verify:verify", {
  //     address: contract.address,
  //     constructorArguments: [tokenA, tokenB],
  //   });
  // }

  return contract;
}
