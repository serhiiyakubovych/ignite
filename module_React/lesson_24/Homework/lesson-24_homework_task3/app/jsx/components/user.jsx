import React from "react";

export default class User extends React.Component {
    render() {
        return (
            <div>
                <h2>{`${this.props.location.query.first_name} ${this.props.location.query.last_name}`}</h2>
                <div>
                    <p><b>Email:</b> {this.props.location.query.email}</p>
                    <p><b>Gender:</b> {this.props.location.query.gender}</p>
                    <p><b>IP address:</b> {this.props.location.query.ip_address}</p>
                </div>
            </div>
        );
    }
}