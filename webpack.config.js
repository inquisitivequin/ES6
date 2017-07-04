const path = require('path');
const webpack = require('webpack');

const config = {
	entry: './source/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin({

      })
	],
	devServer: {
		hot: true
	}
}

module.exports = config;