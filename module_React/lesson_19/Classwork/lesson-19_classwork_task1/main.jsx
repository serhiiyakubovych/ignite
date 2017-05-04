/**
 * Lesson 19, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 1
 * Используя JSX, отобразите на странице текст Hello World в теге h1
 */
const React = require("react"),
    ReactDOM = require("react-dom");

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("output"));