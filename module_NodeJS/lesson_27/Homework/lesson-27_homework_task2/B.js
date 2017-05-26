/**
 * Lesson 27, Homework, Serhii Yakubovych
 * 
 * ###Задача 2 
 * Дано 2 модуля: A и B. 
 * Код модуля A: 
 * ```
 * function Counter(count) {
 *     this.count = count;  
 * }
 * ``` 
 * Код модуля B: 
 * ```
 * var counter1 = require('./A')(1);
 * var counter2 = require('./A')(2);
 * console.log(counter1.count);
 * console.log(counter2.count); 
 * ``` 
 * Дополните код модуля A таким образом, чтобы в результате запуска модуля B в консоль было выведено 
 * ```
 * 1
 * 2
 * ``` 
 */

var counter1 = require('./A')(1);
var counter2 = require('./A')(2);

console.log(counter1.count);
console.log(counter2.count); 