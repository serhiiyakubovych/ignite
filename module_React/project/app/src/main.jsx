/**
 * SPA, created by using React
 * Educational project of React module
 * Author: Serhii Yakubovych
 */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { default as thunk } from "redux-thunk";

import { fetchData } from "./actions/async.js";

import pageSliderReducer from "./reducers/pageSliderReducer.js";
import aboutReducer from "./reducers/aboutReducer.js";
import portfolioReducer from "./reducers/portfolioReducer.js";
import teamReducer from "./reducers/teamReducer.js";
import newsReducer from "./reducers/newsReducer.js";
import feedbackReducer from "./reducers/feedbackReducer.js";

import App from "./components/app.jsx";

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
    pageSlider: pageSliderReducer,
    about: aboutReducer,
    portfolio: portfolioReducer,
    team: teamReducer,
    news: newsReducer,
    feedback: feedbackReducer
});
const appStore = createStore(reducers, middleware);
appStore.dispatch(fetchData("slides", "./data/slides.json"));
appStore.dispatch(fetchData("works", "./data/works.json"));
appStore.dispatch(fetchData("members", "./data/members.json"));
appStore.dispatch(fetchData("news", "./data/news.json"));
appStore.dispatch(fetchData("reviews", "./data/reviews.json"));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);