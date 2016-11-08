const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
	entry : {
		'polyfills' : './src/polyfills.ts',
		'vendor' : './src/vendor.ts',
		'app' : './src/main.ts'
	},

	resolve : {
		extensions: ['.ts', '.js'],
		modules: [
            'node_modules'
        ]
	},

	module : {
		loaders : [
			{
	        	test: /\.ts$/,
	        	loaders: ['awesome-typescript-loader', 'angular2-template-loader']
			},
			{
		        test: /\.html$/,
		        loader: 'html'
			},
			{
		        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
		        loader: 'file?name=assets/[name].[hash].[ext]'
			},
			{
		        test: /\.css$/,
		        exclude: helpers.root('src', 'app'),
		        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css?sourceMap' })
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw'
			}
		]
	},

	plugins : [
		new HtmlWebpackPlugin({
	      template: 'src/index.html'
	    }),

	    new webpack.optimize.CommonsChunkPlugin({
	      name: ['app', 'vendor', 'polyfills']
	    }),

	    new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,__dirname)
	]
}