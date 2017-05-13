/*
* Lesson 24, Classwork, Serhii Yakubovych
*
* ### Задача 1
* Создайте 2 файла с React компонентами, содержащими текст ‘View 1’ и ‘View2’.
* Создайте файл index.js, в котором выполните настройку маршрутизации для переключения между путями “/view1” и “/view2”.
 */

// *Note: according to our educational tutorial I used React Router v3

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import Index from "./components/index.jsx";
import View1 from "./components/view1.jsx";
import View2 from "./components/view2.jsx";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
            <Route path="/view1" component={View1} />
            <Route path="/view2" component={View2} />
        </Route>
    </Router>,
    document.getElementById("output")
);