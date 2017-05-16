import dispatcher from "../dispatcher/appDispatcher.js";

const appActions = {
    addNewPlan(newPlanName) {
        dispatcher.dispatch({
            type: "ADD_PLAN",
            newPlanName
        });
    },
    deletePlan(planIndex) {
        dispatcher.dispatch({
            type: "DELETE_PLAN",
            planIndex
        });
    },
    setSearchQuery(searchQuery) {
        dispatcher.dispatch({
            type: "SET_SEARCH_QUERY",
            searchQuery
        });
    }
};

export default appActions;