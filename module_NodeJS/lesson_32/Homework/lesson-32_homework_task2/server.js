/**
 * Lesoon 32, Homework, Serhii Yakubovych
 * 
 * ###Задача 2 
 * Создайте страницу регистрации пользователей. 
 * База данных для сохранения сессий(таблица sessions) и пользователей(таблица users) находится в папке db рядом 
 * с файлом с задачами. 
 * Модуль для работы с паролем(его хэширования и проверки) находится в папке Homework рядом с файлом с задачами.  
 * 1) Создайте страницу с полями ввода username и password и кнопкой sign up. 
 * 2) Если поля ввода не пустые, при нажатии на кнопку sign up, пароль хэшируется. Хэш пароля и имя пользователя 
 * сохраняются в таблице users базы данных session_test. 
 */

const express = require("express"),
      http = require("http"),
      path = require("path"),
      bodyParser = require("body-parser"),
      requestsHandlers = require("./js/requests_handlers");

const app = express(),
      jsonParser = bodyParser.json();

app.set("PORT", process.env.port || 1337);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "views")));
app.use(jsonParser);

app.route("/").get(requestsHandlers.displayHomePage);
app.route("/signup")
    .get(requestsHandlers.displaySignupPage)
    .post(requestsHandlers.signupUser);

app.use(requestsHandlers.handleServerErrors);

http.createServer(app).listen(app.get("PORT"));