import hre from "hardhat";
import { mintToken } from "./lib/mintToken";
import { deployFactory, createPair } from "./lib/deployFactory";

// the address allowed to change feeTo to a different address.
const mintRecipient = "0x41e80D768BC9eB7646Fb63eC9bd38e77331d60e2";
const feeToSetter = "0x41e80D768BC9eB7646Fb63eC9bd38e77331d60e2";

async function main() {
  let jossToken = await mintToken(
    "JossToken",
    "JOSS",
    300000000,
    mintRecipient
  );
  let usdcToken = await mintToken("USDCoin", "USDC", 1000000, mintRecipient);

  let factoryAddress = await deployFactory(feeToSetter);
  let usdcJossPair = await createPair(factoryAddress, usdcToken, jossToken);

  // // mint totalSupply and send to mintRecipient
  // let instance = factory.attach(contract.address);
  // await instance
  //   .mint(
  //     mintRecipient,
  //     hre.ethers.utils.parseUnits(totalSupply.toString(), decimalPlaces)
  //   )
  //   .then(() => console.log(`${totalSupply} minted to ${mintRecipient}.`));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
