const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const AuthController = require("./auth.controller");

router.get("/test", AuthMiddleware, AuthController.testRoute);
router.post("/signup", AuthController.signUp);
router.post("/signin", AuthController.signIn);

module.exports = router;
