const Form = require('../helpers/Forms');

module.exports = [{
  method: 'GET',
  path: '/Form/{FormName}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request) => {
    const res = await Form.getResponsesOfForm(request.params.FormName);
    return res;
  },
}];
