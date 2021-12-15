import { deployFactory } from './lib/deployFactory';
import { printSigner } from './lib/info';

async function main() {
  const feeToSetter: string = await printSigner();
  let factoryAddress = await deployFactory(feeToSetter);
  console.log("factoryAddress:", factoryAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
