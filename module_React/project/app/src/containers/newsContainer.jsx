import React from "react";
import { hashHistory } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NewsContainerView from "../components/newsContainer.jsx";
import * as actions from "../actions/actions.js";

class NewsContainer extends React.Component {
    render() {
        const viewSettings = {
            newsList: this.props.newsList,
            visibleCount: this.props.visibleCount,
            goToNews: this._goToNews.bind(this),
            loadMoreNews: this._handleLoadMoreButtonClick.bind(this)
        };
        return <NewsContainerView {...viewSettings} />;
    }
    _goToNews(news) {
        hashHistory.push(`news/${news.id}`);
    }
    _handleLoadMoreButtonClick() {
        this.props.showMoreNews();
    }
    static mapStateToProps(state) {
        return {
            newsList: state.news.newsList,
            visibleCount: state.news.visibleCount
        };
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({
            showMoreNews: actions.showMoreNews
        }, dispatch);
    }
}

export default connect(NewsContainer.mapStateToProps, NewsContainer.matchDispatchToProps)(NewsContainer);