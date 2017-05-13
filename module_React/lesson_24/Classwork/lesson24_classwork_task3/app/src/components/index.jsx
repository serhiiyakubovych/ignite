import React from "react";
import { Link } from "react-router";

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="view1">View 1</Link></li>
                        <li><Link to="view2">View 2</Link></li>
                    </ul>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}