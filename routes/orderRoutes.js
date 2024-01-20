const express = require("express");
const orderControllers = require("../controllers/orderControllers");
const router = express.Router();

router.get("/", orderControllers.getAllOrders)
router.get("/:id", orderControllers.getAnOrder)
router.get("/getOrdersInRes/:shopOwnerId", orderControllers.getAllOrdersInRes)
router.get("/getOrdersOfUser/:userId", orderControllers.getAllOrdersOfUser)
router.post("/create", orderControllers.createOrder)
router.delete("/:id", orderControllers.deleteOrder)
router.put("/:id", orderControllers.updateOrder)

module.exports = router