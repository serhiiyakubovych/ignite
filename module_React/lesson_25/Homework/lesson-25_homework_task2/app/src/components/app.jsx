import React from "react";

import TodoList from "./todoList.jsx";
import Search from "./search.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <TodoList />
            </div>
        );
    }
}