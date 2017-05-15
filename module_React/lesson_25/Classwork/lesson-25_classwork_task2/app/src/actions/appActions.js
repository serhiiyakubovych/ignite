import dispatcher from "../dispatcher/appDispatcher";

const appActions = {
    startTimer() {
        dispatcher.dispatch({
            type: "START_TIMER"
        });
    },
    stopTimer() {
        dispatcher.dispatch({
            type: "STOP_TIMER"
        });
    },
    resetTimer() {
        dispatcher.dispatch({
            type: "RESET_TIMER"
        });
    }
};

export default appActions;