// Import necessary modules from Hardhat
const hre = require("hardhat");

// Function to send a transaction using the provided signer, destination, data, and value
const sendTransaction = async (signer, destination, data, value) => {
  // Construct and sign transaction with provided data
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data,
    value,
  });
};

async function main() {
  // Address of the deployed contract
  const contractAddress = "0x26fa1Fd845c0baBF198469fC1982859CD35ad827";

  // Get the signer (your account)
  const [signer] = await hre.ethers.getSigners();

  // Create a contract instance
  const contractFactory = await hre.ethers.getContractFactory("MyToken");
  const contract = contractFactory.attach(contractAddress);

  // Send a transaction to execute a function in the contract
  const functionName = "transfer";
  const functionArgs = ["0xFA359D1d3B384903cd11F2eA058a6Ac87ceA292B",  "10000000000000000000"];

  // Encode the function call data
  const data = contract.interface.encodeFunctionData(functionName, functionArgs);

  // Send the transaction
  const transaction = await sendTransaction(signer, contractAddress, data, 0);

  await transaction.wait();

  // It should return a TransactionResponse object
  console.log("Transaction Response: ", transaction);
}

// Using async/await pattern to handle errors properly
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
