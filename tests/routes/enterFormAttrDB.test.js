/**
 * @jest-environment node
 */
const Server = require('../../src/server');
const model = require('../../models');

describe('Test for form POST route', () => {
  beforeEach(async () => {
    await model.Form.truncate();
  });
  it('should enter all the books with rating to a database', async () => {
    const options = {
      method: 'POST',
      url: '/post',
      payload: {
        attributes: 'firstname,lastname,rate,age',
      },
    };

    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual('created successfully');
    const response2 = await Server.inject(options);
    expect(response2.result).toEqual('Already exists');
  });
});
