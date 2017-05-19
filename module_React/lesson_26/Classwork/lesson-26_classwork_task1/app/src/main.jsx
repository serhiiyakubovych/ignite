/**
 * Lesson 26, Classwork, Serhii Yakubovych
 * 
 * ### Задача 1 
 * Создайте React компонент с полем ввода и элементом h1.
 * При изменении его значения (при вводе текста) ,
 * реализуйте отображение этого тектса в элементе h1.
 * Используйте Redux. 
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { appReducer } from "./reducers/reducer.js";
import App from "./components/app.jsx";

const appStore = createStore(appReducer);

ReactDOM.render(
    <Provider store={appStore}>
        <App></App>
    </Provider>,
    document.getElementById("root")
);