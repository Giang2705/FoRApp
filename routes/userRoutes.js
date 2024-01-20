const express = require("express");
const userControllers = require("../controllers/userControllers");

const router = express.Router();
router.put("/changePassword", userControllers.updatePassword);

module.exports = router;