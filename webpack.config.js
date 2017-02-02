const path = require('path');

module.exports = {
    devtool: "inline-sourcemap",
	entry: path.join(__dirname, '/client/src/app.jsx'),

	output: {
		path: path.join(__dirname, '/public/js'),
		filename: 'app.js'
	},

	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: path.join(__dirname, 'client/src'),
            exclude:/node_modules/,
			loader: 'babel',
			query:{
				presets:["react", "es2015"]
			}
		}]
	},
	watch: true
}