const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =  (env, argv) => {

	return {
		entry: "./src/index.tsx",
		mode: argv.mode === 'production' ? 'production' : 'development',
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
		},
		output: {
			path: path.join(__dirname, "/dist"),
			filename: "bundle.min.js",
		},
		module: {
			rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
			template: "./src/index.html",
			}),
		],
	}
};
