const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Song title is required.']
    },
    artist: {
      type: String,
      required: [true, 'Artist name is missing.'],
      minlength: [3, 'Artist name must be at least 3 characters.']
    },
    genre: {
      type: String,
      enum: {
        values: ['Pop', 'Rock', 'Jazz', 'Hip-Hop'],
        message: 'Invalid genre selected.'
      },
      default: 'Pop'
    },
    duration: {
      type: Number,
      required: true,
      min: [0, 'Duration cannot be negative.']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Song', songSchema);
