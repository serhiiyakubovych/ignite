import React from "react";

export default class UserRecord extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>{this.props.gender}</td>
            </tr>
        );
    }
}