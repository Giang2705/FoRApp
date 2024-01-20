const express = require("express");
const restaurantControllers = require("../controllers/restaurantControllers");
const router = express.Router();

router.post("/create", restaurantControllers.createRestaurant)
router.put("/:id", restaurantControllers.updateRestaurant)
router.delete("/:id", restaurantControllers.deleteRestaurant)
router.get("/", restaurantControllers.getListRestaurant)

module.exports = router