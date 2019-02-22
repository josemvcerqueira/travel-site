const path = require("path"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
	CleanWebpackPlugin = require("clean-webpack-plugin"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	HtmlMinifierPlugin = require("html-minifier-webpack-plugin"),
	TerserPlugin = require("terser-webpack-plugin");

require("@babel/polyfill");

module.exports = {
	mode: "production",
	entry: ["@babel/polyfill", "./src/index.js"],
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "./dist"),
		// when a website is deployed it needs to be changed to the name of the website - public path
		publicPath: ""
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					ecma: 6
				}
			})
		],
		minimize: true
	},
	module: {
		rules: [
			{ test: /\.(png|jpg)$/, use: ["file-loader"] },
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env"],
						plugins: ["transform-class-properties"]
					}
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].css"
		}),
		new CleanWebpackPlugin("dist"),
		new HtmlWebpackPlugin({
			hash: true,
			cache: true,
			title: "Hello World",
			template: "./src/index.html"
		}),
		new HtmlMinifierPlugin({
			html5: true,
			collapseWhitespace: true
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.optimize\.scss$/g,
			cssProcessor: require("cssnano"),
			cssProcessorPluginOptions: {
				preset: ["default", { discardComments: { removeAll: true } }]
			},
			canPrint: true
		})
	]
};
