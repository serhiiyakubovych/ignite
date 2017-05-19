export function changeTaskTitle(newTitle) {
    return {
        type: "CHANGE_TITLE",
        newTitle
    };
}