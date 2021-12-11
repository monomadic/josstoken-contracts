import hre from 'hardhat';

const tokenName = "JossToken";
const tokenSymbol = "JOSS";
const totalSupply = 300000000;
const decimalPlaces = 18;

async function mintJoss(mintRecipient: string): Promise<string> {
  const factory = await hre.ethers.getContractFactory("Token");
  const contract = await factory.deploy(tokenName, tokenSymbol);

  await contract.deployed().then((contract) => {
    console.log(
      `${tokenName} contract deployed and mined to: ${contract.address}`
    );
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
