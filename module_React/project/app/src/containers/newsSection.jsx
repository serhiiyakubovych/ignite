import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import NewsContainer from "./newsContainer.jsx";
import NewsBlock from "./newsBlock.jsx";

export default class News extends React.Component {
    render() {
        return (
            <section id="news" className="news">
                <h2 className="section-title">Breaking News</h2>
                <Router history={hashHistory}>
                    <Route path="/">
                        <IndexRoute component={NewsContainer} />
                        <Route path="news/:id" component={NewsBlock} />
                        <Route path="*" component={NewsContainer} />
                    </Route>
                </Router>
            </section>
        );
    };
}