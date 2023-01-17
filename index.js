const express = require("express");

//Importamos el módulo db (db.js)
const db = require("./src/utils/db");
//Usamos la funcion connectDB del modulo db.js
db.connectDB();

const PORT = 3000;

const server = express();


server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
})
