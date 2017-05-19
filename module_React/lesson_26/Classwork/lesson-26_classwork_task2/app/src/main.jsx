/**
 * Lesson 26, Classwork, Serhii Yakubovych
 * 
 * ### Задача 2 
 * Используя Redux, реализуйте следующее: 
 * 1) Создайте React компонент, который содержит кнопку 
 * 2) Создайте его дочерний компонент, который принимает
 *    в качестве свойства массив users и отображает его
 *    в виде списка при клике по кнопке первого компонента 
 */

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import appReducer from "./reducers/appReducer.js";
import * as actions from "./actions/actions.js";
import App from "./components/app.jsx";

const appStore = createStore(appReducer);
appStore.dispatch(actions.toggleUsersList());

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);