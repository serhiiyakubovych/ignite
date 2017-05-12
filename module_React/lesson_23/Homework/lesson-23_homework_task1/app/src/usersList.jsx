import React from "react";
import ReactDOM from "react-dom";
import UsersTable from "./usersTable.jsx";

const users = [
    { name: "John", age: 50, gender: "Male" },
    { name: "Ann", age: 25, gender: "Female" },
    { name: "Bob", age: 30, gender: "Male" }
];

ReactDOM.render(
    <UsersTable users={users} />,
    document.getElementById("output")
);