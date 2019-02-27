const Form = require('../helpers/Forms');

module.exports = [{
  method: 'GET',
  path: '/{Form}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request) => {
    const res = await Form.getFormAttributes(request.params.Form);
    return res;
  },
}];
