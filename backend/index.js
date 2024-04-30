const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const energy = require('./schema');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.post('/', (req, res) => {
  energy.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
