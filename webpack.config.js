const {resolve} = require('path')
const webpackValidator = require('webpack-validator')
const DashboardPlugin = require('webpack-dashboard/plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')

module.exports = env => {
    const {ifDev, ifProd} = getIfUtils(env)
    const config = webpackValidator({
        context: resolve('src'),
        entry: './dartboard.js',
        output: {
            path: resolve('./dist'),
            filename: 'dartboard.js',
            library: 'Dartboard',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        devtool: ifProd('source-map', 'eval'),
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel', 'eslint'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                },
            ],
        },
        plugins: removeEmpty([
            ifDev(new DashboardPlugin())
        ]),
    })
    return config
}
