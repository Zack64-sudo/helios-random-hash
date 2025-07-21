import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "dotenv/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    heliosTestnet: {
      url: "https://testnet1.helioschainlabs.org",
      accounts: [process.env.PRIVATE_KEY || ""],
      chainId: 42000, // Ganti ke chainId Helios jika berbeda
    },
  },
  solidity: "0.8.28",
};

export default config;
