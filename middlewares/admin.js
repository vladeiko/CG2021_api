const UserService = require("../modules/user/user.service");

const AdminMiddleware = async (req, res, next) => {
  const role = await UserService.getUserRole(req.user.id_user);
  let confirmationFlag = 0;
  for (const element of role) {
    if (element.id_role === 2) {
      confirmationFlag = 1;
      next();
    }
  }
  if (!confirmationFlag) res.sendStatus(403).json({ Message: "Wasn't able to confirm role" });
};

module.exports = AdminMiddleware;
