/**
 * Lesson 29, Classwork, Serhii Yakubovych
 * 
 * ### Задача 1 
 * Создайте HTTP сервер, который выводит в консоль HTTP методы запросов и их пути.
 * 
 * ### Задача 2 
 * Модифицируйте код предыдущей задачи. Добавьте код, который отправляет GET запрос по пути '/test'. 
 * 
 * ### Задача 3 
 * Добавьте в код предыдущей задачи обработку GET запроса по пути '/test'. 
 * Ответом сервера на такой запрос должен быть JSON-объект '{"message": "Hello World!"}'. 
 */

const http = require("http");
const port = process.env.port || 1337;

http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log(err);
    });

    console.log(`HTTP method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    
    if (req.url === "/test") {
        const responseJSON = '{"message": "Hello World!"}';
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(responseJSON);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404. Page not found.");
    }
}).listen(port, () => {
    makeTestRequest();
});

function makeTestRequest() {
    const requestOptions = {
        host: "localhost",
        port,
        path: "/test"
    };
    function handleResponse(res) {
        res.on("error", (err) => console.log(err));
    }
    const request = http.request(requestOptions, handleResponse);
    request.end();
}