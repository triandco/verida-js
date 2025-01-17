
const config: any = {
    environment: process.env.VERIDA_ENVIRONMENT || "testnet",
    environments: {
        local: {
            // For core development
            ceramicUrl: 'https://gateway-clay.ceramic.network/',
            defaultDatabaseServerUrl: "http://localhost:5000/",
            defaultMessageServerUrl: "http://localhost:5000/",
            schemaPaths: {
                '/': 'https://schemas.verida.io/',
                'https://schemas.verida.io/': 'https://schemas.testnet.verida.io/'
                //'https://schemas.verida.io/': 'http://localhost:5010/'
            }
        },
        testnet: {
            ceramicUrl: 'https://gateway-clay.ceramic.network/',
            defaultDatabaseServerUrl: "https://db.testnet.verida.io:5002/",
            defaultMessageServerUrl: "https://db.testnet.verida.io:5002/",
            schemaPaths: {
                '/': 'https://schemas.verida.io/',
                'https://schemas.verida.io/': 'https://schemas.testnet.verida.io/'
            }
        },
        /*mainnet: {
            storageServerUrl: "https://dataserver.mainnet.verida.io:5000/",
            messageServerUrl: "https://dataserver.mainnet.verida.io:5000/",
            schemaPaths: {
                '/': 'https://schemas.verida.io/'
            }
        },*/
    },
    vaultAppName: "Verida: Vault"
}

export default config
