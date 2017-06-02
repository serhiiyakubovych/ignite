/**
 * Lesson 31, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте подключение к базе данных test(файл с базой данных находится в папке  test_db).
 * 
 * ###Задача 2 
 * Выберите все элементы test_table базы данных test и отобразите на странице в виде таблицы. 
 * 
 * ###Задача 3 
 * Добавьте в таблицу test_table базы данных test один элемент. 
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

            insertTestDataIntoDB(dbConnection, "test_table", {
                id: parseInt(Math.random() * 10000), // add element with random id
                name: "John",
                info: "Kind man"
            });
            renderPageWithAllDBRecords(dbConnection, "test_table", res);
            endDBConnection(dbConnection);
        })
    });

http.createServer(app).listen(app.get("PORT"));

function insertTestDataIntoDB(dbConnection, tableName, dataToInsert) {
    let sql = "INSERT INTO ?? (id, name, info) VALUES (?, ?, ?)";
    dbConnection.query(sql, [tableName, dataToInsert.id, dataToInsert.name, dataToInsert.info], (queryError) => {
        if (queryError) {
            console.log(queryError);
        }
    });
}
function renderPageWithAllDBRecords(dbConnection, tableName, res) {
    let sql = "SELECT * FROM ??";
    dbConnection.query(sql, [tableName], (queryError, rows) => {
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
    });
}
function endDBConnection(dbConnection) {
    dbConnection.end((endErr) => {
        if (endErr) {
            console.log(endErr);
            res.status(500).end("500. Connection error of DB.")
            return;
        }
    });
}