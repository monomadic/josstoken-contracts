## Setup

Make sure you have a valid polygon private key and blockchain explorer (eg polygonscan) api key in your `secret.json`. An example is provided in `secret.example.json`.

``` shell
yarn
yarn testnet:deploy
```

## Deploys

### Avalance Testnet

```bash
# deploy token
npx hardhat --network avax_testnet deployToken \
    --token-name "JossToken" \
    --token-symbol "JOSS"
npx hardhat --network avax_testnet verify "0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025" "JossToken" "JOSS"

# mint token
npx hardhat --network avax_testnet mintToken \
    --token-address "0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025" \
    --recipient-address "0xe729259c7C6A84c3994FB33f1F32cA9081be2e80" \
    --amount 300000

npx hardhat --network avax_testnet deployToken \
    --token-name "USDC Coin" \
    --token-symbol "USDC"

npx hardhat --network avax_testnet mintToken \
    --token-address "0x135a7E3deBB6a71B85D1FB548e4bd2EfC218E3d0" \
    --recipient-address "0xe729259c7C6A84c3994FB33f1F32cA9081be2e80" \
    --amount 300000


# mint WAVAX
npx hardhat --network avax_testnet deployToken --token-name "Wrapped AVAX" --token-symbol "WAVAX"

# deploy factory
npx hardhat --network avax_testnet deployFactory \
    --fee-to-setter "0xe729259c7C6A84c3994FB33f1F32cA9081be2e80"
npx hardhat --network avax_testnet verify \
    "0x62a52483EB1DcB706054Ae6164f1221abE9f5aa8" \
    "0xe729259c7C6A84c3994FB33f1F32cA9081be2e80"

# deploy router (periphery)
npx hardhat --network avax_testnet deployRouter \
    --factory-address "0x62a52483EB1DcB706054Ae6164f1221abE9f5aa8" \
    --weth-address "0x1C226af1aB4b29e53BfDA6ffF34A1894BAeF6c9F"

# add pair

```

- deploy account: `0xe729259c7C6A84c3994FB33f1F32cA9081be2e80`
- JOSS token: `0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025`
    - https://testnet.snowtrace.io/address/0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025
- WAVAX token: `0x1C226af1aB4b29e53BfDA6ffF34A1894BAeF6c9F`
- USDC token: 0x135a7E3deBB6a71B85D1FB548e4bd2EfC218E3d0
- UniswapV2Factory: `0x62a52483EB1DcB706054Ae6164f1221abE9f5aa8`
    - https://testnet.snowtrace.io/address/0x62a52483EB1DcB706054Ae6164f1221abE9f5aa8
- UniswapV2Router: `0x30e34C412E9111CCae4d9Dc2e21248Fc8C9766E6`
    - https://testnet.snowtrace.io/address/0x92c043B5F8eD5122881073d0b5c4A05AF4839A3C#code

- JOSS-WAVAX pair: `0x5FbDB2315678afecb367f032d93F642f64180aa3`
