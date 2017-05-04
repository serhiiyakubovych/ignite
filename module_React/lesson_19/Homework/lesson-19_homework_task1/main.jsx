/**
 * Lesson 19, Classwork, Serhii Yakubovych
 */
/**
 * ### Задача 1
 * Создайте React компонент, который выведет на экран массив users в виде таблицы.
 * Массив users для задачи:
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
 */

const React = require("react"),
    ReactDOM = require("react-dom");

var users = [
    {name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}
    ];

class UserList extends React.Component {
    render() {
        return (
            <table>
                <thead><tr>
                    {
                        Object.keys(this.props.users[0]).map((userKey, userKeyIndex) => {
                            return <td key={userKeyIndex}>{userKey}</td>;
                        })
                    }
                </tr></thead>
                <tbody>
                    {this.props.users.map((user, userIndex) => {
                        return (
                            <tr key={userIndex}>
                                {
                                    Object.keys(user).map((userKey, userKeyIndex) => {
                                        return <td key={userKeyIndex}>{user[userKey]}</td>;
                                    })
                                }
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(<UserList users={users} />, document.getElementById("output"));