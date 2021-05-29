const NewsService = require("./news.service");

const getNewsList = async (req, res) => {
  const result = await NewsService.getNewsList();
  res.status(200).json(result);
};

const getPostById = async (req, res) => {
  const id = req.body.data;
  const post = await NewsService.getPostById(id);
  const comments = await NewsService.getCommentByPostId(id);
  res.status(200).json({ post: post, comments: comments });
};

const createNewPost = async (req, res) => {
  const { id_author, title, content } = req.body.data;
  const result = await NewsService.createNewPost({
    id_author,
    title,
    content,
  });
  res.status(200).json(result);
};

const createNewComment = async (req, res) => {
  const { id_news_item, id_author, text } = req.body.data;
  const result = await NewsService.createNewComment({
    id_news_item,
    id_author,
    text,
  });
  res.status(200).json(result);
};

module.exports = { getNewsList, getPostById, createNewPost, createNewComment };
