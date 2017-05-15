import { EventEmitter } from "events";
import dispatcher from "../dispatcher/appDispatcher";

class AppStore extends EventEmitter {
    handleActions(action) {
        if (action.type === "START_TIMER") {
            this._startTimeout();
        }
        if (action.type === "STOP_TIMER") {
            this._stopTimeout();
        }
        if (action.type === "RESET_TIMER") {
            this._resetTimeout();
        }
    }
    getCurrentTime() {
        return this._currentTime;
    }
    _startTimeout() {
        if (this._timeout) {
            return;
        }
        this._timeout = setInterval(() => {
            this._updateCurrentTime();
            this.emit("updateTimer");
        }, 1000);
    }
    _stopTimeout() {
        if (!this._timeout) {
            return;
        }
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    _resetTimeout() {
        this._currentTime = 0;
        this.emit("updateTimer");
    }
    _updateCurrentTime() {
        if (this._currentTime === undefined) {
            this._currentTime = 0;
            return;
        }
        this._currentTime += 1;
    }
}

const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;