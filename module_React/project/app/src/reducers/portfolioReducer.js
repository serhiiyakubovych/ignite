const defaultState = {
    works: [],
    currentCategory: "*"
};

export default function portfolioReducer(state = defaultState, action) {
    if (action.type === "SHOW_PORTFOLIO_CATEGORY") {
        return Object.assign({}, state, {currentCategory: action.category});
    }
    if (action.type === "RECEIVE_WORKS") {
        return Object.assign({}, state, {works: [...action.works]});
    }
    return state;
}