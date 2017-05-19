import React from "react";

export default class UsersList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.users.map((user, userIndex) => {
                    return <li key={userIndex}>{user.first_name} {user.last_name}, {user.email}</li>
                })}
            </ul>
        );
    }
}