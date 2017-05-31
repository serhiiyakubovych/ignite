/**
 * Lesson 34, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * * Создайте Express сервер и подключите к нему модуль socket.io.  
 * 
 * ###Задача 2 
 * Дополните код предыдущей задачи. 
 * 
 * 1) С помощью socket.io сгенерируйте событие 'greet', 
 * которое передаст следующие данные: {text: 'Hello from Socket.IO'}. 
 * 2) Создайте клиента socket.io. Установите обработчик события 'greet', 
 * которая выводит на экран данные, переданные через событие и генерирует событие 'receive_message'. 
 * 3) На стороне сервера установите обработчик события 'receive_message', 
 * который выведет в консоль текст 'message received'. 
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
    socket.emit("greet", {text: 'Hello from Socket.IO'});

    socket.on("receive_message", () => {
        console.log("message received");
        socket.disconnect();
    });
});

server.listen(app.get("PORT"));