const mysql = require("mysql");
      session = require("express-session"),
      MySQLStore = require("express-mysql-session")(session);

// hosting
// const dbOptions = {
//     host: "display-4480.mysql.dbs.appsdeck.eu",
//     user: "display_4480",
//     password: "6TND6EXZyZNhbOC9FLie",
//     port: 31395,
//     database: "display_4480"
// };

// localhost
const dbOptions = {
    host: "127.0.0.1",
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