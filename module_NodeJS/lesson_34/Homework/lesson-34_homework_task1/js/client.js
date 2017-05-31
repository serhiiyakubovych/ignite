/**
 * Lesson 34, Homework, Serhii Yakubovych
 * 
 * ###Задача 1 
 * 1) Создайте Express сервер и подключите к нему модуль socket.io.  
 * 2) На стороне сервера создайте пространство имен с произвольным именем, 
 * которое генерирует событие 'message' и передает через событие объект {text: 'Hello from namespace'}.  
 * 3) На стороне клиента создайте обработчик события 'message', 
 * который выводит данные, переданные через событие, на экран и генерирует событие 'receive_message'.
 * 4) На стороне сервера установите обработчик события 'receive_message', 
 * который выведет в консоль текст 'message received'. 
 */
window.addEventListener("DOMContentLoaded", () => {
    const socket = io("/messager");
    socket.on("message", (data) => {
        let outputElem = document.getElementById("socket-output");
        outputElem.textContent = data.text;

        socket.emit("receive_message");
    });
});