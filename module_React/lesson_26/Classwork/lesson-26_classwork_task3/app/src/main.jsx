/**
 * Lesson 26, Classwork, Serhii Yakubovych
 * 
 * ### Задача 2 
 * Используя Redux, реализуйте следующее: 
 * 1) Создайте React компонент, который содержит кнопку 
 * 2) Создайте его дочерний компонент, который принимает
 *    в качестве свойства массив users и отображает его
 *    в виде списка при клике по кнопке первого компонента 
 * 
 * ### Задача 3
 * Модифицируйте код предыдущей задачи так,
 * чтобы загрузка массива users происходила асинхронно.
 * Файл с данными в формате JSON находится в папке Classwork.
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { default as thunk } from "redux-thunk"; 

import appReducer from "./reducers/appReducer.js";
import App from "./components/app.jsx";
import { toggleUsersList } from "./actions/actions.js"; 
import { fetchUsers } from "./actions/async.js";

const middleware = applyMiddleware(thunk);
const appStore = createStore(appReducer, middleware);
appStore.dispatch(toggleUsersList());
appStore.dispatch(fetchUsers("./data/data.json"));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);