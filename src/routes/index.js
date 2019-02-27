const pingRoute = require('./ping');
const storeForm = require('./enterFormResDB');
const storeFormAttr = require('./enterFormAttrDB');
const getFormAttr = require('./getFormAttr');

module.exports = [
  ...pingRoute,
  ...storeForm,
  ...storeFormAttr,
  ...getFormAttr,
];
