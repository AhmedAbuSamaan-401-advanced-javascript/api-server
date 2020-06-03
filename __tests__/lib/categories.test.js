'use strict';

const Categories = require('../../models/categories-mod/categories-model.js');

const categories = new Categories();

describe('Categories DB', () => {

  it('Create a new category', () => {
    let obj = {
      'name': 'Boots',
      'display_name': 'Boot',
      'description': 'Sport boots',
      '_id': 1,
    };
    categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });


  it('Get all Boot category', () => {
    let obj = {
      'name': 'Boots',
      'display_name': 'Boot',
      'description': 'Sport boots',
      '_id': 1,
    };
    categories.create(obj)
      .then(record => {
        categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('Update the category', () => {
    let obj = {
      'name': 'Boots',
      'display_name': 'Boot',
      'description': 'Sport boots',
      '_id': 1,
    };
    categories.create(obj)
      .then(record => {
        categories.update(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('Get all category', () => {
    let obj = {
      'name': 'Boots',
      'display_name': 'Boot',
      'description': 'Sport boots',
      '_id': 1,
    };
    categories.create(obj)
      .then(record => {
        categories.get(record._id)
          .then(category => {
            console.log(category);
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('Delete boot category ', () => {
    let obj = {
      'name': 'Boots',
      'display_name': 'Boot',
      'description': 'Sport boots',
      '_id': 1,
    };
    categories.create(obj)
      .then(record => {
        categories.delete(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });

}); 