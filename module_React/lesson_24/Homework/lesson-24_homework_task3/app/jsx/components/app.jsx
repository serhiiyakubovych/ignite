import React from "react";
import { Link } from "react-router";
import { RouteTransition } from 'react-router-transition';

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
                    <RouteTransition
                        pathname={this.props.location.pathname}
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        mapStyles={(styles) => ({
                            position: "absolute",
                            opacity: styles.opacity
                        })}
                    >
                        {this.props.children}
                    </RouteTransition>
                </main>
            </div>
        );
    }
}