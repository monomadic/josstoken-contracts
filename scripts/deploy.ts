import hre from "hardhat";

async function main() {
  // We get the contract to deploy
  const Contract = await hre.ethers.getContractFactory("Token");
  const deployed = await Contract.deploy();

  await deployed.deployed();

  console.log("Token contract deployed to:", deployed.address);

  // verify contract
  await hre.run("verify:verify", {
    address: deployed.address,
    constructorArguments: []
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
