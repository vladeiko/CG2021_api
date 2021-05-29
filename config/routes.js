const auth = require("../modules/auth/auth.route");
const news = require("../modules/news/news.route");

const initRouter = (app) => {
  app.use("/auth", auth);
  app.use("/", news);
};

module.exports = { initRouter };
