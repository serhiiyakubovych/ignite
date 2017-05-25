import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NewsBlockView from "../components/newsBlock.jsx";

class NewsBlock extends React.Component {
    render() {
        const currentNews = this.props.newsList.find((news) => +news.id === +this.props.params.id);
        const viewSettings = {
            news: currentNews
        };
        return <NewsBlockView {...viewSettings} />
    }
    static mapStateToProps(state) {
        return {
            newsList: state.news.newsList
        }
    }
    static matchDispatchToProps(dispatch) {
        return bindActionCreators({}, dispatch);
    }
}

export default connect(NewsBlock.mapStateToProps, NewsBlock.matchDispatchToProps)(NewsBlock);