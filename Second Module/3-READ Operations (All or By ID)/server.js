const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const songRoutes = require('./routes/song.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use('/song', songRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
