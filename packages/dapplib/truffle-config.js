require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note ridge public grace crime obscure gasp'; 
let testAccounts = [
"0x523dbeaa8dfe17f0c6e03d22c74824156bdf4b8d961ef886616b7de56de45684",
"0xcf9becade7d2cb3f2a0a78e6b22f0787de6db44cc039693573af36ffaad91eff",
"0x0b60b788e6df3df32bdd08b547a5d2bf40540cc93c99313a2173f0678d6d2602",
"0x9d4fd8764897afe6ab380711cf6ba8b072064f809f4dae9cb8153a6805d61503",
"0xa7d3668f46f72007adc7290c44cfdb992aaa1e11fe7830039f64ecda671c8343",
"0x236e8fbb73fcc939377e15bd56091285478cd8b85e99c97d8c892ea29a486932",
"0xb5e364076081c05c2019c21ffe9d3682f56c8061cd5a213a1345c0668b7df408",
"0x41d606c5fdcf1e156ea6a8d2546bd6304332f0d45c84dbe861fdd3015c85f473",
"0x205b878a8e22304130e88b25a5134835dd5577a0914c5b1aff1b43d138114d72",
"0xc54a1d227aa24f6275f71e3856746e9e7429539eda9e0129d2c3cc02187946a1"
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
