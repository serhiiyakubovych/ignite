export function changeTodoListView(mode) {
    return {
        type: "CHANGE_TODOLIST_VIEW",
        mode
    };
}

export function storeTodoListWorkInput(inputedWorkToStore) {
    return {
        type: "STORE_TODOLIST_WORK_INPUT",
        inputedWorkToStore
    };
}

export function startTodoListWorkEditing(editedWorkIndex) {
    return {
        type: "START_TODOLIST_WORK_EDITING",
        editedWorkIndex
    };
}

export function updateTodoListEditedWork(newWorkValue) {
    return {
        type: "UPDATE_TODOLIST_EDITED_WORK",
        newWorkValue
    }
}

export function endTodoListWorkEditing() {
    return {
        type: "END_TODOLIST_WORK_EDITING"
    };
}

export function deleteTodoListEditedWork() {
    return {
        type: "DELETE_TODOLIST_EDITED_WORK"
    };
}

export function addTodoListWork(newWork) {
    return {
        type: "ADD_TODOLIST_WORK",
        newWork
    };
}

export function makeVoteForApplication(newVote) {
    return {
        type: "MAKE_VOTE_FOR_APPLICATION",
        newVote
    };
}