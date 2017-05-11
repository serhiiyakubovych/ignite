import React from "react";
import ReactDOM from "react-dom";
import UserRecord from "./userRecord.jsx";
import UserTable from "./userTable.jsx";

ReactDOM.render(
    <UserTable>
        <UserRecord name="Bob" age="45" gender="Male" />
        <UserRecord name="Ann" age="31" gender="Female" />
        <UserRecord name="Alex" age="23" gender="Male" />
    </UserTable>,
    document.getElementById("output")
);