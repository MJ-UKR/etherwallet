"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.etherscanNode = require("./nodeHelpers/etherscan");
nodes.nodeTypes = {
    CLO: "CLO",
    CLOT: "Testnet CLO",
    ETH: "ETH",
    ETC: "ETC",
    ETCT: "Testnet ETC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    PIRL: "PIRL",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
    ETSC: "ETSC",
    MUSIC: "MUSIC",
    ESN: "ESN",
    AKA: "AKA",
    Custom: "CUSTOM ETH"
};
nodes.tldTypes = {
    ETH: ".eth",
    ETC: ".etc",
    Ropsten: ".eth",
    Kovan: ".eth",
    Rinkeby: ".eth",
    RSK: ".rsk"
};

nodes.ensNodeTypes = [
    nodes.nodeTypes.ETH,
    nodes.nodeTypes.Ropsten,
    nodes.nodeTypes.ETC
];
nodes.customNodeObj = {
    name: "CUS",
    blockExplorerTX: "",
    blockExplorerAddr: "",
    type: nodes.nodeTypes.Custom,
    eip155: false,
    chainId: "",
    tokenList: [],
    abiList: [],
    service: "Custom",
    lib: {
        SERVERURL: null,
        pendingPosts: null,
        config: null,
        getCurrentBlock: null,
        getBalance: null,
        getTransaction: null,
        getTransactionData: null,
        sendRawTx: null,
        getEstimatedGas: null,
        getEthCall: null,
        queuePost: null,
        post: null
    }
};

nodes.alternativeBalance = {
    ETH: {
        balance: "Loading",
        // eth_ethscan node rate limiting issue??
        node: "eth_ethscan",
        symbol: "ETH"
    },
    ETC: {
        balance: "Loading",
        node: "etc_ethereumcommonwealth_geth",
        symbol: "ETC"
    },
    CLO: {
        balance: "Loading",
        node: "clo_mainnet",
        symbol: "CLO"
    },
    UBQ: {
        balance: "Loading",
        node: "ubq",
        symbol: "UBQ"
    },
    EXP: {
        balance: "Loading",
        node: "exp",
        symbol: "EXP"
    }
};

