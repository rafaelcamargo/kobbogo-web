const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const project = require('./project.json');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [`${__dirname}/${project.source.scripts.index}`],
  output: {
    filename: project.dist.scripts.filename[env]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        include: [`${__dirname}/${project.source.root}`],
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.styl$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name]-[contenthash].[ext]',
        },
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
      'vue\/dist\/vue.common$': 'vue/dist/vue.esm-bundler.js',
      '@environment$': `${__dirname}/${project.source.environments.root}/${env}.js`,
      '@src': `${__dirname}/${project.source.root}`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: project.source.index.file,
      favicon: project.source.favicon.file,
      minify: { collapseWhitespace: true }
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new MiniCssExtractPlugin({
      filename: project.dist.styles.filename[env]
    })
  ]
}
