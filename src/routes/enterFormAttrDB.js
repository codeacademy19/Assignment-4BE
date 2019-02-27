const Forms = require('../helpers/Forms');

module.exports = [{
  method: 'POST',
  path: '/{formName}',
  config: {
    cors: {
      origin: ['*'],
      additionalHeaders: ['cache-control', 'x-requested-with'],
    },
  },
  handler: async (request) => {
    const res = await
    Forms.storeFormAttributes(request.params.formName, request.payload.attributes);
    return res;
  },

}];
