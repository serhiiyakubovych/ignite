/**
 * Lesson 27, Homework, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Дано 2 модуля: A и B.  
 * Код модуля A: 
 * ```
 * var a = 10;
 * var b = function (x) {
 *     console.log(x); 
 * }
 * exports = {
 *     a: a, 
 *     b: b
 * }
 * ``` 
 * Код модуля B: 
 * ```
 * var loaded_module = require('./A');
 * console.log(loaded_module.a);
 * console.log(loaded_module.b(loaded_module.a)); 
 * ```
 * Исправьте ошибку в коде модуля A, чтобы код модуля B заработал.  
 */
var loaded_module = require('./A');
console.log(loaded_module.a);
console.log(loaded_module.b(loaded_module.a)); 