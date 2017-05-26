/**
 * Lesson 27, Classwork, Serhii Yakubovych
 * 
 * ###Задача 3  
 * Загрузите модуль test.js из папки test(папка находится рядом с файлом с задачами) 3-мя разными способами. 
 */

let testModule;

// First way, directly to the file
testModule = require("./test/test.js");

// Second way, to a parent folder of the file with using package.json
testModule = require("./test");

// Third way, to the module in the node_modules folder
testModule = require("test");

testModule();