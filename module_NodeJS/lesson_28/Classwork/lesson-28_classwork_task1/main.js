/**
 * Lesson 28, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Напишите код, который выводит в консоль сумму аргументов, переданных в командной строке при запуске файла. 
 */

const firstSumArg = +process.argv[2],
    secondSumArg = +process.argv[3];
console.log(firstSumArg + secondSumArg);