nodes.nodeList = {
    etc_ethereumcommonwealth_geth: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "Ethereum Commonwealth Geth",
        lib: new nodes.customNode("https://etc-geth.0xinfra.com/", "")
    },
    etc_ethereumcommonwealth_parity: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "Ethereum Commonwealth Parity",
        lib: new nodes.customNode("https://etc-parity.0xinfra.com/", "")
    },
    etc_gastracker: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "gastracker.io",
        lib: new nodes.customNode("https://web3.gastracker.io/", "")
    },
    etc_ethereumclassic_network: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "ETC Cooperative",
        lib: new nodes.customNode("https://ethereumclassic.network/", "")
    },
    etc_testnet: {
        name: "ETC Testnet",
        type: nodes.nodeTypes.ETCT,
        blockExplorerTX: "http://mordenexplorer.ethertrack.io/tx/[[txHash]]",
        blockExplorerAddr:
            "http://mordenexplorer.ethertrack.io/addr/[[address]]",
        eip155: true,
        chainId: 62,
        tokenList: [],
        abiList: [],
        service: "ethertrack.io",
        lib: new nodes.customNode("https://morden.eos-classic.io", "")
    },
    clo_mainnet: {
        name: "Callisto - CLO",
        blockExplorerTX: "https://explorer2.callisto.network/tx/[[txHash]]",
        blockExplorerAddr:
            "https://explorer2.callisto.network/addr/[[address]]",
        type: nodes.nodeTypes.CLO,
        eip155: true,
        chainId: 820,
        tokenList: [],
        abiList: [],
        service: "Callisto.network",
        lib: new nodes.customNode("https://clo-geth.0xinfra.com/", "")
    },
    clo_testnet3: {
        name: "CLO Testnet 3.0",
        blockExplorerTX:
            "https://explorer-testnet.callisto.network/tx/[[txHash]]",
        blockExplorerAddr:
            "https://explorer-testnet.callisto.network/addr/[[address]]",
        type: nodes.nodeTypes.CLOT,
        eip155: true,
        chainId: 7919,
        tokenList: [],
        abiList: [],
        service: "Callisto.network",
        lib: new nodes.customNode("https://clo-testnet3.0xinfra.com/", "")
    },
    eth_mew: {
        name: "ETH",
        blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.ETH,
        eip155: true,
        chainId: 1,
        tokenList: require("./tokens/ethTokens.json"),
        abiList: require("./abiDefinitions/ethAbi.json"),
        service: "myetherwallet.com",
        lib: new nodes.customNode("https://api.myetherwallet.com/eth", "")
    },
    eth_ethscan: {
        name: "ETH",
        blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.ETH,
        eip155: true,
        chainId: 1,
        tokenList: require("./tokens/ethTokens.json"),
        abiList: require("./abiDefinitions/ethAbi.json"),
        service: "Etherscan.io",
        lib: new nodes.etherscanNode("api")
    },
    eth_infura: {
        name: "ETH",
        blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.ETH,
        eip155: true,
        chainId: 1,
        tokenList: require("./tokens/ethTokens.json"),
        abiList: require("./abiDefinitions/ethAbi.json"),
        service: "infura.io",
        lib: new nodes.infuraNode("https://mainnet.infura.io/mew")
    },
    rop_mew: {
        name: "Ropsten",
        type: nodes.nodeTypes.Ropsten,
        blockExplorerTX: "https://ropsten.etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://ropsten.etherscan.io/address/[[address]]",
        eip155: true,
        chainId: 3,
        tokenList: require("./tokens/ropstenTokens.json"),
        abiList: require("./abiDefinitions/ropstenAbi.json"),
        service: "MyEtherWallet",
        lib: new nodes.customNode("https://api.myetherapi.com/rop", "")
    },
    rop_infura: {
        name: "Ropsten",
        blockExplorerTX: "https://ropsten.etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://ropsten.etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.Ropsten,
        eip155: true,
        chainId: 3,
        tokenList: require("./tokens/ropstenTokens.json"),
        abiList: require("./abiDefinitions/ropstenAbi.json"),
        service: "infura.io",
        lib: new nodes.infuraNode("https://ropsten.infura.io/mew")
    },
    kov_ethscan: {
        name: "Kovan",
        type: nodes.nodeTypes.Kovan,
        blockExplorerTX: "https://kovan.etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://kovan.etherscan.io/address/[[address]]",
        eip155: true,
        chainId: 42,
        tokenList: require("./tokens/kovanTokens.json"),
        abiList: require("./abiDefinitions/kovanAbi.json"),
        service: "Etherscan.io",
        lib: new nodes.etherscanNode("kovan")
    },
    rin_ethscan: {
        name: "Rinkeby",
        type: nodes.nodeTypes.Rinkeby,
        blockExplorerTX: "https://rinkeby.etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://rinkeby.etherscan.io/address/[[address]]",
        eip155: true,
        chainId: 4,
        tokenList: require("./tokens/rinkebyTokens.json"),
        abiList: require("./abiDefinitions/rinkebyAbi.json"),
        service: "Etherscan.io",
        lib: new nodes.etherscanNode("rinkeby")
    },
    rin_infura: {
        name: "Rinkeby",
        blockExplorerTX: "https://rinkeby.etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://rinkeby.etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.Rinkeby,
        eip155: true,
        chainId: 4,
        tokenList: require("./tokens/rinkebyTokens.json"),
        abiList: require("./abiDefinitions/rinkebyAbi.json"),
        service: "infura.io",
        lib: new nodes.infuraNode("https://rinkeby.infura.io/mew")
    },
    rsk: {
        name: "RSK",
        blockExplorerTX: "https://explorer.rsk.co/tx/[[txHash]]",
        blockExplorerAddr: "https://explorer.rsk.co/addr/[[address]]",
        type: nodes.nodeTypes.RSK,
        eip155: true,
        chainId: 31,
        tokenList: require("./tokens/rskTokens.json"),
        abiList: require("./abiDefinitions/rskAbi.json"),
        estimateGas: true,
        service: "GK2.sk",
        lib: new nodes.customNode("https://rsk-test.gk2.sk/", "")
    },
    exp: {
        name: "EXP",
        blockExplorerTX: "http://www.gander.tech/tx/[[txHash]]",
        blockExplorerAddr: "http://www.gander.tech/address/[[address]]",
        type: nodes.nodeTypes.EXP,
        eip155: true,
        chainId: 2,
        tokenList: require("./tokens/expTokens.json"),
        abiList: require("./abiDefinitions/expAbi.json"),
        estimateGas: true,
        service: "Expanse.tech",
        lib: new nodes.customNode("https://node.expanse.tech/", "")
    },
    music: {
        name: "MUSIC",
        blockExplorerTX: "https://explorer.musicoin.org/tx/[[txHash]]",
        blockExplorerAddr: "https://explorer.musicoin.org/account/[[address]]",
        type: nodes.nodeTypes.MUSIC,
        eip155: true,
        chainId: 7762959,
        tokenList: require("./tokens/musicTokens.json"),
        abiList: require("./abiDefinitions/musicAbi.json"),
        service: "musicoin.org",
        lib: new nodes.customNode("https://mcdnode.trustfarm.io/api", "")
    },
    ubq: {
        name: "UBQ",
        blockExplorerTX: "https://ubiqscan.io/en/tx/[[txHash]]",
        blockExplorerAddr: "https://ubiqscan.io/en/address/[[address]]",
        type: nodes.nodeTypes.UBQ,
        eip155: true,
        chainId: 8,
        tokenList: require("./tokens/ubqTokens.json"),
        abiList: require("./abiDefinitions/ubqAbi.json"),
        estimateGas: true,
        service: "ubiqscan.io",
        lib: new nodes.customNode("https://pyrus2.ubiqscan.io", "")
    },
    pirl: {
        name: "PIRL",
        blockExplorerTX:
            "https://poseidon.pirl.io/explorer/transaction/[[txHash]]",
        blockExplorerAddr:
            "https://poseidon.pirl.io/explorer/address/[[address]]",
        type: nodes.nodeTypes.PIRL,
        eip155: true,
        chainId: 3125659152,
        tokenList: require("./tokens/pirlTokens.json"),
        abiList: require("./abiDefinitions/pirlAbi.json"),
        estimateGas: true,
        service: "pirl.io",
        lib: new nodes.customNode("https://wallrpc.pirl.io", "")
    },
    poa: {
        name: "POA",
        blockExplorerTX: "https://poaexplorer.com/tx/[[txHash]]",
        blockExplorerAddr: "https://poaexplorer.com/account/[[address]]",
        type: nodes.nodeTypes.POA,
        eip155: true,
        chainId: 99,
        tokenList: [],
        abiList: [],
        estimateGas: true,
        service: "poa.infura.io",
        lib: new nodes.infuraNode("https://poa.infura.io", "")
    },
    tomo: {
        name: "TOMO",
        blockExplorerTX: "https://explorer.tomocoin.io/#/tx/[[txHash]]",
        blockExplorerAddr: "https://explorer.tomocoin.io/#/address/[[address]]",
        type: nodes.nodeTypes.TOMO,
        eip155: true,
        chainId: 40686,
        tokenList: [],
        abiList: [],
        estimateGas: true,
        service: "core.tomocoin.io",
        lib: new nodes.customNode("https://core.tomocoin.io", "")
    },
    ella: {
        name: "ELLA",
        blockExplorerTX: "https://explorer.ellaism.org/tx/[[txHash]]",
        blockExplorerAddr: "https://explorer.ellaism.org/addr/[[address]]",
        type: nodes.nodeTypes.ELLA,
        eip155: true,
        chainId: 64,
        tokenList: [],
        abiList: [],
        estimateGas: true,
        service: "ellaism.org",
        lib: new nodes.customNode("https://jsonrpc.ellaism.org", "")
    },
    aka: {
        name: "AKA",
        blockExplorerTX: "https://akroma.io/explorer/transaction/[[txHash]]",
        blockExplorerAddr: "https://akroma.io/explorer/address/[[address]]",
        type: nodes.nodeTypes.AKA,
        eip155: true,
        chainId: 200625,
        tokenList: require("./tokens/akromaTokens.json"),
        abiList: require("./abiDefinitions/akromaAbi.json"),
        estimateGas: true,
        service: "akroma.io",
        lib: new nodes.customNode("https://rpc.akroma.io", "")
    }
};
module.exports = nodes;
