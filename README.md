
### This is the smart contract for the following song recommendation portal:
https://github.com/samanbodla/song-rec-portal

### Description
The contract contains three functions:
 - Enter() which saves each entry to the blockchain and can randomly send back some ether to the user.
 - GetAllEntries() which returns all the entries.
 - getEntries() which returns the number of entries.
 
 The development environment used is hardhat. Alchemy was used to deploy to the Rinkeby test network. 



to deploy to rinkeby
```
npx hardhat run scripts/deploy.js --network rinkeby
```
to test locally
```
npx hardhat run scripts/run.js
```
