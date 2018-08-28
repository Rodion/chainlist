module.exports = {
     // See <http://truffleframework.com/docs/advanced/configuration>
     // to customize your Truffle configuration!
     networks: {
          ganache: {
               host: "localhost",
               port: 7545,
               network_id: "5778" // Match any network id
          },
          chainskills: {
            host: "localhost",
            port: 8545,
            network_id: "4224",
            gas: 4700000
          },
          rinkeby: {
            host: "localhost",
            port: 8545,
            network_id: "4", //rinkeby test network
            gas: 4700000,
            gasPrice: 57000000000,
            from: "0xb4e46f6a5204487162660c0657ae20846f47daf6"
          },
          live: {
            host: "localhost",
            port: 8545,
            network_id: "1",
            gas: 4700000,
            gasPrice: 57000000000,
            from: "0x2Ee63e50d0303001CE93e5231B81a79f678B955B"
          }
     }
};
