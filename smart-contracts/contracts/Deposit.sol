// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/access/Ownable.sol"; // Add import statement for Ownable contract

// is ownable means that the contract inherits from the OpenZeppelin Ownable contract
contract DepositContract { // Inherit from Ownable contract

    // Event declarations: this is useful to communicate to the external world that 
    // something has happened
    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    // this mapping to track each address balance
    mapping(address => uint256) public balances;

    // the function that receives deposits 
    receive() external payable {
        require(msg.value > 0, 'Deposit must be greater than 0');
        balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);

    }


    function withdraw(uint256 _amount) public {
        require(balances[msg.sender] >= _amount, 'Insufficient balance to withdraw');
        balances[msg.sender] -= _amount;    
        payable(msg.sender).transfer(_amount);
        emit Withdrawn(msg.sender, _amount);
    }

    // this function is used to get the contract total balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    } 

}
