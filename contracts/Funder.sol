//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Funder{
    uint public numberOfFunders;

    mapping(uint=>address) private funders;

    receive() external payable{}

    function transfer() external payable{
        funders[numberOfFunders] = msg.sender;
    }

    function withdraw(uint withdeawAmount) external {
        require(withdeawAmount <= 2000000000000000000,"You will have to withdraw less than this");
        payable(msg.sender).transfer(withdeawAmount);
    }
}