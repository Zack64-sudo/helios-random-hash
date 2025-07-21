const hre = require("hardhat");

async function main() {
  const Recorder = await hre.ethers.getContractFactory("RandomHashRecorder");
  const recorder = await Recorder.deploy();
  await recorder.deployed();
  console.log("Deployed to:", recorder.address);
}

main();
