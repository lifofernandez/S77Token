// require('@openzeppelin/test-helpers/configure')(
// { provider: web3.currentProvider, environment: 'truffle' });

const Web3 = require("web3");
const provider = new Web3.providers.HttpProvider(
  "http://localhost:8545"
);
const web3 = new Web3('http://');
web3.setProvider(provider);
require('@openzeppelin/test-helpers/configure')(
  {
//    provider: web3.currentProvider,
//    environment: 'hardhat'
  }
);


//const {
//  accounts,
//  contracts
//} = require('@openzeppelin/test-environment');

const {
//  BN,
//  constants,
//  expetEvent,
//  expetRevert,
  singletons
} = require('@openzeppelin/test-helpers');

async function main() {

  const [
    deployer,
    network, 
    accounts
  ] = await ethers.getSigners();

  if ( network === 'development' ) {
    // In a test environment an ERC777 token
    // requires deploying an ERC1820 registry
    await singletons.ERC1820Registry( accounts[0] );
  }

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  console.log(
    "Account balance:",
    (await deployer.getBalance()).toString()
  );

  const Simple777Token = await ethers.getContractFactory(
    "Simple777Token"
  );
  const token = await Simple777Token.deploy();
//  console.log("Token address:", token.address);
//
//  const Simple777Recipient = await ethers.getContractFactory(
//    "Simple777Recipient"
//  );

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

// const Simple777Token = artifacts.require('Simple777Token');
// const Simple777Recipient = artifacts.require('Simple777Recipient');
// 
// require('@openzeppelin/test-helpers/configure')(
// { provider: web3.currentProvider, environment: 'truffle' });
// 
// const { singletons } = require('@openzeppelin/test-helpers');
// 
// module.exports = async function (deployer, network, accounts) {
//   if (network === 'development') {
//     // In a test environment an ERC777 token
//     // requires deploying an ERC1820 registry
//     await singletons.ERC1820Registry(accounts[0]);
//   }
// 
//   await deployer.deploy(Simple777Token);
//   const token = await Simple777Token.deployed();
// 
//   await deployer.deploy(Simple777Recipient, token.address);
// };


