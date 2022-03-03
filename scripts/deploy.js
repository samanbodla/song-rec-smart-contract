const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const entryContractFactory = await hre.ethers.getContractFactory("EntryPortal");
    const entryContract = await entryContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.001"),
    });
    await entryContract.deployed();
  
    console.log("EntryPortal address: ", entryContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();