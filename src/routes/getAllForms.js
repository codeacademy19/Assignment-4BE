const Form = require('../helpers/Forms');

module.exports = [{
  method: 'GET',
  path: '/Form',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async () => {
    const res = await Form.getAllForms();
    return res;
  },
}];
