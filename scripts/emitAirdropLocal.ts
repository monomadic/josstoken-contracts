import hre from 'hardhat';

async function main() {
  const factory = await hre.ethers.getContractFactory("Token");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
