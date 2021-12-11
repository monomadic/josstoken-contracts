import hre from 'hardhat';

const tokenName = "JossToken";
const tokenSymbol = "JOSS";
const totalSupply = 300000000;
const decimalPlaces = 18;
const mintRecipient = "0x41e80D768BC9eB7646Fb63eC9bd38e77331d60e2";

async function main() {
  const factory = await hre.ethers.getContractFactory("Token");
  const contract = await factory.deploy(tokenName, tokenSymbol);

  await contract.deployed().then((contract) => {
    console.log(
      `${tokenName} contract deployed and mined to: ${contract.address}`
    );
  });

  // verify contract
  try {
    await hre.run("verify:verify", {
      address: contract.address,
      constructorArguments: [tokenName, tokenSymbol],
    });
  } catch (err) {
    console.log(err);
  }

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
