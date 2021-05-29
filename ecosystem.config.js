module.exports = {
  apps: [
    {
      name: "cg2021_api",
      script: "./index.js",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 4000,
        DB_HOST: "127.0.0.1",
        DB_DEFAULT: "cg2021_app",
        DB_USER: "root",
        DB_PW: "121019601",
        DB_PORT: 3306,
        TOKEN_SECRET: "7bc78545b1a3923cc1e1e19523fd5c3f20b409509",
      },
      ignore_watch: ["node_modules", ".git/*/*"],
    },
  ],
};
