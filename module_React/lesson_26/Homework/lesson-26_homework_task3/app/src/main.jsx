/**
 * Lesson 26, Homework, Serhii Yakubovych
 * 
 * ### Задача 1 
 * Создайте приложение todoList. Реализуйте следующее: 
 * * Возможность удалять и добавлять элементы в список 
 * * Возможность выбирать режим отображения данных: таблица или список 
 * 
 * ### Задача 2 
 * Модифицируйте код предыдущей задачи таким образом,
 * чтобы список заданий(todo List) загружался асинхронно. 
 * 
 * ### Задача 3 
 * Используйте маршрутизацию. Дополните код предыдущей задачи; реализуйте следующее: 
 * * В приложении должно быть три страницы (routes): 
 * 1. страница по умолчанию, на которой отображаются данные списка заданий;     
 * 2. страница для редактирования: добавления/удаления элементов списка, редактирования уже существующих элементов 
 * 3. страница about, на которой пользователь может оценить приложение по 5-балльной шкале и увидеть рейтинг 
 * приложения (среднее арифметическое всех пользовательских оценок) 
 */

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { default as thunk } from "redux-thunk"; 

import App from "./components/app.jsx";
import TodoList from "./components/todoList.jsx";
import EditWorks from "./components/editWorks.jsx";
import About from "./components/about.jsx";

import { todoListReducer } from "./reducers/todoListReducer.js";
import { aboutReducer } from "./reducers/aboutReducer.js";

import { fetchData } from "./actions/async.js";

const reducers = combineReducers({
    todoList: todoListReducer,
    about: aboutReducer
});
const middleware = applyMiddleware(thunk);
const appStore = createStore(reducers, middleware);
appStore.dispatch(fetchData("works", "./data/works.json"));
appStore.dispatch(fetchData("votes", "./data/votes.json"));

ReactDOM.render(
    <Provider store={appStore}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={TodoList} />
                <Route path="edit" component={EditWorks} />
                <Route path="about" component={About} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);