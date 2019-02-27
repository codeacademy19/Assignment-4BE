/**
 * @jest-environment node
 */
const Server = require('../../src/server');
const model = require('../../models');

describe('Test for form POST route', () => {
  beforeEach(async () => {
    await model.FormData.truncate();
  });
  it('should enter all the books with rating to a database', async () => {
    const options = {
      method: 'GET',
      url: '/Form/post',
    };
    const optionsForDb = {
      method: 'POST',
      url: '/Form/post',
      payload: {
        firstname: 'ajay',
        lastname: 'balaji',
      },
    };

    await Server.inject(optionsForDb);
    const response = await Server.inject(options);
    expect(typeof response.result).toEqual('object');
  });
});
