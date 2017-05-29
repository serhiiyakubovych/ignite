/**
 * Lesson 30, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте HTTP сервер с помощью Express, 
 * который в ответ на любой запрос возвращает html страницу с заголовком "Hello from Express"(в теге h1). 
 */

const express = require("express"),
      http = require("http"),
      path = require("path");

const app = express();

app.set("port", process.env.port || 1337);

app.use((req, res, next) => {
    let filePath = path.join(__dirname, "index.html");
    res.sendFile(filePath);
});

http.createServer(app).listen(app.get("port"));