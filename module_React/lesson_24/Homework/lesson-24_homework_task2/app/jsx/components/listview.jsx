import React from "react";

export default class ListView extends React.Component {
    render() {
        return (
            <ul>
                {this.props.route.usersList.map((user, userIndex) => {
                    return <li key={userIndex}>{`${user.first_name} ${user.last_name}`}</li>
                })}
            </ul>
        )
    }
}