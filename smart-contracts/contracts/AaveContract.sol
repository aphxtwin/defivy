// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";

contract Misc {
  function supply(address pool, address token, address user, uint256 amount) public {
    IPool(pool).supply(token, amount, user, 0); 
  }
}