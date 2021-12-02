import hre from 'hardhat';
import { task } from 'hardhat/config';

task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const [address, balance] = await Promise.all([
      account.getAddress(),
      account.getBalance(),
    ]);

    const displayBalance = Number(hre.ethers.utils.formatUnits(balance, 18));
    console.log(address, displayBalance);
  }
});
