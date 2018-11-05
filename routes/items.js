const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ItemModel = require('../models/itemModel');

router.get('/', (req, res) => {
  res.status(200);
  res.send('Router works');
});

router.post('/', (req, res) => {
  const item = new ItemModel({
    header: req.body.header,
    content: req.body.content,
  });
  item.save()
    .then((response) => {
      console.log(response);
      res.status(200);
      res.send(item);
    })
    .catch(err => {
      console.log(err);
    })

  
})


module.exports = router;