require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv",
      accounts: [
        "542972ccc1eb1c12462193110ae8a3f3c3bb1d9e8fc697a77f300838f0f830e9",
      ],
    },
  },
};
