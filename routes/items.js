const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ItemModel = require('../models/itemModel');

router.get('/', async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.status(200);
    res.send(items);
  } catch (error) {
    console.log(error);
  }
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