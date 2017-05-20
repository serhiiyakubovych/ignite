/**
 * Lesson 26, Homework, Serhii Yakubovych
 * 
 * ### Задача 1 
 * Создайте приложение todoList. Реализуйте следующее: 
 * * Возможность удалять и добавлять элементы в список 
 * * Возможность выбирать режим отображения данных: таблица или список 
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/app.jsx";
import { appReducer } from "./reducers/appReducer.js";

const appStore = createStore(appReducer);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);