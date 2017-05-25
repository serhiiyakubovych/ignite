import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import AboutView from "../components/about.jsx";

import * as actions from "../actions/actions.js";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const viewSettings = {
            showHistory: this._changeTab.bind(this, "history"),
            showBiography: this._changeTab.bind(this, "biography"),
            showSkills: this._changeTab.bind(this, "skills"),
            currentTab: this.props.currentTab
        };
        return (
            <AboutView {...viewSettings}/>
        );
    }
    _changeTab(tabName, event) {
        const currentTab = $(event.target);
        $(currentTab).siblings().filter(".active").removeClass("active");
        $(currentTab).addClass("active");
        this.props.changeCurrentTabTo(tabName);
    }
    static mapStateToProps(state) {
        return {
            currentTab: state.about.currentTab
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({
            changeCurrentTabTo: actions.setAboutTab
        }, dispatch);
    }
}

export default connect(About.mapStateToProps, About.matchDispatchToProps)(About);