const express = require("express");

//Importamos el módulo db (db.js)
const db = require("./src/utils/db");
//Usamos la funcion connectDB del modulo db.js
db.connectDB();

// Rutas importadas
const indexRoutes = require("./src/api/index/index.routes")
const teacherRoutes = require("./src/api/teachers/teacher.routes")

const PORT = 3000;

// Donamos todas las herramientas de express a una variable llamada server.
const server = express();

// Transforma el contenido o cuerpo de las peticiones POST (req.body)
// Convierte cuando enviamos un post con json al servidor
server.use(express.json());
// Los POST de formulario llegaran como url.encode y hay que transformalas
server.use(express.urlencoded({extended: true}));


// Configuración de todas las rutas de nuestro servidor.
server.use("/teachers", teacherRoutes); //Todo lo que empiece por "/teachers" me lo rediriges a teacherRoutes.
server.use("/", indexRoutes);



server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
})
