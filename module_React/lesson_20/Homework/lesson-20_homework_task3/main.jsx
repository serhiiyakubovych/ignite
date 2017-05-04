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
 *
 * ### Задача 3
 * Добавьте на страницу checkbox, клик по которому будет переключать режим отображения данных массива users между таблицей и списком
 */

const React = require("react"),
    ReactDOM = require("react-dom");

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            countOfListElements: 10,
            isDisplayedAsTable: false
        };
        this._changeCountOfListElements = this._changeCountOfListElements.bind(this);
        this._changeDisplayMode = this._changeDisplayMode.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    <label>Count of list elements
                        <input type="text" value={this.state.countOfListElements} onChange={this._changeCountOfListElements} />
                    </label>
                </div>
                <div>
                    <label>Display as table ?
                        <input type="checkbox" checked={this.state.isDisplayedAsTable} onChange={this._changeDisplayMode} />
                    </label>
                </div>
                <Child elementCount={this.state.countOfListElements} isDisplayedAsTable={this.state.isDisplayedAsTable} />
            </div>
        );
    }
    _changeCountOfListElements(event) {
        this.setState({
            countOfListElements: event.target.value
        });
    }
    _changeDisplayMode() {
        this.setState({
            isDisplayedAsTable: !this.state.isDisplayedAsTable
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
        const displayedUsers = this.state.users.slice(0, this.props.elementCount);
        if (this.props.isDisplayedAsTable) {
            return (
                <table style={{color: this.state.textColor}} className="user-table">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Gender</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        displayedUsers.map((user, userIndex) => {
                            return <tr key={userIndex}>
                                { Object.keys(user).map((userKey, userKeyIndex) => {
                                    return <td key={userKeyIndex}>{user[userKey]}</td>;
                                }) }
                            </tr>;
                        })
                    }
                    </tbody>
                </table>
            );
        } else {
            return (
                <ul style={{color: this.state.textColor}}>
                    {
                        displayedUsers.map((user, index) => {
                            return <li key={index}>Name: {user.name}, Gender: {user.gender}</li>;
                        })
                    }
                </ul>
            );
        }
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