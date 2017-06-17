const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
const webpack = require('webpack');

module.exports = {
	devtool: "source-map",
	
	entry: "./src/index",
	output:{
		filename: "./dist/bundle.js"
	},
	
	watch: true,
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules$/,
				query: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.sass/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: "style-loader",
					loader: "css-loader!sass-loader"
				})
			},
		  {
		    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		    loader: "url-loader?limit=10000&mimetype=application/font-woff"
	    },
	    {
	      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
	      loader: "url-loader?limit=10000&mimetype=application/font-woff"
		  }, 
	    {
		    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	      loader: "url-loader?limit=10000&mimetype=application/octet-stream"
		  }, 
	    {
		    test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	      loader: "file-loader"
	    }, 
		  {
	 	    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		    loader: "url-loader?limit=10000&mimetype=image/svg+xml"
	    }]
    },    
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new ExtractTextPlugin("./dist/style.css")
	]
};