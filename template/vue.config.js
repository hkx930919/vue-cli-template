const TerserPlugin = require("terser-webpack-plugin"); // vue-cli已经有这个依赖

module.exports = {
  publicPath: "/",

  css: {
    extract: false
  },

  productionSourceMap: false,

  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          terserOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true
            }
            // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          }
        })
      ]
    }
  }
};
