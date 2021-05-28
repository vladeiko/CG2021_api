const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../../utils");
const UserService = require("../user/user.service");
const AuthModel = require("./auth.model");

const testService = async () => {
  return await AuthModel.testModel();
};

const verifyPassword = async (candidate, actual) => {
  if (!candidate || !actual) throw new Error("Missed Parameter");
  return await bcrypt.compare(candidate, actual);
};

const signIn = async (email) => {
  const user = await UserService.getUserByEmail(email);
  const token = generateAccessToken(user);

  return { user, access_token: token };
};

module.exports = { testService, verifyPassword, signIn };
