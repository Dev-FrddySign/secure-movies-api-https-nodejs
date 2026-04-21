const { body, validationResult } = require("express-validator");

const validateMovie = [
    body("title").notEmpty().withMessage("Título obligatorio"),
    body("year").isInt({ min: 1900 }).withMessage("Año inválido"),
    body("type").isIn(["movie", "series"]).withMessage("Tipo inválido"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateMovie };