require("@nomicfoundation/hardhat-toolbox");
//import "@nomicfoundation/hardhat-toolbox-viem";

module.exports = {
  defaultNetwork: "monad",
  solidity: "0.8.20",
  networks: {
    monad: {
      url: "https://testnet-rpc.monad.xyz",
      chainId: 10143,
      accounts: ["0x"], // Replace with your actual private key
    },
  },



sourcify: {
        enabled: true,
        apiUrl: "https://sourcify-api-monad.blockvision.org",
        browserUrl: "https://testnet.monadexplorer.com/"
    },
    // To avoid errors from Etherscan
    etherscan: {
        enabled: false,
    },




};
