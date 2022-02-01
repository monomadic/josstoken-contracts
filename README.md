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
npx hardhat --network avax_testnet deployToken --token-name "JossToken" --token-symbol "JOSS"
npx hardhat --network avax_testnet verify "0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025" "JossToken" "JOSS"

# mint token
npx hardhat --network avax_testnet mintToken --token-address "0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025" --recipient-address "0xe729259c7C6A84c3994FB33f1F32cA9081be2e80" --amount 300000

# deploy factory
npx hardhat --network avax_testnet deployFactory --fee-to-setter "0xe729259c7C6A84c3994FB33f1F32cA9081be2e80"
```

- deploy account: `0xe729259c7C6A84c3994FB33f1F32cA9081be2e80`
- avax token: `0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025`
    - https://testnet.snowtrace.io/contract/0x8Fa5b4185808AeFD11b3a72C78E4b794BBb7a025
- UniswapV2Factory: `0x62a52483EB1DcB706054Ae6164f1221abE9f5aa8`
