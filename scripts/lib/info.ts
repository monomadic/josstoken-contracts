import hre from 'hardhat';

export async function printSigner(): Promise<string> {
  // console.log("HARDHAT_NETWORK:", hre.network);
  const [owner] = await hre.ethers.getSigners();

  owner
    .getBalance()
    .then((balance: any) =>
      console.log("Balance:", hre.ethers.utils.formatUnits(balance, 18))
    );

  console.log("Using Signer:", owner.address);

  return owner.address;
}
