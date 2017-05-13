/*
* Lesson 24, Classwork, Serhii Yakubovych
*
* ### Задача 1
* Создайте 2 файла с React компонентами, содержащими текст ‘View 1’ и ‘View2’.
* Создайте файл index.js, в котором выполните настройку маршрутизации для переключения между путями “/view1” и “/view2”.
*
* ### Задача 2
* Модифицируйте код предыдущей задачи.
* Добавьте в приложение файл с React компонентом,
* который создает разметку с текстом: “This is the homepage!”,
* задайте для него путь по умолчанию ("/").
 */

// *Note: according to our educational tutorial I used React Router v3

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Index from "./components/index.jsx";
import Home from "./components/home.jsx";
import View1 from "./components/view1.jsx";
import View2 from "./components/view2.jsx";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
            <IndexRoute component={Home} />
            <Route path="/view1" component={View1} />
            <Route path="/view2" component={View2} />
        </Route>
    </Router>,
    document.getElementById("output")
);