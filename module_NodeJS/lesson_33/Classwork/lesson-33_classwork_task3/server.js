/**
 * Lesson 33, Classwork, Serhii Yakubovych
 * 
 * ###Задача 2 
 * Дано массив users: 
 * ```
 * users = [
 * { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
 * { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
 * ]
 * ``` 
 * Реализуйте следующее: 
 * 1) При GET-запросе по пути '/users' в ответе сервера отправляется массив users в формате JSON. 
 * 2) При POST-запросе по пути '/users' в массив users добавляется элемент {name: 'random user', age: 30}.  
 * 
 * ###Задача 3 
 * Модифицируйте код предыдущей задачи. Реализуйте следующее: 
 * 1) При PUT-запросе по пути '/users/index', где index - индекс элемента в массиве users, 
 * элемент по указанному индексу заменяется на следующий объект: {name: 'updated name', age: 'updated age'}. 
 * 2) При DELETE-запросе по пути '/users/index', где index - индекс элемента в массиве users,
 * происходит удаление элемента с указанным индексом из массива. 
 */

const restify = require("restify"),
      bodyParser = require("body-parser"),
      requestsHandlers = require("./js/requests_handlers");

const port = process.env.port || 1337,
      server = restify.createServer({
          name: "Users server"
      });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get("/users", requestsHandlers.returnAllUsers);

server.post("/users", requestsHandlers.addNewUser);

server.put("/users/:userId", requestsHandlers.updateUser);

server.del("users/:userId", requestsHandlers.removeUser);

server.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).end("500. Server error.")
        next(err.message);
    }
});

server.listen(port);