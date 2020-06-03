'use strict';

const express = require('express');
const Products = require('../models/products-mod/products-model.js');
const product = new Products();
const router = express.Router();

router.get('/products', getpro);
router.post('/products', postPro);
router.put('/products/:id', putPro);
router.delete('/products/:id', deletePro);

function getpro(req, res, next) {
  product.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postPro(req, res, next) {
  product.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function putPro(req, res, next) {
  product.update(req.params.id,req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}
  
function deletePro(req, res, next) {
  product.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;