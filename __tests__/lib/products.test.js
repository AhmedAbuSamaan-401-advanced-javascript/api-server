'use strict';

const products = require('../../models/products-mod/products-model.js');
describe('Products DB', () => {

  it('Create a new product', () => {
    let obj = {
      'category': 'Boots',
      'name': 'sport',
      'display_name': 'sporting',
      'description': 'size 44',
      '_id': 1,
    };
    products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('Get all Boot product', () => {
    let obj = {
      'category': 'Boots',
      'name': 'sport',
      'display_name': 'sporting',
      'description': 'size 44',
      '_id': 1,
    };
    products.create(obj)
      .then(record => {
        products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('Update a product', () => {
    let obj = {
      'category': 'Boots',
      'name': 'sport',
      'display_name': 'sporting',
      'description': 'size 44',
      '_id': 1,
    };
    products.create(obj)
      .then(record => {
        products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('Get all product', () => {
    let obj = {
      'category': 'Boots',
      'name': 'sport',
      'display_name': 'sporting',
      'description': 'size 44',
      '_id': 1,
    };
    products.create(obj)
      .then(record => {
        products.update(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('Delete a Boot product', () => {
    let obj = {
      'category': 'Boots',
      'name': 'sport',
      'display_name': 'sporting',
      'description': 'size 44',
      '_id': 1,
    };
    products.create(obj)
      .then(record => {
        products.delete(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[key]).toEqual(obj[key]);
            });
          });
      });
  });

}); 