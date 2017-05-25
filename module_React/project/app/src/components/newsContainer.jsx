import React from "react";

export default class News extends React.Component {
    render() {
        const visibleNews = this.props.newsList.slice(0, this.props.visibleCount);
        return (
            <div>
                <div className="news-blocks container">
                    {visibleNews.map((news, newsIndex) => {
                        return (
                            <div key={newsIndex} className="news-block col-md-3" 
                                onClick={this.props.goToNews.bind(this, news)}>
                                <div className="news-date">
                                    <p>{news.date.day}</p>
                                    <p>{news.date.month}</p>
                                </div>
                                <div className="news-photo">
                                    <img src={news.imgSrc}/>
                                </div>
                                <div className="news-title">{news.title}</div>
                            </div>
                        );
                    })}
                </div>
                <button className="ham-button" onClick={this.props.loadMoreNews}>
                    <i className="fa fa-plus"></i> Load more
                </button>
            </div>
        );
    }
}