const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const auth = require("../middlewares/authTokenRequires")

router.post("/register", userControllers.register);

router.post("/login", userControllers.login);

router.get("/logout", userControllers.logout);

router.get("/refresh_token", userControllers.refreshToken)

router.get("/infor", auth, userControllers.getUser)

router.patch("/addcart", auth, userControllers.addCart)

router.get("/history", auth, userControllers.history)

module.exports = router;