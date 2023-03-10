const express = require("express");

//Importamos el módulo db (db.js)
const db = require("./src/utils/db");
//Usamos la funcion connectDB del modulo db.js
db.connectDB();

// Rutas importadas
const indexRoutes = require("./src/api/index/index.routes")
const teacherRoutes = require("./src/api/teachers/teacher.routes")
const courseBlocksRoutes = require("./src/api/course-blocks/courseBlocks.routes")
const usersRoutes = require("./src/api/users/user.routes");

// AUTENTICACIÓN 
const passport = require("passport");
const auth = require("./src/utils/auth/index");
auth.TurnOnAuth();


const PORT = 3000;

// Donamos todas las herramientas de express a una variable llamada server.
const server = express();

// Transforma el contenido o cuerpo de las peticiones POST (req.body)
// Convierte cuando enviamos un post con json al servidor
server.use(express.json());
// Los POST de formulario llegaran como url.encode y hay que transformalas
server.use(express.urlencoded({extended: true}));

// AUTENTICACIÓN! //

server.use(passport.initialize());


// Configuración de todas las rutas de nuestro servidor.
server.use("/teachers", teacherRoutes); //Todo lo que empiece por "/teachers" me lo rediriges a teacherRoutes.
// Las rutas las crearemos con guiones medios, a diferencia del modelo que será en base de datos course_blocks
server.use("/course-blocks", courseBlocksRoutes);
server.use("/users", usersRoutes);
server.use("/", indexRoutes);

// CONTROL DE ERRORES

// Por aqui pasarán todas las rutas que no existan
// Si no hacen match en las rutas previas, llegarán aqui y harán match con asterisco.
server.use("*", (req, res, next) => {
    return res.status(404).json("No se encuentra la URL, Prueba con otra URL");
})

// Controlador de errores
server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Unexpected Error!";
    return res.status(status).json(message);
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/`);
})
