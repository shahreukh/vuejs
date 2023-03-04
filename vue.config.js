const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'tr',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  }
})
