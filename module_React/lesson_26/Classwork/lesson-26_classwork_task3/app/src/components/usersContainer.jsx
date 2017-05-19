import React from "react";

export default class UserContainer extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggleClickHandler}>
                    {this.props.isUsersVisible ? "Hide" : "Show"} users list
                </button>
                <div>{this.props.isUsersVisible ? this.props.children : ""}</div>
            </div>
        );
    }
}