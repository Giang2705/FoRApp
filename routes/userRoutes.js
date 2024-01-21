const express = require("express");
const userControllers = require("../controllers/userControllers");

const router = express.Router();
router.put("/changePassword", userControllers.updatePassword);
router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUser);

module.exports = router;