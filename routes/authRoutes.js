const express = require("express");
const authControllers = require("../controllers/authControllers");

const router = express.Router();

// Separate registration routes 
router.post("/register/customer", authControllers.registerCustomer);
router.post("/register/shopOwner", authControllers.registerShopOwner);
router.post("/register/staff", authControllers.registerStaff);

// Existing login and logout routes
router.post("/login", authControllers.login);
router.post("/logout", authControllers.logout);
router.post("/comparePassword", authControllers.comparePassword);

module.exports = router;