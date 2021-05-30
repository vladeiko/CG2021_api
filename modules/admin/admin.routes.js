const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const AdminMiddleware = require("../../middlewares/admin");
const AdminController = require("./admin.controller");

router.get("/", AuthMiddleware, AdminMiddleware, AdminController.getProfileInfo);
router.get("/teams", AuthMiddleware, AdminMiddleware, AdminController.getTeamsList);
router.post("/createTeam", AuthMiddleware, AdminMiddleware, AdminController.createTeam);

module.exports = router;
