/**
 * Lesson 21, Homework, Serhii Yakubovych
 */
/**
 * ### Задача 1
 * Создайте React компонент-счетчик.
 * Он должен отображать на странице две кнопки (+ и -) и элемент h1 для вывода текущего счета на экран.
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class Score extends React.Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0
        };
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementScore}>+</button>
                <button onClick={this.decrementScore}>-</button>
                <h1>{this.state.currentScore}</h1>
            </div>
        );
    }
    incrementScore() {
        this.setState({ currentScore: this.state.currentScore + 1 });
    }
    decrementScore() {
        this.setState({ currentScore: this.state.currentScore - 1 });
    }
}

ReactDOM.render(<Score />, document.getElementById("output"));