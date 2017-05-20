import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions/actions.js";

class About extends React.Component {
    constructor(props) {
        super(props);
        this._handleVoteButtonClick = this._handleVoteButtonClick.bind(this);
    }
    render() {
        return (
            <div className="container">
                <h1>How much do you like our application ?</h1>
                <h3>The average mark is: <span className="badge">{this.props.averageMark}</span></h3>
                <div ref="radios">
                    <div className="radio">
                        <label>
                            <input name="mark" type="radio" value="1"/> 1
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input name="mark" type="radio" value="2"/> 2
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input name="mark" type="radio" value="3"/> 3
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input name="mark" type="radio" value="4"/> 4
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input name="mark" type="radio" value="5"/> 5
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this._handleVoteButtonClick}>Vote</button>
            </div>
        );
    }
    _handleVoteButtonClick() {
        const newVote = this.refs.radios.querySelector("[name=mark]:checked").value;
        this.props.makeVote(newVote);
    }
    static mapStateToProps(state) {
        return {
            averageMark: state.about.averageMark
        };
    }
    static matchDispachToProps(dispatch) {
        return bindActionCreators({
            makeVote: actions.makeVoteForApplication
        }, dispatch);
    }
}

export default connect(About.mapStateToProps, About.matchDispachToProps)(About);