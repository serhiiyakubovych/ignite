const defaultState = {
    works: [],
    todoListView: "list",
    currentEditedWork: null,
    currentWorkInput: ""
};

export function appReducer(state = defaultState, action) {
    if (action.type === "CHANGE_TODOLIST_VIEW") {
        return Object.assign({}, state, {todoListView: action.mode});
    }
    if (action.type === "STORE_TODOLIST_WORK_INPUT") {
        return Object.assign({}, state, {currentWorkInput: action.inputedWorkToStore});
    }
    if (action.type === "START_TODOLIST_WORK_EDITING") {
        return Object.assign({}, state, {
            currentEditedWork: action.editedWorkIndex,
            currentWorkInput: state.works[action.editedWorkIndex]
        });
    }
    if (action.type === "UPDATE_TODOLIST_EDITED_WORK") {
        if (state.currentEditedWork === null) {
            return;
        }
        const newWorksArray = [...state.works];
        newWorksArray[state.currentEditedWork] = action.newWorkValue;
        return Object.assign({}, state, {works: [...newWorksArray]});
    }
    if (action.type === "END_TODOLIST_WORK_EDITING") {
        return Object.assign({}, state, {currentEditedWork: null, currentWorkInput: ""});
    }
    if (action.type === "DELETE_TODOLIST_EDITED_WORK") {
        if (state.currentEditedWork === null) {
            return;
        }
        const newWorksArray = [...state.works];
        newWorksArray.splice(state.currentEditedWork, 1);
        return Object.assign({}, state, {works: [...newWorksArray]});
    }
    if (action.type === "ADD_TODOLIST_WORK") {
        return Object.assign({}, state, {works: [...state.works, action.newWork]});
    }
    if (action.type === "RECEIVE_WORKS") {
        return Object.assign({}, state, {works: [...action.works]});
    }
    return state;
}