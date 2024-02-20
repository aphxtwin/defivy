import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "4_W7CkEwv6UBvTkXg6tMDoEbMqD4t5QD";
const SEPOLIA_PRIVATE_KEY = "3b02f56eaa1524171fb627b1534c82420f0a2e6e1db77ab6c74adbfe7bd9176d"

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

export default config;
