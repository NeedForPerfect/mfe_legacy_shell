const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');


const config = {
	mode: devMode ? 'development' : 'production',
	entry: {
		'vendor': './src/vendor.module.js',
		'app': './src/app.module.js'
	},
	devtool: devMode ? 'source-map': 'none',
	output: {
		filename: 'libs/[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				use: [ { loader: 'babel-loader'} ]
			},
			{

				test: /\.(scss)$/,
				use: [
					devMode ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			// for fixing of loading bootstrap icon files
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						outputPath: 'fonts/',
                        publicPath: '../fonts/',
						esModule: false,
					}
				}],
			},
			{
				test: /\.(eot|ttf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'fonts/',
                        publicPath: '../fonts/',
						esModule: false,
					}
				}],
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin()
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ExternalTemplateRemotesPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[fullhash].css",
			chunkFilename: "[id].[fullhash].css"
		}),
		new ModuleFederationPlugin({
			name: "shell",
			remotes: {
				angular1: "angular1@http://localhost:4202/remoteEntry.js",
				// mfe1: "mfe1@http://localhost:3001/remoteEntry.js"
			  }
		  }),
	],
	devServer: {
		port: 3000,
		contentBase: './src/',
		historyApiFallback: true
	},
	devtool: 'source-map',
};

module.exports = config;
