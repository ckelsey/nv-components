const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        "nv-components": './pack.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'web_build/files')
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
                test: /\.(scss|css)$/,
                use: [
                    'css-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(json)$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.resolve(__dirname, 'dist/collection/assets/fonts/[name].[ext]')
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
}
