require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../backend/models/Movie");

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {

        await Movie.deleteMany();

        await Movie.insertMany([
            {
                title: "Dune: Part Two",
                year: 2024,
                genre: "Ciencia Ficcion",
                poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
                synopsis: "Paul Atreides busca venganza.",
                type: "movie"
            },
            {
                title: "Oppenheimer",
                year: 2023,
                genre: "Drama",
                poster: "https://image.tmdb.org/t/p/w500/8GxvZtKXzJ7f6h7rH3y9z7z6pVw.jpg",
                synopsis: "Historia del creador de la bomba atómica.",
                type: "movie"
            },
            {
                title: "The Batman",
                year: 2022,
                genre: "Accion",
                poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
                synopsis: "Batman en su etapa más oscura.",
                type: "movie"
            },
            {
                title: "Breaking Bad",
                year: 2008,
                genre: "Crimen",
                poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
                synopsis: "Profesor se vuelve narco.",
                type: "series"
            },
            {
                title: "Stranger Things",
                year: 2016,
                genre: "Fantasia",
                poster: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
                synopsis: "Niños enfrentan el mundo del revés.",
                type: "series"
            }
        ]);

        console.log("Seed listo");
        process.exit();
    })
    .catch(err => console.log(err));