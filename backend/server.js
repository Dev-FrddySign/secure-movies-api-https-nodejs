require("dotenv").config();
const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

// Seguridad
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

// Db
require("./config/db");

const app = express();

// Seguridad headers
app.use(helmet());

// Logs
app.use(morgan("combined"));

// Rate limit
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
}));

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta base
app.get("/", (req, res) => {
    res.send("Servidor HTTPS funcionando correctamente");
});

// Rutas
app.use("/api/movies", require("./routes/movies"));

// Error handler global
app.use(require("./middleware/errorHandler"));

// HTTPS
const sslOptions = {
    key: fs.readFileSync("./ssl/key.pem"),
    cert: fs.readFileSync("./ssl/cert.pem"),
};

https.createServer(sslOptions, app).listen(process.env.PORT, () => {
    console.log(`HTTPS activo en https://localhost:${process.env.PORT}`);
});