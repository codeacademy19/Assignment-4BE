const model = require('../../../models');

const storeForm = (formName, formContent) => model.FormData.generate(formName, formContent)
  .then(result => result);
const getResponsesOfForm = formName => model.FormData.getResponsesOfForm(formName)
  .then(result => result);
const storeFormAttributes = (formName, formAttributes) => model.Form
  .generate(formName, formAttributes)
  .then(result => result);
const getFormAttributes = formName => model.Form
  .getAttributesOfForm(formName)
  .then(result => result);
const getAllForms = () => model.Form
  .getAllForms()
  .then(result => result);
module.exports = {
  storeForm,
  getResponsesOfForm,
  storeFormAttributes,
  getFormAttributes,
  getAllForms,
};
