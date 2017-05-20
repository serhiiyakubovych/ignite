import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UsersContainer from "./usersContainer.jsx";
import UsersList from "./usersList.jsx";
import * as actions from "../actions/actions.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this._handleToggleClick = this._handleToggleClick.bind(this);
    }
    render() {
        return (
            <div>
                <UsersContainer isUsersVisible={this.props.isUsersVisible} toggleClickHandler={this._handleToggleClick}>
                    <UsersList users={this.props.users} />
                </UsersContainer>
            </div>
        );
    }
    _handleToggleClick() {
        this.props.toggleUsersList();
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        isUsersVisible: state.isUsersVisible
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleUsersList: actions.toggleUsersList
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);