const path = require('path');
require('dotenv').config();

module.exports = {
    env:{
        PRIVATE_KEY : process.env.PRIVATE_KEY,
        CONTRACT_ADDRESS : process.env.CONTRACT_ADDRESS
    },
    resolve: {
        fallback: {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        },
    },
};
