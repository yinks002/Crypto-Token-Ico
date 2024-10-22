// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TheYinksToken is ERC20{
    constructor() ERC20("TheYinksToken", "TYT"){
        _mint(msg.sender, 10000000000000000000000000);
    }
}
