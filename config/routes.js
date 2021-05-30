const auth = require("../modules/auth/auth.route");
const news = require("../modules/news/news.route");
const questions = require("../modules/questions/questions.route");
const profile = require("../modules/profile/profile.route");
const admin = require("../modules/admin/admin.routes");

const initRouter = (app) => {
  app.use("/auth", auth);
  app.use("/news", news);
  app.use("/questions", questions);
  app.use("/profile", profile);
  app.use("/admin", admin);
};

module.exports = { initRouter };
