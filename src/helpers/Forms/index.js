const model = require('../../../models');

const storeForm = (formName, formContent) => model.FormData.generate(formName, formContent)
  .then(result => result);
const getResponsesOfForm = formName => model.FormData.getResponsesOfForm(formName)
  .then(result => result);
module.exports = {
  storeForm,
  getResponsesOfForm,
};
