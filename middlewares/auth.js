const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, res) => {
    if (err) return res.sendStatus(403);

    req.user = res.user;

    next();
  });
};

module.exports = AuthMiddleware;
