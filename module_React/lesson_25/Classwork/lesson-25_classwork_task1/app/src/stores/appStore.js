import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher.js";

class AppStore extends EventEmitter {
    handleActions(action) {
        switch (action.type) {
            case "CHANGE_APP_BLOCK_STYLE": {
                this.setRandomColor();
                this.emit("appBlockStyleChanged");
                break;
            }
        }
    }
    setRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this._randomColor = color;
    }
    getRandomColor() {
        if (!this._randomColor) {
            this.setRandomColor();
        }
        return this._randomColor;
    }
}

export const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));
