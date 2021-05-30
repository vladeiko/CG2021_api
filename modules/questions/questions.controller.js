const QuestionsService = require("./questions.service");

const getQuestionsList = async (req, res) => {
  const result = await QuestionsService.getQuestionsList();
  res.status(200).json(result);
};

const getQuestionById = async (req, res) => {
  const id = req.params.id;
  const post = await QuestionsService.getQuestionById(id);
  const Answerss = await QuestionsService.getAnswersByQuestionId(id);
  res.status(200).json({ post: post, answers: Answerss });
};

const createNewQuestion = async (req, res) => {
  const id_author = req.user.id;
  const { title, content } = req.body.data;
  const result = await QuestionsService.createNewQuestion({
    id_author,
    title,
    content,
  });
  res.status(200).json(result);
};

const createNewAnswer = async (req, res) => {
  const { id_questions_item, id_author, text } = req.body.data;
  const result = await QuestionsService.createNewAnswer({
    id_questions_item,
    id_author,
    text,
  });
  res.status(200).json(result);
};

module.exports = { getQuestionsList, getQuestionById, createNewQuestion, createNewAnswer };
