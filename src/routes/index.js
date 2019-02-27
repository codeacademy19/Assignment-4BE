const pingRoute = require('./ping');
const storeForm = require('./enterFormResDB');
const storeFormAttr = require('./enterFormAttrDB');
const getFormAttr = require('./getFormRes');

module.exports = [
  ...pingRoute,
  ...storeForm,
  ...storeFormAttr,
  ...getFormAttr,
];
