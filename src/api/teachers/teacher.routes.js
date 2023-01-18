const express = require("express");

const controller = require("./teacher.controller");

const router = express.Router();

// ruta: /teachers/
router.get("/", controller.indexGet);

// ruta: /teachers/xxxxxxxxx
router.get("/:id", controller.getById);

// Para poder ver un profesor, tenemos que crearlo:
// ruta: /teachers/create
router.post("/create", controller.createPost);

// ruta: /teachers/edit/id/xxxxxxxxxx
router.put("/edit/:id", controller.editPut);

// ruta: /teachers/delete/xxxxxxxxx
router.delete("/delete/:id", controller.deleTeacher);

module.exports = router;