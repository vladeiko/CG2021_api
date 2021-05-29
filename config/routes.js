const auth = require("../modules/auth/auth.route");
const news = require("../modules/news/news.route");
const questions = require("../modules/questions/questions.route");

const initRouter = (app) => {
  app.use("/auth", auth);
  app.use("/news", news);
  app.use("/questions", questions);
};

module.exports = { initRouter };
