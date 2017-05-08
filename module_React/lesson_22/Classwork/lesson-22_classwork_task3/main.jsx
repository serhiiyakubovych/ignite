/**
 * Lesson 22, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 3
 * Используя синтаксис ES6, создайте React компонент,
 * содержащий кнопку и выводящий на экран при клике по кнопке свои свойства(props) в виде списка.
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class ShowButton extends React.Component {
    constructor(props) {
        super(props);
        this._showProps = this._showProps.bind(this);
    }
    render() {
        return (
            <div>
                <button onClick={this._showProps}>Show props</button>
                <div ref="propsOutput"></div>
            </div>
        );
    }
    _showProps() {
        let ul = document.createElement("ul");
        for (let prop in this.props) {
            if (!this.props.hasOwnProperty(prop)) {
                continue;
            }
            let li = document.createElement("li");
            li.textContent = `${prop}: ${this.props[prop]}`;
            ul.appendChild(li);
        }
        this.refs.propsOutput.appendChild(ul);
    }
}

ReactDOM.render(<ShowButton example="prop1" sample="prop2" />, document.getElementById("output"));