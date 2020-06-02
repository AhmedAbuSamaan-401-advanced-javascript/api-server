'use strict';

module.exports = (req,res) => {
  res.status(404);
  res.statusMessage = 'Sorry, Not Found';
  res.json({error:'Not Found'});
};