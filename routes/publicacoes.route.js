const express = require("express");
const router = express.Router();

const controller = require("../controllers/publicacoes.controller");

router.get("/categoria/:id", controller.index);
router.get("/nova", controller.create);
router.post("/nova", controller.store);
router.get("/editar/:categoria/:id", controller.edit);
router.post("/editar/:categoria/:id", controller.update);
router.get("/excluir/:categoria/:id", controller.destroy);

module.exports = router;
