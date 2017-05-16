import React from "react";

import appAction from "../actions/appActions.js";
import appStore from "../stores/appStore.js";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: []
        };
        this._handleAddPlanButtonClick = this._handleAddPlanButtonClick.bind(this);
    }
    componentWillMount() {
        appStore.on("plansWasUpdated", () => {
            this.setState({
                plans: appStore.getPlans()
            });
        });
    }
    render() {
        return (
            <div className="container">
                <input className="form-control" type="text" ref="newPlanName"/>
                <button className="btn btn-primary" onClick={this._handleAddPlanButtonClick}>Add</button>
                <ul>
                    {this.state.plans.map((plan, planIndex) => {
                        return (
                            <li key={planIndex}>
                                {plan}
                                <button className="btn btn-danger"
                                        onClick={this._handleDeletePlanButtonClick.bind(null, planIndex)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    _handleAddPlanButtonClick() {
        appAction.addNewPlan(this.refs.newPlanName.value);
    }
    _handleDeletePlanButtonClick(planIndex) {
        appAction.deletePlan(planIndex);
    }
}