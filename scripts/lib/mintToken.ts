import hre from 'hardhat';

const decimalPlaces = 18;

export async function mintToken(
  tokenName: string,
  tokenSymbol: string,
  totalSupply: number,
  mintRecipient: string
): Promise<string> {
  const factory = await hre.ethers.getContractFactory("Token");
  const contract = await factory.deploy(tokenName, tokenSymbol);

  console.log(`${tokenName} contract deployed to: ${contract.address}`);

  contract.deployed().then((deployedContract) => {
    // console.log(
    //   deployedContract.signer,
    //   "deployed to",
    //   deployedContract.address
    // );
    // verify
    if (hre.network.name != "hardhat") {
      hre.run("verify:verify", {
        address: deployedContract.address,
        constructorArguments: [tokenName, tokenSymbol],
      });
    }
  });

  // mint totalSupply and send to mintRecipient
  let instance = factory.attach(contract.address);
  await instance
    .mint(
      mintRecipient,
      hre.ethers.utils.parseUnits(totalSupply.toString(), decimalPlaces)
    )
    .then(() => console.log(`${totalSupply} minted to ${mintRecipient}.`));

  return contract.address;
}
