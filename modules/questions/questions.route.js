const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const QuestionsController = require("./questions.controller");

router.get("/", AuthMiddleware, QuestionsController.getQuestionsList);
router.get("/:id", AuthMiddleware, QuestionsController.getQuestionById);
router.post("/newquestion", AuthMiddleware, QuestionsController.createNewQuestion);
router.post("/question", AuthMiddleware, QuestionsController.createNewAnswer);

module.exports = router;
