const db = require("../../config/db");

const getUserById = async (id) => {
  const connection = await db.getPromise();

  const queryString = `
  SELECT * FROM users WHERE id = ?;
  `;

  const result = await connection.query(queryString, [id]);
  return result[0][0];
};

const getUserByEmail = async (email) => {
  const connection = await db.getPromise();

  const queryString = `
  SELECT * FROM users WHERE email = ?;
  `;

  const result = await connection.query(queryString, [email]);
  return result[0][0];
};

const getRoleId = async (role_title) => {
  const connection = await db.getPromise();

  const queryString = `
  SELECT * FROM roles WHERE role_title = ?;
  `;
  try {
    const result = await connection.query(queryString, [role_title]);
    return result[0][0].id;
  } catch (err) {
    throw new Error(`Inexistent role "${role_title}"`);
  }
};

const createUser = async ({ email, password, first_name, last_name }) => {
  const connection = await db.getPromise();
  const params = [email, password, first_name, last_name];
  const queryString = `
  INSERT INTO users (email, password, first_name, last_name)
  VALUES (?, ?, ?, ?);
  `;
  const result = await connection.query(queryString, params);
  return result[0];
};

const createUserInfo = async ({ user_id, info_team, info_role }) => {
  const connection = await db.getPromise();
  const params = [user_id, info_team, info_role];
  const queryString = `
  INSERT INTO user_info (id_user, team, role)
  VALUES (?, ?, ?);
  `;
  const result = await connection.query(queryString, params);
  return result[0];
};

const createUserRole = async ({ user_id, user_role }) => {
  const connection = await db.getPromise();
  const id_role = await getRoleId(user_role);
  const params = [user_id, id_role];

  const queryString = `
  INSERT INTO user_roles (id_user, id_role)
  VALUES (?, ?);
  `;

  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = { createUser, getUserById, getUserByEmail, createUserInfo, createUserRole, getRoleId };
