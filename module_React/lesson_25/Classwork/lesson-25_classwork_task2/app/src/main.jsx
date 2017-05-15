/*
* Lesson 25, Classwork, Serhii Yakubovych
* ### Задача 2
* Используя flux архитектуру:
* 1) Создайте страницу-таймер: React компонент, который будет выводить на экран количество секунд,
* прошедших с момента ее открытия.
* 2) Добавьте на страницу три кнопки: start, stop, reset, выполняющие соответствующие функции
*/

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app.jsx";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);