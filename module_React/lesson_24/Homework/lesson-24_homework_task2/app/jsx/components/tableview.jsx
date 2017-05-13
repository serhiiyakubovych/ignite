import React from "react";

export default class TableView extends React.Component {
    render() {
        return (
            <table className="users-table">
                <thead>
                <tr>
                    <td>First name</td>
                    <td>Last name</td>
                    <td>Gender</td>
                </tr>
                </thead>
                <tbody>
                {this.props.route.usersList.map((user, userIndex) => {
                    return (
                        <tr key={userIndex}>
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
}