import React from "react";

export default class UserTable extends React.Component {
    render() {
        return (
            <table className="userTable">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}