/**
 * Lesson 34, Homework, Serhii Yakubovych
 * 
 * ###Задача 1 
 * 1) Создайте Express сервер и подключите к нему модуль socket.io.  
 * 2) На стороне сервера создайте пространство имен с произвольным именем, 
 * которое генерирует событие 'message' и передает через событие объект {text: 'Hello from namespace'}.  
 * 3) На стороне клиента создайте обработчик события 'message', 
 * который выводит данные, переданные через событие, на экран и генерирует событие 'receive_message'.
 * 4) На стороне сервера установите обработчик события 'receive_message', 
 * который выведет в консоль текст 'message received'. 
 */
const express = require("express"),
      http = require("http"),
      path = require("path"),
      socketIO = require("socket.io");

const app = express(),
      server = http.createServer(app),
      io = socketIO(server),
      messagerNamespace = io.of("/messager");

app.set("PORT", process.env.port || 1337);

app.use("/libs", express.static(path.join(__dirname, "libs")));
app.use("/js", express.static(path.join(__dirname, "js")));

app.route("/")
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname, "index.html"), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

messagerNamespace.on("connection", (socket) => {
    socket.emit("message", {text: 'Hello from namespace'});

    socket.on("receive_message", () => {
        console.log("message received");
        socket.disconnect();
    });
});

server.listen(app.get("PORT"));