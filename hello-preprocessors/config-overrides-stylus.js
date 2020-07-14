// hello-preprocessors/config-overrides.js

const {
    override,
    addWebpackModuleRule
} = require("customize-cra");

module.exports = override(
    addWebpackModuleRule({
        test: /\.styl$/,
        exclude: /(node_modules)/,
        loaders: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {url: false}
            },
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: (loader) => [require('autoprefixer')()]
                }
            },
            'stylus-loader'
        ]
    }),
    addWebpackModuleRule({
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
        ]
    })
);