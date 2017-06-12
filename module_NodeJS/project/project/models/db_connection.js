const mysql = require("mysql");
      session = require("express-session"),
      MySQLStore = require("express-mysql-session")(session);

const dbOptions = {
    host: "localhost",
    user: "root",
    password: "123",
    port: 3306,
    database: "data"
};

const dbPool = mysql.createPool(dbOptions);
      sessionStore = new MySQLStore(dbOptions);

module.exports = {
    dbPool,
    sessionStore
};