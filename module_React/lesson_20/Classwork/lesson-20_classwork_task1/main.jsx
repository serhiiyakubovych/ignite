/**
 * Lesson 20, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 1
 * Создайте React компонент Parent, отображающий на странице произвольный текст в теге h1.
 * Создайте дочерний компонент Child, отображающий произвольный текст в теге h3.
 */

const React = require("react"),
    ReactDOM = require("react-dom");

class Parent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Child subtitle="Child subtitle is here" />
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return <h3>{this.props.subtitle}</h3>;
    }
}

ReactDOM.render(<Parent title="Parent title is here" />, document.getElementById("output"));