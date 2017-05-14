import React from "react";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.checkExistenceOfQueryString = this.checkExistenceOfQueryString.bind(this);
    }
    render() {
        this.checkExistenceOfQueryString();
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
    checkExistenceOfQueryString() {
        if (!this.props.location) {
            this.props.location = {};
        }
        if (!this.props.location.query) {
            this.props.location.query = {};
        }
        const requiredQueryProps = ["first_name", "last_name", "email", "gender", "ip_address"];
        requiredQueryProps.forEach((prop) => {
            if (!this.props.location.query[prop]) {
                this.props.location.query[prop] = "";
            }
        });
    }
}