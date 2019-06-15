const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin123@cluster0-w3p1h.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})

app.use(require('./routes'));

app.listen(3333);