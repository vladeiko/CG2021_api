const TeamsService = require("../teams/teams.service");
const UserService = require("../user/user.service");

const getProfileInfo = async (req, res) => {
  const id_user = req.user.id_user;
  const result = await UserService.getUserById(id_user);
  res.status(200).json(result);
};

const getTeamsList = async (req, res) => {
  const result = await TeamsService.getTeamsList();

  res.status(200).json(result);
};

const pickTeam = async (req, res) => {
  const id_user = req.user.id;
  const id_team = req.params.id;
  const { team, role } = req.body.data;

  const result = await TeamsService.addUserToTheTeam({ id_team, id_user, team, role });

  res.status(200).json(result);
};

module.exports = { getProfileInfo, getTeamsList, pickTeam };
