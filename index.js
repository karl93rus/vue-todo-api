const express = require('express');
const app = express();
const mongoose = require('mongoose');

const itemsRouter = require('./routes/items');

mongoose.connect('mongodb://localhost/tododb', {
  useNewUrlParser: true,
});


app.use(express.json());
app.use('/', itemsRouter);

const port = process.env.PORT || 3000;
app.listen(port);