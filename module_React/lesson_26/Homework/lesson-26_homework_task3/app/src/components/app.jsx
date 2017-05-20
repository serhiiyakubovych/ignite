import React from "react";
import { Link } from "react-router";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="edit">Edit works list</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}