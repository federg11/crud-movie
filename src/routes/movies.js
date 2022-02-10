const express = require("express");
const router = express.Router();
const movieController = require("../controllers/moviesController");
const configMulter = require("../middlewares/movieMulter");


router.get("/list", movieController.list);
router.get("/detail/:id", movieController.detail);
router.get("/create", movieController.create);
router.post("/create", configMulter.single("image"),movieController.store);
router.get("/edit/:id", movieController.edit);
router.put("/edit/:id", configMulter.single("image"),movieController.update);
router.delete("/delete/:id", movieController.destroy);


module.exports = router;