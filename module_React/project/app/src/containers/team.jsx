import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import TeamView from "../components/team.jsx";

class Team extends React.Component {
    render() {
        const viewSettings = {
            members: this.props.members
        };
        return (
            <TeamView {...viewSettings}/>
        );
    }
    static mapStateToProps(state) {
        return {
            members: state.team.members
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({}, dispatch);
    }
}

export default connect(Team.mapStateToProps, Team.matchDispatchToProps)(Team);