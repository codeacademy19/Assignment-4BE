const pingRoute = require('./ping');
const storeForm = require('./enterFormResDB');
const storeFormAttr = require('./enterFormAttrDB');

module.exports = [
  ...pingRoute,
  ...storeForm,
  ...storeFormAttr,
];
