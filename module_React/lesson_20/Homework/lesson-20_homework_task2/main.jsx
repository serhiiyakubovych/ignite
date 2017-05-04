/**
 * Lesson 20, Homework, Serhii Yakubovych
 */
/**
 * ### Задача 1
 * Создайте 2 React компонента – родительские компонент, содержащий поле ввода и дочерний компонент,
 * содержащий список элементов массива users:
 * ```
 * var users = [{name:"Anne Montgomery",gender:"Female"},
 * {name:"Annie George",gender:"Female"},
 * {name:"Gary Butler",gender:"Male"},
 * {name:"Lisa Mendoza",gender:"Female"},
 * {name:"Marilyn Henry",gender:"Female"},
 * {name:"Johnny Tucker",gender:"Male"},
 * {name:"Chris Jacobs",gender:"Male"},
 * {name:"Benjamin James",gender:"Male"}]
 * ```
 * Реализуйте следующее:
 * При вводе числа в поле ввода должно отображаться соответсвующее количество элементов списка.
 *
 * ### Задача 2
 * Модифицируйте код предыдущей задачи. Реализуйте следующее:
 * * При каждом обновлении свойств компонента, содержащего список users,  его текст окрашивается в случайный цвет.
 * Используйте при решении задачи методы жизненного цикла React компонентов.
 * Функция для получения случайного цвета:
 * ```
 * function getRandomColor() {
                var h = Math.floor(Math.random() * (255 - 1) + 1);
                var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
                var l = '50%';
                var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
                return randomColor;
            }
 ```
 */

const React = require("react"),
    ReactDOM = require("react-dom");

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            countOfListElements: 10
        };
        this._changeCountOfListElements = this._changeCountOfListElements.bind(this);
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.countOfListElements} onChange={this._changeCountOfListElements} />
                <Child elementCount={this.state.countOfListElements} />
            </div>
        );
    }
    _changeCountOfListElements(event) {
        this.setState({
            countOfListElements: event.target.value
        });
    }
}

class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            textColor: "#000",
            users: [
                {name:"Anne Montgomery",gender:"Female"},
                {name:"Annie George",gender:"Female"},
                {name:"Gary Butler",gender:"Male"},
                {name:"Lisa Mendoza",gender:"Female"},
                {name:"Marilyn Henry",gender:"Female"},
                {name:"Johnny Tucker",gender:"Male"},
                {name:"Chris Jacobs",gender:"Male"},
                {name:"Benjamin James",gender:"Male"}
            ]
        };
    }
    render() {
        return (
            <ul style={{color: this.state.textColor}}>
                {
                    this.state.users.slice(0, this.props.elementCount).map((user, index) => {
                        return <li key={index}>Name: {user.name}, Gender: {user.gender}</li>;
                    })
                }
            </ul>
        );
    }
    shouldComponentUpdate() {
        this.setState({ textColor: getRandomColor() });

        return true;

        function getRandomColor() {
            const h = Math.floor(Math.random() * (255 - 1) + 1),
                s = Math.floor(Math.random() * (100 - 1) + 1) + '%',
                l = '50%',
                randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
            return randomColor;
        }
    }
}

ReactDOM.render(<Parent />, document.getElementById("output"));