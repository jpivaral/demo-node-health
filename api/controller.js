'use strict';

var os = require("os");

var controllers = {
   health: function(req, res) {
       var healthInfo = `The endpoint is healthy from hostname: ${os.hostname()}`;
       res.json(healthInfo);
   }
};

module.exports = controllers;