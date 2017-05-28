/**
 * Lesson 29, Homework, Serhii Yakubovych
 * 
 * ### Задача 1 
 * Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл, 
 * имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).
 */

const http = require("http"),
      fs = require("fs"),
      port = process.env.port || 1337;

let requestsCount = 0;

http.createServer((req, res) => {
    req.on("error", (err) => console.log(err));

    requestsCount++;

    logRequestHeaders(req.headers);
}).listen(port);

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