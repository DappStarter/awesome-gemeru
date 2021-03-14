require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note outside pumpkin grace neck equal gather'; 
let testAccounts = [
"0x876701bdb6b32a8e3e7fd4ca4796d64e596cc54ca9fd4802edf732f3fadfb4c9",
"0x4f5f89d8113e48fd20e638b5a1c8609dca8b6db4b6c464a783e79767180a26ff",
"0x030da69bc11fd518973f2fa276ad1bb6ffa450a39508f57698b4975e754b8301",
"0x22c095b3fe4efd2efd3a8c71fcde7163367e037df463506bbe5521ba329208b9",
"0xa15c4a439fbf6bb4b781c75423ba8c4f64fbf416f46905db41f98642328bb8ef",
"0xfd099aa4773a685a748aee017548807ed569c9ffc4a4edbc5f79fd0ead8319f2",
"0xd19569d17dcf9bc9754052c5fa13f9edb59f98104b4a4d5a8df21d2c3ed71e0d",
"0x165a9b150218e1cd6ac5723ce965600276f60646c9b5d58ee54fecee12dcb180",
"0xe6c6ec480f503a8ef0d1df17d2aabac4beff0f99b6c1bdfaa124f06b775ea878",
"0xf00ba0d10e4242ac44b0579a8b6caa4966590280d2e9cd5497c4157ce441ed36"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
