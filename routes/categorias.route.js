const express = require("express");
const router = express.Router();

const controller = require("../controllers/categorias.controller");

router.get("/", controller.index);
router.get("/nova", controller.create);
router.post("/nova", controller.store);
router.get("/editar/:id", controller.edit);
router.post("/editar/:id", controller.update);
router.get("/excluir/:id", controller.destroy);

module.exports = router;
