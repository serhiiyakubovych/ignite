/**
 * Lesson 34, Homework, Serhii Yakubovych
 * 
 * ###Задача 2  
 * Создание простого чата. 
 * 
 * 1) Создайте Express сервер и подключите к нему модуль socket.io.   
 * 2) На стороне клиента создайте html страницу с полем ввода и кнопкой. 
 * 3) Если поле ввода не пустое, при нажатии на кнопку генерируется событие 'send_message',
 * через событие передаются данные поля ввода. 
 * 4) На стороне сервера создайте обработчик события 'send_message'.
 * Обработчик генерирует событие 'chat_message' и отсылает его всем подключенным клиентам.
 * Через событие 'chat_message' передаются данные, полученные в событии 'send_message'. 
 * 5) На стороне клиента создайте обработчик события 'chat_message',
 * который выводит на экран данные, переданные через событие. 
 * 
 * ###Задача 3(Дополнительное задание) 
 * Добавьте в чат, созданный в предыдущей задаче, возможность авторизации пользователей. 
 */

const express = require("express"),
      http = require("http"),
      path = require("path"),
      socketIO = require("socket.io");

const app = express(),
      server = http.createServer(app),
      io = socketIO(server);

let connections = [],
    users = [],
    messages = [];

app.set("PORT", process.env.port || 1337);

app.use("/libs", express.static(path.join(__dirname, "libs")));
app.use("/js", express.static(path.join(__dirname, "js")));

app.route("/")
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname, "views/index.html"), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

app.route("/auth")
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname, "views/auth.html"), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

app.route("/chat/:userName")
    .get((req, res, next) => {
        users.push(req.params.userName);
        res.sendFile(path.join(__dirname, "views/chat.html"), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });

app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).end("500. Server error.");
        next(err.message);
    }
});

io.on("connection", (socket) => {
    connections.push(socket);
    io.sockets.emit("update_users", users);

    socket.on("load_messages", () => {
        socket.emit("messages_loaded", messages);
    });
    socket.on("send_message", (data) => {
        let currentSocketIndex = connections.indexOf(socket),
            sendData = {user: users[currentSocketIndex], message: data.message};
        messages.push(sendData);
        io.sockets.emit("chat_message", sendData);
    });
    socket.on("disconnect", () => {
        let currentSocketIndex = connections.indexOf(socket);
        connections.splice(currentSocketIndex, 1);
        users.splice(currentSocketIndex, 1);
        io.sockets.emit("update_users", users);
    });
});

server.listen(app.get("PORT"));