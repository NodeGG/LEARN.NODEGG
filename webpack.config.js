var webpack = require('webpack');

module.exports = {
	module: {
		rules: [
			{
				test: /\.md$/,
				loader: 'vue-markdown-loader',
				options: {
					preventExtract: true
				}
      }
    ]
	},

	plugins: [
    new webpack.LoaderOptionsPlugin({
			vue: {}
		})
  ]
};
