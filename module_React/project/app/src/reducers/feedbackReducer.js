const defaultState = {
    reviews: []
};

export default function feedbackReducer(state = defaultState, action) {
    if (action.type === "RECEIVE_REVIEWS") {
        return Object.assign({}, state, {reviews: action.reviews});
    }
    if (action.type === "ADD_FEEDBACK_REVIEW") {
        const newReview = Object.assign({}, action.review),
            newReviews = [...state.reviews];
        newReviews.push(newReview);
        return Object.assign({}, state, {reviews: [...newReviews]});
    }
    if (action.type === "REMOVE_FEEDBACK_REVIEW") {
        const newReviews = [...state.reviews];
        newReviews.splice(action.reviewIndex, 1);
        return Object.assign({}, state, {reviews: [...newReviews]});
    }
    return state;
}