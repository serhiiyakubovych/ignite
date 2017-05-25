const defaultState = {
    members: []
};

export default function teamReducer(state = defaultState, action) {
    if (action.type === "RECEIVE_MEMBERS") {
        return Object.assign({}, state, {members: action.members});
    }
    return state;
}