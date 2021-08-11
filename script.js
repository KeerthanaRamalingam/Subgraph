const axios = require('axios');

const main = async () => {
    try {
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
            {
                query: `
                {
                    
                    bundle(id: "1" ) {
                        ethPrice
                    }
                       
                   
                }`
            }
        );
        console.log(result.data.data.bundle);
    } catch (error) {
        console.log(error);
    }
}

main();