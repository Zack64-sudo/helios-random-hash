import { ethers } from "hardhat";

async function main() {
  const Recorder = await ethers.getContractFactory("RandomHashRecorder");
  const recorder = await Recorder.deploy();
  await recorder.deployed();

  console.log("✅ Deployed to:", recorder.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
