const mongoose = require ("mongoose");

//const Cinema = require("./cinema.models");

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        movie: [{ type: Schema.Types.ObjectId, ref: `movies`}] 
      },
      {
        collection: `cinema`,
      }
    );

const Cinema = mongoose.model(`cinema`, cinemaSchema);

module.exports = Cinema;