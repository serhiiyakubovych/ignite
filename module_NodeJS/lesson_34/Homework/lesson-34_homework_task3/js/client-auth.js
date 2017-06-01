/**
 * Lesson 34, Homework, Serhii Yakubovych
 * 
 * ###Задача 2  
 * Создание простого чата. 
 * 
 * 1) Создайте Express сервер и подключите к нему модуль socket.io.   
 * 2) На стороне клиента создайте html страницу с полем ввода и кнопкой. 
 * 3) Если поле ввода не пустое, при нажатии на кнопку генерируется событие 'send_message',
 * через событие передаются данные поля ввода. 
 * 4) На стороне сервера создайте обработчик события 'send_message'.
 * Обработчик генерирует событие 'chat_message' и отсылает его всем подключенным клиентам.
 * Через событие 'chat_message' передаются данные, полученные в событии 'send_message'. 
 * 5) На стороне клиента создайте обработчик события 'chat_message',
 * который выводит на экран данные, переданные через событие. 
 * 
 * ###Задача 3(Дополнительное задание) 
 * Добавьте в чат, созданный в предыдущей задаче, возможность авторизации пользователей. 
 */

window.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("auth-form");
    authForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const userNameInput = authForm.elements.userName;
        window.location.href = `/chat/${userNameInput.value}`;
    });
});