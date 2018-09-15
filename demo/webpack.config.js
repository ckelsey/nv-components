'use strict'
const path = require('path')
const env = process.env.NODE_ENV || 'production'
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    mode: 'production',
    context: path.resolve(__dirname),
    entry: {
        app: './src/main.ts'
    },
    output: {
        filename: 'demo.js',
        path: path.resolve(__dirname)
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.ts', '.js', '.vue', '.json', '.html']
    },
    optimization: {
        minimize: env === 'production'
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
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: "babel-loader!ts-loader"
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