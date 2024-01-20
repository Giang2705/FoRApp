const express = require("express");
const foodControllers = require("../controllers/foodControllers");
const router = express.Router();

router.get("/", foodControllers.getAllFood)
router.get("/:restaurantId", foodControllers.getAllFoodInRes)
router.post("/create", foodControllers.createFood)
router.delete("/:id", foodControllers.deleteFood)
router.put("/:id", foodControllers.updateFood)

module.exports = router