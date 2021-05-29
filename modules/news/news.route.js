const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const NewsController = require("./news.controller");

router.get("/news", NewsController.getNewsList);
router.get("/post", NewsController.getPostById);
router.post("/newpost", AuthMiddleware, NewsController.createNewPost);
router.post("/post", AuthMiddleware, NewsController.createNewComment);

module.exports = router;
