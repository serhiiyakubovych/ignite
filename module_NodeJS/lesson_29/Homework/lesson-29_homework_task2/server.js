/**
 * Lesson 29, Homework, Serhii Yakubovych
 * 
 * ### Задача 1 
 * Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл, 
 * имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).
 * 
 * ### Задача 2 
 * Добавьте в предыдущую задачу код, отправляющий POST запрос по пути '/test'. 
 * Тело запроса - произвольный текст. 
 * Ответ сервера должен быть в формате JSON в следующем виде: '{"message": "ТЕКСТ ТЕЛА ЗАПРОСА"}'.   
 */

const http = require("http"),
      fs = require("fs"),
      port = process.env.port || 1337;

let requestsCount = 0;

http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log(err);
    });

    requestsCount++;

    logRequestHeaders(req.headers);

    if ((req.url === "/test") && (req.method === "POST")) {
        let responseObject = {message: ""};

        req.on("data", (data) => {
            responseObject.message += data;
        });

        req.on("end", () => {
            let responseJSON = JSON.stringify(responseObject);
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(responseJSON);
        });
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404. Page not found.");
    }
}).listen(port, () => {
    makeTestPostRequest();
});

function logRequestHeaders(headers) {
    const logFile = requestsCount.toString();
    let logInfo = "";
    
    for (let header in headers) {
        logInfo += `${header}: ${headers[header]}\n`;
    }

    fs.writeFile(logFile, logInfo, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function makeTestPostRequest() {
    const requestOptions = {
        method: "POST",
        host: "localhost",
        port,
        path: "/test",
        headers: {"Content-Type": "text/plain"}
    };
    const postData = "Request data";
    function handleResponse(res) {
        let totalResponseData = "";
        res.setEncoding("utf8");
        res.on("data", (data) => {
            totalResponseData += data;
        });
        res.on("end", () => {
            console.log(`Server response to POST request: ${totalResponseData}`);
        });
    }
    const testRequest = http.request(requestOptions, handleResponse);
    testRequest.write(postData);
    testRequest.end();
}