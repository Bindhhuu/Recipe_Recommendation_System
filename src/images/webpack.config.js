// webpack.config.js
const path = require('path');

module.exports = {
    // ... your existing configuration
    resolve: {
        fallback: {
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            stream: require.resolve('stream-browserify'),
            util: require.resolve('util/'),
            zlib: require.resolve('browserify-zlib'),
            url: require.resolve('url/'),
            assert: require.resolve('assert/')
        }
    }
};
