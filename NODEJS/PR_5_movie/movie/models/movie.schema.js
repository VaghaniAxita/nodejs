const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseDate: Date,
  category: String,
  actors: [{ name: String }],
  image: String,
  ratings: [
    {
      value: { type: Number, min: 0, max: 10 },
    },
  ],
  comments: [
    {
      text: String,
    },
  ],
  addedBy: { type: String, required: true },
});

module.exports = mongoose.model('Movie', movieSchema);
