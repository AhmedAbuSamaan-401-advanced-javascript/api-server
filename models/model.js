'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;
  }
 
  get(_id) {
    let obj = _id ? { _id } : {};
    return this.schema.find(obj);
  } 

  create(record) {
    let obj = new this.schema(record);
    return obj.save();
  } 

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  } 

  delete(_id) {
    return this.schema.findByIdAndDpdate(_id);
  } 
} 

module.exports = Model;