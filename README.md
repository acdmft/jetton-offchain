# TON JETTON smart contract

## Description

The contract is based on the [official jetton standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) and the [modern_jetton](https://github.com/EmelyanenkoK/modern_jetton) project.<br>
It defines the limit of the possible token emission using a constant: `const const::max_prev_supply = 4288;`, and the conditional expression executed in the `op::mint()` branch: `throw_unless(101, total_supply + jetton_amount <= const::max_prev_supply);`<br>
Made with [blueprint](https://github.com/ton-org/blueprint). The content of the contract is recorded offchain.<br>


## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.<br>


## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`
