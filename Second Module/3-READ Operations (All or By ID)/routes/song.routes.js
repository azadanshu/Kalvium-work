const express = require('express');
const Song = require('../models/song.model');

const router = express.Router();

// GET all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET song by ID
router.get('/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(200).json(song);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
});

module.exports = router;
