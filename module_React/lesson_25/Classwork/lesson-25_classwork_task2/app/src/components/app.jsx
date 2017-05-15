import React from "react";

import appActions from "../actions/appActions";
import appStore from "../stores/appStore";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageTime: 0
        };
    }
    componentWillMount() {
        appStore.on("updateTimer", () => {
            this.setState({
                currentPageTime: appStore.getCurrentTime()
            });
        });
    }
    render() {
        return (
            <div className="container">
                <div>
                    <button className="btn btn-primary btn-block" onClick={this._handleStartTimerButton}>Start</button>
                    <button className="btn btn-warning btn-block" onClick={this._handleStopTimerButton}>Stop</button>
                    <button className="btn btn-danger btn-block" onClick={this._handleResetTimerButton}>Reset</button>
                </div>
                <div className="currentTime">
                    <span>{this.state.currentPageTime}</span>
                </div>
            </div>
        );
    }
    _handleStartTimerButton() {
        appActions.startTimer();
    }
    _handleStopTimerButton() {
        appActions.stopTimer();
    }
    _handleResetTimerButton() {
        appActions.resetTimer();
    }
}