/**
 * Lesson 28, Homework, Serhii Yakubvych
 * 
 * ###Задача 3 
 * Используя потоки(Streams) прочитайте с 10 по 20 байт файла test.txt 
 * и сохраните результат в файле output.txt. 
 */

const fs = require("fs");

const readerStream = fs.createReadStream("test.txt", { encoding: "UTF8", start: 10, end: 20 });
const writerStream = fs.createWriteStream("output.txt", { encoding: "UTF8" });

readerStream.on("error", (readingError) => console.log(readingError));
writerStream.on("error", (writingError) => console.log(writingError));

readerStream.pipe(writerStream);