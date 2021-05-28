const UserModel = require("./user.model");

const getUserById = async (id) => {
  return await UserModel.getUserById(id);
};

const getUserByEmail = async (email) => {
  return await UserModel.getUserByEmail(email);
};

const createUser = async ({ email, password, first_name, last_name, info_role, info_team, user_role }) => {
  const existUser = await getUserByEmail(email);
  if (existUser) throw new Error(`User with email "${email}" already existed`);

  await UserModel.getRoleId(user_role);
  const result = await UserModel.createUser({ email, password, first_name, last_name });
  const user_id = result.insertId;

  await UserModel.createUserInfo({ user_id, info_team, info_role });
  await UserModel.createUserRole({ user_id, user_role });
  return await getUserById(result.insertId);
};

const getUserPasswordByEmail = async (email) => {
  const user = await UserModel.getUserByEmail(email);
  if (!user) return;
  return user.password;
};

module.exports = { createUser, getUserById, getUserByEmail, getUserPasswordByEmail };
