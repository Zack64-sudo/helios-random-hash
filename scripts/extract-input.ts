import fs from "fs";
import path from "path";
import hre from "hardhat";

async function main() {
  const contractName = "RandomHashRecorder";
  const artifact = await hre.artifacts.readArtifact(contractName);

  const output = {
    contractName,
    abi: artifact.abi,
    bytecode: artifact.bytecode,
  };

  const outputPath = path.join(__dirname, "../verify/verify-input.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`✅ ABI and bytecode saved to ${outputPath}`);
}

main();
