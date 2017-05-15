import React from "react";

import appActions from "../actions/appActions.js";
import appStore from "../stores/appStore.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculationResult: 0
        };
        this._handleAdditionButton = this._handleAdditionButton.bind(this);
        this._handleSubtractionButton = this._handleSubtractionButton.bind(this);
        this._handleMultiplicationButton = this._handleMultiplicationButton.bind(this);
        this._handleDivisionButton = this._handleDivisionButton.bind(this);
    }
    componentWillMount() {
        appStore.on("resultWasComputed", () => {
            this.setState({
                calculationResult: appStore.getCalculationResult()
            });
        })
    }
    render() {
        return (
            <div className="container">
                <div>
                    <input type="text" className="form-control" ref="firstCalcArg"/>
                    <input type="text" className="form-control" ref="secondCalcArg"/>
                </div>
                <div>
                    <button className="btn btn-primary btn-block" onClick={this._handleAdditionButton}>+</button>
                    <button className="btn btn-primary btn-block" onClick={this._handleSubtractionButton}>-</button>
                    <button className="btn btn-primary btn-block" onClick={this._handleMultiplicationButton}>*</button>
                    <button className="btn btn-primary btn-block" onClick={this._handleDivisionButton}>/</button>
                </div>
                <div>
                    <p>Result: <b>{this.state.calculationResult}</b></p>
                </div>
            </div>
        );
    }
    _handleAdditionButton() {
        appActions.computeAddition(this.refs.firstCalcArg.value, this.refs.secondCalcArg.value);
    }
    _handleSubtractionButton() {
        appActions.computeSubtraction(this.refs.firstCalcArg.value, this.refs.secondCalcArg.value);
    }
    _handleMultiplicationButton() {
        appActions.computeMultiplication(this.refs.firstCalcArg.value, this.refs.secondCalcArg.value);
    }
    _handleDivisionButton() {
        appActions.computeDivision(this.refs.firstCalcArg.value, this.refs.secondCalcArg.value);
    }
}