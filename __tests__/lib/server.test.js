'use strict';
const { server } = require('../../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Storge API', () => {
  it('can POST() a Category', () => {
    let obj = {
      'name': 'Boots',
      'display_name': 'Boot',
      'description': 'Sport boots',
      '_id': 1,
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        const record = data.body;
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('can GET() a Category', () => {
    const obj = {
      'name': 'Boots',
      'display_name': 'Boot',
      'description': 'Sport boots',
      '_id': 1,
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/categories').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body.count).toEqual(1);
          });
        });
      });
  });
  it('can POST() a Product', () => {
    let obj = {
      'category': 'Boots',
      'name': 'sport',
      'display_name': 'sporting',
      'description': 'size 44',
      '_id': 1,
    };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((data) => {
        const record = data.body;
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('can get() a product', () => {
    let obj = {
      'category': 'Boots',
      'name': 'sport',
      'display_name': 'sporting',
      'description': 'size 44',
      '_id': 1,
    };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/products').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body.count).toEqual(1);
          });
        });
      });
  });

});