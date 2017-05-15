import React from "react";

import * as appActions from "../actions/appActions.js";
import { appStore } from "../stores/appStore";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appBlockColor: "#fff"
        };
    }
    componentWillMount() {
        appStore.on("appBlockStyleChanged", () => {
            this.setState({ appBlockColor: appStore.getRandomColor() });
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleChangeStyleButton}>Change app block style</button>
                <div className="appBlock" style={{ color: this.state.appBlockColor }}>App block</div>
            </div>
        );
    }
    handleChangeStyleButton() {
        appActions.changeAppBlockStyle();
    }
}