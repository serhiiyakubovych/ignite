import React from "react";
import { Link } from "react-router";

export default class NewsBlock extends React.Component {
    render() {
        return (
            <div className="news-blocks container">
                <div className="panel panel-primary">
                    <div className="panel-heading">{this.props.news.title}s</div>
                    <div className="panel-body">
                        <div>{this.props.news.date.day} {this.props.news.date.month}</div>
                        <Link to="">&larr; Return back</Link>
                    </div>
                </div>
            </div>
        );
    }
}