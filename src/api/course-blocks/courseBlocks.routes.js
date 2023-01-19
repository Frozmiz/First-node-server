const express = require("express");

const controller = require("./courseBlock.controller");


const router = express.Router();

router.get("/", controller.indexGet);
router.post("/create", controller.createPost);
router.put("/edit/:id", controller.editPut);

module.exports= router;