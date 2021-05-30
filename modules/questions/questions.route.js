const router = require("express").Router();
const AuthMiddleware = require("../../middlewares/auth");
const QuestionsController = require("./questions.controller");

router.get("/", QuestionsController.getQuestionsList);
router.get("/:id", QuestionsController.getQuestionById);
router.post("/newquestion", AuthMiddleware, QuestionsController.createNewQuestion);
router.post("/question", AuthMiddleware, QuestionsController.createNewAnswer);

module.exports = router;
