const Forms = require('../helpers/Forms');

module.exports = [{
  method: 'POST',
  path: '/Form/{formName}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request) => {
    const res = await Forms.storeForm(request.params.formName, request.payload);
    return res;
  },

}];
