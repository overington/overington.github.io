module.exports = {
  env: {
    POSTS_PATH: './src/_posts',
    SITE_MENUS_PATH: './src/_content/site-menus.yml',
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      oneOf: [
        {
          resourceQuery: /stream/,
          options: { asStream: true },
          loader: 'yaml-loader'
        },
        { loader: 'yaml-loader' }
      ]
    });
    return config;
  }
}