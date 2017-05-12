import React from "react";

export default class AddUserButton extends React.Component {
    render() {
        return <button onClick={this.props.addNewUserHandler}>Add new user</button>;
    }
}