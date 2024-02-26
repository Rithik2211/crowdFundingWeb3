require('dotenv').config();

module.exports = {
    env:{
        CONTRACT_ADDRESS : process.env.CONTRACT_ADDRESS
    },
    resolve: {
        fallback: {
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"), 
        "zlib": require.resolve("browserify-zlib"),
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        },
    },
};
