const NewsModel = require("./news.model");

const getNewsList = async () => {
  return await NewsModel.getNewsList();
};

const getCommentByPostId = async (id) => {
  return await NewsModel.getCommentByPostId(id);
};

const getPostById = async (id) => {
  return await NewsModel.getPostById(id);
};

const createNewPost = async ({ id_author, title, content }) => {
  if (!id_author || !title || !content) throw new Error("Can't create new post: not enough data");
  return await NewsModel.createNewPost({ id_author, title, content });
};

const createNewComment = async ({ id_news_item, id_author, text }) => {
  if (!id_news_item || !id_author || !text) throw new Error("Can't create new comment: not enough data");
  const existCheck = getPostById(id_news_item);
  if (!existCheck) throw new Error("Can't create new comment: original post doesn't exist");

  return await NewsModel.createNewComment({ id_news_item, id_author, text });
};

module.exports = { getNewsList, getCommentByPostId, getPostById, createNewPost, createNewComment };
