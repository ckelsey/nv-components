'use strict'
const path = require('path')
const env = process.env.NODE_ENV || 'production'
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname),
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget: 'umd',
        // library: 'ckodeless',
        // umdNamedDefine: true
        // libraryTarget: 'window',
        // library: 'Docks'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.ts', '.js', '.vue', '.json', '.html']
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'babel-loader!ts-loader'
                    },
                    cssSourceMap: false,
                    transformToRequire: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.resolve(__dirname, 'dist/assets/[name].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.resolve(__dirname, 'dist/assets/fonts/[name].[ext]')
                }
            },
            {
                test: /\.ts$/,
                loader: "babel-loader!ts-loader",
                include: __dirname
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}