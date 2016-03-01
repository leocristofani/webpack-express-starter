'use strict';

const _ = require('lodash');
const environment = process.env.NODE_ENV || 'development';

const globalConfig = {
  environment
};

const devConfig = {
  port: 3000,
  proxyPort: 3001
}

const prodConfig = {
  port: 8080
}

let config = environment === 'development'
  ? _.assign(globalConfig, devConfig)
  : _.assign(globalConfig, prodConfig);

module.exports = config;
