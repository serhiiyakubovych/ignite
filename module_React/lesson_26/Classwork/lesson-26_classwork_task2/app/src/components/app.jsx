import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import UserContainer from "./usersContainer.jsx";
import UserList from "./usersList.jsx";
import * as actions from "../actions/actions.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this._handleToggleClick = this._handleToggleClick.bind(this);
    }
    render() {
        return (
            <div>
                <UserContainer isUsersVisible={this.props.isUsersVisible} toggleClickHandler={this._handleToggleClick}>
                    <UserList users={this.props.users} />
                </UserContainer>
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