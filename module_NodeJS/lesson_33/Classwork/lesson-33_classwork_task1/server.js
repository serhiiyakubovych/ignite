/**
 * Lesson 33, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте базовый сервер с помощью Restify. Реализуйте следующее: 
 * 1) При GET-запросе по пути '/test' на странице отображаются заголовки запроса.
 * 2) При POST-запросе по пути '/test' на странице отображается тело запроса. 
 */

const restify = require("restify"),
      bodyParser = require("body-parser"),
      multer = require("multer"); // for multipart/form-data

const port = process.env.port || 1337,
      upload = multer(),
      server = restify.createServer({
          name: "Test server"
      });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(upload.array());

server.get("/test", (req, res, next) => {
    let headersAsString = JSON.stringify(req.headers, {}, 4);
    res.end(headersAsString);
});

server.post("/test", (req, res, next) => {
    let bodyAsString = JSON.stringify(req.body, {}, 4);
    res.end(bodyAsString);
});

server.listen(port);