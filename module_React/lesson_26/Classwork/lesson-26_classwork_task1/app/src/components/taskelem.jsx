import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions.js";

class TaskElem extends React.Component {
    constructor(props) {
        super(props);
        this._handleInput = this._handleInput.bind(this);
    }
    render() {
        return (
            <div className="container">
                <h1>{this.props.title}</h1>
                <input className="form-control" type="text" placeholder="Enter your text here"
                    onChange={this._handleInput} ref="titleInput"/>
            </div>
        );
    }
    _handleInput() {
        this.props.changeTitle(this.refs.titleInput.value);
    }
}

function mapStateToProps(state) {
    return {
        title: state
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeTitle: actions.changeTaskTitle
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskElem);