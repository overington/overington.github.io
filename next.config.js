module.exports = {
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