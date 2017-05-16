/*
* Lesson 25, Homework, Serhii Yakubovych
*
* ### Задача 1
* Используя flux архитектуру :
* * Создайте приложение todoList. Отображайте данные в виде списка
* * Добавьте возможность удалять/добавлять элементы в список
*
* ### Задача 2
* Модифицируйте код предыдущей задачи.
* Добавьте React компонент, содержащий поле ввода и кнопку Search.
* При нажатии на кнопку, видимыми пользователю должны быть только элементы списка,
* соответствующие значению поля ввода.
 */
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app.jsx";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);