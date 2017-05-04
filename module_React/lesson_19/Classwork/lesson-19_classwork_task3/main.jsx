/**
 * Lesson 19, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 3
 * Создайте React компонент,  который принимает два числа в качестве свойств (props). Компонент должен выводить на экран сумму своих свойств.
 */

const React = require("react"),
    ReactDOM = require("react-dom");

const Adder = React.createClass({
    render() {
        return (<div>Result: {+this.props.firstSumArg + +this.props.secondSumArg}</div>);
    }
});

ReactDOM.render(<Adder firstSumArg="5" secondSumArg="7" />, document.getElementById("output"));