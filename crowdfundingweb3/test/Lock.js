
describe("CrowdFunding", function () {
  async function deployOneYearLockFixture() {

    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("CrowdFunding");
    const lock = await Lock.deploy();

    return { lock, owner, otherAccount };
  }
});
