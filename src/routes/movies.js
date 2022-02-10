const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviesController");
const configMulter = require("../middlewares/movieMulter");

router.get("/", movieController.list);
router.get("/movies/list", movieController.list);
router.get("/movies/detail/:id", movieController.detail);

router.get("/movies/create", movieController.create);
router.post("/movies/create", configMulter.single("image"),movieController.store);

router.get("/movies/edit/:id", movieController.edit);
router.put("/movies/edit/:id", configMulter.single("image"),movieController.update);

router.delete("/movies/delete/:id", movieController.destroy);


module.exports = router;