module.exports = {
  publicPath: "./",
  outputDir: "devdist",
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/main.scss";'
      }
    }
  },
  parallel: true,
  pwa: {},
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hot: true,
    hotOnly: false,
    proxy: {
      "/devApi": {
        target: "http://www.web-jshtml.cn/productapi/token",
        changeOrigin: true,
        pathRewrite: {
          "^/devApi": ""
        }
      }
    }
  },
  pluginOptions: {},
  transpileDependencies: ["vuetify"]
};
