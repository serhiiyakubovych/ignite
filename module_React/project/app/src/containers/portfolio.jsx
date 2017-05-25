import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PortfolioView from "../components/portfolio.jsx";
import * as actions from "../actions/actions.js";

class Portfolio extends React.Component {
    render() {
        const viewSettings = {
            showAll: this._showCategory.bind(this, "*"),
            showGraphicDesign: this._showCategory.bind(this, "Graphic Design"),
            showWebDesign: this._showCategory.bind(this, "Web Design"),
            showLandings: this._showCategory.bind(this, "Landing pages"),
            showWordpress: this._showCategory.bind(this, "Wordpress"),
            works: this.props.works.filter((work) => {
                return ((this.props.currentCategory === "*") || 
                        (work.category === this.props.currentCategory));
            })
        };
        return <PortfolioView {...viewSettings}/>;
    }
    _showCategory(category, event) {
        const currentTab = $(event.target);
        $(currentTab).siblings().filter(".active").removeClass("active");
        $(currentTab).addClass("active");
        this.props.showCategory(category);
    }
    static mapStateToProps(state) {
        return {
            currentCategory: state.portfolio.currentCategory,
            works: state.portfolio.works
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({
            showCategory: actions.showPortfolioCategory
        }, dispatch);
    }
}

export default connect(Portfolio.mapStateToProps, Portfolio.matchDispatchToProps)(Portfolio);