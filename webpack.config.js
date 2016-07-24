/* eslint-env node */

const path = require('path')

const config = {
    entry: path.join(__dirname, '/src/dartboard.js'),
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'dartboard.js',
        library: 'Dartboard',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        preloaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
        ],
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js'],
    },
    plugins: [],
}

module.exports = config
