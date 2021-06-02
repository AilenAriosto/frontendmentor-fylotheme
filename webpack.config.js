const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
					{
						loader: 'file-loader',
						options: {
							name: './assets/css/[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'assets/images/[name].[ext]',
                          publicPath: 'assets',
                        }
                      }
                ]
            },
            { 
                test: /\.pug$/,
                use: ["pug-loader"]
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.pug'
        }),
      ]
}