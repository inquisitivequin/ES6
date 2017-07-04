const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './source/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.[hash].js'
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

      }),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	],
	devServer: {
		hot: true,
		contentBase: path.join(__dirname,"build"),
		compress: true
	}
}

module.exports = config;