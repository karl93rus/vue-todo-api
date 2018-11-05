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

router.post('/', async (req, res) => {
  const item = new ItemModel({
    header: req.body.header,
    content: req.body.content,
  });
  try {
    const result = await item.save();
    console.log(result);
    res.status(200);
    res.send(item);
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;