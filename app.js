'use strict';

module.exports = app => {
  app.beforeStart(function* () {
    if (app.config.sequelize.force)
      await app.model.sync({ force: true });
  });
};