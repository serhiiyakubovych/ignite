/**
 * Lesson 27, Classwork, Serhii Yakubovych
 * 
 * ###Задача 1 
 * * Создайте два модуля – A и B(в отдельных файлах).
 * * Модуль A должен содержать функцию sum, принимающую 2 аргумента и выводящую их сумму в консоль. 
 * * Модуль B должен содержать  переменные x и y с произвольными числовыми значениями. 
 * * Модифицируйте код модуля B. Импортируйте функцию sum из модуля A в модуль B и запустите ее с переменными x и y. 
 */

function sum (a, b) {
    console.log(a + b);
}

module.exports = { sum };