const pingRoute = require('./ping');
const storeForm = require('./enterFormResDB');
const storeFormAttr = require('./enterFormAttrDB');
const getFormAttr = require('./getFormAttr');
const getFormRes = require('./getFormRes');
const getAllForms = require('./getAllForms');

module.exports = [
  ...pingRoute,
  ...storeForm,
  ...storeFormAttr,
  ...getFormAttr,
  ...getFormRes,
  ...getAllForms,
];
