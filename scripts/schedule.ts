import { ethers } from "hardhat";
import { parseUnits } from "@ethersproject/units";
import chronosArtifact from "../chronos.json";

async function main() {
  const contractAddress = "0xYourDeployedContractAddress";
  const chronosAddress = "0x0000000000000000000000000000000000000830";

  const [signer] = await ethers.getSigners();
  const contract = await ethers.getContractAt("RandomHashRecorder", contractAddress, signer);
  const chronos = new ethers.Contract(chronosAddress, chronosArtifact.abi, signer);

  const iface = new ethers.utils.Interface(["function recordRandomHash()"]);
  const functionFragment = iface.getFunction("recordRandomHash");
  const targetAbiJson = `[${functionFragment.format("json")}]`;

  const frequency = 24 * 60 * 60;
  const expiration = 0;
  const gasLimit = 400000;
  const maxGasPrice = parseUnits("2", "gwei");
  const depositAmount = parseUnits("0.01", "ether");

  const tx = await chronos.createCron(
    contractAddress,
    targetAbiJson,
    "recordRandomHash",
    [],
    frequency,
    expiration,
    gasLimit,
    maxGasPrice,
    depositAmount
  );

  console.log("✅ Task Scheduled. Tx Hash:", tx.hash);
  console.log("⏳ Waiting for confirmation...");

  const receipt = await tx.wait();

  console.log("✅ Tx Confirmed. Hash:", receipt.transactionHash);
  console.log("📜 Logs:");

  const logInterface = new ethers.utils.Interface(chronosArtifact.abi);

  for (const log of receipt.logs) {
    try {
      const parsedLog = logInterface.parseLog(log);
      console.log(`• Event: ${parsedLog.name}`);
      console.log(parsedLog.args);
    } catch (err) {
      // Skip non-Chronos logs
    }
  }
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
