
## Song Recommendation Smart Contract

This is the smart contract for this [song recommendation portal](https://github.com/samanbodla/song-rec-portal)

### Description
The contract contains three functions:
 - Enter() which saves each entry to the blockchain and can randomly send back some ether to the user.
 - GetAllEntries() which returns all the entries.
 - getEntries() which returns the number of entries.
 
 The development environment used is Hardhat. To deploy to the Rinkeby test network, Alchemy was used. 


To test locally
```
npx hardhat run scripts/run.js
```
To deploy to rinkeby
```
npx hardhat run scripts/deploy.js --network rinkeby
```
