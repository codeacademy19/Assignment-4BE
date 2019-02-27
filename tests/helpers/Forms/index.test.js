/**
 * @jest-environment node
 */

const {
  storeForm, getResponsesOfForm, storeFormAttributes, getFormAttributes,
} = require('../../../src/helpers/Forms');

describe('storeForm', () => {
  it('should enter form response into the DataBase', async () => {
    const DBentry = await storeForm('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    expect((DBentry.length > 0)).toEqual(true);
    expect(typeof (DBentry[0])).toEqual('string');
  });
});

describe('getResponsesOfForm', () => {
  it('should return responses of a form', async () => {
    await storeForm('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    const response = await getResponsesOfForm('post');
    expect(response[0].FormName).toEqual('post');
    expect(typeof response[0]).toEqual('object');
    expect(Array.isArray(response)).toEqual(true);
  });
});

describe('storeFormAttributes', () => {
  it('should enter form attributes into the DataBase', async () => {
    const DBentry = await storeFormAttributes('post', 'firstname,lastname');
    expect((DBentry.length > 0)).toEqual(true);
    expect(typeof (DBentry[0])).toEqual('string');
  });
});
describe('getAttributesOfForm', () => {
  it('should return attributes of a form', async () => {
    await storeFormAttributes('post', 'firstname,lastname');
    const response = await getFormAttributes('post');
    expect(response[0].FormName).toEqual('post');
    expect(typeof response[0]).toEqual('object');
    expect(Array.isArray(response)).toEqual(true);
  });
});
