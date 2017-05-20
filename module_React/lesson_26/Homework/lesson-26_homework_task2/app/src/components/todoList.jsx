import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions.js";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this._handleViewCheckboxChange = this._handleViewCheckboxChange.bind(this);
        this._handleClickOnWork = this._handleClickOnWork.bind(this);
        this._handleWorkInput = this._handleWorkInput.bind(this);
        this._handleCancleButtonClick = this._handleCancleButtonClick.bind(this);
        this._handleDeleteWorkButtonClick = this._handleDeleteWorkButtonClick.bind(this);
        this._handleAddWorkButtonClick = this._handleAddWorkButtonClick.bind(this);
    }
    render() {
        return (
            <div className="container">
                <h1>Todo List</h1>
                <h3><small>(Click on a work to edit)</small></h3>
                <div>
                    <div className="radio">
                        <label>
                            <input name="view_mode" type="radio" data-mode="table" 
                                onChange={this._handleViewCheckboxChange}/>
                            As a table
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input name="view_mode" type="radio" defaultChecked data-mode="list" 
                                onChange={this._handleViewCheckboxChange}/>
                            As a list
                        </label>
                    </div>
                </div>
                <ul className="list-group" ref="worksList" onClick={this._handleClickOnWork}>
                    {(this.props.viewMode === "list") ?
                        this.props.works.map((work, workIndex) => {
                            return <li className="list-group-item" key={workIndex} data-work-index={workIndex}>{work}</li>
                        }) :
                        <table className="table table-hover">
                            <thead>
                                <tr><th>Work name</th></tr>
                            </thead>
                            <tbody>
                                {this.props.works.map((work, workIndex) => {
                                    return (
                                        <tr key={workIndex}>
                                            <td data-work-index={workIndex}>{work}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    }
                </ul>
                <div className="input-group">
                    {(this.props.currentEditedWork === null) ? "" :
                        <div className="input-group-btn">
                            <button className="btn btn-primary"
                                onClick={this._handleCancleButtonClick}>Cancel edit</button>
                            <button className="btn btn-danger" 
                                onClick={this._handleDeleteWorkButtonClick}>Delete work</button>
                        </div>
                    }
                    <input className="form-control" type="text" placeholder="Enter new work" 
                        ref="newWork" value={this.props.currentWorkInput} onChange={this._handleWorkInput}/>
                    <div className="input-group-btn">
                        <button className="btn btn-primary" onClick={this._handleAddWorkButtonClick}>
                            {(this.props.currentEditedWork === null) ? "Add" : "Save"} work
                        </button>                        
                    </div>
                </div>
            </div>
        );
    }
    _handleViewCheckboxChange(event) {
        const mode = event.target.dataset.mode;
        if (mode) {
            this.props.changeListView(mode);
        }
    }
    _handleClickOnWork(event) {
        const workElem = event.target;
        const workIndex = workElem.dataset.workIndex;
        if (workIndex === undefined) {
            return;
        }

        TodoList.turnOffOtherActiveWorks(this.refs.worksList);
        workElem.classList.add("active");

        this.props.startWorkEditing(workIndex);
    }
    _handleWorkInput(event) {
        this.props.storeWorkInput(event.target.value);
    }
    _handleCancleButtonClick() {
        this.props.endWorkEditing();
        TodoList.turnOffOtherActiveWorks(this.refs.worksList);
    }
    _handleDeleteWorkButtonClick() {
        this.props.deleteEditedWork();
        this.props.endWorkEditing();
        TodoList.turnOffOtherActiveWorks(this.refs.worksList);
    }
    _handleAddWorkButtonClick() {
        const inputedWorkValue = this.refs.newWork.value;

        if (this.props.currentEditedWork === null) {
            this.props.addWork(inputedWorkValue);
        } else {
            this.props.updateEditedWork(inputedWorkValue);
            this.props.endWorkEditing();
            TodoList.turnOffOtherActiveWorks(this.refs.worksList);
        }        
    }

    static turnOffOtherActiveWorks(worksList) {
        let prevEditedWorks = worksList.querySelectorAll(".active[data-work-index]");
        for (let i = 0; i < prevEditedWorks.length; i++) {
            prevEditedWorks[i].classList.remove("active");
        }
    }
    static mapStateToProps(state) {
        return {
            works: state.works,
            viewMode: state.todoListView,
            currentEditedWork: state.currentEditedWork,
            currentWorkInput: state.currentWorkInput
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({
            changeListView: actions.changeTodoListView,
            storeWorkInput: actions.storeTodoListWorkInput,
            startWorkEditing: actions.startTodoListWorkEditing,
            updateEditedWork: actions.updateTodoListEditedWork,
            endWorkEditing: actions.endTodoListWorkEditing,
            deleteEditedWork: actions.deleteTodoListEditedWork,
            addWork: actions.addTodoListWork
        }, dispatch);
    }
}

export default connect(TodoList.mapStateToProps, TodoList.matchDispatchToProps)(TodoList);