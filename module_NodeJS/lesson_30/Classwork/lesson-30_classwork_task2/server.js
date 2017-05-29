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
 */

const express = require("express"),
      http = require("http"),
      path = require("path");

const app = express();

app.set("port", process.env.port || 1337);

app.use((req, res, next) => {
    let filePath = path.join(__dirname, "index.html");
    res.sendFile(filePath);

    next();
});

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Request method: ${req.method}`);
});

http.createServer(app).listen(app.get("port"));