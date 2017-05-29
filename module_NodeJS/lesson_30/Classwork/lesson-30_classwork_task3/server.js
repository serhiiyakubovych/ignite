/**
 * Lesson 30, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте HTTP сервер с помощью Express, 
 * который в ответ на любой запрос возвращает html страницу с заголовком "Hello from Express"(в теге h1). 
 * 
 * ###Задача 2 
 * Дополните код предыдущей задачи. 
 * Напишите middleware-функцию, которая будет выводить в консоль путь и HTTP метод запроса.
 * 
 * ###Задача 3 
 * Дополните код предыдущей задачи. Добавьте 2 middleware-функции: 
 * 1) функция для обработки GET запроса по пути '/test'. 
 * Функция должна возвращать html страницу с полем ввода и кнопкой. 
 * Если поле ввода не пустое, при нажатии на кнопку создается POST запрос по пути '/test'. 
 * Тело запроса - текст поля ввода.  
 * 2) функция для обработки POST запроса по пути '/test'. Функция выводит на экран тело запроса. 
 */

const express = require("express"),
      http = require("http"),
      bodyParser = require("body-parser");

const app = express();

app.set("port", process.env.port || 1337);

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Request method: ${req.method}`);
    next();
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.route("/")
    .all((req, res, next) => {
        res.writeHead(301, {"Location": "index.html"});
        res.end();
        next();
    });

app.route("/test")
    .get((req, res, next) => {
        res.writeHead(301, {"Location": "test.html"});
        res.end();
    })
    .post((req, res, next) => {
        let message = req.body.message;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(message);
    });

http.createServer(app).listen(app.get("port"));