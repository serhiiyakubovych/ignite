const defaultState = {
    currentTab: ""
};

export default function aboutReducer(state = defaultState, action) {
    if (action.type === "SET_ABOUT_TAB") {
        return Object.assign({}, state, {currentTab: action.tabName});
    }
    return state;
}