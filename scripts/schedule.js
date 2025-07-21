const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const contractAddress = "0xYourDeployedContractHere";
  const iface = new ethers.utils.Interface(["function recordRandomHash()"]);
  const calldata = iface.encodeFunctionData("recordRandomHash");

  const signer = (await ethers.getSigners())[0];
  const chronos = await ethers.getContractAt("IChronos", "0x0000000000000000000000000000000000000830", signer);

  const interval = 24 * 60 * 60;
  const startTime = Math.floor(Date.now() / 1000) + 60;

  const tx = await chronos.schedule(contractAddress, 0, calldata, startTime, {
    value: ethers.utils.parseEther("0.01")
  });

  console.log("Scheduled! Tx hash:", tx.hash);
}

main();
