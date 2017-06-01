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
    const socket = io.connect("http://localhost:1337"),
          messgaeForm = document.getElementById("message-form"),
          messagesContainer = document.getElementById("messages"),
          usersContainer = document.getElementById("users");

    messgaeForm.addEventListener("submit", sendMessage);

    socket.on("update_users", displayReceivedUsers);
    socket.on("messages_loaded", displayReceivedMessages);
    socket.on("chat_message", displayReceivedChatMessage);

    socket.emit("load_messages");

    function sendMessage(event) {
        event.preventDefault();

        const inputElem = this.elements.message;
        socket.emit("send_message", {message: inputElem.value});
    }
    function displayReceivedChatMessage(data) {
        let messageElem = document.createElement("div");
        messageElem.innerHTML = `<b>${data.user}</b> <p>${data.message}</p>`;
        messagesContainer.appendChild(messageElem);
    }
    function displayReceivedUsers(users) {
        let ul = "<ul>"
        users.forEach((user) => {
            ul += `<li>${user}</li>`;
        });
        ul += "</ul>";
        usersContainer.innerHTML = ul;
    }
    function displayReceivedMessages(messages) {
        messages.forEach((message) => displayReceivedChatMessage(message));
    }
});