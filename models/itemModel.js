const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  header: String,
  content: String,
});

module.exports = mongoose.model('Item', itemSchema);