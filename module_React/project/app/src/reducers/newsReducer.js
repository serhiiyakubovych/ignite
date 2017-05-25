const defaultState = {
    newsList: [],
    visibleCount: 8,
    showMoreCount: 8
};

export default function newsReducer(state = defaultState, action) {
    if (action.type === "RECEIVE_NEWS") {
        return Object.assign({}, state, {newsList: [...action.news]});
    }
    if (action.type === "SHOW_MORE_NEWS") {
        return Object.assign({}, state, {visibleCount: state.visibleCount + state.showMoreCount});
    }
    return state;
}