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

export function changeContactInputedName(newInputedName) {
    return {
        type: "CHANGE_CONTACT_INPUTED_NAME",
        newInputedName
    }
}
export function changeContactInputedEmail(newInputedEmail) {
    return {
        type: "CHANGE_CONTACT_INPUTED_EMAIL",
        newInputedEmail
    }
}
export function changeContactInputedMessage(newInputedMessage) {
    return {
        type: "CHANGE_CONTACT_INPUTED_MESSAGE",
        newInputedMessage
    }
}