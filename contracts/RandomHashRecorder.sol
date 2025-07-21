// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract RandomHashRecorder {
    address public owner;
    bytes32[] public randomHashes;

    event RandomHashRecorded(bytes32 hash, uint timestamp);

    constructor() {
        owner = msg.sender;
    }

    function recordRandomHash() external {
        bytes32 hash = keccak256(abi.encodePacked(block.timestamp, block.prevrandao));
        randomHashes.push(hash);
        emit RandomHashRecorded(hash, block.timestamp);
    }

    function getAllHashes() external view returns (bytes32[] memory) {
        return randomHashes;
    }

    function getHashCount() external view returns (uint) {
        return randomHashes.length;
    }
}
