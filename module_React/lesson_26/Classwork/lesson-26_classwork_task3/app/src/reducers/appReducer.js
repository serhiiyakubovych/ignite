const defaultState = {
    users: [],
    isUsersVisible: false
};

export default function appReducer(state = defaultState, action) {
    if (action.type === "TOGGLE_USERS_LIST") {
        return Object.assign({}, state, {isUsersVisible: !state.isUsersVisible});
    }
    if (action.type === "RECEIVE_USERS") {
        return Object.assign({}, state, {users: action.payload});
    }
}