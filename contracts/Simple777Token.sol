pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "@openzeppelin/contracts/access/AccessControl.sol";
//https://docs.openzeppelin.com/contracts/2.x/access-control

/**
 * @title Simple777Token
 * @dev Very simple ERC777 Token example,
 * where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they
 * wish using `transfer` and other
 * `ERC20` or `ERC777` functions.
 * Based on
 * github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/examples/SimpleToken.sol
 */
contract Simple777Token is ERC777, Ownable {

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor (
      uint256 initialSupply
      //address[] memory defaultOperators
    ) public ERC777 (
      "Simple777Token",
      "S7",
      new address[](0)
      // defaultOperators
    ) {
        _mint(msg.sender, initialSupply, "", "");
    }
}
