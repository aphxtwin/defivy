import { ethers } from "hardhat";

async function main() {

  // Deploy the contract 
  const deposit = await ethers.deployContract('DepositContract');
  await deposit.waitForDeployment();

  const contractAddress = await deposit.getAddress();
  const depositedAmount = ethers.parseEther('0.0005');
  const [owner] = await ethers.getSigners();

  
  const transaction = await owner.sendTransaction({
    to: contractAddress,
    value: depositedAmount
  });
  console.log("transaction:", transaction.hash);

  const receipt = await transaction.wait();

  if (receipt && receipt.status === 1) {
    console.log("Transaction succeeded");
  } else if (receipt && receipt.status === 0) {
    console.log("Transaction failed");
  } else {
    console.log("Transaction status unknown");

  }

  console.log("balance:", await deposit.getContractBalance());


  // Now Withdraw the funds

  const withdrawTransaction = await deposit.withdraw(ethers.parseEther('0.0003'));

  console.log("withdrawTransaction:", withdrawTransaction.hash);

  const withdrawReceipt = await withdrawTransaction.wait();

  if (withdrawReceipt && withdrawReceipt.status === 1) {
    console.log("Withdraw Transaction succeeded| New Balance =>", await deposit.getContractBalance());
    
  } else if (withdrawReceipt && withdrawReceipt.status === 0) {
    console.log("Withdraw Transaction failed");
  } else {
    console.log("Withdraw Transaction status unknown");

  }


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });