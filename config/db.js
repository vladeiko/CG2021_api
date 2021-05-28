const mysql = require("mysql2");

console.log("Start connection to Database");

const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PW || "",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_DEFAULT || "cg2021-app",
  timezone: "+00:00",
};

const dbPool = mysql.createPool({
  ...config,
  connectionLimit: 10,
  waitForConnections: true,
});
dbPool.once("connection", () => console.log("Connected to ME database"));

exports.getConfig = () => config;

exports.getPromise = () => dbPool.promise();

exports.getConnection = () =>
  new Promise((resolve, reject) => {
    dbPool.getConnection((err, conn) => {
      if (err) {
        reject(err);
      } else {
        resolve(conn.promise());
      }
    });
  });

exports.releaseConnection = (conn) => {
  conn.release();
};
