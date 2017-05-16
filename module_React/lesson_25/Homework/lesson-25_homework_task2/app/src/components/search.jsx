import React from "react";

import appActions from "../actions/appActions";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSearchButtonClick = this._handleSearchButtonClick.bind(this);
    }
    render() {
        return (
            <div className="container">
                <input className="form-control" type="text" ref="searchQuery"/>
                <button className="btn btn-primary" onClick={this._handleSearchButtonClick}>Search</button>
            </div>
        );
    }
    _handleSearchButtonClick() {
        appActions.setSearchQuery(this.refs.searchQuery.value);
    }
}