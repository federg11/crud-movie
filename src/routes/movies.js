const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviesController");


router.get("/list", movieController.list);
//rutas de creación
// router.???("???", movieController.???);
// router.???("???", movieController.???);

// //rutas para edición
// router.???("???", movieController.???);
// router.???("???", movieController.???);

// //ruta para eliminar
// router.???("???", movieController.???);

module.exports = router;