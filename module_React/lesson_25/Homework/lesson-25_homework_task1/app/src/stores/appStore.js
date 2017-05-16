import { EventEmitter } from "events";
import dispatcher from "../dispatcher/appDispatcher.js";

class AppStores extends EventEmitter {
    handleActions(action) {
        if (action.type === "ADD_PLAN") {
            this._checkPlansExistence();
            this._plans.push(action.newPlanName);
            this.emit("plansWasUpdated");
        }
        if (action.type === "DELETE_PLAN") {
            this._checkPlansExistence();
            this._plans.splice(action.planIndex, 1);
            this.emit("plansWasUpdated");
        }
    }
    getPlans() {
        this._checkPlansExistence();
        return this._plans;
    }
    _checkPlansExistence() {
        if (!Array.isArray(this._plans)) {
            this._plans = [];
        }
    }
}

const appStores = new AppStores();
dispatcher.register(appStores.handleActions.bind(appStores));
export default appStores;