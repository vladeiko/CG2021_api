const UserModel = require("../user/user.model");
const TeamsModel = require("./teams.model");

const getTeamById = async (id) => {
  return await TeamsModel.getTeamById(id);
};

const getTeamsList = async () => {
  return await TeamsModel.getTeamsList();
};

const createTeam = async ({ name, caseText }) => {
  return await TeamsModel.createTeam({ name, caseText });
};

const addUserToTheTeam = async ({ id_team, id_user, name, role }) => {
  const userAdd = await TeamsModel.addUserToTheTeam({ id_team, id_user });
  const teamAdd = await UserModel.addTeamToTheUser({ id_user, name, role });
  const result = [userAdd, teamAdd];

  return result;
};

module.exports = { getTeamById, getTeamsList, createTeam, addUserToTheTeam };
