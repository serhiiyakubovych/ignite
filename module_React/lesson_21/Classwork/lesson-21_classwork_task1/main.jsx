/**
 * Lesson 21, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 1
 * Создайте React компонент, отображающий кнопку и элемент div.
 * Добавьте на страницу тег style с двумя классами – black и red, задающими соответствующий background-color элементу.
 * Реализуйте переключение этих классов для элемента div при клике по кнопке.
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class SwitchStyle extends React.Component {
    constructor() {
        super();
        this.state = {
            indexOfCurrentBlockClass: 0,
            blockClasses: ["black", "red"]
        };
        this._changeBlockClass = this._changeBlockClass.bind(this);
    }
    render() {
        return (
            <div>
                <button onClick={this._changeBlockClass}>Change block style</button>
                <div className={"task-block " + this.state.blockClasses[this.state.indexOfCurrentBlockClass]}></div>
            </div>
        );
    }
    _changeBlockClass() {
        this.setState({
            indexOfCurrentBlockClass: (this.state.indexOfCurrentBlockClass + 1) % this.state.blockClasses.length
        });
    }
}

ReactDOM.render(<SwitchStyle />, document.getElementById("output"));