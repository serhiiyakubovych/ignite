export function setAboutTab(tabName) {
    return {
        type: "SET_ABOUT_TAB",
        tabName
    };
}

export function showPortfolioCategory(category) {
    return {
        type: "SHOW_PORTFOLIO_CATEGORY",
        category
    }
}

export function showMoreNews() {
    return {
        type: "SHOW_MORE_NEWS"
    };
}

export function addFeedbackReview(review) {
    return {
        type: "ADD_FEEDBACK_REVIEW",
        review
    };
}

export function removeFeedbackReview(reviewIndex) {
    return {
        type: "REMOVE_FEEDBACK_REVIEW",
        reviewIndex
    };
}