

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: 'development',  
    target: 'web',
    context: __dirname,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        publicPath: '/'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, '/'), 
        },
        port: 3000,
        watchFiles: ['src/*.html'],
        historyApiFallback: true,  
        host: 'localhost',
        liveReload:true,
        open: true,
        allowedHosts: 'all',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          'Cross-Origin-Embedder-Policy': 'require-corp',
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cache-Control': 'no-store',
        },
    },
    resolve: {
        extensions: ['.js','.jsx','.json','.css','.scss'] 
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,    
              use:  'babel-loader' 
            },
            {
              test: /\.css$/i,
              use: [
                'style-loader',
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        [ 'postcss-preset-env', {}, ],
                      ],
                    },
                  },
                },
              ]
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            },
            {
              test: /\.(jpg|png|svg)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 500000
                  }
                }
              ]
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({ template: 'src/index.html'})
    ] 
}
