/**
 * Lesson 20, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 3
 * Создайте React компонент, который содержит checkbox и элемент div.
 * При клике по checkbox элементу div присваиваиваются новые стили (выбор стиля призвольный).
 */

const React = require("react"),
    ReactDOM = require("react-dom");

class StyleSwitch extends React.Component {
    constructor() {
        super();
        this.state = {
            blockStyles: { color: "red" },
            isBlockStylesAllowed: false
        };
        this._turnBlockStyles = this._turnBlockStyles.bind(this);
    }
    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.isBlockStylesAllowed} onChange={this._turnBlockStyles} />
                <div style={ this.state.isBlockStylesAllowed ? this.state.blockStyles : {} }>Styled block</div>
            </div>
        );
    }
    _turnBlockStyles() {
        this.setState({
            isBlockStylesAllowed: !this.state.isBlockStylesAllowed
        });
    }
}

ReactDOM.render(<StyleSwitch />, document.getElementById("output"));