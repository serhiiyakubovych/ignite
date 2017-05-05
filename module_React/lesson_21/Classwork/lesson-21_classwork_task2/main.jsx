/**
 * Lesson 21, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 2
 * Создайте страницу-таймер, которая будет отображать количество секунд, прошедшее с момента ее открытия.
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            passedTime: 0
        };
        this._getPassedTime = this._getPassedTime.bind(this);
    }
    render() {
        return (
            <div>{this._getPassedTime()} seconds passed after page opening.</div>
        );
    }
    _getPassedTime() {
        setTimeout(() => {
            this.setState({ passedTime: parseInt(performance.now() / 1000) });
        }, 1000);
        return this.state.passedTime;
    }
}

ReactDOM.render(<Timer />, document.getElementById("output"));