const express = require("express");

const controller = require("./teacher.controller");

const router = express.Router();

// ruta: /teachers/
router.get("/", controller.indexGet);

// Para poder ver un profesor, tenemos que crearlo:
// ruta: /teachers/create
router.post("/create", controller.createPost);

router.put("/edit/:id", controller.editPut);

module.exports = router;