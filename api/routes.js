'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/health')
       .get(controller.health);
};