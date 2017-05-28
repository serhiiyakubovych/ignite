/**
 * Lesson 28, Classwork, Serhii Yakubovych
 * 
 * ###Задача 2 
 * Создайте пустой(неинициализированный) буфер длиной 100 байт, 
 * заполните его байтами со значениями от 0 до 99 и выведите в консоль его содержимое.
 */

let taskBuffer = Buffer.alloc(100);

for (let i = 0; i < 100; i++) {
    taskBuffer.writeInt8(i, i);
}

let taskBufferStringRepresentation = [...taskBuffer].join(' ');

console.log(taskBufferStringRepresentation);