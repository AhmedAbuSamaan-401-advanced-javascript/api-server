'use strict';

const express = require('express');
const Categories = require('../models/categories-mod/categories-model.js');
const category = new Categories();
const router = express.Router();

router.get('/categories', getCat);
router.post('/categories', postCat);
router.put('/categories/:id', putCat);
router.delete('/categories/:id', deleteCat);

function getCat(req, res, next) {
  category.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postCat(req, res, next) {
  category.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}
function putCat(req, res, next) {
  category.update(req.params.id,req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function deleteCat(req, res, next) {
  category.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;