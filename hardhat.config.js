require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//module.exports = {
//  solidity: "0.7.3",
//};
module.exports = {
  solidity: "0.6.7",
  //networks: {
  //  development: {
  //    url: '127.0.0.1:8454',
  //  }
  //}
  networks: {
    hardhat: {
      blockGasLimit: 12000000
    }
  }
};


