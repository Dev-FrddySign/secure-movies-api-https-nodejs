const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: Number,
    genre: String,
    poster: String,
    synopsis: String,
    cast: [String],
    rating: Number,
    size: String,
    type: {
        type: String,
        enum: ["movie", "series"],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Movie", MovieSchema);