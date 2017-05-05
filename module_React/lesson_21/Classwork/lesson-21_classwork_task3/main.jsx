/**
 * Lesson 21, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 2
 * Создайте страницу-таймер, которая будет отображать количество секунд, прошедшее с момента ее открытия.
 *
 * ### Задача 3
 * Модифицируйте код предыдущей задачи.
 * Добавьте на странцу три кнопки: сбросить счет (reset), start и stop,
 * которые предоставя пользователю останавлтвать/возобновлять работу таймера и сбрасывать отсчитанное время.
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            passedTime: 0,
            isTimerStarted: false
        };
        this.getPassedTime = this.getPassedTime.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    render() {
        return (
            <div>
                <p>{this.getPassedTime()} seconds passed after page opening.</p>
                <button onClick={this.resetTimer}>Reset</button>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
            </div>
        );
    }
    getPassedTime() {
        if (this.state.isTimerStarted) {
            this._timeout = setTimeout(() => {
                this.setState({ passedTime: this.state.passedTime + 1 });
            }, 1000);
        }
        return this.state.passedTime;
    }
    resetTimer() {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this.setState({ passedTime: 0 });
    }
    startTimer() {
        if (this.state.isTimerStarted) {
            return;
        }

        this.setState({ isTimerStarted: true });
    }
    stopTimer() {
        if (!this.state.isTimerStarted) {
            return;
        }

        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this.setState({ isTimerStarted: false });
    }
}

ReactDOM.render(<Timer />, document.getElementById("output"));