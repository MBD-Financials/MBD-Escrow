const hre = require("hardhat");
const CONTRACT_ADDRESS = "0xB59A688a6032852B28F6f93c6C857C2d09037EB3"
async function main() {
    const contract = await hre.ethers.getContractAt("Escrow",CONTRACT_ADDRESS);

    const withdraw = await contract.withdrawCompleteCommission();
    const recipt = await withdraw.wait();
  
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
