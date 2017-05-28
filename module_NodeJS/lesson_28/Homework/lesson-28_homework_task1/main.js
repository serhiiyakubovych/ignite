/**
 * Lesson 28, Homework, Serhii Yakubovych
 * 
 * ###Задача 1 
 * Создайте EventEmitter, который каждую секунду будет генерировать событие 'tick'. 
 * Создайте функцию-обработчик события 'tick', которая будет выводить в консоль количество секунд, 
 * прошедшее со времени генерации первого события 'Tick'. 
 */

const events = require("events");

const taskEmitter = new events.EventEmitter();

taskEmitter.on("tick", tickListener);

setInterval(makeTick, 1000);

function tickListener() {
    if (!tickListener._startTime) {
        tickListener._startTime = new Date();
    }
    let passedSeconds = parseInt((new Date() - tickListener._startTime) / 1000);
    console.log(passedSeconds);
}

function makeTick() {
    taskEmitter.emit("tick");
}