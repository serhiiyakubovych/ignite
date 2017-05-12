import React from "react";
import AddUserButton from "./addUserButton.jsx";

export default class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users
        };
        this.addNewUser = this.addNewUser.bind(this);
    }
    render() {
        return (
            <div>
                <table className="users-table">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((user, userIndex) => {
                            return (
                                <tr key={userIndex}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
                <AddUserButton addNewUserHandler={this.addNewUser} />
            </div>
        );
    }
    addNewUser() {
        let newUsers = this.state.users.slice();
        newUsers.push({
            name: "John",
            age: 40,
            gender: "Male"
        });
        this.setState({
            users: newUsers
        });
    }
}