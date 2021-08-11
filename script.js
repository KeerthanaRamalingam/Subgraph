const axios = require('axios');

const main = async () => {
    try {
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
            {
                query: `
                {
                    uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"){
                        pairCount
                        totalVolumeUSD
                        totalVolumeETH
                    }
                   
                }`
            }
        );
        console.log(result.data.data.uniswapFactory);
    } catch (error) {
        console.log(error);
    }
}

main();