// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./SafeMath.sol";

contract EntryPortal {
    using SafeMath for uint256;
    uint256 totalEntries;
    uint256 private seed;

    event NewEntry(address indexed from, uint256 timestamp, string message);
    event Winner(address indexed from);

    struct Entry {
        address person;
        string message;
        uint256 timestamp;
    }

    Entry[] entries;

    mapping(address => uint256) public lastUser;

    constructor() payable {
        console.log("in the constructor!");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function enter(string memory _message) public {
         require(
            lastUser[msg.sender] + 30 seconds < block.timestamp,
            "Wait 30s"
        );
        lastUser[msg.sender] = block.timestamp;
        totalEntries = totalEntries.add(1);
        console.log("%s has appeared!", msg.sender);

        entries.push(Entry(msg.sender, _message, block.timestamp));

        seed = (block.difficulty + block.timestamp + seed) % 100;
        if (seed <= 50) {
            console.log("%s won!", msg.sender);
            emit Winner(msg.sender);


            uint256 prizeAmount = 0.0001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
        }
        emit NewEntry(msg.sender, block.timestamp, _message);
    }

    function getAllEntries() public view returns (Entry[] memory) {
        return entries;
    }

    function getEntries() public view returns (uint256) {
        console.log("You have %s total waves!", totalEntries);
        return totalEntries;
    }
}
