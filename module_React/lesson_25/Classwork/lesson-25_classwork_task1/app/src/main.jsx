/*
* Lesson 25, Classwork, Serhii Yakubovych
*
* ### Задача 1
* Используя flux архитектуру:
* * Создайте React компонент, содержащий кнопку и элемент div
* * При клике по кнопке присвойте элементу div произвольные стили.
*/

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app.jsx";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);