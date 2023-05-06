const mongoose = require ("mongoose");
//const { getAllMovies } = require("../controllers/movies.controllers");

const Schema = mongoose.Schema;

const moviesSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        year: { type: Number },
        genre: { type: String, required: true },
      },
      {
        timestamps: true,
        collection: `movies`,
      }
    );

const Movies = mongoose.model(`movies`, moviesSchema);

module.exports = Movies;