'use strict';
const webpack = require('webpack');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ENV = process.env.NODE_ENV
const PHPC = JSON.parse(process.env.PHP_CONFIG)

let plugins = [
    new webpack.optimize.DedupePlugin(),
    new CommonsChunkPlugin(
        /* chunkName= */"vendor", 
        /* filename= */"vendor.bundle.js"
    ),
];
if ('production' === ENV) {
    plugins = plugins.concat([
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('production'),
            '__DEVTOOLS__': false
          }
        }),
        new UglifyJsPlugin({
            compress: { warnings: false}
        }),
    ]);
}

module.exports = {
//	devtool: 'sourcemap',
	entry: {
            main: "./src/entry.js",
            vendor: ['react'].concat(PHPC.webpackVendor)
        },
	output: {
            filename: "bundle.js",
            path: __dirname + "/assets" ,
            publicPath: PHPC.assetsRoot,
            chunkFilename: "[id].[hash].bundle.js"
	},
        node: {
            fs: "empty"
        },
        resolve: {
            extensions: ['','.js','.jsx'],
            alias: {
                "react": __dirname + '/node_modules/react'
            }
        },
        resolveLoader: {
            root: __dirname + '/node_modules'
        },
	module: {
	    loaders: [
                  { 
                    test: /(.js|.jsx)$/, 
                    exclude: /node_modules/,
                    loader: "babel-loader", 
                    query:{
                        cacheDirectory:true, 
                    } 
                  },
                  { test: /\.(otf|eot|svg|ttf|woff)/, loader: 'url-loader?limit=8192' }
	    ]
	},
	plugins: plugins
};
