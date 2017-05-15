import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher.js";

class AppStore extends EventEmitter {
    handleActions(action) {
        if (action.type === "COMPUTE_ADDITION") {
            this._calculationResult = +action.argA + +action.argB;
            this.emit("resultWasComputed");
        }
        if (action.type === "COMPUTE_SUBTRACTION") {
            this._calculationResult = action.argA - action.argB;
            this.emit("resultWasComputed");
        }
        if (action.type === "COMPUTE_MULTIPLICATION") {
            this._calculationResult = action.argA * action.argB;
            this.emit("resultWasComputed");
        }
        if (action.type === "COMPUTE_DIVISION") {
            this._calculationResult = action.argA / action.argB;
            this.emit("resultWasComputed");
        }
    }
    getCalculationResult() {
        return this._calculationResult;
    }
}

const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;