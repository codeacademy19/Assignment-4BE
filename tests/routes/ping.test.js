const Server = require('../../src/server');

describe('Test for /ping route', () => {
  it('should return pong string', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual('pong');
    expect(typeof (response.result)).toEqual('string');
  });
});
