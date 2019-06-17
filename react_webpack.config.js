const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",

    output: {
        filename: '[name].[hash].js'
    },

    devServer: {
        contentBase: './dist',
        port: 9000
    },

    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },

    module: {
        rules: [
            // the 'transform-runtime' plugin tells Babel to
            // require the runtime instead of inlining it.
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            // '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}