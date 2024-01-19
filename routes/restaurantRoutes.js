const express = require("express");
const restaurantControllers = require("../controllers/restaurantControllers");
const router = express.Router();

router.post("/create", restaurantControllers.createRestaurant)

module.exports = router