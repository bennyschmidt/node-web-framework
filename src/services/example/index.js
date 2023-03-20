const { http } = require('node-service-library');

const { hello, save } = require('./api');

module.exports = http({
  GET: {
    hello
  },
  POST: {
    save
  },
  PUT: {},
  DELETE: {}
});
