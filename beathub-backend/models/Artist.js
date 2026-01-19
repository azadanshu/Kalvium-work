const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    genre: {
      type: String,
      required: true,
      enum: ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Electronic']
    },
    bio: {
      type: String
    },
    albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Artist', artistSchema);
