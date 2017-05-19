export function appReducer(state = "", action) {
    if (action.type === "CHANGE_TITLE") {
        return action.newTitle;
    }
}