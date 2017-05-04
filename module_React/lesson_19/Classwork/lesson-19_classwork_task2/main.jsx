/**
 * Lesson 19, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 2
 * Реализуйте задание задачи 1 с помощью создания React компонента
 */
const React = require("react"),
    ReactDOM = require("react-dom");

let WorldGreeting = React.createClass({
    render() {
        return <h1>Hello World</h1>;
    }
});

ReactDOM.render(<WorldGreeting />, document.getElementById("output"));