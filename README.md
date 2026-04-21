# 🚀 API RESTful HTTPS con Node.js + Express + MongoDB

Este proyecto consiste en el desarrollo de una API RESTful segura, implementada con Node.js y Express, que permite gestionar y consultar información de películas y series.

La aplicación incorpora configuración HTTPS mediante certificados SSL auto-firmados generados con OpenSSL, además de buenas prácticas de seguridad como uso de Helmet, Rate Limiting y validación de datos.

---

## 📌 Objetivo del proyecto

El objetivo principal es comprender e implementar:

- Configuración de servidores HTTPS en Node.js
- Uso de certificados SSL auto-firmados
- Desarrollo de APIs RESTful con Express
- Conexión a base de datos MongoDB con Mongoose
- Implementación de medidas de seguridad en backend

---

## 🛠 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- OpenSSL
- HTTPS (módulo nativo de Node.js)
- Helmet (seguridad de cabeceras HTTP)
- Express Rate Limit (protección contra abuso)
- Morgan (logs de peticiones)
- Express Validator (validación de datos)
- dotenv

---

## 🔐 Configuración HTTPS

El servidor utiliza HTTPS mediante certificados SSL auto-firmados.

Para esto se generaron:

- `key.pem` → clave privada  
- `cert.pem` → certificado SSL  

Ejemplo de uso en el servidor:

```js
const https = require("https");
const fs = require("fs");

https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
).listen(8080, () => {
  console.log("Servidor HTTPS activo en https://localhost:8080");
});
