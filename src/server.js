const Hapi = require('hapi');
const routes = require('./routes');

const server = new Hapi.Server({
  port: 7000,
  host: 'localhost',
});

server.route(routes);
module.exports = server;
