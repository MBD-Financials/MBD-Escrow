require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    polygon:{
      url:"https://rpc-mainnet.maticvigil.com",
      accounts:[process.env.MATIC_PRIVATE_KEY]

    }
  },
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGON_KEY
    }
  }
};
//0x666cFDbd5eE63150ced65b5842FDAF16D48e40AC