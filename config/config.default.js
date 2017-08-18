'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1502782889039_6750';

  // add your config here
  config.sequelize = {
    dialect: 'mysql',
    database: 'ecms',
    host: 'localhost',
    port: 3306,
    username: '',
    password: '',
    force: false
  };

  config.logrotator = {
    maxFileSize: 50 * 1024 * 1024,
    maxFiles: 90,
    rotateDuration: 60000,
    maxDays: 31
  }

  return config;
};
