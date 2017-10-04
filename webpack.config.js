/* jshint esversion: 6 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './main.ts',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.html'],
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /webpack\.config\.js$/,
            include: path.resolve(__dirname),
            loader: 'eslint-loader',
            options: {
                useEslintrc: false,
                emitWarning: true,
                emitError: true,
                failOnWarning: true,
                failOnError: true,
                baseConfig: 'webpack',
                rules: {
                    indent: ['error', 4]
                },
            },
        }, {
            // Javascript
            enforce: 'pre',
            test: /\.js$/,
            //include: path.resolve(__dirname, 'src'),
            loader: 'eslint-loader',
            options: {
                useEslintrc: false,
                emitWarning: false,
                emitError: true,
                failOnWarning: false,
                failOnError: true,
                baseConfig: 'angular',
                rules: {
                    indent: ['error', 4]
                },
                plugins: [
                    'angular',
                    'html',
                    'security',
                    'this',
                    'jquery',
                    'promise'
                ]
            },
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            // Typescript linting
            enforce: 'pre',
            test: /\.ts$/,
            loader: 'tslint-loader',
            options: {
                configuration: {
                    extends: [
                        "tslint:latest",
                        "codelyzer"
                    ],
                    rules: {
                        //quotemark: [true, 'single']
                    }
                },
                configFile: 'tslint-custom.json',
                emitErrors: true,
                failOnHint: true,
                typeCheck: true,
                tsConfigFile: 'tsconfig.json',
                formatter: 'verbose',
                formattersDirectory: 'node_modules/tslint/lib/formatters/',
            }
        }, {
            test: /\.ts$/,
            exclude: /node_modules/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true']
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader',
            ]
        }, {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader',
                'sass-loader',
                'resolve-url-loader',
                'sass-loader?sourceMap'
            ]
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Accountant',
            template: 'index.ejs' 
        }),
        new webpack.ProvidePlugin({
            Materialize: "materialize-css",
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './')
        )
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
        //publicPath: 'js'
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                secure: false
            }
        },
        hot: true,
        noInfo: false,
        quiet: false,
    }
};
