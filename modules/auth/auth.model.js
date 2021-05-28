const db = require("../../config/db");

const testModel = async () => {
  const connection = await db.getPromise();
  const queryString = `
  SELECT * from users
  WHERE email = ?;
  `;
  const result = await connection.query(queryString, ["test@test.test"]);
  return result[0];
};

module.exports = { testModel };
