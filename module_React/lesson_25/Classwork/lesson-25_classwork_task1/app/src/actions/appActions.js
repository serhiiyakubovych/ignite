import dispatcher from "../dispatcher/dispatcher.js";

export function changeAppBlockStyle() {
    dispatcher.dispatch({
        type: "CHANGE_APP_BLOCK_STYLE"
    });
}