const db = require("../../config/db");

const getNewsList = async () => {
  const connection = await db.getPromise();

  const queryString = `
    SELECT * FROM news
    `;

  const result = await connection.query(queryString);
  return result[0];
};

const getCommentByPostId = async (id) => {
  const connection = await db.getPromise();

  const queryString = `
    SELECT * FROM news_comments WHERE id_news_item = ?; 
    `;

  const result = await connection.query(queryString, [id]);
  return result[0];
};

const getPostById = async (id) => {
  const connection = await db.getPromise();

  const queryString = `
    SELECT * FROM news WHERE id = ?;
    `;

  const result = await connection.query(queryString, [id]);
  return result[0][0];
};

const createNewPost = async ({ id_author, title, content }) => {
  const connection = db.getPromise();
  const params = [id_author, title, content];

  const queryString = `
    INSERT INTO news (id_author, title, content) VALUES (?, ?, ?);
    `;

  const result = await connection.query(queryString, params);
  return result[0];
};

const createNewComment = async ({ id_news_item, id_author, text }) => {
  const connection = db.getPromise();
  const params = [id_news_item, id_author, text];

  const queryString = `
    INSERT INTO news_comments (id_news_item, id_author, text) VALUES(?, ?, ?);
    `;

  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = { getNewsList, getCommentByPostId, getPostById, createNewPost, createNewComment };
