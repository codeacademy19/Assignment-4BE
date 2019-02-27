const pingRoute = require('./ping');
const storeForm = require('./enterFormResDB');

module.exports = [
  ...pingRoute,
  ...storeForm,
];
