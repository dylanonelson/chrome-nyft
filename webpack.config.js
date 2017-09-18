var config = require('./webpack.base.config.js');

config.entry = {
  content: './src/content/index',
};

module.exports = config;
