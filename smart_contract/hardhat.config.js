// https://eth-ropsten.alchemyapi.io/v2/iWaTjnIqVrVWF5rPLEvkKLH5vsFoijT2

require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/iWaTjnIqVrVWF5rPLEvkKLH5vsFoijT2',
      accounts: ['aeb46f3c1ef8029e7b6b9e59ff2b8512363e8d3c73aa953332e48de0bd329858']
    }
  }
};
