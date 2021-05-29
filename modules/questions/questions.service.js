const QuestionsModel = require("./questions.model");

const getQuestionsList = async () => {
  return await QuestionsModel.getQuestionsList();
};

const getAnswersByQuestionId = async (id) => {
  return await QuestionsModel.getAnswersByQuestionId(id);
};

const getQuestionById = async (id) => {
  return await QuestionsModel.getQuestionById(id);
};

const createNewQuestion = async ({ id_author, title, content }) => {
  if (!id_author || !title || !content) throw new Error("Can't create new post: not enough data");
  return await QuestionsModel.createNewQuestion({ id_author, title, content });
};

const createNewAnswer = async ({ id_questions_item, id_author, text }) => {
  if (!id_questions_item || !id_author || !text) throw new Error("Can't create new comment: not enough data");
  const existCheck = getQuestionById(id_questions_item);
  if (!existCheck) throw new Error("Can't create new comment: original post doesn't exist");

  return await QuestionsModel.createNewAnswer({ id_questions_item, id_author, text });
};

module.exports = { getQuestionsList, getAnswersByQuestionId, getQuestionById, createNewQuestion, createNewAnswer };
