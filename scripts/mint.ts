import hre from 'hardhat';

const tokenName = "JossToken";
const tokenSymbol = "JOSS";
const totalSupply = 300000000;
const decimalPlaces = 18;
const mintRecipient = "0x7e6825e7de3e4b65f48df3fd1758d6e3d041f4f1";

async function main() {
  const factory = await hre.ethers.getContractFactory("Token");
  const contract = await factory.deploy(tokenName, tokenSymbol);

  await contract.deployed().then((contract) => {
    console.log(
      `${tokenName} contract deployed and mined to: ${contract.address}`
    );
  });

  // verify contract
  await hre.run("verify:verify", {
    address: contract.address,
    constructorArguments: [tokenName, tokenSymbol],
  });

  // mint totalSupply and send to mintRecipient
  let instance = factory.attach(contract.address);
  await instance
    .mint(
      mintRecipient,
      hre.ethers.utils.parseUnits(totalSupply.toString(), decimalPlaces)
    )
    .then(() => console.log(`${totalSupply} minted to ${mintRecipient}.`));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
