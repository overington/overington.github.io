const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
  unstable_staticImage: true,
})
module.exports = withNextra()
module.exports.images = {loader: 'custom'}
