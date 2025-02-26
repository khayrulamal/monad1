const hre = require("hardhat");

async function main() {
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */
  const contract = await hre.ethers.deployContract("GMonad"/* ["Hello Swisstronik!!"]*/);

  await contract.waitForDeployment();
//  await contract.deployed();

  console.log(`Gmonad contract deployed to ${contract.target}`);


  await hre.run("verify:verify", {
    address: contract.address, // address of deployed contract
    constructorArguments: ["Hello Swisstronik!!"], // constructor arguments
  });


}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
