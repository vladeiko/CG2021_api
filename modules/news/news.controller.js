const userService = require("../user/user.service");
const NewsService = require("./news.service");

const getNewsList = async (req, res) => {
  const result = await NewsService.getNewsList();
  res.status(200).json(result);
};

const getPostById = async (req, res) => {
  const id = req.params.id;
  const post = await NewsService.getPostById(id);
  const comments = await NewsService.getCommentByPostId(id);
  const user = await userService.getUserById(post.id_author);
  res.status(200).json({ post: post, user: user, comments: comments });
};

const createNewPost = async (req, res) => {
  const id_author = req.user.id;
  const { title, content } = req.body.data;
  const result = await NewsService.createNewPost({
    id_author,
    title,
    content,
  });
  res.status(200).json(result);
};

const createNewComment = async (req, res) => {
  const id_author = req.user.id;
  const { id_news_item, text } = req.body.data;
  const result = await NewsService.createNewComment({
    id_news_item,
    id_author,
    text,
  });
  res.status(200).json(result);
};

module.exports = { getNewsList, getPostById, createNewPost, createNewComment };
