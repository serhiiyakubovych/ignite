import React from "react";
import { Link } from "react-router";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>App</h1>
                    <ul>
                        <li><Link to="/">
                            <button>Home</button>
                        </Link></li>
                        <li><Link to="listview">
                            <button>List View</button>
                        </Link></li>
                        <li><Link to="tableview">
                            <button>Table View</button>
                        </Link></li>
                    </ul>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}