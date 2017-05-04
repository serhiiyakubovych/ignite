/**
 * Lesson 19, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 2
 * Создайте React компонент, который отображает на странице форму с полями ‘name’ , ‘login’ и кнопкой Submit
 */

const React = require("react"),
    ReactDOM = require("react-dom");

class Form extends React.Component {
    render() {
        return (
            <form>
                <label>Name:
                    <input name="userName" type="text"/>
                </label>
                <label>Login:
                    <input name="userLogin" type="text"/>
                </label>
                <input type="submit"/>
            </form>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById("output"));