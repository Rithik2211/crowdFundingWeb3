const hre = require("hardhat");

async function main() {

  const crowdfunding= await hre.ethers.deployContract("CrowdFunding");
  await crowdfunding.waitForDeployment();

  console.log(`Crowdfunding deployed to ${crowdfunding.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
