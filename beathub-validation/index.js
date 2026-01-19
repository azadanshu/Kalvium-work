const mongoose = require('mongoose');
const Song = require('./models/song.model');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/beathub_test');
    console.log('✅ Connected to MongoDB');

    // VALID SONG
    const validSong = new Song({
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      genre: 'Pop',
      duration: 240
    });

    await validSong.save();
    console.log('🎵 Hit Single Saved!');

    // INVALID SONG
    const badSong = new Song({
      artist: 'A',
      genre: 'Techno-Banjo',
      duration: -50
    });

    try {
      await badSong.save();
    } catch (error) {
      console.log('❌ Validation Errors:');
      for (let key in error.errors) {
        console.log(`- ${error.errors[key].message}`);
      }
    }

  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}

main();
