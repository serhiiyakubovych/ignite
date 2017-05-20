import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions.js";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this._handleViewRadioChange = this._handleViewRadioChange.bind(this);
    }
    render() {
        return (
            <div className="container">
                <h1>Todo List</h1>
                {/* Change view */}
                <div>
                    <div className="radio">
                        <label>
                            <input name="view_mode" type="radio" data-mode="table" 
                                onChange={this._handleViewRadioChange}/>
                            As a table
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input name="view_mode" type="radio" data-mode="list" 
                                onChange={this._handleViewRadioChange}/>
                            As a list
                        </label>
                    </div>
                </div>
                {/* List */}
                {(this.props.viewMode === "list") ?
                    <ul className="list-group">
                        {this.props.works.map((work, workIndex) => {
                            return <li className="list-group-item" key={workIndex} data-work-index={workIndex}>{work}</li>
                        })}
                    </ul> :
                    <table className="table table-hover">
                        <thead>
                            <tr><th>Work name</th></tr>
                        </thead>
                        <tbody>
                            {this.props.works.map((work, workIndex) => {
                                return (
                                    <tr key={workIndex}>
                                        <td>{work}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
    _handleViewRadioChange(event) {
        const mode = event.target.dataset.mode;
        if (mode) {
            this.props.changeListView(mode);
        }
    }
    static mapStateToProps(state) {
        return {
            works: state.todoList.works,
            viewMode: state.todoList.todoListView
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({
            changeListView: actions.changeTodoListView
        }, dispatch);
    }
}

export default connect(TodoList.mapStateToProps, TodoList.matchDispatchToProps)(TodoList);