const express = require("express");

//Importamos el módulo db (db.js)
const db = require("./src/utils/db");
//Usamos la funcion connectDB del modulo db.js
db.connectDB();

const indexRoutes = require("./src/api/index/index.routes")

const PORT = 3000;

const server = express();

// Configuración de todas las rutas de nuestro servidor.
server.use("/", indexRoutes);


server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
})
