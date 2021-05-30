const db = require("../../config/db");

const getQuestionsList = async () => {
  const connection = await db.getPromise();

  const queryString = `
    SELECT *, questions.id as id_question, users.first_name, users.last_name FROM questions
    INNER JOIN users ON questions.id_author = users.id;
    `;

  const result = await connection.query(queryString);
  return result[0];
};

const getAnswersByQuestionId = async (id) => {
  const connection = await db.getPromise();

  const queryString = `
    SELECT *, users.first_name, users.last_name FROM questions_answers
    INNER JOIN users ON questions_answers.id_author = users.id
    WHERE questions_answers.id_question = ?; 
    `;

  const result = await connection.query(queryString, [id]);
  return result[0];
};

const getQuestionById = async (id) => {
  const connection = await db.getPromise();

  const queryString = `
  SELECT *, users.first_name, users.last_name FROM questions
  LEFT JOIN users ON questions.id_author = users.id
   WHERE questions.id = ?;
    `;
  const result = await connection.query(queryString, [id]);
  return result[0][0];
};

const createNewQuestion = async ({ id_author, title, content }) => {
  const connection = db.getPromise();
  const params = [id_author, title, content];

  const queryString = `
    INSERT INTO questions (id_author, title, content) VALUES (?, ?, ?);
    `;

  const result = await connection.query(queryString, params);
  return result[0];
};

const createNewAnswer = async ({ id_question, id_author, text }) => {
  const connection = db.getPromise();
  const params = [id_question, id_author, text];

  const queryString = `
    INSERT INTO questions_answers(id_question, id_author, text) VALUES(?, ?, ?);
    `;

  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = { getQuestionsList, getAnswersByQuestionId, getQuestionById, createNewQuestion, createNewAnswer };
