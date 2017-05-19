const defaultUsers = [
    { name: "John Snow", age: 40 },
    { name: "John Doe", age: 45 },
    { name: "John Petrou", age: 50 },
    { name: "John Don", age: 55 },
    { name: "John Alone", age: 60 }
];
const defaultState = {
    users: defaultUsers,
    isUsersVisible: false
};

export default function appReducer(state = defaultState, action) {
    if (action.type === "TOGGLE_USERS_LIST") {
        return Object.assign({}, state, { isUsersVisible: !state.isUsersVisible });
    }
}