/**
 * Lesson 32, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте HTTP сервер, который при обработке всех HTTP запросов создает подписанный cookie, 
 * доступный только для сервера со сроком жизни 1 неделя.  
 */

const express = require("express"),
      http = require("http"),
      cookieParser = require("cookie-parser");

const app = express();

app.set("PORT", process.env.port || 1337);

app.use(cookieParser("Secret info for signing."));

app.route("*")
    .all((req, res, next) => {
        res.cookie("test", "Test cookie value", {
            httpOnly: true,
            signed: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
        });
        res.end(`Test cookie: ${req.signedCookies.test}`);
    });

app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).end("500. Server error.");
        next(err.message);
    }
});

http.createServer(app).listen(app.get("PORT"));