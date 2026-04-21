const express = require("express");
const router = express.Router();

const controller = require("../controllers/movieController");
const { validateMovie } = require("../middleware/validators");

router.get("/", controller.getMovies);
router.get("/:id", controller.getMovieById);
router.post("/", validateMovie, controller.createMovie);
router.put("/:id", validateMovie, controller.updateMovie);
router.delete("/:id", controller.deleteMovie);

module.exports = router;