// Import the required libraries
import { expect } from "chai";
import { ethers } from 'hardhat';


describe("Deposit", function() {
    it("should deposit correctly", async function() {
        // this deploys a new instance of a contract
        const contract = await ethers.getContractFactory("DepositContract");
        const depositContract = await contract.deploy();
    });
});