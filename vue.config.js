module.exports = {
  css: {
    requireModuleExtension: true
  },
  configureWebpack: {
    externals: {
      echarts: "echarts",
      vue: "Vue",
      'vue-router': 'VueRouter',
      axios: "axios",
    }
  }
}