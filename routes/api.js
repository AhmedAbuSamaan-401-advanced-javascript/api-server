'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories-mod/categories-model.js');
const products = require('../models/products-mod/products-model.js');

function getSchema(req,res,next){
  let model = req.params.model;
  // console.log(model);
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid model');
    return;
  }
}
router.param('model', getSchema);
router.get('/:model',getAll);
router.post('/:model',post);
router.get('/:model/:id',getOne);
router.put('/:model/:id',update);
router.delete('/:model/:id',deleteHandler);


function getAll(req,res,next){
  req.model.get()
    .then(results=>{
      let count = results.length;
      res.json({count,results});
    }).catch(next);
}

function getOne(req,res,next){
  let id = req.params.id;
  req.model.get(id)
    .then(record=>{
      res.json(record);
    }).catch(next);
}

function post(req,res,next){
  req.model.create(req.body)
    .then(results=>{
      res.json(results);
    }).catch(next);
}

function deleteHandler(req,res,next){
  let id = req.params.id;
  req.model.delete(id)
    .then(record=>{
      res.json(record);
    }).catch(next);
}
function update(req,res,next){
  let id = req.params.id;
  req.model.update(id, req.body)
    .then(record=>{
      res.json(record);
    }).catch(next);
}
module.exports = router;