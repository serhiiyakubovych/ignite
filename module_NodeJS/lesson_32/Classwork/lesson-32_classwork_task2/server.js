/**
 * Lesson 32, Classwork, Serhii Yakubovych
 * 
 * ###Задача 2 
 * Создайте HTTP сервер. Используя модуль express-session, 
 * создайте сессию и реализуйте ее сохранение в базе данных 
 * (используя модуль express-mysql-session). 
 * База данных для хранения сессий находится в папке db рядом с файлом с задачами.
 */

const express = require("express"),
      http = require("http"),
      session = require("express-session"),
      MySQLStore = require("express-mysql-session")(session);

const app = express(),
      sessionDBOptions = {
          host: "localhost",
          port: 3306,
          user: "root",
          password: "123",
          database: "session_test",
          expiration: 86400000,
          checkExpirationInterval: 900000
      },
      sessionStore = new MySQLStore(sessionDBOptions);

app.set("PORT", process.env.port || 1337);

app.use(session({
    secret: "Secret key",
    saveUninitialized: true,
    resave: true,
    store: sessionStore
}));

app.route("/")
    .get((req, res, next) => {
        if (!req.session.randomNum) {
            req.session.randomNum = parseInt(Math.random() * 1000);
        }
        res.end(`Your session ID: ${req.session.id}; Random number of your session: ${req.session.randomNum}`);
    });

app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).end("500. Server error.");
    }
});

http.createServer(app).listen(app.get("PORT"));