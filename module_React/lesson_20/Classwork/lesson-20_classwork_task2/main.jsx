/**
 * Lesson 20, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 2
 * Создайте React компонент, который имеет два свойства(props) типа number  и свойство mode типа boolean.
 * В зависимости от значения свойства mode(true/false) компонент должен выводить на экран либо сумму свойств типа number,
 * либо результат их конкатенации.
 */

const React = require("react"),
    ReactDOM = require("react-dom");

class Calculator extends React.Component {
    render() {
        const arg1 = +this.props.firstSumArg,
            arg2 = +this.props.secondSumArg,
            isAdding = this.props.mode;
        return (
            <div>
                <h1>Switcher</h1>
                <p>Mode: { String(isAdding) }</p>
                <p>
                    Calculating:
                    {arg1} { isAdding ? "+" : "&" } {arg2} =
                    { isAdding ? (arg1 + arg2) : (arg1 & arg2) }
                </p>
            </div>);
    }
}
Calculator.PropTypes = {
    firstSumArg: React.PropTypes.number,
    secondSumArg: React.PropTypes.number,
    mode: React.PropTypes.bool
};

ReactDOM.render(
    <div>
        <Calculator firstSumArg={7} secondSumArg={5} mode={true} />
        <Calculator firstSumArg={15} secondSumArg={8} mode={false} />
    </div>,
    document.getElementById("output"));