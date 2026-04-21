const Movie = require("../models/Movie");

// GET con filtros
exports.getMovies = async (req, res, next) => {
    try {
        const { year, genre, type, search } = req.query;

        let filter = {};

        if (year) filter.year = Number(year);
        if (genre) filter.genre = genre;
        if (type) filter.type = type;

        if (search) {
            filter.title = { $regex: search, $options: "i" };
        }

        const movies = await Movie.find(filter).sort({ year: -1 });

        res.json(movies);

    } catch (error) {
        next(error);
    }
};

// GET por ID
exports.getMovieById = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ error: "No encontrada" });
        }

        res.json(movie);

    } catch (error) {
        next(error);
    }
};

// POST
exports.createMovie = async (req, res, next) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();

        res.status(201).json(movie);

    } catch (error) {
        next(error);
    }
};

// PUT
exports.updateMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(movie);

    } catch (error) {
        next(error);
    }
};

// DELETE
exports.deleteMovie = async (req, res, next) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ msg: "Eliminado" });

    } catch (error) {
        next(error);
    }
};