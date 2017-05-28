/**
 * Lesson 28, Classwork, Serhii Yakubovych
 * 
 * ###Задача 3 
 * Напишите код, который создаст в текущей директории файл test с текстом, 
 * переданным в качестве аргумента командной строки.
 */

const fs = require("fs");

let argsArr = [...process.argv];
argsArr.shift();
argsArr.shift();
let argsStr = argsArr.join(" ");
let argsBuffer = Buffer.from(argsStr);

fs.open("test", "w", function(openingError, fd) {
    if (openingError) {
        console.log(openingError);
        return;
    }

    fs.write(fd, argsBuffer, function(writingError) {
        if (writingError) {
            console.log(writingError);
        }
    })
});