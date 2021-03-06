/**
 * Lesson 31, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте подключение к базе данных test(файл с базой данных находится в папке  test_db).
 */

const express = require("express"),
      http = require("http"),
      mysql = require("mysql");

const app = express();

app.set("PORT", process.env.port || 1337);

app.route("/")
    .get((req, res, next) => {
        const dbConnection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "123",
            database: "test"
        });
        
        dbConnection.connect((connErr) => {
            if (connErr) {
                console.log(connErr);
                res.status(500).end("500. Cannot connect to DB.");
                return;
            }

            dbConnection.end((endErr) => {
                if (endErr) {
                    console.log(endErr);
                    res.status(500).end("500. Connection error of DB.")
                    return;
                }
                res.end("Connection was successful.");
            });
        })
    });

http.createServer(app).listen(app.get("PORT"));