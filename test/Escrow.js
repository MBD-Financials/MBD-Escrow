const {
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Ecrow", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
    async function deployEscrow() {
      
      const [owner, otherAccount] = await ethers.getSigners();
      const Escrow = await ethers.getContractFactory("Escrow");
      const escrow = await Escrow.deploy();
      
      return { escrow, owner, otherAccount };

    }

  describe("Deployment", function () {
    it("Owner should be equal to owner of hardhat test", async function () {
      const { escrow, owner, otherAccount } = await loadFixture(deployEscrow);
      expect(await escrow.owner()).to.equal(owner.address);
      // expect(await lock.unlockTime()).to.equal(unlockTime);
    });


    it("Should create a contract", async function () {
      const { escrow, owner, otherAccount } = await loadFixture(deployEscrow);
      const created =  await escrow.createContract(otherAccount.address, ethers.utils.parseEther("1"));
      await created.wait(); 
      const totalEscrows = await escrow.totalEscrows();
      const createdEscrow = await escrow.escrows(totalEscrows - 1);
      expect(totalEscrows).to.equal(1);
      expect(createdEscrow.assignor).to.equal(owner.address);
      expect(createdEscrow.assignee).to.equal(otherAccount.address);
      expect(createdEscrow.amount).to.equal(ethers.utils.parseEther("1"));
      expect(createdEscrow.start).to.equal(false);
      expect(createdEscrow.completed).to.equal(false);
    });

    it("Should start a contract", async function () {
        const { escrow, owner, otherAccount } = await loadFixture(deployEscrow);

        const created =  await escrow.createContract(otherAccount.address, ethers.utils.parseEther("1"));
        await created.wait(); 

        const totalEscrows = await escrow.totalEscrows();
        
        const start =  await escrow.startContract(totalEscrows-1,{value: ethers.utils.parseEther("1")});
        await start.wait(); 
        
        const createdEscrow = await escrow.escrows(totalEscrows - 1);
        expect(totalEscrows).to.equal(1);
        expect(createdEscrow.assignor).to.equal(owner.address);
        expect(createdEscrow.assignee).to.equal(otherAccount.address);
        expect(createdEscrow.amount).to.equal(ethers.utils.parseEther("1"));
        expect(createdEscrow.start).to.equal(true);
        expect(createdEscrow.completed).to.equal(false);
    });

    it("Should Revert start a contract", async function () {
      const { escrow, owner, otherAccount } = await loadFixture(deployEscrow);

      const created =  await escrow.createContract(otherAccount.address, ethers.utils.parseEther("1"));
      await created.wait(); 
      
      const totalEscrows = await escrow.totalEscrows();

      await expect(escrow.connect(otherAccount).startContract(totalEscrows-1),{value: ethers.utils.parseEther("1")}).to.be.revertedWith("You are not creator of this contract");
      
     
      //
    });

    it("Should end a contract", async function () {
      const { escrow, owner, otherAccount } = await loadFixture(deployEscrow);

      const created =  await escrow.createContract(otherAccount.address, ethers.utils.parseEther("1"));
      await created.wait(); 

      const totalEscrows = await escrow.totalEscrows();
      
      const start =  await escrow.startContract(totalEscrows-1,{value: ethers.utils.parseEther("1")});
      await start.wait(); 

      const end =  await escrow.endContract(totalEscrows-1);
      await end.wait(); 
      
      const createdEscrow = await escrow.escrows(totalEscrows - 1);

      expect(totalEscrows).to.equal(1);
      expect(createdEscrow.assignor).to.equal(owner.address);
      expect(createdEscrow.assignee).to.equal(otherAccount.address);
      expect(createdEscrow.amount).to.equal(ethers.utils.parseEther("1"));
      expect(createdEscrow.start).to.equal(true);
      expect(createdEscrow.completed).to.equal(true);
  });

  it("Should withdraw balance", async function () {
    const { escrow, owner, otherAccount } = await loadFixture(deployEscrow);

    const created =  await escrow.createContract(otherAccount.address, ethers.utils.parseEther("1"));
    await created.wait(); 

    const totalEscrows = await escrow.totalEscrows();
    
    const start =  await escrow.startContract(totalEscrows-1,{value: ethers.utils.parseEther("1")});
    await start.wait(); 

    const end =  await escrow.endContract(totalEscrows-1);
    await end.wait(); 
    
  

    const initialBalance = await ethers.provider.getBalance(owner.address);
    const commission = await escrow.companyProfit();
    const withdraw =  await escrow.withdrawCompleteCommission();
    await withdraw.wait(); 

    const newBalance = await ethers.provider.getBalance(owner.address);
    const expectedBalance = initialBalance.add(commission);
    
    expect(newBalance).to.equal(expectedBalance);
});

  });
});
