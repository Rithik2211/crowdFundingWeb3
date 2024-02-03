const { time,loadFixture,} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("CrowdFunding", function () {
  async function deployOneYearLockFixture() {

    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("CrowdFunding");
    const lock = await Lock.deploy();

    return { lock, owner, otherAccount };
  }
});
