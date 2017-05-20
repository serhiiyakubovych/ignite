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
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { default as thunk } from "redux-thunk"; 

import App from "./components/app.jsx";
import { appReducer } from "./reducers/appReducer.js";
import { fetchWorks } from "./actions/async.js";

const middleware = applyMiddleware(thunk);
const appStore = createStore(appReducer, middleware);
appStore.dispatch(fetchWorks("./data/works.json"));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);