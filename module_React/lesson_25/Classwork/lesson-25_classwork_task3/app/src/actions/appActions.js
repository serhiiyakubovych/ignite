import dispatcher from "../dispatcher/dispatcher.js";

const appActions = {
    computeAddition(argA, argB) {
        dispatcher.dispatch({
            type: "COMPUTE_ADDITION",
            argA,
            argB
        });
    },
    computeSubtraction(argA, argB) {
        dispatcher.dispatch({
            type: "COMPUTE_SUBTRACTION",
            argA,
            argB
        });
    },
    computeMultiplication(argA, argB) {
        dispatcher.dispatch({
            type: "COMPUTE_MULTIPLICATION",
            argA,
            argB
        });
    },
    computeDivision(argA, argB) {
        dispatcher.dispatch({
            type: "COMPUTE_DIVISION",
            argA,
            argB
        });
    }
};

export default appActions;