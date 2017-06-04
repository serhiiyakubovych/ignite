const mysql = require("mysql"),
      session = require("express-session"),
      MySQLStore = require("express-mysql-session")(session);

const dbOptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "session_test"
};

module.exports = {
    dbPool: mysql.createPool(dbOptions),
    sessionStore: new MySQLStore(dbOptions)
};