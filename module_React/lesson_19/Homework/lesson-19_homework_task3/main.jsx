/**
 * Lesson 19, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 3
 * Создайте React компонент, который отображает на странице произвольный текст.
 * Компонент должен иметь такие свойства: color и fontSize.
 * Установите на основе этих свойств стили для компонента.
 */

const React = require("react"),
    ReactDOM = require("react-dom");

class StyledText extends React.Component {
    render() {
        return <p style={{ color: this.props.color, fontSize: parseInt(this.props.fontSize) }}>Lorem imp</p>;
    }
}
StyledText.propTypes = {
    color: React.PropTypes.string,
    fontSize: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};
StyledText.defaultProps = {
    color: "#000",
    fontSize: "16px"
};

ReactDOM.render(<StyledText color="red" fontSize="38" />, document.getElementById("output"));