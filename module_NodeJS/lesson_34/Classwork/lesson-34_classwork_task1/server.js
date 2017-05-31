/**
 * Lesson 34, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * * Создайте Express сервер и подключите к нему модуль socket.io.  
 */

const express = require("express"),
      http = require("http"),
      path = require("path"),
      socketIO = require("socket.io");

const app = express(),
      server = http.createServer(app),
      io = socketIO(server);

app.set("PORT", process.env.port || 1337);

app.route("/")
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname, "index.html"));
    });

app.use("/libs", express.static(path.join(__dirname, "libs")));

io.on("connection", (socket) => {
    // interactions example
    socket.on("send query for uppercase", (query) => {
        let answer = query.message.toUpperCase();
        socket.emit("receive uppercase", { answer });
        socket.disconnect();
    });
});

server.listen(app.get("PORT"));