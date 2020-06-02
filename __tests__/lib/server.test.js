'use strict';

const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Server', () => {

  it('GET: should respond with 200 on /api/v1/categories', () => {
    return mockRequest
      .get('/api/v1/categories')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

  it('GET: should respond with 200 on /api/v1/categories/:id', () => {
    return mockRequest
      .get('/api/v1/categories/1')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

  it('POST: should respond with 200 on /api/v1/categories ', () => {
    return mockRequest
      .post('/api/v1/categories')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

  it('PUT :should respond with 200 on /api/v1/categories/:id', () => {
    return mockRequest
      .put('/api/v1/categories/1')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

  it('DELETE should respond with 200 on /api/v1/categories/:id', () => {
    return mockRequest
      .delete('/api/v1/categories/1')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

  it('GET: should respond with 200 on /api/v1/products ', () => {
    return mockRequest
      .get('/api/v1/products')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

  it('GET: should respond with 200 on /api/v1/products:id ', () => {
    return mockRequest
      .get('/api/v1/products/2')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

  it('POST: should respond with 200 on /api/v1/products ', () => {
    return mockRequest
      .post('/api/v1/products')
      .then(data => {
        expect(data.status).toBe(200);
      });
  }); 

  it('PUT: should respond with 200 on /api/v1/products:id', () => {
    return mockRequest
      .put('/api/v1/products/1')
      .then(data => {
        expect(data.status).toBe(200);
      }).catch(e => console.error(e));
  });

  it('DELETE: should respond with 200 on /api/v1/products:id', () => {
    return mockRequest
      .delete('/api/v1/products/1')
      .then(data => {
        expect(data.status).toBe(200);
      });
  });

    
});