/**
 * Lesson 22, Homework, Serhii Yakubovych
 */
/**
 * ### Задача 3
 * Создайте React компонент(используя ES6 синтаксис),
 * который выведет на экран в виде таблицы массив users из предыдущей задачи.
 * При клике по каждой ячейке таблицы, содержащей имя плоьзователя,
 * должен запускаться метод sayHi соотстветствующего элемента массива users.
 */

const React = require("react"),
      ReactDOM = require("react-dom");

class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi() {
        console.log(`Hello, my  name is ${this.fullName()}`);
    }
}

class User extends Person {
    constructor(id, signUpDate = 0, ...props) {
        super(...props);
        this.id = id;
        this.signUpDate = signUpDate.toLocaleString("en");
    }
}

const users = [
    new User(0, new Date(), "Elon", "Musk", 45, "Male"),
    new User(1, new Date(2007)),
    new User(2)
];

class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: users
        };
        this._showSayHiFromUser = this._showSayHiFromUser.bind(this);
    }
    render() {
        return (
            <table className="users-table">
                <thead>
                <tr>
                    <td>First name</td>
                    <td>Last name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>ID</td>
                    <td>Sign up date</td>
                </tr>
                </thead>
                <tbody onClick={this._showSayHiFromUser} ref="tbody">
                {
                    this.state.users.map((user, userIndex) => {
                        return <tr key={userIndex} data-user-id={user.id}>
                            {
                                Object.keys(user).map((userKey, userKeyIndex) => {
                                    if (user.hasOwnProperty(userKey)) {
                                        return <td key={userKeyIndex}>{user[userKey]}</td>;
                                    }
                                })
                            }
                        </tr>;
                    })
                }
                </tbody>
            </table>
        );
    }

    _showSayHiFromUser(event) {
        let userRecord = event.target.closest("tr");
        if (!this.refs.tbody.contains(userRecord)) {
            return;
        }

        let searchId = +userRecord.dataset.userId;
        for (let i = 0; i < this.state.users.length; i++) {
            let user = this.state.users[i];
            if (user.id === searchId) {
                user.sayHi();
                return;
            }
        }
    }
}

ReactDOM.render(<UsersTable />, document.getElementById("output"));