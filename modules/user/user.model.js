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
    console.log("oh fuck no there's an error in getting an id of a role. shit piss fuck cum.");
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
  console.log("+++++++++++++++++++++++++++++++++");
  console.log(user_id);
  console.log(info_team);
  console.log(info_role);
  console.log("+++++++++++++++++++++++++++++++++");
  const connection = await db.getPromise();
  console.log("connetion in user info");
  const params = [user_id, info_team, info_role];
  console.log("params in user info");
  const queryString = `
  INSERT INTO user_info (id_user, team, role)
  VALUES (?, ?, ?);
  `;
  console.log("query in user info");
  const result = await connection.query(queryString, params);
  console.log("sent user info");
  return result[0];
};

const createUserRole = async ({ user_id, user_role }) => {
  const connection = await db.getPromise();
  const id_role = await getRoleId(user_role);
  const params = [user_id, id_role];
  console.log(user_id);
  console.log(id_role);
  const queryString = `
  INSERT INTO user_roles (id_user, id_role)
  VALUES (?, ?);
  `;

  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = { createUser, getUserById, getUserByEmail, createUserInfo, createUserRole, getRoleId };
