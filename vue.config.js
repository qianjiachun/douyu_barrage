module.exports = {
  css: {
    requireModuleExtension: true
  },
  configureWebpack: {
    externals: {
      vue: "Vue",
      'vue-router': 'VueRouter',
      axios: "axios",
    }
  }
}