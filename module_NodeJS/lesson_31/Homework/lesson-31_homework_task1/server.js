/**
 * Lesson 31, Homework, Serhii Yakubovych
 * 
 * Для выполнения заданий используйте базу данных test, которая находится в папке test_db рядом с файлом с задачами. 
 * 
 * ###Задача 1 
 * Создайте подключение к базе данных test через пул соединений. 
 * При GET-запросе по пути '/' выполните запрос к базе данных для выбора 
 * всех элементов таблицы test_table и отобразите их в виде таблицы. 
 */

const express = require("express"),
      http = require("http"),
      mysql = require("mysql"),
      path = require("path");

const app = express(),
      dbPool = mysql.createPool({
          host: "localhost",
          port: 3306,
          user: "root",
          password: "123",
          database: "test"
      });

app.set("PORT", process.env.port || 1337);

app.route("/")
    .get((req, res, next) => {
        dbPool.getConnection((connErr, dbConnection) => {
            if (connErr) {
                console.log(connErr);
                res.status(500).end("500. Cannot access to DB.");
                return;
            }
            
            let sql = "SELECT * FROM `test_table`";
            dbConnection.query(sql, (queryError, rows) => {
                if (queryError) {
                    console.log(queryError);
                    res.status(500).end("500. Cannot access to table `test_table`.");
                    return;
                }

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("<table> <thead><tr><th>ID</th><th>Name</th><th>Info</th></tr></thead> <tbody>");
                rows.forEach((row) => {
                    res.write(`<tr><td>${row.id}</td><td>${row.name}</td><td>${row.info}</td></tr>`)
                });
                res.write("</tbody></table>");
                res.end();

                dbConnection.release();
            });
        });
    });

app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).end("500. Server error.");
        next(err.message);
    }
});

http.createServer(app).listen(app.get("PORT"));