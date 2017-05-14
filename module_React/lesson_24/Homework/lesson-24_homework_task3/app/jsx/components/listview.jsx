import React from "react";
import { Link } from "react-router";

export default class ListView extends React.Component {
    render() {
        return (
            <ul>
                {this.props.route.usersList.map((user, userIndex) => {
                    return (
                        <li key={userIndex}>
                            <Link to={{
                                pathname: `listview/${user.id}`,
                                query: {
                                    first_name: user.first_name,
                                    last_name: user.last_name,
                                    email: user.email,
                                    gender: user.gender,
                                    ip_address: user.ip_address
                                }
                            }}>
                                {`${user.first_name} ${user.last_name}`}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        )
    }
}