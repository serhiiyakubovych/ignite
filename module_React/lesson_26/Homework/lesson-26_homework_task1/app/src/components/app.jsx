import React from "react";

import TodoList from "./todoList.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TodoList />
            </div>
        );
    }
}