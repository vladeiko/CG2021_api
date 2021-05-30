const db = require("../../config/db");

const getTeamById = async (id) => {
  const connection = await db.getPromise();

  const queryString = `
    SELECT *, users_teams.id_user, users.first_name,
       users.last_name, user_info.role FROM teams
    INNER JOIN users_teams ON teams.id = users_teams.id_team
    INNER JOIN users on users_teams.id_user = users.id
    INNER JOIN user_info on users.id = user_info.id_user
    WHERE teams.id = ?;
    `;

  const result = await connection.query(queryString, [id]);
  return result[0][0];
};

const getTeamsList = async () => {
  const connection = db.getPromise();

  const queryString = `
    SELECT *, users_teams.id_user, users.first_name,
       users.last_name, user_info.role FROM teams
    INNER JOIN users_teams ON teams.id = users_teams.id_team
    INNER JOIN users on users_teams.id_user = users.id
    INNER JOIN user_info on users.id = user_info.id_user;
    `;

  const result = await connection.query(queryString);
  return result[0][0];
};

const createTeam = async ({ name, caseText }) => {
  const connection = await db.getPromise();
  const params = [name, caseText];

  const queryString = `
    INSERT INTO teams (name, case) VALUES (?, ?);
    `;

  const result = await connection.query(queryString, params);
  return result[0];
};

const addUserToTheTeam = async ({ id_team, id_user }) => {
  const connection = await db.getPromise();
  const params = [id_team, id_user];

  const queryString = `
    INSERT INTO users_teams (id_team, id_user) VALUES (?, ?);
    `;

  const result = await connection.query(queryString, params);
  return result[0];
};

module.exports = { getTeamById, getTeamsList, createTeam, addUserToTheTeam };
