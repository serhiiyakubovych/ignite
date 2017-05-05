/**
 * Lesson 21, Homework, Serhii Yakubovych
 */
/**
 * ### Задача 2
 * Создайте страницу-калькулятор.
 * На странице должно быть 4 кнопки(по кнопке на математическую операцию: сложение, вычитание, умножение, деление),
 * 2 поля ввода и элемент для отображения результата. Сделайте так, чтобы в поля ввода разрешалось вводить только цифры.
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            calculationResult: 0
        };
        this._add = this._add.bind(this);
        this._subtract = this._subtract.bind(this);
        this._multiply = this._multiply.bind(this);
        this._divide = this._divide.bind(this);
    }
    render() {
        return (
            <div className="calculator">
                <div>
                    <input type="text" ref="arg1" onKeyPress={Calculator.validateInputField} />
                </div>
                <div>
                    <input type="text" ref="arg2" onKeyPress={Calculator.validateInputField} />
                </div>
                <div>
                    <button className="operation-btn" onClick={this._add}>+</button>
                    <button className="operation-btn" onClick={this._subtract}>-</button>
                    <button className="operation-btn" onClick={this._multiply}>*</button>
                    <button className="operation-btn" onClick={this._divide}>/</button>
                </div>
                <div>
                    Result: <span>{this.state.calculationResult}</span>
                </div>
            </div>
        );
    }
    static validateInputField(event) {
        const numberPattern = /^\d+$/,
              inputtedValue = event.target.value;

        if (event.key.search(numberPattern) === -1) {
            event.preventDefault();
        }
    }
    _add() {
        this.setState({ calculationResult: +this.refs.arg1.value + +this.refs.arg2.value });
    }
    _subtract() {
        this.setState({ calculationResult: +this.refs.arg1.value - +this.refs.arg2.value });
    }
    _multiply() {
        this.setState({ calculationResult: +this.refs.arg1.value * +this.refs.arg2.value });
    }
    _divide() {
        this.setState({ calculationResult: +this.refs.arg1.value / +this.refs.arg2.value });
    }
}

ReactDOM.render(<Calculator />, document.getElementById("output"));