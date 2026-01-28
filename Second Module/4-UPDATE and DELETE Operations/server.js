const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

  // console.log("Mongo URI:", process.env.MONGO_URI);

  app.use('/products', require('./routes/product.routes'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});