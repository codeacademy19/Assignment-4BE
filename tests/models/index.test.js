const model = require('../../models');

describe('FormData generate', () => {
  beforeEach(async () => {
    await model.FormData.truncate();
  });
  it('should make an entry in the database with the  given information', async () => {
    await model.FormData.generate('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    await model.FormData.generate('post', { firstname: 'Author2', lastname: 'book2', rate: 3.72 });
    expect(await model.FormData.count()).toEqual(2);
  });
  it('should make an entry in the database with the  given information', async () => {
    const formDetail = await model.FormData.generate('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    expect(formDetail).toEqual('created successfully');
  });
  it('should give an error on Primary key conflict', async () => {
    await model.FormData.generate('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    expect(await model.FormData.generate('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 })).toEqual('Already exists');
  });
});
describe('FormData getResponsesOfForm', () => {
  beforeEach(async () => {
    await model.FormData.truncate();
  });
  it('should retrive all response of a given form', async () => {
    await model.FormData.generate('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    await model.FormData.generate('post', { firstname: 'Author2', lastname: 'book2', rate: 3.72 });
    const responses = await model.FormData.getResponsesOfForm('post');
    expect(responses.length).toEqual(2);
  });
  it('should retrive all response of a given form', async () => {
    await model.FormData.generate('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    await model.FormData.generate('post', { firstname: 'Author2', lastname: 'book2', rate: 3.72 });
    const responses = await model.FormData.getResponsesOfForm('post');
    expect(responses[0].FormName).toEqual('post');
  });
  it('should retrive all response of a given form', async () => {
    await model.FormData.generate('post', { firstname: 'Author1', lastname: 'book1', rate: 3.72 });
    await model.FormData.generate('post', { firstname: 'Author2', lastname: 'book2', rate: 3.72 });
    const responses = await model.FormData.getResponsesOfForm('post');
    expect(responses[0].Attributes).toEqual({ firstname: 'Author1', lastname: 'book1', rate: 3.72 });
  });
});
describe('Form generate', () => {
  beforeEach(async () => {
    await model.Form.truncate();
  });
  it('should make an entry in the database with the  given information', async () => {
    await model.Form.generate('post', 'firstname,lastname,rate');
    expect(await model.Form.count()).toEqual(1);
  });
  it('should make an entry in the database with the  given information', async () => {
    const formDetail = await model.Form.generate('post', 'firstname,lastname,rate');
    expect(formDetail).toEqual('created successfully');
  });
  it('should give an error on Primary key conflict', async () => {
    await model.Form.generate('post', 'firstname,lastname,rate');
    expect(await model.Form.generate('post', 'firstname,lastname,rate')).toEqual('Already exists');
  });
});
describe('Form getAttributesOfForm', () => {
  beforeEach(async () => {
    await model.Form.truncate();
  });
  it('should retrive all response of a given form', async () => {
    await model.Form.generate('post', 'firstname,lastname,rate');
    const responses = await model.Form.getAttributesOfForm('post');
    expect(responses.length).toEqual(1);
  });
  it('should retrive all response of a given form', async () => {
    await model.Form.generate('post', 'firstname,lastname,rate');
    const responses = await model.Form.getAttributesOfForm('post');
    expect(responses[0].FormName).toEqual('post');
  });
});
