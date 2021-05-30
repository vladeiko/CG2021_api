const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const ProfileController = require("./profile.controller");

router.get("/", AuthMiddleware, ProfileController.getProfileInfo);
router.get("/enlist", AuthMiddleware, ProfileController.getTeamsList);
router.post("/enlist/:id", AuthMiddleware, ProfileController.pickTeam);

module.exports = router;
