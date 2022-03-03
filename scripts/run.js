const main = async () => {
    // const [owner, randomPerson] = await hre.ethers.getSigners();
    const entryContractFactory = await hre.ethers.getContractFactory("EntryPortal");
    const entryContract = await entryContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1"),
    });
    await entryContract.deployed();

    console.log("Contract deployed to:", entryContract.address);

    let contractBalance = await hre.ethers.provider.getBalance(
        entryContract.address
      );
      console.log(
        "Contract balance:",
        hre.ethers.utils.formatEther(contractBalance)
      );


    const [_, randomPerson] = await hre.ethers.getSigners();
    waveTxn = await entryContract.connect(randomPerson).enter("https://open.spotify.com/track/3p6hnejEQYXkiTO1lAzVc0?si=a85ab3a3654a4756");
    await waveTxn.wait(); // Wait for the transaction to be mined

    contractBalance = await hre.ethers.provider.getBalance(entryContract.address);
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
  

    let allEntries = await entryContract.getAllEntries();
    console.log(allEntries);
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