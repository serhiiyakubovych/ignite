const mysql = require("mysql");

const dbPool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "test"
});

module.exports = dbPool;