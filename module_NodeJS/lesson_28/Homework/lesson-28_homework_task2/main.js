/**
 * Lesson 28, Homework, Serhii Yakubovych
 * 
 * ###Задача 2 
 * Рядом с файлом с задачами в папке Homework находится файл test.txt. 
 * Напишите код, который выведет в консоль с 10 по 15 байт этого файла. 
 */

const fs = require("fs");

fs.open("test.txt", "r", function(openingError, fd) {
    if (openingError) {
        console.log(openingError);
        return;
    }

    fs.read(fd, Buffer.alloc(5), 0, 5, 10, function(readingError, bytesRead, buffer) {
        if (readingError) {
            console.log(readingError);
            return;
        }

        console.log(buffer.toString());
    });
});