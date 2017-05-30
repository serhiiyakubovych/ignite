/**
 * Lesson 30, Homework, Serhii Yakubovych
 * 
 * ###Задача 2 
 * Дано массив users: 
 * ```
 * users = [
 * { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
 * { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
 * ]
 * ```
 * Реализуйте следующее: 
 * 1) При GET-запросе по пути /users массив users отображается на странице в виде списка(по свойству name). 
 * При клике по каждому из элементов списка отправляется GET-запрос по пути /users/userID, 
 * где userID - свойство id массива users, соответствующее элементу списка. 
 * 2) При GET-запросе по пути /users/userID на странице отображается информация о соответствующем 
 * пользователе - свойства элемента массива users - name и age. 
 * 
 * ###Задача 3 
 * Модифицируйте код предыдущией задачи. Добавьте в код middleware-функцию для обработки ошибок. 
 * Note: I have already added a middleware function in the previous task, hence the code below is from the previous task.
 */

const express = require("express"),
      http = require("http"),
      fs = require("fs"),
      path = require("path");

const app = express();

app.set("PORT", process.env.port || 1337);

app.route("/users")
    .get((req, res, next) => {
        fs.readFile(path.join(__dirname, "users.json"), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let users = JSON.parse(data);

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<ul>");
            users.forEach((user) => {
                res.write(`<li><a href="/users/${user.id}">${user.name}</a></li>`);
            });
            res.write("</ul>");
            res.end();
        });
    });

app.route("/users/:userID")
    .get((req, res, next) => {
        fs.readFile(path.join(__dirname, "users.json"), (err, data) => {
            if (err) {
                console.log(err);
                res.status(404).write("404. Cannot load the users.");
                return;
            }

            let users = JSON.parse(data),
                targetUser = users.find((user) => user.id === +req.params.userID);
            
            if (!targetUser) {
                res.status(404).write(`404. Cannot find the user with ID ${req.params.userID}.`);
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(`<b>${targetUser.name}</b>, ${targetUser.age} years.`);
            res.end();
        });
    });

app.route("*")
    .all((req, res, next) => {
        res.status(404).type("html").end(`404. Page ${req.url} not found. <a href="/users">Go to the users page</a>.`);
    });

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).end(`500. Server error.`);
    next(err.message);
});

http.createServer(app).listen(app.get("PORT"));