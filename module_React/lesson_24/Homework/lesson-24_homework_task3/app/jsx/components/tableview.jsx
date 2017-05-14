import React from "react";
import { Link, hashHistory } from "react-router";

export default class TableView extends React.Component {
    render() {
        return (
            <table className="users-table">
                <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {this.props.route.usersList.map((user, userIndex) => {
                    return (
                        <tr key={userIndex} onClick={this.goToUserPage.bind(null, user)}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.gender}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
    goToUserPage(user) {
        hashHistory.push(`tableview/${user.id}?first_name=${user.first_name}&last_name=${user.last_name}&email=${user.email}&gender=${user.gender}&ip_address=${user.ip_address}`);
    }
}