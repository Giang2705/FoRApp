const router = require("express").Router()
const productControllers = require("../controllers/foodControllers")

router.route("/foods")
    .get(productControllers.getFoods)
    .post(productControllers.createFood)

router.route("/foods/:id")
    .delete(productControllers.deleteFood)
    .put(productControllers.updateFood)

module.exports = router