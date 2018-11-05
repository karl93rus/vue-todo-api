const express = require('express');
const app = express();
const mongoose = require('mongoose');

const itemsRouter = require('./routes/items');

mongoose.connect('mongodb://localhost/tododb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
  }
  next();
});

app.use(express.json());
app.use('/', itemsRouter);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port: ${port}...`)