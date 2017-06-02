/**
 * Lesson 31, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте подключение к базе данных test(файл с базой данных находится в папке  test_db).
 * 
 * ###Задача 2 
 * Выберите все элементы test_table базы данных test и отобразите на странице в виде таблицы. 
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

            let sql = "SELECT * FROM `test_table`";
            dbConnection.query(sql, (queryError, rows) => {
                if (queryError) {
                    console.log(queryError);
                    res.status(500).end("500. Cannot make a query to DB.");
                    return;
                }

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write("<table>");
                res.write("<thead><tr><th>ID</th><th>Name</th><th>Info</th></tr></thead>");
                res.write("<tbody>");
                for (let i = 0; i < rows.length; i++) {
                    res.write(`<tr>
                                    <td>${rows[i].id}</td>
                                    <td>${rows[i].name}</td>
                                    <td>${rows[i].info}</td>
                                <tr>`);
                }
                res.write("</tbody></table>");
                res.end();

                dbConnection.end((endErr) => {
                    if (endErr) {
                        console.log(endErr);
                        res.status(500).end("500. Connection error of DB.")
                        return;
                    }
                });
            });
        })
    });

http.createServer(app).listen(app.get("PORT"));